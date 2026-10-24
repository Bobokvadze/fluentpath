/**
 * LISTENING.JS — მოსმენის მოდულის ძრავა (კითხვის მოდულის იდენტური Story Cover სტილით)
 * - გარე ბარათები: ორიგინალური Cover დიზაინი (preview-ებისა და ზედმეტი წარწერების გარეშე)
 * - შიდა აუდიო-სტუდია: სრული/ნელი მოსმენა, აბზაცების გახმოვანება დანომრვის გარეშე,
 *   ქართული თარგმანი თავიდან დამალულია (showTranslations = false),
 *   ინგლისური ტრანსკრიპტის დამალვა/ჩვენების ღილაკი, 10 სიტყვა და 10 გააზრების კითხვა.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const LISTENING_VISUAL_META = [
    { icon: "☕", genre: "ყოველდღიური დიალოგი" },
    { icon: "🗺️", genre: "ქალაქი და ორიენტაცია" },
    { icon: "✈️", genre: "მგზავრობა" },
    { icon: "🏨", genre: "სასტუმრო და ტურიზმი" },
    { icon: "🌦️", genre: "რადიოგადაცემა" },
    { icon: "🩺", genre: "ჯანმრთელობა" },
    { icon: "🧥", genre: "შოპინგი" },
    { icon: "📱", genre: "კომუნიკაცია" },
    { icon: "🍝", genre: "კულინარია და სერვისი" },
    { icon: "🏊‍♂️", genre: "სპორტი და ფიტნესი" },
    { icon: "🚌", genre: "ექსკურსია" },
    { icon: "🚲", genre: "აქტიური დასვენება" },
    { icon: "🚆", genre: "ტრანსპორტი" },
    { icon: "🎒", genre: "სერვისი და დახმარება" },
    { icon: "🏡", genre: "სამეზობლო და ოჯახი" }
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

  let activeLevelFilter = "ALL";
  let activeTopic = null;
  let preparedQuestions = [];
  let showTranscript = true;
  let showTranslations = false; // ქართული თარგმანი თავიდან დამალულია!
  let quizAnswers = {};

  const Listening = {
    getAllTopics: function () {
      const listA = Array.isArray(App.ListeningDataA) ? App.ListeningDataA : [];
      const listB = Array.isArray(App.ListeningDataB) ? App.ListeningDataB : [];
      const listC = Array.isArray(App.ListeningDataC) ? App.ListeningDataC : [];
      const combined = listA.concat(listB).concat(listC);

      return combined.map((item, idx) => {
        const num = item.num || (idx + 1);
        const paras = item.paragraphs.map((p) => (Array.isArray(p) ? { en: p[0], ka: p[1] } : p));
        const visual = LISTENING_VISUAL_META[(num - 1) % LISTENING_VISUAL_META.length];

        return {
          id: "listening-topic-" + num,
          topicNumber: num,
          level: item.level,
          titleKa: item.title,
          titleEn: item.subtitle,
          audioTime: item.time || "5 წთ",
          xp: 45,
          icon: item.icon || visual.icon,
          genre: item.genre || visual.genre,
          themeIdx: (num + 1) % 6,
          paragraphs: paras,
          glossary: item.glossary.map(parseGlossaryItem),
          questions: item.questions.map(parseQuestionItem)
        };
      });
    },

    getCompletedIds: function () {
      const list = App.Storage.get("progress.completedListeningIds", []);
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
          '<button type="button" class="pill-tab ' + active + '" data-listening-level="' + lvl + '">' +
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
              '<article class="' + cardCls + '" id="listening-anchor-' + App.UI.escapeHTML(t.id) + '">' +
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
                      ? '<strong style="color:var(--color-success);">✓ მოსმენილია</strong>'
                      : "🎧 " + App.UI.escapeHTML(t.audioTime) + "") +
                  "</span>" +
                  '<button type="button" class="btn ' + (!isUnlocked ? "btn-outline" : (isDone ? "btn-outline" : "btn-primary")) + ' btn-sm" ' +
                    'data-open-listening="' + App.UI.escapeHTML(t.id) + '" ' +
                    'data-listening-idx="' + globalIdx + '">' +
                    (!isUnlocked ? "🔒 ჩაკეტილია" : (isDone ? "თავიდან" : "მოსმენა &rarr;")) +
                  "</button>" +
                "</div>" +
              "</article>"
            );
          }).join("")
        : '<div class="card" style="grid-column:1/-1; text-align:center; padding:36px;">' +
            '<h3 class="section-title">' + App.UI.escapeHTML(activeLevelFilter) + " დონის მოსასმენი ბიბლიოთეკა მზადდება მომდევნო ეტაპისთვის</h3>" +
            '<p style="color:var(--text-secondary); margin-top:8px;">A1 დონის 15 აუდიო-თემა უკვე მზადაა. მომდევნო ნაბიჯზე დაემატება A2 დონე.</p>' +
          "</div>";

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">მოსმენისა და აუდიო-გააზრების სტუდია</h2>' +
                '<p class="section-subtitle">მოუსმინეთ აუდიო-ისტორიებსა და დიალოგებს ჩვეულებრივი ან ნელი სიჩქარით, სურვილისამებრ ჩართეთ ტრანსკრიპტი და უპასუხეთ კითხვებს მომდევნო თემის გასახსნელად.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">მოსმენილია: ' + completedIds.length + " / " + allTopics.length + "</span>" +
                '<button type="button" class="btn btn-primary btn-sm" id="jump-listening-frontier-btn">🎯 მიმდინარეზე გადასვლა</button>' +
              "</div>" +
            "</div>" +
            '<div class="filter-bar" style="margin-bottom:0;">' +
              '<div class="pill-tabs">' + tabsHtml + "</div>" +
            "</div>" +
          "</section>" +

          '<section class="reading-grid" aria-label="მოსასმენი თემების კოლექცია">' +
            cardsHtml +
          "</section>" +
        "</div>";

      container.querySelectorAll("[data-listening-level]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeLevelFilter = btn.getAttribute("data-listening-level");
          App.UI.playSound("click");
          this.render();
        });
      });

      const jumpBtn = container.querySelector("#jump-listening-frontier-btn");
      if (jumpBtn) {
        jumpBtn.addEventListener("click", () => {
          activeLevelFilter = "ALL";
          this.render();
          window.setTimeout(() => {
            const el = document.getElementById("listening-anchor-" + frontierId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 60);
        });
      }

      container.querySelectorAll("[data-open-listening]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-listening-idx"));
          const unlocked = this.isTopicUnlocked(idx, allTopics);

          if (!unlocked) {
            const cardEl = btn.closest(".reading-story-card");
            if (cardEl) {
              cardEl.classList.remove("shake");
              void cardEl.offsetWidth;
              cardEl.classList.add("shake");
            }
            const prevT = allTopics[idx - 1];
            App.UI.toast("🔒 ეს აუდიო-თემა ჩაკეტილია! ჯერ დაასრულეთ: «" + (prevT ? prevT.titleEn : "წინა თემა") + "».", "warning", 3200);
            return;
          }

          const id = btn.getAttribute("data-open-listening");
          activeTopic = allTopics.find((t) => t.id === id) || null;
          if (activeTopic) {
            this.prepareRandomizedQuestions(activeTopic);
          }
          showTranscript = true;
          showTranslations = false; // ქართული თარგმანი თავიდან დამალულია!
          quizAnswers = {};
          App.UI.playSound("click");
          this.render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    },

    renderTopicPlayer: function (container, allTopics) {
      const t = activeTopic;

      const paragraphsHtml = t.paragraphs.map((para) => {
        return (
          '<div class="reading-paragraph-block">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">' +
              (showTranscript
                ? '<p class="reading-p-en">' + App.UI.escapeHTML(para.en) + "</p>"
                : '<p class="reading-p-en" style="color:var(--text-muted); font-style:italic;">🎧 აუდიო მონაკვეთი (ტრანსკრიპტი დამალულია — დააჭირეთ დინამიკს მოსასმენად)</p>') +
              '<button type="button" class="audio-btn" data-speak-para="' + App.UI.escapeHTML(para.en) + '" title="მონაკვეთის მოსმენა">&#128266;</button>' +
            "</div>" +
            (showTranslations
              ? '<p class="reading-p-ka">' + App.UI.escapeHTML(para.ka) + "</p>"
              : "") +
          "</div>"
        );
      }).join("");

      const glossaryHtml = t.glossary.map((g) => {
        return (
          '<div class="glossary-item">' +
            "<div>" +
              '<div class="glossary-en">' + App.UI.escapeHTML(g.en) + "</div>" +
              '<div class="glossary-ka">' + App.UI.escapeHTML(g.ka) + "</div>" +
            "</div>" +
            '<button type="button" class="audio-btn" data-speak-para="' + App.UI.escapeHTML(g.en) + '" title="მოსმენა">&#128266;</button>' +
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
            '<button type="button" class="' + cls + '" data-listening-q="' + qIdx + '" data-listening-opt="' + oIdx + '" ' + (hasAnswered ? "disabled" : "") + ">" +
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
            '<button type="button" class="btn btn-outline btn-sm" id="back-listening-list-btn">&larr; აუდიო-ბიბლიოთეკაში დაბრუნება</button>' +
            '<span class="stat-pill stat-pill--level">' + t.icon + " " + App.UI.escapeHTML(t.genre) + " &bull; დონე " + App.UI.escapeHTML(t.level) + "</span>" +
          "</div>" +

          '<article class="card">' +
            '<div class="reading-Toolbar">' +
              "<div>" +
                '<h2 class="section-title" style="font-size:1.4rem;">' + App.UI.escapeHTML(t.titleEn) + "</h2>" +
                '<div style="font-size:0.92rem; font-weight:700; color:var(--brand-secondary); margin-top:2px;">' + App.UI.escapeHTML(t.titleKa) + "</div>" +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button type="button" class="btn ' + (!showTranscript ? "btn-secondary" : "btn-outline") + ' btn-sm" id="toggle-en-transcript-btn">' +
                  (showTranscript ? "📝 ტრანსკრიპტის დამალვა" : "📝 ტრანსკრიპტის ჩვენება") +
                "</button>" +
                '<button type="button" class="btn ' + (showTranslations ? "btn-secondary" : "btn-outline") + ' btn-sm" id="toggle-ka-translation-btn">' +
                  (showTranslations ? "🇬🇪 თარგმანის დამალვა" : "🇬🇪 თარგმანის ჩვენება") +
                "</button>" +
                '<button type="button" class="btn btn-primary btn-sm" id="listen-full-topic-btn">&#128266; სრულად მოსმენა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="listen-slow-topic-btn">🐢 ნელა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="stop-topic-audio-btn">&#9209; გაჩერება</button>' +
              "</div>" +
            "</div>" +

            '<div class="reading-article-text">' +
              paragraphsHtml +
            "</div>" +
          "</article>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:12px;">📌 საკვანძო სიტყვები და გამოთქმები აუდიოდან</h3>' +
            '<div class="glossary-grid">' + glossaryHtml + "</div>" +
          "</section>" +

          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h3 class="section-title">მოსმენილის გააზრება</h3>' +
                '<p class="section-subtitle">უპასუხეთ კითხვებს თემის დასასრულებლად და მომდევნო აუდიო-დავალების გასახსნელად.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">პასუხი: ' + answeredCount + " / " + totalQ + "</span>" +
                '<span class="stat-pill stat-pill--xp">✓ სწორია: ' + correctCount + "</span>" +
                '<button type="button" class="btn btn-outline btn-sm" id="reset-listening-questions-btn">🔄 თავიდან არევა</button>' +
              "</div>" +
            "</div>" +
            '<div style="margin-bottom:18px;">' +
              App.UI.renderProgressBar(progressPct, "შესრულების პროგრესი", progressPct + "%") +
            "</div>" +
            questionsHtml +
            '<div style="display:flex; justify-content:flex-end; margin-top:12px;">' +
              '<button type="button" class="btn btn-primary" id="complete-listening-btn">დასრულება და მომდევნოს გახსნა (+' + t.xp + " XP) &rarr;</button>" +
            "</div>" +
          "</section>" +
        "</div>";

      const backBtn = container.querySelector("#back-listening-list-btn");
      if (backBtn) {
        backBtn.addEventListener("click", () => {
          this.stopSpeaking();
          activeTopic = null;
          this.render();
        });
      }

      const toggleTranscriptBtn = container.querySelector("#toggle-en-transcript-btn");
      if (toggleTranscriptBtn) {
        toggleTranscriptBtn.addEventListener("click", () => {
          const scrollY = window.scrollY;
          showTranscript = !showTranscript;
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }

      const toggleTransBtn = container.querySelector("#toggle-ka-translation-btn");
      if (toggleTransBtn) {
        toggleTransBtn.addEventListener("click", () => {
          const scrollY = window.scrollY;
          showTranslations = !showTranslations;
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }

      const resetQBtn = container.querySelector("#reset-listening-questions-btn");
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

      const listenFullBtn = container.querySelector("#listen-full-topic-btn");
      if (listenFullBtn) {
        listenFullBtn.addEventListener("click", () => {
          const fullText = t.paragraphs.map((item) => item.en).join(" ");
          this.speak(fullText, false);
        });
      }

      const listenSlowBtn = container.querySelector("#listen-slow-topic-btn");
      if (listenSlowBtn) {
        listenSlowBtn.addEventListener("click", () => {
          const fullText = t.paragraphs.map((item) => item.en).join(" ");
          this.speak(fullText, true);
        });
      }

      const stopAudioBtn = container.querySelector("#stop-topic-audio-btn");
      if (stopAudioBtn) {
        stopAudioBtn.addEventListener("click", () => this.stopSpeaking());
      }

      container.querySelectorAll("[data-speak-para]").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.speak(btn.getAttribute("data-speak-para"), false);
        });
      });

      container.querySelectorAll("[data-listening-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = Number(btn.getAttribute("data-listening-q"));
          const oIdx = Number(btn.getAttribute("data-listening-opt"));
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

      const completeBtn = container.querySelector("#complete-listening-btn");
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
            App.Storage.set("progress.completedListeningIds", completedIds);
          }

          App.Progress.recordActivity({
            xp: t.xp,
            title: "მოსმენილია: " + t.titleEn + " (" + correctCount + "/" + totalQ + ")",
            category: "მოსმენა",
            metricKey: "listeningCompleted"
          });

          const currentGlobalIdx = allTopics.findIndex((x) => x.id === t.id);
          const nextTopic = allTopics[currentGlobalIdx + 1];

          App.UI.playSound("success");
          App.UI.toast(
            "✓ აუდიო-თემა დასრულდა (შედეგი: " + correctCount + "/" + totalQ + ")! " +
            (nextTopic ? "გაიხსნა: " + nextTopic.titleEn : ""),
            "success",
            4200
          );

          activeTopic = null;
          this.render();
          window.setTimeout(() => {
            const targetId = nextTopic ? ("listening-anchor-" + nextTopic.id) : ("listening-anchor-" + t.id);
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 80);
        });
      }
    }
  };

  App.Listening = Listening;

  // ============================================================================
  // ROUTER INTERCEPTOR — ანაცვლებს "ფაზა 4"-ის Placeholder-ს მოსმენის სტუდიით
  // ============================================================================
  function activateListeningRouteIfNeeded() {
    const navLink = document.querySelector('[data-route="listening"], a[href="#listening"]');
    if (navLink) {
      const badge = navLink.querySelector('.nav-badge');
      if (badge) {
        badge.textContent = 'მზადაა';
        badge.classList.add('nav-badge--ready');
      }
    }

    const hash = (window.location.hash || '').replace(/^#\/?/, '').trim();
    if (hash === 'listening') {
      const titleEl = document.getElementById('header-page-title');
      if (titleEl) titleEl.textContent = 'მოსმენა';
      App.Listening.render();
    }
  }

  function hookIntoRouter() {
    if (App.Router) {
      Object.keys(App.Router).forEach((key) => {
        if (typeof App.Router[key] === 'function') {
          const origFn = App.Router[key];
          App.Router[key] = function () {
            const result = origFn.apply(this, arguments);
            activateListeningRouteIfNeeded();
            return result;
          };
        }
      });
    }
    activateListeningRouteIfNeeded();
  }

  window.addEventListener('hashchange', () => {
    window.setTimeout(activateListeningRouteIfNeeded, 0);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.setTimeout(hookIntoRouter, 20);
    });
  } else {
    window.setTimeout(hookIntoRouter, 20);
  }
})(window);