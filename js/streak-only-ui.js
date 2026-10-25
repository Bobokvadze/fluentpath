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

  function renderCleanDashboard() {
    const container = document.getElementById("app-view");
    if (!container) return;

    const st = getStatsSummary();
    const reviewedToday = Number(App.Storage.get("flashcards.reviewedToday", 0)) || 0;
    const dailyTargetItems = 10;
    const dailyPct = Math.min(100, Math.round(((reviewedToday + st.totalLessonsDone) / dailyTargetItems) * 100));

    const modules = [
      { route: "learn", icon: "🌳", title: "სწავლის ხე (იუნიტები)", count: "დონე " + st.level, pct: Math.min(100, Math.round((st.totalLessonsDone / 90) * 100)), desc: "ინტერაქტიული სასწავლო ხე — გაიარეთ იუნიტები ნაბიჯ-ნაბიჯ თქვენი დონიდან." },
      { route: "vocabulary", icon: "🗂️", title: "ლექსიკონი", count: st.wordsCount + " / 3,000 სიტყვა", pct: Math.min(100, Math.round((st.wordsCount / 3000) * 100)), desc: "3,000 აუცილებელი სიტყვა და ფრაზა A1–C2 დონეებზე." },
      { route: "grammar", icon: "🌐", title: "გრამატიკა", count: st.grammarDone + " / 90 თემა", pct: Math.min(100, Math.round((st.grammarDone / 90) * 100)), desc: "90 სრული გრამატიკული გაკვეთილი წესებითა და ტესტებით." },
      { route: "reading", icon: "📖", title: "კითხვა", count: st.readingDone + " / 90 ტექსტი", pct: Math.min(100, Math.round((st.readingDone / 90) * 100)), desc: "90 ადაპტირებული ისტორია და სტატია გააზრების კითხვებით." },
      { route: "listening", icon: "🎧", title: "მოსმენა", count: st.listeningDone + " / 90 აუდიო", pct: Math.min(100, Math.round((st.listeningDone / 90) * 100)), desc: "90 სტუდიური დიალოგი და პოდკასტი A1–C2 დონეებზე." },
      { route: "writing", icon: "✍️", title: "წერა", count: st.writingDone + " / 90 თემა", pct: Math.min(100, Math.round((st.writingDone / 90) * 100)), desc: "90 წერითი ნიმუში, შაბლონი და პრაქტიკული დავალება." },
      { route: "flashcards", icon: "🎴", title: "ბარათები", count: "5-ყუთიანი სისტემა", pct: Math.min(100, Math.round((st.wordsCount / 500) * 100)), desc: "3D ბარათები US/UK აქცენტებითა და IPA ტრანსკრიპციებით." },
      { route: "quizzes", icon: "☑️", title: "ტესტები და გამოცდები", count: st.quizzesDone + " ჩაბარებული", pct: Math.min(100, st.quizzesDone * 10), desc: "დიაგნოსტიკური ტესტი და A1–C2 სასერტიფიკატო გამოცდები." }
    ];

    const moduleCardsHtml = modules.map(function (m) {
      return (
        '<article class="card" style="display:flex; flex-direction:column; justify-content:space-between; gap:14px;">' +
          "<div>" +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">' +
              '<span style="font-size:1.7rem;">' + m.icon + "</span>" +
              '<span class="stat-pill stat-pill--level">' + App.UI.escapeHTML(m.count) + "</span>" +
            "</div>" +
            '<h3 class="section-title" style="font-size:1.12rem; margin-bottom:6px;">' + App.UI.escapeHTML(m.title) + "</h3>" +
            '<p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">' + App.UI.escapeHTML(m.desc) + "</p>" +
          "</div>" +
          "<div>" +
            '<div style="margin-bottom:12px;">' +
              (App.UI && typeof App.UI.renderProgressBar === "function"
                ? App.UI.renderProgressBar(m.pct, "პროგრესი", m.pct + "%")
                : "") +
            "</div>" +
            '<a href="#' + m.route + '" class="btn btn-primary btn-sm" style="width:100%; justify-content:center; text-decoration:none;">გაგრძელება &rarr;</a>' +
          "</div>" +
        "</article>"
      );
    }).join("");

    container.innerHTML =
      '<div class="dashboard-grid">' +
        '<section style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">' +
          '<div class="card" style="display:flex; align-items:center; gap:14px; padding:20px;">' +
            '<div style="font-size:2.2rem;">🔥</div>' +
            "<div>" +
              '<div style="font-size:1.55rem; font-weight:800; color:var(--text-primary);">' + st.streak + " დღე</div>" +
              '<div style="font-size:0.82rem; font-weight:700; color:var(--text-secondary);">უწყვეტი სტრიკი</div>' +
            "</div>" +
          "</div>" +

          '<div class="card" style="display:flex; align-items:center; gap:14px; padding:20px;">' +
            '<div style="font-size:2.2rem;">🎯</div>' +
            "<div>" +
              '<div style="font-size:1.55rem; font-weight:800; color:var(--brand-primary);">დონე ' + App.UI.escapeHTML(st.level) + "</div>" +
              '<div style="font-size:0.82rem; font-weight:700; color:var(--text-secondary);">მიმდინარე CEFR საფეხური</div>' +
            "</div>" +
          "</div>" +

          '<div class="card" style="display:flex; align-items:center; gap:14px; padding:20px;">' +
            '<div style="font-size:2.2rem;">🗂️</div>' +
            "<div>" +
              '<div style="font-size:1.55rem; font-weight:800; color:var(--text-primary);">' + st.wordsCount + "</div>" +
              '<div style="font-size:0.82rem; font-weight:700; color:var(--text-secondary);">ნასწავლი სიტყვა</div>' +
            "</div>" +
          "</div>" +

          '<div class="card" style="display:flex; align-items:center; gap:14px; padding:20px;">' +
            '<div style="font-size:2.2rem;">✅</div>' +
            "<div>" +
              '<div style="font-size:1.55rem; font-weight:800; color:var(--color-success);">' + st.totalLessonsDone + "</div>" +
              '<div style="font-size:0.82rem; font-weight:700; color:var(--text-secondary);">დასრულებული თემა</div>' +
            "</div>" +
          "</div>" +
        "</section>" +

        '<section class="card">' +
          '<div class="section-header" style="margin-bottom:12px;">' +
            "<div>" +
              '<h2 class="section-title">🔥 დღევანდელი სასწავლო აქტივობა</h2>' +
              '<p class="section-subtitle">შეინარჩუნეთ ყოველდღიური უწყვეტი სტრიკი — გაიარეთ იუნიტი ან ბარათები.</p>' +
            "</div>" +
            '<span class="stat-pill stat-pill--streak">🔥 სტრიკი: ' + st.streak + " დღე</span>" +
          "</div>" +
          (App.UI && typeof App.UI.renderProgressBar === "function"
            ? App.UI.renderProgressBar(dailyPct, "დღევანდელი აქტივობის პროგრესი", dailyPct + "%")
            : "") +
        "</section>" +

        '<section style="display:grid; grid-template-columns:repeat(auto-fill, minmax(290px, 1fr)); gap:18px;">' +
          moduleCardsHtml +
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
    window.setTimeout(function () {
      const hash = (window.location.hash || "").replace(/^#\/?/, "").trim();
      if (!hash || hash === "dashboard") {
        renderCleanDashboard();
      } else if (hash === "progress") {
        renderCleanProgressPage();
      } else if (hash === "learn") {
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