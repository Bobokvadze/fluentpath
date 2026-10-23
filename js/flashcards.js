/**
 * FLASHCARDS.JS — ელეგანტური 3D ბარათები, მრავალდონიანი მონიშვნით (A1–C2 Checkboxes)
 * და Leitner-ის 5-ყუთიანი სისტემით.
 * - ხმოვანი წაკითხვა (🔊) ჩნდება მხოლოდ იმ მხარეს, სადაც ინგლისური სიტყვა წერია!
 * - სრულად აღმოფხვრილია "undefined" პრობლემა ნებისმიერი ფორმატის სიტყვაზე.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ALL_CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

  let selectedLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  let activeBoxFilter = 0; // 0 = ყველა ყუთი, 1..5 = Leitner Box 1..5, 99 = რჩეულები
  let cardDirection = "EN_TO_KA"; // "EN_TO_KA" | "KA_TO_EN"
  let currentDeck = [];
  let currentIndex = 0;
  let isFlipped = false;
  let sessionXpEarned = 0;

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

  /**
   * უნივერსალური ნორმალიზატორი — პოულობს ინგლისურ და ქართულ ველებს ნებისმიერი სტრუქტურის ობიექტში,
   * რომ არასდროს დაიწეროს "undefined".
   */
  function normalizeWordItem(raw, idx) {
    if (!raw || typeof raw !== "object") return null;

    let en = raw.en || raw.word || raw.term || raw.english || raw.headword || "";
    let ka = raw.ka || raw.translation || raw.meaning || raw.georgian || raw.defKa || "";
    let phonetic = raw.phonetic || raw.transcription || raw.pronunciation || "";

    // თუ en ცარიელია და phonetic-ში წერია "/acumen/", ამოვიღოთ სიტყვა იქიდან
    if (!en && phonetic) {
      const stripped = String(phonetic).replace(/^\/+|\/+$/g, "").trim();
      if (/^[a-zA-Z\s\-'()]+$/.test(stripped)) {
        en = stripped;
      }
    }

    // თუ მაინც ცარიელია რომელიმე, შევამოწმოთ ობიექტის სხვა ტექსტური ველები
    if (!en || !ka) {
      Object.keys(raw).forEach((k) => {
        if (k === "id" || k === "level" || k === "category" || k === "topic" || k === "phonetic") return;
        const val = String(raw[k] || "").trim();
        if (!val || val.length > 70) return;
        if (!en && /^[a-zA-Z\s\-'()/]+$/.test(val)) {
          en = val.replace(/^\/+|\/+$/g, "").trim();
        } else if (!ka && /[\u10D0-\u10FF]/.test(val)) {
          ka = val;
        }
      });
    }

    en = String(en || "").trim();
    ka = String(ka || "").trim();
    phonetic = String(phonetic || "").trim();

    // თუ phonetic ზუსტად იგივეა რაც ინგლისური სიტყვა (მაგ. "/acumen/"), არ გავიმეოროთ ზედმეტად
    const cleanPhonetic = phonetic.replace(/^\/+|\/+$/g, "").trim();
    if (cleanPhonetic.toLowerCase() === en.toLowerCase()) {
      phonetic = "";
    }

    const exEn = String(raw.exampleEn || raw.example || raw.sentence || raw.enExample || "").trim();
    const exKa = String(raw.exampleKa || raw.sentenceKa || raw.kaExample || raw.exampleTranslation || "").trim();

    if (!en && !ka) return null;

    return {
      id: raw.id || ("word-" + (idx + 1)),
      en: en,
      ka: ka,
      phonetic: phonetic,
      level: raw.level || "A1",
      category: raw.category || raw.topic || "ლექსიკა",
      exampleEn: exEn,
      exampleKa: exKa
    };
  }

  const Flashcards = {
    loadSavedLevels: function () {
      const saved = App.Storage.get("flashcards.selectedLevels", null);
      if (Array.isArray(saved) && saved.length > 0) {
        selectedLevels = saved.filter((lvl) => ALL_CEFR_LEVELS.indexOf(lvl) !== -1);
        if (selectedLevels.length === 0) {
          selectedLevels = ALL_CEFR_LEVELS.slice();
        }
      }
    },

    saveSelectedLevels: function () {
      App.Storage.set("flashcards.selectedLevels", selectedLevels);
    },

    getAllWordsPool: function () {
      let rawList = [];
      if (App.Vocabulary && typeof App.Vocabulary.getAllWords === "function") {
        rawList = App.Vocabulary.getAllWords() || [];
      }
      const normalized = [];
      for (let i = 0; i < rawList.length; i++) {
        const item = normalizeWordItem(rawList[i], i);
        if (item) normalized.push(item);
      }
      return normalized;
    },

    getBoxMap: function () {
      const map = App.Storage.get("flashcards.boxByWordId", {});
      return (map && typeof map === "object") ? map : {};
    },

    getWordBox: function (wordId, boxMap, learnedIds) {
      if (boxMap[wordId]) return Number(boxMap[wordId]);
      if (learnedIds.indexOf(wordId) !== -1) return 5;
      return 1;
    },

    buildFilteredDeck: function (shouldShuffle) {
      const allWords = this.getAllWordsPool();
      const boxMap = this.getBoxMap();
      const learnedIds = App.Storage.get("vocabulary.learnedIds", []);
      const bookmarkedIds = App.Storage.get("vocabulary.bookmarkedIds", []);

      let filtered = allWords.filter((w) => {
        if (selectedLevels.indexOf(w.level) === -1) return false;
        if (activeBoxFilter === 99) {
          return bookmarkedIds.indexOf(w.id) !== -1;
        }
        if (activeBoxFilter >= 1 && activeBoxFilter <= 5) {
          const b = this.getWordBox(w.id, boxMap, learnedIds);
          return b === activeBoxFilter;
        }
        return true;
      });

      if (shouldShuffle) {
        filtered = shuffleArray(filtered);
      }

      currentDeck = filtered;
      if (currentIndex >= currentDeck.length) {
        currentIndex = 0;
      }
      isFlipped = false;
    },

    rateCurrentCard: function (rating) {
      if (!currentDeck.length) return;
      const word = currentDeck[currentIndex];
      if (!word) return;

      const boxMap = Object.assign({}, this.getBoxMap());
      const learnedIds = App.Storage.get("vocabulary.learnedIds", []).slice();
      const currentBox = this.getWordBox(word.id, boxMap, learnedIds);

      let nextBox = currentBox;
      let xpGain = 0;

      if (rating === "AGAIN") {
        nextBox = 1;
        App.UI.playSound("click");
      } else if (rating === "HARD") {
        nextBox = Math.max(2, currentBox);
        xpGain = 2;
        App.UI.playSound("click");
      } else if (rating === "GOOD") {
        nextBox = Math.min(5, currentBox + 1);
        xpGain = 5;
        App.UI.playSound("success");
      } else if (rating === "EASY") {
        nextBox = 5;
        xpGain = 10;
        App.UI.playSound("success");
      }

      boxMap[word.id] = nextBox;
      App.Storage.set("flashcards.boxByWordId", boxMap);

      if (nextBox >= 4 && learnedIds.indexOf(word.id) === -1) {
        learnedIds.push(word.id);
        App.Storage.set("vocabulary.learnedIds", learnedIds);
        App.Storage.set("progress.vocabularyLearned", learnedIds.length);
      } else if (nextBox === 1 && learnedIds.indexOf(word.id) !== -1) {
        const idx = learnedIds.indexOf(word.id);
        learnedIds.splice(idx, 1);
        App.Storage.set("vocabulary.learnedIds", learnedIds);
        App.Storage.set("progress.vocabularyLearned", learnedIds.length);
      }

      const reviewedToday = Number(App.Storage.get("flashcards.reviewedToday", 0)) + 1;
      App.Storage.set("flashcards.reviewedToday", reviewedToday);
      sessionXpEarned += xpGain;

      if (xpGain > 0 && App.Progress && typeof App.Progress.addXP === "function") {
        App.Progress.addXP(xpGain);
      }

      const allWords = this.getAllWordsPool();
      if (allWords.length > 0) {
        const masteredCount = allWords.filter((w) => this.getWordBox(w.id, boxMap, learnedIds) >= 4).length;
        const pct = Math.min(100, Math.round((masteredCount / allWords.length) * 100));
        App.Storage.set("progress.moduleCompletion.flashcards", pct);
      }

      isFlipped = false;
      if (currentIndex < currentDeck.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
        App.UI.toast("🎉 დასტის ბოლოში გახვედით! იწყება თავიდან.", "success");
      }

      this.render();
    },

    speakEnglish: function (text) {
      if (!text || !("speechSynthesis" in window)) return;
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US";
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    },

    toggleBookmark: function (wordId) {
      const bookmarked = App.Storage.get("vocabulary.bookmarkedIds", []).slice();
      const idx = bookmarked.indexOf(wordId);
      if (idx === -1) {
        bookmarked.push(wordId);
        App.UI.toast("⭐ სიტყვა დაემატა რჩეულ ბარათებში!", "info", 1800);
      } else {
        bookmarked.splice(idx, 1);
        App.UI.toast("მოიხსნა რჩეული ბარათებიდან.", "info", 1800);
      }
      App.Storage.set("vocabulary.bookmarkedIds", bookmarked);
      this.render();
    },

    renderBoxDots: function (boxNum) {
      let dots = "";
      for (let i = 1; i <= 5; i++) {
        dots += '<span class="fc-dot ' + (i <= boxNum ? "filled" : "") + '"></span>';
      }
      return '<div class="fc-box-dots" title="ცოდნის ყუთი ' + boxNum + ' / 5"><span>ყუთი ' + boxNum + '</span>' + dots + "</div>";
    },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;

      this.loadSavedLevels();
      const allWords = this.getAllWordsPool();
      if (currentDeck.length === 0) {
        this.buildFilteredDeck(false);
      }

      const boxMap = this.getBoxMap();
      const learnedIds = App.Storage.get("vocabulary.learnedIds", []);
      const bookmarkedIds = App.Storage.get("vocabulary.bookmarkedIds", []);
      const reviewedToday = Number(App.Storage.get("flashcards.reviewedToday", 0));

      // დავითვალოთ ყუთების რაოდენობა მონიშნული დონეების მიხედვით
      const levelWords = allWords.filter((w) => selectedLevels.indexOf(w.level) !== -1);
      const boxCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      levelWords.forEach((w) => {
        const b = this.getWordBox(w.id, boxMap, learnedIds);
        boxCounts[b] = (boxCounts[b] || 0) + 1;
      });

      // მრავალდონიანი ჩექბოქსების გენერაცია
      const levelCheckboxesHtml = ALL_CEFR_LEVELS.map((lvl) => {
        const isChecked = selectedLevels.indexOf(lvl) !== -1;
        return (
          '<button type="button" class="fc-level-check-chip ' + (isChecked ? "is-checked" : "") + '" data-toggle-fc-level="' + lvl + '">' +
            '<span class="fc-check-box-icon">' + (isChecked ? "✓" : "") + "</span>" +
            '<span>' + lvl + "</span>" +
          "</button>"
        );
      }).join("");

      const boxDefinitions = [
        { num: 1, icon: "📥", title: "ყუთი 1 • ახალი", desc: "სასწავლი სიტყვები" },
        { num: 2, icon: "🌱", title: "ყუთი 2 • საწყისი", desc: "ნაცნობი სიტყვები" },
        { num: 3, icon: "📘", title: "ყუთი 3 • საშუალო", desc: "კარგად ნასწავლი" },
        { num: 4, icon: "🔥", title: "ყუთი 4 • მყარი", desc: "თითქმის ათვისებული" },
        { num: 5, icon: "🏆", title: "ყუთი 5 • ათვისებული", desc: "სრულად ნასწავლი" }
      ];

      const boxesHtml = boxDefinitions.map((b) => {
        const isAct = activeBoxFilter === b.num ? "active" : "";
        return (
          '<div class="leitner-box-card ' + isAct + '" data-fc-box="' + b.num + '">' +
            '<div class="leitner-box-title"><span>' + b.icon + " " + b.title + "</span></div>" +
            '<div class="leitner-box-count">' + (boxCounts[b.num] || 0) + "</div>" +
            '<div class="leitner-box-desc">' + b.desc + "</div>" +
          "</div>"
        );
      }).join("");

      const currentWord = currentDeck[currentIndex] || null;
      let cardStageHtml = "";

      if (!currentWord) {
        cardStageHtml =
          '<div class="card" style="text-align:center; padding:42px;">' +
            '<div style="font-size:2.6rem; margin-bottom:10px;">🎴</div>' +
            '<h3 class="section-title">არჩეულ ფილტრში ბარათები არ მოიძებნა</h3>' +
            '<p style="color:var(--text-secondary); margin:8px 0 18px;">მონიშნეთ სხვა დონე ან გადართეთ ყველა ყუთის ჩვენებაზე.</p>' +
            '<button type="button" class="btn btn-primary" id="fc-reset-filter-btn">ყველა დონისა და ყუთის ჩვენება</button>' +
          "</div>";
      } else {
        const wBox = this.getWordBox(currentWord.id, boxMap, learnedIds);
        const isBookmarked = bookmarkedIds.indexOf(currentWord.id) !== -1;

        const isFrontEnglish = (cardDirection === "EN_TO_KA");
        const isBackEnglish = (cardDirection === "KA_TO_EN");

        const frontWord = isFrontEnglish ? currentWord.en : currentWord.ka;
        const backWord = isFrontEnglish ? currentWord.ka : currentWord.en;

        // მეორადი ტექსტი უკანა მხარეს (წინა მხარის სიტყვის შეხსენება undefined-ის გარეშე!)
        const backSecondaryText = isFrontEnglish ? currentWord.en : currentWord.ka;

        const frontAudioHtml = isFrontEnglish
          ? '<button type="button" class="fc-speak-pill-btn" id="fc-speak-front-btn">&#128266; გამოთქმის მოსმენა</button>'
          : "";

        const backAudioHtml = isBackEnglish
          ? '<button type="button" class="fc-speak-pill-btn" id="fc-speak-back-btn">&#128266; გამოთქმის მოსმენა</button>'
          : "";

        const exampleHtml = (currentWord.exampleEn || currentWord.exampleKa)
          ? '<div class="fc-example-box">' +
              (currentWord.exampleEn ? '<div class="flashcard-example-en">"' + App.UI.escapeHTML(currentWord.exampleEn) + '"</div>' : "") +
              (currentWord.exampleKa ? '<div class="flashcard-example-ka">' + App.UI.escapeHTML(currentWord.exampleKa) + "</div>" : "") +
            "</div>"
          : "";

        cardStageHtml =
          '<div class="flashcard-stage-wrap">' +
            '<div class="flashcard-toolbar">' +
              '<div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">ბარათი: ' + (currentIndex + 1) + " / " + currentDeck.length + "</span>" +
                '<span class="stat-pill">დონეები: ' + App.UI.escapeHTML(selectedLevels.join(", ")) + "</span>" +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button type="button" class="btn btn-outline btn-sm" id="fc-toggle-dir-btn" title="მიმართულების შეცვლა">' +
                  (cardDirection === "EN_TO_KA" ? "🇬🇧 EN &rarr; 🇬🇪 KA" : "🇬🇪 KA &rarr; 🇬🇧 EN") +
                "</button>" +
                '<button type="button" class="btn btn-outline btn-sm" id="fc-shuffle-btn">🔀 არევა</button>' +
                '<button type="button" class="btn ' + (activeBoxFilter === 99 ? "btn-secondary" : "btn-outline") + ' btn-sm" id="fc-filter-bookmarks-btn">⭐ რჩეულები (' + bookmarkedIds.length + ")</button>" +
                (activeBoxFilter !== 0 ? '<button type="button" class="btn btn-outline btn-sm" id="fc-clear-box-btn">✕ ყველა ყუთი</button>' : "") +
              "</div>" +
            "</div>" +

            '<div class="flashcard-3d-scene ' + (isFlipped ? "is-flipped" : "") + '" id="fc-3d-card" tabindex="0" role="button" aria-label="დააჭირეთ ბარათის გადასაბრუნებლად">' +
              '<div class="flashcard-3d-inner">' +

                '<!-- წინა მხარე -->' +
                '<div class="flashcard-face flashcard-face--front">' +
                  '<div class="flashcard-top-meta">' +
                    '<div class="fc-meta-left">' +
                      '<span class="fc-level-badge">' + App.UI.escapeHTML(currentWord.level) + "</span>" +
                      '<span class="fc-category-badge">' + App.UI.escapeHTML(currentWord.category) + "</span>" +
                    "</div>" +
                    '<div class="fc-meta-right">' +
                      this.renderBoxDots(wBox) +
                      '<button type="button" class="fc-star-btn ' + (isBookmarked ? "active" : "") + '" id="fc-bookmark-btn" title="რჩეულებში შენახვა">' + (isBookmarked ? "★" : "☆") + "</button>" +
                    "</div>" +
                  "</div>" +

                  '<div class="flashcard-center-content">' +
                    '<span class="fc-lang-label">' + (isFrontEnglish ? "🇬🇧 English Term" : "🇬🇪 ქართული მნიშვნელობა") + "</span>" +
                    '<div class="flashcard-main-word">' + App.UI.escapeHTML(frontWord) + "</div>" +
                    (isFrontEnglish && currentWord.phonetic ? '<div class="fc-secondary-word">' + App.UI.escapeHTML(currentWord.phonetic) + "</div>" : "") +
                    frontAudioHtml +
                  "</div>" +

                  '<div class="flashcard-bottom-hint">' +
                    '<span>დააჭირეთ ბარათს ან</span> <span class="fc-kbd">Space</span> <span>გადასაბრუნებლად</span>' +
                  "</div>" +
                "</div>" +

                '<!-- უკანა მხარე -->' +
                '<div class="flashcard-face flashcard-face--back">' +
                  '<div class="flashcard-top-meta">' +
                    '<div class="fc-meta-left">' +
                      '<span class="fc-level-badge">' + App.UI.escapeHTML(currentWord.level) + "</span>" +
                      '<span class="fc-category-badge">✓ პასუხი</span>' +
                    "</div>" +
                    '<div class="fc-meta-right">' +
                      this.renderBoxDots(wBox) +
                    "</div>" +
                  "</div>" +

                  '<div class="flashcard-center-content">' +
                    '<span class="fc-lang-label">' + (isBackEnglish ? "🇬🇧 English Term" : "🇬🇪 ქართული თარგმანი") + "</span>" +
                    '<div class="flashcard-main-word">' + App.UI.escapeHTML(backWord) + "</div>" +
                    (backSecondaryText ? '<div class="fc-secondary-word">' + App.UI.escapeHTML(backSecondaryText) + "</div>" : "") +
                    backAudioHtml +
                    exampleHtml +
                  "</div>" +

                  '<div class="flashcard-bottom-hint">' +
                    '<span>შეაფასეთ ცოდნა ქვემოთ მოცემული ღილაკებით</span> <span class="fc-kbd">1</span> – <span class="fc-kbd">4</span>' +
                  "</div>" +
                "</div>" +

              "</div>" +
            "</div>" +

            '<!-- SRS შეფასების ღილაკები -->' +
            '<div class="srs-rating-bar">' +
              '<button type="button" class="srs-btn srs-btn--again" data-srs-rate="AGAIN">' +
                '<span>❌ არ მახსოვს</span>' +
                '<span class="srs-btn-sub">[1] ყუთი 1 • თავიდან</span>' +
              "</button>" +
              '<button type="button" class="srs-btn srs-btn--hard" data-srs-rate="HARD">' +
                '<span>🤔 გამიჭირდა</span>' +
                '<span class="srs-btn-sub">[2] ყუთი 2 • +2 XP</span>' +
              "</button>" +
              '<button type="button" class="srs-btn srs-btn--good" data-srs-rate="GOOD">' +
                '<span>👍 კარგად ვიცი</span>' +
                '<span class="srs-btn-sub">[3] ყუთი +1 • +5 XP</span>' +
              "</button>" +
              '<button type="button" class="srs-btn srs-btn--easy" data-srs-rate="EASY">' +
                '<span>⚡ მარტივია!</span>' +
                '<span class="srs-btn-sub">[4] ყუთი 5 • +10 XP</span>' +
              "</button>" +
            "</div>" +

            '<div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">' +
              '<button type="button" class="btn btn-outline btn-sm" id="fc-prev-btn">&larr; წინა ბარათი</button>' +
              '<button type="button" class="btn btn-secondary btn-sm" id="fc-flip-btn">🔄 გადაბრუნება</button>' +
              '<button type="button" class="btn btn-outline btn-sm" id="fc-next-btn">შემდეგი ბარათი &rarr;</button>' +
            "</div>" +
          "</div>";
      }

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">🎴 ინტერაქტიული ბარათები (Spaced Repetition)</h2>' +
                '<p class="section-subtitle">მონიშნეთ სასურველი CEFR დონეები (შეგიძლიათ აირჩიოთ ერთი ან რამდენიმე დონე ერთდროულად), გადააბრუნეთ ბარათი და გადაანაწილეთ სიტყვები ცოდნის 5 ყუთში.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--streak">დღეს გავლილია: ' + reviewedToday + "</span>" +
                '<span class="stat-pill stat-pill--xp">სესიის XP: +' + sessionXpEarned + "</span>" +
              "</div>" +
            "</div>" +

            '<!-- მრავალდონიანი მონიშვნის პანელი -->' +
            '<div class="fc-level-selector-bar">' +
              '<div class="fc-level-chips-wrap">' +
                '<span style="font-size:0.84rem; font-weight:800; color:var(--text-secondary); margin-right:4px;">აირჩიეთ დონეები:</span>' +
                levelCheckboxesHtml +
              "</div>" +
              '<div style="display:flex; gap:8px;">' +
                '<button type="button" class="btn btn-outline btn-sm" id="fc-select-all-levels-btn">ყველას მონიშვნა</button>' +
                '<button type="button" class="btn btn-outline btn-sm" id="fc-select-only-a1-btn">მხოლოდ A1</button>' +
              "</div>" +
            "</div>" +

            '<div class="leitner-boxes-grid">' +
              boxesHtml +
            "</div>" +
          "</section>" +

          '<section class="card">' +
            cardStageHtml +
          "</section>" +
        "</div>";

      // დონის ჩექბოქსებზე დაჭერა (რამდენიმე დონის არჩევა)
      container.querySelectorAll("[data-toggle-fc-level]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const lvl = btn.getAttribute("data-toggle-fc-level");
          const idx = selectedLevels.indexOf(lvl);
          if (idx !== -1) {
            if (selectedLevels.length === 1) {
              App.UI.toast("მინიმუმ ერთი დონე მაინც უნდა იყოს მონიშნული!", "warning", 2000);
              return;
            }
            selectedLevels.splice(idx, 1);
          } else {
            selectedLevels.push(lvl);
            // დავალაგოთ A1..C2 თანმიმდევრობით
            selectedLevels.sort((a, b) => ALL_CEFR_LEVELS.indexOf(a) - ALL_CEFR_LEVELS.indexOf(b));
          }
          this.saveSelectedLevels();
          currentIndex = 0;
          this.buildFilteredDeck(false);
          App.UI.playSound("click");
          this.render();
        });
      });

      const selectAllBtn = container.querySelector("#fc-select-all-levels-btn");
      if (selectAllBtn) {
        selectAllBtn.addEventListener("click", () => {
          selectedLevels = ALL_CEFR_LEVELS.slice();
          this.saveSelectedLevels();
          currentIndex = 0;
          this.buildFilteredDeck(false);
          App.UI.playSound("click");
          this.render();
        });
      }

      const onlyA1Btn = container.querySelector("#fc-select-only-a1-btn");
      if (onlyA1Btn) {
        onlyA1Btn.addEventListener("click", () => {
          selectedLevels = ["A1"];
          this.saveSelectedLevels();
          currentIndex = 0;
          this.buildFilteredDeck(false);
          App.UI.playSound("click");
          this.render();
        });
      }

      container.querySelectorAll("[data-fc-box]").forEach((boxEl) => {
        boxEl.addEventListener("click", () => {
          const bNum = Number(boxEl.getAttribute("data-fc-box"));
          activeBoxFilter = (activeBoxFilter === bNum) ? 0 : bNum;
          currentIndex = 0;
          this.buildFilteredDeck(false);
          App.UI.playSound("click");
          this.render();
        });
      });

      const resetFilterBtn = container.querySelector("#fc-reset-filter-btn");
      if (resetFilterBtn) {
        resetFilterBtn.addEventListener("click", () => {
          activeBoxFilter = 0;
          selectedLevels = ALL_CEFR_LEVELS.slice();
          this.saveSelectedLevels();
          currentIndex = 0;
          this.buildFilteredDeck(false);
          this.render();
        });
      }

      const clearBoxBtn = container.querySelector("#fc-clear-box-btn");
      if (clearBoxBtn) {
        clearBoxBtn.addEventListener("click", () => {
          activeBoxFilter = 0;
          currentIndex = 0;
          this.buildFilteredDeck(false);
          this.render();
        });
      }

      const bmFilterBtn = container.querySelector("#fc-filter-bookmarks-btn");
      if (bmFilterBtn) {
        bmFilterBtn.addEventListener("click", () => {
          activeBoxFilter = (activeBoxFilter === 99) ? 0 : 99;
          currentIndex = 0;
          this.buildFilteredDeck(false);
          this.render();
        });
      }

      const toggleDirBtn = container.querySelector("#fc-toggle-dir-btn");
      if (toggleDirBtn) {
        toggleDirBtn.addEventListener("click", () => {
          cardDirection = (cardDirection === "EN_TO_KA") ? "KA_TO_EN" : "EN_TO_KA";
          isFlipped = false;
          App.UI.playSound("click");
          this.render();
        });
      }

      const shuffleBtn = container.querySelector("#fc-shuffle-btn");
      if (shuffleBtn) {
        shuffleBtn.addEventListener("click", () => {
          this.buildFilteredDeck(true);
          currentIndex = 0;
          App.UI.playSound("click");
          App.UI.toast("🔀 ბარათების დასტა აირია!", "info", 1800);
          this.render();
        });
      }

      const cardScene = container.querySelector("#fc-3d-card");
      if (cardScene) {
        cardScene.addEventListener("click", (e) => {
          if (e.target.closest("button")) return;
          isFlipped = !isFlipped;
          cardScene.classList.toggle("is-flipped", isFlipped);
          App.UI.playSound("click");
        });
      }

      const flipBtn = container.querySelector("#fc-flip-btn");
      if (flipBtn && cardScene) {
        flipBtn.addEventListener("click", () => {
          isFlipped = !isFlipped;
          cardScene.classList.toggle("is-flipped", isFlipped);
          App.UI.playSound("click");
        });
      }

      const speakFrontBtn = container.querySelector("#fc-speak-front-btn");
      if (speakFrontBtn && currentWord) {
        speakFrontBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.speakEnglish(currentWord.en);
        });
      }

      const speakBackBtn = container.querySelector("#fc-speak-back-btn");
      if (speakBackBtn && currentWord) {
        speakBackBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.speakEnglish(currentWord.en);
        });
      }

      const bmBtn = container.querySelector("#fc-bookmark-btn");
      if (bmBtn && currentWord) {
        bmBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.toggleBookmark(currentWord.id);
        });
      }

      const prevBtn = container.querySelector("#fc-prev-btn");
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          if (!currentDeck.length) return;
          isFlipped = false;
          currentIndex = (currentIndex > 0) ? (currentIndex - 1) : (currentDeck.length - 1);
          App.UI.playSound("click");
          this.render();
        });
      }

      const nextBtn = container.querySelector("#fc-next-btn");
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          if (!currentDeck.length) return;
          isFlipped = false;
          currentIndex = (currentIndex < currentDeck.length - 1) ? (currentIndex + 1) : 0;
          App.UI.playSound("click");
          this.render();
        });
      }

      container.querySelectorAll("[data-srs-rate]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const rate = btn.getAttribute("data-srs-rate");
          this.rateCurrentCard(rate);
        });
      });
    }
  };

  App.Flashcards = Flashcards;

  // კლავიატურით სწრაფი მართვა: Space = გადაბრუნება, ArrowLeft/Right = გადასვლა, 1..4 = შეფასება
  window.addEventListener("keydown", (e) => {
    const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
    if (hash !== "flashcards") return;
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;

    if (e.code === "Space") {
      e.preventDefault();
      const cardScene = document.getElementById("fc-3d-card");
      if (cardScene) {
        isFlipped = !isFlipped;
        cardScene.classList.toggle("is-flipped", isFlipped);
      }
    } else if (e.code === "ArrowRight") {
      const nextBtn = document.getElementById("fc-next-btn");
      if (nextBtn) nextBtn.click();
    } else if (e.code === "ArrowLeft") {
      const prevBtn = document.getElementById("fc-prev-btn");
      if (prevBtn) prevBtn.click();
    } else if (e.key === "1") {
      Flashcards.rateCurrentCard("AGAIN");
    } else if (e.key === "2") {
      Flashcards.rateCurrentCard("HARD");
    } else if (e.key === "3") {
      Flashcards.rateCurrentCard("GOOD");
    } else if (e.key === "4") {
      Flashcards.rateCurrentCard("EASY");
    }
  });
})(window);