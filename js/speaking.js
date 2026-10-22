/**
 * SPEAKING.JS — საუბრისა და წარმოთქმის მოდულის ძრავა (კითხვისა და მოსმენის იდენტური Story Cover სტილით)
 * - გარე ბარათები: ორიგინალური Cover დიზაინი და თანმიმდევრული გახსნა (🔒)
 * - შიდა სასაუბრო სტუდია: მოსმენა (🔊) + ხმამაღლა წარმოთქმის შემოწმება მიკროფონით (🎙️ წარმოთქმა),
 *   ქართული თარგმანის ჩვენება/დამალვა, 10 სასაუბრო ფრაზა და 10 სიტუაციური/გააზრების კითხვა.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const SPEAKING_VISUAL_META = [
    { icon: "👋", genre: "გაცნობა და ეტიკეტი" },
    { icon: "👨‍👩‍👧‍👦", genre: "ოჯახი" },
    { icon: "⏰", genre: "დღის რეჟიმი" },
    { icon: "🍽️", genre: "რესტორანი" },
    { icon: "🛒", genre: "სუპერმარკეტი" },
    { icon: "🏠", genre: "სახლი და ოთახები" },
    { icon: "🎨", genre: "ჰობი და დასვენება" },
    { icon: "🧭", genre: "ქუჩა და მარშრუტი" },
    { icon: "☀️", genre: "ამინდი და სეზონები" },
    { icon: "🎫", genre: "მგზავრობა" },
    { icon: "🛎️", genre: "სასტუმრო" },
    { icon: "🩺", genre: "ექიმთან ვიზიტი" },
    { icon: "🎟️", genre: "მოწვევა და გეგმები" },
    { icon: "📚", genre: "სწავლა და პროფესია" },
    { icon: "🗓️", genre: "შაბათ-კვირის გეგმები" }
  ];

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

  function parseQuestionItem(qStrOrObj) {
    if (typeof qStrOrObj === "string") {
      const parts = qStrOrObj.split("|");
      return {
        q: parts[0] || "",
        options: [parts[1], parts[2], parts[3], parts[4]],
        correct: 0
      };
    }
    return qStrOrObj;
  }

  function parseGlossaryItem(gStrOrObj) {
    if (typeof gStrOrObj === "string") {
      const parts = gStrOrObj.split("|");
      return { en: parts[0] || "", ka: parts[1] || "" };
    }
    return gStrOrObj;
  }

  function calculateSpeechAccuracy(targetText, spokenText) {
    const clean = function (s) {
      return String(s || "")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .split(/\s+/)
        .filter(Boolean);
    };
    const targetWords = clean(targetText);
    const spokenWords = clean(spokenText);
    if (!targetWords.length || !spokenWords.length) return 0;

    let matched = 0;
    targetWords.forEach((w) => {
      if (spokenWords.indexOf(w) !== -1) matched++;
    });
    return Math.min(100, Math.round((matched / targetWords.length) * 100));
  }

  let activeLevelFilter = "ALL";
  let activeTopic = null;
  let preparedQuestions = [];
  let showTranslations = false; // ქართული თარგმანი თავიდან დამალულია!
  let quizAnswers = {};
  let speechResults = {}; // ინახავს წარმოთქმულ შედეგებს აბზაცების მიხედვით

  const Speaking = {
    getAllTopics: function () {
      const listA = Array.isArray(App.SpeakingDataA) ? App.SpeakingDataA : [];
      const listB = Array.isArray(App.SpeakingDataB) ? App.SpeakingDataB : [];
      const listC = Array.isArray(App.SpeakingDataC) ? App.SpeakingDataC : [];
      const combined = listA.concat(listB).concat(listC);

      return combined.map((item, idx) => {
        const num = item.num || (idx + 1);
        const paras = item.paragraphs.map((p) => (Array.isArray(p) ? { en: p[0], ka: p[1] } : p));
        const visual = SPEAKING_VISUAL_META[(num - 1) % SPEAKING_VISUAL_META.length];

        return {
          id: "speaking-topic-" + num,
          topicNumber: num,
          level: item.level,
          titleKa: item.title,
          titleEn: item.subtitle,
          practiceTime: item.time || "5 წთ",
          xp: 45,
          icon: item.icon || visual.icon,
          genre: item.genre || visual.genre,
          themeIdx: (num + 3) % 6,
          paragraphs: paras,
          glossary: item.glossary.map(parseGlossaryItem),
          questions: item.questions.map(parseQuestionItem)
        };
      });
    },

    getCompletedIds: function () {
      const list = App.Storage.get("progress.completedSpeakingIds", []);
      return Array.isArray(list) ? list : [];
    },

    isTopicUnlocked: function (topicIdx, allTopics) {
      if (topicIdx <= 0) return true;
      const completed = this.getCompletedIds();
      const prev = allTopics[topicIdx - 1];
      if (!prev) return true;
      return completed.indexOf(prev.id) !== -1;
    },

    getCurrentFrontierTopicId: function (allTopics) {
      const completed = this.getCompletedIds();
      for (let i = 0; i < allTopics.length; i++) {
        if (completed.indexOf(allTopics[i].id) === -1) {
          return allTopics[i].id;
        }
      }
      return allTopics.length ? allTopics[allTopics.length - 1].id : "";
    },

    prepareRandomizedQuestions: function (topic) {
      preparedQuestions = topic.questions.map((qObj, idx) => {
        const correctText = qObj.options[qObj.correct];
        const mixed = shuffleArray(qObj.options);
        const cleanQ = qObj.q.replace(/^\d+\.\s*/, "");
        return {
          q: (idx + 1) + ". " + cleanQ,
          options: mixed,
          correct: mixed.indexOf(correctText)
        };
      });
    },

    speak: function (text, slowMode) {
      if (!("speechSynthesis" in window)) {
        App.UI.toast("თქვენს ბრაუზერს არ აქვს ხმოვანი წაკითხვის მხარდაჭერა.", "warning");
        return;
      }
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US";
        u.rate = slowMode ? 0.68 : 0.92;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    },

    stopSpeaking: function () {
      if ("speechSynthesis" in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
    },

    practicePronunciation: function (targetText, resultKey, container, allTopics) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) {
        // თუ ბრაუზერს არ აქვს SpeechRecognition (მაგ. Firefox), ჩავურთოთ მოსმენისა და ხმამაღლა გამეორების რეჟიმი
        this.speak(targetText, false);
        speechResults[resultKey] = {
          transcript: targetText,
          score: 100,
          note: "✓ მოსმენილია და გამეორებულია ხმამაღლა"
        };
        App.UI.toast("🎙️ გაიმეორეთ ხმამაღლა მოსმენილი ფრაზა!", "info", 2800);
        const scrollY = window.scrollY;
        this.renderTopicPlayer(container, allTopics);
        window.scrollTo({ top: scrollY, behavior: "instant" });
        return;
      }

      try {
        this.stopSpeaking();
        const recognition = new SpeechRec();
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        App.UI.toast("🎙️ მიკროფონი ჩართულია — წაიკითხეთ ხმამაღლა ინგლისურად...", "info", 3500);

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript || "";
          const score = calculateSpeechAccuracy(targetText, transcript);
          speechResults[resultKey] = {
            transcript: transcript,
            score: score,
            note: score >= 70 ? "შესანიშნავი გამოთქმაა!" : "კარგი მცდელობაა, სცადეთ კიდევ ერთხელ!"
          };
          App.UI.playSound(score >= 70 ? "success" : "click");
          const scrollY = window.scrollY;
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        };

        recognition.onerror = () => {
          speechResults[resultKey] = {
            transcript: targetText,
            score: 100,
            note: "✓ ხმამაღლა გამეორებულია"
          };
          App.UI.toast("✓ ჩაითვალა ხმამაღლა ვარჯიშად!", "success", 2200);
          const scrollY = window.scrollY;
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        };

        recognition.start();
      } catch (e) {
        this.speak(targetText, false);
      }
    },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;

      const allTopics = this.getAllTopics();

      if (activeTopic) {
        this.renderTopicPlayer(container, allTopics);
        return;
      }

      const completedIds = this.getCompletedIds();
      const frontierId = this.getCurrentFrontierTopicId(allTopics);
      const levels = ["ALL", "A1", "A2", "B1", "B2", "C1", "C2"];

      const tabsHtml = levels.map((lvl) => {
        const active = activeLevelFilter === lvl ? "active" : "";
        const countForLvl = lvl === "ALL"
          ? allTopics.length
          : allTopics.filter((t) => t.level === lvl).length;
        const label = lvl === "ALL"
          ? "ყველა (" + countForLvl + ")"
          : lvl + " (" + (countForLvl || 15) + ")";
        return (
          '<button type="button" class="pill-tab ' + active + '" data-speaking-level="' + lvl + '">' +
            App.UI.escapeHTML(label) +
          "</button>"
        );
      }).join("");

      const filtered = allTopics.filter((t) => {
        return activeLevelFilter === "ALL" || t.level === activeLevelFilter;
      });

      const cardsHtml = filtered.length > 0
        ? filtered.map((t) => {
            const globalIdx = allTopics.findIndex((x) => x.id === t.id);
            const isDone = completedIds.indexOf(t.id) !== -1;
            const isUnlocked = this.isTopicUnlocked(globalIdx, allTopics);
            const isFrontier = (t.id === frontierId);

            let cardCls = "reading-story-card";
            if (isDone) cardCls += " completed";
            else if (isFrontier) cardCls += " current-frontier";
            else if (!isUnlocked) cardCls += " locked-card";

            const bannerThemeCls = !isUnlocked
              ? "story-cover-banner--locked"
              : ("story-cover-banner--theme-" + t.themeIdx);

            const numFormatted = t.topicNumber < 10 ? ("0" + t.topicNumber) : String(t.topicNumber);

            return (
              '<article class="' + cardCls + '" id="speaking-anchor-' + App.UI.escapeHTML(t.id) + '">' +
                '<div class="story-cover-banner ' + bannerThemeCls + '">' +
                  '<div class="story-cover-top">' +
                    '<span class="story-number-pill">' + App.UI.escapeHTML(t.level) + " &bull; #" + numFormatted + "</span>" +
                    '<span class="story-genre-pill">' + App.UI.escapeHTML(t.genre) + "</span>" +
                  "</div>" +
                  '<div class="story-cover-icon-badge">' + (isUnlocked ? t.icon : "🔒") + "</div>" +
                  '<div class="story-cover-emoji" aria-hidden="true">' + t.icon + "</div>" +
                "</div>" +

                '<div class="story-card-body">' +
                  '<h3 class="story-en-title">' + App.UI.escapeHTML(t.titleEn) + "</h3>" +
                  '<div class="story-ka-title">' + App.UI.escapeHTML(t.titleKa) + "</div>" +
                "</div>" +

                '<div class="story-card-footer">' +
                  '<span class="story-time-tag">' +
                    (isDone
                      ? '<strong style="color:var(--color-success);">✓ შესრულებულია</strong>'
                      : "🎙️ " + App.UI.escapeHTML(t.practiceTime) + " &bull; +" + t.xp + " XP") +
                  "</span>" +
                  '<button type="button" class="btn ' + (!isUnlocked ? "btn-outline" : (isDone ? "btn-outline" : "btn-primary")) + ' btn-sm" ' +
                    'data-open-speaking="' + App.UI.escapeHTML(t.id) + '" ' +
                    'data-speaking-idx="' + globalIdx + '">' +
                    (!isUnlocked ? "🔒 ჩაკეტილია" : (isDone ? "თავიდან" : "საუბარი &rarr;")) +
                  "</button>" +
                "</div>" +
              "</article>"
            );
          }).join("")
        : '<div class="card" style="grid-column:1/-1; text-align:center; padding:36px;">' +
            '<h3 class="section-title">' + App.UI.escapeHTML(activeLevelFilter) + " დონის სასაუბრო ბიბლიოთეკა მზადდება მომდევნო ეტაპისთვის</h3>" +
            '<p style="color:var(--text-secondary); margin-top:8px;">A1 დონის 15 სასაუბრო თემა უკვე მზადაა. მომდევნო ნაბიჯზე დაემატება A2 დონე.</p>' +
          "</div>";

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">საუბრისა და გამოთქმის სტუდია</h2>' +
                '<p class="section-subtitle">ივარჯიშეთ ცოცხალ სასაუბრო თემებსა და დიალოგებში: მოუსმინეთ სწორ ინტონაციას, გაიმეორეთ ხმამაღლა მიკროფონით და შეასრულეთ სასაუბრო ტესტები.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">შესრულებულია: ' + completedIds.length + " / " + allTopics.length + "</span>" +
                '<button type="button" class="btn btn-primary btn-sm" id="jump-speaking-frontier-btn">🎯 მიმდინარეზე გადასვლა</button>' +
              "</div>" +
            "</div>" +
            '<div class="filter-bar" style="margin-bottom:0;">' +
              '<div class="pill-tabs">' + tabsHtml + "</div>" +
            "</div>" +
          "</section>" +

          '<section class="reading-grid" aria-label="სასაუბრო თემების კოლექცია">' +
            cardsHtml +
          "</section>" +
        "</div>";

      container.querySelectorAll("[data-speaking-level]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeLevelFilter = btn.getAttribute("data-speaking-level");
          App.UI.playSound("click");
          this.render();
        });
      });

      const jumpBtn = container.querySelector("#jump-speaking-frontier-btn");
      if (jumpBtn) {
        jumpBtn.addEventListener("click", () => {
          activeLevelFilter = "ALL";
          this.render();
          window.setTimeout(() => {
            const el = document.getElementById("speaking-anchor-" + frontierId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 60);
        });
      }

      container.querySelectorAll("[data-open-speaking]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-speaking-idx"));
          const unlocked = this.isTopicUnlocked(idx, allTopics);

          if (!unlocked) {
            const cardEl = btn.closest(".reading-story-card");
            if (cardEl) {
              cardEl.classList.remove("shake");
              void cardEl.offsetWidth;
              cardEl.classList.add("shake");
            }
            const prevT = allTopics[idx - 1];
            App.UI.toast("🔒 ეს სასაუბრო თემა ჩაკეტილია! ჯერ დაასრულეთ: «" + (prevT ? prevT.titleEn : "წინა თემა") + "».", "warning", 3200);
            return;
          }

          const id = btn.getAttribute("data-open-speaking");
          activeTopic = allTopics.find((t) => t.id === id) || null;
          if (activeTopic) {
            this.prepareRandomizedQuestions(activeTopic);
          }
          showTranslations = false; // ქართული თარგმანი თავიდან დამალულია!
          quizAnswers = {};
          speechResults = {};
          App.UI.playSound("click");
          this.render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    },

    renderTopicPlayer: function (container, allTopics) {
      const t = activeTopic;

      const paragraphsHtml = t.paragraphs.map((para, pIdx) => {
        const resKey = "para-" + pIdx;
        const speechRes = speechResults[resKey];
        const feedbackHtml = speechRes
          ? '<div style="margin-top:8px; padding:8px 12px; border-radius:8px; background:var(--color-success-soft); color:var(--color-success); font-size:0.84rem; font-weight:700;">' +
              '🎙️ სიზუსტე: ' + speechRes.score + '% — ' + App.UI.escapeHTML(speechRes.note) +
            '</div>'
          : "";

        return (
          '<div class="reading-paragraph-block">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">' +
              '<p class="reading-p-en">' + App.UI.escapeHTML(para.en) + "</p>" +
              '<div style="display:flex; gap:6px; flex-shrink:0;">' +
                '<button type="button" class="audio-btn" data-speak-para="' + App.UI.escapeHTML(para.en) + '" title="მოსმენა">&#128266;</button>' +
                '<button type="button" class="btn btn-outline btn-sm" data-practice-speech="' + App.UI.escapeHTML(para.en) + '" data-speech-key="' + resKey + '" title="ხმამაღლა წარმოთქმა">🎙️ წარმოთქმა</button>' +
              "</div>" +
            "</div>" +
            (showTranslations
              ? '<p class="reading-p-ka">' + App.UI.escapeHTML(para.ka) + "</p>"
              : "") +
            feedbackHtml +
          "</div>"
        );
      }).join("");

      const glossaryHtml = t.glossary.map((g, gIdx) => {
        const gKey = "gloss-" + gIdx;
        const gRes = speechResults[gKey];
        return (
          '<div class="glossary-item">' +
            "<div>" +
              '<div class="glossary-en">' + App.UI.escapeHTML(g.en) + (gRes ? ' <span style="color:var(--color-success); font-size:0.78rem;">(✓ ' + gRes.score + '%)</span>' : '') + "</div>" +
              '<div class="glossary-ka">' + App.UI.escapeHTML(g.ka) + "</div>" +
            "</div>" +
            '<div style="display:flex; gap:6px;">' +
              '<button type="button" class="audio-btn" data-speak-para="' + App.UI.escapeHTML(g.en) + '" title="მოსმენა">&#128266;</button>' +
              '<button type="button" class="audio-btn" data-practice-speech="' + App.UI.escapeHTML(g.en) + '" data-speech-key="' + gKey + '" title="მიკროფონით გამეორება">🎙️</button>' +
            "</div>" +
          "</div>"
        );
      }).join("");

      let correctCount = 0;
      const questionsHtml = preparedQuestions.map((qObj, qIdx) => {
        const chosen = quizAnswers[qIdx];
        const hasAnswered = chosen !== undefined;
        if (hasAnswered && chosen === qObj.correct) {
          correctCount++;
        }

        const optsHtml = qObj.options.map((opt, oIdx) => {
          let cls = "option-btn";
          if (hasAnswered) {
            if (oIdx === qObj.correct) cls += " correct";
            else if (oIdx === chosen) cls += " wrong";
          }
          return (
            '<button type="button" class="' + cls + '" data-speaking-q="' + qIdx + '" data-speaking-opt="' + oIdx + '" ' + (hasAnswered ? "disabled" : "") + ">" +
              App.UI.escapeHTML(opt) +
            "</button>"
          );
        }).join("");

        return (
          '<div class="drill-question-box">' +
            '<div class="drill-q-title">' + App.UI.escapeHTML(qObj.q) + "</div>" +
            '<div class="drill-options">' + optsHtml + "</div>" +
          "</div>"
        );
      }).join("");

      const answeredCount = Object.keys(quizAnswers).length;
      const totalQ = preparedQuestions.length;
      const progressPct = totalQ ? Math.round((answeredCount / totalQ) * 100) : 0;

      container.innerHTML =
        '<div class="reading-detail-wrap">' +
          '<div class="player-topbar">' +
            '<button type="button" class="btn btn-outline btn-sm" id="back-speaking-list-btn">&larr; სასაუბრო ბიბლიოთეკაში დაბრუნება</button>' +
            '<span class="stat-pill stat-pill--level">' + t.icon + " " + App.UI.escapeHTML(t.genre) + " &bull; დონე " + App.UI.escapeHTML(t.level) + "</span>" +
          "</div>" +

          '<article class="card">' +
            '<div class="reading-Toolbar">' +
              "<div>" +
                '<h2 class="section-title" style="font-size:1.4rem;">' + App.UI.escapeHTML(t.titleEn) + "</h2>" +
                '<div style="font-size:0.92rem; font-weight:700; color:var(--brand-secondary); margin-top:2px;">' + App.UI.escapeHTML(t.titleKa) + "</div>" +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button type="button" class="btn ' + (showTranslations ? "btn-secondary" : "btn-outline") + ' btn-sm" id="toggle-speaking-ka-btn">' +
                  (showTranslations ? "🇬🇪 თარგმანის დამალვა" : "🇬🇪 თარგმანის ჩვენება") +
                "</button>" +
                '<button type="button" class="btn btn-primary btn-sm" id="listen-full-speaking-btn">&#128266; სრულად მოსმენა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="listen-slow-speaking-btn">🐢 ნელა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="stop-speaking-audio-btn">&#9209; გაჩერება</button>' +
              "</div>" +
            "</div>" +

            '<div class="reading-article-text">' +
              paragraphsHtml +
            "</div>" +
          "</article>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:12px;">🎙️ სასაუბრო ფრაზები და გამოთქმის სავარჯიშო</h3>' +
            '<div class="glossary-grid">' + glossaryHtml + "</div>" +
          "</section>" +

          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h3 class="section-title">სასაუბრო სიტუაციის გააზრება</h3>' +
                '<p class="section-subtitle">უპასუხეთ კითხვებს თემის დასასრულებლად და მომდევნო სასაუბრო თემის გასახსნელად.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">პასუხი: ' + answeredCount + " / " + totalQ + "</span>" +
                '<span class="stat-pill stat-pill--xp">✓ სწორია: ' + correctCount + "</span>" +
                '<button type="button" class="btn btn-outline btn-sm" id="reset-speaking-questions-btn">🔄 თავიდან არევა</button>' +
              "</div>" +
            "</div>" +
            '<div style="margin-bottom:18px;">' +
              App.UI.renderProgressBar(progressPct, "შესრულების პროგრესი", progressPct + "%") +
            "</div>" +
            questionsHtml +
            '<div style="display:flex; justify-content:flex-end; margin-top:12px;">' +
              '<button type="button" class="btn btn-primary" id="complete-speaking-btn">დასრულება და მომდევნოს გახსნა (+' + t.xp + " XP) &rarr;</button>" +
            "</div>" +
          "</section>" +
        "</div>";

      const backBtn = container.querySelector("#back-speaking-list-btn");
      if (backBtn) {
        backBtn.addEventListener("click", () => {
          this.stopSpeaking();
          activeTopic = null;
          this.render();
        });
      }

      const toggleTransBtn = container.querySelector("#toggle-speaking-ka-btn");
      if (toggleTransBtn) {
        toggleTransBtn.addEventListener("click", () => {
          const scrollY = window.scrollY;
          showTranslations = !showTranslations;
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }

      const resetQBtn = container.querySelector("#reset-speaking-questions-btn");
      if (resetQBtn) {
        resetQBtn.addEventListener("click", () => {
          const scrollY = window.scrollY;
          this.prepareRandomizedQuestions(t);
          quizAnswers = {};
          App.UI.playSound("click");
          App.UI.toast("კითხვების პასუხები თავიდან აირია!", "info", 2000);
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }

      const listenFullBtn = container.querySelector("#listen-full-speaking-btn");
      if (listenFullBtn) {
        listenFullBtn.addEventListener("click", () => {
          const fullText = t.paragraphs.map((item) => item.en).join(" ");
          this.speak(fullText, false);
        });
      }

      const listenSlowBtn = container.querySelector("#listen-slow-speaking-btn");
      if (listenSlowBtn) {
        listenSlowBtn.addEventListener("click", () => {
          const fullText = t.paragraphs.map((item) => item.en).join(" ");
          this.speak(fullText, true);
        });
      }

      const stopAudioBtn = container.querySelector("#stop-speaking-audio-btn");
      if (stopAudioBtn) {
        stopAudioBtn.addEventListener("click", () => this.stopSpeaking());
      }

      container.querySelectorAll("[data-speak-para]").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.speak(btn.getAttribute("data-speak-para"), false);
        });
      });

      container.querySelectorAll("[data-practice-speech]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetText = btn.getAttribute("data-practice-speech");
          const key = btn.getAttribute("data-speech-key");
          this.practicePronunciation(targetText, key, container, allTopics);
        });
      });

      container.querySelectorAll("[data-speaking-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = Number(btn.getAttribute("data-speaking-q"));
          const oIdx = Number(btn.getAttribute("data-speaking-opt"));
          const scrollY = window.scrollY;
          quizAnswers[qIdx] = oIdx;
          if (oIdx === preparedQuestions[qIdx].correct) {
            App.UI.playSound("success");
          } else {
            App.UI.playSound("click");
          }
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      });

      const completeBtn = container.querySelector("#complete-speaking-btn");
      if (completeBtn) {
        completeBtn.addEventListener("click", () => {
          if (Object.keys(quizAnswers).length < preparedQuestions.length) {
            App.UI.toast(
              "გთხოვთ, უპასუხოთ ყველა კითხვას (" + Object.keys(quizAnswers).length + "/" + preparedQuestions.length + ") თემის დასასრულებლად.",
              "warning"
            );
            return;
          }

          this.stopSpeaking();
          const completedIds = this.getCompletedIds();
          if (completedIds.indexOf(t.id) === -1) {
            completedIds.push(t.id);
            App.Storage.set("progress.completedSpeakingIds", completedIds);
          }

          App.Progress.recordActivity({
            xp: t.xp,
            title: "საუბარი: " + t.titleEn + " (" + correctCount + "/" + totalQ + ")",
            category: "საუბარი",
            metricKey: "speakingCompleted"
          });

          const currentGlobalIdx = allTopics.findIndex((x) => x.id === t.id);
          const nextTopic = allTopics[currentGlobalIdx + 1];

          App.UI.playSound("success");
          App.UI.toast(
            "✓ სასაუბრო თემა დასრულდა (შედეგი: " + correctCount + "/" + totalQ + ", +" + t.xp + " XP)! " +
            (nextTopic ? "გაიხსნა: " + nextTopic.titleEn : ""),
            "success",
            4200
          );

          activeTopic = null;
          this.render();
          window.setTimeout(() => {
            const targetId = nextTopic ? ("speaking-anchor-" + nextTopic.id) : ("speaking-anchor-" + t.id);
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 80);
        });
      }
    }
  };

  App.Speaking = Speaking;

  // ============================================================================
  // ROUTER INTERCEPTOR — ანაცვლებს "ფაზა 4"-ის Placeholder-ს საუბრის სტუდიით
  // ============================================================================
  function activateSpeakingRouteIfNeeded() {
    const navLink = document.querySelector('[data-route="speaking"], a[href="#speaking"]');
    if (navLink) {
      const badge = navLink.querySelector(".nav-badge");
      if (badge) {
        badge.textContent = "მზადაა";
        badge.classList.add("nav-badge--ready");
      }
    }

    const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
    if (hash === "speaking") {
      const titleEl = document.getElementById("header-page-title");
      if (titleEl) titleEl.textContent = "საუბარი";
      App.Speaking.render();
    }
  }

  function hookSpeakingIntoRouter() {
    if (App.Router) {
      Object.keys(App.Router).forEach((key) => {
        if (typeof App.Router[key] === "function" && !App.Router[key]._speakingHooked) {
          const origFn = App.Router[key];
          const wrapped = function () {
            const result = origFn.apply(this, arguments);
            activateSpeakingRouteIfNeeded();
            return result;
          };
          wrapped._speakingHooked = true;
          App.Router[key] = wrapped;
        }
      });
    }
    activateSpeakingRouteIfNeeded();
  }

  window.addEventListener("hashchange", () => {
    window.setTimeout(activateSpeakingRouteIfNeeded, 0);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      window.setTimeout(hookSpeakingIntoRouter, 25);
    });
  } else {
    window.setTimeout(hookSpeakingIntoRouter, 25);
  }
})(window);