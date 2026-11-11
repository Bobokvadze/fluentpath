#!/usr/bin/env node
'use strict';
/**
 * Finds vocabulary words whose IPA is missing from js/ipa-dict.js and looks them up in the free Dictionary API
 * (https://dictionaryapi.dev, Wiktionary data). American transcriptions are preferred to match the site's voice.
 * Writes js/content/ipa-extra.js. Words that cannot be found are listed and left without IPA (never invented).
 *   node scripts/fetch-missing-ipa.js
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'js', 'content', 'ipa-extra.js');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function load() {
  const window = { App: {} };
  window.window = window;
  const ctx = vm.createContext(window);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', 'ipa-dict.js'), 'utf8'), ctx);
  if (fs.existsSync(OUT)) vm.runInContext(fs.readFileSync(OUT, 'utf8'), ctx);
  ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'].forEach((l) => vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', 'content', 'vocab-' + l + '.js'), 'utf8'), ctx));
  return window.App;
}

const tokensOf = (word) => word.toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[\s/]+/).map((t) => t.replace(/[^a-z'-]/g, '')).filter(Boolean);
// British -ise/-isation spellings are listed under the American form
const variants = (t) => [t, t.replace(/is(e|ed|es|ing|ation|ations)$/, 'iz$1'), t.replace(/yse$/, 'yze'), t.replace(/our$/, 'or')]
  .filter((v, i, a) => a.indexOf(v) === i);

function pickIpa(entries) {
  const phonetics = [];
  entries.forEach((e) => (e.phonetics || []).forEach((p) => { if (p.text) phonetics.push(p); }));
  if (!phonetics.length) return '';
  const us = phonetics.find((p) => /-us\.mp3$/.test(p.audio || ''));
  const chosen = us || phonetics.find((p) => !/-uk\.mp3$/.test(p.audio || '')) || phonetics[0];
  const text = chosen.text.trim();
  return /^\/.*\/$/.test(text) ? text : '/' + text.replace(/^\[|\]$/g, '').replace(/^\/|\/$/g, '') + '/';
}

// Fallback: the {{IPA|en|...}} template on the Wiktionary page, preferring General American / US
async function wiktionary(word) {
  const res = await fetch('https://en.wiktionary.org/w/index.php?title=' + encodeURIComponent(word) + '&action=raw',
    { headers: { 'User-Agent': 'FluentPath-IPA-fetch/1.0 (educational project)' } });
  if (!res.ok) return '';
  const text = await res.text();
  const english = text.split(/\n==English==\n/)[1] || text;
  const section = english.split(/\n==[^=]/)[0];
  const templates = [...section.matchAll(/\{\{IPA\|en\|([^}]*)\}\}/g)].map((m) => m[1].split('|'));
  if (!templates.length) return '';
  const accentOf = (parts) => (parts.find((x) => /^a=/.test(x)) || '').slice(2);
  const us = templates.find((p) => /\b(GA|US|GenAm)\b/.test(accentOf(p))) || templates.find((p) => !/\b(RP|UK)\b/.test(accentOf(p))) || templates[0];
  const ipa = us.find((x) => /^\/.*\/$/.test(x));
  return ipa || '';
}

async function lookup(token) {
  for (const v of variants(token)) {
    let res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(v));
    for (let tries = 0; res.status === 429 && tries < 5; tries++) {
      await sleep(3000 * (tries + 1));
      res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(v));
    }
    if (res.ok) {
      const ipa = pickIpa(await res.json());
      if (ipa) return ipa;
    }
    await sleep(700);
  }
  for (const v of variants(token)) {
    const ipa = await wiktionary(v);
    if (ipa) return ipa;
    await sleep(400);
  }
  return '';
}

async function main() {
  const App = load();
  const dict = App.IPADictionary;
  const extra = Object.assign({}, App.IPAExtra || {});
  const missing = new Set();
  Object.values(App.VocabSource).flat().forEach((line) => tokensOf(line.split('|')[0]).forEach((t) => { if (!dict[t] && !extra[t]) missing.add(t); }));
  const notFound = [];
  for (const t of missing) {
    let ipa = await lookup(t);
    // hyphenated compounds: combine the known parts (e.g. full-time = full + time)
    if (!ipa && t.indexOf('-') !== -1) {
      const parts = t.split('-').map((x) => dict[x] || extra[x] || '');
      if (parts.every(Boolean)) ipa = '/' + parts.map((x) => x.replace(/^\/|\/$/g, '')).join('') + '/';
    }
    if (ipa) extra[t] = ipa;
    else notFound.push(t);
    await sleep(700);
  }
  const sorted = {};
  Object.keys(extra).sort().forEach((k) => { sorted[k] = extra[k]; });
  fs.writeFileSync(OUT, '/**\n * IPA-EXTRA.JS — transcriptions for vocabulary words missing from ipa-dict.js.\n' +
    ' * Source: Wiktionary via https://dictionaryapi.dev (American pronunciation where available), fetched by\n' +
    ' * scripts/fetch-missing-ipa.js. Merged into App.IPADictionary.\n */\n' +
    '(function (window) {\n  "use strict";\n  const App = window.App = window.App || {};\n' +
    '  App.IPAExtra = ' + JSON.stringify(sorted, null, 2).replace(/\n/g, '\n  ') + ';\n' +
    '  App.IPADictionary = Object.assign(App.IPADictionary || {}, App.IPAExtra);\n})(window);\n');
  console.log('found ' + (missing.size - notFound.length) + ' of ' + missing.size + '; not found: ' + (notFound.join(', ') || 'none'));
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
