/**
 * LEARN.JS — სტრუქტურირებული სასწავლო გზა და იუნიტები (A1–C2, სულ 30 იუნიტი)
 * - ავტომატურად იხსნება მომხმარებლის დადგენილ დონეზე (progress.level).
 * - დადგენილ დონემდე არსებული ყველა წინა დონის იუნიტი ავტომატურად ჩათვლილია,
 *   ხოლო სწავლა იწყება მინიჭებული დონის იუნიტი #1-დან!
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const CEFR_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

  let selectedLevelTab = null; // თუ null-ია, ავტომატურად დგება მომხმარებლის progress.level-ზე
  let activeUnitId = null;
  let quizAnswers = {};

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
   * აგენერირებს 30 სრულყოფილ სასწავლო იუნიტს (5 იუნიტი თითოეულ CEFR დონეზე: A1..C2)
   * რეალური ლექსიკონის (3,000 სიტყვა) და გრამატიკის (90 თემა) ბაზაზე დაყრდნობით.
   */
  function buildAllUnitsCatalog() {
    const allWords = (App.Flashcards && typeof App.Flashcards.getAllWordsPool === "function")
      ? App.Flashcards.getAllWordsPool()
      : ((App.Vocabulary && typeof App.Vocabulary.getAllWords === "function") ? App.Vocabulary.getAllWords() : []);

    const allGrammar = (App.Grammar && typeof App.Grammar.getAllTopics === "function")
      ? App.Grammar.getAllTopics()
      : [];

    const unitBlueprints = {
      A1: [
        { u: 1, icon: "👋", titleKa: "იუნიტი 1: გაცნობა, მისალმება და ყოველდღიურობა", titleEn: "Greetings, Introductions & Daily Routine" },
        { u: 2, icon: "🏡", titleKa: "იუნიტი 2: ოჯახი, სახლი და საყიდლები", titleEn: "Family, Home & Shopping Basics" },
        { u: 3, icon: "☕", titleKa: "იუნიტი 3: საკვები, კაფე და ქალაქში გადაადგილება", titleEn: "Food, Café & Getting Around Town" },
        { u: 4, icon: "🕒", titleKa: "იუნიტი 4: დრო, განრიგი და სამუშაო დღე", titleEn: "Time, Schedules & The Workday" },
        { u: 5, icon: "✈️", titleKa: "იუნიტი 5: მოგზაურობის საწყისები და წარსული დრო", titleEn: "Travel Essentials & Past Events" }
      ],
      A2: [
        { u: 1, icon: "🧳", titleKa: "იუნიტი 1: აეროპორტი, სასტუმრო და ჯავშნები", titleEn: "Airports, Hotels & Reservations" },
        { u: 2, icon: "🩺", titleKa: "იუნიტი 2: ჯანმრთელობა, სპორტი და ცხოვრების წესი", titleEn: "Health, Fitness & Lifestyle" },
        { u: 3, icon: "💼", titleKa: "იუნიტი 3: პროფესიები, გასაუბრება და ოფისი", titleEn: "Jobs, Interviews & Office Life" },
        { u: 4, icon: "📱", titleKa: "იუნიტი 4: ტექნოლოგიები, კომუნიკაცია და მედია", titleEn: "Technology, Communication & Media" },
        { u: 5, icon: "🌍", titleKa: "იუნიტი 5: გამოცდილება, გეგმები და შედარებები", titleEn: "Experiences, Future Plans & Comparisons" }
      ],
      B1: [
        { u: 1, icon: "🚀", titleKa: "იუნიტი 1: კარიერული განვითარება და პროექტების მართვა", titleEn: "Career Growth & Project Management" },
        { u: 2, icon: "🏦", titleKa: "იუნიტი 2: პირადი ფინანსები, ბანკი და ხელშეკრულებები", titleEn: "Personal Finance, Banking & Contracts" },
        { u: 3, icon: "🎓", titleKa: "იუნიტი 3: განათლება, სწავლის მეთოდები და დებატები", titleEn: "Education, Learning & Expressing Opinions" },
        { u: 4, icon: "🌿", titleKa: "იუნიტი 4: გარემო, ურბანისტიკა და თანამედროვე ქალაქი", titleEn: "Environment, Urban Life & Sustainability" },
        { u: 5, icon: "🤝", titleKa: "იუნიტი 5: გუნდური მუშაობა, მოლაპარაკება და იდიომები", titleEn: "Teamwork, Negotiations & Workplace Idioms" }
      ],
      B2: [
        { u: 1, icon: "📊", titleKa: "იუნიტი 1: კორპორატიული სტრატეგია და ბიზნეს-ანალიტიკა", titleEn: "Corporate Strategy & Business Analytics" },
        { u: 2, icon: "⚖️", titleKa: "იუნიტი 2: სამართლებრივი პირობები, რისკები და შესაბამისობა", titleEn: "Legal Terms, Risk Mitigation & Compliance" },
        { u: 3, icon: "🧠", titleKa: "იუნიტი 3: ფსიქოლოგია, გადაწყვეტილების მიღება და ქცევა", titleEn: "Psychology, Decision-Making & Behaviour" },
        { u: 4, icon: "🌐", titleKa: "იუნიტი 4: გლობალური ეკონომიკა, ვაჭრობა და ლოგისტიკა", titleEn: "Global Economy, Trade & Supply Chains" },
        { u: 5, icon: "✍️", titleKa: "იუნიტი 5: არგუმენტირებული მსჯელობა და რთული სინტაქსი", titleEn: "Argumentative Discourse & Complex Syntax" }
      ],
      C1: [
        { u: 1, icon: "🏛️", titleKa: "იუნიტი 1: აკადემიური კვლევა და მეთოდოლოგია", titleEn: "Academic Research & Empirical Methodology" },
        { u: 2, icon: "📈", titleKa: "იუნიტი 2: ფინანსური ანგარიშგება, აუდიტი და კაპიტალი", titleEn: "Financial Statements, Ratios & Capital Adequacy" },
        { u: 3, icon: "📜", titleKa: "იუნიტი 3: საერთაშორისო კომერციული სამართალი და არბიტრაჟი", titleEn: "International Commercial Law & Force Majeure" },
        { u: 4, icon: "🛡️", titleKa: "იუნიტი 4: კიბერუსაფრთხოება, ალგორითმები და ეთიკა", titleEn: "Cyber Resilience, AI Governance & Ethics" },
        { u: 5, icon: "🎭", titleKa: "იუნიტი 5: სტილისტიკა, ინვერსია და დიპლომატიური ენა", titleEn: "Advanced Stylistics, Inversion & Nuance" }
      ],
      C2: [
        { u: 1, icon: "👑", titleKa: "იუნიტი 1: მაკროეკონომიკური სტაბილურობა და სისტემური რისკი", titleEn: "Macroprudential Policy & Systemic Risk" },
        { u: 2, icon: "🧭", titleKa: "იუნიტი 2: ეპისტემოლოგია, კოგნიტური მეცნიერება და ლოგიკა", titleEn: "Epistemology, Cognitive Science & Logic" },
        { u: 3, icon: "🏺", titleKa: "იუნიტი 3: ისტორიოგრაფია, კულტურის ფილოსოფია და ენა", titleEn: "Historiography, Cultural Philosophy & Linguistics" },
        { u: 4, icon: "⚖️", titleKa: "იუნიტი 4: საკონსტიტუციო და სამართლებრივი ჰერმენევტიკა", titleEn: "Jurisprudence & Legal Hermeneutics" },
        { u: 5, icon: "🏆", titleKa: "იუნიტი 5: უმაღლესი რიტორიკული სინთეზი და ოსტატობა", titleEn: "Capstone Rhetorical Synthesis & Mastery" }
      ]
    };

    const units = [];

    CEFR_ORDER.forEach(function (lvl) {
      const lvlWords = allWords.filter(function (w) { return w.level === lvl; });
      const lvlGrammar = allGrammar.filter(function (g) { return g.level === lvl; });
      const blueprints = unitBlueprints[lvl] || [];

      blueprints.forEach(function (bp, idx) {
        const unitId = "unit-" + lvl.toLowerCase() + "-" + bp.u;
        const wordSlice = lvlWords.slice(idx * 15, (idx + 1) * 15);
        const grammarSlice = lvlGrammar.slice(idx * 3, (idx + 1) * 3);

        // შევადგინოთ იუნიტის 8 შემაჯამებელი კითხვა (გრამატიკა + ლექსიკა)
        const unitQuestions = [];

        grammarSlice.forEach(function (gTopic) {
          if (Array.isArray(gTopic.questions)) {
            gTopic.questions.slice(0, 2).forEach(function (qItem) {
              unitQuestions.push({
                q: qItem.q.replace(/^\d+\.\s*/, ""),
                options: qItem.options.slice(),
                correct: qItem.correct
              });
            });
          }
        });

        wordSlice.slice(0, 4).forEach(function (w, wIdx) {
          const en = w.en || w.word || "";
          const ka = w.ka || w.translation || "";
          const others = lvlWords.filter(function (o) { return (o.en || o.word) !== en; }).slice(wIdx * 3, wIdx * 3 + 3);
          if (en && ka && others.length === 3) {
            const opts = [ka, others[0].ka || others[0].translation, others[1].ka || others[1].translation, others[2].ka || others[2].translation];
            unitQuestions.push({
              q: "რას ნიშნავს ქართულად «" + en + "»?",
              options: opts,
              correct: 0
            });
          }
        });

        units.push({
          id: unitId,
          level: lvl,
          unitNum: bp.u,
          icon: bp.icon,
          titleKa: bp.titleKa,
          titleEn: bp.titleEn,
          words: wordSlice,
          grammarTopics: grammarSlice,
          questions: unitQuestions.slice(0, 8)
        });
      });
    });

    return units;
  }

  /**
   * ადგენს, გახსნილია თუ არა კონკრეტული იუნიტი მომხმარებლისთვის:
   * - თუ იუნიტის დონე მომხმარებლის დადგენილ დონეზე (progress.level) დაბალია -> ავტომატურად ჩათვლილი და გახსნილია!
   * - თუ იუნიტის დონე უდრის მომხმარებლის დონეს -> იუნიტი #1 გახსნილია, ხოლო #2..#5 იხსნება წინა იუნიტის დასრულებისას!
   */
  function getUnitStatus(unit, allUnits, completedUnitIds, userLevel) {
    if (completedUnitIds.indexOf(unit.id) !== -1) {
      return "COMPLETED";
    }

    const userLvlIdx = CEFR_ORDER.indexOf(userLevel || "A1");
    const unitLvlIdx = CEFR_ORDER.indexOf(unit.level);

    // რეგისტრაციის ტესტით გადალახული წინა დონეები
    if (unitLvlIdx < userLvlIdx) {
      return "PASSED_BY_PLACEMENT";
    }

    // მომხმარებლის მიმდინარე დონის პირველი იუნიტი ყოველთვის გახსნილია!
    if (unitLvlIdx === userLvlIdx && unit.unitNum === 1) {
      return "UNLOCKED";
    }

    // შევამოწმოთ წინა იუნიტი იმავე ან წინა დონეზე
    const idxInAll = allUnits.findIndex(function (u) { return u.id === unit.id; });
    if (idxInAll === 0) return "UNLOCKED";

    const prevUnit = allUnits[idxInAll - 1];
    if (prevUnit) {
      const prevStatus = getUnitStatus(prevUnit, allUnits, completedUnitIds, userLevel);
      if (prevStatus === "COMPLETED" || prevStatus === "PASSED_BY_PLACEMENT") {
        return "UNLOCKED";
      }
    }

    return "LOCKED";
  }

  const Learn = {
    setActiveLevelTab: function (lvl) {
      selectedLevelTab = lvl;
      activeUnitId = null;
    },

    speak: function (text) {
      if (App.AudioEngine && typeof App.AudioEngine.speak === "function") {
        App.AudioEngine.speak(text);
      }
    },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;

      const userAssignedLevel = App.Storage.get("progress.level", "A1") || "A1";
      if (!selectedLevelTab) {
        selectedLevelTab = userAssignedLevel;
      }

      const allUnits = buildAllUnitsCatalog();
      const completedUnitIds = App.Storage.get("progress.completedLearnUnits", []) || [];

      if (activeUnitId) {
        const currentUnit = allUnits.find(function (u) { return u.id === activeUnitId; });
        if (currentUnit) {
          this.renderUnitDetail(container, currentUnit, allUnits, completedUnitIds, userAssignedLevel);
          return;
        }
        activeUnitId = null;
      }

      const tabsHtml = CEFR_ORDER.map(function (lvl) {
        const isAct = selectedLevelTab === lvl ? "active" : "";
        const isUserLvl = userAssignedLevel === lvl ? " 🎯" : "";
        return (
          '<button type="button" class="pill-tab ' + isAct + '" data-learn-lvl="' + lvl + '">' +
            lvl + isUserLvl + " (5 იუნიტი)" +
          "</button>"
        );
      }).join("");

      const visibleUnits = allUnits.filter(function (u) { return u.level === selectedLevelTab; });

      const unitsCardsHtml = visibleUnits.map(function (unit) {
        const status = getUnitStatus(unit, allUnits, completedUnitIds, userAssignedLevel);
        const isLocked = status === "LOCKED";

        let badgeHtml = '<span class="stat-pill stat-pill--level">🚀 მიმდინარე იუნიტი</span>';
        if (status === "COMPLETED") {
          badgeHtml = '<span class="stat-pill" style="background:var(--color-success-soft); color:var(--color-success);">✓ დასრულებულია</span>';
        } else if (status === "PASSED_BY_PLACEMENT") {
          badgeHtml = '<span class="stat-pill" style="background:var(--brand-primary-soft); color:var(--brand-primary);">✓ ჩათვლილია დიაგნოსტიკით</span>';
        } else if (isLocked) {
          badgeHtml = '<span class="stat-pill">🔒 დაბლოკილია</span>';
        }

        const gTitles = unit.grammarTopics.map(function (g) { return g.titleKa; }).join(" • ");

        return (
          '<article class="card" style="display:flex; flex-direction:column; justify-content:space-between; gap:14px; ' + (isLocked ? "opacity:0.68;" : "border:1.5px solid var(--brand-primary);") + '">' +
            "<div>" +
              '<div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:10px; flex-wrap:wrap;">' +
                '<span class="stat-pill stat-pill--level">' + unit.icon + " " + unit.level + " • იუნიტი " + unit.unitNum + "</span>" +
                badgeHtml +
              "</div>" +
              '<h3 class="section-title" style="font-size:1.15rem; margin-bottom:4px;">' + App.UI.escapeHTML(unit.titleKa) + "</h3>" +
              '<div style="font-size:0.83rem; font-weight:700; color:var(--brand-primary); margin-bottom:8px;">' + App.UI.escapeHTML(unit.titleEn) + "</div>" +
              '<p style="font-size:0.84rem; color:var(--text-secondary); line-height:1.5;">' +
                "🗂️ <strong>" + unit.words.length + " სიტყვა</strong> &bull; 🌐 <strong>გრამატიკა:</strong> " + App.UI.escapeHTML(gTitles || "პრაქტიკული სტრუქტურები") +
              "</p>" +
            "</div>" +
            '<div style="display:flex; justify-content:flex-end; padding-top:10px; border-top:1px solid var(--border-subtle);">' +
              '<button type="button" class="btn ' + (isLocked ? "btn-outline" : "btn-primary") + ' btn-sm" data-open-unit="' + unit.id + '" style="width:100%; justify-content:center;">' +
                (isLocked ? "🔒 ჯერ გაიარეთ წინა იუნიტი" : (status === "COMPLETED" ? "🔄 იუნიტის გამეორება" : "🚀 იუნიტის დაწყება &rarr;")) +
              "</button>" +
            "</div>" +
          "</article>"
        );
      }).join("");

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              "<div>" +
                '<h2 class="section-title">📚 სტრუქტურირებული სწავლა (A1–C2 იუნიტები)</h2>' +
                '<p class="section-subtitle">თქვენი განსაზღვრული დონეა <strong>' + App.UI.escapeHTML(userAssignedLevel) + '</strong> — სწავლა პირდაპირ იწყება <strong>' + App.UI.escapeHTML(userAssignedLevel) + ' დონის 1-ლი იუნიტიდან</strong>. თითოეული იუნიტი აერთიანებს ლექსიკას, გრამატიკასა და შემაჯამებელ ტესტს.</p>' +
              "</div>" +
              '<span class="stat-pill stat-pill--level">🎯 თქვენი დონე: ' + App.UI.escapeHTML(userAssignedLevel) + "</span>" +
            "</div>" +
            '<div class="filter-bar">' +
              '<div class="pill-tabs">' + tabsHtml + "</div>" +
            "</div>" +
          "</section>" +

          '<section style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:18px;">' +
            unitsCardsHtml +
          "</section>" +
        "</div>";

      const self = this;
      container.querySelectorAll("[data-learn-lvl]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          selectedLevelTab = btn.getAttribute("data-learn-lvl");
          App.UI.playSound("click");
          self.render();
        });
      });

      container.querySelectorAll("[data-open-unit]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const uId = btn.getAttribute("data-open-unit");
          const target = allUnits.find(function (u) { return u.id === uId; });
          if (!target) return;
          const st = getUnitStatus(target, allUnits, completedUnitIds, userAssignedLevel);
          if (st === "LOCKED") {
            App.UI.toast("🔒 ეს იუნიტი დაბლოკილია. გთხოვთ ჯერ დაასრულოთ წინა იუნიტი!", "warning");
            return;
          }
          activeUnitId = uId;
          quizAnswers = {};
          App.UI.playSound("click");
          self.render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    },

    renderUnitDetail: function (container, unit, allUnits, completedUnitIds, userAssignedLevel) {
      const self = this;

      const wordsHtml = unit.words.map(function (w) {
        const en = w.en || w.word || "";
        const ka = w.ka || w.translation || "";
        const ipa = w.phonetic || "";
        return (
          '<div style="display:flex; justify-content:space-between; align-items:center; padding:10px 14px; border-radius:12px; background:var(--bg-surface-muted); border:1px solid var(--border-subtle); gap:10px;">' +
            "<div>" +
              '<div style="font-weight:800; color:var(--text-primary);">' + App.UI.escapeHTML(en) + ' <span style="font-weight:500; font-size:0.82rem; color:var(--text-secondary);">' + App.UI.escapeHTML(ipa) + "</span></div>" +
              '<div style="font-size:0.86rem; color:var(--brand-primary); font-weight:700;">' + App.UI.escapeHTML(ka) + "</div>" +
            "</div>" +
            '<button type="button" class="audio-btn" data-speak-unit-word="' + App.UI.escapeHTML(en) + '" title="მოსმენა">&#128266;</button>' +
          "</div>"
        );
      }).join("");

      const grammarHtml = unit.grammarTopics.map(function (g) {
        return (
          '<div style="padding:16px; border-radius:14px; background:var(--bg-surface-muted); border-left:4px solid var(--brand-primary); margin-bottom:12px;">' +
            '<div style="font-weight:800; font-size:1.02rem; margin-bottom:4px;">🌐 ' + App.UI.escapeHTML(g.titleKa) + " (" + App.UI.escapeHTML(g.titleEn) + ")</div>" +
            '<div style="font-size:0.84rem; font-weight:700; color:var(--brand-primary); margin-bottom:6px;">ფორმულა: ' + App.UI.escapeHTML(g.formula || "") + "</div>" +
            '<p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.55;">' + App.UI.escapeHTML(g.explanationKa || "") + "</p>" +
          "</div>"
        );
      }).join("");

      const questionsHtml = unit.questions.map(function (qObj, qIdx) {
        const chosen = quizAnswers[qIdx];
        const hasAnswered = chosen !== undefined;
        const optsHtml = qObj.options.map(function (opt, oIdx) {
          let cls = "option-btn";
          if (hasAnswered) {
            if (oIdx === qObj.correct) cls += " correct";
            else if (oIdx === chosen) cls += " wrong";
          }
          return (
            '<button type="button" class="' + cls + '" data-unit-q="' + qIdx + '" data-unit-opt="' + oIdx + '" ' + (hasAnswered ? "disabled" : "") + ">" +
              App.UI.escapeHTML(opt) +
            "</button>"
          );
        }).join("");

        return (
          '<div class="drill-question-box">' +
            '<div class="drill-q-title">' + (qIdx + 1) + ". " + App.UI.escapeHTML(qObj.q) + "</div>" +
            '<div class="drill-options">' + optsHtml + "</div>" +
          "</div>"
        );
      }).join("");

      container.innerHTML =
        '<div class="reading-detail-wrap">' +
          '<div class="player-topbar">' +
            '<button type="button" class="btn btn-outline btn-sm" id="back-to-units-btn">&larr; იუნიტების სიაში დაბრუნება</button>' +
            '<span class="stat-pill stat-pill--level">' + unit.icon + " " + unit.level + " • იუნიტი " + unit.unitNum + "</span>" +
          "</div>" +

          '<section class="card">' +
            '<h2 class="section-title" style="font-size:1.45rem;">' + App.UI.escapeHTML(unit.titleKa) + "</h2>" +
            '<p class="section-subtitle" style="margin-top:4px;">' + App.UI.escapeHTML(unit.titleEn) + "</p>" +
          "</section>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:14px;">🗂️ ნაწილი 1: იუნიტის საკვანძო ლექსიკა (' + unit.words.length + ' სიტყვა)</h3>' +
            '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:10px;">' +
              wordsHtml +
            "</div>" +
          "</section>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:14px;">🌐 ნაწილი 2: იუნიტის გრამატიკული წესები</h3>' +
            grammarHtml +
          "</section>" +

          '<section class="card">' +
            '<h3 class="section-title" style="margin-bottom:14px;">☑️ ნაწილი 3: იუნიტის შემაჯამებელი ტესტი</h3>' +
            questionsHtml +
            '<div style="display:flex; justify-content:flex-end; margin-top:16px;">' +
              '<button type="button" class="btn btn-primary" id="complete-unit-btn">✓ იუნიტის დასრულება და შემდეგის გახსნა &rarr;</button>' +
            "</div>" +
          "</section>" +
        "</div>";

      container.querySelector("#back-to-units-btn").addEventListener("click", function () {
        activeUnitId = null;
        self.render();
      });

      container.querySelectorAll("[data-speak-unit-word]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.speak(btn.getAttribute("data-speak-unit-word"));
        });
      });

      container.querySelectorAll("[data-unit-q]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const qIdx = Number(btn.getAttribute("data-unit-q"));
          const oIdx = Number(btn.getAttribute("data-unit-opt"));
          const scrollY = window.scrollY;
          quizAnswers[qIdx] = oIdx;
          if (oIdx === unit.questions[qIdx].correct) {
            App.UI.playSound("success");
          } else {
            App.UI.playSound("click");
          }
          self.renderUnitDetail(container, unit, allUnits, completedUnitIds, userAssignedLevel);
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      });

      container.querySelector("#complete-unit-btn").addEventListener("click", function () {
        if (Object.keys(quizAnswers).length < unit.questions.length) {
          App.UI.toast("გთხოვთ უპასუხოთ იუნიტის ყველა კითხვას!", "warning");
          return;
        }
        const done = (App.Storage.get("progress.completedLearnUnits", []) || []).slice();
        if (done.indexOf(unit.id) === -1) {
          done.push(unit.id);
          App.Storage.set("progress.completedLearnUnits", done);
        }
        App.UI.playSound("success");
        App.UI.toast("🎉 იუნიტი წარმატებით დასრულდა! გაიხსნა შემდეგი იუნიტი.", "success", 3200);
        activeUnitId = null;
        self.render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  App.Learn = Learn;
})(window);