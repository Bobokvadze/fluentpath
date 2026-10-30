/**
 * DASHBOARD.JS — მთავარი გვერდი: მისალმება, დღიური მიზანი, სტატისტიკა და მოდულები
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  // დღეს შესრულებული აქტივობების რაოდენობა (ადგილობრივი თარიღით)
  function countTodayActivities() {
    const activities = App.Storage.get("progress.recentActivities", []) || [];
    const today = new Date().toDateString();
    return activities.filter(function (a) {
      return a && a.timestamp && new Date(a.timestamp).toDateString() === today;
    }).length;
  }

  function renderDashboard() {
    const container = document.getElementById("app-view");
    if (!container) return;

    const esc = App.UI.escapeHTML;
    const st = App.Progress.getStatsSummary();
    const speakingDone = (App.Storage.get("progress.completedSpeakingIds", []) || []).length;
    const speakingTotal = (App.Speaking && typeof App.Speaking.getTotalPhrases === "function") ? App.Speaking.getTotalPhrases() : 120;
    const isNewLearner = st.totalLessonsDone === 0 && st.wordsCount === 0 && !(App.Storage.get("progress.recentActivities", []) || []).length;
    const dueCount = (App.Flashcards && typeof App.Flashcards.getDueWordIds === "function") ? App.Flashcards.getDueWordIds().length : 0;
    const dailyTarget = Math.max(1, Number(App.Storage.get("settings.dailyGoalActivities", 5)) || 5);
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
      { route: "speaking", icon: "🎙️", tone: "rose", title: "საუბარი", count: speakingDone + " / " + speakingTotal, pct: pct(speakingDone, speakingTotal), desc: "გამოთქმის ვარჯიში სიტყვა-სიტყვით შეფასებით." },
      { route: "writing", icon: "✍️", tone: "orange", title: "წერა", count: st.writingDone + " / 90", pct: pct(st.writingDone, 90), desc: "წერითი ნიმუშები, შაბლონები და დავალებები." },
      { route: "flashcards", icon: "🎴", tone: "indigo", title: "ბარათები", count: dueCount ? dueCount + " გასამეორებელი" : "5 ყუთი", pct: pct(st.wordsCount, 500), desc: "სიტყვების გამეორება ინტერვალური სისტემით." },
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
              (isNewLearner
                ? '<a href="#quizzes" class="btn fp-btn-ghost-light" data-start-placement>🧭 დონის განსაზღვრა (24 კითხვა)</a>'
                : dueCount
                ? '<a href="#flashcards" class="btn fp-btn-ghost-light" data-start-due-review>🔁 დღის გამეორება (' + dueCount + ")</a>"
                : '<a href="#flashcards" class="btn fp-btn-ghost-light">🎴 ბარათებით ვარჯიში</a>') +
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

    const placementBtn = container.querySelector("[data-start-placement]");
    if (placementBtn) {
      placementBtn.addEventListener("click", function () {
        if (App.Quizzes && typeof App.Quizzes.requestPlacement === "function") App.Quizzes.requestPlacement();
      });
    }

    const dueBtn = container.querySelector("[data-start-due-review]");
    if (dueBtn) {
      dueBtn.addEventListener("click", function () {
        App.Flashcards.startDueReview();
      });
    }
  }

  App.Dashboard = {
    render: renderDashboard,
    countTodayActivities: countTodayActivities
  };
})(window);
