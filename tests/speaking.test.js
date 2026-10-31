'use strict';
const test = require('node:test');
const assert = require('assert');
const { loadScripts } = require('./helpers');

const env = loadScripts(['js/speaking.js']);
const Speaking = env.App.Speaking;
const score = (target, spoken) => Speaking._scoreAttempt(target, spoken).score;

test('pronunciation scoring is order-aware and ignores punctuation/case', () => {
  assert.strictEqual(score('Nice to meet you.', 'nice to meet you'), 100);
  assert.strictEqual(score("I don't understand.", "I don't understand"), 100);
  assert.strictEqual(score('Where is the bus station?', 'where is bus station'), 80);
  assert.strictEqual(score('See you tomorrow.', 'tomorrow see you'), 67);
  assert.strictEqual(score('Hello', ''), 0);
});

test('every level has 20 phrases with translations', () => {
  const phrases = Speaking.getAllPhrases();
  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].forEach((lvl) => {
    assert.strictEqual(phrases[lvl].length, 20, lvl);
    phrases[lvl].forEach((p) => assert.ok(p.en && p.ka, lvl + ': ' + JSON.stringify(p)));
  });
  assert.strictEqual(Speaking.getTotalPhrases(), 120);
});

test('dialogues alternate partner/you lines and have unique ids', () => {
  const dialogues = Speaking.getAllDialogues();
  const ids = new Set();
  Object.keys(dialogues).forEach((lvl) => dialogues[lvl].forEach((d) => {
    assert.ok(!ids.has(d.id), 'duplicate ' + d.id);
    ids.add(d.id);
    assert.ok(d.lines.some((l) => l.who === 'you'));
    d.lines.forEach((l, i) => {
      if (i > 0) assert.notStrictEqual(l.who, d.lines[i - 1].who, d.id + ' line ' + i);
    });
  }));
});
