'use strict';
// Learning tools: dictation scoring, the mistake notebook and word-form lookup.
const test = require('node:test');
const assert = require('assert');
const { loadScripts, same } = require('./helpers');

test('dictation ignores case, punctuation and contractions, and marks wrong, missing and extra words', () => {
  const { App } = loadScripts(['js/dictation.js']);
  const D = App.Dictation;
  assert.strictEqual(D.compare("I'm sitting in a café near my hotel.", 'i am sitting in a cafe near my hotel').pct >= 87, true);
  assert.strictEqual(D.compare('It is raining, so I am staying inside.', "It's raining so I'm staying inside").pct, 100);
  const r = D.compare('She works in a small office.', 'She work in small office today');
  same(r.tokens.map((t) => t.t), ['ok', 'wrong', 'ok', 'missing', 'ok', 'ok', 'extra']);
  assert.ok(r.pct < 90, 'errors are not accepted');
  assert.strictEqual(D.compare('Hello there.', '').pct, 0);
});

test('dictation builds level-appropriate sentences from dialogues and listening scripts', () => {
  const { App } = loadScripts(['js/content/dialogues.js', 'js/content/i18n.js', 'js/listening-a.js', 'js/listening-b.js', 'js/listening-c1a.js',
    'js/listening-c1b.js', 'js/listening-c1c.js', 'js/listening-c.js', 'js/content/listening-extra.js', 'js/listening.js', 'js/dictation.js']);
  const pool = App.Dictation.buildPool();
  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].forEach((lvl) => {
    assert.ok(pool[lvl].length >= 40, lvl + ' has enough sentences (' + pool[lvl].length + ')');
    pool[lvl].forEach((s) => assert.ok(!/[0-9:;]/.test(s.text) && /[.!?]$/.test(s.text), 'clean sentence: ' + s.text));
  });
});

test('mistake notebook records wrong answers once and removes them after two correct answers in a row', () => {
  const { App } = loadScripts(['js/auth.js', 'js/progress.js', 'js/mistakes.js']);
  const M = App.Mistakes;
  M.record({ module: 'grammar', ref: 'grammar-topic-1', q: '1. She ___ a teacher.', options: ['is', 'are', 'am', 'be'], correct: 0, why: 'he/she/it + is' });
  M.record({ module: 'grammar', ref: 'grammar-topic-1', q: 'She ___ a teacher.', options: ['are', 'is', 'am', 'be'], correct: 1 });
  M.record({ module: 'reading', q: 'Bad item', options: ['a'], correct: 0 });
  assert.strictEqual(M.count(), 1, 'same question counted once, invalid items ignored');
  const it = M.list()[0];
  assert.strictEqual(it.correct, 'is');
  assert.strictEqual(it.count, 2);
  assert.strictEqual(M.resolve(it.key, true), false);
  assert.strictEqual(M.resolve(it.key, false), false, 'a wrong answer resets the streak');
  assert.strictEqual(M.resolve(it.key, true), false);
  assert.strictEqual(M.resolve(it.key, true), true, 'two correct answers in a row remove it');
  assert.strictEqual(M.count(), 0);
});

test('word lookup finds the dictionary form of inflected words', () => {
  const { App } = loadScripts(['js/word-lookup.js']);
  const c = App.WordLookup.candidates;
  assert.ok(c('studies').includes('study'));
  assert.ok(c('running').includes('run'));
  assert.ok(c('making').includes('make'));
  assert.ok(c('went').includes('go'));
  assert.ok(c('children').includes('child'));
  assert.ok(c("Anna's").includes('anna'));
});

test('dictation accepts digits for number words, missing apostrophes and British/American spelling', () => {
  const { App } = loadScripts(['js/dictation.js']);
  const pct = (a, b) => App.Dictation.compare(a, b).pct;
  assert.strictEqual(pct("No, it's about five minutes.", 'No, its about 5 minutes.'), 100);
  assert.strictEqual(pct('It costs two hundred and fifty euros.', 'It costs 250 euros'), 100);
  assert.strictEqual(pct("I don't know.", 'i dont know'), 100);
  assert.strictEqual(pct('My favourite colour is grey.', 'my favorite color is gray'), 100);
  assert.strictEqual(pct('We need to organise the trip.', 'we need to organize the trip'), 100);
  assert.ok(pct('There were four people.', 'there were for people') < 90, 'a different word is still an error');
});

test('a B2 learner starts at B2 in reading, listening, writing and grammar, with each level unlocked independently', () => {
  const state = JSON.stringify({ progress: { level: 'B2' } });
  const { App } = loadScripts(['js/auth.js', 'js/progress.js', 'js/content/i18n.js',
    'js/grammar-a.js', 'js/grammar-b.js', 'js/grammar-c.js', 'js/grammar.js',
    'js/reading-a.js', 'js/reading-b.js', 'js/reading-c.js', 'js/content/reading-extra.js', 'js/reading.js',
    'js/listening-a.js', 'js/listening-b.js', 'js/listening-c1a.js', 'js/listening-c1b.js', 'js/listening-c1c.js', 'js/listening-c.js', 'js/content/listening-extra.js', 'js/listening.js',
    'js/content/writing-en.js', 'js/writing-a.js', 'js/writing-b.js', 'js/writing-c.js', 'js/writing.js'],
  { localStorage: { fluentpath_app_state_v1: state } });
  [['Reading', 'getAllPassages', 'getCurrentFrontierPassageId', 'isPassageUnlocked'],
    ['Listening', 'getAllTopics', 'getCurrentFrontierTopicId', 'isTopicUnlocked'],
    ['Writing', 'getAllTopics', 'getCurrentFrontierTopicId', 'isTopicUnlocked'],
    ['Grammar', 'getAllTopics', 'getCurrentFrontierTopicId', 'isTopicUnlocked']].forEach(([mod, all, frontier, unlocked]) => {
    const items = App[mod][all]();
    const id = App[mod][frontier](items);
    const item = items.find((x) => x.id === id);
    assert.strictEqual(item.level, 'B2', mod + ' starts at the learner level');
    const firstB2 = items.findIndex((x) => x.level === 'B2');
    assert.ok(App[mod][unlocked](firstB2, items), mod + ': first B2 item is open without finishing lower levels');
  });
});

test('slow speech is split into short phrases', () => {
  const { App } = loadScripts(['js/audio-engine.js']);
  const parts = App.AudioEngine.splitForSlowSpeech('Had I known about the delay, I would have taken a taxi.');
  assert.ok(parts.length >= 4, 'several phrases: ' + parts.join(' / '));
  parts.forEach((p) => assert.ok(p.split(' ').length <= 4, 'phrase too long: ' + p));
  assert.strictEqual(parts.join(' '), 'Had I known about the delay, I would have taken a taxi.');
});
