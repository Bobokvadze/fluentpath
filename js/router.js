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

  // დიდი შინაარსის პაკეტები იტვირთება მოთხოვნისამებრ (sw.js მაინც წინასწარ ქეშავს ყველას ოფლაინისთვის)
  const DATA_PACKS = {
    vocabulary: ['js/content/vocab-a1.js', 'js/content/vocab-a2.js', 'js/content/vocab-b1.js', 'js/content/vocab-b2.js', 'js/content/vocab-c1.js', 'js/content/vocab-legacy-ids.js', 'js/vocabulary.js'],
    learn: ['js/learn.js'],
    grammar: ['js/grammar-a.js', 'js/grammar-b.js', 'js/grammar-c.js', 'js/content/grammar-en-a.js', 'js/content/grammar-en-b.js', 'js/content/grammar-en-c.js'],
    reading: ['js/reading-a.js', 'js/reading-b.js', 'js/reading-c.js'],
    listening: ['js/listening-a.js', 'js/listening-b.js', 'js/listening-c1a.js', 'js/listening-c1b.js', 'js/listening-c1c.js', 'js/listening-c.js'],
    writing: ['js/content/writing-en.js', 'js/writing-a.js', 'js/writing-b.js', 'js/writing-c.js'],
    ipa: ['js/ipa-dict.js']
  };

  // რომელ გვერდს რომელი პაკეტები სჭირდება რენდერამდე
  const ROUTE_DATA = {
    learn: ['vocabulary', 'learn'],
    grammar: ['grammar'],
    reading: ['reading'],
    listening: ['listening'],
    writing: ['writing'],
    vocabulary: ['vocabulary', 'ipa'],
    flashcards: ['vocabulary', 'ipa'],
    quizzes: ['vocabulary', 'grammar', 'reading', 'listening', 'writing', 'ipa']
  };

  const scriptPromises = {};
  const loadedScripts = {};

  function loadScriptOnce(src) {
    if (scriptPromises[src]) return scriptPromises[src];
    scriptPromises[src] = new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.src = src;
      el.async = false; // ჩასმის რიგითობა შენარჩუნდეს
      el.onload = () => {
        loadedScripts[src] = true;
        resolve();
      };
      el.onerror = () => {
        // შეცდომისას ვშლით, რომ ხელახალი ცდა შესაძლებელი იყოს
        delete scriptPromises[src];
        el.remove();
        reject(new Error('ვერ ჩაიტვირთა: ' + src));
      };
      document.head.appendChild(el);
    });
    return scriptPromises[src];
  }

  function packNames(names) {
    return (Array.isArray(names) ? names : [names]).filter((n) => DATA_PACKS[n]);
  }

  // App.loadModuleData('grammar') ან App.loadModuleData(['grammar', 'reading']) → Promise
  App.loadModuleData = function (names) {
    const srcs = [];
    packNames(names).forEach((n) => { srcs.push.apply(srcs, DATA_PACKS[n]); });
    return Promise.all(srcs.map(loadScriptOnce)).then(() => undefined);
  };

  App.isModuleDataLoaded = function (names) {
    return packNames(names).every((n) => DATA_PACKS[n].every((src) => loadedScripts[src]));
  };

  let renderToken = 0;

  // სასწავლო გეგმიდან კონკრეტული მასალის გახსნა: მოდული ჩატვირთვის შემდეგ თავად "აიღებს" მოთხოვნას
  let pendingOpen = null;
  App.openContent = function (module, id) {
    pendingOpen = { module: module, id: id };
    if ((window.location.hash || '').replace(/^#\/?/, '') === module) {
      App.Router.handleRoute();
    } else {
      window.location.hash = module;
    }
  };
  App.takePendingOpen = function (module) {
    if (pendingOpen && pendingOpen.module === module) {
      const id = pendingOpen.id;
      pendingOpen = null;
      return id;
    }
    return null;
  };

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

      const VIEW_MODULES = {
        dashboard: 'Dashboard',
        learn: 'Learn',
        vocabulary: 'Vocabulary',
        grammar: 'Grammar',
        reading: 'Reading',
        listening: 'Listening',
        speaking: 'Speaking',
        writing: 'Writing',
        flashcards: 'Flashcards',
        quizzes: 'Quizzes',
        progress: 'Progress',
        settings: 'Settings'
      };
      const token = ++renderToken;
      const draw = () => {
        const mod = App[VIEW_MODULES[routeId]];
        if (mod && typeof mod.render === 'function') {
          mod.render();
        } else {
          const modConfig = this.getModuleConfig(routeId);
          container.innerHTML = App.UI.renderModuleEmptyState(modConfig);
        }
      };

      const packs = ROUTE_DATA[routeId] || [];
      if (App.isModuleDataLoaded(packs)) {
        draw();
        return Promise.resolve();
      }

      App.UI.showLoading(container);
      return App.loadModuleData(packs).then(() => {
        // სანამ იტვირთებოდა, მომხმარებელი შეიძლება სხვა გვერდზე გადავიდა
        if (token === renderToken) draw();
      }, (err) => {
        if (token !== renderToken) return;
        console.warn(err);
        container.innerHTML =
          '<div class="loading-state" role="alert">' +
            '<p>მასალა ვერ ჩაიტვირთა. შეამოწმეთ ინტერნეტთან კავშირი.</p>' +
            '<button type="button" class="btn btn-primary" id="route-data-retry-btn">თავიდან ცდა</button>' +
          '</div>';
        const retryBtn = document.getElementById('route-data-retry-btn');
        if (retryBtn) retryBtn.addEventListener('click', () => this.renderView(routeId));
      });
    },

    // ხელახლა ხატავს მიმდინარე გვერდს (მაგ. ღრუბლიდან მონაცემების ჩატვირთვის შემდეგ)
    handleRoute: function () {
      this.updateActiveNav(this.currentRoute);
      this.renderView(this.currentRoute);
    },

    openMobileDrawer: function () {
      const backdrop = document.getElementById('mobile-drawer-backdrop');
      const moreBtn = document.getElementById('mobile-more-btn');
      if (!backdrop) return;
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      if (moreBtn) moreBtn.setAttribute('aria-expanded', 'true');
      if (this._releaseDrawerFocus) this._releaseDrawerFocus();
      this._releaseDrawerFocus = App.UI.trapFocus(backdrop);
      const firstItem = backdrop.querySelector('.drawer-nav-item, button');
      if (firstItem) firstItem.focus();
    },

    closeMobileDrawer: function () {
      const backdrop = document.getElementById('mobile-drawer-backdrop');
      const moreBtn = document.getElementById('mobile-more-btn');
      if (!backdrop) return;
      const wasOpen = backdrop.classList.contains('open');
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      if (moreBtn) moreBtn.setAttribute('aria-expanded', 'false');
      if (wasOpen && this._releaseDrawerFocus) {
        this._releaseDrawerFocus();
        this._releaseDrawerFocus = null;
      }
    }
  };

  App.Router = Router;
})(window);