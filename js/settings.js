(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  const Settings = {
    render: function () {
      const container = document.getElementById('app-view');
      if (!container) return;

      const state = App.Storage.getState();
      const settings = state.settings;
      const levels = (App.Config && App.Config.cefrLevels) || [];
      const goals = (App.Config && App.Config.dailyGoals) || [
        { xp: 10, label: 'მსუბუქი' },
        { xp: 20, label: 'სტანდარტული' },
        { xp: 30, label: 'სერიოზული' },
        { xp: 50, label: 'ინტენსიური' }
      ];

      const levelOptionsHtml = levels.map((lvl) => {
        const selected = lvl.code === settings.cefrLevel ? 'selected' : '';
        return (
          '<option value="' + App.UI.escapeHTML(lvl.code) + '" ' + selected + '>' +
            App.UI.escapeHTML(lvl.code + ' — ' + lvl.name) +
          '</option>'
        );
      }).join('');

      const goalOptionsHtml = goals.map((g) => {
        const selected = Number(g.xp) === Number(settings.dailyGoalXP) ? 'selected' : '';
        return (
          '<option value="' + g.xp + '" ' + selected + '>' +
            App.UI.escapeHTML(g.label + ' (' + g.xp + ' XP / დღეში)') +
          '</option>'
        );
      }).join('');

      const storageKB = App.Storage.getStorageSizeKB();

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card" aria-labelledby="prefs-heading">' +
            '<div class="section-header">' +
              '<div>' +
                '<h2 id="prefs-heading" class="section-title">სწავლისა და გარეგნობის პარამეტრები</h2>' +
                '<p class="section-subtitle">ყველა ცვლილება ავტომატურად ინახება თქვენი ბრაუზერის მეხსიერებაში (LocalStorage).</p>' +
              '</div>' +
            '</div>' +

            '<div class="settings-list">' +
              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<label for="setting-username" class="setting-label">მომხმარებლის სახელი</label>' +
                  '<p class="setting-desc">გამოჩნდება მთავარი გვერდის მისალმების ბანერზე.</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<input type="text" id="setting-username" class="text-input" maxlength="32" value="' + App.UI.escapeHTML(settings.userName || 'მოსწავლე') + '" />' +
                  '<button type="button" class="btn btn-outline btn-sm" id="save-username-btn">სახელის შენახვა</button>' +
                '</div>' +
              '</div>' +

              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<div class="setting-label">ფერების თემა</div>' +
                  '<p class="setting-desc">აირჩიეთ ნათელი ან თვალისთვის კომფორტული მუქი რეჟიმი.</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<div class="segmented-control" role="group" aria-label="ფერების თემა">' +
                    '<button type="button" class="segment-btn ' + (settings.theme !== 'dark' ? 'active' : '') + '" data-theme-select="light">ნათელი</button>' +
                    '<button type="button" class="segment-btn ' + (settings.theme === 'dark' ? 'active' : '') + '" data-theme-select="dark">მუქი</button>' +
                  '</div>' +
                '</div>' +
              '</div>' +

              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<label for="setting-cefr" class="setting-label">ინგლისურის მიმდინარე დონე (CEFR)</label>' +
                  '<p class="setting-desc">აირჩიეთ თქვენი შესაბამისი საფეხური (A1 დამწყებიდან C2 სრულყოფილამდე).</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<select id="setting-cefr" class="select-input">' +
                    levelOptionsHtml +
                  '</select>' +
                '</div>' +
              '</div>' +

              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<label for="setting-goal" class="setting-label">დღიური სასწავლო მიზანი</label>' +
                  '<p class="setting-desc">დაისახეთ დღიური XP სამიზნე. სწავლა მიზნის შესრულების შემდეგაც ულიმიტოა.</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<select id="setting-goal" class="select-input">' +
                    goalOptionsHtml +
                  '</select>' +
                '</div>' +
              '</div>' +

              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<div class="setting-label">ხმოვანი ეფექტები</div>' +
                  '<p class="setting-desc">მსუბუქი ხმოვანი სიგნალები მოქმედებებისა და სავარჯიშოების დასრულებისას.</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<div class="segmented-control" role="group" aria-label="ხმოვანი ეფექტები">' +
                    '<button type="button" class="segment-btn ' + (settings.soundEnabled ? 'active' : '') + '" data-sound-select="on">ჩართული</button>' +
                    '<button type="button" class="segment-btn ' + (!settings.soundEnabled ? 'active' : '') + '" data-sound-select="off">გამორთული</button>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</section>' +

          '<section class="card" aria-labelledby="data-heading">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 id="data-heading" class="section-title">მონაცემთა მართვა და სარეზერვო ასლები</h3>' +
                '<p class="section-subtitle">თქვენი პროგრესი გეკუთვნით მხოლოდ თქვენ. შეინახეთ JSON ფაილად ან აღადგინეთ ნებისმიერ დროს.</p>' +
              '</div>' +
            '</div>' +

            '<div class="settings-list">' +
              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<div class="setting-label">პროგრესის ექსპორტი (შენახვა)</div>' +
                  '<p class="setting-desc">ჩამოტვირთეთ თქვენი პარამეტრების, სერიისა და პროგრესის სრული JSON ფაილი.</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<button type="button" class="btn btn-primary btn-sm" id="export-data-btn">JSON ფაილის ჩამოტვირთვა</button>' +
                '</div>' +
              '</div>' +

              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<div class="setting-label">პროგრესის იმპორტი (აღდგენა)</div>' +
                  '<p class="setting-desc">აღადგინეთ მონაცემები ადრე შენახული FluentPath-ის JSON ფაილიდან.</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<input type="file" id="import-file-input" accept=".json,application/json" style="display: none;" />' +
                  '<button type="button" class="btn btn-outline btn-sm" id="import-data-btn">JSON ფაილის არჩევა</button>' +
                '</div>' +
              '</div>' +

              '<div class="setting-row">' +
                '<div class="setting-info">' +
                  '<div class="setting-label" style="color: var(--color-danger);">პროგრესის სრული განულება</div>' +
                  '<p class="setting-desc">წაშალეთ ყველა დაგროვებული XP, სერია და სტატისტიკა და დააბრუნეთ აპლიკაცია საწყის მდგომარეობაში.</p>' +
                '</div>' +
                '<div class="setting-control">' +
                  '<button type="button" class="btn btn-danger btn-sm" id="reset-data-btn">პროგრესის განულება</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</section>' +

          '<section class="card" aria-labelledby="about-heading">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 id="about-heading" class="section-title">პლატფორმის შესახებ — FluentPath</h3>' +
                '<p class="section-subtitle">ვერსია: ' + App.UI.escapeHTML((App.Config && App.Config.version) || '1.0.0-phase1-ka') + '</p>' +
              '</div>' +
              '<span class="stat-pill">დაკავებული მეხსიერება: ' + App.UI.escapeHTML(storageKB) + ' KB</span>' +
            '</div>' +
            '<p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 12px;">' +
              'FluentPath არის 100% უფასო, დამოუკიდებელი ინგლისური ენის სასწავლო ვებ-პლატფორმა. ' +
              'მუშაობს სრულად თქვენს ბრაუზერში HTML5, CSS3, Vanilla JavaScript და LocalStorage ტექნოლოგიებით.' +
            '</p>' +
            '<ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; font-size: 0.85rem; color: var(--text-secondary);">' +
              '<li>&check; ფასიანი გამოწერებისა და ბლოკირების გარეშე</li>' +
              '<li>&check; გულების, სიცოცხლეებისა და ენერგიის ლიმიტის გარეშე</li>' +
              '<li>&check; გარე API გასაღებებისა და სერვერის გარეშე</li>' +
              '<li>&check; რეგისტრაციის, ანგარიშისა და თვალთვალის გარეშე</li>' +
            '</ul>' +
          '</section>' +
        '</div>';

      this.bindEvents(container);
    },

    bindEvents: function (container) {
      const usernameInput = container.querySelector('#setting-username');
      const saveUsernameBtn = container.querySelector('#save-username-btn');
      if (saveUsernameBtn && usernameInput) {
        saveUsernameBtn.addEventListener('click', () => {
          const val = usernameInput.value.trim() || 'მოსწავლე';
          App.Storage.set('settings.userName', val);
          App.UI.playSound('success');
          App.UI.toast('მომხმარებლის სახელი განახლდა: «' + val + '».', 'success');
        });
      }

      const themeBtns = container.querySelectorAll('[data-theme-select]');
      themeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const chosen = btn.getAttribute('data-theme-select');
          App.Storage.set('settings.theme', chosen);
          App.UI.applyTheme(chosen);
          App.UI.playSound('click');
          App.UI.toast('არჩეულია ' + (chosen === 'dark' ? 'მუქი' : 'ნათელი') + ' თემა.', 'info');
          this.render();
        });
      });

      const cefrSelect = container.querySelector('#setting-cefr');
      if (cefrSelect) {
        cefrSelect.addEventListener('change', () => {
          const val = cefrSelect.value;
          App.Storage.set('settings.cefrLevel', val);
          App.UI.updateTopbarStats();
          App.UI.playSound('click');
          App.UI.toast('CEFR დონე შეიცვალა: ' + val + '.', 'success');
        });
      }

      const goalSelect = container.querySelector('#setting-goal');
      if (goalSelect) {
        goalSelect.addEventListener('change', () => {
          const val = Number(goalSelect.value) || 20;
          App.Storage.set('settings.dailyGoalXP', val);
          App.UI.playSound('click');
          App.UI.toast('დღიური სასწავლო მიზანი: ' + val + ' XP.', 'success');
        });
      }

      const soundBtns = container.querySelectorAll('[data-sound-select]');
      soundBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const enabled = btn.getAttribute('data-sound-select') === 'on';
          App.Storage.set('settings.soundEnabled', enabled);
          if (enabled) App.UI.playSound('success');
          App.UI.toast('ხმოვანი ეფექტები ' + (enabled ? 'ჩაირთო' : 'გამოირთო') + '.', 'info');
          this.render();
        });
      });

      const exportBtn = container.querySelector('#export-data-btn');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => {
          const jsonStr = App.Storage.exportData();
          const blob = new Blob([jsonStr], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          const dateStamp = new Date().toISOString().split('T')[0];
          a.href = url;
          a.download = 'fluentpath-backup-' + dateStamp + '.json';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          App.UI.playSound('success');
          App.UI.toast('სარეზერვო JSON ფაილი წარმატებით ჩამოიტვირთა.', 'success');
        });
      }

      const importBtn = container.querySelector('#import-data-btn');
      const fileInput = container.querySelector('#import-file-input');
      if (importBtn && fileInput) {
        importBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (loadEvent) => {
            const content = loadEvent.target.result;
            const result = App.Storage.importData(content);
            if (result.success) {
              App.UI.applyTheme(result.state.settings.theme);
              App.UI.updateTopbarStats();
              App.UI.playSound('success');
              App.UI.toast('მონაცემები წარმატებით აღდგა!', 'success');
              this.render();
            } else {
              App.UI.toast('იმპორტის შეცდომა: ' + result.error, 'danger', 5000);
            }
          };
          reader.readAsText(file);
          fileInput.value = '';
        });
      }

      const resetBtn = container.querySelector('#reset-data-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          App.UI.openModal({
            title: 'გსურთ პროგრესის სრული განულება?',
            message: 'დარწმუნებული ხართ, რომ გსურთ ყველა დაგროვებული XP ქულის, უწყვეტი სერიისა და სტატისტიკის წაშლა? თუ სარეზერვო JSON ფაილი არ გაქვთ შენახული, ამ მოქმედების გაუქმება შეუძლებელია.',
            confirmText: 'დიახ, განულდეს ყველაფერი',
            cancelText: 'გაუქმება',
            variant: 'danger',
            onConfirm: () => {
              const fresh = App.Storage.reset();
              App.UI.applyTheme(fresh.settings.theme);
              App.UI.updateTopbarStats();
              App.UI.toast('ყველა მონაცემი დაუბრუნდა საწყის მდგომარეობას.', 'warning');
              this.render();
            }
          });
        });
      }
    }
  };

  App.Settings = Settings;
})(window);