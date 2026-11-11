/**
 * WRITING.JS — წერისა და წერილობითი კომუნიკაციის სტუდია (კითხვისა და მოსმენის იდენტური Story Cover სტილით)
 * - გარე ბარათები: ორიგინალური Cover დიზაინი და თანმიმდევრული გახსნა (🔒)
 * - შიდა სტუდია: 5-აბზაციანი ნიმუში (ქართული თარგმანი თავიდან დამალულია),
 *   პრაქტიკული წერის სავარჯიშო ველი (Writing Pad სიტყვების მთვლელითა და შაბლონით),
 *   10 წერითი ფრაზა/შაბლონი და 10 ტესტური კითხვა.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const WRITING_VISUAL_META = [
    { icon: "🪪", genre: "პირადი პროფილი" },
    { icon: "🏖️", genre: "ღია ბარათი" },
    { icon: "🏨", genre: "სასტუმროს ჯავშანი" },
    { icon: "🎂", genre: "მოსაწვევი" },
    { icon: "🏡", genre: "სახლის აღწერა" },
    { icon: "📓", genre: "პირადი დღიური" },
    { icon: "✉️", genre: "სოციალური მიმოწერა" },
    { icon: "🎓", genre: "სასწავლო იმეილი" },
    { icon: "⭐", genre: "მიმოხილვა" },
    { icon: "🗺️", genre: "მარშრუტის აღწერა" },
    { icon: "🍳", genre: "რეცეპტი" },
    { icon: "🔍", genre: "განცხადება" },
    { icon: "🎁", genre: "სამადლობელი წერილი" },
    { icon: "📝", genre: "ანკეტა და ფორმა" },
    { icon: "📅", genre: "გეგმები და მიზნები" }
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
  let showTranslations = false; // ქართული თარგმანი თავიდან დამალულია!
  let quizAnswers = {};
  let pendingDrafts = null;      // შეუნახავი მონახაზები (ინახება writing.drafts-ში 0.8 წმ-ში)
  let checksByTopicId = {};      // თვითშემოწმების სია (მხოლოდ სესიაში)
  let draftSaveTimer = null;
  const MAX_DRAFT_CHARS = 6000;

  function drafts() {
    return pendingDrafts || Object.assign({}, App.Storage.get("writing.drafts", {}) || {});
  }

  function saveDraft(topicId, text) {
    pendingDrafts = drafts();
    const value = String(text || "").slice(0, MAX_DRAFT_CHARS);
    if (value.trim()) pendingDrafts[topicId] = value;
    else delete pendingDrafts[topicId];
    window.clearTimeout(draftSaveTimer);
    draftSaveTimer = window.setTimeout(function () {
      App.Storage.set("writing.drafts", pendingDrafts);
      pendingDrafts = null;
    }, 800);
  }

  function countWords(text) {
    const trimmed = String(text || "").trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }

  // სიტყვების რაოდენობის შეფასება დონის მიზნობრივ დიაპაზონთან მიმართებით
  function wordTargetState(count, range) {
    if (!range) return { cls: "", label: "" };
    if (count === 0) return { cls: "", label: "Target: " + range[0] + "–" + range[1] + " words" };
    if (count < range[0]) return { cls: "wx-count--low", label: count + " words · " + (range[0] - count) + " more to reach the target (" + range[0] + "–" + range[1] + ")" };
    if (count > range[1]) return { cls: "wx-count--high", label: count + " words · above the target (" + range[0] + "–" + range[1] + "); consider cutting" };
    return { cls: "wx-count--ok", label: count + " words · within the target ✓" };
  }

  const Writing = {
    getAllTopics: function () {
      const listA = Array.isArray(App.WritingDataA) ? App.WritingDataA : [];
      const listB = Array.isArray(App.WritingDataB) ? App.WritingDataB : [];
      const listC = Array.isArray(App.WritingDataC) ? App.WritingDataC : [];
      const combined = listA.concat(listB).concat(listC);

      return combined.map((item, idx) => {
        const num = item.num || (idx + 1);
        const paras = item.paragraphs.map((p) => (Array.isArray(p) ? { en: p[0], ka: p[1] } : p));
        const visual = WRITING_VISUAL_META[(num - 1) % WRITING_VISUAL_META.length];

        const id = "writing-topic-" + num;
        const en = (App.WritingEN && App.WritingEN.tasks && App.WritingEN.tasks[id]) || null;
        return {
          id: id,
          en: en,
          levelSpec: (App.WritingEN && App.WritingEN.levels && App.WritingEN.levels[item.level]) || null,
          topicNumber: num,
          level: item.level,
          titleKa: item.title,
          titleEn: item.subtitle,
          writingTime: item.time || "6 წთ",
          xp: 45,
          icon: item.icon || visual.icon,
          genre: item.genre || visual.genre,
          themeIdx: (num + 2) % 6,
          prompt: item.prompt || "დაწერეთ მოკლე ტექსტი მოცემული ნიმუშისა და საკვანძო ფრაზების გამოყენებით.",
          template: item.template || "",
          paragraphs: paras,
          glossary: item.glossary.map(parseGlossaryItem),
          questions: item.questions.map(parseQuestionItem)
        };
      });
    },

    getCompletedIds: function () {
      const list = App.Storage.get("progress.completedWritingIds", []);
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

      const pendingId = App.takePendingOpen ? App.takePendingOpen("writing") : null;
      if (pendingId) {
        activeTopic = allTopics.find((t) => t.id === pendingId) || null;
        if (activeTopic) this.prepareRandomizedQuestions(activeTopic);
        quizAnswers = {};
        showTranslations = false;
      }

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
          '<button type="button" class="pill-tab ' + active + '" data-writing-level="' + lvl + '">' +
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
              '<article class="' + cardCls + '" id="writing-anchor-' + App.UI.escapeHTML(t.id) + '">' +
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
                      : "✍️ " + App.UI.escapeHTML(t.writingTime) + "") +
                  "</span>" +
                  '<button type="button" class="btn ' + (!isUnlocked ? "btn-outline" : (isDone ? "btn-outline" : "btn-primary")) + ' btn-sm" ' +
                    'data-open-writing="' + App.UI.escapeHTML(t.id) + '" ' +
                    'data-writing-idx="' + globalIdx + '">' +
                    (!isUnlocked ? "🔒 ჩაკეტილია" : (isDone ? "თავიდან" : "დაწყება &rarr;")) +
                  "</button>" +
                "</div>" +
              "</article>"
            );
          }).join("")
        : '<div class="card" style="grid-column:1/-1; text-align:center; padding:36px;">' +
            '<h3 class="section-title">' + App.UI.escapeHTML(activeLevelFilter) + " დონის წერის ბიბლიოთეკა მზადდება მომდევნო ეტაპისთვის</h3>" +
            '<p style="color:var(--text-secondary); margin-top:8px;">A1 დონის 15 წერითი თემა უკვე მზადაა. მომდევნო ნაბიჯზე დაემატება A2 დონე.</p>' +
          "</div>";

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">წერისა და წერილობითი კომუნიკაციის სტუდია</h2>' +
                '<p class="section-subtitle">შეისწავლეთ იმეილების, წერილების, განცხადებების, მიმოხილვებისა და ესეების სტრუქტურა, გამოიყენეთ მზა შაბლონები და შეასრულეთ წერითი ტესტები.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">შესრულებულია: ' + completedIds.length + " / " + allTopics.length + "</span>" +
                '<button type="button" class="btn btn-primary btn-sm" id="jump-writing-frontier-btn">🎯 მიმდინარეზე გადასვლა</button>' +
              "</div>" +
            "</div>" +
            '<div class="filter-bar" style="margin-bottom:0;">' +
              '<div class="pill-tabs">' + tabsHtml + "</div>" +
            "</div>" +
          "</section>" +

          '<section class="reading-grid" aria-label="წერის თემების კოლექცია">' +
            cardsHtml +
          "</section>" +
        "</div>";

      container.querySelectorAll("[data-writing-level]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeLevelFilter = btn.getAttribute("data-writing-level");
          App.UI.playSound("click");
          this.render();
        });
      });

      const jumpBtn = container.querySelector("#jump-writing-frontier-btn");
      if (jumpBtn) {
        jumpBtn.addEventListener("click", () => {
          activeLevelFilter = "ALL";
          this.render();
          window.setTimeout(() => {
            const el = document.getElementById("writing-anchor-" + frontierId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 60);
        });
      }

      container.querySelectorAll("[data-open-writing]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-writing-idx"));
          const unlocked = this.isTopicUnlocked(idx, allTopics);

          if (!unlocked) {
            const cardEl = btn.closest(".reading-story-card");
            if (cardEl) {
              cardEl.classList.remove("shake");
              void cardEl.offsetWidth;
              cardEl.classList.add("shake");
            }
            const prevT = allTopics[idx - 1];
            App.UI.toast("🔒 ეს წერითი თემა ჩაკეტილია! ჯერ დაასრულეთ: «" + (prevT ? prevT.titleEn : "წინა თემა") + "».", "warning", 3200);
            return;
          }

          const id = btn.getAttribute("data-open-writing");
          activeTopic = allTopics.find((t) => t.id === id) || null;
          if (activeTopic) {
            this.prepareRandomizedQuestions(activeTopic);
          }
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
      const esc = App.UI.escapeHTML;
      const currentDraft = drafts()[t.id] || "";
      const wordCount = countWords(currentDraft);
      const spec = t.levelSpec;
      const target = wordTargetState(wordCount, spec && spec.words);
      const checks = checksByTopicId[t.id] || {};
      const trField = function (field) { return App.tr ? App.tr("writing", t.id, field) : ""; };

      const paragraphsHtml = t.paragraphs.map((para) => {
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
            '<button type="button" class="' + cls + '" data-writing-q="' + qIdx + '" data-writing-opt="' + oIdx + '" ' + (hasAnswered ? "disabled" : "") + ">" +
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
            '<button type="button" class="btn btn-outline btn-sm" id="back-writing-list-btn">&larr; წერის ბიბლიოთეკაში დაბრუნება</button>' +
            '<span class="stat-pill stat-pill--level">' + t.icon + " " + App.UI.escapeHTML(t.genre) + " &bull; დონე " + App.UI.escapeHTML(t.level) + "</span>" +
          "</div>" +

          '<article class="card">' +
            '<div class="reading-Toolbar">' +
              "<div>" +
                '<h2 class="section-title" style="font-size:1.4rem;">' + App.UI.escapeHTML(t.titleEn) + "</h2>" +
                '<div style="font-size:0.92rem; font-weight:700; color:var(--brand-secondary); margin-top:2px;">' + App.UI.escapeHTML(t.titleKa) + "</div>" +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button type="button" class="btn ' + (showTranslations ? "btn-secondary" : "btn-outline") + ' btn-sm" id="toggle-writing-ka-btn">' +
                  (showTranslations ? "🇬🇪 თარგმანის დამალვა" : "🇬🇪 თარგმანის ჩვენება") +
                "</button>" +
                '<button type="button" class="btn btn-primary btn-sm" id="listen-full-writing-btn">&#128266; ნიმუშის მოსმენა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="stop-writing-audio-btn">&#9209; გაჩერება</button>' +
              "</div>" +
            "</div>" +

            '<div class="reading-article-text">' +
              paragraphsHtml +
            "</div>" +
          "</article>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:12px;">📌 წერითი ფრაზები, კავშირები და შაბლონები</h3>' +
            '<div class="glossary-grid">' + glossaryHtml + "</div>" +
          "</section>" +

          '<section class="card wx-task" aria-labelledby="wx-task-title">' +
            '<div class="section-header" style="margin-bottom:10px;">' +
              "<div>" +
                '<h3 class="section-title" id="wx-task-title">✍️ Your writing task</h3>' +
                (t.en
                  ? '<p class="wx-task__text" lang="en">' + esc(t.en.task) + "</p>" +
                    (trField("task") ? '<p class="wx-task__ka" lang="ka">' + esc(trField("task")) + "</p>" : "") +
                    '<p class="wx-task__label" lang="en">Include:</p><ul class="wx-points" lang="en">' +
                      t.en.points.map(function (pt) { return "<li>" + esc(pt) + "</li>"; }).join("") + "</ul>"
                  : '<p class="section-subtitle">' + esc(t.prompt) + "</p>") +
                (t.en && t.prompt ? '<details class="wx-ka-prompt"><summary>ქართული მითითება</summary><p lang="ka">' + esc(t.prompt) + "</p></details>" : "") +
              "</div>" +
              '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
                (t.template ? '<button type="button" class="btn btn-outline btn-sm" id="insert-writing-template-btn">📋 შაბლონის ჩასმა</button>' : "") +
              "</div>" +
            "</div>" +
            '<label class="sr-only" for="writing-sandbox-textarea">Your text</label>' +
            '<textarea id="writing-sandbox-textarea" class="auth-input" rows="8" lang="en" placeholder="Write your text in English here… (your draft is saved automatically)" style="width:100%; font-family:inherit; line-height:1.6; resize:vertical;">' + esc(currentDraft) + "</textarea>" +
            '<p class="wx-count ' + target.cls + '" id="writing-word-counter" aria-live="polite">' + (target.label || ("Words: " + wordCount)) + "</p>" +
            (spec
              ? '<div class="wx-check">' +
                  '<h4 class="wx-check__title" lang="en">Self-check before you finish</h4>' +
                  '<ul class="wx-check__list" lang="en">' + spec.checklist.map(function (item, i) {
                    return '<li><label><input type="checkbox" data-wx-check="' + i + '"' + (checks[i] ? " checked" : "") + "> " + esc(item) + "</label></li>";
                  }).join("") + "</ul>" +
                  '<details class="wx-criteria"><summary lang="en">How ' + esc(t.level) + " writing is assessed</summary>" +
                    '<dl lang="en">' + spec.criteria.map(function (c) { return "<dt>" + esc(c.name) + "</dt><dd>" + esc(c.descriptor) + "</dd>"; }).join("") + "</dl>" +
                  "</details>" +
                "</div>"
              : "") +
          "</section>" +

          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h3 class="section-title">წერის სტრუქტურისა და ნიმუშის ტესტი</h3>' +
                '<p class="section-subtitle">უპასუხეთ კითხვებს თემის დასასრულებლად და მომდევნო წერითი დავალების გასახსნელად.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">პასუხი: ' + answeredCount + " / " + totalQ + "</span>" +
                '<span class="stat-pill stat-pill--xp">✓ სწორია: ' + correctCount + "</span>" +
                '<button type="button" class="btn btn-outline btn-sm" id="reset-writing-questions-btn">🔄 თავიდან არევა</button>' +
              "</div>" +
            "</div>" +
            '<div style="margin-bottom:18px;">' +
              App.UI.renderProgressBar(progressPct, "შესრულების პროგრესი", progressPct + "%") +
            "</div>" +
            questionsHtml +
            '<div style="display:flex; justify-content:flex-end; margin-top:12px;">' +
              '<button type="button" class="btn btn-primary" id="complete-writing-btn">დასრულება და მომდევნოს გახსნა &rarr;</button>' +
            "</div>" +
          "</section>" +
        "</div>";

      const backBtn = container.querySelector("#back-writing-list-btn");
      if (backBtn) {
        backBtn.addEventListener("click", () => {
          this.stopSpeaking();
          activeTopic = null;
          this.render();
        });
      }

      const textarea = container.querySelector("#writing-sandbox-textarea");
      const counterEl = container.querySelector("#writing-word-counter");
      const updateCounter = () => {
        if (!counterEl) return;
        const wc = countWords(textarea.value);
        const st = wordTargetState(wc, spec && spec.words);
        counterEl.className = "wx-count " + st.cls;
        counterEl.textContent = st.label || ("Words: " + wc);
      };
      if (textarea) {
        textarea.addEventListener("input", () => {
          saveDraft(t.id, textarea.value);
          updateCounter();
        });
      }

      container.querySelectorAll("[data-wx-check]").forEach((box) => {
        box.addEventListener("change", () => {
          const map = checksByTopicId[t.id] = checksByTopicId[t.id] || {};
          map[box.getAttribute("data-wx-check")] = box.checked;
        });
      });

      const templateBtn = container.querySelector("#insert-writing-template-btn");
      if (templateBtn && textarea) {
        templateBtn.addEventListener("click", () => {
          textarea.value = t.template;
          saveDraft(t.id, t.template);
          updateCounter();
          textarea.focus();
          App.UI.toast("შაბლონი ჩაისვა! შეცვალეთ კვადრატულ ფრჩხილებში მოცემული სიტყვები.", "info", 2800);
        });
      }

      const toggleTransBtn = container.querySelector("#toggle-writing-ka-btn");
      if (toggleTransBtn) {
        toggleTransBtn.addEventListener("click", () => {
          const scrollY = window.scrollY;
          showTranslations = !showTranslations;
          this.renderTopicPlayer(container, allTopics);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }

      const resetQBtn = container.querySelector("#reset-writing-questions-btn");
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

      const listenFullBtn = container.querySelector("#listen-full-writing-btn");
      if (listenFullBtn) {
        listenFullBtn.addEventListener("click", () => {
          const fullText = t.paragraphs.map((item) => item.en).join(" ");
          this.speak(fullText, false);
        });
      }

      const stopAudioBtn = container.querySelector("#stop-writing-audio-btn");
      if (stopAudioBtn) {
        stopAudioBtn.addEventListener("click", () => this.stopSpeaking());
      }

      container.querySelectorAll("[data-speak-para]").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.speak(btn.getAttribute("data-speak-para"), false);
        });
      });

      container.querySelectorAll("[data-writing-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = Number(btn.getAttribute("data-writing-q"));
          const oIdx = Number(btn.getAttribute("data-writing-opt"));
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

      const completeBtn = container.querySelector("#complete-writing-btn");
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
            App.Storage.set("progress.completedWritingIds", completedIds);
          }

          App.Progress.recordActivity({
            xp: t.xp,
            title: "წერა: " + t.titleEn + " (" + correctCount + "/" + totalQ + ")",
            category: "წერა",
            metricKey: "writingCompleted"
          });

          const currentGlobalIdx = allTopics.findIndex((x) => x.id === t.id);
          const nextTopic = allTopics[currentGlobalIdx + 1];

          App.UI.playSound("success");
          App.UI.toast(
            "✓ წერითი თემა დასრულდა (შედეგი: " + correctCount + "/" + totalQ + ")! " +
            (nextTopic ? "გაიხსნა: " + nextTopic.titleEn : ""),
            "success",
            4200
          );

          activeTopic = null;
          this.render();
          window.setTimeout(() => {
            const targetId = nextTopic ? ("writing-anchor-" + nextTopic.id) : ("writing-anchor-" + t.id);
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 80);
        });
      }
    }
  };

  App.Writing = Writing;

  // Routing is handled centrally by App.Router.renderView (js/router.js).
})(window);