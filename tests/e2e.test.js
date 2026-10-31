'use strict';
/**
 * Browser end-to-end smoke tests without dependencies: a tiny static server + an installed Chrome/Chromium
 * driven over the Chrome DevTools Protocol (Node's built-in WebSocket, Node >= 22).
 * Skipped automatically when no Chrome is found (set CHROME_PATH to point at one).
 */
const test = require('node:test');
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const { ROOT } = require('./helpers');

const CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
].filter(Boolean);
const CHROME = CANDIDATES.find((p) => fs.existsSync(p));
const canRun = CHROME && typeof WebSocket === 'function';

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' };

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let file = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404);
      res.end('not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

async function launchChrome() {
  const userDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fp-e2e-'));
  const proc = spawn(CHROME, [
    '--headless=new', '--no-first-run', '--no-default-browser-check', '--disable-gpu', '--no-sandbox',
    '--remote-debugging-port=0', '--user-data-dir=' + userDir, 'about:blank'
  ], { stdio: 'ignore' });
  const portFile = path.join(userDir, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !fs.existsSync(portFile); i++) await new Promise((r) => setTimeout(r, 100));
  const [port] = fs.readFileSync(portFile, 'utf8').split('\n');
  const targets = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json();
  const page = targets.find((t) => t.type === 'page');
  return { proc, userDir, wsUrl: page.webSocketDebuggerUrl };
}

function cdpClient(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    } else if (msg.method) {
      listeners.forEach((fn) => fn(msg));
    }
  };
  const ready = new Promise((resolve) => { ws.onopen = resolve; });
  return {
    ready,
    send: (method, params) => new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params: params || {} }));
    }),
    on: (fn) => listeners.push(fn),
    close: () => ws.close()
  };
}

async function evaluate(cdp, expression) {
  const res = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (res.exceptionDetails) throw new Error(res.exceptionDetails.text + ' ' + JSON.stringify(res.exceptionDetails.exception || {}));
  return res.result.value;
}

test('app loads and every route renders without errors', { skip: !canRun && 'Chrome not found', timeout: 90000 }, async () => {
  const server = await startServer();
  const base = 'http://127.0.0.1:' + server.address().port + '/';
  const chrome = await launchChrome();
  const cdp = cdpClient(chrome.wsUrl);
  const exceptions = [];
  try {
    await cdp.ready;
    cdp.on((msg) => {
      if (msg.method === 'Runtime.exceptionThrown') exceptions.push(msg.params.exceptionDetails.text + ' ' + ((msg.params.exceptionDetails.exception || {}).description || ''));
    });
    await cdp.send('Runtime.enable');
    await cdp.send('Page.enable');
    await cdp.send('Page.navigate', { url: base });
    await evaluate(cdp, 'new Promise((r) => { const t = setInterval(() => { if (window.App && App.Router && document.querySelector("#app-view h2")) { clearInterval(t); r(true); } }, 100); })');

    const routes = ['dashboard', 'learn', 'vocabulary', 'grammar', 'reading', 'listening', 'speaking', 'writing', 'flashcards', 'quizzes', 'progress', 'settings'];
    const result = await evaluate(cdp, `(async () => {
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      const out = {};
      for (const r of ${JSON.stringify(routes)}) {
        location.hash = r;
        for (let i = 0; i < 60; i++) {
          await wait(100);
          if (App.Router.currentRoute === r && document.querySelector('#app-view h2, #app-view h3') && !document.querySelector('#app-view .spinner')) break;
        }
        out[r] = (document.querySelector('#app-view h2, #app-view h3') || {}).textContent || '';
      }
      return out;
    })()`);
    routes.forEach((r) => assert.ok(result[r].trim().length > 0, 'route ' + r + ' rendered no heading'));

    const listeningCount = await evaluate(cdp, 'App.Listening.getAllTopics().length');
    assert.strictEqual(listeningCount, 90, 'all 90 listening topics available');
    assert.deepStrictEqual(exceptions, [], 'uncaught exceptions: ' + exceptions.join(' | '));
  } finally {
    cdp.close();
    chrome.proc.kill();
    server.close();
    try { fs.rmSync(chrome.userDir, { recursive: true, force: true }); } catch (e) {}
  }
});

test('guest progress survives a reload', { skip: !canRun && 'Chrome not found', timeout: 60000 }, async () => {
  const server = await startServer();
  const base = 'http://127.0.0.1:' + server.address().port + '/';
  const chrome = await launchChrome();
  const cdp = cdpClient(chrome.wsUrl);
  try {
    await cdp.ready;
    await cdp.send('Runtime.enable');
    await cdp.send('Page.enable');
    const ready = 'new Promise((r) => { const t = setInterval(() => { if (window.App && App.Router && document.querySelector("#app-view h2")) { clearInterval(t); r(true); } }, 100); })';
    await cdp.send('Page.navigate', { url: base });
    await evaluate(cdp, ready);
    await evaluate(cdp, 'App.Storage.set("progress.level", "B2"); App.Progress.recordActivity({ title: "e2e" }); true');
    await cdp.send('Page.reload');
    await new Promise((r) => setTimeout(r, 500));
    await evaluate(cdp, ready);
    const state = await evaluate(cdp, '({ level: App.Storage.get("progress.level"), streak: App.Storage.get("progress.streak"), header: document.getElementById("topbar-level-value").textContent })');
    assert.deepStrictEqual(state, { level: 'B2', streak: 1, header: 'B2' });
  } finally {
    cdp.close();
    chrome.proc.kill();
    server.close();
    try { fs.rmSync(chrome.userDir, { recursive: true, force: true }); } catch (e) {}
  }
});
