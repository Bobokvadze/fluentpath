/**
 * FLASHCARDS.JS — ინტერაქტიული 3D ბარათები და Leitner-ის 5-ყუთიანი ინტერვალური გამეორების სისტემა (SRS)
 * უკავშირდება ლექსიკონის 3,000 სიტყვას და ინახავს პროგრესს Supabase-ის ბაზაში.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  let activeLevel = "ALL";
  let activeBoxFilter = 0; // 0 = ყველა, 1..5 = Leitner Box 1..5, 99 = შენახული (Bookmarked)
  let cardDirection = "EN_TO_KA"; // "EN_TO_KA" | "KA_TO_EN"
  let currentDeck = [];
  let currentIndex = 0;
  let isFlipped = false;
  let sessionReviewedCount = 0;
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

  const Flashcards = {
    getAllWordsPool: function () {
      if (App.Vocabulary && typeof App.Vocabulary.getAllWords === "function") {
        const words = App.Vocabulary.getAllWords();
        if (Array.isArray(words) && words.length > 0) return words;
      }
      // თუ რაიმე მიზეზით getAllWords არ არის პირდაპირ გამოტანილი, ავიღოთ სტანდარტული სია
      return [];
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
        if (activeLevel !== "ALL" && w.level !== activeLevel) return false;
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

      // თუ მე-4 ან მე-5 ყუთში გადავიდა, მოვნიშნოთ როგორც ნასწავლი სიტყვა
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

      sessionReviewedCount++;
      sessionXpEarned += xpGain;

      if (xpGain > 0 && App.Progress && typeof App.Progress.addXP === "function") {
        App.Progress.addXP(xpGain);
      }

      // განვაახლოთ ფლეშბარათების მოდულის პროგრესის პროცენტი
      const allWords = this.getAllWordsPool();
      if (allWords.length > 0) {
        const masteredCount = allWords.filter((w) => this.getWordBox(w.id, boxMap, learnedIds) >= 4).length;
        const pct = Math.min(100, Math.round((masteredCount / allWords.length) * 100));
        App.Storage.set("progress.moduleCompletion.flashcards", pct);
      }

      // გადავიდეთ შემდეგ ბარათზე
      isFlipped = false;
      if (currentIndex < currentDeck.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
        App.UI.toast("🎉 დასტის ბოლოში გახვედით! იწყება თავიდან.", "success");
      }

      this.render();
    },

    speakWord: function (text) {
      if (!("speechSynthesis" in window)) return;
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

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;

      const allWords = this.getAllWordsPool();
      if (currentDeck.length === 0) {
        this.buildFilteredDeck(false);
      }

      const boxMap = this.getBoxMap();
      const learnedIds = App.Storage.get("vocabulary.learnedIds", []);
      const bookmarkedIds = App.Storage.get("vocabulary.bookmarkedIds", []);
      const reviewedToday = Number(App.Storage.get("flashcards.reviewedToday", 0));

      // დავითვალოთ თითოეულ ყუთში რამდენი სიტყვაა (არჩეული დონის მიხედვით)
      const levelWords = allWords.filter((w) => activeLevel === "ALL" || w.level === activeLevel);
      const boxCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      levelWords.forEach((w) => {
        const b = this.getWordBox(w.id, boxMap, learnedIds);
        boxCounts[b] = (boxCounts[b] || 0) + 1;
      });

      const levels = ["ALL", "A1", "A2", "B1", "B2", "C1", "C2"];
      const levelTabsHtml = levels.map((lvl) => {
        const active = activeLevel === lvl ? "active" : "";
        const label = lvl === "ALL" ? "ყველა (3,000)" : lvl + " (500)";
        return (
          '<button type="button" class="pill-tab ' + active + '" data-fc-level="' + lvl + '">' +
            App.UI.escapeHTML(label) +
          "</button>"
        );
      }).join("");

      const boxDefinitions = [
        { num: 1, icon: "📥", title: "ყუთი 1 • ახალი", desc: "ყოველდღე გასამეორებელი" },
        { num: 2, icon: "🌱", title: "ყუთი 2 • საწყისი", desc: "ნაცნობი სიტყვები" },
        { num: 3, icon: "📘", title: "ყუთი 3 • საშუალო", desc: "კარგად ნასწავლი" },
        { num: 4, icon: "🔥", title: "ყუთი 4 • მყარი", desc: "თითქმის ათვისებული" },
        { num: 5, icon: "🏆", title: "ყუთი 5 • ათვისებული", desc: "სრულად ნასწავლი" }
      ];

      const boxesHtml = boxDefinitions.map((b) => {
        const isAct = activeBoxFilter === b.num ? "active" : "";
        return (
          '<div class="leitner-box-card ' + isAct + '" data-fc-box="' + b.num + '">' +
            '<div class="leitner-box-title"><span>' + b.icon + " " + b.title + '</span></div>' +
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
            '<h3 class="section-title">ამ ფილტრში ბარათები არ მოიძებნა</h3>' +
            '<p style="color:var(--text-secondary); margin:8px 0 18px;">აირჩიეთ სხვა ყუთი ან დააჭირეთ „ყველა ბარათის ჩვენებას“.</p>' +
            '<button type="button" class="btn btn-primary" id="fc-reset-filter-btn">ყველა ბარათის ჩვენება</button>' +
          "</div>";
      } else {
        const wBox = this.getWordBox(currentWord.id, boxMap, learnedIds);
        const isBookmarked = bookmarkedIds.indexOf(currentWord.id) !== -1;
        const frontTitle = cardDirection === "EN_TO_KA" ? currentWord.en : currentWord.ka;
        const frontSub = cardDirection === "EN_TO_KA" ? (currentWord.phonetic || "") : "გაიხსენეთ ინგლისური შესატყვისი";
        const backTitle = cardDirection === "EN_TO_KA" ? currentWord.ka : currentWord.en;
        const backSub = cardDirection === "EN_TO_KA" ? currentWord.en + " " + (currentWord.phonetic || "") : (currentWord.phonetic || "");

        cardStageHtml =
          '<div class="flashcard-stage-wrap">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">' +
              '<span class="stat-pill stat-pill--level">ბარათი: ' + (currentIndex + 1) + " / " + currentDeck.length + "</span>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button type="button" class="btn btn-outline btn-sm" id="fc-toggle-dir-btn">' +
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
                    '<span class="stat-pill stat-pill--level">' + App.UI.escapeHTML(currentWord.level) + " &bull; " + App.UI.escapeHTML(currentWord.category || "ლექსიკა") + "</span>" +
                    '<div style="display:flex; gap:8px; align-items:center;">' +
                      '<span class="stat-pill">ყუთი ' + wBox + "/5</span>" +
                      '<button type="button" class="icon-btn" id="fc-bookmark-btn" title="რჩეულებში შენახვა">' + (isBookmarked ? "⭐" : "☆") + "</button>" +
                      '<button type="button" class="audio-btn" id="fc-speak-front-btn" title="წარმოთქმის მოსმენა">&#128266;</button>' +
                    "</div>" +
                  "</div>" +

                  '<div class="flashcard-center-content">' +
                    '<div class="flashcard-main-word">' + App.UI.escapeHTML(frontTitle) + "</div>" +
                    (frontSub ? '<div class="flashcard-phonetic">' + App.UI.escapeHTML(frontSub) + "</div>" : "") +
                  "</div>" +

                  '<div class="flashcard-bottom-hint">👆 დააჭირეთ ბარათს (ან Space-ს) გადასაბრუნებლად</div>' +
                "</div>" +

                '<!-- უკანა მხარე (პასუხი + მაგალითი) -->' +
                '<div class="flashcard-face flashcard-face--back">' +
                  '<div class="flashcard-top-meta">' +
                    '<span class="stat-pill stat-pill--xp">✓ თარგმანი და მაგალითი</span>' +
                    '<button type="button" class="audio-btn" id="fc-speak-back-btn" title="ინგლისურად მოსმენა">&#128266;</button>' +
                  "</div>" +

                  '<div class="flashcard-center-content">' +
                    '<div class="flashcard-main-word" style="color:var(--brand-primary);">' + App.UI.escapeHTML(backTitle) + "</div>" +
                    '<div class="flashcard-phonetic">' + App.UI.escapeHTML(backSub) + "</div>" +
                    (currentWord.exampleEn ? '<div class="flashcard-example-en">"' + App.UI.escapeHTML(currentWord.exampleEn) + '"</div>' : "") +
                    (currentWord.exampleKa ? '<div class="flashcard-example-ka">' + App.UI.escapeHTML(currentWord.exampleKa) + "</div>" : "") +
                  "</div>" +

                  '<div class="flashcard-bottom-hint">შეაფასეთ ქვემოთ, რამდენად კარგად გახსოვდათ ეს სიტყვა &darr;</div>' +
                "</div>" +
              "</div>" +
            "</div>" +

            '<!-- SRS შეფასების ღილაკები -->' +
            '<div class="srs-rating-bar">' +
              '<button type="button" class="srs-btn srs-btn--again" data-srs-rate="AGAIN">' +
                '<span>❌ არ მახსოვს</span>' +
                '<span class="srs-btn-sub">ყუთი 1 • თავიდან</span>' +
              "</button>" +
              '<button type="button" class="srs-btn srs-btn--hard" data-srs-rate="HARD">' +
                '<span>🤔 გამიჭირდა</span>' +
                '<span class="srs-btn-sub">ყუთი 2 • +2 XP</span>' +
              "</button>" +
              '<button type="button" class="srs-btn srs-btn--good" data-srs-rate="GOOD">' +
                '<span>👍 კარგად ვიცი</span>' +
                '<span class="srs-btn-sub">ყუთი +1 • +5 XP</span>' +
              "</button>" +
              '<button type="button" class="srs-btn srs-btn--easy" data-srs-rate="EASY">' +
                '<span>⚡ მარტივია!</span>' +
                '<span class="srs-btn-sub">ყუთი 5 • +10 XP</span>' +
              "</button>" +
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
                '<p class="section-subtitle">Leitner-ის 5-ყუთიანი მეთოდი: გადააბრუნეთ ბარათი, მოუსმინეთ გამოთქმას და შეაფასეთ ცოდნა. სისტემა რთულ სიტყვებს მე-1 ყუთში დააბრუნებს, ნასწავლს კი მე-5 ყუთში გადაიტანს.</p>' +
              "</div>" +
              '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--streak">დღეს გავლილია: ' + reviewedToday + "</span>" +
                '<span class="stat-pill stat-pill--xp">სესიის XP: +' + sessionXpEarned + "</span>" +
              "</div>" +
            "</div>" +

            '<div class="filter-bar" style="margin-bottom:8px;">' +
              '<div class="pill-tabs">' + levelTabsHtml + "</div>" +
            "</div>" +

            '<div class="leitner-boxes-grid">' +
              boxesHtml +
            "</div>" +
          "</section>" +

          '<section class="card">' +
            cardStageHtml +
          "</section>" +
        "</div>";

      // ივენთების მიბმა
      container.querySelectorAll("[data-fc-level]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeLevel = btn.getAttribute("data-fc-level");
          currentIndex = 0;
          this.buildFilteredDeck(false);
          App.UI.playSound("click");
          this.render();
        });
      });

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
          activeLevel = "ALL";
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
          this.speakWord(currentWord.en);
        });
      }

      const speakBackBtn = container.querySelector("#fc-speak-back-btn");
      if (speakBackBtn && currentWord) {
        speakBackBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.speakWord(currentWord.en + ". " + (currentWord.exampleEn || ""));
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

  // კლავიატურით მართვა (Space = გადაბრუნება, ArrowLeft/ArrowRight = გადასვლა)
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
    }
  });
})(window);