#!/usr/bin/env node
/**
 * Validates js/content/vocab-*.js: structure, duplicates, part of speech, sentence shape and IPA coverage.
 * Usage: node scripts/validate-vocab.js [--verbose]
 */
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const POS = new Set(['n', 'v', 'adj', 'adv', 'prep', 'pron', 'det', 'conj', 'num', 'int', 'phr', 'pv']);
const KEYS = new Set(['x', 'c', 's', 'a', 'f', 'w', 'n']);

function load() {
  const window = { App: {} };
  const ctx = vm.createContext({ window });
  LEVELS.forEach((lvl) => {
    const file = path.join(ROOT, 'js', 'content', 'vocab-' + lvl.toLowerCase() + '.js');
    if (fs.existsSync(file)) vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  });
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', 'ipa-dict.js'), 'utf8'), ctx);
  return window.App;
}

function ipaFor(dict, word) {
  const tokens = word.toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[\s/]+/).map((t) => t.replace(/[^a-z'-]/g, '')).filter(Boolean);
  if (!tokens.length) return '';
  const parts = [];
  for (const t of tokens) {
    if (!dict[t]) return '';
    parts.push(dict[t]);
  }
  return parts.join(' ');
}

function validate() {
  const App = load();
  const errors = [];
  const seen = new Map();
  const report = {};
  let ipaHits = 0;
  let total = 0;
  LEVELS.forEach((lvl) => {
    const lines = (App.VocabSource && App.VocabSource[lvl]) || [];
    const topics = {};
    lines.forEach((line, i) => {
      total++;
      const parts = line.split('|');
      const where = lvl + '#' + (i + 1) + ' "' + parts[0] + '"';
      if (parts.length < 5) { errors.push(where + ': fewer than 5 fields'); return; }
      const [word, pos, topic, def, ex] = parts;
      if (!word.trim()) errors.push(where + ': empty word');
      if (!POS.has(pos)) errors.push(where + ': unknown pos ' + pos);
      if (!topic) errors.push(where + ': missing topic');
      if (!/^[A-Z]/.test(def) || !/[.?!]$/.test(def)) errors.push(where + ': definition should be a sentence');
      if (!/^[A-Z"'(]/.test(ex) || !/[.?!"']$/.test(ex)) errors.push(where + ': example should be a sentence');
      parts.slice(5).forEach((kv) => {
        const k = kv.split('=')[0];
        if (!KEYS.has(k) || kv.indexOf('=') !== 1) errors.push(where + ': bad extra field ' + kv);
      });
      const key = word.toLowerCase() + '|' + pos;
      if (seen.has(key)) errors.push(where + ': duplicate of ' + seen.get(key));
      seen.set(key, where);
      topics[topic] = (topics[topic] || 0) + 1;
      if (ipaFor(App.IPADictionary, word)) ipaHits++;
    });
    report[lvl] = { entries: lines.length, topics: Object.keys(topics).length };
  });
  return { errors, report, total, ipaHits };
}

if (require.main === module) {
  const { errors, report, total, ipaHits } = validate();
  console.log(JSON.stringify(report));
  console.log('total', total, 'ipa coverage', ipaHits + '/' + total);
  if (errors.length) {
    console.log(errors.length + ' problem(s):\n' + errors.slice(0, process.argv.includes('--verbose') ? 1000 : 40).join('\n'));
    process.exit(1);
  }
  console.log('OK');
}

module.exports = { validate };
