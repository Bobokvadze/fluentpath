/**
 * CURRICULUM-ENGINE.JS — progress logic for the A1–C1 learning path (see js/content/curriculum.js).
 * Lesson completion is read from the progress data each module already writes, so every section stays consistent:
 *   grammar → progress.completedGrammarIds, reading → progress.completedReadingIds,
 *   listening → progress.completedListeningIds, writing → progress.completedWritingIds,
 *   speaking → progress.completedDialogueIds, vocabulary lesson → progress.curriculum.vocab[lessonId] (score),
 *   checkpoint → progress.curriculum.checkpoints[unitId] (best score).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
  let cache = null;

  const TYPE_LABELS = {
    vocab: "Vocabulary", grammar: "Grammar", reading: "Reading", listening: "Listening",
    speaking: "Speaking", writing: "Writing", checkpoint: "Unit checkpoint"
  };
  const TYPE_ICONS = { vocab: "🗂️", grammar: "🌐", reading: "📖", listening: "🎧", speaking: "🎙️", writing: "✍️", checkpoint: "🏁" };

  function curriculum() {
    if (!cache && typeof App.buildCurriculum === "function") cache = App.buildCurriculum();
    return cache || [];
  }

  function list(path) {
    const v = App.Storage.get(path, []);
    return Array.isArray(v) ? v : [];
  }

  function passMark() {
    return (App.CurriculumSpec && App.CurriculumSpec.passMark) || 70;
  }

  function workingLevelIndex() {
    const lvl = App.Storage.get("progress.level", "A1");
    const idx = LEVELS.indexOf(lvl);
    return idx === -1 ? (lvl === "C2" ? 4 : 0) : idx;
  }

  function snapshot() {
    return {
      grammar: list("progress.completedGrammarIds"),
      reading: list("progress.completedReadingIds"),
      listening: list("progress.completedListeningIds"),
      writing: list("progress.completedWritingIds"),
      speaking: list("progress.completedDialogueIds"),
      vocab: App.Storage.get("progress.curriculum.vocab", {}) || {},
      checkpoints: App.Storage.get("progress.curriculum.checkpoints", {}) || {}
    };
  }

  function isLessonDone(lesson, snap) {
    switch (lesson.type) {
      case "vocab": return (Number(snap.vocab[lesson.id]) || 0) >= passMark();
      case "checkpoint": return (Number(snap.checkpoints[lesson.ref]) || 0) >= passMark();
      case "speaking": return snap.speaking.indexOf(lesson.ref) !== -1;
      default: return (snap[lesson.type] || []).indexOf(lesson.ref) !== -1;
    }
  }

  // სრული მდგომარეობა: დონეები → ერთეულები → გაკვეთილები (status: done | available | locked, reason)
  function computeState() {
    const snap = snapshot();
    const workIdx = workingLevelIndex();
    const levels = curriculum().map((lvl) => {
      let prevUnitPassed = true;
      const levelMode = lvl.index < workIdx ? "review" : (lvl.index === workIdx ? "current" : "locked");
      const units = lvl.units.map((unit, uIdx) => {
        let unitStatus;
        let unitReason = "";
        const checkpointDone = (Number(snap.checkpoints[unit.id]) || 0) >= passMark();
        if (levelMode === "locked") {
          unitStatus = "locked";
          unitReason = "Complete level " + LEVELS[lvl.index - 1] + " first (pass all its unit checkpoints), or take the placement test.";
        } else if (levelMode === "review") {
          unitStatus = checkpointDone ? "done" : "open";
        } else if (checkpointDone) {
          unitStatus = "done";
        } else if (prevUnitPassed) {
          unitStatus = "open";
        } else {
          unitStatus = "locked";
          unitReason = "Pass the Unit " + uIdx + " checkpoint to open this unit.";
        }
        prevUnitPassed = checkpointDone;

        const grammarDone = unit.lessons.some((l) => l.type === "grammar" && isLessonDone(l, snap));
        const requiredLeft = unit.lessons.filter((l) => l.required && l.type !== "checkpoint" && !isLessonDone(l, snap)).length;
        const lessons = unit.lessons.map((lesson) => {
          const done = isLessonDone(lesson, snap);
          let status = done ? "done" : "available";
          let reason = "";
          if (!done) {
            if (unitStatus === "locked") {
              status = "locked";
              reason = unitReason;
            } else if (["reading", "listening", "speaking", "writing"].indexOf(lesson.type) !== -1 && !grammarDone && levelMode !== "review") {
              status = "locked";
              reason = "Complete at least one grammar lesson in this unit first.";
            } else if (lesson.type === "checkpoint" && requiredLeft > 0) {
              status = "locked";
              reason = "Finish the required lessons first (" + requiredLeft + " left).";
            }
          }
          return Object.assign({}, lesson, { status: status, reason: reason });
        });
        const required = lessons.filter((l) => l.required);
        const requiredDone = required.filter((l) => l.status === "done").length;
        return Object.assign({}, unit, {
          status: unitStatus, reason: unitReason, lessons: lessons,
          requiredDone: requiredDone, requiredTotal: required.length,
          percent: Math.round((requiredDone / required.length) * 100)
        });
      });
      const passed = units.filter((u) => (Number(snap.checkpoints[u.id]) || 0) >= passMark()).length;
      return Object.assign({}, lvl, { mode: levelMode, units: units, unitsPassed: passed, complete: passed === units.length });
    });
    return { levels: levels, workingLevel: LEVELS[workIdx] };
  }

  function findNext(state) {
    const lvl = state.levels.find((l) => l.mode === "current");
    if (!lvl) return null;
    for (const unit of lvl.units) {
      if (unit.status !== "open") continue;
      const lesson = unit.lessons.find((l) => l.required && l.status === "available");
      if (lesson) return { level: lvl, unit: unit, lesson: lesson };
    }
    return null;
  }

  const Curriculum = {
    LEVELS: LEVELS,
    TYPE_LABELS: TYPE_LABELS,
    TYPE_ICONS: TYPE_ICONS,

    get: curriculum,
    state: computeState,
    passMark: passMark,

    next: function () {
      return findNext(computeState());
    },

    findLesson: function (lessonId) {
      for (const lvl of curriculum()) {
        for (const unit of lvl.units) {
          const lesson = unit.lessons.find((l) => l.id === lessonId);
          if (lesson) return { level: lvl, unit: unit, lesson: lesson };
        }
      }
      return null;
    },

    lessonTitle: function (lesson) {
      const idx = App.ContentIndex || {};
      const unitLevel = lesson.id.slice(0, 2);
      switch (lesson.type) {
        case "vocab": {
          const n = idx.vocabTopics && idx.vocabTopics[unitLevel] ? idx.vocabTopics[unitLevel][lesson.ref] : 0;
          return "Words: " + lesson.ref.charAt(0).toUpperCase() + lesson.ref.slice(1) + (n ? " (" + n + ")" : "");
        }
        case "grammar": return (idx.grammar && idx.grammar[lesson.ref]) || lesson.ref;
        case "reading": return (idx.reading && idx.reading[lesson.ref]) || lesson.ref;
        case "listening": return (idx.listening && idx.listening[lesson.ref]) || lesson.ref;
        case "writing": return (idx.writing && idx.writing[lesson.ref]) || lesson.ref;
        case "speaking": {
          const d = (App.UnitDialogues || []).find((x) => x.id === lesson.ref);
          return d ? "Dialogue: " + d.title : "Speaking practice";
        }
        case "checkpoint": return "Unit checkpoint";
        default: return lesson.id;
      }
    },

    // გაკვეთილის გახსნა შესაბამის მოდულში (ლექსიკა და შემაჯამებელი ტესტი იხსნება „სწავლის“ გვერდზე)
    openLesson: function (lessonId) {
      const found = this.findLesson(lessonId);
      if (!found) return;
      const lesson = found.lesson;
      App.Storage.set("progress.curriculum.lastLessonId", lessonId);
      if (lesson.type === "vocab" || lesson.type === "checkpoint") {
        App.openContent("learn", lessonId);
        return;
      }
      App.openContent(lesson.type, lesson.ref);
    },

    // ერთეულის ჩეკპოინტის შემდეგ: დონის დასრულებისას მომხმარებელი გადადის შემდეგ დონეზე
    checkLevelCompletion: function () {
      const state = computeState();
      const current = state.levels.find((l) => l.mode === "current");
      if (current && current.complete && current.index < LEVELS.length - 1) {
        const nextLevel = LEVELS[current.index + 1];
        App.Storage.set("progress.level", nextLevel);
        if (App.Progress && typeof App.Progress.syncHeaderStats === "function") App.Progress.syncHeaderStats();
        return { completed: current.code, next: nextLevel };
      }
      return null;
    }
  };

  App.Curriculum = Curriculum;
})(window);
