/**
 * SPEAKING.JS — საუბრისა და გამოთქმის სტუდია
 * - მოუსმინეთ ფრაზას (ჩვეულებრივი/ნელი), გაიმეორეთ მიკროფონში და მიიღეთ სიტყვა-სიტყვით შეფასება.
 * - იყენებს ბრაუზერის Web Speech API-ს (SpeechRecognition). თუ ბრაუზერი არ უჭერს მხარს,
 *   ჩაირთვება თვითშეფასების რეჟიმი.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const PASS_SCORE = 70;

  const PHRASES = {
    A1: [
      { en: "Hello, my name is Anna.", ka: "გამარჯობა, მე ანა მქვია." },
      { en: "Nice to meet you.", ka: "სასიამოვნოა თქვენი გაცნობა." },
      { en: "I live in Tbilisi.", ka: "მე თბილისში ვცხოვრობ." },
      { en: "How much is this?", ka: "რა ღირს ეს?" },
      { en: "Can you help me, please?", ka: "შეგიძლიათ დამეხმაროთ, გთხოვთ?" },
      { en: "I would like a cup of coffee.", ka: "ერთი ფინჯანი ყავა მინდა." },
      { en: "Where is the bus station?", ka: "სად არის ავტობუსის სადგური?" },
      { en: "I don't understand.", ka: "ვერ გავიგე." },
      { en: "What time is it now?", ka: "ახლა რომელი საათია?" },
      { en: "See you tomorrow.", ka: "ხვალამდე." }
    ],
    A2: [
      { en: "I usually get up at seven o'clock.", ka: "ჩვეულებრივ შვიდ საათზე ვდგები." },
      { en: "Last weekend we visited my grandparents.", ka: "გასულ შაბათ-კვირას ბებია-ბაბუას ვესტუმრეთ." },
      { en: "Could you speak more slowly, please?", ka: "შეგიძლიათ უფრო ნელა ილაპარაკოთ, გთხოვთ?" },
      { en: "I'm looking for a cheaper hotel.", ka: "უფრო იაფ სასტუმროს ვეძებ." },
      { en: "It's colder today than yesterday.", ka: "დღეს გუშინდელზე უფრო ცივა." },
      { en: "I have never been to London.", ka: "ლონდონში არასდროს ვყოფილვარ." },
      { en: "What do you do in your free time?", ka: "რას აკეთებთ თავისუფალ დროს?" },
      { en: "I'd like to book a table for two.", ka: "ორი კაცისთვის მაგიდის დაჯავშნა მინდა." },
      { en: "The train leaves in ten minutes.", ka: "მატარებელი ათ წუთში გადის." },
      { en: "My phone battery is almost dead.", ka: "ტელეფონის ბატარეა თითქმის დამჯდარია." }
    ],
    B1: [
      { en: "If I had more time, I would travel more often.", ka: "მეტი დრო რომ მქონდეს, უფრო ხშირად ვიმოგზაურებდი." },
      { en: "I've been learning English for two years.", ka: "ორი წელია, ინგლისურს ვსწავლობ." },
      { en: "In my opinion, public transport should be free.", ka: "ჩემი აზრით, საზოგადოებრივი ტრანსპორტი უფასო უნდა იყოს." },
      { en: "Could you tell me how to get to the museum?", ka: "შეგიძლიათ მითხრათ, როგორ მივიდე მუზეუმამდე?" },
      { en: "I'm sorry, but I have to cancel our meeting.", ka: "ბოდიში, მაგრამ ჩვენი შეხვედრის გაუქმება მიწევს." },
      { en: "The report must be finished by Friday.", ka: "ანგარიში პარასკევამდე უნდა დასრულდეს." },
      { en: "I'm not used to working at night.", ka: "ღამით მუშაობას არ ვარ მიჩვეული." },
      { en: "She asked me where I had bought my jacket.", ka: "მკითხა, საიდან ვიყიდე ქურთუკი." },
      { en: "We decided to stay at home because of the rain.", ka: "წვიმის გამო სახლში დარჩენა გადავწყვიტეთ." },
      { en: "It's worth visiting the old town at sunset.", ka: "ძველი ქალაქის მზის ჩასვლისას ნახვა ღირს." }
    ],
    B2: [
      { en: "Had I known about the delay, I would have taken a taxi.", ka: "დაგვიანების შესახებ რომ მცოდნოდა, ტაქსით წავიდოდი." },
      { en: "The new policy has had a significant impact on small businesses.", ka: "ახალმა პოლიტიკამ მცირე ბიზნესზე მნიშვნელოვანი გავლენა მოახდინა." },
      { en: "I'd rather you didn't mention it to anyone.", ka: "მირჩევნია, ეს არავის უთხრა." },
      { en: "By the end of the year, we will have launched three new products.", ka: "წლის ბოლოსთვის სამ ახალ პროდუქტს გამოვუშვებთ." },
      { en: "Despite the difficulties, the project was completed on time.", ka: "სირთულეების მიუხედავად, პროექტი დროულად დასრულდა." },
      { en: "You should have backed up your files before the update.", ka: "განახლებამდე ფაილების სარეზერვო ასლი უნდა შეგექმნა." },
      { en: "There is growing evidence that sleep affects memory.", ka: "იზრდება მტკიცებულებები, რომ ძილი მეხსიერებაზე მოქმედებს." },
      { en: "It's high time we found a long-term solution.", ka: "დროა, გრძელვადიანი გამოსავალი ვიპოვოთ." },
      { en: "The more you practise, the more confident you become.", ka: "რაც მეტს ვარჯიშობ, მით უფრო თავდაჯერებული ხდები." },
      { en: "I'm looking forward to hearing from you.", ka: "მოუთმენლად ველი თქვენს პასუხს." }
    ],
    C1: [
      { en: "Not only did the company miss its targets, but it also lost key clients.", ka: "კომპანიამ არა მხოლოდ მიზნებს ვერ მიაღწია, არამედ მთავარი კლიენტებიც დაკარგა." },
      { en: "The findings are, to a large extent, consistent with previous research.", ka: "შედეგები დიდწილად შეესაბამება წინა კვლევებს." },
      { en: "Were the government to raise taxes, consumer spending would fall.", ka: "მთავრობას რომ გადასახადები გაეზარდა, სამომხმარებლო ხარჯები შემცირდებოდა." },
      { en: "It is widely acknowledged that the issue requires urgent attention.", ka: "საყოველთაოდ აღიარებულია, რომ საკითხი სასწრაფო ყურადღებას საჭიროებს." },
      { en: "She has a remarkable ability to put complex ideas into simple words.", ka: "მას რთული იდეების მარტივად გადმოცემის გასაოცარი უნარი აქვს." },
      { en: "On no account should this information be shared outside the team.", ka: "ეს ინფორმაცია არავითარ შემთხვევაში არ უნდა გავიდეს გუნდის გარეთ." },
      { en: "The proposal was met with considerable scepticism.", ka: "წინადადებას მნიშვნელოვანი სკეპტიციზმით შეხვდნენ." },
      { en: "We need to strike a balance between growth and sustainability.", ka: "ზრდასა და მდგრადობას შორის ბალანსი უნდა ვიპოვოთ." },
      { en: "Little did they know that the decision would change everything.", ka: "წარმოდგენაც არ ჰქონდათ, რომ ეს გადაწყვეტილება ყველაფერს შეცვლიდა." },
      { en: "His argument, while persuasive, overlooks several key factors.", ka: "მისი არგუმენტი, თუმცა დამაჯერებელია, რამდენიმე მთავარ ფაქტორს ყურადღების გარეშე ტოვებს." }
    ],
    C2: [
      { en: "The ramifications of this ruling will be felt for decades to come.", ka: "ამ გადაწყვეტილების შედეგები ათწლეულების განმავლობაში იგრძნობა." },
      { en: "Her prose is characterised by an almost unsettling clarity.", ka: "მის პროზას თითქმის შემაშფოთებელი სიცხადე ახასიათებს." },
      { en: "Notwithstanding the board's objections, the merger went ahead.", ka: "საბჭოს წინააღმდეგობის მიუხედავად, შერწყმა შედგა." },
      { en: "The theory, elegant as it may be, lacks empirical support.", ka: "თეორიას, რაც არ უნდა ელეგანტური იყოს, ემპირიული მხარდაჭერა აკლია." },
      { en: "He was at pains to stress that no wrongdoing had occurred.", ka: "ის განსაკუთრებით ცდილობდა ხაზი გაესვა, რომ დარღვევა არ მომხდარა." },
      { en: "The negotiations reached an impasse over the question of sovereignty.", ka: "მოლაპარაკებები სუვერენიტეტის საკითხზე ჩიხში შევიდა." },
      { en: "Such ubiquitous technology inevitably raises questions of privacy.", ka: "ასეთი ყოვლისმომცველი ტექნოლოგია გარდაუვლად აჩენს პირადი ცხოვრების საკითხებს." },
      { en: "To dismiss these concerns out of hand would be a grave mistake.", ka: "ამ შეშფოთების დაუფიქრებლად უარყოფა სერიოზული შეცდომა იქნებოდა." },
      { en: "The author deftly interweaves personal memoir with social history.", ka: "ავტორი ოსტატურად აერთიანებს პირად მემუარებსა და სოციალურ ისტორიას." },
      { en: "Whatever the merits of the plan, its timing could hardly be worse.", ka: "გეგმას რა ღირსებებიც არ უნდა ჰქონდეს, მისი დრო უარესი ვერ იქნებოდა." }
    ]
  };

  let activeLevel = null;
  let activeIndex = 0;
  let recognition = null;
  let isListening = false;
  let lastResult = null; // { transcript, score, words: [{ text, ok }] }

  function getRecognitionCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  }

  function normalizeWords(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^a-z0-9'\s-]/g, " ")
      .split(/[\s-]+/)
      .filter(Boolean);
  }

  // რამდენი სამიზნე სიტყვა გამოითქვა სწორი თანმიმდევრობით (LCS) — უფრო სამართლიანი, ვიდრე უბრალო თანხვედრა
  function scoreAttempt(target, spoken) {
    const t = normalizeWords(target);
    const s = normalizeWords(spoken);
    const dp = [];
    for (let i = 0; i <= t.length; i++) {
      dp.push(new Array(s.length + 1).fill(0));
    }
    for (let i = 1; i <= t.length; i++) {
      for (let j = 1; j <= s.length; j++) {
        dp[i][j] = t[i - 1] === s[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    const okFlags = new Array(t.length).fill(false);
    let i = t.length;
    let j = s.length;
    while (i > 0 && j > 0) {
      if (t[i - 1] === s[j - 1]) {
        okFlags[i - 1] = true;
        i--;
        j--;
      } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
    const matched = okFlags.filter(Boolean).length;
    return {
      score: t.length ? Math.round((matched / t.length) * 100) : 0,
      words: t.map(function (w, idx) { return { text: w, ok: okFlags[idx] }; })
    };
  }

  function getCompletedIds() {
    const ids = App.Storage.get("progress.completedSpeakingIds", []);
    return Array.isArray(ids) ? ids : [];
  }

  function phraseId(level, idx) {
    return "sp-" + level + "-" + (idx + 1);
  }

  function markPhraseCompleted(level, idx, score) {
    const id = phraseId(level, idx);
    const done = getCompletedIds();
    if (done.indexOf(id) !== -1) return false;
    done.push(id);
    App.Storage.set("progress.completedSpeakingIds", done);
    App.Storage.set("progress.speakingSessions", (Number(App.Storage.get("progress.speakingSessions", 0)) || 0) + 1);
    if (App.Progress && typeof App.Progress.recordActivity === "function") {
      App.Progress.recordActivity({
        xp: 5,
        title: "გამოთქმის ვარჯიში (" + level + ", " + score + "%): " + PHRASES[level][idx].en,
        category: "საუბარი"
      });
    }
    return true;
  }

  function stopListening() {
    if (recognition) {
      try { recognition.abort(); } catch (e) {}
    }
    recognition = null;
    isListening = false;
  }

  const Speaking = {
    getAllPhrases: function () {
      return PHRASES;
    },

    speak: function (text, slow) {
      if (App.AudioEngine && typeof App.AudioEngine.speak === "function") {
        App.AudioEngine.speak(text, undefined, slow ? 0.75 : 1.0);
      } else if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US";
        u.rate = slow ? 0.75 : 1.0;
        window.speechSynthesis.speak(u);
      }
    },

    startListening: function () {
      const Ctor = getRecognitionCtor();
      if (!Ctor || isListening) return;
      const target = PHRASES[activeLevel][activeIndex].en;
      const levelAtStart = activeLevel;
      const indexAtStart = activeIndex;

      if (App.AudioEngine && typeof App.AudioEngine.stop === "function") App.AudioEngine.stop();

      recognition = new Ctor();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      isListening = true;
      lastResult = null;
      this.render();

      recognition.onresult = (event) => {
        const alternatives = event.results && event.results[0] ? Array.from(event.results[0]) : [];
        let best = null;
        alternatives.forEach(function (alt) {
          const r = scoreAttempt(target, alt.transcript);
          if (!best || r.score > best.score) {
            best = { transcript: alt.transcript, score: r.score, words: r.words };
          }
        });
        if (levelAtStart !== activeLevel || indexAtStart !== activeIndex) return;
        lastResult = best || { transcript: "", score: 0, words: scoreAttempt(target, "").words };
        if (lastResult.score >= PASS_SCORE) {
          const isNew = markPhraseCompleted(activeLevel, activeIndex, lastResult.score);
          App.UI.playSound("success");
          if (isNew) App.UI.toast("🎉 შესანიშნავია! ფრაზა ჩაითვალა (" + lastResult.score + "%).", "success");
        } else {
          App.UI.playSound("click");
        }
      };

      recognition.onerror = (event) => {
        const code = event && event.error;
        if (code === "not-allowed" || code === "service-not-allowed") {
          App.UI.toast("მიკროფონზე წვდომა დაბლოკილია. ჩართეთ ის ბრაუზერის მისამართის ზოლში არსებული ხატულიდან.", "warning", 6000);
        } else if (code === "no-speech") {
          App.UI.toast("ხმა ვერ დაფიქსირდა. სცადეთ თავიდან და ილაპარაკეთ უფრო ხმამაღლა.", "info");
        } else if (code === "network") {
          App.UI.toast("მეტყველების ამოცნობას ინტერნეტ-კავშირი სჭირდება.", "warning");
        } else if (code !== "aborted") {
          App.UI.toast("მეტყველების ამოცნობა ვერ მოხერხდა. სცადეთ თავიდან.", "warning");
        }
      };

      recognition.onend = () => {
        isListening = false;
        recognition = null;
        if (App.Router && App.Router.currentRoute === "speaking") this.render();
      };

      try {
        recognition.start();
      } catch (e) {
        stopListening();
        this.render();
      }
    },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;

      if (!activeLevel) {
        const userLevel = App.Storage.get("progress.level", "A1");
        activeLevel = LEVELS.indexOf(userLevel) !== -1 ? userLevel : "A1";
      }

      const phrases = PHRASES[activeLevel];
      const phrase = phrases[activeIndex];
      const completed = getCompletedIds();
      const levelDone = phrases.filter(function (p, idx) { return completed.indexOf(phraseId(activeLevel, idx)) !== -1; }).length;
      const supported = !!getRecognitionCtor();
      const isDone = completed.indexOf(phraseId(activeLevel, activeIndex)) !== -1;
      const esc = App.UI.escapeHTML;

      const tabsHtml = LEVELS.map(function (lvl) {
        return '<button type="button" class="pill-tab' + (lvl === activeLevel ? " active" : "") + '" data-speak-level="' + lvl + '" aria-pressed="' + (lvl === activeLevel) + '">' + lvl + "</button>";
      }).join("");

      const listHtml = phrases.map(function (p, idx) {
        const done = completed.indexOf(phraseId(activeLevel, idx)) !== -1;
        return (
          '<button type="button" class="btn btn-sm ' + (idx === activeIndex ? "btn-primary" : "btn-outline") + '" data-speak-index="' + idx + '" aria-label="ფრაზა ' + (idx + 1) + (done ? " (დასრულებული)" : "") + '">' +
            (done ? "✓ " : "") + (idx + 1) +
          "</button>"
        );
      }).join("");

      let feedbackHtml = "";
      if (isListening) {
        feedbackHtml = '<p role="status" style="font-weight:700; color:var(--brand-primary);">🎙️ გისმენთ... წაიკითხეთ ფრაზა ხმამაღლა.</p>';
      } else if (lastResult) {
        const wordsHtml = lastResult.words.map(function (w) {
          return '<span style="display:inline-block; margin:2px 4px; padding:2px 8px; border-radius:8px; font-weight:700; ' +
            (w.ok ? "background:rgba(22,163,74,0.14); color:#15803d;" : "background:rgba(220,38,38,0.12); color:#b91c1c; text-decoration:underline wavy;") +
            '">' + esc(w.text) + "</span>";
        }).join("");
        const passed = lastResult.score >= PASS_SCORE;
        feedbackHtml =
          '<div role="status" style="margin-top:4px;">' +
            '<p style="font-weight:800; font-size:1.1rem; margin-bottom:8px;">' + (passed ? "✅ " : "🔁 ") + "შედეგი: " + lastResult.score + "%" +
              (passed ? "" : ' <span style="font-weight:600; font-size:0.88rem; color:var(--text-secondary);">(ჩასათვლელად საჭიროა ' + PASS_SCORE + "%)</span>") + "</p>" +
            '<div style="margin-bottom:8px;">' + wordsHtml + "</div>" +
            '<p style="font-size:0.88rem; color:var(--text-secondary);">ამოცნობილი ტექსტი: «' + esc(lastResult.transcript || "—") + "»</p>" +
          "</div>";
      }

      const actionHtml = supported
        ? '<button type="button" class="btn btn-primary" id="speak-record-btn"' + (isListening ? " disabled" : "") + ">" + (isListening ? "🎙️ გისმენთ..." : "🎙️ ჩაწერა და შემოწმება") + "</button>"
        : '<button type="button" class="btn btn-primary" id="speak-selfcheck-btn">' + (isDone ? "✓ ჩათვლილია" : "✓ სწორად წარმოვთქვი") + "</button>";

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">საუბრისა და გამოთქმის სტუდია</h2>' +
                '<p class="section-subtitle">მოუსმინეთ ფრაზას, გაიმეორეთ ხმამაღლა და მიიღეთ სიტყვა-სიტყვით შეფასება. ფრაზა ჩაითვლება ' + PASS_SCORE + '%-იანი სიზუსტიდან.</p>' +
              "</div>" +
              '<span class="stat-pill stat-pill--level">' + activeLevel + ": " + levelDone + " / " + phrases.length + "</span>" +
            "</div>" +
            '<div class="filter-bar" style="margin-bottom:0;"><div class="pill-tabs" role="group" aria-label="დონის არჩევა">' + tabsHtml + "</div></div>" +
          "</section>" +

          '<section class="card" aria-live="polite">' +
            '<div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px;">' + listHtml + "</div>" +
            '<p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:6px;">ფრაზა ' + (activeIndex + 1) + " / " + phrases.length + (isDone ? " • ✓ ჩათვლილია" : "") + "</p>" +
            '<p lang="en" style="font-size:1.45rem; font-weight:800; line-height:1.4; margin-bottom:6px;">' + esc(phrase.en) + "</p>" +
            '<p style="color:var(--text-secondary); margin-bottom:18px;">' + esc(phrase.ka) + "</p>" +
            '<div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:18px;">' +
              '<button type="button" class="btn btn-outline" id="speak-listen-btn">🔊 მოსმენა</button>' +
              '<button type="button" class="btn btn-outline" id="speak-slow-btn">🐢 ნელა</button>' +
              actionHtml +
            "</div>" +
            feedbackHtml +
            (supported ? "" :
              '<p style="margin-top:12px; font-size:0.88rem; color:var(--text-secondary);">ℹ️ თქვენი ბრაუზერი მეტყველების ავტომატურ ამოცნობას არ უჭერს მხარს (მუშაობს Chrome-სა და Edge-ში). ' +
              "შეგიძლიათ ივარჯიშოთ მოსმენით და თავად შეაფასოთ გამოთქმა.</p>") +
            '<div style="display:flex; justify-content:space-between; gap:10px; margin-top:20px;">' +
              '<button type="button" class="btn btn-outline" id="speak-prev-btn"' + (activeIndex === 0 ? " disabled" : "") + ">← წინა</button>" +
              '<button type="button" class="btn btn-outline" id="speak-next-btn"' + (activeIndex === phrases.length - 1 ? " disabled" : "") + ">შემდეგი →</button>" +
            "</div>" +
          "</section>" +
        "</div>";

      this.bindEvents(container);
    },

    goTo: function (level, index) {
      stopListening();
      lastResult = null;
      activeLevel = level;
      activeIndex = Math.max(0, Math.min(PHRASES[level].length - 1, index));
      this.render();
    },

    bindEvents: function (container) {
      const self = this;
      container.querySelectorAll("[data-speak-level]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.goTo(btn.getAttribute("data-speak-level"), 0);
        });
      });
      container.querySelectorAll("[data-speak-index]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.goTo(activeLevel, Number(btn.getAttribute("data-speak-index")));
        });
      });

      const phrase = PHRASES[activeLevel][activeIndex];
      const listenBtn = container.querySelector("#speak-listen-btn");
      if (listenBtn) listenBtn.addEventListener("click", function () { self.speak(phrase.en, false); });
      const slowBtn = container.querySelector("#speak-slow-btn");
      if (slowBtn) slowBtn.addEventListener("click", function () { self.speak(phrase.en, true); });

      const recordBtn = container.querySelector("#speak-record-btn");
      if (recordBtn) recordBtn.addEventListener("click", function () { self.startListening(); });

      const selfBtn = container.querySelector("#speak-selfcheck-btn");
      if (selfBtn) {
        selfBtn.addEventListener("click", function () {
          if (markPhraseCompleted(activeLevel, activeIndex, 100)) {
            App.UI.playSound("success");
            App.UI.toast("✓ ფრაზა ჩაითვალა.", "success");
          }
          if (activeIndex < PHRASES[activeLevel].length - 1) {
            self.goTo(activeLevel, activeIndex + 1);
          } else {
            self.render();
          }
        });
      }

      const prevBtn = container.querySelector("#speak-prev-btn");
      if (prevBtn) prevBtn.addEventListener("click", function () { self.goTo(activeLevel, activeIndex - 1); });
      const nextBtn = container.querySelector("#speak-next-btn");
      if (nextBtn) nextBtn.addEventListener("click", function () { self.goTo(activeLevel, activeIndex + 1); });
    }
  };

  // გვერდიდან გასვლისას მიკროფონი გამოვრთოთ
  window.addEventListener("hashchange", function () {
    if (isListening) stopListening();
    lastResult = null;
  });

  App.Speaking = Speaking;
  App.Speaking._scoreAttempt = scoreAttempt;
})(window);
