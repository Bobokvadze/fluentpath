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
      const configGoals = ((App.Config && App.Config.dailyGoals) || []).filter((g) => Number(g.activities) > 0);
      const goals = configGoals.length ? configGoals : [
        { activities: 3, label: 'მსუბუქი' },
        { activities: 5, label: 'სტანდარტული' },
        { activities: 8, label: 'სერიოზული' },
        { activities: 12, label: 'ინტენსიური' }
      ];
      const currentGoal = Number(settings.dailyGoalActivities) || 5;

      const levelOptionsHtml = levels.map((lvl) => {
        const selected = lvl.code === settings.cefrLevel ? 'selected' : '';
        return (
          '<option value="' + App.UI.escapeHTML(lvl.code) + '" ' + selected + '>' +
            App.UI.escapeHTML(lvl.code + ' — ' + lvl.name) +
          '</option>'
        );
      }).join('');

      const goalOptionsHtml = goals.map((g) => {
        const selected = Number(g.activities) === currentGoal ? 'selected' : '';
        return (
          '<option value="' + Number(g.activities) + '" ' + selected + '>' +
            App.UI.escapeHTML(g.label + ' (' + g.activities + ' აქტივობა დღეში)') +
          '</option>'
        );
      }).join('');

      const storageKB = App.Storage.getStorageSizeKB();
      const esc = App.UI.escapeHTML;
      const account = (App.Auth && typeof App.Auth.getCurrentUser === 'function') ? App.Auth.getCurrentUser() : null;
      // რეგისტრაციისას შეყვანილი სახელი; სტუმრისთვის — ადრე შენახული სახელი
      const savedName = String(App.Storage.get('user.name', '') || settings.userName || '').trim();
      const displayName = account ? account.fullName : (savedName === 'მოსწავლე' ? '' : savedName);
      const initials = (displayName || '?').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join('') || '?';
      const level = App.Storage.get('progress.level', settings.cefrLevel || 'A1');

      const accountHtml = account
        ? '<section class="card st-account" aria-labelledby="account-heading">' +
            '<div class="st-account__head">' +
              '<div class="st-avatar" aria-hidden="true">' + esc(initials) + '</div>' +
              '<div><h2 id="account-heading" class="section-title">' + esc(account.fullName) + '</h2>' +
              '<p class="st-account__email">☁️ ' + esc(account.email) + ' · <span class="st-badge">სინქრონიზებულია</span></p></div>' +
            '</div>' +
            '<div class="st-fields">' +
              '<label class="st-field"><span class="st-field__label">სახელი და გვარი</span>' +
                '<input type="text" id="setting-username" class="text-input st-input" maxlength="60" autocomplete="name" value="' + esc(account.fullName) + '" /></label>' +
              '<label class="st-field"><span class="st-field__label">ელ-ფოსტა</span>' +
                '<input type="email" class="text-input st-input" value="' + esc(account.email) + '" readonly aria-readonly="true" /></label>' +
              '<label class="st-field"><span class="st-field__label">დონე</span>' +
                '<input type="text" class="text-input st-input" value="' + esc(level) + '" readonly aria-readonly="true" /></label>' +
            '</div>' +
            '<div class="st-actions">' +
              '<button type="button" class="btn btn-primary btn-sm" id="save-username-btn">სახელის შენახვა</button>' +
              '<button type="button" class="btn btn-outline btn-sm" id="st-reset-password-btn">🔑 პაროლის შეცვლა</button>' +
              '<button type="button" class="btn btn-outline btn-sm st-logout" id="st-logout-btn">🚪 გამოსვლა</button>' +
            '</div>' +
          '</section>'
        : '<section class="card st-account" aria-labelledby="account-heading">' +
            '<div class="st-account__head">' +
              '<div class="st-avatar st-avatar--guest" aria-hidden="true">' + esc(displayName ? initials : '👤') + '</div>' +
              '<div><h2 id="account-heading" class="section-title">' + (displayName ? esc(displayName) : 'სტუმარი') + '</h2>' +
              '<p class="st-account__email">პროგრესი ინახება მხოლოდ ამ მოწყობილობაზე.</p></div>' +
            '</div>' +
            '<div class="st-fields">' +
              '<label class="st-field"><span class="st-field__label">თქვენი სახელი</span>' +
                '<input type="text" id="setting-username" class="text-input st-input" maxlength="60" autocomplete="name" placeholder="მაგ. ნინო" value="' + esc(displayName) + '" /></label>' +
            '</div>' +
            '<div class="st-actions">' +
              '<button type="button" class="btn btn-outline btn-sm" id="save-username-btn">სახელის შენახვა</button>' +
              '<button type="button" class="btn btn-primary btn-sm" id="st-open-auth-btn">☁️ შესვლა / რეგისტრაცია</button>' +
            '</div>' +
            '<p class="setting-desc" style="margin-top:10px;">რეგისტრაციის შემდეგ პროგრესი ინახება თქვენს ანგარიშში და ხელმისაწვდომია ნებისმიერ მოწყობილობაზე. აქამდე მიღწეული პროგრესი არ დაიკარგება.</p>' +
          '</section>';

      container.innerHTML =
        '<div class="dashboard-grid">' +
          accountHtml +
          '<section class="card" aria-labelledby="prefs-heading">' +
            '<div class="section-header">' +
              '<div>' +
                '<h3 id="prefs-heading" class="section-title">სწავლა და გარეგნობა</h3>' +
                '<p class="section-subtitle">' + (account ? 'ცვლილებები ავტომატურად ინახება თქვენს ანგარიშში.' : 'ცვლილებები ავტომატურად ინახება ამ მოწყობილობაზე.') + '</p>' +
              '</div>' +
            '</div>' +

            '<div class="settings-list">' +

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
                  '<p class="setting-desc">რამდენი აქტივობა (გაკვეთილი, ტექსტი, სიტყვა, ფრაზა) გსურთ შეასრულოთ დღეში. ეს რიცხვი ჩანს მთავარი გვერდის დღიური მიზნის რგოლში.</p>' +
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
                '<p class="section-subtitle">თქვენი პროგრესი მხოლოდ თქვენ გეკუთვნით. შეინახეთ ფაილად ან აღადგინეთ ნებისმიერ დროს.</p>' +
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
                  '<p class="setting-desc">წაშალეთ მთელი პროგრესი, სტრიკი და სტატისტიკა და დააბრუნეთ აპლიკაცია საწყის მდგომარეობაში.</p>' +
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
                '<p class="section-subtitle">A1–C2 · ' + esc(App.Vocabulary ? String(App.Vocabulary.getCounts().total) : '1,400+') + ' სიტყვა · ' + (App.CourseEngine ? App.CourseEngine.all().length : 29) + ' კურსი</p>' +
              '</div>' +
              '<span class="stat-pill">დაკავებული მეხსიერება: ' + App.UI.escapeHTML(storageKB) + ' KB</span>' +
            '</div>' +
            '<p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 12px;">' +
              'FluentPath არის სრულიად უფასო ინგლისური ენის სასწავლო პლატფორმა ქართულად მოსაუბრეებისთვის: სასწავლო გეგმა A1-დან C2-მდე, ' +
              'თემატური კურსები, ლექსიკონი, გრამატიკა, კითხვა, მოსმენა, კარნახი, საუბარი და წერა. მუშაობს ოფლაინ რეჟიმშიც.' +
            '</p>' +
            '<ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; font-size: 0.85rem; color: var(--text-secondary);">' +
              '<li>&check; ფასიანი გამოწერებისა და დაბლოკილი მასალის გარეშე</li>' +
              '<li>&check; გულების, სიცოცხლეებისა და ლიმიტების გარეშე</li>' +
              '<li>&check; რეკლამისა და თვალთვალის გარეშე</li>' +
              '<li>&check; რეგისტრაცია არასავალდებულოა — მხოლოდ მოწყობილობებს შორის სინქრონიზაციისთვის</li>' +
            '</ul>' +
          '</section>' +
        '</div>';

      this.bindEvents(container);
    },

    bindEvents: function (container) {
      const usernameInput = container.querySelector('#setting-username');
      const saveUsernameBtn = container.querySelector('#save-username-btn');
      if (saveUsernameBtn && usernameInput) {
        const save = () => {
          const val = usernameInput.value.trim();
          const account = App.Auth && App.Auth.getCurrentUser ? App.Auth.getCurrentUser() : null;
          if (account) {
            if (val.length < 2) { App.UI.toast('სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს.', 'warning'); return; }
            saveUsernameBtn.disabled = true;
            App.Auth.updateProfileName(val).then(() => {
              App.UI.playSound('success');
              App.UI.toast('☁️ სახელი განახლდა თქვენს ანგარიშში.', 'success');
              this.render();
            });
            return;
          }
          App.Storage.set('settings.userName', val);
          App.Storage.set('user.name', val);
          App.UI.playSound('success');
          App.UI.toast(val ? 'სახელი შენახულია: «' + val + '».' : 'სახელი წაიშალა.', 'success');
          this.render();
        };
        saveUsernameBtn.addEventListener('click', save);
        usernameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') save(); });
      }

      const openAuth = container.querySelector('#st-open-auth-btn');
      if (openAuth) openAuth.addEventListener('click', () => App.Auth && App.Auth.openModal('register'));

      const logoutBtn = container.querySelector('#st-logout-btn');
      if (logoutBtn) logoutBtn.addEventListener('click', () => App.Auth && App.Auth.handleLogout());

      const resetPwBtn = container.querySelector('#st-reset-password-btn');
      if (resetPwBtn) resetPwBtn.addEventListener('click', () => {
        resetPwBtn.disabled = true;
        App.Auth.sendPasswordResetEmail().then(() => {
          App.UI.toast('📧 პაროლის შესაცვლელი ბმული გაიგზავნა თქვენს ელ-ფოსტაზე.', 'success', 5000);
          resetPwBtn.textContent = '✓ ბმული გაიგზავნა';
        }, (err) => {
          resetPwBtn.disabled = false;
          App.UI.toast((err && /rate|seconds/i.test(err.message || '')) ? 'გთხოვთ, დაელოდოთ ერთ წუთს და სცადოთ თავიდან.' : 'ბმულის გაგზავნა ვერ მოხერხდა.', 'warning');
        });
      });

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
          App.Storage.set('progress.level', val);
          App.UI.updateTopbarStats();
          App.UI.playSound('click');
          App.UI.toast('CEFR დონე შეიცვალა: ' + val + '.', 'success');
        });
      }

      const goalSelect = container.querySelector('#setting-goal');
      if (goalSelect) {
        goalSelect.addEventListener('change', () => {
          const val = Number(goalSelect.value) || 5;
          App.Storage.set('settings.dailyGoalActivities', val);
          App.UI.playSound('click');
          App.UI.toast('დღიური სასწავლო მიზანი: ' + val + ' აქტივობა.', 'success');
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
            message: 'დარწმუნებული ხართ, რომ გსურთ მთელი პროგრესის, სტრიკისა და სტატისტიკის წაშლა? თუ სარეზერვო JSON ფაილი არ გაქვთ შენახული, ამ მოქმედების გაუქმება შეუძლებელია.',
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