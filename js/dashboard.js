(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'დილა მშვიდობისა';
    if (hour < 18) return 'შუადღე მშვიდობისა';
    return 'საღამო მშვიდობისა';
  }

  function formatRelativeTime(isoString) {
    if (!isoString) return 'ახლახან';
    const diffSec = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
    if (diffSec < 60) return 'ახლახან';
    if (diffSec < 3600) return Math.floor(diffSec / 60) + ' წთ წინ';
    if (diffSec < 86400) return Math.floor(diffSec / 3600) + ' სთ წინ';
    return new Date(isoString).toLocaleDateString('ka-GE');
  }

  const Dashboard = {
    render: function () {
      const container = document.getElementById('app-view');
      if (!container) return;

      const state = App.Storage.getState();
      const settings = state.settings;
      const prog = state.progress;
      const streak = state.streak;

      const currentLevelCode = settings.cefrLevel || 'A1';
      const levels = (App.Config && App.Config.cefrLevels) || [];
      const currentLevelObj = levels.find((l) => l.code === currentLevelCode) || {
        code: currentLevelCode,
        name: 'დამწყები',
        summary: 'ყოველდღიური მარტივი გამონათქვამებისა და საბაზისო ფრაზების გაგება და გამოყენება.'
      };

      const dailyGoal = Number(settings.dailyGoalXP) || 20;
      const dailyXP = Number(prog.dailyXP) || 0;
      const dailyPercent = Math.min(100, Math.round((dailyXP / dailyGoal) * 100));
      const levelPercent = Number(prog.levelProgress[currentLevelCode]) || 0;

      const cefrButtonsHtml = levels.map((lvl) => {
        const isActive = lvl.code === currentLevelCode;
        return (
          '<button type="button" class="cefr-btn ' + (isActive ? 'active' : '') + '" ' +
            'data-cefr-select="' + App.UI.escapeHTML(lvl.code) + '" ' +
            'aria-pressed="' + (isActive ? 'true' : 'false') + '">' +
            '<span class="cefr-code">' + App.UI.escapeHTML(lvl.code) + '</span>' +
            '<span class="cefr-name">' + App.UI.escapeHTML(lvl.name) + '</span>' +
          '</button>'
        );
      }).join('');

      const allModules = (App.Config && App.Config.modules) || [];
      const learningModules = allModules.filter(
        (m) => m.id !== 'dashboard' && m.id !== 'settings' && m.id !== 'progress'
      );

      const quickCardsHtml = learningModules.map((mod) => {
        return (
          '<button type="button" class="card card-interactive module-card" data-route-link="' + App.UI.escapeHTML(mod.id) + '">' +
            '<div>' +
              '<div class="module-card-top">' +
                '<div class="module-icon">' + App.UI.getIcon(mod.id) + '</div>' +
                '<span class="phase-tag">ფაზა ' + App.UI.escapeHTML(mod.phase) + '</span>' +
              '</div>' +
              '<div style="margin-top: 14px;">' +
                '<div class="module-card-title">' + App.UI.escapeHTML(mod.title) + '</div>' +
                '<p class="module-card-desc">' + App.UI.escapeHTML(mod.description) + '</p>' +
              '</div>' +
            '</div>' +
            '<div class="module-card-footer">' +
              '<span>გახსნა: ' + App.UI.escapeHTML(mod.title) + '</span>' +
              '<span aria-hidden="true">&rarr;</span>' +
            '</div>' +
          '</button>'
        );
      }).join('');

      const activities = Array.isArray(state.recentActivity) ? state.recentActivity : [];
      const activityHtml = activities.length > 0
        ? activities.map((act) => {
            return (
              '<li class="activity-item">' +
                '<div class="activity-left">' +
                  '<span class="activity-dot" aria-hidden="true"></span>' +
                  '<div>' +
                    '<div class="activity-title">' + App.UI.escapeHTML(act.title) + '</div>' +
                    '<div class="activity-time">' +
                      App.UI.escapeHTML(act.category || 'აქტივობა') + ' &bull; ' +
                      App.UI.escapeHTML(formatRelativeTime(act.timestamp)) +
                      (act.isDemo ? ' (ფაზა 1 — საწყისი ჩანაწერი)' : '') +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<span class="activity-badge">+' + (Number(act.xp) || 0) + ' XP</span>' +
              '</li>'
            );
          }).join('')
        : '<li class="activity-item"><div class="activity-title">ჯერ აქტივობა არ დაფიქსირებულა.</div></li>';

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="hero-banner" aria-label="მისალმების ბანერი">' +
            '<div class="hero-content">' +
              '<div class="hero-eyebrow">' +
                '' +
              '</div>' +
              '<h2 class="hero-title">' +
                App.UI.escapeHTML(getGreeting()) + ', ' + App.UI.escapeHTML(settings.userName || 'მოსწავლე') + '!' +
              '</h2>' +
              '<p class="hero-subtitle">' +
                'თქვენი მიმდინარე საფეხურია: <strong>CEFR დონე ' + App.UI.escapeHTML(currentLevelObj.code) +
                ' (' + App.UI.escapeHTML(currentLevelObj.name) + ')</strong>. ' +
                App.UI.escapeHTML(currentLevelObj.summary) +
              '</p>' +
              '<div class="hero-actions">' +
                '<button type="button" class="btn btn-hero-primary" data-route-link="learn">' +
                  'სწავლის გაგრძელება (' + App.UI.escapeHTML(currentLevelObj.code) + ')' +
                '</button>' +
                '<button type="button" class="btn btn-hero-secondary" id="simulate-activity-btn">' +
                  'სისტემის ტესტი ()' +
                '</button>' +
              '</div>' +
            '</div>' +

            '<div class="hero-goal-card">' +
              '<div class="hero-goal-title">დღიური მიზნის პროგრესი</div>' +
              '<div class="hero-goal-Numbers">' + dailyXP + ' / ' + dailyGoal + ' XP</div>' +
              App.UI.renderProgressBar(dailyPercent, 'დღიური სამიზნე', dailyPercent + '%', 'progress-fill--success') +
              '<p style="font-size: 0.78rem; margin-top: 10px; color: rgba(255,255,255,0.88);">' +
                (dailyXP >= dailyGoal
                  ? 'დღიური მიზანი შესრულებულია! შეგიძლიათ გააგრძელოთ ყოველგვარი ლიმიტის გარეშე.'
                  : 'დღიურ მიზნამდე დარჩენილია ' + (dailyGoal - dailyXP) + ' XP.') +
              '</p>' +
            '</div>' +
          '</section>' +

          '<section class="card" aria-labelledby="cefr-section-heading">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 id="cefr-section-heading" class="section-title">აირჩიეთ ინგლისური ენის დონე (CEFR)</h3>' +
                '<p class="section-subtitle">დონის შეცვლა ნებისმიერ დროს შეგიძლიათ. თითოეული დონის პროგრესი ცალ-ცალკე ინახება.</p>' +
              '</div>' +
              '<span class="stat-pill stat-pill--level">' +
                App.UI.escapeHTML(currentLevelObj.code) + ' — ' + App.UI.escapeHTML(currentLevelObj.name) +
              '</span>' +
            '</div>' +
            App.UI.renderProgressBar(
              levelPercent,
              currentLevelObj.code + ' დონის ათვისების პროგრესი',
              levelPercent + '%'
            ) +
            '<div class="cefr-strip" role="group" aria-label="CEFR დონის ამრჩევი">' +
              cefrButtonsHtml +
            '</div>' +
          '</section>' +

          '<section class="stats-grid" aria-label="ძირითადი სტატისტიკა">' +
            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--xp">' + App.UI.getIcon('bolt') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">ჯამური XP</div>' +
                '<div class="stat-value">' + (prog.xp || 0) + '</div>' +
                '<div class="stat-meta">ულიმიტო ქულების სისტემა</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--streak">' + App.UI.getIcon('flame') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">უწყვეტი სერია</div>' +
                '<div class="stat-value">' + (streak.current || 0) + ' დღე</div>' +
                '<div class="stat-meta">რეკორდი: ' + (streak.longest || 0) + ' დღე</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--lessons">' + App.UI.getIcon('learn') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">დასრულებული გაკვეთილები</div>' +
                '<div class="stat-value">' + (prog.lessonsCompleted || 0) + '</div>' +
                '<div class="stat-meta">აქტიური დონე: ' + App.UI.escapeHTML(currentLevelCode) + '</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--vocab">' + App.UI.getIcon('vocabulary') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">ნასწავლი სიტყვები</div>' +
                '<div class="stat-value">' + (prog.vocabularyLearned || 0) + '</div>' +
                '<div class="stat-meta">სიტყვა პირად ლექსიკონში</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--quiz">' + App.UI.getIcon('quizzes') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">ტესტების საშუალო ქულა</div>' +
                '<div class="stat-value">' + (prog.quizAverage || 0) + '%</div>' +
                '<div class="stat-meta">გულებისა და შეზღუდვების გარეშე</div>' +
              '</div>' +
            '</div>' +

            '<div class="card stat-card">' +
              '<div class="stat-icon-box stat-icon-box--overall">' + App.UI.getIcon('progress') + '</div>' +
              '<div class="stat-info">' +
                '<div class="stat-label">საერთო პროგრესი</div>' +
                '<div class="stat-value">' + (prog.overallPercent || 0) + '%</div>' +
                '<div class="stat-meta">A1-დან C2-ის ჩათვლით</div>' +
              '</div>' +
            '</div>' +
          '</section>' +

          '<section aria-labelledby="quick-access-heading">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 id="quick-access-heading" class="section-title">სასწავლო მოდულები (სწრაფი გადასვლა)</h3>' +
                '<p class="section-subtitle">ყველა ძირითადი უნარი ერთ სივრცეში. სასწავლო მასალა ეტაპობრივად დაემატება მე-2–მე-5 ფაზებში.</p>' +
              '</div>' +
            '</div>' +
            '<div class="quick-grid">' +
              quickCardsHtml +
            '</div>' +
          '</section>' +

          '<section class="card" aria-labelledby="recent-activity-heading">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 id="recent-activity-heading" class="section-title">ბოლო აქტივობა</h3>' +
                '<p class="section-subtitle">თქვენი ბოლო მოქმედებების ისტორია ბრაუზერის LocalStorage მეხსიერებიდან.</p>' +
              '</div>' +
              '<button type="button" class="btn btn-outline btn-sm" data-route-link="progress">სრული პროგრესის ნახვა</button>' +
            '</div>' +
            '<ul class="activity-list">' +
              activityHtml +
            '</ul>' +
          '</section>' +
        '</div>';

      this.bindEvents(container);
    },

    bindEvents: function (container) {
      const cefrBtns = container.querySelectorAll('[data-cefr-select]');
      cefrBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const level = btn.getAttribute('data-cefr-select');
          App.Storage.set('settings.cefrLevel', level);
          App.UI.updateTopbarStats();
          App.UI.playSound('click');
          App.UI.toast('არჩეულია CEFR დონე: ' + level + '.', 'success');
          this.render();
        });
      });

      const simBtn = container.querySelector('#simulate-activity-btn');
      if (simBtn) {
        simBtn.addEventListener('click', () => {
          const currentLevel = App.Storage.get('settings.cefrLevel', 'A1');
          App.Progress.recordActivity({
            xp: 10,
            title: 'შესრულდა ფაზა 1-ის სატესტო აქტივობა (დონე ' + currentLevel + ')',
            category: 'სისტემის ტესტი',
            metricKey: 'lessonsCompleted'
          });
          App.UI.playSound('success');
          App.UI.toast('დაგერიცხათ ! პროგრესი და სერია შეინახა LocalStorage-ში.', 'success');
          this.render();
        });
      }
    }
  };

  App.Dashboard = Dashboard;
})(window);