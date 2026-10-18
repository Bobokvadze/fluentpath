(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  function getTodayDateString() {
    return new Date().toISOString().split('T')[0];
  }

  function getYesterdayDateString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
  }

  const Progress = {
    syncDailyState: function () {
      const state = App.Storage.getState();
      const today = getTodayDateString();
      const yesterday = getYesterdayDateString();

      if (state.progress.lastStudyDate !== today) {
        state.progress.dailyXP = 0;
        state.progress.lastStudyDate = today;
      }

      const lastActive = state.streak.lastActiveDate;
      if (lastActive && lastActive !== today && lastActive !== yesterday) {
        state.streak.current = 0;
      }

      App.Storage.saveState(state);
    },

    recordActivity: function (options) {
      const xpEarned = Number(options.xp) || 10;
      const title = options.title || 'დასრულდა სასწავლო სესია';
      const category = options.category || 'პრაქტიკა';
      const metricKey = options.metricKey || null;

      const state = App.Storage.getState();
      const today = getTodayDateString();
      const yesterday = getYesterdayDateString();

      state.progress.xp = (Number(state.progress.xp) || 0) + xpEarned;
      if (state.progress.lastStudyDate !== today) {
        state.progress.dailyXP = xpEarned;
        state.progress.lastStudyDate = today;
      } else {
        state.progress.dailyXP = (Number(state.progress.dailyXP) || 0) + xpEarned;
      }

      if (metricKey && Object.prototype.hasOwnProperty.call(state.progress, metricKey)) {
        state.progress[metricKey] = (Number(state.progress[metricKey]) || 0) + 1;
      }

      if (state.streak.lastActiveDate !== today) {
        if (state.streak.lastActiveDate === yesterday) {
          state.streak.current = (Number(state.streak.current) || 0) + 1;
        } else {
          state.streak.current = 1;
        }
        if (state.streak.current > (Number(state.streak.longest) || 0)) {
          state.streak.longest = state.streak.current;
        }
        state.streak.lastActiveDate = today;
        if (!Array.isArray(state.streak.activeDates)) {
          state.streak.activeDates = [];
        }
        if (state.streak.activeDates.indexOf(today) === -1) {
          state.streak.activeDates.push(today);
        }
      }

      const level = state.settings.cefrLevel || 'A1';
      const currentLevelPct = Number(state.progress.levelProgress[level]) || 0;
      state.progress.levelProgress[level] = Math.min(100, currentLevelPct + 2);

      const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
      const sum = levels.reduce((acc, code) => acc + (Number(state.progress.levelProgress[code]) || 0), 0);
      state.progress.overallPercent = Math.round(sum / levels.length);

      state.recentActivity = state.recentActivity.filter((item) => !item.isDemo);
      state.recentActivity.unshift({
        id: 'act-' + Date.now(),
        title: title,
        category: category,
        xp: xpEarned,
        timestamp: new Date().toISOString(),
        isDemo: false
      });
      state.recentActivity = state.recentActivity.slice(0, 10);

      App.Storage.saveState(state);
      App.UI.updateTopbarStats();
      return state;
    },

    render: function () {
      const container = document.getElementById('app-view');
      if (!container) return;

      const state = App.Storage.getState();
      const prog = state.progress;
      const streak = state.streak;
      const settings = state.settings;
      const dailyGoal = Number(settings.dailyGoalXP) || 20;
      const dailyPct = Math.min(100, Math.round(((prog.dailyXP || 0) / dailyGoal) * 100));

      const levels = (App.Config && App.Config.cefrLevels) || [
        { code: 'A1', name: 'დამწყები' },
        { code: 'A2', name: 'ელემენტარული' },
        { code: 'B1', name: 'საშუალო' },
        { code: 'B2', name: 'საშუალოზე მაღალი' },
        { code: 'C1', name: 'მაღალი' },
        { code: 'C2', name: 'სრულყოფილი' }
      ];

      const levelRowsHtml = levels.map((lvl) => {
        const pct = Number(prog.levelProgress[lvl.code]) || 0;
        return (
          '<div style="margin-bottom: 14px;">' +
            App.UI.renderProgressBar(
              pct,
              lvl.code + ' — ' + lvl.name,
              pct + '% დასრულებულია'
            ) +
          '</div>'
        );
      }).join('');

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              '<div>' +
                '<h2 class="section-title">სწავლის დეტალური პროგრესი</h2>' +
                '<p class="section-subtitle">ყველა მონაცემი ინახება ლოკალურად თქვენს ბრაუზერში, ყოველგვარი თვალთვალის გარეშე.</p>' +
              '</div>' +
              '<span class="stat-pill stat-pill--level">მიმდინარე დონე: ' + App.UI.escapeHTML(settings.cefrLevel) + '</span>' +
            '</div>' +
            App.UI.renderProgressBar(
              prog.dailyXP ? dailyPct : 0,
              'დღევანდელი მიზანი (' + (prog.dailyXP || 0) + ' / ' + dailyGoal + ' XP)',
              dailyPct + '%',
              'progress-fill--xp'
            ) +
          '</section>' +

          '<section class="stats-grid" aria-label="უნარების დეტალური სტატისტიკა">' +
            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--xp">' + App.UI.getIcon('bolt') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">დაგროვებული XP</div>' +
                '<div class="stat-value">' + (prog.xp || 0) + '</div>' +
                '<div class="stat-meta">დღეს: ' + (prog.dailyXP || 0) + ' XP</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--streak">' + App.UI.getIcon('flame') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">უწყვეტი სერია (Streak)</div>' +
                '<div class="stat-value">' + (streak.current || 0) + ' დღე</div>' +
                '<div class="stat-meta">რეკორდი: ' + (streak.longest || 0) + ' დღე</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--lessons">' + App.UI.getIcon('learn') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">დასრულებული გაკვეთილები</div>' +
                '<div class="stat-value">' + (prog.lessonsCompleted || 0) + '</div>' +
                '<div class="stat-meta">ინტერაქტიული გაკვეთილი</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--vocab">' + App.UI.getIcon('vocabulary') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">ნასწავლი სიტყვები</div>' +
                '<div class="stat-value">' + (prog.vocabularyLearned || 0) + '</div>' +
                '<div class="stat-meta">ათვისებული ლექსიკა</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--quiz">' + App.UI.getIcon('quizzes') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">ტესტების საშუალო ქულა</div>' +
                '<div class="stat-value">' + (prog.quizAverage || 0) + '%</div>' +
                '<div class="stat-meta">ჩაბარებული ტესტი: ' + ((prog.quizScores && prog.quizScores.length) || 0) + '</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--overall">' + App.UI.getIcon('reading') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">კითხვა და მოსმენა</div>' +
                '<div class="stat-value">' + ((prog.readingCompleted || 0) + (prog.listeningCompleted || 0)) + '</div>' +
                '<div class="stat-meta">კითხვა: ' + (prog.readingCompleted || 0) + ' | მოსმენა: ' + (prog.listeningCompleted || 0) + '</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--lessons">' + App.UI.getIcon('speaking') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">საუბრის სესიები</div>' +
                '<div class="stat-value">' + (prog.speakingSessions || 0) + '</div>' +
                '<div class="stat-meta">გამოთქმა და სავარჯიშოები</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--vocab">' + App.UI.getIcon('writing') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">წერის სესიები</div>' +
                '<div class="stat-value">' + (prog.writingSessions || 0) + '</div>' +
                '<div class="stat-meta">წერითი დავალებები</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--overall">' + App.UI.getIcon('progress') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">კურსის საერთო ათვისება</div>' +
                '<div class="stat-value">' + (prog.overallPercent || 0) + '%</div>' +
                '<div class="stat-meta">A1–C2 დონეების ჯამი</div>' +
              '</div>' +
            '</div>' +
          '</section>' +

          '<section class="card">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 class="section-title">პროგრესი CEFR დონეების მიხედვით (A1 – C2)</h3>' +
                '<p class="section-subtitle">აკონტროლეთ თქვენი წინსვლა ენის ცოდნის ექვსივე საერთაშორისო საფეხურზე.</p>' +
              '</div>' +
            '</div>' +
            levelRowsHtml +
          '</section>' +
        '</div>';
    }
  };

  App.Progress = Progress;
})(window);