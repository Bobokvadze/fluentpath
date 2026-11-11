'use strict';
// Repository-level checks that catch broken deploys: syntax, referenced files, CSP hash, manifest.
const test = require('node:test');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { ROOT } = require('./helpers');

const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const exists = (f) => fs.existsSync(path.join(ROOT, f.replace(/^\.\//, '').replace(/\?.*$/, '')));

test('all JavaScript files parse', () => {
  const files = fs.readdirSync(path.join(ROOT, 'js')).map((f) => 'js/' + f).concat(['sw.js', 'scripts/generate-icons.js']);
  files.filter((f) => f.endsWith('.js')).forEach((f) => {
    execFileSync(process.execPath, ['--check', path.join(ROOT, f)]);
  });
});

test('every script and stylesheet referenced by index.html exists', () => {
  const html = read('index.html');
  const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]).filter((u) => !/^(https?:|#|data:)/.test(u));
  assert.ok(refs.length > 10);
  refs.forEach((r) => assert.ok(exists(r), 'missing ' + r));
});

test('every file precached by the service worker exists', () => {
  const sw = read('sw.js');
  const list = [...sw.matchAll(/'(\.\/[^']*)'/g)].map((m) => m[1]).filter((u) => u !== './');
  assert.ok(list.length > 20);
  list.forEach((f) => assert.ok(exists(f), 'sw precaches missing file ' + f));
});

test('lazy-loaded content packs exist and are precached', () => {
  const router = read('js/router.js');
  const sw = read('sw.js');
  [...router.matchAll(/'(js\/[a-z-]+\.js)'/g)].map((m) => m[1]).forEach((f) => {
    assert.ok(exists(f), 'missing pack ' + f);
    assert.ok(sw.includes("'./" + f + "'"), 'pack not precached ' + f);
  });
});

test('CSP hash matches the inline theme script', () => {
  const html = read('index.html');
  // browsers normalise CRLF to LF before hashing inline scripts (HTML spec input preprocessing)
  const inline = html.replace(/\r\n?/g, '\n').match(/<script>([\s\S]*?)<\/script>/)[1];
  const digest = crypto.createHash('sha256').update(inline, 'utf8').digest('base64');
  assert.ok(html.includes("'sha256-" + digest + "'"), 'update the CSP hash in index.html after editing the inline script');
});

test('manifest icons exist', () => {
  const manifest = JSON.parse(read('manifest.json'));
  assert.ok(manifest.icons.some((i) => i.purpose === 'maskable'));
  manifest.icons.forEach((i) => assert.ok(exists(i.src), 'missing ' + i.src));
});
