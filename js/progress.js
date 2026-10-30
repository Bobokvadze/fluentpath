/**
 * PROGRESS.JS — აქტივობების აღრიცხვა, სტატისტიკა, პროგრესის გვერდი და ჰედერის მაჩვენებლები
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  function getStatsSummary() {
    const streak = Number(App.Storage.get("progress.streak", 0)) || 0;
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

  // სუსტი მხარეები: ტესტების უნარების სიზუსტე + გრამატიკის ყველაზე დაბალი შედეგები
  function renderWeakAreasHtml() {
    const esc = App.UI.escapeHTML;
    const skillStats = App.Storage.get("progress.skillStats", {}) || {};
    const grammarScores = App.Storage.get("progress.grammarScores", {}) || {};
    const missed = App.Storage.get("progress.quizMissedTopics", {}) || {};

    const skills = Object.keys(skillStats)
      .filter(function (k) { return skillStats[k] && skillStats[k].total >= 3; })
      .map(function (k) { return { name: k, pct: Math.round((skillStats[k].correct / skillStats[k].total) * 100), total: skillStats[k].total }; })
      .sort(function (a, b) { return a.pct - b.pct; });

    const weakGrammar = Object.keys(grammarScores)
      .map(function (id) { const g = grammarScores[id]; return { id: id, title: g.title, level: g.level, pct: g.total ? Math.round((g.score / g.total) * 100) : 0 }; })
      .filter(function (g) { return g.pct < 80; })
      .sort(function (a, b) { return a.pct - b.pct; })
      .slice(0, 5);

    const missedList = Object.keys(missed)
      .sort(function (a, b) { return missed[b] - missed[a]; })
      .slice(0, 5);

    if (!skills.length && !weakGrammar.length && !missedList.length) {
      return '<p class="section-subtitle">ჯერ საკმარისი მონაცემები არ არის. გაიარეთ რამდენიმე გრამატიკის თემა ან ტესტი და აქ გამოჩნდება, რაზე ღირს მეტი ვარჯიში.</p>';
    }

    let html = "";
    if (skills.length) {
      html += '<h4 class="fp-weak__heading">უნარების სიზუსტე ტესტებში</h4>' + skills.map(function (s) {
        const tone = s.pct >= 80 ? "progress-fill--success" : "";
        return '<div style="margin-bottom:12px;">' + App.UI.renderProgressBar(s.pct, s.name + " (" + s.total + " კითხვა)", s.pct + "%", tone) + "</div>";
      }).join("");
    }
    if (weakGrammar.length) {
      html += '<h4 class="fp-weak__heading">გრამატიკის თემები გასამეორებლად</h4><ul class="fp-weak__list">' + weakGrammar.map(function (g) {
        return '<li><span>' + esc(g.title) + ' <small>(' + esc(g.level) + ')</small></span><span class="fp-weak__score">' + g.pct + "%</span></li>";
      }).join("") + "</ul>";
    }
    if (missedList.length) {
      html += '<h4 class="fp-weak__heading">ტესტებში ხშირი შეცდომები</h4><ul class="fp-weak__list">' + missedList.map(function (t) {
        return '<li><span lang="en">' + esc(t) + '</span><span class="fp-weak__score">' + missed[t] + " შეცდ.</span></li>";
      }).join("") + "</ul>";
    }
    return html + '<a href="#grammar" class="btn btn-outline btn-sm" style="margin-top:6px;">გრამატიკაზე გადასვლა →</a>';
  }

  function renderProgressPage() {
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
          '<h3 class="section-title" style="margin-bottom:14px;">🎯 გასაძლიერებელი მხარეები</h3>' +
          renderWeakAreasHtml() +
        "</section>" +

        '<section class="card">' +
          '<h3 class="section-title" style="margin-bottom:14px;">🕒 ბოლო აქტივობები</h3>' +
          actHtml +
        "</section>" +
      "</div>";
  }

  // ჰედერის ბეიჯები: დონე და სტრიკი
  function syncHeaderStats() {
    const levelEl = document.getElementById('topbar-level-value');
    const streakEl = document.getElementById('topbar-streak-value');
    if (levelEl) levelEl.textContent = App.Storage.get('progress.level', 'A1') || 'A1';
    if (streakEl) streakEl.textContent = Number(App.Storage.get('progress.streak', 0)) || 0;
  }

  const Progress = {
    getStatsSummary: getStatsSummary,

    /**
     * ყველა მოდული იძახებს სასწავლო აქტივობის დასრულებისას: ზრდის სტრიკს (დღეში ერთხელ),
     * ამატებს ჩანაწერს ბოლო აქტივობებში და (სურვილისამებრ) ზრდის progress[metricKey]-ს.
     */
    recordActivity: function (options) {
      const opts = options || {};
      const title = opts.title || 'დასრულდა სასწავლო სესია';
      const category = opts.category || 'პრაქტიკა';

      if (typeof App.Storage.registerStudyDay === 'function') {
        App.Storage.registerStudyDay();
      }

      const state = App.Storage.getState();
      state.progress = state.progress || {};

      if (opts.metricKey && Object.prototype.hasOwnProperty.call(state.progress, opts.metricKey)) {
        state.progress[opts.metricKey] = (Number(state.progress[opts.metricKey]) || 0) + 1;
      }

      if (!Array.isArray(state.progress.recentActivities)) {
        state.progress.recentActivities = [];
      }
      state.progress.recentActivities.unshift({
        title: title,
        category: category,
        timestamp: new Date().toISOString()
      });
      state.progress.recentActivities = state.progress.recentActivities.slice(0, 50);

      App.Storage.saveState(state);
      syncHeaderStats();
      return state;
    },

    syncHeaderStats: syncHeaderStats,
    render: renderProgressPage
  };

  App.Progress = Progress;
})(window);
