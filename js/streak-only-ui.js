/**
 * STREAK-ONLY-UI.JS
 * 1) აქრობს მარცხენა მენიუდან ყველა "" და "ფაზა 4 / 5" ბეიჯს.
 * 2) ხის სტილის სწავლის მოდულს (App.Learn) უკავშირებს რეგისტრაციის ტესტით დადგენილ დონეს.
 * 3) დეშბორდსა და პროგრესის გვერდზე XP-ის ნაცვლად აჩვენებს მხოლოდ სტრიკებს (🔥).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const CEFR_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

  /**
   * 100%-ით შლის მარცხენა მენიუდან "", "", "" ბეიჯებს ნებისმიერი კლასის მიუხედავად
   */
    function removeSidebarPhaseBadges() {
    document.querySelectorAll(".nav-badge, [class*='badge'], [class*='phase']").forEach(function (el) {
      const txt = (el.textContent || "").trim();
      if (txt === "" || /^ფაზა\s*\d+$/i.test(txt) || el.classList.contains("nav-badge")) {
        el.remove();
      }
    });
  }

  /**
   * ხის სტილის იუნიტებში (js/learn.js) ავტომატურად ხსნის ყველა იუნიტს მომხმარებლის
   * დადგენილ დონემდე (progress.level) და ააქტიურებს დადგენილი დონის ტაბს/კვანძს.
   */
  function syncTreeUnitsWithUserLevel() {
    if (!App.Storage || typeof App.Storage.get !== "function") return;
    const userLevel = App.Storage.get("progress.level", "A1") || "A1";
    const userLvlIdx = CEFR_ORDER.indexOf(userLevel);

    if (userLvlIdx > 0 && App.Learn) {
      const passedLevels = CEFR_ORDER.slice(0, userLvlIdx);

      // მოვძებნოთ ხის ყველა იუნიტი App.Learn-ში (როგორც არ უნდა ერქვას მეთოდს ან მასივს)
      let treeUnits = [];
      if (typeof App.Learn.getAllUnits === "function") treeUnits = App.Learn.getAllUnits() || [];
      else if (typeof App.Learn.getUnits === "function") treeUnits = App.Learn.getUnits() || [];
      else if (Array.isArray(App.Learn.units)) treeUnits = App.Learn.units;
      else if (Array.isArray(App.LearnData)) treeUnits = App.LearnData;

      if (treeUnits.length > 0) {
        const passedIds = treeUnits
          .filter(function (u) { return u && passedLevels.indexOf(u.level) !== -1; })
          .map(function (u) { return u.id; });

        if (passedIds.length > 0) {
          ["learn.completedUnitIds", "learn.completedUnits", "learn.completedIds", "progress.completedLearnUnits", "progress.completedUnits"].forEach(function (storageKey) {
            const existing = App.Storage.get(storageKey, []) || [];
            const merged = existing.slice();
            passedIds.forEach(function (id) {
              if (merged.indexOf(id) === -1) merged.push(id);
            });
            App.Storage.set(storageKey, merged);
          });
        }
      }
    }
  }

  /**
   * როცა მომხმარებელი ხსნის #learn გვერდს, თუ ხეს აქვს დონის ფილტრი/ტაბი ან კვანძები,
   * ავტომატურად გადართავს მომხმარებლის დადგენილ დონეზე (მაგ. B1, B2...)
   */
  let lastAutoFocusedLevel = null;
  function autoFocusTreeLevelInDOM() {
    const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
    if (hash !== "learn") return;

    const userLevel = App.Storage.get("progress.level", "A1") || "A1";
    const container = document.getElementById("app-view");
    if (!container) return;

    // თუ ხის გვერდზე არის დონის ტაბები (A1, A2, B1...), პირველ შესვლაზე ავირჩიოთ მომხმარებლის დონე
    if (lastAutoFocusedLevel !== userLevel) {
      const levelTabBtn = container.querySelector(
        '[data-level="' + userLevel + '"], [data-learn-level="' + userLevel + '"], [data-lvl="' + userLevel + '"]'
      );
      if (levelTabBtn && !levelTabBtn.classList.contains("active")) {
        lastAutoFocusedLevel = userLevel;
        levelTabBtn.click();
        return;
      }

      // თუ ყველა დონე ერთიან ვერტიკალურ ხეზეა, ჩამოვსქროლოთ მომხმარებლის დონის პირველ იუნიტთან
      const levelSection = container.querySelector(
        '[data-tree-level="' + userLevel + '"], #tree-level-' + userLevel + ', [data-section-level="' + userLevel + '"]'
      );
      if (levelSection) {
        lastAutoFocusedLevel = userLevel;
        window.setTimeout(function () {
          levelSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    }
  }

  function getStatsSummary() {
    const streak = Number(App.Storage.get("progress.streak", 1)) || 1;
    const level = App.Storage.get("progress.level", "A1") || "A1";
    const learnedWords = (App.Storage.get("vocabulary.learnedIds", []) || []).length;
    const boxMap = App.Storage.get("vocabulary.boxByWordId", {}) || {};
    const inBoxesCount = Object.keys(boxMap).filter(function (k) { return Number(boxMap[k]) >= 2; }).length;
    const wordsCount = Math.max(learnedWords, inBoxesCount);

    const grammarDone = (App.Storage.get("progress.completedGrammarIds", []) || []).length;
    const readingDone = (App.Storage.get("progress.completedReadingIds", []) || []).length;
    const listeningDone = (App.Storage.get("progress.completedListeningIds", []) || []).length;
    const writingDone = (App.Storage.get("progress.completedWritingIds", []) || []).length;
    const quizzesDone = Number(App.Storage.get("progress.quizzesCompleted", 0)) || 0;
    const totalLessonsDone = grammarDone + readingDone + listeningDone + writingDone;

    return {
      streak: streak,
      level: level,
      wordsCount: wordsCount,
      grammarDone: grammarDone,
      readingDone: readingDone,
      listeningDone: listeningDone,
      writingDone: writingDone,
      quizzesDone: quizzesDone,
      totalLessonsDone: totalLessonsDone
    };
  }

  // დღეს შესრულებული აქტივობების რაოდენობა (ადგილობრივი თარიღით)
  function countTodayActivities() {
    const activities = App.Storage.get("progress.recentActivities", []) || [];
    const today = new Date().toDateString();
    return activities.filter(function (a) {
      return a && a.timestamp && new Date(a.timestamp).toDateString() === today;
    }).length;
  }

  function renderCleanDashboard() {
    const container = document.getElementById("app-view");
    if (!container) return;

    const esc = App.UI.escapeHTML;
    const st = getStatsSummary();
    const speakingDone = (App.Storage.get("progress.completedSpeakingIds", []) || []).length;
    const dailyTarget = 5;
    const todayDone = countTodayActivities();
    const dailyPct = Math.min(100, Math.round((todayDone / dailyTarget) * 100));
    const rawName = String(App.Storage.get("user.name", "") || App.Storage.get("settings.userName", "") || "").trim();
    const firstName = rawName && rawName !== "მოსწავლე" ? rawName.split(/\s+/)[0] : "";
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "დილა მშვიდობისა" : (hour < 18 ? "გამარჯობა" : "საღამო მშვიდობისა");

    const pct = function (done, total) { return Math.min(100, Math.round((done / total) * 100)); };
    const modules = [
      { route: "learn", icon: "🌳", tone: "green", title: "სწავლის ხე", count: "დონე " + st.level, pct: pct(st.totalLessonsDone, 90), desc: "ინტერაქტიული იუნიტები ნაბიჯ-ნაბიჯ, თქვენი დონიდან." },
      { route: "vocabulary", icon: "🗂️", tone: "amber", title: "ლექსიკონი", count: st.wordsCount + " / 3,000", pct: pct(st.wordsCount, 3000), desc: "3,000 აუცილებელი სიტყვა და ფრაზა A1–C2 დონეებზე." },
      { route: "grammar", icon: "🌐", tone: "blue", title: "გრამატიკა", count: st.grammarDone + " / 90", pct: pct(st.grammarDone, 90), desc: "90 გაკვეთილი მკაფიო წესებითა და სავარჯიშოებით." },
      { route: "reading", icon: "📖", tone: "violet", title: "კითხვა", count: st.readingDone + " / 90", pct: pct(st.readingDone, 90), desc: "ადაპტირებული ისტორიები და სტატიები კითხვებით." },
      { route: "listening", icon: "🎧", tone: "teal", title: "მოსმენა", count: st.listeningDone + " / 90", pct: pct(st.listeningDone, 90), desc: "დიალოგები და პოდკასტები ტრანსკრიპტით." },
      { route: "speaking", icon: "🎙️", tone: "rose", title: "საუბარი", count: speakingDone + " / 60", pct: pct(speakingDone, 60), desc: "გამოთქმის ვარჯიში სიტყვა-სიტყვით შეფასებით." },
      { route: "writing", icon: "✍️", tone: "orange", title: "წერა", count: st.writingDone + " / 90", pct: pct(st.writingDone, 90), desc: "წერითი ნიმუშები, შაბლონები და დავალებები." },
      { route: "flashcards", icon: "🎴", tone: "indigo", title: "ბარათები", count: "5 ყუთი", pct: pct(st.wordsCount, 500), desc: "სიტყვების გამეორება ინტერვალური სისტემით." },
      { route: "quizzes", icon: "☑️", tone: "slate", title: "ტესტები", count: st.quizzesDone + " ჩაბარებული", pct: Math.min(100, st.quizzesDone * 10), desc: "დიაგნოსტიკური ტესტი და დონის გამოცდები." }
    ];

    const moduleCardsHtml = modules.map(function (m) {
      return (
        '<a class="card fp-module-card" href="#' + m.route + '">' +
          '<div class="fp-module-card__head">' +
            '<span class="fp-icon-tile fp-tone-' + m.tone + '" aria-hidden="true">' + m.icon + "</span>" +
            '<span class="fp-module-card__count">' + esc(m.count) + "</span>" +
          "</div>" +
          '<h3 class="fp-module-card__title">' + esc(m.title) + "</h3>" +
          '<p class="fp-module-card__desc">' + esc(m.desc) + "</p>" +
          '<div class="fp-module-card__foot">' +
            '<div class="progress-track" role="progressbar" aria-label="' + esc(m.title) + ' — პროგრესი" aria-valuenow="' + m.pct + '" aria-valuemin="0" aria-valuemax="100">' +
              '<div class="progress-fill" style="width:' + m.pct + '%;"></div>' +
            "</div>" +
            '<span class="fp-module-card__cta">' + (m.pct > 0 ? "გაგრძელება" : "დაწყება") + ' <span aria-hidden="true">→</span></span>' +
          "</div>" +
        "</a>"
      );
    }).join("");

    const stat = function (icon, tone, value, label, valueClass) {
      return (
        '<div class="card fp-stat">' +
          '<span class="fp-icon-tile fp-tone-' + tone + '" aria-hidden="true">' + icon + "</span>" +
          "<div>" +
            '<div class="fp-stat__value' + (valueClass ? " " + valueClass : "") + '">' + value + "</div>" +
            '<div class="fp-stat__label">' + label + "</div>" +
          "</div>" +
        "</div>"
      );
    };

    container.innerHTML =
      '<div class="dashboard-grid">' +
        '<section class="fp-hero">' +
          '<div class="fp-hero__content">' +
            '<span class="fp-hero__eyebrow">🎯 დონე ' + esc(st.level) + " • 🔥 " + st.streak + " დღიანი სტრიკი</span>" +
            '<h2 class="fp-hero__title">' + greeting + (firstName ? ", " + esc(firstName) : "") + "! 👋</h2>" +
            '<p class="fp-hero__subtitle">' +
              (todayDone >= dailyTarget
                ? "დღევანდელი მიზანი შესრულებულია — შესანიშნავი შედეგია! სწავლა შეგიძლიათ განაგრძოთ ულიმიტოდ."
                : "დღეს დაგრჩათ " + (dailyTarget - todayDone) + " აქტივობა დღიური მიზნის შესასრულებლად. გააგრძელეთ იქიდან, სადაც გაჩერდით.") +
            "</p>" +
            '<div class="fp-hero__actions">' +
              '<a href="#learn" class="btn fp-btn-light">სწავლის გაგრძელება <span aria-hidden="true">→</span></a>' +
              '<a href="#flashcards" class="btn fp-btn-ghost-light">🎴 სიტყვების გამეორება</a>' +
            "</div>" +
          "</div>" +
          '<div class="fp-ring" style="--pct:' + dailyPct + ';" role="img" aria-label="დღიური მიზანი: ' + Math.min(todayDone, dailyTarget) + " / " + dailyTarget + '">' +
            '<div class="fp-ring__inner">' +
              '<strong>' + Math.min(todayDone, dailyTarget) + "/" + dailyTarget + "</strong>" +
              "<span>დღიური მიზანი</span>" +
            "</div>" +
          "</div>" +
        "</section>" +

        '<section class="fp-stats-grid" aria-label="სტატისტიკა">' +
          stat("🔥", "orange", st.streak + " დღე", "უწყვეტი სტრიკი") +
          stat("🎯", "blue", esc(st.level), "მიმდინარე დონე", "fp-text-brand") +
          stat("🗂️", "amber", st.wordsCount, "ნასწავლი სიტყვა") +
          stat("✅", "green", st.totalLessonsDone, "დასრულებული თემა", "fp-text-success") +
        "</section>" +

        '<section aria-labelledby="fp-modules-title">' +
          '<div class="section-header">' +
            '<div><h2 class="section-title" id="fp-modules-title">სასწავლო მოდულები</h2>' +
            '<p class="section-subtitle">აირჩიეთ უნარი, რომლის განვითარებაც დღეს გსურთ.</p></div>' +
          "</div>" +
          '<div class="fp-modules-grid">' + moduleCardsHtml + "</div>" +
        "</section>" +
      "</div>";
  }

  function renderCleanProgressPage() {
    const container = document.getElementById("app-view");
    if (!container) return;

    const st = getStatsSummary();
    const activities = App.Storage.get("progress.recentActivities", []) || [];

    const rows = [
      { label: "🗂️ ლექსიკონი (3,000 სიტყვა)", done: st.wordsCount, total: 3000 },
      { label: "🌐 გრამატიკა (90 თემა)", done: st.grammarDone, total: 90 },
      { label: "📖 კითხვა (90 ისტორია)", done: st.readingDone, total: 90 },
      { label: "🎧 მოსმენა (90 აუდიო თემა)", done: st.listeningDone, total: 90 },
      { label: "✍️ წერა (90 წერითი თემა)", done: st.writingDone, total: 90 }
    ];

    const barsHtml = rows.map(function (r) {
      const pct = r.total ? Math.min(100, Math.round((r.done / r.total) * 100)) : 0;
      return (
        '<div style="margin-bottom:16px;">' +
          (App.UI && typeof App.UI.renderProgressBar === "function"
            ? App.UI.renderProgressBar(pct, r.label, r.done + " / " + r.total + " (" + pct + "%)")
            : "") +
        "</div>"
      );
    }).join("");

    const actHtml = activities.length > 0
      ? activities.slice(0, 12).map(function (a) {
          return (
            '<div style="display:flex; justify-content:space-between; align-items:center; padding:10px 14px; border-radius:10px; background:var(--bg-surface-muted); margin-bottom:8px;">' +
              '<div style="font-weight:700; font-size:0.9rem;">✓ ' + App.UI.escapeHTML(a.title || "სასწავლო აქტივობა") + "</div>" +
              '<span class="stat-pill stat-pill--level">' + App.UI.escapeHTML(a.category || "მოდული") + "</span>" +
            "</div>"
          );
        }).join("")
      : '<p style="color:var(--text-secondary);">ჯერ აქტივობები არ დაფიქსირებულა. დაიწყეთ ნებისმიერი მოდული!</p>';

    container.innerHTML =
      '<div class="dashboard-grid">' +
        '<section class="card">' +
          '<div class="section-header">' +
            "<div>" +
              '<h2 class="section-title">📈 ჩემი სასწავლო პროგრესი</h2>' +
              '<p class="section-subtitle">თქვენი უწყვეტი სტრიკი და მოდულების შესრულების დეტალური სტატისტიკა.</p>' +
            "</div>" +
            '<div style="display:flex; gap:10px;">' +
              '<span class="stat-pill stat-pill--streak">🔥 სტრიკი: ' + st.streak + " დღე</span>" +
              '<span class="stat-pill stat-pill--level">🎯 დონე: ' + App.UI.escapeHTML(st.level) + "</span>" +
            "</div>" +
          "</div>" +
          barsHtml +
        "</section>" +

        '<section class="card">' +
          '<h3 class="section-title" style="margin-bottom:14px;">🕒 ბოლო აქტივობები</h3>' +
          actHtml +
        "</section>" +
      "</div>";
  }

  function hookEverything() {
    removeSidebarPhaseBadges();
    syncTreeUnitsWithUserLevel();

    if (App.Dashboard) {
      App.Dashboard.render = renderCleanDashboard;
    }

    if (App.Learn && typeof App.Learn.render === "function" && !App.Learn.render._treeLevelHooked) {
      const origLearnRender = App.Learn.render;
      const wrappedLearnRender = function () {
        syncTreeUnitsWithUserLevel();
        const res = origLearnRender.apply(this, arguments);
        window.setTimeout(autoFocusTreeLevelInDOM, 20);
        return res;
      };
      wrappedLearnRender._treeLevelHooked = true;
      App.Learn.render = wrappedLearnRender;
    }

    if (App.Progress) {
      App.Progress.render = renderCleanProgressPage;

      const origSync = App.Progress.syncHeaderStats;
      App.Progress.syncHeaderStats = function () {
        if (typeof origSync === "function") {
          try { origSync.apply(this, arguments); } catch (e) {}
        }
        const streakEl = document.getElementById("header-streak") || document.querySelector(".stat-pill--streak");
        if (streakEl) {
          const s = Number(App.Storage.get("progress.streak", 1)) || 1;
          streakEl.textContent = "🔥 " + s + " დღე";
        }
        const levelEl = document.getElementById("header-level") || document.querySelector(".stat-pill--level");
        if (levelEl) {
          const lvl = App.Storage.get("progress.level", "A1") || "A1";
          levelEl.textContent = "დონე: " + lvl;
        }
        removeSidebarPhaseBadges();
      };
    }

    const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
    if (!hash || hash === "dashboard") {
      renderCleanDashboard();
    } else if (hash === "progress") {
      renderCleanProgressPage();
    } else if (hash === "learn" && App.Learn) {
      App.Learn.render();
    }
    if (App.Progress && typeof App.Progress.syncHeaderStats === "function") {
      App.Progress.syncHeaderStats();
    }
  }

  window.addEventListener("hashchange", function () {
    removeSidebarPhaseBadges();
    // გვერდებს თავად Router ხატავს; აქ მხოლოდ სასწავლო ხის დონეზე ფოკუსი გვჭირდება
    window.setTimeout(function () {
      const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
      if (hash === "learn") {
        autoFocusTreeLevelInDOM();
      }
    }, 10);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(hookEverything, 45);
    });
  } else {
    window.setTimeout(hookEverything, 45);
  }
})(window);