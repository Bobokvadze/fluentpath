/**
 * GRAMMAR.JS — გრამატიკის ძრავა (20 ტესტი თითოეულ თემაში + ცოცხალი ქულების დათვლა + რანდომიზაცია)
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function parseDrillItem(d) {
    if (typeof d === 'string') {
      const parts = d.split('|');
      return {
        q: parts[0] || '',
        options: [parts[1], parts[2], parts[3], parts[4]],
        correct: 0
      };
    }
    if (Array.isArray(d)) {
      return {
        q: d[0],
        options: d[1],
        correct: d[2]
      };
    }
    return d;
  }

  let activeLevelFilter = 'ALL';
  let selectedTopic = null;
  let preparedDrills = [];
  let drillAnswers = {};
  let practiceAnswers = {}; // ინგლისური „გაგების შემოწმება“ (GrammarEN.practice)

  // "question|correct|w1|w2|w3|explanation" → { q, options (shuffled), correct, why }
  function parsePractice(line) {
    const f = line.split('|');
    const correctText = f[1];
    const options = shuffleArray(f.slice(1, 5));
    return { q: f[0], options: options, correct: options.indexOf(correctText), why: f[5] || '' };
  }

  const Grammar = {
    getAllTopics: function () {
      const listA = Array.isArray(App.GrammarDataA) ? App.GrammarDataA : [];
      const listB = Array.isArray(App.GrammarDataB) ? App.GrammarDataB : [];
      const listC = Array.isArray(App.GrammarDataC) ? App.GrammarDataC : [];
      const combined = listA.concat(listB).concat(listC);

      return combined.map((item, idx) => {
        const topicNum = item.num || (idx + 1);
        const en = (App.GrammarEN || {})['grammar-topic-' + topicNum] || null;
        return {
          id: 'grammar-topic-' + topicNum,
          en: en,
          titleEn: en ? en.title : item.subtitle,
          topicNumber: topicNum,
          level: item.level,
          title: 'თემა ' + topicNum + ': ' + item.title,
          subtitle: item.subtitle,
          summary: item.rule.slice(0, 125) + '...',
          xp: 40,
          ruleExplanation: item.rule,
          formulas: item.formulas.map((f, fIdx) => ({
            type: fIdx === 0 ? 'pos' : (fIdx === 1 ? 'neg' : 'que'),
            label: f[0],
            structure: f[1],
            example: f[2]
          })),
          examples: item.examples.map((e) => ({ en: e[0], ka: e[1] })),
          mistakes: item.mistakes.map((m) => ({ wrong: m[0], right: m[1] })),
          drills: item.drills.map(parseDrillItem)
        };
      });
    },

    getCompletedIds: function () {
      const list = App.Storage.get('progress.completedGrammarIds', []);
      return Array.isArray(list) ? list : [];
    },

    isTopicUnlocked: function (topicIndex, allTopics) {
      if (topicIndex <= 0) return true;
      const completed = this.getCompletedIds();
      const prevTopic = allTopics[topicIndex - 1];
      if (!prevTopic) return true;
      return completed.indexOf(prevTopic.id) !== -1;
    },

    getCurrentFrontierTopicId: function (allTopics) {
      const completed = this.getCompletedIds();
      for (let i = 0; i < allTopics.length; i++) {
        if (completed.indexOf(allTopics[i].id) === -1) {
          return allTopics[i].id;
        }
      }
      return allTopics.length ? allTopics[allTopics.length - 1].id : '';
    },

    prepareRandomizedDrills: function (topic) {
      practiceAnswers = {};
      topic.practiceItems = topic.en && Array.isArray(topic.en.practice) ? topic.en.practice.map(parsePractice) : [];
      preparedDrills = topic.drills.map((d, idx) => {
        const correctText = d.options[d.correct];
        const mixed = shuffleArray(d.options);
        const cleanQ = d.q.replace(/^\d+\.\s*/, '');
        return {
          q: (idx + 1) + '. ' + cleanQ,
          options: mixed,
          correct: mixed.indexOf(correctText)
        };
      });
    },

    // ინგლისური სასწავლო ბლოკი: მიზანი, ახსნა, ფორმები, შედარება
    renderEnglishLesson: function (t) {
      const esc = App.UI.escapeHTML;
      const en = t.en;
      return (
        '<div class="gx-objective" lang="en"><strong>🎯 Objective:</strong> ' + esc(en.objective) + '</div>' +
        '<p class="gx-explanation" lang="en">' + esc(en.explanation) + '</p>' +
        '<h3 class="section-title" style="margin-top:18px; margin-bottom:8px;">🧩 Key patterns</h3>' +
        '<ul class="gx-patterns" lang="en">' + en.patterns.map((p) => '<li>' + esc(p) + '</li>').join('') + '</ul>' +
        '<div class="gx-compare" lang="en"><strong>⚖️ Don\'t confuse:</strong> ' + esc(en.compare) + '</div>'
      );
    },

    // „გაგების შემოწმება“ — 5 ინგლისური კითხვა, პასუხის შემდეგ ახსნით
    renderPractice: function (t) {
      const esc = App.UI.escapeHTML;
      let answered = 0;
      let right = 0;
      const items = t.practiceItems.map((item, qIdx) => {
        const chosen = practiceAnswers[qIdx];
        const done = chosen !== undefined;
        if (done) {
          answered++;
          if (chosen === item.correct) right++;
        }
        const opts = item.options.map((opt, oIdx) => {
          let cls = 'option-btn';
          if (done && oIdx === item.correct) cls += ' correct';
          else if (done && oIdx === chosen) cls += ' wrong';
          return '<button type="button" class="' + cls + '" data-practice-q="' + qIdx + '" data-practice-opt="' + oIdx + '"' + (done ? ' disabled' : '') + ' lang="en">' + esc(opt) + '</button>';
        }).join('');
        const feedback = done
          ? '<div class="gx-feedback ' + (chosen === item.correct ? 'ok' : 'bad') + '" role="status" lang="en">' +
              (chosen === item.correct ? '✓ Correct. ' : '✗ Not quite. ') + esc(item.why) + '</div>'
          : '';
        return '<div class="drill-question-box"><div class="drill-q-title" lang="en">' + (qIdx + 1) + '. ' + esc(item.q) + '</div><div class="drill-options">' + opts + '</div>' + feedback + '</div>';
      }).join('');
      return (
        '<section class="card">' +
          '<div class="section-header"><div>' +
            '<h3 class="section-title">✅ Check your understanding</h3>' +
            '<p class="section-subtitle">5 კითხვა ახსნებით — ყოველი პასუხის შემდეგ ნახავთ, რატომ არის ასე.</p>' +
          '</div><span class="stat-pill stat-pill--level">' + right + ' / ' + answered + '</span></div>' +
          items +
        '</section>'
      );
    },

    // სასწავლო გეგმიდან კონკრეტული თემის პირდაპირ გახსნა
    openTopic: function (topicId) {
      const topic = this.getAllTopics().find((x) => x.id === topicId);
      if (!topic) return;
      selectedTopic = topic;
      drillAnswers = {};
      this.prepareRandomizedDrills(topic);
    },

    speak: function (text) {
      if (!('speechSynthesis' in window)) return;
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = 0.92;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    },

    render: function () {
      const container = document.getElementById('app-view');
      if (!container) return;

      const allTopics = this.getAllTopics();

      if (selectedTopic) {
        this.renderTopicDetail(container, allTopics);
        return;
      }

      const completedIds = this.getCompletedIds();
      const frontierId = this.getCurrentFrontierTopicId(allTopics);
      const levels = ['ALL', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

      const tabsHtml = levels.map((lvl) => {
        const active = activeLevelFilter === lvl ? 'active' : '';
        const countForLvl = lvl === 'ALL'
          ? allTopics.length
          : allTopics.filter((t) => t.level === lvl).length;
        const label = lvl === 'ALL'
          ? 'ყველა (' + countForLvl + ' თემა)'
          : lvl + ' (' + (countForLvl || 15) + ' თემა)';
        return (
          '<button type="button" class="pill-tab ' + active + '" data-grammar-level="' + lvl + '">' +
            App.UI.escapeHTML(label) +
          '</button>'
        );
      }).join('');

      const filtered = allTopics.filter((t) => {
        return activeLevelFilter === 'ALL' || t.level === activeLevelFilter;
      });

      const cardsHtml = filtered.length > 0
        ? filtered.map((topic) => {
            const globalIdx = allTopics.findIndex((x) => x.id === topic.id);
            const isDone = completedIds.indexOf(topic.id) !== -1;
            const isUnlocked = this.isTopicUnlocked(globalIdx, allTopics);
            const isFrontier = (topic.id === frontierId);

            let cardCls = 'card grammar-card';
            if (isDone) cardCls += ' completed card-interactive';
            else if (isFrontier) cardCls += ' current-frontier card-interactive';
            else if (!isUnlocked) cardCls += ' locked-card';

            return (
              '<article class="' + cardCls + '" id="grammar-anchor-' + App.UI.escapeHTML(topic.id) + '">' +
                '<div>' +
                  '<div class="lesson-badge-row">' +
                    '<span class="lesson-level-tag">დონე ' + App.UI.escapeHTML(topic.level) + ' &bull; #' + topic.topicNumber + '</span>' +
                    '<span class="lesson-status-tag ' + (isDone ? 'done' : '') + '">' +
                      (!isUnlocked ? '🔒 ჩაკეტილია' : (isDone ? '✓ ათვისებულია' : (isFrontier ? '📍 მიმდინარე ()' : ''))) +
                    '</span>' +
                  '</div>' +
                  '<div style="margin-top: 12px;">' +
                    '<h3 class="lesson-title" lang="en">' + App.UI.escapeHTML(topic.titleEn) + '</h3>' +
                    '<div lang="ka" style="font-size:0.8rem; font-weight:600; color:var(--text-secondary); margin-bottom:6px;">' +
                      App.UI.escapeHTML(topic.title) +
                    '</div>' +
                    '<p class="lesson-desc" lang="en">' + App.UI.escapeHTML(topic.en ? topic.en.objective : topic.summary) + '</p>' +
                  '</div>' +
                '</div>' +
                '<div class="lesson-meta-footer">' +
                  '<span>🔊 ' + topic.examples.length + ' მაგალითი &bull; ✍️ ' + topic.drills.length + ' ტესტი</span>' +
                  '<button type="button" class="btn ' + (!isUnlocked ? 'btn-outline' : (isDone ? 'btn-outline' : 'btn-primary')) + ' btn-sm" ' +
                    'data-open-grammar="' + App.UI.escapeHTML(topic.id) + '" ' +
                    'data-grammar-idx="' + globalIdx + '">' +
                    (!isUnlocked ? '🔒 ჩაკეტილია' : (isDone ? 'გადამეორება' : 'შესწავლა &rarr;')) +
                  '</button>' +
                '</div>' +
              '</article>'
            );
          }).join('')
        : '<div class="card" style="grid-column:1/-1; text-align:center; padding:36px;">' +
            '<h3 class="section-title">' + App.UI.escapeHTML(activeLevelFilter) + ' დონის 15 თემა (300 ტესტი) მზადდება მომდევნო ეტაპისთვის</h3>' +
            '<p style="color:var(--text-secondary); margin-top:8px;">A დონე (A1 და A2 — 30 თემა, 600 ტესტი) სრულად ჩატვირთულია. მომდევნო ნაბიჯზე დაემატება B დონე (B1–B2: 30 თემა, 600 ტესტი).</p>' +
          '</div>';

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              '<div>' +
                '<h2 class="section-title">ინგლისური გრამატიკის სრული კურსი (თითოეულ თემაში 20 ტესტი და 8 მაგალითი)</h2>' +
                '<p class="section-subtitle">ყველა თემა მოიცავს დეტალურ წესს, ფორმულების ცხრილს, 8 გახმოვანებულ მაგალითს, ხშირ შეცდომებს და 20 ინტერაქტიულ ტესტს.</p>' +
              '</div>' +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">ათვისებულია: ' + completedIds.length + ' / ' + allTopics.length + '</span>' +
                '<button type="button" class="btn btn-primary btn-sm" id="jump-grammar-frontier-btn">🎯 ჩემს თემაზე გადასვლა</button>' +
              '</div>' +
            '</div>' +
            '<div class="filter-bar" style="margin-bottom:0;">' +
              '<div class="pill-tabs">' + tabsHtml + '</div>' +
            '</div>' +
          '</section>' +

          '<section class="grammar-grid" aria-label="გრამატიკული თემები">' +
            cardsHtml +
          '</section>' +
        '</div>';

      container.querySelectorAll('[data-grammar-level]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeLevelFilter = btn.getAttribute('data-grammar-level');
          App.UI.playSound('click');
          this.render();
        });
      });

      const jumpBtn = container.querySelector('#jump-grammar-frontier-btn');
      if (jumpBtn) {
        jumpBtn.addEventListener('click', () => {
          activeLevelFilter = 'ALL';
          this.render();
          window.setTimeout(() => {
            const el = document.getElementById('grammar-anchor-' + frontierId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 60);
        });
      }

      container.querySelectorAll('[data-open-grammar]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-grammar-idx'));
          const unlocked = this.isTopicUnlocked(idx, allTopics);

          if (!unlocked) {
            const cardEl = btn.closest('.grammar-card');
            if (cardEl) {
              cardEl.classList.remove('shake');
              void cardEl.offsetWidth;
              cardEl.classList.add('shake');
            }
            const prevTopic = allTopics[idx - 1];
            App.UI.toast('🔒 ეს თემა ჩაკეტილია! ჯერ დაასრულეთ: «' + (prevTopic ? prevTopic.title : 'წინა თემა') + '».', 'warning', 3200);
            return;
          }

          const id = btn.getAttribute('data-open-grammar');
          selectedTopic = allTopics.find((t) => t.id === id) || null;
          if (selectedTopic) {
            this.prepareRandomizedDrills(selectedTopic);
          }
          drillAnswers = {};
          App.UI.playSound('click');
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    },

    renderTopicDetail: function (container, allTopics) {
      const t = selectedTopic;
      const formulaRowsHtml = t.formulas.map((f) => {
        return (
          '<tr>' +
            '<td><span class="formula-badge ' + App.UI.escapeHTML(f.type) + '">' + App.UI.escapeHTML(f.label) + '</span></td>' +
            '<td><strong>' + App.UI.escapeHTML(f.structure) + '</strong></td>' +
            '<td>' + App.UI.escapeHTML(f.example) + '</td>' +
          '</tr>'
        );
      }).join('');

      const examplesHtml = t.examples.map((ex, idx) => {
        return (
          '<div class="theory-phrase-item">' +
            '<div>' +
              '<div class="phrase-en">' + (idx + 1) + '. ' + App.UI.escapeHTML(ex.en) + '</div>' +
              '<div class="phrase-ka">' + App.UI.escapeHTML(ex.ka) + '</div>' +
            '</div>' +
            '<button type="button" class="audio-btn" data-grammar-speak="' + App.UI.escapeHTML(ex.en) + '" title="მოსმენა">&#128266;</button>' +
          '</div>'
        );
      }).join('');

      const mistakesHtml = t.mistakes.map((m) => {
        return (
          '<div class="mistake-box" style="margin-bottom:10px;">' +
            '<div class="mistake-item wrong">' + App.UI.escapeHTML(m.wrong) + '</div>' +
            '<div class="mistake-item right">' + App.UI.escapeHTML(m.right) + '</div>' +
          '</div>'
        );
      }).join('');

      let correctCount = 0;
      const drillsHtml = preparedDrills.map((d, qIndex) => {
        const answeredChoice = drillAnswers[qIndex];
        const hasAnswered = answeredChoice !== undefined;
        if (hasAnswered && answeredChoice === d.correct) {
          correctCount++;
        }

        const optsHtml = d.options.map((opt, oIndex) => {
          let cls = 'option-btn';
          if (hasAnswered) {
            if (oIndex === d.correct) cls += ' correct';
            else if (oIndex === answeredChoice) cls += ' wrong';
          }
          return (
            '<button type="button" class="' + cls + '" data-drill-q="' + qIndex + '" data-drill-opt="' + oIndex + '" ' + (hasAnswered ? 'disabled' : '') + '>' +
              App.UI.escapeHTML(opt) +
            '</button>'
          );
        }).join('');

        return (
          '<div class="drill-question-box">' +
            '<div class="drill-q-title">' + App.UI.escapeHTML(d.q) + '</div>' +
            '<div class="drill-options">' + optsHtml + '</div>' +
            (hasAnswered && answeredChoice !== d.correct && t.en
              ? '<div class="gx-feedback bad" role="status" lang="en">💡 Rule: ' + App.UI.escapeHTML(t.en.tip) + '</div>'
              : '') +
          '</div>'
        );
      }).join('');

      const answeredCount = Object.keys(drillAnswers).length;
      const totalDrills = preparedDrills.length;
      const progressPct = totalDrills ? Math.round((answeredCount / totalDrills) * 100) : 0;

      container.innerHTML =
        '<div class="grammar-detail-wrap">' +
          '<div class="player-topbar">' +
            '<button type="button" class="btn btn-outline btn-sm" id="back-grammar-list-btn">&larr; გრამატიკის სიაში დაბრუნება</button>' +
            '<span class="stat-pill stat-pill--level">დონე ' + App.UI.escapeHTML(t.level) + ' &bull; თემა #' + t.topicNumber + '</span>' +
          '</div>' +

          '<section class="card">' +
            '<h2 class="section-title" lang="en" style="font-size:1.38rem; margin-bottom:4px;">' + App.UI.escapeHTML(t.titleEn) + '</h2>' +
            '<p lang="ka" style="color:var(--text-secondary); font-weight:600; font-size:0.9rem; margin-bottom:14px;">' + App.UI.escapeHTML(t.title) + '</p>' +
            (t.en ? this.renderEnglishLesson(t) : '') +
            '<details class="gx-ka"' + (t.en ? '' : ' open') + '><summary>ქართული ახსნა</summary>' +
              '<p lang="ka" style="font-size:0.95rem; color:var(--text-primary); line-height:1.75; margin-top:8px;">' + App.UI.escapeHTML(t.ruleExplanation) + '</p>' +
            '</details>' +

            '<h3 class="section-title" style="margin-top:22px; margin-bottom:8px;">📐 სტრუქტურა, ფორმულები და მართლწერა</h3>' +
            '<table class="formula-table">' +
              '<thead><tr><th>ფორმა</th><th>სტრუქტურა</th><th>ნიმუში / შენიშვნა</th></tr></thead>' +
              '<tbody>' + formulaRowsHtml + '</tbody>' +
            '</table>' +

            '<h3 class="section-title" style="margin-top:22px; margin-bottom:8px;">🔊 ' + t.examples.length + ' პრაქტიკული მაგალითი კონტექსტში</h3>' +
            '<div class="theory-phrase-list">' + examplesHtml + '</div>' +

            '<h3 class="section-title" style="margin-top:22px; margin-bottom:8px;">⚠️ ხშირი შეცდომები და სწორი ფორმები</h3>' +
            mistakesHtml +
          '</section>' +
          (t.practiceItems && t.practiceItems.length ? this.renderPractice(t) : '') +

          '<section class="card">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 class="section-title">პრაქტიკული ტესტირება — ' + totalDrills + ' კითხვა</h3>' +
                '<p class="section-subtitle">უპასუხეთ ოცივე კითხვას თემის დასასრულებლად და მომდევნო გრამატიკული თემის გასახსნელად.</p>' +
              '</div>' +
              '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">პასუხი: ' + answeredCount + ' / ' + totalDrills + '</span>' +
                '<span class="stat-pill stat-pill--xp">✓ სწორია: ' + correctCount + '</span>' +
                '<button type="button" class="btn btn-outline btn-sm" id="reset-grammar-drills-btn">🔄 თავიდან არევა</button>' +
              '</div>' +
            '</div>' +
            '<div style="margin-bottom:18px;">' +
              App.UI.renderProgressBar(progressPct, 'ტესტის შესრულების პროგრესი', progressPct + '%') +
            '</div>' +
            drillsHtml +
            '<div style="display:flex; justify-content:flex-end; margin-top:14px;">' +
              '<button type="button" class="btn btn-primary" id="complete-grammar-btn">თემის დასრულება და მომდევნოს გახსნა &rarr;</button>' +
            '</div>' +
          '</section>' +
        '</div>';

      const backBtn = container.querySelector('#back-grammar-list-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          selectedTopic = null;
          this.render();
        });
      }

      const resetDrillsBtn = container.querySelector('#reset-grammar-drills-btn');
      if (resetDrillsBtn) {
        resetDrillsBtn.addEventListener('click', () => {
          this.prepareRandomizedDrills(t);
          drillAnswers = {};
          App.UI.playSound('click');
          App.UI.toast('20-ვე კითხვის პასუხები თავიდან აირია!', 'info', 2000);
          this.renderTopicDetail(container, allTopics);
        });
      }

      container.querySelectorAll('[data-grammar-speak]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.speak(btn.getAttribute('data-grammar-speak'));
        });
      });

      container.querySelectorAll('[data-practice-q]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const qIdx = Number(btn.getAttribute('data-practice-q'));
          if (practiceAnswers[qIdx] !== undefined) return;
          const optIdx = Number(btn.getAttribute('data-practice-opt'));
          const scrollY = window.scrollY;
          practiceAnswers[qIdx] = optIdx;
          App.UI.playSound(optIdx === t.practiceItems[qIdx].correct ? 'success' : 'click');
          this.renderTopicDetail(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: 'instant' });
        });
      });

      container.querySelectorAll('[data-drill-q]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const qIdx = Number(btn.getAttribute('data-drill-q'));
          const optIdx = Number(btn.getAttribute('data-drill-opt'));
          const scrollY = window.scrollY;
          drillAnswers[qIdx] = optIdx;
          if (optIdx === preparedDrills[qIdx].correct) {
            App.UI.playSound('success');
          } else {
            App.UI.playSound('click');
          }
          this.renderTopicDetail(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: 'instant' });
        });
      });

      const completeBtn = container.querySelector('#complete-grammar-btn');
      if (completeBtn) {
        completeBtn.addEventListener('click', () => {
          if (Object.keys(drillAnswers).length < preparedDrills.length) {
            App.UI.toast(
              'გთხოვთ, უპასუხოთ ოცივე კითხვას (' + Object.keys(drillAnswers).length + '/' + preparedDrills.length + ') თემის დასახურად.',
              'warning'
            );
            return;
          }

          const completedIds = this.getCompletedIds();
          if (completedIds.indexOf(t.id) === -1) {
            completedIds.push(t.id);
            App.Storage.set('progress.completedGrammarIds', completedIds);
          }

          // სუსტი მხარეების ანალიზისთვის ვინახავთ თითოეული თემის საუკეთესო შედეგს
          const scores = Object.assign({}, App.Storage.get('progress.grammarScores', {}) || {});
          const prev = scores[t.id];
          if (!prev || correctCount >= prev.score) {
            scores[t.id] = { score: correctCount, total: totalDrills, title: t.title, level: t.level, topicNumber: t.topicNumber };
            App.Storage.set('progress.grammarScores', scores);
          }

          App.Progress.recordActivity({
            xp: t.xp,
            title: 'ათვისებულია გრამატიკა #' + t.topicNumber + ' (' + correctCount + '/' + totalDrills + '): ' + t.title,
            category: 'გრამატიკა'
          });

          const currentGlobalIdx = allTopics.findIndex((x) => x.id === t.id);
          const nextTopic = allTopics[currentGlobalIdx + 1];
          App.UI.playSound('success');
          App.UI.toast(
            '✓ თემა #' + t.topicNumber + ' დასრულდა (შედეგი: ' + correctCount + '/20)! ' +
            (nextTopic ? 'გაიხსნა: ' + nextTopic.title : ''),
            'success',
            4200
          );

          selectedTopic = null;
          this.render();
          window.setTimeout(() => {
            const targetId = nextTopic ? ('grammar-anchor-' + nextTopic.id) : ('grammar-anchor-' + t.id);
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 80);
        });
      }
    }
  };

  App.Grammar = Grammar;
})(window);