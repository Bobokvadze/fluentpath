(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  const ICONS = {
    dashboard: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
    learn: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    vocabulary: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    grammar: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    reading: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    listening: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    speaking: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    writing: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    flashcards: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="12" x2="14" y2="12"/></svg>',
    quizzes: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    progress: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    settings: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    more: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2c1.5 3.5 4 5.5 4 9a4 4 0 1 1-8 0c0-1.5.5-3 1.5-4.5-.5 2 1 3 1 3C10.5 7 11 4.5 12 2zm0 18a6 6 0 0 0 6-6c0-3-2-5.5-3.5-7.5-.2 1.5-1 2.5-2 3-.2-2.5-1.5-4.5-3-6.5C7 6 6 9.5 6 14a6 6 0 0 0 6 6z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
  };

  let activeModalConfirmCallback = null;

  const UI = {
    escapeHTML: function (str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    getIcon: function (name) {
      return ICONS[name] || ICONS.dashboard;
    },

    playSound: function (type) {
      const soundEnabled = App.Storage ? App.Storage.get('settings.soundEnabled', true) : true;
      if (!soundEnabled) return;

      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;
        if (type === 'success') {
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.08);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
          osc.start(now);
          osc.stop(now + 0.24);
        } else {
          osc.frequency.setValueAtTime(440, now);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
        }
      } catch (e) {}
    },

    applyTheme: function (theme) {
      const validTheme = theme === 'dark' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', validTheme);
      const themeBtn = document.getElementById('topbar-theme-btn');
      if (themeBtn) {
        themeBtn.innerHTML = validTheme === 'dark' ? this.getIcon('sun') : this.getIcon('moon');
        themeBtn.setAttribute(
          'aria-label',
          validTheme === 'dark' ? 'ნათელ თემაზე გადართვა' : 'მუქ თემაზე გადართვა'
        );
        themeBtn.setAttribute(
          'title',
          validTheme === 'dark' ? 'ნათელ თემაზე გადართვა' : 'მუქ თემაზე გადართვა'
        );
      }
    },

    toggleTheme: function () {
      const current = App.Storage.get('settings.theme', 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      App.Storage.set('settings.theme', next);
      this.applyTheme(next);
      this.playSound('click');
      this.toast('ჩაირთო ' + (next === 'dark' ? 'მუქი' : 'ნათელი') + ' თემა.', 'info');

      if (App.Router && App.Router.currentRoute === 'settings' && App.Settings) {
        App.Settings.render();
      }
    },

    toast: function (message, type, duration) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const variant = type || 'info';
      const timeout = duration || 3500;

      const toastEl = document.createElement('div');
      toastEl.className = 'toast toast--' + variant;
      toastEl.setAttribute('role', 'status');

      toastEl.innerHTML =
        '<span class="toast-message">' + this.escapeHTML(message) + '</span>' +
        '<button type="button" class="toast-close" aria-label="შეტყობინების დახურვა">&times;</button>';

      const closeBtn = toastEl.querySelector('.toast-close');
      const removeToast = function () {
        if (toastEl.parentNode) {
          toastEl.parentNode.removeChild(toastEl);
        }
      };

      closeBtn.addEventListener('click', removeToast);
      container.appendChild(toastEl);

      window.setTimeout(removeToast, timeout);
    },

    openModal: function (options) {
      const backdrop = document.getElementById('modal-backdrop');
      const titleEl = document.getElementById('modal-title');
      const bodyEl = document.getElementById('modal-body');
      const confirmBtn = document.getElementById('modal-confirm-btn');
      const cancelBtn = document.getElementById('modal-cancel-btn');

      if (!backdrop || !titleEl || !bodyEl || !confirmBtn || !cancelBtn) return;

      titleEl.textContent = options.title || 'შეტყობინება';
      bodyEl.innerHTML = options.htmlContent || '<p>' + this.escapeHTML(options.message || '') + '</p>';

      confirmBtn.textContent = options.confirmText || 'დადასტურება';
      confirmBtn.className = 'btn ' + (options.variant === 'danger' ? 'btn-danger' : 'btn-primary');

      if (options.hideCancel) {
        cancelBtn.style.display = 'none';
      } else {
        cancelBtn.style.display = 'inline-flex';
        cancelBtn.textContent = options.cancelText || 'გაუქმება';
      }

      activeModalConfirmCallback = typeof options.onConfirm === 'function' ? options.onConfirm : null;

      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      confirmBtn.focus();
    },

    closeModal: function () {
      const backdrop = document.getElementById('modal-backdrop');
      if (!backdrop) return;
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      activeModalConfirmCallback = null;
    },

    initModalEvents: function () {
      const backdrop = document.getElementById('modal-backdrop');
      const confirmBtn = document.getElementById('modal-confirm-btn');
      const cancelBtn = document.getElementById('modal-cancel-btn');
      const closeBtn = document.getElementById('modal-close-btn');

      if (!backdrop) return;

      confirmBtn.addEventListener('click', () => {
        const cb = activeModalConfirmCallback;
        this.closeModal();
        if (cb) cb();
      });

      cancelBtn.addEventListener('click', () => this.closeModal());
      closeBtn.addEventListener('click', () => this.closeModal());

      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.closeModal();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && backdrop.classList.contains('open')) {
          this.closeModal();
        }
      });
    },

    renderProgressBar: function (percent, labelLeft, labelRight, variantClass) {
      const safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
      const fillClass = variantClass ? 'progress-fill ' + variantClass : 'progress-fill';
      return (
        '<div class="progress-wrapper">' +
          (labelLeft || labelRight
            ? '<div class="progress-header">' +
                '<span>' + this.escapeHTML(labelLeft || '') + '</span>' +
                '<span>' + this.escapeHTML(labelRight || (safePercent + '%')) + '</span>' +
              '</div>'
            : '') +
          '<div class="progress-track" role="progressbar" aria-valuenow="' + safePercent + '" aria-valuemin="0" aria-valuemax="100">' +
            '<div class="' + fillClass + '" style="width: ' + safePercent + '%;"></div>' +
          '</div>' +
        '</div>'
      );
    },

    showLoading: function (container, message) {
      if (!container) return;
      container.innerHTML =
        '<div class="loading-state" role="status" aria-live="polite">' +
          '<div class="spinner"></div>' +
          '<p>' + this.escapeHTML(message || 'მოდული იტვირთება...') + '</p>' +
        '</div>';
    },

    renderModuleEmptyState: function (moduleConfig) {
      const state = App.Storage.getState();
      const currentLevel = state.settings.cefrLevel || 'A1';
      const iconSvg = this.getIcon(moduleConfig.id);

      return (
        '<section class="card empty-state-card" aria-labelledby="empty-module-title">' +
          '<div class="empty-state-icon">' + iconSvg + '</div>' +
          '<div><span class="empty-state-badge">დაგეგმილია ფაზა ' + this.escapeHTML(moduleConfig.phase) + '-ისთვის</span></div>' +
          '<h2 id="empty-module-title" class="empty-state-title">' +
            'მოდული: ' + this.escapeHTML(moduleConfig.title) + ' (' + this.escapeHTML(currentLevel) + ')' +
          '</h2>' +
          '<p class="empty-state-desc">' +
            this.escapeHTML(moduleConfig.description) +
            ' ეს სასწავლო მოდული სრულად დაემატება მე-' + this.escapeHTML(moduleConfig.phase) +
            ' ფაზაში, უკვე აწყობილი საძირკვლის ბაზაზე.' +
          '</p>' +
          '<div class="empty-state-meta">' +
            '<strong>სისტემური მზადყოფნა:</strong> ნავიგაცია, CEFR დონის ფილტრი (მიმდინარე: <strong>' +
            this.escapeHTML(currentLevel) + '</strong>) და LocalStorage-ის პროგრესის საცავი მოდულისთვის <strong>«' +
            this.escapeHTML(moduleConfig.title) + '»</strong> სრულად დაკავშირებულია.' +
          '</div>' +
          '<div class="empty-state-actions">' +
            '<button type="button" class="btn btn-primary" data-route-link="dashboard">' +
              'მთავარ გვერდზე დაბრუნება' +
            '</button>' +
            '<button type="button" class="btn btn-outline" id="preview-module-architecture-btn" data-module-id="' + this.escapeHTML(moduleConfig.id) + '">' +
              'მოდულის სტატუსის ნახვა' +
            '</button>' +
          '</div>' +
        '</section>'
      );
    },

    updateTopbarStats: function () {
      const state = App.Storage.getState();
      const levelEl = document.getElementById('topbar-level-value');
      const streakEl = document.getElementById('topbar-streak-value');
      const xpEl = document.getElementById('topbar-xp-value');

      const settings = state.settings || {};
      const progress = state.progress || {};

      if (levelEl) levelEl.textContent = progress.level || settings.cefrLevel || 'A1';
      if (streakEl) streakEl.textContent = progress.streak || (state.streak && state.streak.current) || 0;
      if (xpEl) xpEl.textContent = progress.xp || 0;

      // streak-only-ui.js ცვლის ჰედერის ბეიჯებს — მისი სინქრონიზაციაც გამოვიძახოთ
      if (App.Progress && typeof App.Progress.syncHeaderStats === 'function') {
        App.Progress.syncHeaderStats();
      }
    }
  };

  App.UI = UI;
})(window);