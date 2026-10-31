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
