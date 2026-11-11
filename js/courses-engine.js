/**
 * COURSES-ENGINE.JS — progress logic for the thematic courses (js/content/courses.js).
 * Lesson completion comes from the same progress data as the modules and the learning path:
 *   g/r/l/w → progress.completed{Grammar,Reading,Listening,Writing}Ids, s → progress.completedDialogueIds,
 *   v → the learning-path vocabulary lesson for that level and topic (progress.curriculum.vocab).
 * Course tests: progress.courses.tests[courseId] (best score). Last opened course: progress.courses.lastId.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const TYPES = { g: "grammar", r: "reading", l: "listening", w: "writing", s: "speaking", v: "vocab" };
  const PREFIX = { grammar: "grammar-topic-", reading: "reading-passage-", listening: "listening-topic-", writing: "writing-topic-" };
  const LISTS = {
    grammar: "progress.completedGrammarIds", reading: "progress.completedReadingIds", listening: "progress.completedListeningIds",
    writing: "progress.completedWritingIds", speaking: "progress.completedDialogueIds"
  };

  function list(path) {
    const v = App.Storage.get(path, []);
    return Array.isArray(v) ? v : [];
  }

  function passMark() {
    return (App.Curriculum && App.Curriculum.passMark()) || 70;
  }

  // "v:B1/phrasal verbs" → სასწავლო გეგმის შესაბამისი ლექსიკის გაკვეთილი
  function vocabLessonId(level, topic) {
    if (!App.Curriculum) return null;
    const lvl = App.Curriculum.get().find((l) => l.code === level);
    if (!lvl) return null;
    for (const unit of lvl.units) {
      const lesson = unit.lessons.find((l) => l.type === "vocab" && l.ref === topic);
      if (lesson) return lesson.id;
    }
    return null;
  }

  function parseRef(code) {
    const sep = code.indexOf(":");
    const type = TYPES[code.slice(0, sep)];
    const value = code.slice(sep + 1);
    if (type === "vocab") {
      const [level, topic] = value.split("/");
      return { code: code, type: type, level: level, topic: topic, lessonId: vocabLessonId(level, topic) };
    }
    if (type === "speaking") return { code: code, type: type, ref: value };
    return { code: code, type: type, ref: PREFIX[type] + value };
  }

  function snapshot() {
    const snap = { vocab: App.Storage.get("progress.curriculum.vocab", {}) || {} };
    Object.keys(LISTS).forEach((t) => { snap[t] = list(LISTS[t]); });
    return snap;
  }

  function isDone(item, snap) {
    if (item.type === "vocab") return (Number(snap.vocab[item.lessonId]) || 0) >= passMark();
    return snap[item.type].indexOf(item.ref) !== -1;
  }

  function title(item) {
    const idx = App.ContentIndex || {};
    switch (item.type) {
      case "vocab": return "Words: " + item.topic.charAt(0).toUpperCase() + item.topic.slice(1) + " (" + item.level + ")";
      case "speaking": {
        const d = (App.UnitDialogues || []).find((x) => x.id === item.ref);
        return d ? "Dialogue: " + d.title : item.ref;
      }
      default: return (idx[item.type] && idx[item.type][item.ref]) || item.ref;
    }
  }

  function testScore(courseId) {
    return Number(App.Storage.get("progress.courses.tests." + courseId, 0)) || 0;
  }

  // კურსის საბოლოო ტესტის მასალა: კურსის გრამატიკის თემები და ლექსიკის თემები
  function testMaterial(course) {
    const grammar = [];
    const vocab = [];
    course.modules.forEach((m) => m.lessons.forEach((code) => {
      const item = parseRef(code);
      if (item.type === "grammar" && grammar.indexOf(item.ref) === -1) grammar.push(item.ref);
      if (item.type === "vocab" && !vocab.some((v) => v.level === item.level && v.topic === item.topic)) vocab.push({ level: item.level, topic: item.topic });
    }));
    return { grammar: grammar, vocab: vocab };
  }

  function hasTest(course) {
    const m = testMaterial(course);
    return m.grammar.length > 0 || m.vocab.length > 0;
  }

  function courseState(course, snap) {
    snap = snap || snapshot();
    let done = 0;
    let total = 0;
    let next = null;
    const modules = course.modules.map((m) => {
      const lessons = m.lessons.map((code) => {
        const item = parseRef(code);
        const d = isDone(item, snap);
        total++;
        if (d) done++;
        else if (!next) next = item;
        return Object.assign(item, { done: d, title: title(item) });
      });
      return { title: m.title, lessons: lessons, done: lessons.filter((l) => l.done).length };
    });
    const test = hasTest(course);
    const score = testScore(course.id);
    const lessonsComplete = done === total;
    return {
      course: course, modules: modules, done: done, total: total, next: next,
      percent: Math.round((done / total) * 100),
      hasTest: test, testScore: score, testPassed: score >= passMark(),
      started: done > 0 || score > 0,
      complete: lessonsComplete && (!test || score >= passMark())
    };
  }

  const CourseEngine = {
    LEVELS: LEVELS,

    all: function () { return Array.isArray(App.Courses) ? App.Courses : []; },
    categories: function () { return Array.isArray(App.CourseCategories) ? App.CourseCategories : []; },
    get: function (id) { return this.all().find((c) => c.id === id) || null; },
    parseRef: parseRef,
    testMaterial: testMaterial,

    state: function (courseId) {
      const c = this.get(courseId);
      return c ? courseState(c) : null;
    },

    states: function () {
      const snap = snapshot();
      return this.all().map((c) => courseState(c, snap));
    },

    // კურსი შეესაბამება მომხმარებლის დონეს, თუ მისი მინიმალური დონე არ აღემატება მიმდინარეს
    suitsLevel: function (course) {
      const user = LEVELS.indexOf(App.Storage.get("progress.level", "A1"));
      return LEVELS.indexOf(course.minLevel) <= Math.max(0, user);
    },

    // რეკომენდებული კურსი: დაწყებული და დაუსრულებელი, თორემ პირველი შესაფერისი დაუწყებელი
    recommended: function () {
      const states = this.states();
      const lastId = App.Storage.get("progress.courses.lastId", "");
      const active = states.filter((s) => s.started && !s.complete);
      const last = active.find((s) => s.course.id === lastId);
      if (last) return last;
      if (active.length) return active.slice().sort((a, b) => b.done - a.done)[0];
      return states.find((s) => !s.started && this.suitsLevel(s.course)) || null;
    },

    openLesson: function (courseId, code) {
      App.Storage.set("progress.courses.lastId", courseId);
      const item = parseRef(code);
      if (item.type === "vocab") {
        if (item.lessonId) App.Curriculum.openLesson(item.lessonId);
        return;
      }
      App.openContent(item.type, item.ref);
    },

    openTest: function (courseId) {
      App.Storage.set("progress.courses.lastId", courseId);
      App.openContent("learn", "course-test:" + courseId);
    },

    saveTestScore: function (courseId, score) {
      if (score > testScore(courseId)) App.Storage.set("progress.courses.tests." + courseId, score);
    },

    completedCount: function () {
      return this.states().filter((s) => s.complete).length;
    }
  };

  App.CourseEngine = CourseEngine;
})(window);
