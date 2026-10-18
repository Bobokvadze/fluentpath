(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  const VALID_ROUTES = [
    'dashboard',
    'learn',
    'vocabulary',
    'grammar',
    'reading',
    'listening',
    'speaking',
    'writing',
    'flashcards',
    'quizzes',
    'progress',
    'settings'
  ];

  const Router = {
    currentRoute: 'dashboard',

    init: function () {
      window.addEventListener('hashchange', () => {
        const hashRoute = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
        this.navigate(hashRoute || 'dashboard', false);
      });

      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-route-link]');
        if (trigger) {
          e.preventDefault();
          const targetRoute = trigger.getAttribute('data-route-link');
          this.closeMobileDrawer();
          this.navigate(targetRoute, true);
        }

        const previewBtn = e.target.closest('#preview-module-architecture-btn');
        if (previewBtn) {
          const modId = previewBtn.getAttribute('data-module-id');
          const modObj = this.getModuleConfig(modId);
          const state = App.Storage.getState();
          App.UI.openModal({
            title: modObj.title + ' — ფაზა ' + modObj.phase + '-ის არქიტექტურა',
            htmlContent:
              '<p style="margin-bottom: 12px;">' + App.UI.escapeHTML(modObj.description) + '</p>' +
              '<ul style="font-size: 0.88rem; display: flex; flex-direction: column; gap: 6px;">' +
                '<li><strong>აქტიური CEFR დონე:</strong> ' + App.UI.escapeHTML(state.settings.cefrLevel) + '</li>' +
                '<li><strong>მონაცემთა საცავი:</strong> მიბმულია <code>fluentpath_app_state_v1</code>-ზე</li>' +
                '<li><strong>ოფლაინ მხარდაჭერა:</strong> ქეშირებულია Service Worker-ით</li>' +
                '<li><strong>განვითარების გეგმა:</strong> სრული ინტერაქტიული მასალა დაემატება მე-' + App.UI.escapeHTML(modObj.phase) + ' ფაზაში.</li>' +
              '</ul>',
            confirmText: 'გასაგებია',
            hideCancel: true
          });
        }
      });

      const initialHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
      this.navigate(VALID_ROUTES.indexOf(initialHash) !== -1 ? initialHash : 'dashboard', false);
    },

    getModuleConfig: function (routeId) {
      const modules = (App.Config && App.Config.modules) || [];
      return modules.find((m) => m.id === routeId) || {
        id: routeId,
        title: routeId,
        phase: 3,
        description: 'ინტერაქტიული ინგლისურის სასწავლო მოდული.'
      };
    },

    navigate: function (routeId, updateHash) {
      const target = VALID_ROUTES.indexOf(routeId) !== -1 ? routeId : 'dashboard';
      this.currentRoute = target;

      if (updateHash) {
        window.location.hash = target;
      }

      this.updateActiveNav(target);
      this.renderView(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    updateActiveNav: function (routeId) {
      const modConfig = this.getModuleConfig(routeId);
      const pageTitleEl = document.getElementById('topbar-page-title');
      if (pageTitleEl) {
        pageTitleEl.textContent = modConfig.title;
      }

      const allNavLinks = document.querySelectorAll('[data-route-link]');
      allNavLinks.forEach((el) => {
        if (el.classList.contains('nav-item') || el.classList.contains('mobile-nav-btn') || el.classList.contains('drawer-nav-item')) {
          const linkRoute = el.getAttribute('data-route-link');
          if (linkRoute === routeId) {
            el.classList.add('active');
            el.setAttribute('aria-current', 'page');
          } else {
            el.classList.remove('active');
            el.removeAttribute('aria-current');
          }
        }
      });

      const primaryMobileRoutes = ['dashboard', 'learn', 'vocabulary', 'progress'];
      const moreBtn = document.getElementById('mobile-more-btn');
      if (moreBtn) {
        if (primaryMobileRoutes.indexOf(routeId) === -1) {
          moreBtn.classList.add('active');
        } else {
          moreBtn.classList.remove('active');
        }
      }
    },

    renderView: function (routeId) {
      const container = document.getElementById('app-view');
      if (!container) return;

      if (routeId === 'dashboard') {
        App.Dashboard.render();
      } else if (routeId === 'learn' && App.Learn) {
        App.Learn.render();
      } else if (routeId === 'vocabulary' && App.Vocabulary) {
        App.Vocabulary.render();
      } else if (routeId === 'grammar' && App.Grammar) {
        App.Grammar.render();
      } else if (routeId === 'reading' && App.Reading) {
        App.Reading.render();
      } else if (routeId === 'progress') {
        App.Progress.render();
      } else if (routeId === 'settings') {
        App.Settings.render();
      } else {
        const modConfig = this.getModuleConfig(routeId);
        container.innerHTML = App.UI.renderModuleEmptyState(modConfig);
      }
    },

    openMobileDrawer: function () {
      const backdrop = document.getElementById('mobile-drawer-backdrop');
      const moreBtn = document.getElementById('mobile-more-btn');
      if (!backdrop) return;
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      if (moreBtn) moreBtn.setAttribute('aria-expanded', 'true');
    },

    closeMobileDrawer: function () {
      const backdrop = document.getElementById('mobile-drawer-backdrop');
      const moreBtn = document.getElementById('mobile-more-btn');
      if (!backdrop) return;
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      if (moreBtn) moreBtn.setAttribute('aria-expanded', 'false');
    }
  };

  App.Router = Router;
})(window);