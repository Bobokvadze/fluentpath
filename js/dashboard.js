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

  // პერსონალური რეკომენდაციები: შემდეგი გაკვეთილი, გამეორება, სუსტი გრამატიკა, ნაკლებად ნავარჯიშები უნარი
  function buildRecommendations() {
    const recs = [];
    const C = App.Curriculum;
    const idx = App.ContentIndex || {};
    const activities = App.Storage.get("progress.recentActivities", []) || [];

    const next = C ? C.next() : null;
    if (next) {
      recs.push({
        kind: "lesson", icon: C.TYPE_ICONS[next.lesson.type] || "▶️", lessonId: next.lesson.id,
        title: C.lessonTitle(next.lesson),
        reason: "შემდეგი ნაბიჯი სასწავლო გეგმაში: " + next.level.code + " · Unit " + next.unit.number + " — " + next.unit.title
      });
    }

    const due = (App.Flashcards && typeof App.Flashcards.getDueWordIds === "function") ? App.Flashcards.getDueWordIds().length : 0;
    if (due) {
      const last = activities[0];
      const away = last && last.timestamp ? Math.floor((Date.now() - new Date(last.timestamp).getTime()) / 86400000) : 0;
      recs.push({
        kind: "review", icon: "🔁", title: "Review " + due + (due === 1 ? " word" : " words"),
        reason: (away >= 3 ? "კარგია, რომ დაბრუნდით! " : "") + "დღევანდელი ინტერვალური გამეორება — ასე სიტყვები გრძელვადიან მეხსიერებაში რჩება."
      });
    }

    const scores = App.Storage.get("progress.grammarScores", {}) || {};
    const weak = Object.keys(scores)
      .map(function (id) { const g = scores[id]; return { id: id, pct: g && g.total ? Math.round((g.score / g.total) * 100) : 100 }; })
      .filter(function (g) { return g.pct < 80; })
      .sort(function (a, b) { return a.pct - b.pct; })[0];
    if (weak) {
      recs.push({
        kind: "content", module: "grammar", ref: weak.id, icon: "🌐", title: "Revise: " + ((idx.grammar && idx.grammar[weak.id]) || "grammar"),
        reason: "ბოლო შედეგი " + weak.pct + "% — გაიმეორეთ წესი და სავარჯიშოები."
      });
    }

    // უნარი, რომელიც მიმდინარე დონეზე ყველაზე ნაკლებადაა ნავარჯიშები
    if (C) {
      const level = C.state().levels.find(function (l) { return l.mode === "current"; });
      if (level) {
        const skills = ["reading", "listening", "speaking", "writing"].map(function (type) {
          const lessons = [];
          level.units.forEach(function (u) { u.lessons.forEach(function (l) { if (l.type === type) lessons.push(l); }); });
          return {
            type: type,
            done: lessons.filter(function (l) { return l.status === "done"; }).length,
            open: lessons.find(function (l) { return l.status === "available"; })
          };
        }).filter(function (sk) { return sk.open && (!next || sk.open.id !== next.lesson.id); })
          .sort(function (a, b) { return a.done - b.done; });
        if (skills.length) {
          const sk = skills[0];
          recs.push({
            kind: "lesson", icon: C.TYPE_ICONS[sk.type], lessonId: sk.open.id, title: C.lessonTitle(sk.open),
            reason: C.TYPE_LABELS[sk.type] + " — ამ დონეზე ყველაზე ნაკლებად ნავარჯიშები უნარი (" + sk.done + " გაკვეთილი)."
          });
        }
      }
    }
    return recs.slice(0, 4);
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
    const vocabTotal = Object.values((App.ContentIndex || {}).vocabTopics || {}).reduce(function (sum, topics) {
      return sum + Object.values(topics).reduce(function (a, b) { return a + b; }, 0);
    }, 0);
    const vocabLabel = vocabTotal.toLocaleString("en-US");
    const checkpoints = App.Storage.get("progress.curriculum.checkpoints", {}) || {};
    const unitsPassed = Object.keys(checkpoints).filter(function (k) { return Number(checkpoints[k]) >= 70; }).length;
    const modules = [
      { route: "learn", icon: "🌳", tone: "green", title: "სასწავლო გეგმა", count: unitsPassed + " / 25 ერთეული", pct: pct(unitsPassed, 25), desc: "A1–C1: 25 ერთეული ლექსიკით, გრამატიკით, უნარებითა და შემაჯამებელი ტესტებით." },
      { route: "vocabulary", icon: "🗂️", tone: "amber", title: "ლექსიკონი", count: st.wordsCount + " / " + vocabLabel, pct: pct(st.wordsCount, vocabTotal || 1), desc: vocabLabel + " შერჩეული სიტყვა და ფრაზა A1–C1 დონეებზე, განმარტებებითა და გამოთქმით." },
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

    const recs = buildRecommendations();
    const primary = recs.find(function (r) { return r.kind === "lesson"; });
    const recsHtml = recs.length
      ? '<section class="card" aria-labelledby="fp-recs-title">' +
          '<div class="section-header"><div><h2 class="section-title" id="fp-recs-title">რეკომენდებული დღეს</h2>' +
          '<p class="section-subtitle">თქვენი დონის, სასწავლო გეგმის, გამეორებებისა და შედეგების მიხედვით.</p></div></div>' +
          '<ul class="fp-recs">' + recs.map(function (r, i) {
            return '<li class="fp-rec"><span class="fp-rec__icon" aria-hidden="true">' + r.icon + "</span>" +
              '<div class="fp-rec__body"><div class="fp-rec__title" lang="en">' + esc(r.title) + '</div><div class="fp-rec__reason">' + esc(r.reason) + "</div></div>" +
              '<button type="button" class="btn btn-sm ' + (i === 0 ? "btn-primary" : "btn-outline") + '" data-rec="' + i + '">დაწყება</button></li>';
          }).join("") + "</ul></section>"
      : "";

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
              (primary
                ? '<button type="button" class="btn fp-btn-light" data-rec="' + recs.indexOf(primary) + '">სწავლის გაგრძელება <span aria-hidden="true">→</span></button>'
                : '<a href="#learn" class="btn fp-btn-light">სწავლის გაგრძელება <span aria-hidden="true">→</span></a>') +
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

        recsHtml +

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
        App.openContent("quizzes", "placement");
      });
    }

    container.querySelectorAll("[data-rec]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const r = recs[Number(btn.getAttribute("data-rec"))];
        if (!r) return;
        if (r.kind === "lesson") App.Curriculum.openLesson(r.lessonId);
        else if (r.kind === "review") App.Flashcards.startDueReview();
        else if (r.kind === "content") App.openContent(r.module, r.ref);
      });
    });

    const dueBtn = container.querySelector("[data-start-due-review]");
    if (dueBtn) {
      dueBtn.addEventListener("click", function () {
        App.Flashcards.startDueReview();
      });
    }
  }

  App.Dashboard = {
    render: renderDashboard,
    buildRecommendations: buildRecommendations,
    countTodayActivities: countTodayActivities
  };
})(window);
