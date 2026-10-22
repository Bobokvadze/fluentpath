/**
 * QUIZZES.JS — გამოცდებისა და ტესტების ცენტრი (A1–C2)
 * აგენერირებს ულიმიტო ტესტებს ლექსიკის (3,000 სიტყვა), გრამატიკის (90 თემა),
 * კითხვის (90 ტექსტი), მოსმენისა (90 თემა) და წერის (90 თემა) ერთიანი ბაზიდან.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  let activeExamSession = null; // null = მთავარი მენიუ, ობიექტი = მიმდინარე ტესტი
  let selectedQuestionCount = 15;
  let timerEnabled = false;
  let timerInterval = null;
  let elapsedSeconds = 0;

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

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  const Quizzes = {
    stopTimer: function () {
      if (timerInterval) {
        window.clearInterval(timerInterval);
        timerInterval = null;
      }
    },

    startTimer: function () {
      this.stopTimer();
      elapsedSeconds = 0;
      if (!timerEnabled) return;
      timerInterval = window.setInterval(() => {
        elapsedSeconds++;
        const el = document.getElementById("quiz-live-timer");
        if (el) el.textContent = "⏱️ " + formatTime(elapsedSeconds);
      }, 1000);
    },

    /**
     * კითხვების გენერაცია ყველა მოდულიდან (Vocabulary, Grammar, Reading, Listening, Writing)
     */
    buildQuestionPool: function (mode, targetLevel) {
      const pool = [];

      // 1. ლექსიკის კითხვების გენერაცია
      if (mode === "ALL" || mode === "PLACEMENT" || mode === "LEVEL_EXAM" || mode === "VOCAB") {
        const allWords = (App.Vocabulary && typeof App.Vocabulary.getAllWords === "function")
          ? App.Vocabulary.getAllWords()
          : [];
        const levelWords = allWords.filter((w) => !targetLevel || targetLevel === "ALL" || w.level === targetLevel);
        const sampledWords = shuffleArray(levelWords).slice(0, 40);

        sampledWords.forEach((w, idx) => {
          const distractors = shuffleArray(
            levelWords.filter((other) => other.id !== w.id)
          ).slice(0, 3);

          if (distractors.length === 3) {
            if (idx % 2 === 0) {
              const opts = shuffleArray([w.ka, distractors[0].ka, distractors[1].ka, distractors[2].ka]);
              pool.push({
                level: w.level,
                source: "ლექსიკონი • " + w.level,
                q: "როგორ ითარგმნება ქართულად სიტყვა «" + w.en + "»?",
                options: opts,
                correct: opts.indexOf(w.ka),
                explanation: w.en + " = " + w.ka + (w.exampleEn ? ' ("' + w.exampleEn + '")' : "")
              });
            } else {
              const opts = shuffleArray([w.en, distractors[0].en, distractors[1].en, distractors[2].en]);
              pool.push({
                level: w.level,
                source: "ლექსიკონი • " + w.level,
                q: "რომელი ინგლისური სიტყვა ნიშნავს: «" + w.ka + "»?",
                options: opts,
                correct: opts.indexOf(w.en),
                explanation: w.ka + " = " + w.en
              });
            }
          }
        });
      }

      // 2. გრამატიკის კითხვები
      if (mode === "ALL" || mode === "PLACEMENT" || mode === "LEVEL_EXAM" || mode === "GRAMMAR") {
        const gTopics = (App.Grammar && typeof App.Grammar.getAllTopics === "function")
          ? App.Grammar.getAllTopics()
          : [];
        const filteredG = gTopics.filter((t) => !targetLevel || targetLevel === "ALL" || t.level === targetLevel);
        shuffleArray(filteredG).slice(0, 20).forEach((t) => {
          if (Array.isArray(t.questions)) {
            t.questions.slice(0, 2).forEach((qItem) => {
              const correctAns = qItem.options[qItem.correct];
              const mixed = shuffleArray(qItem.options);
              pool.push({
                level: t.level,
                source: "გრამატიკა • " + t.titleEn,
                q: qItem.q.replace(/^\d+\.\s*/, ""),
                options: mixed,
                correct: mixed.indexOf(correctAns),
                explanation: "თემა: " + t.titleKa + " (" + t.titleEn + ")"
              });
            });
          }
        });
      }

      // 3. კითხვის, მოსმენისა და წერის კითხვები
      if (mode === "ALL" || mode === "PLACEMENT" || mode === "LEVEL_EXAM" || mode === "SKILLS") {
        const skillSources = [
          { mod: App.Reading, getFn: "getAllStories", label: "კითხვა" },
          { mod: App.Listening, getFn: "getAllTopics", label: "მოსმენა" },
          { mod: App.Writing, getFn: "getAllTopics", label: "წერა" }
        ];

        skillSources.forEach((src) => {
          if (src.mod && typeof src.mod[src.getFn] === "function") {
            const items = src.mod[src.getFn]().filter((x) => !targetLevel || targetLevel === "ALL" || x.level === targetLevel);
            shuffleArray(items).slice(0, 10).forEach((item) => {
              if (Array.isArray(item.questions) && item.questions.length > 0) {
                const qItem = item.questions[Math.floor(Math.random() * item.questions.length)];
                const correctAns = qItem.options[qItem.correct];
                const mixed = shuffleArray(qItem.options);
                pool.push({
                  level: item.level,
                  source: src.label + " • " + item.titleEn,
                  q: qItem.q.replace(/^\d+\.\s*/, ""),
                  options: mixed,
                  correct: mixed.indexOf(correctAns),
                  explanation: src.label + ": «" + item.titleKa + "»"
                });
              }
            });
          }
        });
      }

      return shuffleArray(pool);
    },

    startQuizSession: function (config) {
      const count = config.count || selectedQuestionCount;
      let questions = [];

      if (config.mode === "PLACEMENT") {
        // თითოეული დონიდან (A1..C2) თანაბრად ავიღოთ კითხვები დიაგნოსტიკისთვის
        const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
        levels.forEach((lvl) => {
          const lvlPool = this.buildQuestionPool("PLACEMENT", lvl).slice(0, 4);
          questions = questions.concat(lvlPool);
        });
      } else {
        questions = this.buildQuestionPool(config.mode, config.level).slice(0, count);
      }

      if (questions.length === 0) {
        App.UI.toast("კითხვების ბაზა იტვირთება, გთხოვთ სცადოთ თავიდან.", "warning");
        return;
      }

      activeExamSession = {
        title: config.title,
        subtitle: config.subtitle,
        mode: config.mode,
        level: config.level || "ALL",
        questions: questions,
        currentIdx: 0,
        answers: {},
        finished: false
      };

      this.startTimer();
      App.UI.playSound("click");
      this.render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    finishCurrentSession: function () {
      if (!activeExamSession) return;
      this.stopTimer();
      activeExamSession.finished = true;

      let correctCount = 0;
      activeExamSession.questions.forEach((q, idx) => {
        if (activeExamSession.answers[idx] === q.correct) {
          correctCount++;
        }
      });

      const total = activeExamSession.questions.length;
      const pct = total ? Math.round((correctCount / total) * 100) : 0;
      const earnedXp = Math.max(15, correctCount * 5);

      const completedCount = Number(App.Storage.get("progress.quizzesCompleted", 0)) + 1;
      App.Storage.set("progress.quizzesCompleted", completedCount);
      App.Storage.set("progress.moduleCompletion.quizzes", Math.min(100, completedCount * 10));

      // თუ სადიაგნოსტიკო ტესტი იყო, გამოვთვალოთ რეკომენდებული CEFR დონე
      if (activeExamSession.mode === "PLACEMENT") {
        let recLevel = "A1";
        if (pct >= 90) recLevel = "C2";
        else if (pct >= 76) recLevel = "C1";
        else if (pct >= 62) recLevel = "B2";
        else if (pct >= 46) recLevel = "B1";
        else if (pct >= 30) recLevel = "A2";
        activeExamSession.recommendedLevel = recLevel;
      }

      if (App.Progress && typeof App.Progress.recordActivity === "function") {
        App.Progress.recordActivity({
          xp: earnedXp,
          title: "ტესტი: " + activeExamSession.title + " (" + pct + "%)",
          category: "ტესტები",
          metricKey: "quizzesCompleted"
        });
      }

      App.UI.playSound("success");
      App.UI.toast("🏆 ტესტი დასრულდა! შედეგი: " + pct + "% (+" + earnedXp + " XP)", "success", 4200);
      this.render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;

      if (activeExamSession) {
        if (activeExamSession.finished) {
          this.renderResultsView(container);
        } else {
          this.renderActiveQuizView(container);
        }
        return;
      }

      const quizzesCompleted = Number(App.Storage.get("progress.quizzesCompleted", 0));
      const countOptions = [10, 15, 25];
      const countPillsHtml = countOptions.map((c) => {
        const act = selectedQuestionCount === c ? "active" : "";
        return '<button type="button" class="pill-tab ' + act + '" data-quiz-count="' + c + '">' + c + " კითხვა</button>";
      }).join("");

      const levels = [
        { lvl: "A1", name: "დამწყები (Beginner)", icon: "🌱", desc: "საბაზისო ლექსიკა, მარტივი დროები და ყოველდღიური დიალოგები." },
        { lvl: "A2", name: "ელემენტარული (Elementary)", icon: "📘", desc: "მგზავრობა, შოპინგი, წარსული დროები და მარტივი წერილები." },
        { lvl: "B1", name: "საშუალო (Intermediate)", icon: "🚀", desc: "სამუშაო გარემო, პერფექტული დროები, სტატიები და პოდკასტები." },
        { lvl: "B2", name: "საშუალოზე მაღალი (Upper-Int)", icon: "💼", desc: "საქმიანი მემორანდუმები, არგუმენტირებული ესეები და რთული გრამატიკა." },
        { lvl: "C1", name: "მაღალი (Advanced)", icon: "🎓", desc: "აკადემიური კვლევა, ფინანსური ანალიზი, ინვერსია და იდიომები." },
        { lvl: "C2", name: "სრულყოფილი (Mastery)", icon: "👑", desc: "ფილოსოფიური, სამეცნიერო და უმაღლესი რიტორიკული სინთეზი." }
      ];

      const levelExamsHtml = levels.map((item) => {
        return (
          '<article class="quiz-mode-card">' +
            "<div>" +
              '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">' +
                '<span class="stat-pill stat-pill--level">' + item.icon + " დონე " + item.lvl + "</span>" +
                '<span style="font-size:0.8rem; font-weight:700; color:var(--brand-primary);">+100 XP-მდე</span>' +
              "</div>" +
              '<h3 class="section-title" style="font-size:1.1rem; margin-bottom:6px;">' + item.lvl + " — " + App.UI.escapeHTML(item.name) + "</h3>" +
              '<p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">' + App.UI.escapeHTML(item.desc) + "</p>" +
            "</div>" +
            '<button type="button" class="btn btn-primary btn-sm" data-start-level-exam="' + item.lvl + '">' +
              item.lvl + " გამოცდის დაწყება &rarr;" +
            "</button>" +
          "</article>"
        );
      }).join("");

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<!-- ზედა პანელი და პარამეტრები -->' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">☑️ ტესტებისა და სასერტიფიკატო გამოცდების ცენტრი</h2>' +
                '<p class="section-subtitle">შეამოწმეთ თქვენი ცოდნა დონის განმსაზღვრელი დიაგნოსტიკური ტესტით, ჩააბარეთ A1–C2 საფეხურების შემაჯამებელი გამოცდები ან ივარჯიშეთ სწრაფი თემატური ქვიზებით.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--xp">ჩაბარებული ტესტები: ' + quizzesCompleted + "</span>" +
              "</div>" +
            "</div>" +

            '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; padding-top:8px; border-top:1px solid var(--border-subtle);">' +
              '<div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">' +
                '<span style="font-size:0.85rem; font-weight:700; color:var(--text-secondary);">კითხვების რაოდენობა:</span>' +
                '<div class="pill-tabs">' + countPillsHtml + "</div>" +
              "</div>" +
              '<button type="button" class="btn ' + (timerEnabled ? "btn-secondary" : "btn-outline") + ' btn-sm" id="toggle-quiz-timer-btn">' +
                (timerEnabled ? "⏱️ ტაიმერი: ჩართულია" : "♾️ ტაიმერი: გამორთულია") +
              "</button>" +
            "</div>" +
          "</section>" +

          '<!-- სადიაგნოსტიკო და სწრაფი თემატური ტესტები -->' +
          '<section class="quiz-modes-grid">' +
            '<article class="quiz-mode-card" style="border:2px solid var(--brand-primary);">' +
              "<div>" +
                '<span class="stat-pill stat-pill--xp" style="margin-bottom:10px;">🎯 დიაგნოსტიკა • 24 კითხვა</span>' +
                '<h3 class="section-title" style="font-size:1.15rem; margin-bottom:6px;">CEFR დონის განმსაზღვრელი ტესტი</h3>' +
                '<p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">კომპლექსური ტესტი A1-დან C2-ის ჩათვლით, რომელიც ადგენს თქვენს რეალურ დონეს და გირჩევთ სასწავლო საფეხურს.</p>' +
              "</div>" +
              '<button type="button" class="btn btn-primary" id="start-placement-exam-btn">დიაგნოსტიკის დაწყება &rarr;</button>' +
            "</article>" +

            '<article class="quiz-mode-card">' +
              "<div>" +
                '<span class="stat-pill stat-pill--level" style="margin-bottom:10px;">🗂️ ლექსიკის სპრინტი</span>' +
                '<h3 class="section-title" style="font-size:1.15rem; margin-bottom:6px;">3,000 სიტყვის შემაჯამებელი ტესტი</h3>' +
                '<p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">შემთხვევითი კითხვები 3,000-სიტყვიანი ლექსიკონიდან (ინგლისურ-ქართული და ქართულ-ინგლისური).</p>' +
              "</div>" +
              '<button type="button" class="btn btn-outline" id="start-vocab-sprint-btn">ლექსიკის ტესტი &rarr;</button>' +
            "</article>" +

            '<article class="quiz-mode-card">' +
              "<div>" +
                '<span class="stat-pill stat-pill--level" style="margin-bottom:10px;">🌐 გრამატიკის მარათონი</span>' +
                '<h3 class="section-title" style="font-size:1.15rem; margin-bottom:6px;">90 გრამატიკული თემის ტესტი</h3>' +
                '<p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">შერეული პრაქტიკული ტესტები დროებზე, მოდალურ ზმნებზე, პირობით წინადადებებსა და სინტაქსზე.</p>' +
              "</div>" +
              '<button type="button" class="btn btn-outline" id="start-grammar-sprint-btn">გრამატიკის ტესტი &rarr;</button>' +
            "</article>" +
          "</section>" +

          '<!-- CEFR დონეების სასერტიფიკატო გამოცდები -->' +
          '<section class="card">' +
            '<div class="section-header" style="margin-bottom:16px;">' +
              "<div>" +
                '<h3 class="section-title">🏆 CEFR დონის შემაჯამებელი გამოცდები (A1 – C2)</h3>' +
                '<p class="section-subtitle">თითოეული გამოცდა აერთიანებს შესაბამისი დონის ლექსიკას, გრამატიკას, კითხვას, მოსმენასა და წერას.</p>' +
              "</div>" +
            "</div>" +
            '<div class="quiz-modes-grid">' +
              levelExamsHtml +
            "</div>" +
          "</section>" +
        "</div>";

      container.querySelectorAll("[data-quiz-count]").forEach((btn) => {
        btn.addEventListener("click", () => {
          selectedQuestionCount = Number(btn.getAttribute("data-quiz-count"));
          App.UI.playSound("click");
          this.render();
        });
      });

      const timerBtn = container.querySelector("#toggle-quiz-timer-btn");
      if (timerBtn) {
        timerBtn.addEventListener("click", () => {
          timerEnabled = !timerEnabled;
          App.UI.playSound("click");
          this.render();
        });
      }

      const placementBtn = container.querySelector("#start-placement-exam-btn");
      if (placementBtn) {
        placementBtn.addEventListener("click", () => {
          this.startQuizSession({
            title: "CEFR დონის განმსაზღვრელი დიაგნოსტიკური ტესტი",
            subtitle: "Placement Exam (A1–C2)",
            mode: "PLACEMENT",
            level: "ALL",
            count: 24
          });
        });
      }

      const vocabBtn = container.querySelector("#start-vocab-sprint-btn");
      if (vocabBtn) {
        vocabBtn.addEventListener("click", () => {
          this.startQuizSession({
            title: "ლექსიკის შემაჯამებელი სპრინტი",
            subtitle: "Vocabulary Sprint",
            mode: "VOCAB",
            level: "ALL",
            count: selectedQuestionCount
          });
        });
      }

      const grammarBtn = container.querySelector("#start-grammar-sprint-btn");
      if (grammarBtn) {
        grammarBtn.addEventListener("click", () => {
          this.startQuizSession({
            title: "გრამატიკის შემაჯამებელი ტესტი",
            subtitle: "Grammar Mastery Test",
            mode: "GRAMMAR",
            level: "ALL",
            count: selectedQuestionCount
          });
        });
      }

      container.querySelectorAll("[data-start-level-exam]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const lvl = btn.getAttribute("data-start-level-exam");
          this.startQuizSession({
            title: lvl + " დონის სასერტიფიკატო გამოცდა",
            subtitle: "CEFR Level " + lvl + " Comprehensive Exam",
            mode: "LEVEL_EXAM",
            level: lvl,
            count: selectedQuestionCount
          });
        });
      });
    },

    renderActiveQuizView: function (container) {
      const s = activeExamSession;
      const total = s.questions.length;
      const answeredCount = Object.keys(s.answers).length;
      const progressPct = total ? Math.round((answeredCount / total) * 100) : 0;

      const questionsHtml = s.questions.map((qObj, qIdx) => {
        const chosen = s.answers[qIdx];
        const hasAnswered = chosen !== undefined;

        const optsHtml = qObj.options.map((opt, oIdx) => {
          let cls = "option-btn";
          if (hasAnswered) {
            if (oIdx === qObj.correct) cls += " correct";
            else if (oIdx === chosen) cls += " wrong";
          }
          return (
            '<button type="button" class="' + cls + '" data-exam-q="' + qIdx + '" data-exam-opt="' + oIdx + '" ' + (hasAnswered ? "disabled" : "") + ">" +
              App.UI.escapeHTML(opt) +
            "</button>"
          );
        }).join("");

        return (
          '<div class="drill-question-box">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
              '<span class="stat-pill stat-pill--level" style="font-size:0.74rem;">' + App.UI.escapeHTML(qObj.source) + "</span>" +
              '<span style="font-size:0.78rem; color:var(--text-muted);">#' + (qIdx + 1) + " / " + total + "</span>" +
            "</div>" +
            '<div class="drill-q-title">' + (qIdx + 1) + ". " + App.UI.escapeHTML(qObj.q) + "</div>" +
            '<div class="drill-options">' + optsHtml + "</div>" +
            (hasAnswered && qObj.explanation
              ? '<div style="margin-top:8px; font-size:0.82rem; color:var(--text-secondary);">💡 ' + App.UI.escapeHTML(qObj.explanation) + "</div>"
              : "") +
          "</div>"
        );
      }).join("");

      container.innerHTML =
        '<div class="reading-detail-wrap">' +
          '<div class="player-topbar">' +
            '<button type="button" class="btn btn-outline btn-sm" id="quit-exam-btn">&larr; ტესტების ცენტრში დაბრუნება</button>' +
            '<div style="display:flex; gap:8px; align-items:center;">' +
              (timerEnabled ? '<span class="quiz-timer-pill" id="quiz-live-timer">⏱️ ' + formatTime(elapsedSeconds) + "</span>" : "") +
              '<span class="stat-pill stat-pill--level">პასუხი: ' + answeredCount + " / " + total + "</span>" +
            "</div>" +
          "</div>" +

          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">' + App.UI.escapeHTML(s.title) + "</h2>" +
                '<p class="section-subtitle">' + App.UI.escapeHTML(s.subtitle) + "</p>" +
              "</div>" +
            "</div>" +
            '<div style="margin-bottom:20px;">' +
              App.UI.renderProgressBar(progressPct, "შესრულების პროგრესი", progressPct + "%") +
            "</div>" +

            questionsHtml +

            '<div style="display:flex; justify-content:flex-end; margin-top:16px;">' +
              '<button type="button" class="btn btn-primary" id="submit-exam-btn">გამოცდის დასრულება და შედეგის ნახვა &rarr;</button>' +
            "</div>" +
          "</section>" +
        "</div>";

      const quitBtn = container.querySelector("#quit-exam-btn");
      if (quitBtn) {
        quitBtn.addEventListener("click", () => {
          this.stopTimer();
          activeExamSession = null;
          this.render();
        });
      }

      container.querySelectorAll("[data-exam-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = Number(btn.getAttribute("data-exam-q"));
          const oIdx = Number(btn.getAttribute("data-exam-opt"));
          const scrollY = window.scrollY;
          s.answers[qIdx] = oIdx;
          if (oIdx === s.questions[qIdx].correct) {
            App.UI.playSound("success");
          } else {
            App.UI.playSound("click");
          }
          this.renderActiveQuizView(container);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      });

      const submitBtn = container.querySelector("#submit-exam-btn");
      if (submitBtn) {
        submitBtn.addEventListener("click", () => {
          if (Object.keys(s.answers).length < s.questions.length) {
            App.UI.toast(
              "გთხოვთ უპასუხოთ ყველა კითხვას (" + Object.keys(s.answers).length + "/" + s.questions.length + ") შედეგის გამოსათვლელად.",
              "warning"
            );
            return;
          }
          this.finishCurrentSession();
        });
      }
    },

    renderResultsView: function (container) {
      const s = activeExamSession;
      const total = s.questions.length;
      let correctCount = 0;

      const reviewHtml = s.questions.map((qObj, idx) => {
        const chosen = s.answers[idx];
        const isOk = chosen === qObj.correct;
        if (isOk) correctCount++;

        return (
          '<div class="quiz-review-item ' + (isOk ? "correct" : "wrong") + '">' +
            '<div style="font-weight:800; margin-bottom:4px;">' + (idx + 1) + ". " + App.UI.escapeHTML(qObj.q) + "</div>" +
            '<div style="font-size:0.86rem;">' +
              (isOk
                ? '<span style="color:var(--color-success); font-weight:700;">✓ სწორია: ' + App.UI.escapeHTML(qObj.options[qObj.correct]) + "</span>"
                : '<span style="color:var(--color-danger); font-weight:700;">✕ თქვენი პასუხი: ' + App.UI.escapeHTML(qObj.options[chosen] || "—") + "</span> &bull; " +
                  '<strong style="color:var(--color-success);">სწორი პასუხი: ' + App.UI.escapeHTML(qObj.options[qObj.correct]) + "</strong>") +
            "</div>" +
          "</div>"
        );
      }).join("");

      const pct = total ? Math.round((correctCount / total) * 100) : 0;
      const gradeLabel = pct >= 85 ? "🏆 ბრწყინვალე შედეგი (Distinction)!" : (pct >= 65 ? "👍 კარგი შედეგი (Passed)!" : "📘 გირჩევთ თემების გამეორებას");

      container.innerHTML =
        '<div class="reading-detail-wrap">' +
          '<section class="card" style="text-align:center; padding:32px;">' +
            '<div style="font-size:3rem; margin-bottom:8px;">' + (pct >= 80 ? "🏆" : "📊") + "</div>" +
            '<h2 class="section-title" style="font-size:1.6rem;">' + App.UI.escapeHTML(s.title) + " — შედეგი: " + pct + "%</h2>" +
            '<p style="font-size:1rem; font-weight:700; color:var(--brand-primary); margin:6px 0 16px;">' + gradeLabel + " (" + correctCount + " სწორი პასუხი " + total + "-დან)</p>" +
            (s.recommendedLevel
              ? '<div style="margin:14px auto; max-width:440px; padding:14px; border-radius:12px; background:var(--brand-primary-soft); border:1px solid var(--brand-primary);">' +
                  '<div style="font-weight:800; color:var(--brand-primary); margin-bottom:6px;">🎯 თქვენი რეკომენდებული დონეა: ' + s.recommendedLevel + "</div>" +
                  '<button type="button" class="btn btn-primary btn-sm" id="apply-recommended-level-btn">დონე ' + s.recommendedLevel + "-ის გააქტიურება მთავარ პროფილზე</button>" +
                "</div>"
              : "") +
            '<div style="display:flex; justify-content:center; gap:12px; margin-top:18px; flex-wrap:wrap;">' +
              '<button type="button" class="btn btn-primary" id="retake-same-exam-btn">🔄 ახალი ვარიანტის დაწყება</button>' +
              '<button type="button" class="btn btn-outline" id="back-to-quizzes-hub-btn">&larr; ტესტების ცენტრში დაბრუნება</button>' +
            "</div>" +
          "</section>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:14px;">📋 პასუხების დეტალური მიმოხილვა</h3>' +
            reviewHtml +
          "</section>" +
        "</div>";

      const applyLvlBtn = container.querySelector("#apply-recommended-level-btn");
      if (applyLvlBtn && s.recommendedLevel) {
        applyLvlBtn.addEventListener("click", () => {
          App.Storage.set("progress.level", s.recommendedLevel);
          if (App.Progress && typeof App.Progress.syncHeaderStats === "function") {
            App.Progress.syncHeaderStats();
          }
          App.UI.toast("✓ თქვენს პროფილზე გააქტიურდა დონე: " + s.recommendedLevel, "success");
        });
      }

      const retakeBtn = container.querySelector("#retake-same-exam-btn");
      if (retakeBtn) {
        retakeBtn.addEventListener("click", () => {
          this.startQuizSession({
            title: s.title,
            subtitle: s.subtitle,
            mode: s.mode,
            level: s.level,
            count: total
          });
        });
      }

      const backHubBtn = container.querySelector("#back-to-quizzes-hub-btn");
      if (backHubBtn) {
        backHubBtn.addEventListener("click", () => {
          activeExamSession = null;
          this.render();
        });
      }
    }
  };

  App.Quizzes = Quizzes;

  // ============================================================================
  // ROUTER INTERCEPTOR — ხსნის #flashcards და #quizzes მარშრუტებს ("ფაზა 5"-ის ნაცვლად)
  // ============================================================================
  function activatePhase5RoutesIfNeeded() {
    ["flashcards", "quizzes"].forEach((r) => {
      const navLink = document.querySelector('[data-route="' + r + '"], a[href="#' + r + '"]');
      if (navLink) {
        const badge = navLink.querySelector(".nav-badge");
        if (badge) {
          badge.textContent = "მზადაა";
          badge.classList.add("nav-badge--ready");
        }
      }
    });

    const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
    if (hash === "flashcards") {
      const titleEl = document.getElementById("header-page-title");
      if (titleEl) titleEl.textContent = "ბარათები";
      App.Flashcards.render();
    } else if (hash === "quizzes") {
      const titleEl = document.getElementById("header-page-title");
      if (titleEl) titleEl.textContent = "ტესტები";
      App.Quizzes.render();
    }
  }

  function hookPhase5IntoRouter() {
    if (App.Router) {
      Object.keys(App.Router).forEach((key) => {
        if (typeof App.Router[key] === "function" && !App.Router[key]._phase5Hooked) {
          const origFn = App.Router[key];
          const wrapped = function () {
            const result = origFn.apply(this, arguments);
            activatePhase5RoutesIfNeeded();
            return result;
          };
          wrapped._phase5Hooked = true;
          App.Router[key] = wrapped;
        }
      });
    }
    activatePhase5RoutesIfNeeded();
  }

  window.addEventListener("hashchange", () => {
    window.setTimeout(activatePhase5RoutesIfNeeded, 0);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      window.setTimeout(hookPhase5IntoRouter, 30);
    });
  } else {
    window.setTimeout(hookPhase5IntoRouter, 30);
  }
})(window);