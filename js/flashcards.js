/**
 * FLASHCARDS.JS — ინტერაქტიული 3D ბარათები, ზუსტი IPA ტრანსკრიპციებითა და სტუდიური US/UK აქცენტებით
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ALL_CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const LOCAL_BOX_STORAGE_KEY = "fluentpath_leitner_boxes_v2";
  const LOCAL_LEVELS_STORAGE_KEY = "fluentpath_selected_fc_levels_v2";

  let selectedLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  let activeBoxFilter = 0;
  let cardDirection = "EN_TO_KA";
  let currentDeck = [];
  let currentIndex = 0;
  let isFlipped = false;
  let sessionXpEarned = 0;
  const liveIpaCache = {};

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

  function lookupSingleWordIpa(w, dict) {
    const clean = String(w || "").toLowerCase().replace(/[^a-z'-]/g, "");
    if (!clean) return "";
    if (dict[clean]) return dict[clean].replace(/^\/+|\/+$/g, "");

    const candidates = [];
    if (clean.endsWith("ies") && clean.length > 4) candidates.push(clean.slice(0, -3) + "y");
    if (clean.endsWith("es") && clean.length > 3) candidates.push(clean.slice(0, -2), clean.slice(0, -1));
    if (clean.endsWith("s") && clean.length > 3) candidates.push(clean.slice(0, -1));
    if (clean.endsWith("ed") && clean.length > 4) candidates.push(clean.slice(0, -2), clean.slice(0, -1));
    if (clean.endsWith("ing") && clean.length > 5) candidates.push(clean.slice(0, -3), clean.slice(0, -3) + "e");
    if (clean.endsWith("ly") && clean.length > 4) candidates.push(clean.slice(0, -2));

    for (let i = 0; i < candidates.length; i++) {
      if (dict[candidates[i]]) {
        return dict[candidates[i]].replace(/^\/+|\/+$/g, "");
      }
    }
    return "";
  }

  function resolveIpaTranscription(word, rawPhonetic) {
    const cleanWord = String(word || "").trim();
    if (!cleanWord) return "";

    if (liveIpaCache[cleanWord.toLowerCase()]) {
      return liveIpaCache[cleanWord.toLowerCase()];
    }

    const raw = String(rawPhonetic || "").trim();
    const strippedRaw = raw.replace(/^\/+|\/+$/g, "").trim();

    if (strippedRaw && strippedRaw.toLowerCase() !== cleanWord.toLowerCase() && /[ˈˌəɪʊɔæɑɜʃʒθðŋː]/.test(strippedRaw)) {
      return "/" + strippedRaw + "/";
    }

    const dict = (window.App && window.App.IPADictionary) ? window.App.IPADictionary : {};
    const baseText = cleanWord
      .replace(/\(\s*(verb|noun|adj|adjective|adv|adverb|plural|singular|formal|informal|idiom|ship|city|car trunk|helm|band-aid)\s*\)/gi, "")
      .replace(/\s*\/.*$/, "")
      .trim()
      .toLowerCase();

    if (dict[baseText]) {
      return dict[baseText];
    }

    const tokens = baseText.split(/\s+/).filter(Boolean);
    if (tokens.length >= 1) {
      const ipaTokens = [];
      let matchedCount = 0;
      tokens.forEach(function (t) {
        const found = lookupSingleWordIpa(t, dict);
        if (found) {
          ipaTokens.push(found);
          matchedCount++;
        } else {
          ipaTokens.push(t);
        }
      });
      if (matchedCount > 0) {
        return "/" + ipaTokens.join(" ") + "/";
      }
    }

    let fallback = baseText
      .replace(/tion\b/g, "ʃən")
      .replace(/sion\b/g, "ʒən")
      .replace(/ture\b/g, "tʃər")
      .replace(/ph/g, "f")
      .replace(/sh/g, "ʃ")
      .replace(/ch/g, "tʃ")
      .replace(/th/g, "θ")
      .replace(/ee/g, "iː")
      .replace(/ea/g, "iː")
      .replace(/oo/g, "uː");
    return "/" + fallback + "/";
  }

  function fetchLiveDictionaryData(word) {
    const clean = String(word || "")
      .replace(/\([^)]*\)/g, "")
      .replace(/\/.*$/, "")
      .trim()
      .toLowerCase();
    if (!clean || clean.indexOf(" ") !== -1 || liveIpaCache[clean]) return;

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(clean))
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!Array.isArray(data) || !data[0]) return;
        const entry = data[0];
        let foundIpa = entry.phonetic || "";
        let usAudio = "";
        let ukAudio = "";

        if (Array.isArray(entry.phonetics)) {
          entry.phonetics.forEach(function (p) {
            if (!foundIpa && p.text) foundIpa = p.text;
            if (p.audio) {
              if (p.audio.indexOf("-us.mp3") !== -1) usAudio = p.audio;
              else if (p.audio.indexOf("-uk.mp3") !== -1) ukAudio = p.audio;
              else if (!usAudio) usAudio = p.audio;
            }
          });
        }

        if (foundIpa) {
          liveIpaCache[clean] = foundIpa;
          const pillEl = document.getElementById("fc-active-ipa-pill");
          if (pillEl) pillEl.textContent = foundIpa;
        }
        if ((usAudio || ukAudio) && App.AudioEngine && typeof App.AudioEngine.registerApiAudio === "function") {
          App.AudioEngine.registerApiAudio(clean, usAudio, ukAudio);
        }
      })
      .catch(function () {});
  }

  function normalizeWordItem(raw, idx) {
    if (!raw || typeof raw !== "object") return null;

    let en = raw.en || raw.word || raw.term || raw.english || raw.headword || "";
    let ka = raw.ka || raw.translation || raw.meaning || raw.georgian || raw.defKa || "";
    let rawPhonetic = raw.phonetic || raw.transcription || raw.pronunciation || "";

    if (!en && rawPhonetic) {
      const stripped = String(rawPhonetic).replace(/^\/+|\/+$/g, "").trim();
      if (/^[a-zA-Z\s\-'()]+$/.test(stripped)) {
        en = stripped;
      }
    }

    if (!en || !ka) {
      Object.keys(raw).forEach(function (k) {
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
    if (!en && !ka) return null;

    const phonetic = resolveIpaTranscription(en, rawPhonetic);
    const exEn = String(raw.exampleEn || raw.example || raw.sentence || raw.enExample || "").trim();
    const exKa = String(raw.exampleKa || raw.sentenceKa || raw.kaExample || raw.exampleTranslation || "").trim();
    const stableId = String(raw.id || ("w-" + (raw.level || "A1") + "-" + en.toLowerCase().replace(/[^a-z0-9]/g, "") + "-" + idx));

    return {
      id: stableId,
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
      const saved = App.Storage.get("vocabulary.selectedFcLevels", null);
      if (Array.isArray(saved) && saved.length > 0) {
        const valid = saved.filter(function (lvl) { return ALL_CEFR_LEVELS.indexOf(lvl) !== -1; });
        selectedLevels = valid.length > 0 ? valid : ALL_CEFR_LEVELS.slice();
      } else {
        selectedLevels = ALL_CEFR_LEVELS.slice();
      }
    },

    saveSelectedLevels: function () {
      if (App.Storage && typeof App.Storage.set === "function") {
        App.Storage.set("vocabulary.selectedFcLevels", selectedLevels);
      }
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
      const fromState = App.Storage.get("vocabulary.boxByWordId", {});
      return (fromState && typeof fromState === "object") ? fromState : {};
    },

    saveBoxMap: function (boxMap) {
      if (App.Storage && typeof App.Storage.set === "function") {
        App.Storage.set("vocabulary.boxByWordId", boxMap);
      }
    },

    getWordBox: function (wordId, boxMap, learnedIds) {
      const explicitBox = Number(boxMap[wordId]);
      if (explicitBox >= 1 && explicitBox <= 5) return explicitBox;
      if (Array.isArray(learnedIds) && learnedIds.indexOf(wordId) !== -1) return 5;
      return 1;
    },

    buildFilteredDeck: function () {
      const allWords = this.getAllWordsPool();
      const boxMap = this.getBoxMap();
      const learnedIds = App.Storage.get("vocabulary.learnedIds", []);
      const bookmarkedIds = App.Storage.get("vocabulary.bookmarkedIds", []);

      const self = this;
      const filtered = allWords.filter(function (w) {
        if (selectedLevels.indexOf(w.level) === -1) return false;
        if (activeBoxFilter === 99) return bookmarkedIds.indexOf(w.id) !== -1;
        if (activeBoxFilter >= 1 && activeBoxFilter <= 5) {
          return self.getWordBox(w.id, boxMap, learnedIds) === activeBoxFilter;
        }
        return true;
      });

      currentDeck = shuffleArray(filtered);
      if (currentIndex >= currentDeck.length) {
        currentIndex = 0;
      }
      isFlipped = false;
    },

    moveCurrentCardToBox: function (targetBoxNumber) {
      if (!currentDeck.length) return;
      const word = currentDeck[currentIndex];
      if (!word) return;

      const nextBox = Number(targetBoxNumber);
      if (nextBox < 1 || nextBox > 5) return;

      const boxMap = Object.assign({}, this.getBoxMap());
      const learnedIds = (App.Storage.get("vocabulary.learnedIds", []) || []).slice();

      boxMap[word.id] = nextBox;
      this.saveBoxMap(boxMap);

      const learnedIdx = learnedIds.indexOf(word.id);
      if (nextBox === 5 && learnedIdx === -1) {
        learnedIds.push(word.id);
        App.Storage.set("vocabulary.learnedIds", learnedIds);
        App.Storage.set("progress.vocabularyLearned", learnedIds.length);
      } else if (nextBox < 5 && learnedIdx !== -1) {
        learnedIds.splice(learnedIdx, 1);
        App.Storage.set("vocabulary.learnedIds", learnedIds);
        App.Storage.set("progress.vocabularyLearned", learnedIds.length);
      }

      const xpByBox = { 1: 0, 2: 2, 3: 4, 4: 6, 5: 10 };
      const xpGain = xpByBox[nextBox] || 0;

      const reviewedToday = Number(App.Storage.get("flashcards.reviewedToday", 0)) + 1;
      App.Storage.set("flashcards.reviewedToday", reviewedToday);
      sessionXpEarned += xpGain;

      if (xpGain > 0 && App.Progress && typeof App.Progress.addXP === "function") {
        App.Progress.addXP(xpGain);
      }

      App.UI.playSound(nextBox >= 3 ? "success" : "click");

      const boxNames = {
        1: "ყუთი 1 (ახალი)",
        2: "ყუთი 2 (საწყისი)",
        3: "ყუთი 3 (საშუალო)",
        4: "ყუთი 4 (მყარი)",
        5: "ყუთი 5 (ათვისებული)"
      };
      App.UI.toast("✓ «" + word.en + "» გადავიდა: " + boxNames[nextBox], "info", 1600);

      isFlipped = false;
      if (activeBoxFilter >= 1 && activeBoxFilter <= 5 && activeBoxFilter !== nextBox) {
        this.buildFilteredDeck();
      } else {
        currentIndex = (currentIndex < currentDeck.length - 1) ? (currentIndex + 1) : 0;
      }

      this.render();
    },

    speakEnglish: function (text, accent) {
      if (App.AudioEngine && typeof App.AudioEngine.speak === "function") {
        App.AudioEngine.speak(text, accent);
      }
    },

    toggleBookmark: function (wordId) {
      const bookmarked = (App.Storage.get("vocabulary.bookmarkedIds", []) || []).slice();
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
        this.buildFilteredDeck();
      }

      const boxMap = this.getBoxMap();
      const learnedIds = App.Storage.get("vocabulary.learnedIds", []) || [];
      const bookmarkedIds = App.Storage.get("vocabulary.bookmarkedIds", []) || [];
      const reviewedToday = Number(App.Storage.get("flashcards.reviewedToday", 0));

      const self = this;
      const levelWords = allWords.filter(function (w) { return selectedLevels.indexOf(w.level) !== -1; });
      const boxCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      levelWords.forEach(function (w) {
        const b = self.getWordBox(w.id, boxMap, learnedIds);
        boxCounts[b] = (boxCounts[b] || 0) + 1;
      });

      const levelCheckboxesHtml = ALL_CEFR_LEVELS.map(function (lvl) {
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
        { num: 2, icon: "🌱", title: "ყუთი 2 • საწყისი", desc: "გამიჭირდა / საწყისი" },
        { num: 3, icon: "📘", title: "ყუთი 3 • საშუალო", desc: "საშუალოდ ნაცნობი" },
        { num: 4, icon: "🔥", title: "ყუთი 4 • მყარი", desc: "კარგად ნასწავლი" },
        { num: 5, icon: "🏆", title: "ყუთი 5 • ათვისებული", desc: "სრულად ნასწავლი" }
      ];

      const boxesHtml = boxDefinitions.map(function (b) {
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
            '<h3 class="section-title">ამ ყუთში ჯერ ბარათები არ არის</h3>' +
            '<p style="color:var(--text-secondary); margin:8px 0 18px;">როდესაც ბარათებს ქვედა ღილაკებით შეაფასებთ, სიტყვები ავტომატურად ჩაემატება შესაბამის ყუთში.</p>' +
            '<button type="button" class="btn btn-primary" id="fc-reset-filter-btn">ყველა ყუთის ჩვენება</button>' +
          "</div>";
      } else {
        const displayIpa = resolveIpaTranscription(currentWord.en, currentWord.phonetic);
        fetchLiveDictionaryData(currentWord.en);

        const wBox = this.getWordBox(currentWord.id, boxMap, learnedIds);
        const isBookmarked = bookmarkedIds.indexOf(currentWord.id) !== -1;
        const isFrontEnglish = (cardDirection === "EN_TO_KA");

        const currentAcc = (App.AudioEngine && typeof App.AudioEngine.getAccent === "function") ? App.AudioEngine.getAccent() : "US";
        const usActiveStyle = currentAcc === "US" ? "background-color:var(--brand-primary); color:#fff;" : "";
        const ukActiveStyle = currentAcc === "UK" ? "background-color:var(--brand-primary); color:#fff;" : "";

        const englishSideCenterHtml =
          '<span class="fc-lang-label">🇬🇧 ინგლისური</span>' +
          '<div class="flashcard-main-word">' + App.UI.escapeHTML(currentWord.en) + "</div>" +
          '<div class="fc-transcription-pill" id="fc-active-ipa-pill">' + App.UI.escapeHTML(displayIpa) + "</div>" +
          '<div style="display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:6px;">' +
            '<button type="button" class="fc-speak-pill-btn" data-fc-accent-play="US" style="' + usActiveStyle + '">&#128266; 🇺🇸 US აქცენტი</button>' +
            '<button type="button" class="fc-speak-pill-btn" data-fc-accent-play="UK" style="' + ukActiveStyle + '">&#128266; 🇬🇧 UK აქცენტი</button>' +
          "</div>" +
          (currentWord.exampleEn
            ? '<div class="fc-example-box"><div class="flashcard-example-en">"' + App.UI.escapeHTML(currentWord.exampleEn) + '"</div></div>'
            : "");

        const georgianSideCenterHtml =
          '<span class="fc-lang-label">🇬🇪 ქართული</span>' +
          '<div class="flashcard-main-word">' + App.UI.escapeHTML(currentWord.ka) + "</div>" +
          (currentWord.exampleKa
            ? '<div class="fc-example-box"><div class="flashcard-example-ka">' + App.UI.escapeHTML(currentWord.exampleKa) + "</div></div>"
            : "");

        const frontCenterHtml = isFrontEnglish ? englishSideCenterHtml : georgianSideCenterHtml;
        const backCenterHtml = isFrontEnglish ? georgianSideCenterHtml : englishSideCenterHtml;

        cardStageHtml =
          '<div class="flashcard-stage-wrap">' +
            '<div class="flashcard-toolbar">' +
              '<div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">ბარათი: ' + (currentIndex + 1) + " / " + currentDeck.length + "</span>" +
                '<span class="stat-pill">დონეები: ' + App.UI.escapeHTML(selectedLevels.join(", ")) + "</span>" +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button type="button" class="btn btn-outline btn-sm" id="fc-toggle-dir-btn">' +
                  (cardDirection === "EN_TO_KA" ? "🇬🇧 ინგლისური &rarr; 🇬🇪 ქართული" : "🇬🇪 ქართული &rarr; 🇬🇧 ინგლისური") +
                "</button>" +
                '<button type="button" class="btn btn-outline btn-sm" id="fc-shuffle-btn">🔀 არევა</button>' +
                '<button type="button" class="btn ' + (activeBoxFilter === 99 ? "btn-secondary" : "btn-outline") + ' btn-sm" id="fc-filter-bookmarks-btn">⭐ რჩეულები (' + bookmarkedIds.length + ")</button>" +
                (activeBoxFilter !== 0 ? '<button type="button" class="btn btn-outline btn-sm" id="fc-clear-box-btn">✕ ყველა ყუთი</button>' : "") +
              "</div>" +
            "</div>" +

            '<div class="flashcard-3d-scene ' + (isFlipped ? "is-flipped" : "") + '" id="fc-3d-card" tabindex="0" role="button" aria-label="დააჭირეთ ბარათის გადასაბრუნებლად">' +
              '<div class="flashcard-3d-inner">' +
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
                  '<div class="flashcard-center-content">' + frontCenterHtml + "</div>" +
                  '<div class="flashcard-bottom-hint"><span>დააჭირეთ ბარათს ან</span> <span class="fc-kbd">Space</span> <span>გადასაბრუნებლად</span></div>' +
                "</div>" +

                '<div class="flashcard-face flashcard-face--back">' +
                  '<div class="flashcard-top-meta">' +
                    '<div class="fc-meta-left">' +
                      '<span class="fc-level-badge">' + App.UI.escapeHTML(currentWord.level) + "</span>" +
                      '<span class="fc-category-badge">' + App.UI.escapeHTML(currentWord.category) + "</span>" +
                    "</div>" +
                    '<div class="fc-meta-right">' + this.renderBoxDots(wBox) + "</div>" +
                  "</div>" +
                  '<div class="flashcard-center-content">' + backCenterHtml + "</div>" +
                  '<div class="flashcard-bottom-hint"><span>აირჩიეთ ქვემოთ ყუთი, რომელშიც გსურთ ამ სიტყვის გადატანა</span> <span class="fc-kbd">1</span> – <span class="fc-kbd">5</span></div>' +
                "</div>" +
              "</div>" +
            "</div>" +

            '<div class="srs-rating-bar">' +
              '<button type="button" class="srs-btn srs-btn--box1" data-move-to-box="1"><span>📥 ყუთი 1 • ახალი</span><span class="srs-btn-sub">[1] არ მახსოვს</span></button>' +
              '<button type="button" class="srs-btn srs-btn--box2" data-move-to-box="2"><span>🌱 ყუთი 2 • საწყისი</span><span class="srs-btn-sub">[2] გამიჭირდა</span></button>' +
              '<button type="button" class="srs-btn srs-btn--box3" data-move-to-box="3"><span>📘 ყუთი 3 • საშუალო</span><span class="srs-btn-sub">[3] საშუალოდ</span></button>' +
              '<button type="button" class="srs-btn srs-btn--box4" data-move-to-box="4"><span>🔥 ყუთი 4 • მყარი</span><span class="srs-btn-sub">[4] კარგად ვიცი</span></button>' +
              '<button type="button" class="srs-btn srs-btn--box5" data-move-to-box="5"><span>🏆 ყუთი 5 • ათვისებული</span><span class="srs-btn-sub">[5] სრულად ვიცი</span></button>' +
            "</div>" +

            '<div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">' +
              '<button type="button" class="btn btn-outline btn-sm" id="fc-prev-btn">&larr; წინა ბარათი</button>' +
              '<button type="button" class="btn btn-secondary btn-sm" id="fc-flip-btn">🔄 ბარათის გადაბრუნება</button>' +
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
                '<p class="section-subtitle">მონიშნეთ სასურველი CEFR დონეები, მოუსმინეთ სტუდიურ US/UK გამოთქმას და გადაანაწილეთ სიტყვები 5 ყუთში.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--streak">დღეს გავლილია: ' + reviewedToday + "</span>" +
                '<span class="stat-pill stat-pill--xp">სესიის XP: +' + sessionXpEarned + "</span>" +
              "</div>" +
            "</div>" +

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

            '<div class="leitner-boxes-grid">' + boxesHtml + "</div>" +
          "</section>" +

          '<section class="card">' + cardStageHtml + "</section>" +
        "</div>";

      container.querySelectorAll("[data-toggle-fc-level]").forEach(function (btn) {
        btn.addEventListener("click", function () {
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
            selectedLevels.sort(function (a, b) { return ALL_CEFR_LEVELS.indexOf(a) - ALL_CEFR_LEVELS.indexOf(b); });
          }
          self.saveSelectedLevels();
          currentIndex = 0;
          self.buildFilteredDeck();
          App.UI.playSound("click");
          self.render();
        });
      });

      const selectAllBtn = container.querySelector("#fc-select-all-levels-btn");
      if (selectAllBtn) {
        selectAllBtn.addEventListener("click", function () {
          selectedLevels = ALL_CEFR_LEVELS.slice();
          self.saveSelectedLevels();
          currentIndex = 0;
          self.buildFilteredDeck();
          App.UI.playSound("click");
          self.render();
        });
      }

      const onlyA1Btn = container.querySelector("#fc-select-only-a1-btn");
      if (onlyA1Btn) {
        onlyA1Btn.addEventListener("click", function () {
          selectedLevels = ["A1"];
          self.saveSelectedLevels();
          currentIndex = 0;
          self.buildFilteredDeck();
          App.UI.playSound("click");
          self.render();
        });
      }

      container.querySelectorAll("[data-fc-box]").forEach(function (boxEl) {
        boxEl.addEventListener("click", function () {
          const bNum = Number(boxEl.getAttribute("data-fc-box"));
          activeBoxFilter = (activeBoxFilter === bNum) ? 0 : bNum;
          currentIndex = 0;
          self.buildFilteredDeck();
          App.UI.playSound("click");
          self.render();
        });
      });

      const resetFilterBtn = container.querySelector("#fc-reset-filter-btn");
      if (resetFilterBtn) {
        resetFilterBtn.addEventListener("click", function () {
          activeBoxFilter = 0;
          currentIndex = 0;
          self.buildFilteredDeck();
          self.render();
        });
      }

      const clearBoxBtn = container.querySelector("#fc-clear-box-btn");
      if (clearBoxBtn) {
        clearBoxBtn.addEventListener("click", function () {
          activeBoxFilter = 0;
          currentIndex = 0;
          self.buildFilteredDeck();
          self.render();
        });
      }

      const bmFilterBtn = container.querySelector("#fc-filter-bookmarks-btn");
      if (bmFilterBtn) {
        bmFilterBtn.addEventListener("click", function () {
          activeBoxFilter = (activeBoxFilter === 99) ? 0 : 99;
          currentIndex = 0;
          self.buildFilteredDeck();
          self.render();
        });
      }

      const toggleDirBtn = container.querySelector("#fc-toggle-dir-btn");
      if (toggleDirBtn) {
        toggleDirBtn.addEventListener("click", function () {
          cardDirection = (cardDirection === "EN_TO_KA") ? "KA_TO_EN" : "EN_TO_KA";
          isFlipped = false;
          App.UI.playSound("click");
          self.render();
        });
      }

      const shuffleBtn = container.querySelector("#fc-shuffle-btn");
      if (shuffleBtn) {
        shuffleBtn.addEventListener("click", function () {
          self.buildFilteredDeck();
          currentIndex = 0;
          App.UI.playSound("click");
          App.UI.toast("🔀 ბარათების დასტა აირია!", "info", 1800);
          self.render();
        });
      }

      const cardScene = container.querySelector("#fc-3d-card");
      if (cardScene) {
        cardScene.addEventListener("click", function (e) {
          if (e.target.closest("button")) return;
          isFlipped = !isFlipped;
          cardScene.classList.toggle("is-flipped", isFlipped);
          App.UI.playSound("click");
        });
      }

      const flipBtn = container.querySelector("#fc-flip-btn");
      if (flipBtn && cardScene) {
        flipBtn.addEventListener("click", function () {
          isFlipped = !isFlipped;
          cardScene.classList.toggle("is-flipped", isFlipped);
          App.UI.playSound("click");
        });
      }

      container.querySelectorAll("[data-fc-accent-play]").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          const chosenAcc = btn.getAttribute("data-fc-accent-play");
          if (currentWord) {
            self.speakEnglish(currentWord.en, chosenAcc);
          }
          container.querySelectorAll("[data-fc-accent-play]").forEach(function (b) {
            if (b.getAttribute("data-fc-accent-play") === chosenAcc) {
              b.style.backgroundColor = "var(--brand-primary)";
              b.style.color = "#ffffff";
            } else {
              b.style.backgroundColor = "";
              b.style.color = "";
            }
          });
        });
      });

      const bmBtn = container.querySelector("#fc-bookmark-btn");
      if (bmBtn && currentWord) {
        bmBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          self.toggleBookmark(currentWord.id);
        });
      }

      const prevBtn = container.querySelector("#fc-prev-btn");
      if (prevBtn) {
        prevBtn.addEventListener("click", function () {
          if (!currentDeck.length) return;
          isFlipped = false;
          currentIndex = (currentIndex > 0) ? (currentIndex - 1) : (currentDeck.length - 1);
          App.UI.playSound("click");
          self.render();
        });
      }

      const nextBtn = container.querySelector("#fc-next-btn");
      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          if (!currentDeck.length) return;
          isFlipped = false;
          currentIndex = (currentIndex < currentDeck.length - 1) ? (currentIndex + 1) : 0;
          App.UI.playSound("click");
          self.render();
        });
      }

      container.querySelectorAll("[data-move-to-box]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const targetBox = Number(btn.getAttribute("data-move-to-box"));
          self.moveCurrentCardToBox(targetBox);
        });
      });
    }
  };

  App.Flashcards = Flashcards;

  // Routing is handled centrally by App.Router.renderView (js/router.js).

  window.addEventListener("keydown", function (e) {
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
    } else if (["1", "2", "3", "4", "5"].indexOf(e.key) !== -1) {
      Flashcards.moveCurrentCardToBox(Number(e.key));
    }
  });
})(window);