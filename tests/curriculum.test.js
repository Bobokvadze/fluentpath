'use strict';
// Learning path integrity: every lesson points at real content, placement decides the entry point, progression rules hold.
const test = require('node:test');
const assert = require('assert');
const fs = require('fs');
const { loadScripts, same } = require('./helpers');
const { build, OUT } = require('../scripts/build-content-index');

const CORE = ['js/auth.js', 'js/progress.js', 'js/content/i18n.js', 'js/content/curriculum.js', 'js/content/content-index.js',
  'js/content/dialogues.js', 'js/curriculum-engine.js'];

function load(state) {
  return loadScripts(CORE, state ? { localStorage: { fluentpath_app_state_v1: JSON.stringify(state) } } : {});
}

test('content index is up to date with the content files', () => {
  assert.strictEqual(build().out, fs.readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n'), 'run: node scripts/build-content-index.js');
});

test('every curriculum lesson references existing content', () => {
  const App = load().App;
  const idx = App.ContentIndex;
  const dialogues = new Set(App.UnitDialogues.map((d) => d.id));
  const levels = App.Curriculum.get();
  same(levels.map((l) => l.code), ['A1', 'A2', 'B1', 'B2', 'C1']);
  const ids = new Set();
  const grammarUsed = [];
  levels.forEach((lvl) => {
    assert.strictEqual(lvl.units.length, 5, lvl.code + ' units');
    assert.ok(lvl.objectives.length >= 3, lvl.code + ' objectives');
    lvl.units.forEach((u) => {
      assert.ok(u.title && u.goal, u.id + ' title/goal');
      assert.strictEqual(u.lessons[u.lessons.length - 1].type, 'checkpoint', u.id + ' ends with a checkpoint');
      u.lessons.forEach((l) => {
        assert.ok(!ids.has(l.id), 'duplicate lesson id ' + l.id);
        ids.add(l.id);
        switch (l.type) {
          case 'vocab': assert.ok(idx.vocabTopics[lvl.code][l.ref] > 0, l.id + ': no ' + lvl.code + ' words for topic ' + l.ref); break;
          case 'grammar': assert.ok(idx.grammar[l.ref], l.id + ': ' + l.ref); grammarUsed.push(l.ref); break;
          case 'reading': case 'listening': case 'writing': assert.ok(idx[l.type][l.ref], l.id + ': ' + l.ref); break;
          case 'speaking': assert.ok(dialogues.has(l.ref), l.id + ': ' + l.ref); break;
          case 'checkpoint': assert.strictEqual(l.ref, u.id); break;
          default: assert.fail('unknown lesson type ' + l.type);
        }
      });
    });
  });
  // all 75 A1-C1 grammar topics are taught exactly once
  assert.strictEqual(grammarUsed.length, 75);
  assert.strictEqual(new Set(grammarUsed).size, 75);
});

test('unit dialogues are complete English dialogues', () => {
  const App = load().App;
  assert.strictEqual(App.UnitDialogues.length, 25);
  App.UnitDialogues.forEach((d) => {
    assert.ok(d.title && d.function && d.expressions.length >= 2, d.id);
    assert.ok(d.lines.length >= 6, d.id + ' lines');
    d.lines.forEach(([who, text]) => {
      assert.ok(who === 'you' || who === 'partner', d.id + ' speaker');
      assert.ok(!/[Ⴀ-ჿ]/.test(text), d.id + ' contains Georgian');
    });
  });
});

test('a new learner starts at A1 unit 1 with skills locked until grammar', () => {
  const App = load().App;
  const s = App.Curriculum.state();
  same(s.levels.map((l) => l.mode), ['current', 'locked', 'locked', 'locked', 'locked']);
  const u1 = s.levels[0].units[0];
  assert.strictEqual(u1.status, 'open');
  assert.strictEqual(s.levels[0].units[1].status, 'locked');
  assert.ok(s.levels[0].units[1].reason.length > 0, 'locked unit explains why');
  assert.strictEqual(u1.lessons.find((l) => l.type === 'reading').status, 'locked');
  assert.strictEqual(u1.lessons.find((l) => l.type === 'checkpoint').status, 'locked');
  assert.strictEqual(App.Curriculum.next().lesson.id, 'A1-u1-vocab-greetings');
});

test('placement at B1 opens lower levels for revision and starts B1 unit 1', () => {
  const App = load({ progress: { level: 'B1' } }).App;
  const s = App.Curriculum.state();
  same(s.levels.map((l) => l.mode), ['review', 'review', 'current', 'locked', 'locked']);
  s.levels[0].units.forEach((u) => assert.strictEqual(u.status, 'open', 'A1 revision unit ' + u.id));
  assert.strictEqual(s.levels[0].units[0].lessons.find((l) => l.type === 'reading').status, 'available');
  assert.strictEqual(s.levels[2].units[0].status, 'open');
  assert.strictEqual(App.Curriculum.next().unit.id, 'B1-u1');
});

test('existing module progress counts towards lessons, checkpoints unlock units and complete levels', () => {
  const App = load({ progress: { level: 'A1' } }).App;
  const unit = App.Curriculum.get()[0].units[0];
  const lists = { grammar: [], reading: [], listening: [], writing: [], speaking: [] };
  const vocab = {};
  unit.lessons.filter((l) => l.required).forEach((l) => {
    if (l.type === 'vocab') vocab[l.id] = 80;
    else if (lists[l.type]) lists[l.type].push(l.ref);
  });
  App.Storage.set('progress.completedGrammarIds', lists.grammar.slice(0, 1));
  let u1 = App.Curriculum.state().levels[0].units[0];
  assert.strictEqual(u1.lessons.find((l) => l.type === 'reading').status, 'available', 'one grammar lesson opens skills');

  App.Storage.set('progress.curriculum.vocab', vocab);
  App.Storage.set('progress.completedGrammarIds', lists.grammar);
  App.Storage.set('progress.completedReadingIds', lists.reading);
  App.Storage.set('progress.completedListeningIds', lists.listening);
  App.Storage.set('progress.completedWritingIds', lists.writing);
  App.Storage.set('progress.completedDialogueIds', lists.speaking);
  u1 = App.Curriculum.state().levels[0].units[0];
  assert.strictEqual(u1.lessons.find((l) => l.type === 'checkpoint').status, 'available');
  assert.strictEqual(App.Curriculum.next().lesson.type, 'checkpoint');

  App.Storage.set('progress.curriculum.checkpoints', { 'A1-u1': 60 });
  assert.strictEqual(App.Curriculum.state().levels[0].units[1].status, 'locked', 'below pass mark keeps unit 2 locked');
  App.Storage.set('progress.curriculum.checkpoints', { 'A1-u1': 70 });
  assert.strictEqual(App.Curriculum.state().levels[0].units[1].status, 'open');
  assert.strictEqual(App.Curriculum.checkLevelCompletion(), null);

  App.Storage.set('progress.curriculum.checkpoints', { 'A1-u1': 70, 'A1-u2': 90, 'A1-u3': 75, 'A1-u4': 100, 'A1-u5': 85 });
  same(App.Curriculum.checkLevelCompletion(), { completed: 'A1', next: 'A2' });
  assert.strictEqual(App.Storage.get('progress.level'), 'A2');
  same(App.Curriculum.state().levels.map((l) => l.mode), ['review', 'current', 'locked', 'locked', 'locked']);
});
