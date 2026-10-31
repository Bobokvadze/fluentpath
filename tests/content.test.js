'use strict';
// Educational content integrity: vocabulary schema, translations kept separate, legacy id migration.
const test = require('node:test');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { ROOT, same, loadScripts } = require('./helpers');
const { validate } = require('../scripts/validate-vocab');

test('vocabulary database is valid, duplicate-free and mostly covered by IPA', () => {
  const { errors, report, total, ipaHits } = validate();
  assert.deepStrictEqual(errors, []);
  ['A1', 'A2', 'B1', 'B2', 'C1'].forEach((lvl) => assert.ok(report[lvl].entries >= 100, lvl + ' has too few entries'));
  assert.ok(ipaHits / total > 0.9, 'IPA coverage below 90%');
});

test('vocabulary source files contain no Georgian text (translations live in i18n-ka.js)', () => {
  ['a1', 'a2', 'b1', 'b2', 'c1'].forEach((lvl) => {
    const src = fs.readFileSync(path.join(ROOT, 'js', 'content', 'vocab-' + lvl + '.js'), 'utf8');
    const body = src.slice(src.indexOf('= ['));
    assert.ok(!/[Ⴀ-ჿ]/.test(body), 'Georgian characters found in vocab-' + lvl + '.js');
  });
});

test('translation entries only reference existing vocabulary ids', () => {
  const env = loadScripts(['js/content/i18n.js', 'js/content/i18n-ka.js', 'js/content/vocab-a1.js', 'js/content/vocab-a2.js', 'js/content/vocab-b1.js', 'js/content/vocab-b2.js', 'js/content/vocab-c1.js', 'js/vocabulary.js']);
  const ids = new Set(env.App.Vocabulary.getAllWords().map((w) => w.id));
  Object.keys(env.App.I18n.ka.vocab).forEach((id) => assert.ok(ids.has(id), 'translation for unknown id ' + id));
  assert.strictEqual(env.App.tr('vocab', 'v-hello-int', 'term'), 'გამარჯობა');
  assert.strictEqual(env.App.tr('vocab', 'v-hello-int', 'def'), '', 'missing translation must be empty, not English');
});

test('legacy vocabulary ids are migrated by word and unknown ones are preserved', () => {
  const state = { vocabulary: { learnedIds: ['vw-1-1', 'vw-1-35'], bookmarkedIds: ['vw-2-1'], boxByWordId: { 'vw-1-1': 4 } }, progress: {} };
  const env = loadScripts(['js/auth.js', 'js/progress.js', 'js/content/i18n.js', 'js/content/vocab-a1.js', 'js/content/vocab-legacy-ids.js', 'js/vocabulary.js'], {
    localStorage: { fluentpath_app_state_v1: JSON.stringify(state) }
  });
  env.App.Vocabulary.ensureMigrated();
  same(env.App.Storage.get('vocabulary.learnedIds'), ['v-hello-int']);
  same(env.App.Storage.get('vocabulary.bookmarkedIds'), ['v-family-n']);
  same(env.App.Storage.get('vocabulary.boxByWordId'), { 'v-hello-int': 4 });
  same(env.App.Storage.get('vocabulary.legacyUnmappedIds'), ['vw-1-35']);
  // running again must not change anything
  env.App.Vocabulary.ensureMigrated();
  same(env.App.Storage.get('vocabulary.learnedIds'), ['v-hello-int']);
});

test('every A1-C1 grammar topic has a complete English lesson and valid practice items', () => {
  const env = loadScripts(['js/content/grammar-en-a.js', 'js/content/grammar-en-b.js', 'js/content/grammar-en-c.js']);
  const G = env.App.GrammarEN;
  for (let i = 1; i <= 75; i++) {
    const t = G['grammar-topic-' + i];
    assert.ok(t, 'missing English layer for topic ' + i);
    ['title', 'objective', 'explanation', 'compare', 'tip'].forEach((k) => assert.ok(t[k] && t[k].length > 8, i + ': ' + k));
    assert.ok(t.patterns.length >= 3, i + ': patterns');
    assert.strictEqual(t.practice.length, 5, i + ': practice count');
    t.practice.forEach((line, j) => {
      const f = line.split('|');
      assert.strictEqual(f.length, 6, i + '.' + j + ': fields');
      assert.strictEqual(new Set(f.slice(1, 5)).size, 4, i + '.' + j + ': duplicate options');
      assert.ok(f[5].length > 10, i + '.' + j + ': explanation');
    });
    assert.ok(!/[Ⴀ-ჿ]/.test(JSON.stringify(t)), i + ': Georgian text in English source');
  }
});

test('writing topics 1-75 have English tasks and every level has targets, criteria and a checklist', () => {
  const env = loadScripts(['js/content/writing-en.js']);
  const W = env.App.WritingEN;
  let prevMax = 0;
  ['A1', 'A2', 'B1', 'B2', 'C1'].forEach((lvl) => {
    const spec = W.levels[lvl];
    assert.ok(spec.words[0] < spec.words[1] && spec.words[1] > prevMax, lvl + ' word target grows with level');
    prevMax = spec.words[1];
    assert.ok(spec.criteria.length >= 4 && spec.checklist.length >= 5, lvl + ' criteria/checklist');
  });
  for (let i = 1; i <= 75; i++) {
    const t = W.tasks['writing-topic-' + i];
    assert.ok(t && /^(Write|Complete) /.test(t.task), 'task ' + i);
    assert.ok(t.points.length >= 3, 'points ' + i);
  }
  const src = fs.readFileSync(path.join(ROOT, 'js', 'content', 'writing-en.js'), 'utf8');
  assert.ok(!/[Ⴀ-ჿ]/.test(src.slice(src.indexOf('App.WritingEN'))), 'Georgian text in writing-en.js');
});
