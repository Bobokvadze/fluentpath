'use strict';
// Learning path integrity: every lesson points at real content, placement decides the entry point, progression rules hold.
const test = require('node:test');
const assert = require('assert');
const fs = require('fs');
const { loadScripts, same } = require('./helpers');
const { build, OUT } = require('../scripts/build-content-index');

const CORE = ['js/auth.js', 'js/progress.js', 'js/content/i18n.js', 'js/content/curriculum.js', 'js/content/content-index.js',
  'js/content/dialogues.js', 'js/curriculum-engine.js', 'js/content/courses.js', 'js/courses-engine.js'];

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
  same(levels.map((l) => l.code), ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
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
  // all 90 A1-C2 grammar topics are taught exactly once
  assert.strictEqual(grammarUsed.length, 90);
  assert.strictEqual(new Set(grammarUsed).size, 90);
});

test('unit dialogues are complete English dialogues', () => {
  const App = load().App;
  assert.strictEqual(App.UnitDialogues.length, 30);
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
  same(s.levels.map((l) => l.mode), ['current', 'locked', 'locked', 'locked', 'locked', 'locked']);
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
  same(s.levels.map((l) => l.mode), ['review', 'review', 'current', 'locked', 'locked', 'locked']);
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
  same(App.Curriculum.state().levels.map((l) => l.mode), ['review', 'current', 'locked', 'locked', 'locked', 'locked']);
});

test('dashboard recommends the next lesson, due reviews, weak grammar, a course and the least-practised skill', () => {
  const App = loadScripts(CORE.concat(['js/flashcards.js', 'js/dashboard.js']), { localStorage: { fluentpath_app_state_v1: JSON.stringify({
    progress: { level: 'A2', completedGrammarIds: ['grammar-topic-16'], grammarScores: { 'grammar-topic-17': { score: 2, total: 5 } } },
    vocabulary: { boxByWordId: { 'v-angry-adj': 1 } }
  }) } }).App;
  const recs = App.Dashboard.buildRecommendations();
  same(recs.map((r) => r.kind), ['lesson', 'review', 'content', 'course', 'lesson']);
  assert.strictEqual(recs[0].lessonId, 'A2-u1-vocab-feelings');
  assert.strictEqual(recs[2].ref, 'grammar-topic-17');
  assert.strictEqual(recs[4].lessonId, 'A2-u1-reading-16');
  assert.ok(recs[3].courseId, 'a course is recommended');
});

test('every course lesson resolves to existing content and course ids are unique', () => {
  const App = load().App;
  const idx = App.ContentIndex;
  const dialogues = new Set(App.UnitDialogues.map((d) => d.id));
  const cats = new Set(App.CourseCategories.map((c) => c.id));
  const ids = new Set();
  assert.ok(App.Courses.length >= 25, 'at least 25 courses');
  App.Courses.forEach((c) => {
    assert.ok(!ids.has(c.id), 'duplicate course ' + c.id);
    ids.add(c.id);
    assert.ok(cats.has(c.category), c.id + ' category');
    assert.ok(App.CourseEngine.LEVELS.indexOf(c.minLevel) !== -1, c.id + ' minLevel');
    assert.ok(c.title && c.description && c.outcomes.length >= 3 && c.modules.length >= 3, c.id + ' fields');
    const seen = new Set();
    c.modules.forEach((m) => m.lessons.forEach((code) => {
      assert.ok(!seen.has(code), c.id + ' repeats ' + code);
      seen.add(code);
      const item = App.CourseEngine.parseRef(code);
      if (item.type === 'vocab') assert.ok(item.lessonId, c.id + ': no learning-path lesson for ' + code);
      else if (item.type === 'speaking') assert.ok(dialogues.has(item.ref), c.id + ': ' + code);
      else assert.ok(idx[item.type] && idx[item.type][item.ref], c.id + ': ' + code);
    }));
  });
});

test('course progress uses module progress, and tests complete a course', () => {
  const App = load({ progress: { level: 'A1', completedGrammarIds: ['grammar-topic-1', 'grammar-topic-2'] } }).App;
  const E = App.CourseEngine;
  const st = E.state('first-steps');
  assert.ok(st.done === 2 && st.started && !st.complete);
  assert.strictEqual(st.next.code, 'v:A1/greetings');
  assert.strictEqual(E.recommended().course.id, 'first-steps');
  const course = E.get('speaking-confidence');
  assert.strictEqual(E.state('speaking-confidence').hasTest, false);
  const ids = [];
  course.modules.forEach((m) => m.lessons.forEach((c) => ids.push(c.slice(2))));
  App.Storage.set('progress.completedDialogueIds', ids);
  assert.strictEqual(E.state('speaking-confidence').complete, true, 'a course without a test completes with its lessons');
  E.saveTestScore('first-steps', 60);
  E.saveTestScore('first-steps', 50);
  assert.strictEqual(E.state('first-steps').testScore, 60, 'best score is kept');
  assert.strictEqual(E.suitsLevel(E.get('proficiency-grammar')), false);
});
