/**
 * LEARN.JS — the A1–C1 learning path view, vocabulary lessons and unit checkpoints.
 * Structure: js/content/curriculum.js · progress logic: js/curriculum-engine.js.
 * Grammar, reading, listening, speaking and writing lessons open in their own modules (App.openContent).
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};
  const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const VOCAB_QUIZ_SIZE = 8;

  let viewLevel = null;          // level tab shown
  let expandedUnitId = null;     // unit opened in the accordion
  let player = null;             // { kind: 'vocab'|'checkpoint', lessonId, unit, ...state }

  function esc(s) { return App.UI.escapeHTML(s); }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function wordQuestion(word, pool) {
    const samePos = pool.filter((w) => w.id !== word.id && w.pos === word.pos);
    const source = samePos.length >= 3 ? samePos : pool.filter((w) => w.id !== word.id);
    const options = shuffle([word.word].concat(shuffle(source).slice(0, 3).map((w) => w.word)));
    return {
      q: 'Which word or phrase matches this definition? «' + word.def + '»',
      options: options,
      correct: options.indexOf(word.word),
      why: word.word + ' — ' + word.def + ' Example: ' + word.ex
    };
  }

  function grammarQuestion(line) {
    const f = line.split('|');
    const options = shuffle(f.slice(1, 5));
    return { q: f[0], options: options, correct: options.indexOf(f[1]), why: f[5] || '' };
  }

  const Learn = {
    // საჭირო მონაცემების ჩატვირთვა და პლეერის მომზადება
    startLesson: function (lessonId) {
      const found = App.Curriculum.findLesson(lessonId);
      if (!found) return;
      const { unit, lesson } = found;
      if (lesson.type === 'vocab') {
        const words = App.Vocabulary ? App.Vocabulary.getWordsByTopic(unit.level, lesson.ref) : [];
        player = { kind: 'vocab', lessonId: lessonId, unit: unit, lesson: lesson, words: words, stage: 'study', questions: [], answers: {} };
      } else if (lesson.type === 'checkpoint') {
        player = { kind: 'checkpoint', lessonId: lessonId, unit: unit, lesson: lesson, stage: 'loading', questions: [], answers: {} };
        App.loadModuleData(['grammar', 'vocabulary']).then(() => {
          if (!player || player.lessonId !== lessonId) return;
          player.questions = this.buildCheckpoint(unit);
          player.stage = 'quiz';
          if (App.Router && App.Router.currentRoute === 'learn') this.render();
        }, () => {
          App.UI.toast('მასალა ვერ ჩაიტვირთა. შეამოწმეთ ინტერნეტი.', 'warning');
          player = null;
          this.render();
        });
      }
      expandedUnitId = unit.id;
      viewLevel = unit.level;
    },

    // ერთეულის ჩეკპოინტი: თითოეული გრამატიკის თემიდან 2 კითხვა + ერთეულის ლექსიკიდან 4
    buildCheckpoint: function (unit) {
      const qs = [];
      unit.grammar.forEach((n) => {
        const en = (App.GrammarEN || {})['grammar-topic-' + n];
        if (en && en.practice) shuffle(en.practice).slice(0, 2).forEach((line) => qs.push(grammarQuestion(line)));
      });
      if (App.Vocabulary) {
        let words = [];
        unit.vocab.forEach((topic) => { words = words.concat(App.Vocabulary.getWordsByTopic(unit.level, topic)); });
        const levelPool = App.Vocabulary.getAllWords().filter((w) => w.level === unit.level);
        shuffle(words).slice(0, 4).forEach((w) => qs.push(wordQuestion(w, levelPool)));
      }
      return shuffle(qs);
    },

    finishPlayer: function () {
      const p = player;
      const total = p.questions.length;
      const right = p.questions.filter((q, i) => p.answers[i] === q.correct).length;
      const score = total ? Math.round((right / total) * 100) : 0;
      const pass = App.Curriculum.passMark();
      p.score = score;
      p.stage = 'result';
      if (p.kind === 'vocab') {
        const prev = Number(App.Storage.get('progress.curriculum.vocab.' + p.lessonId, 0)) || 0;
        if (score > prev) App.Storage.set('progress.curriculum.vocab.' + p.lessonId, score);
        if (score >= pass) {
          const added = App.Vocabulary.addToReview(p.words.map((w) => w.id));
          p.addedToReview = added;
          App.Progress.recordActivity({ title: 'Vocabulary lesson: ' + p.lesson.ref + ' (' + score + '%)', category: 'სწავლა' });
        }
      } else {
        const prev = Number(App.Storage.get('progress.curriculum.checkpoints.' + p.unit.id, 0)) || 0;
        if (score > prev) App.Storage.set('progress.curriculum.checkpoints.' + p.unit.id, score);
        if (score >= pass) {
          App.Progress.recordActivity({ title: 'Checkpoint passed: ' + p.unit.level + ' Unit ' + p.unit.number + ' (' + score + '%)', category: 'სწავლა' });
          const advance = App.Curriculum.checkLevelCompletion();
          if (advance) {
            p.levelUp = advance;
            viewLevel = advance.next;
            expandedUnitId = null;
          }
        }
      }
      App.UI.playSound(score >= pass ? 'success' : 'click');
    },

    render: function () {
      const container = document.getElementById('app-view');
      if (!container) return;

      const pending = App.takePendingOpen ? App.takePendingOpen('learn') : null;
      if (pending) this.startLesson(pending);

      if (player) {
        container.innerHTML = '<div class="dashboard-grid">' + this.renderPlayer() + '</div>';
        this.bindPlayer(container);
        return;
      }

      const state = App.Curriculum.state();
      if (!viewLevel) viewLevel = state.workingLevel;
      const level = state.levels.find((l) => l.code === viewLevel) || state.levels[0];
      const next = App.Curriculum.next();
      if (!expandedUnitId || expandedUnitId.slice(0, 2) !== level.code) {
        const open = level.units.find((u) => u.status === 'open') || level.units[0];
        expandedUnitId = open.id;
      }

      const tabs = state.levels.map((l) => {
        const mark = l.complete ? '✓ ' : (l.mode === 'locked' ? '🔒 ' : (l.mode === 'current' ? '📍 ' : ''));
        return '<button type="button" class="pill-tab' + (l.code === level.code ? ' active' : '') + '" data-cx-level="' + l.code + '" aria-pressed="' + (l.code === level.code) + '">' +
          mark + l.code + ' · ' + esc(l.name) + '</button>';
      }).join('');

      const nextHtml = next
        ? '<div class="cx-next" role="status">' +
            '<div><span class="cx-next__eyebrow">შემდეგი რეკომენდებული ნაბიჯი</span>' +
            '<div class="cx-next__title" lang="en">' + App.Curriculum.TYPE_ICONS[next.lesson.type] + ' ' + esc(App.Curriculum.lessonTitle(next.lesson)) + '</div>' +
            '<div class="cx-next__meta">' + next.level.code + ' · Unit ' + next.unit.number + ': <span lang="en">' + esc(next.unit.title) + '</span></div></div>' +
            '<button type="button" class="btn btn-primary" data-cx-open="' + esc(next.lesson.id) + '">დაწყება →</button>' +
          '</div>'
        : '';

      const modeNote = level.mode === 'review'
        ? '<p class="cx-mode cx-mode--review">ეს დონე თქვენს დონეზე დაბალია — მასალა ღიაა გასამეორებლად და არ არის სავალდებულო.</p>'
        : level.mode === 'locked'
          ? '<p class="cx-mode cx-mode--locked">🔒 ' + esc(level.units[0].reason) + '</p>'
          : '';

      const unitsHtml = level.units.map((u) => this.renderUnit(u, level)).join('');

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header"><div>' +
              '<h2 class="section-title">სასწავლო გეგმა A1–C1</h2>' +
              '<p class="section-subtitle">თითოეული დონე 5 ერთეულისგან შედგება: ლექსიკა → გრამატიკა → კითხვა, მოსმენა, საუბარი, წერა → ერთეულის შემაჯამებელი ტესტი.</p>' +
            '</div><span class="stat-pill stat-pill--level">თქვენი დონე: ' + esc(state.workingLevel) + '</span></div>' +
            '<div class="pill-tabs" role="group" aria-label="დონე">' + tabs + '</div>' +
          '</section>' +
          nextHtml +
          '<section class="card">' +
            '<div class="cx-level-head">' +
              '<div><h3 class="section-title" lang="en">' + level.code + ' — ' + esc(level.name) + '</h3>' +
              '<p class="section-subtitle">გავლილი ერთეულები: ' + level.unitsPassed + ' / ' + level.units.length + '</p></div>' +
              '<div class="progress-track cx-level-bar" role="progressbar" aria-valuenow="' + Math.round(level.unitsPassed / level.units.length * 100) + '" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:' + Math.round(level.unitsPassed / level.units.length * 100) + '%"></div></div>' +
            '</div>' +
            modeNote +
            '<details class="cx-objectives"><summary>რას ისწავლით ამ დონეზე</summary>' +
              '<ul lang="en">' + level.objectives.map((o) => '<li>' + esc(o) + '</li>').join('') + '</ul>' +
              '<p lang="en"><strong>Before you start:</strong> ' + esc(level.prerequisites) + '</p>' +
              '<p lang="en"><strong>To complete the level:</strong> ' + esc(level.completion) + '</p>' +
            '</details>' +
          '</section>' +
          unitsHtml +
        '</div>';

      this.bindTree(container);
    },

    renderUnit: function (u, level) {
      const expanded = u.id === expandedUnitId;
      const badge = u.status === 'done' ? '<span class="cx-badge cx-badge--done">✓ გავლილია</span>'
        : u.status === 'locked' ? '<span class="cx-badge cx-badge--locked">🔒 ჩაკეტილია</span>'
          : '<span class="cx-badge cx-badge--open">' + u.requiredDone + ' / ' + u.requiredTotal + '</span>';
      const required = u.lessons.filter((l) => l.required);
      const extra = u.lessons.filter((l) => !l.required);
      const lessonRow = (l) => {
        const title = App.Curriculum.lessonTitle(l);
        const icon = l.status === 'done' ? '✅' : (l.status === 'locked' ? '🔒' : App.Curriculum.TYPE_ICONS[l.type]);
        const action = l.status === 'locked'
          ? '<span class="cx-lock-reason">' + esc(l.reason) + '</span>'
          : '<button type="button" class="btn btn-sm ' + (l.status === 'done' ? 'btn-outline' : 'btn-primary') + '" data-cx-open="' + esc(l.id) + '">' + (l.status === 'done' ? 'გამეორება' : 'დაწყება') + '</button>';
        return '<li class="cx-lesson cx-lesson--' + l.status + '">' +
          '<span class="cx-lesson__icon" aria-hidden="true">' + icon + '</span>' +
          '<div class="cx-lesson__body"><div class="cx-lesson__type">' + App.Curriculum.TYPE_LABELS[l.type] + '</div>' +
          '<div class="cx-lesson__title" lang="en">' + esc(title) + '</div>' +
          '<div class="cx-skills">' + l.skills.map((s) => '<span>' + esc(s) + '</span>').join('') + '</div></div>' +
          '<div class="cx-lesson__action">' + action + '</div></li>';
      };
      return (
        '<section class="card cx-unit cx-unit--' + u.status + '">' +
          '<button type="button" class="cx-unit__head" data-cx-unit="' + u.id + '" aria-expanded="' + expanded + '">' +
            '<span class="cx-unit__num">' + u.number + '</span>' +
            '<span class="cx-unit__text"><span class="cx-unit__title" lang="en">' + esc(u.title) + '</span>' +
            '<span class="cx-unit__goal" lang="en">' + esc(u.goal) + '</span>' +
            (App.tr && App.tr('curriculum', u.id, 'goal') ? '<span class="cx-unit__goal" lang="ka">' + esc(App.tr('curriculum', u.id, 'goal')) + '</span>' : '') +
            '</span>' +
            badge +
          '</button>' +
          (expanded
            ? '<div class="cx-unit__body">' +
                (u.status === 'locked' ? '<p class="cx-mode cx-mode--locked">🔒 ' + esc(u.reason) + '</p>' : '') +
                '<ol class="cx-lessons">' + required.map(lessonRow).join('') + '</ol>' +
                '<details class="cx-extra"><summary>დამატებითი პრაქტიკა (' + extra.length + ')</summary><ol class="cx-lessons">' + extra.map(lessonRow).join('') + '</ol></details>' +
              '</div>'
            : '') +
        '</section>'
      );
    },

    renderPlayer: function () {
      const p = player;
      const title = p.kind === 'vocab' ? App.Curriculum.lessonTitle(p.lesson) : p.unit.level + ' · Unit ' + p.unit.number + ' checkpoint';
      const head =
        '<div class="player-topbar">' +
          '<button type="button" class="btn btn-outline btn-sm" id="cx-back">← სასწავლო გეგმაზე დაბრუნება</button>' +
          '<span class="stat-pill stat-pill--level">' + esc(p.unit.level) + ' · Unit ' + p.unit.number + '</span>' +
        '</div>';

      if (p.stage === 'loading') {
        return head + '<section class="card"><div class="loading-state" role="status"><div class="spinner"></div><p>ტესტი მზადდება...</p></div></section>';
      }

      if (p.kind === 'vocab' && p.stage === 'study') {
        const cards = p.words.map((w) =>
          '<li class="cx-word"><div class="cx-word__head"><strong lang="en">' + esc(w.word) + '</strong> <span class="cx-word__pos">' + esc(w.posLabel) + '</span>' +
          '<button type="button" class="audio-btn" data-cx-speak="' + esc(w.word) + '" aria-label="Listen: ' + esc(w.word) + '">🔊</button></div>' +
          '<div lang="en">' + esc(w.def) + '</div><div class="cx-word__ex" lang="en">' + esc(w.ex) + '</div>' +
          (w.collocations.length ? '<div class="cx-word__extra" lang="en">Collocations: ' + esc(w.collocations.join(', ')) + '</div>' : '') +
          (w.note ? '<div class="cx-word__extra" lang="en">💡 ' + esc(w.note) + '</div>' : '') +
          '</li>').join('');
        return head +
          '<section class="card"><h2 class="section-title" lang="en">' + esc(title) + '</h2>' +
          '<p class="section-subtitle">წაიკითხეთ განმარტებები და მაგალითები, მოუსმინეთ გამოთქმას, შემდეგ გაიარეთ ' + Math.min(VOCAB_QUIZ_SIZE, p.words.length) + '-კითხვიანი ტესტი. ' + App.Curriculum.passMark() + '%-ით სიტყვები დაემატება გამეორების რიგს.</p>' +
          '<ul class="cx-words">' + cards + '</ul>' +
          '<div style="text-align:center; margin-top:16px;"><button type="button" class="btn btn-primary" id="cx-start-quiz">ტესტის დაწყება →</button></div></section>';
      }

      if (p.stage === 'quiz') {
        const answered = Object.keys(p.answers).length;
        const qs = p.questions.map((q, i) => {
          const chosen = p.answers[i];
          const done = chosen !== undefined;
          const opts = q.options.map((o, j) => {
            let cls = 'option-btn';
            if (done && j === q.correct) cls += ' correct';
            else if (done && j === chosen) cls += ' wrong';
            return '<button type="button" class="' + cls + '" data-cx-q="' + i + '" data-cx-a="' + j + '"' + (done ? ' disabled' : '') + ' lang="en">' + esc(o) + '</button>';
          }).join('');
          return '<div class="drill-question-box"><div class="drill-q-title" lang="en">' + (i + 1) + '. ' + esc(q.q) + '</div><div class="drill-options">' + opts + '</div>' +
            (done ? '<div class="gx-feedback ' + (chosen === q.correct ? 'ok' : 'bad') + '" role="status" lang="en">' + (chosen === q.correct ? '✓ ' : '✗ ') + esc(q.why) + '</div>' : '') + '</div>';
        }).join('');
        return head +
          '<section class="card"><div class="section-header"><div><h2 class="section-title" lang="en">' + esc(title) + '</h2>' +
          '<p class="section-subtitle">ჩასათვლელად საჭიროა ' + App.Curriculum.passMark() + '%. ყოველი პასუხის შემდეგ ნახავთ ახსნას.</p></div>' +
          '<span class="stat-pill stat-pill--level">' + answered + ' / ' + p.questions.length + '</span></div>' + qs +
          '<div style="text-align:center; margin-top:16px;"><button type="button" class="btn btn-primary" id="cx-finish"' + (answered < p.questions.length ? ' disabled' : '') + '>შედეგის ნახვა</button></div></section>';
      }

      // result
      const pass = p.score >= App.Curriculum.passMark();
      const next = App.Curriculum.next();
      return head +
        '<section class="card cx-result">' +
          '<div class="cx-result__score ' + (pass ? 'ok' : 'bad') + '">' + p.score + '%</div>' +
          '<h2 class="section-title">' + (pass ? (p.kind === 'checkpoint' ? '🏁 ერთეული გავლილია!' : '🎉 გაკვეთილი დასრულდა!') : '🔁 კიდევ ერთხელ სცადეთ') + '</h2>' +
          '<p class="section-subtitle">' + (pass
            ? (p.kind === 'vocab' ? (p.addedToReview ? p.addedToReview + ' სიტყვა დაემატა დღის გამეორებას (ბარათები).' : 'სიტყვები უკვე გამეორების რიგშია.') : 'შემდეგი ერთეული გაიხსნა.')
            : 'ჩასათვლელად საჭიროა ' + App.Curriculum.passMark() + '%. გადახედეთ შეცდომების ახსნებს და სცადეთ თავიდან.') + '</p>' +
          (p.levelUp ? '<p class="cx-levelup">🎓 დონე ' + esc(p.levelUp.completed) + ' დასრულებულია! თქვენი ახალი დონეა ' + esc(p.levelUp.next) + '.</p>' : '') +
          '<div class="cx-result__actions">' +
            (pass ? '' : '<button type="button" class="btn btn-outline" id="cx-retry">↺ თავიდან</button>') +
            (next ? '<button type="button" class="btn btn-primary" data-cx-open="' + esc(next.lesson.id) + '">შემდეგი: <span lang="en">' + esc(App.Curriculum.lessonTitle(next.lesson)) + '</span> →</button>' : '') +
            '<button type="button" class="btn btn-outline" id="cx-back-2">სასწავლო გეგმა</button>' +
          '</div>' +
        '</section>';
    },

    bindTree: function (container) {
      container.querySelectorAll('[data-cx-level]').forEach((b) => b.addEventListener('click', () => {
        viewLevel = b.getAttribute('data-cx-level');
        expandedUnitId = null;
        this.render();
      }));
      container.querySelectorAll('[data-cx-unit]').forEach((b) => b.addEventListener('click', () => {
        const id = b.getAttribute('data-cx-unit');
        expandedUnitId = expandedUnitId === id ? '' : id;
        this.render();
      }));
      container.querySelectorAll('[data-cx-open]').forEach((b) => b.addEventListener('click', () => {
        App.Curriculum.openLesson(b.getAttribute('data-cx-open'));
      }));
    },

    bindPlayer: function (container) {
      const back = () => { player = null; this.render(); window.scrollTo({ top: 0 }); };
      ['#cx-back', '#cx-back-2'].forEach((sel) => {
        const el = container.querySelector(sel);
        if (el) el.addEventListener('click', back);
      });
      container.querySelectorAll('[data-cx-speak]').forEach((b) => b.addEventListener('click', () => App.Vocabulary.speak(b.getAttribute('data-cx-speak'))));
      const start = container.querySelector('#cx-start-quiz');
      if (start) start.addEventListener('click', () => {
        const levelPool = App.Vocabulary.getAllWords().filter((w) => w.level === player.unit.level);
        player.questions = shuffle(player.words).slice(0, VOCAB_QUIZ_SIZE).map((w) => wordQuestion(w, levelPool));
        player.answers = {};
        player.stage = 'quiz';
        this.render();
        window.scrollTo({ top: 0 });
      });
      container.querySelectorAll('[data-cx-q]').forEach((b) => b.addEventListener('click', () => {
        const i = Number(b.getAttribute('data-cx-q'));
        if (player.answers[i] !== undefined) return;
        player.answers[i] = Number(b.getAttribute('data-cx-a'));
        App.UI.playSound(player.answers[i] === player.questions[i].correct ? 'success' : 'click');
        const y = window.scrollY;
        this.render();
        window.scrollTo({ top: y, behavior: 'instant' });
      }));
      const finish = container.querySelector('#cx-finish');
      if (finish) finish.addEventListener('click', () => { this.finishPlayer(); this.render(); window.scrollTo({ top: 0 }); });
      const retry = container.querySelector('#cx-retry');
      if (retry) retry.addEventListener('click', () => {
        const id = player.lessonId;
        player = null;
        this.startLesson(id);
        this.render();
      });
      container.querySelectorAll('[data-cx-open]').forEach((b) => b.addEventListener('click', () => {
        player = null;
        App.Curriculum.openLesson(b.getAttribute('data-cx-open'));
      }));
    },

    // რეგისტრაციის/დონის ტესტის შემდეგ — სწორი დონის ჩანართი
    setActiveLevelTab: function (level) {
      if (LEVELS.indexOf(level) !== -1) {
        viewLevel = level;
        expandedUnitId = null;
      }
    }
  };

  App.Learn = Learn;
})(window);
