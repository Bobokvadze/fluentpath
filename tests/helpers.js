'use strict';
// Test helpers: load browser scripts into a Node vm with a minimal fake window/DOM.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const ROOT = path.join(__dirname, '..');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// vm objects come from another realm, so compare structurally via JSON
const same = (actual, expected, msg) => assert.strictEqual(JSON.stringify(actual), JSON.stringify(expected), msg);

function makeLocalStorage(initial) {
  const store = new Map(Object.entries(initial || {}));
  return {
    store,
    api: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
      key: (i) => Array.from(store.keys())[i],
      get length() { return store.size; }
    }
  };
}

function makeFakeSupabase(opts, log) {
  return {
    auth: {
      getSession: () => Promise.resolve({ data: { session: opts.session || null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
      signOut: () => Promise.resolve({})
    },
    from: () => ({
      select: () => ({ eq: () => ({ maybeSingle: () => Promise.resolve({ data: opts.row || null, error: null }) }) }),
      upsert: (payload) => {
        log.upserts.push(JSON.parse(JSON.stringify(payload)));
        return Promise.resolve({ error: log.upsertError });
      }
    })
  };
}

/**
 * Loads the given scripts (paths relative to repo root) in one shared fake window.
 * opts: { localStorage, session, row, upsertError, app }
 */
function loadScripts(files, opts) {
  opts = opts || {};
  const ls = makeLocalStorage(opts.localStorage);
  const log = { toasts: [], upserts: [], upsertError: opts.upsertError || null, listeners: {} };
  const noopEl = () => ({
    classList: { add() {}, remove() {}, contains() { return false; }, toggle() {} },
    setAttribute() {}, addEventListener() {}, appendChild() {}, querySelector() { return null; }, querySelectorAll() { return []; }
  });
  const document = {
    readyState: 'complete',
    visibilityState: 'visible',
    addEventListener: () => {},
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: noopEl,
    body: noopEl(),
    head: noopEl()
  };
  const window = {
    localStorage: ls.api,
    document,
    navigator: { onLine: true },
    addEventListener: (ev, fn) => { (log.listeners[ev] = log.listeners[ev] || []).push(fn); },
    setTimeout, clearTimeout,
    supabase: { createClient: () => makeFakeSupabase(opts, log) },
    App: Object.assign({
      SupabaseConfig: { url: 'https://abcref.supabase.co', anonKey: 'test' },
      Storage: {},
      UI: { toast: (m, t) => log.toasts.push(t + ':' + m), applyTheme() {}, escapeHTML: (s) => String(s), playSound() {}, updateTopbarStats() {} },
      Router: { handleRoute() {} }
    }, opts.app || {})
  };
  window.window = window;
  const ctx = vm.createContext({
    window, document, navigator: window.navigator, URL, Date, JSON, Math, Object, Array, String, Number, Promise,
    setTimeout, clearTimeout, console,
    Blob: class { constructor(p) { this.size = p.join('').length; } }
  });
  files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f }));
  return { window, App: window.App, store: ls.store, log };
}

module.exports = { ROOT, sleep, same, loadScripts };
