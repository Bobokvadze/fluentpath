/**
 * READING.JS — საკითხავი მოდულის განახლებული ძრავა
 * - გარე ბარათები: ორიგინალური Story Cover დიზაინით (preview-ებისა და ზედმეტი წარწერების გარეშე)
 * - შიდა საკითხავი გვერდი: სუფთა აბზაცები დანომრვის გარეშე, ქართული თარგმანი თავიდან დამალულია
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  // თითოეული ისტორიის ვიზუალური თემატიკა და ჟანრი
  const STORY_VISUAL_META = [
    { icon: "🏫", genre: "განათლება და სკოლა" },
    { icon: "🦢", genre: "ქალაქი და ბუნება" },
    { icon: "🥐", genre: "ტრადიცია და ხელობა" },
    { icon: "🌻", genre: "სოფლის ცხოვრება" },
    { icon: "🧩", genre: "ოჯახური გარემო" },
    { icon: "🦉", genre: "წიგნები და ცოდნა" },
    { icon: "🚆", genre: "მოგზაურობა" },
    { icon: "🦒", genre: "ცხოველთა სამყარო" },
    { icon: "🍲", genre: "კულინარია" },
    { icon: "🧺", genre: "ადგილობრივი კულტურა" },
    { icon: "🏔️", genre: "ბუნება და სეზონები" },
    { icon: "🐶", genre: "მეგობრობა და სიკეთე" },
    { icon: "🏊‍♀️", genre: "სპორტი და აქტივობა" },
    { icon: "🎿", genre: "ზამთრის თავგადასავალი" },
    { icon: "🎻", genre: "ხელოვნება და მუსიკა" }
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
  let activePassage = null;
  let preparedQuestions = [];
  let showTranslations = false; // ქართული თარგმანი თავიდან დამალულია!
  let quizAnswers = {};

  const Reading = {
    getAllPassages: function () {
      const listA = Array.isArray(App.ReadingDataA) ? App.ReadingDataA : [];
      const listB = Array.isArray(App.ReadingDataB) ? App.ReadingDataB : [];
      const listC = Array.isArray(App.ReadingDataC) ? App.ReadingDataC : [];
      const combined = listA.concat(listB).concat(listC);

      return combined.map((item, idx) => {
        const num = item.num || (idx + 1);
        const paras = item.paragraphs.map((p) => (Array.isArray(p) ? { en: p[0], ka: p[1] } : p));
        const visual = STORY_VISUAL_META[(num - 1) % STORY_VISUAL_META.length];

        return {
          id: "reading-passage-" + num,
          passageNumber: num,
          level: item.level,
          titleKa: item.title,
          titleEn: item.subtitle,
          readingTime: item.time || "6 წთ",
          xp: 45,
          icon: item.icon || visual.icon,
          genre: item.genre || visual.genre,
          themeIdx: (num - 1) % 6,
          paragraphs: paras,
          glossary: item.glossary.map(parseGlossaryItem),
          questions: item.questions.map(parseQuestionItem)
        };
      });
    },

    getCompletedIds: function () {
      const list = App.Storage.get("progress.completedReadingIds", []);
      return Array.isArray(list) ? list : [];
    },

    isPassageUnlocked: function (passageIdx, allPassages) {
      if (passageIdx <= 0) return true;
      const completed = this.getCompletedIds();
      const prev = allPassages[passageIdx - 1];
      if (!prev) return true;
      return completed.indexOf(prev.id) !== -1;
    },

    getCurrentFrontierPassageId: function (allPassages) {
      const completed = this.getCompletedIds();
      for (let i = 0; i < allPassages.length; i++) {
        if (completed.indexOf(allPassages[i].id) === -1) {
          return allPassages[i].id;
        }
      }
      return allPassages.length ? allPassages[allPassages.length - 1].id : "";
    },

    prepareRandomizedQuestions: function (passage) {
      preparedQuestions = passage.questions.map((qObj, idx) => {
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
        u.rate = slowMode ? 0.65 : 0.92;
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

      const allPassages = this.getAllPassages();

      if (activePassage) {
        this.renderPassageReader(container, allPassages);
        return;
      }

      const completedIds = this.getCompletedIds();
      const frontierId = this.getCurrentFrontierPassageId(allPassages);
      const levels = ["ALL", "A1", "A2", "B1", "B2", "C1", "C2"];

      const tabsHtml = levels.map((lvl) => {
        const active = activeLevelFilter === lvl ? "active" : "";
        const countForLvl = lvl === "ALL"
          ? allPassages.length
          : allPassages.filter((p) => p.level === lvl).length;
        const label = lvl === "ALL"
          ? "ყველა (" + countForLvl + ")"
          : lvl + " (" + (countForLvl || 15) + ")";
        return (
          '<button type="button" class="pill-tab ' + active + '" data-reading-level="' + lvl + '">' +
            App.UI.escapeHTML(label) +
          "</button>"
        );
      }).join("");

      const filtered = allPassages.filter((p) => {
        return activeLevelFilter === "ALL" || p.level === activeLevelFilter;
      });

      const cardsHtml = filtered.length > 0
        ? filtered.map((p) => {
            const globalIdx = allPassages.findIndex((x) => x.id === p.id);
            const isDone = completedIds.indexOf(p.id) !== -1;
            const isUnlocked = this.isPassageUnlocked(globalIdx, allPassages);
            const isFrontier = (p.id === frontierId);

            let cardCls = "reading-story-card";
            if (isDone) cardCls += " completed";
            else if (isFrontier) cardCls += " current-frontier";
            else if (!isUnlocked) cardCls += " locked-card";

            const bannerThemeCls = !isUnlocked
              ? "story-cover-banner--locked"
              : ("story-cover-banner--theme-" + p.themeIdx);

            const numFormatted = p.passageNumber < 10 ? ("0" + p.passageNumber) : String(p.passageNumber);

            return (
              '<article class="' + cardCls + '" id="reading-anchor-' + App.UI.escapeHTML(p.id) + '">' +
                '<div class="story-cover-banner ' + bannerThemeCls + '">' +
                  '<div class="story-cover-top">' +
                    '<span class="story-number-pill">' + App.UI.escapeHTML(p.level) + " &bull; #" + numFormatted + "</span>" +
                    '<span class="story-genre-pill">' + App.UI.escapeHTML(p.genre) + "</span>" +
                  "</div>" +
                  '<div class="story-cover-icon-badge">' + (isUnlocked ? p.icon : "🔒") + "</div>" +
                  '<div class="story-cover-emoji" aria-hidden="true">' + p.icon + "</div>" +
                "</div>" +

                '<div class="story-card-body">' +
                  '<h3 class="story-en-title">' + App.UI.escapeHTML(p.titleEn) + "</h3>" +
                  '<div class="story-ka-title">' + App.UI.escapeHTML(p.titleKa) + "</div>" +
                "</div>" +

                '<div class="story-card-footer">' +
                  '<span class="story-time-tag">' +
                    (isDone
                      ? '<strong style="color:var(--color-success);">✓ წაკითხულია</strong>'
                      : "⏱ " + App.UI.escapeHTML(p.readingTime) + " &bull; +" + p.xp + " XP") +
                  "</span>" +
                  '<button type="button" class="btn ' + (!isUnlocked ? "btn-outline" : (isDone ? "btn-outline" : "btn-primary")) + ' btn-sm" ' +
                    'data-open-passage="' + App.UI.escapeHTML(p.id) + '" ' +
                    'data-passage-idx="' + globalIdx + '">' +
                    (!isUnlocked ? "🔒 ჩაკეტილია" : (isDone ? "თავიდან" : "წაკითხვა &rarr;")) +
                  "</button>" +
                "</div>" +
              "</article>"
            );
          }).join("")
        : '<div class="card" style="grid-column:1/-1; text-align:center; padding:36px;">' +
            '<h3 class="section-title">' + App.UI.escapeHTML(activeLevelFilter) + " დონის საკითხავი ბიბლიოთეკა მზადდება მომდევნო ეტაპისთვის</h3>" +
            '<p style="color:var(--text-secondary); margin-top:8px;">A1 დონის 15 ისტორია უკვე მზადაა. მომდევნო ეტაპზე დაემატება A2 დონე.</p>' +
          "</div>";

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">საკითხავი ბიბლიოთეკა</h2>' +
                '<p class="section-subtitle">აირჩიეთ ისტორია, წაიკითხეთ და მოუსმინეთ ორიგინალში, ხოლო ბოლოს შეამოწმეთ გააზრება მომდევნო საკითხავის გასახსნელად.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">წაკითხულია: ' + completedIds.length + " / " + allPassages.length + "</span>" +
                '<button type="button" class="btn btn-primary btn-sm" id="jump-reading-frontier-btn">🎯 მიმდინარეზე გადასვლა</button>' +
              "</div>" +
            "</div>" +
            '<div class="filter-bar" style="margin-bottom:0;">' +
              '<div class="pill-tabs">' + tabsHtml + "</div>" +
            "</div>" +
          "</section>" +

          '<section class="reading-grid" aria-label="საკითხავი ისტორიების კოლექცია">' +
            cardsHtml +
          "</section>" +
        "</div>";

      container.querySelectorAll("[data-reading-level]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeLevelFilter = btn.getAttribute("data-reading-level");
          App.UI.playSound("click");
          this.render();
        });
      });

      const jumpBtn = container.querySelector("#jump-reading-frontier-btn");
      if (jumpBtn) {
        jumpBtn.addEventListener("click", () => {
          activeLevelFilter = "ALL";
          this.render();
          window.setTimeout(() => {
            const el = document.getElementById("reading-anchor-" + frontierId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 60);
        });
      }

      container.querySelectorAll("[data-open-passage]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-passage-idx"));
          const unlocked = this.isPassageUnlocked(idx, allPassages);

          if (!unlocked) {
            const cardEl = btn.closest(".reading-story-card");
            if (cardEl) {
              cardEl.classList.remove("shake");
              void cardEl.offsetWidth;
              cardEl.classList.add("shake");
            }
            const prevP = allPassages[idx - 1];
            App.UI.toast("🔒 ეს ისტორია ჩაკეტილია! ჯერ დაასრულეთ: «" + (prevP ? prevP.titleEn : "წინა ტექსტი") + "».", "warning", 3200);
            return;
          }

          const id = btn.getAttribute("data-open-passage");
          activePassage = allPassages.find((p) => p.id === id) || null;
          if (activePassage) {
            this.prepareRandomizedQuestions(activePassage);
          }
          showTranslations = false; // თავიდან ქართული თარგმანი დამალულია!
          quizAnswers = {};
          App.UI.playSound("click");
          this.render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    },

    renderPassageReader: function (container, allPassages) {
      const p = activePassage;

      // აბზაცები დანომრვის გარეშე!
      const paragraphsHtml = p.paragraphs.map((para) => {
        return (
          '<div class="reading-paragraph-block">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">' +
              '<p class="reading-p-en">' + App.UI.escapeHTML(para.en) + "</p>" +
              '<button type="button" class="audio-btn" data-speak-para="' + App.UI.escapeHTML(para.en) + '" title="აბზაცის მოსმენა">&#128266;</button>' +
            "</div>" +
            (showTranslations
              ? '<p class="reading-p-ka">' + App.UI.escapeHTML(para.ka) + "</p>"
              : "") +
          "</div>"
        );
      }).join("");

      const glossaryHtml = p.glossary.map((g) => {
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
            '<button type="button" class="' + cls + '" data-reading-q="' + qIdx + '" data-reading-opt="' + oIdx + '" ' + (hasAnswered ? "disabled" : "") + ">" +
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
            '<button type="button" class="btn btn-outline btn-sm" id="back-reading-list-btn">&larr; ბიბლიოთეკაში დაბრუნება</button>' +
            '<span class="stat-pill stat-pill--level">' + p.icon + " " + App.UI.escapeHTML(p.genre) + " &bull; დონე " + App.UI.escapeHTML(p.level) + "</span>" +
          "</div>" +

          '<article class="card">' +
            '<div class="reading-Toolbar">' +
              "<div>" +
                '<h2 class="section-title" style="font-size:1.4rem;">' + App.UI.escapeHTML(p.titleEn) + "</h2>" +
                '<div style="font-size:0.92rem; font-weight:700; color:var(--brand-secondary); margin-top:2px;">' + App.UI.escapeHTML(p.titleKa) + "</div>" +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button type="button" class="btn ' + (showTranslations ? "btn-secondary" : "btn-outline") + ' btn-sm" id="toggle-ka-translation-btn">' +
                  (showTranslations ? "🇬🇪 თარგმანის დამალვა" : "🇬🇪 თარგმანის ჩვენება") +
                "</button>" +
                '<button type="button" class="btn btn-primary btn-sm" id="listen-full-passage-btn">&#128266; მოსმენა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="listen-slow-passage-btn">🐢 ნელა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="stop-passage-audio-btn">&#9209; გაჩერება</button>' +
              "</div>" +
            "</div>" +

            '<div class="reading-article-text">' +
              paragraphsHtml +
            "</div>" +
          "</article>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:12px;">📌 საკვანძო სიტყვები და გამოთქმები</h3>' +
            '<div class="glossary-grid">' + glossaryHtml + "</div>" +
          "</section>" +

          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h3 class="section-title">წაკითხულის გააზრება</h3>' +
                '<p class="section-subtitle">უპასუხეთ კითხვებს ისტორიის დასასრულებლად და მომდევნო საკითხავის გასახსნელად.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">პასუხი: ' + answeredCount + " / " + totalQ + "</span>" +
                '<span class="stat-pill stat-pill--xp">✓ სწორია: ' + correctCount + "</span>" +
                '<button type="button" class="btn btn-outline btn-sm" id="reset-reading-questions-btn">🔄 თავიდან არევა</button>' +
              "</div>" +
            "</div>" +
            '<div style="margin-bottom:18px;">' +
              App.UI.renderProgressBar(progressPct, "შესრულების პროგრესი", progressPct + "%") +
            "</div>" +
            questionsHtml +
            '<div style="display:flex; justify-content:flex-end; margin-top:12px;">' +
              '<button type="button" class="btn btn-primary" id="complete-reading-btn">დასრულება და მომდევნოს გახსნა (+' + p.xp + " XP) &rarr;</button>" +
            "</div>" +
          "</section>" +
        "</div>";

      const backBtn = container.querySelector("#back-reading-list-btn");
      if (backBtn) {
        backBtn.addEventListener("click", () => {
          this.stopSpeaking();
          activePassage = null;
          this.render();
        });
      }

      const toggleTransBtn = container.querySelector("#toggle-ka-translation-btn");
      if (toggleTransBtn) {
        toggleTransBtn.addEventListener("click", () => {
          const scrollY = window.scrollY;
          showTranslations = !showTranslations;
          this.renderPassageReader(container, allPassages);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }

      const resetQBtn = container.querySelector("#reset-reading-questions-btn");
      if (resetQBtn) {
        resetQBtn.addEventListener("click", () => {
          const scrollY = window.scrollY;
          this.prepareRandomizedQuestions(p);
          quizAnswers = {};
          App.UI.playSound("click");
          App.UI.toast("კითხვების პასუხები თავიდან აირია!", "info", 2000);
          this.renderPassageReader(container, allPassages);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }

      const listenFullBtn = container.querySelector("#listen-full-passage-btn");
      if (listenFullBtn) {
        listenFullBtn.addEventListener("click", () => {
          const fullText = p.paragraphs.map((item) => item.en).join(" ");
          this.speak(fullText, false);
        });
      }

      const listenSlowBtn = container.querySelector("#listen-slow-passage-btn");
      if (listenSlowBtn) {
        listenSlowBtn.addEventListener("click", () => {
          const fullText = p.paragraphs.map((item) => item.en).join(" ");
          this.speak(fullText, true);
        });
      }

      const stopAudioBtn = container.querySelector("#stop-passage-audio-btn");
      if (stopAudioBtn) {
        stopAudioBtn.addEventListener("click", () => this.stopSpeaking());
      }

      container.querySelectorAll("[data-speak-para]").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.speak(btn.getAttribute("data-speak-para"), false);
        });
      });

      container.querySelectorAll("[data-reading-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = Number(btn.getAttribute("data-reading-q"));
          const oIdx = Number(btn.getAttribute("data-reading-opt"));
          const scrollY = window.scrollY;
          quizAnswers[qIdx] = oIdx;
          if (oIdx === preparedQuestions[qIdx].correct) {
            App.UI.playSound("success");
          } else {
            App.UI.playSound("click");
          }
          this.renderPassageReader(container, allPassages);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      });

      const completeBtn = container.querySelector("#complete-reading-btn");
      if (completeBtn) {
        completeBtn.addEventListener("click", () => {
          if (Object.keys(quizAnswers).length < preparedQuestions.length) {
            App.UI.toast(
              "გთხოვთ, უპასუხოთ ყველა კითხვას (" + Object.keys(quizAnswers).length + "/" + preparedQuestions.length + ") ტექსტის დასასრულებლად.",
              "warning"
            );
            return;
          }

          this.stopSpeaking();
          const completedIds = this.getCompletedIds();
          if (completedIds.indexOf(p.id) === -1) {
            completedIds.push(p.id);
            App.Storage.set("progress.completedReadingIds", completedIds);
          }

          App.Progress.recordActivity({
            xp: p.xp,
            title: "წაკითხულია: " + p.titleEn + " (" + correctCount + "/" + totalQ + ")",
            category: "კითხვა",
            metricKey: "readingCompleted"
          });

          const currentGlobalIdx = allPassages.findIndex((x) => x.id === p.id);
          const nextPassage = allPassages[currentGlobalIdx + 1];

          App.UI.playSound("success");
          App.UI.toast(
            "✓ ისტორია დასრულდა (შედეგი: " + correctCount + "/" + totalQ + ", +" + p.xp + " XP)! " +
            (nextPassage ? "გაიხსნა: " + nextPassage.titleEn : ""),
            "success",
            4200
          );

          activePassage = null;
          this.render();
          window.setTimeout(() => {
            const targetId = nextPassage ? ("reading-anchor-" + nextPassage.id) : ("reading-anchor-" + p.id);
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 80);
        });
      }
    }
  };

  App.Reading = Reading;
})(window);