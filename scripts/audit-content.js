#!/usr/bin/env node
'use strict';
/**
 * Audits every module's exercises: each reading/listening/writing question and grammar drill must have
 * four distinct, non-empty options and a valid correct answer; items need English titles and text.
 * Usage: node scripts/audit-content.js
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function load() {
  const noop = () => {};
  const window = {
    App: { Storage: { get: (p, d) => d, set: noop }, UI: { escapeHTML: (s) => String(s) } },
    document: { readyState: 'complete', addEventListener: noop, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] },
    addEventListener: noop, setTimeout: () => 0, localStorage: { getItem: () => null }, location: { hash: '' }
  };
  window.window = window;
  const ctx = vm.createContext(Object.assign({}, window, { window }));
  ['content/i18n', 'grammar-a', 'grammar-b', 'grammar-c', 'content/grammar-en-a', 'content/grammar-en-b', 'content/grammar-en-c', 'content/grammar-en-d', 'grammar',
    'reading-a', 'reading-b', 'reading-c', 'content/reading-extra', 'reading',
    'listening-a', 'listening-b', 'listening-c1a', 'listening-c1b', 'listening-c1c', 'listening-c', 'content/listening-extra', 'listening',
    'content/writing-en', 'writing-a', 'writing-b', 'writing-c', 'writing'
  ].forEach((f) => vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', f + '.js'), 'utf8'), ctx, { filename: f }));
  return window.App;
}

function audit() {
  const A = load();
  const problems = [];
  const counts = {};
  const checkQ = (where, q) => {
    const opts = q.options || [];
    if (opts.length !== 4) problems.push(where + ': ' + opts.length + ' options');
    if (opts.some((o) => !String(o === undefined ? '' : o).trim())) problems.push(where + ': empty option');
    else if (new Set(opts.map((o) => String(o).trim().toLowerCase())).size !== opts.length) problems.push(where + ': duplicate options');
    if (!(q.correct >= 0 && q.correct < opts.length)) problems.push(where + ': invalid correct answer');
    if (!String(q.q || '').trim()) problems.push(where + ': empty question');
  };
  [['Reading', 'getAllPassages'], ['Listening', 'getAllTopics'], ['Writing', 'getAllTopics']].forEach(([mod, fn]) => {
    const list = A[mod][fn]();
    const ids = new Set();
    counts[mod] = { items: list.length, questions: 0 };
    list.forEach((t) => {
      if (ids.has(t.id)) problems.push(mod + ': duplicate id ' + t.id);
      ids.add(t.id);
      if (!t.titleEn) problems.push(t.id + ': no English title');
      if (!t.paragraphs.length || t.paragraphs.some((p) => !String(p.en || '').trim())) problems.push(t.id + ': empty paragraph');
      if (t.questions.length < 5) problems.push(t.id + ': only ' + t.questions.length + ' questions');
      t.questions.forEach((q, i) => { counts[mod].questions++; checkQ(t.id + ' q' + (i + 1), q); });
    });
  });
  const topics = A.Grammar.getAllTopics();
  counts.Grammar = { topics: topics.length, drills: 0 };
  topics.forEach((t) => {
    if (!t.en) problems.push(t.id + ': no English lesson');
    (t.drills || []).forEach((q, i) => {
      counts.Grammar.drills++;
      if (q.options) checkQ(t.id + ' drill' + (i + 1), q);
    });
  });
  return { problems: problems, counts: counts };
}

module.exports = { audit };

if (require.main === module) {
  const { problems, counts } = audit();
  console.log(JSON.stringify(counts));
  problems.forEach((p) => console.log('✗ ' + p));
  console.log(problems.length ? problems.length + ' problem(s)' : 'OK');
  process.exitCode = problems.length ? 1 : 0;
}
