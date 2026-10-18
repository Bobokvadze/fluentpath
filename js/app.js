(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  const FALLBACK_CONFIG = {
    appName: 'FluentPath',
    version: '1.0.0-phase3-ka',
    phase: 3,
    cefrLevels: [
      { code: 'A1', name: 'დამწყები', summary: 'ყოველდღიური მარტივი გამონათქვამებისა და საბაზისო ფრაზების გაგება და გამოყენება.' },
      { code: 'A2', name: 'ელემენტარული', summary: 'მარტივი კომუნიკაცია ყოველდღიურ თემებზე და ინფორმაციის პირდაპირი გაცვლა.' },
      { code: 'B1', name: 'საშუალო', summary: 'მოგზაურობის, სწავლის ან მუშაობის დროს წარმოქმნილ უმეტეს სიტუაციაში თავის გართმევა.' },
      { code: 'B2', name: 'საშუალოზე მაღალი', summary: 'თავისუფალი და ბუნებრივი კომუნიკაცია ინგლისურენოვან მოსაუბრეებთან.' },
      { code: 'C1', name: 'მაღალი', summary: 'აზრების თავისუფლად ჩამოყალიბება სოციალური, აკადემიური და პროფესიული მიზნებისთვის.' },
      { code: 'C2', name: 'სრულყოფილი', summary: 'ნებისმიერი სირთულის წაკითხული თუ მოსმენილი ინფორმაციის სრულყოფილი გაგება და გადმოცემა.' }
    ],
    dailyGoals: [
      { xp: 10, label: 'მსუბუქი' },
      { xp: 20, label: 'სტანდარტული' },
      { xp: 30, label: 'სერიოზული' },
      { xp: 50, label: 'ინტენსიური' }
    ],
    modules: [
      { id: 'dashboard', title: 'მთავარი', category: 'core', phase: 1, description: 'თქვენი ყოველდღიური სასწავლო პანელი და სტატისტიკის მიმოხილვა.' },
      { id: 'learn', title: 'სწავლა', category: 'study', phase: 2, description: 'ნაბიჯ-ნაბიჯ გაწერილი ინტერაქტიული გაკვეთილები CEFR დონეების მიხედვით.' },
      { id: 'vocabulary', title: 'ლექსიკონი', category: 'study', phase: 2, description: 'თემატური სიტყვების ბაზა განმარტებებით, ტრანსკრიფციითა და მაგალითებით.' },
      { id: 'grammar', title: 'გრამატიკა', category: 'study', phase: 3, description: 'მკაფიოდ ახსნილი გრამატიკული წესები, ფორმულები და პრაქტიკული სავარჯიშოები.' },
      { id: 'reading', title: 'კითხვა', category: 'skills', phase: 3, description: 'დონეების მიხედვით დახარისხებული საკითხავი ტექსტები გააზრების კითხვებით.' },
      { id: 'listening', title: 'მოსმენა', category: 'skills', phase: 4, description: 'აუდიო სავარჯიშოები და კარნახები ბრაუზერის ხმოვანი სინთეზატორის გამოყენებით.' },
      { id: 'speaking', title: 'საუბარი', category: 'skills', phase: 4, description: 'გამოთქმის ვარჯიში, ფრაზების გამეორება და სასაუბრო თემები.' },
      { id: 'writing', title: 'წერა', category: 'skills', phase: 4, description: 'წერითი დავალებები, წინადადებების აწყობა და თვითშეფასების კრიტერიუმები.' },
      { id: 'flashcards', title: 'ბარათები', category: 'practice', phase: 5, description: 'სიტყვებისა და ფრაზების სწრაფი დამახსოვრების ბარათები (Flashcards).' },
      { id: 'quizzes', title: 'ტესტები', category: 'practice', phase: 5, description: 'ულიმიტო შემაჯამებელი ტესტები დეტალური განმარტებებითა და შედეგებით.' },
      { id: 'progress', title: 'პროგრესი', category: 'core', phase: 1, description: 'თქვენი XP ქულების, უწყვეტი სერიისა და CEFR დონეების დეტალური ანალიტიკა.' },
      { id: 'settings', title: 'პარამეტრები', category: 'core', phase: 1, description: 'თემის, CEFR დონის, დღიური მიზნისა და მონაცემთა სარეზერვო ასლების მართვა.' }
    ]
  };

  async function loadConfig() {
    try {
      const response = await fetch('data/config.json');
      if (!response.ok) throw new Error('HTTP ' + response.status);
      App.Config = await response.json();
    } catch (err) {
      App.Config = FALLBACK_CONFIG;
    }
  }

  function renderNavigationMenus() {
    const sidebarNav = document.getElementById('sidebar-nav');
    const drawerGrid = document.getElementById('mobile-drawer-grid');
    const modules = (App.Config && App.Config.modules) || FALLBACK_CONFIG.modules;

    if (sidebarNav) {
      sidebarNav.innerHTML = modules.map((mod) => {
        const badgeText = mod.phase <= 3 ? 'მზადაა' : 'ფაზა ' + mod.phase;
        return (
          '<button type="button" class="nav-item" data-route-link="' + App.UI.escapeHTML(mod.id) + '">' +
            '<span class="nav-icon">' + App.UI.getIcon(mod.id) + '</span>' +
            '<span>' + App.UI.escapeHTML(mod.title) + '</span>' +
            '<span class="nav-pill">' + App.UI.escapeHTML(badgeText) + '</span>' +
          '</button>'
        );
      }).join('');
    }

    if (drawerGrid) {
      const primaryIds = ['dashboard', 'learn', 'vocabulary', 'progress'];
      const secondaryModules = modules.filter((m) => primaryIds.indexOf(m.id) === -1);
      drawerGrid.innerHTML = secondaryModules.map((mod) => {
        return (
          '<button type="button" class="drawer-nav-item" data-route-link="' + App.UI.escapeHTML(mod.id) + '">' +
            '<span class="nav-icon">' + App.UI.getIcon(mod.id) + '</span>' +
            '<span>' + App.UI.escapeHTML(mod.title) + '</span>' +
          '</button>'
        );
      }).join('');
    }
  }

  function bindGlobalShellEvents() {
    const themeBtn = document.getElementById('topbar-theme-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => App.UI.toggleTheme());
    }

    const levelPill = document.getElementById('topbar-level-pill');
    if (levelPill) {
      levelPill.addEventListener('click', () => {
        App.Router.navigate('dashboard', true);
        App.UI.toast('CEFR დონის (A1–C2) შეცვლა შეგიძლიათ მთავარ გვერდზე ან პარამეტრებში.', 'info');
      });
    }

    const moreBtn = document.getElementById('mobile-more-btn');
    const drawerCloseBtn = document.getElementById('mobile-drawer-close');
    const drawerBackdrop = document.getElementById('mobile-drawer-backdrop');

    if (moreBtn) {
      moreBtn.addEventListener('click', () => {
        if (drawerBackdrop && drawerBackdrop.classList.contains('open')) {
          App.Router.closeMobileDrawer();
        } else {
          App.Router.openMobileDrawer();
        }
      });
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', () => App.Router.closeMobileDrawer());
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', (e) => {
        if (e.target === drawerBackdrop) {
          App.Router.closeMobileDrawer();
        }
      });
    }
  }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }
  }

  async function initApp() {
    await loadConfig();

    const state = App.Storage.getState();
    App.Progress.syncDailyState();

    App.UI.applyTheme(state.settings.theme);

    renderNavigationMenus();
    App.UI.updateTopbarStats();
    App.UI.initModalEvents();
    bindGlobalShellEvents();

    App.Router.init();
    registerServiceWorker();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})(window);