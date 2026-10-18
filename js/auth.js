/**
 * AUTH.JS — Supabase Authentication (Email Confirmation + Cloud Progress Sync)
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};

  const DEFAULT_SUPABASE_URL = 'https://vxhmxgmuaokjvgnqvgaj.supabase.co';
  const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_oYFSS9UepIzK8s789V-jCw_m-wip_X-';

  let supabaseClient = null;
  let currentUser = null;
  let authMode = 'LOGIN';
  let syncTimeout = null;

  const Auth = {
    initClient: function () {
      if (!window.supabase || typeof window.supabase.createClient !== 'function') {
        return null;
      }
      try {
        supabaseClient = window.supabase.createClient(DEFAULT_SUPABASE_URL, DEFAULT_SUPABASE_ANON_KEY, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        });
        return supabaseClient;
      } catch (err) {
        console.error('[FluentPath Auth] ინიციალიზაციის შეცდომა:', err);
        return null;
      }
    },

    setSyncBadgeStatus: function (statusText, mode) {
      const badge = document.getElementById('cloud-sync-badge');
      if (!badge) return;
      badge.textContent = statusText;
      badge.className = 'cloud-status-pill ' + (mode || '');
    },

    renderHeaderControls: function () {
      const slot = document.getElementById('header-auth-slot');
      if (!slot) return;

      if (currentUser) {
        const displayName =
          (currentUser.user_metadata && currentUser.user_metadata.full_name) ||
          App.Storage.get('user.name') ||
          (currentUser.email ? currentUser.email.split('@')[0] : 'მომხმარებელი');
        const initial = displayName.charAt(0).toUpperCase();

        slot.innerHTML =
          '<span class="cloud-status-pill synced" id="cloud-sync-badge" title="პროგრესი ინახება ონლაინ ბაზაში">☁️ შენახულია</span>' +
          '<div class="user-account-chip">' +
            '<span class="user-avatar-circle">' + App.UI.escapeHTML(initial) + '</span>' +
            '<span>' + App.UI.escapeHTML(displayName) + '</span>' +
          '</div>' +
          '<button type="button" class="btn btn-outline btn-sm" id="header-logout-btn" title="ანგარიშიდან გასვლა">გასვლა</button>';

        const logoutBtn = document.getElementById('header-logout-btn');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', () => this.signOut());
        }
      } else {
        slot.innerHTML =
          '<button type="button" class="btn btn-primary btn-sm" id="header-login-btn">🔐 შესვლა / რეგისტრაცია</button>';
        const loginBtn = document.getElementById('header-login-btn');
        if (loginBtn) {
          loginBtn.addEventListener('click', () => this.showOverlay('LOGIN'));
        }
      }
    },

    fetchUserProgressFromCloud: async function (user) {
      if (!supabaseClient || !user) return;
      this.setSyncBadgeStatus('🔄 იტვირთება...', 'syncing');

      try {
        const { data, error } = await supabaseClient
          .from('user_progress')
          .select('state_data, display_name')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;

        const fullName =
          (data && data.display_name) ||
          (user.user_metadata && user.user_metadata.full_name) ||
          (user.email ? user.email.split('@')[0] : 'სტუდენტი');

        if (data && data.state_data && Object.keys(data.state_data).length > 0) {
          const loadedState = App.Storage.loadFromCloudData(data.state_data);
          loadedState.user.name = fullName;
          loadedState.user.email = user.email || '';
          App.Storage.saveState(loadedState, true);
        } else {
          const freshState = App.Storage.getDefaultState();
          freshState.user.name = fullName;
          freshState.user.email = user.email || '';
          App.Storage.saveState(freshState, true);
          await this.pushProgressToCloudNow(freshState);
        }

        this.setSyncBadgeStatus('☁️ შენახულია', 'synced');
        this.refreshAppUI();
      } catch (err) {
        console.error('[FluentPath Auth] პროგრესის ჩამოტვირთვის შეცდომა:', err);
        this.setSyncBadgeStatus('⚠️ ბაზის შეცდომა', '');
      }
    },

    pushProgressToCloudNow: async function (stateToSave) {
      if (!supabaseClient || !currentUser) return;
      this.setSyncBadgeStatus('☁️ ინახება...', 'syncing');

      try {
        const payload = {
          user_id: currentUser.id,
          email: currentUser.email || '',
          display_name: (stateToSave.user && stateToSave.user.name) || 'სტუდენტი',
          state_data: stateToSave,
          updated_at: new Date().toISOString()
        };

        const { error } = await supabaseClient
          .from('user_progress')
          .upsert(payload, { onConflict: 'user_id' });

        if (error) throw error;
        this.setSyncBadgeStatus('☁️ შენახულია', 'synced');
      } catch (err) {
        console.error('[FluentPath Auth] ბაზაში შენახვის შეცდომა:', err);
        this.setSyncBadgeStatus('⚠️ შენახვის შეცდომა', '');
      }
    },

    scheduleCloudSync: function (stateToSave) {
      if (!supabaseClient || !currentUser) return;
      this.setSyncBadgeStatus('☁️ ინახება...', 'syncing');
      if (syncTimeout) window.clearTimeout(syncTimeout);
      syncTimeout = window.setTimeout(() => {
        this.pushProgressToCloudNow(stateToSave);
      }, 350);
    },

    refreshAppUI: function () {
      this.renderHeaderControls();
      if (App.Progress && typeof App.Progress.checkAndUpdateStreak === 'function') {
        App.Progress.checkAndUpdateStreak();
      }
      if (App.Progress && typeof App.Progress.syncHeaderStats === 'function') {
        App.Progress.syncHeaderStats();
      }
      if (App.Router && typeof App.Router.handleRouteChange === 'function') {
        App.Router.handleRouteChange();
      }
    },

    showOverlay: function (mode, messageText, isInfoMessage) {
      let overlay = document.getElementById('auth-modal-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'auth-modal-overlay';
        overlay.className = 'auth-overlay';
        document.body.appendChild(overlay);
      }

      if (mode) authMode = mode;
      overlay.hidden = false;

      const isRegister = authMode === 'REGISTER';
      const msgBoxClass = isInfoMessage ? 'auth-info-box' : 'auth-error-box';

      overlay.innerHTML =
        '<div class="auth-card">' +
          '<div class="auth-brand-header">' +
            '<div class="auth-brand-logo">FP</div>' +
            '<h2 class="auth-title">FluentPath ანგარიში</h2>' +
            '<p class="auth-subtitle">თქვენი სასწავლო პროგრესი, დონე და სიტყვები ინახება პირდაპირ ონლაინ ბაზაში.</p>' +
          '</div>' +

          '<div class="auth-tabs">' +
            '<button type="button" class="auth-tab-btn ' + (!isRegister ? 'active' : '') + '" id="tab-login-btn">შესვლა</button>' +
            '<button type="button" class="auth-tab-btn ' + (isRegister ? 'active' : '') + '" id="tab-register-btn">რეგისტრაცია</button>' +
          '</div>' +

          (messageText ? '<div class="' + msgBoxClass + '" style="margin-bottom:14px;">' + App.UI.escapeHTML(messageText) + '</div>' : '') +

          '<form class="auth-form" id="auth-main-form">' +
            (isRegister
              ? '<div class="auth-field">' +
                  '<label for="auth-name-input">თქვენი სახელი *</label>' +
                  '<input type="text" id="auth-name-input" class="auth-input" placeholder="მაგ: გიორგი" required />' +
                '</div>'
              : '') +
            '<div class="auth-field">' +
              '<label for="auth-email-input">ელფოსტა *</label>' +
              '<input type="email" id="auth-email-input" class="auth-input" placeholder="name@example.com" required />' +
            '</div>' +
            '<div class="auth-field">' +
              '<label for="auth-password-input">პაროლი (მინიმუმ 6 სიმბოლო) *</label>' +
              '<input type="password" id="auth-password-input" class="auth-input" placeholder="••••••••" minlength="6" required />' +
            '</div>' +
            '<button type="submit" class="btn btn-primary auth-submit-btn" id="auth-submit-btn">' +
              (isRegister ? 'რეგისტრაცია &rarr;' : 'ანგარიშზე შესვლა &rarr;') +
            '</button>' +
          '</form>' +

          '<div class="auth-footer-note">' +
            '<span>🔒 რეგისტრაციისას ელფოსტაზე მოგივათ დამადასტურებელი ბმული</span>' +
          '</div>' +
        '</div>';

      overlay.querySelector('#tab-login-btn').addEventListener('click', () => this.showOverlay('LOGIN'));
      overlay.querySelector('#tab-register-btn').addEventListener('click', () => this.showOverlay('REGISTER'));

      const form = overlay.querySelector('#auth-main-form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email-input').value.trim();
        const password = document.getElementById('auth-password-input').value;
        const nameEl = document.getElementById('auth-name-input');
        const fullName = nameEl ? nameEl.value.trim() : '';
        const submitBtn = document.getElementById('auth-submit-btn');

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'გთხოვთ დაელოდოთ...';
        }

        try {
          if (isRegister) {
            const redirectUrl = window.location.origin && window.location.origin !== 'null'
              ? window.location.origin + window.location.pathname
              : undefined;

            const { data, error } = await supabaseClient.auth.signUp({
              email: email,
              password: password,
              options: {
                emailRedirectTo: redirectUrl,
                data: { full_name: fullName || email.split('@')[0] }
              }
            });
            if (error) throw error;

            if (data && data.user && !data.session) {
              App.UI.playSound('success');
              this.showOverlay(
                'LOGIN',
                '📩 რეგისტრაცია წარმატებულია! თქვენს ელფოსტაზე (' + email + ') გამოიგზავნა დამადასტურებელი ბმული. გთხოვთ გადახვიდეთ ბმულზე მეილში და შემდეგ შემოხვიდეთ ანგარიშზე.',
                true
              );
              return;
            }

            currentUser = data.user;
            await this.fetchUserProgressFromCloud(currentUser);
            this.hideOverlay();
            App.UI.playSound('success');
            App.UI.toast('🎉 კეთილი იყოს თქვენი მობრძანება!', 'success');
          } else {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
              email: email,
              password: password
            });
            if (error) throw error;

            currentUser = data.user;
            await this.fetchUserProgressFromCloud(currentUser);
            this.hideOverlay();
            App.UI.playSound('success');
            App.UI.toast('✓ წარმატებით შეხვედით ანგარიშზე!', 'success');
          }
        } catch (err) {
          let msg = err.message || 'ავტორიზაციის შეცდომა.';
          if (msg.indexOf('Invalid login credentials') !== -1) {
            msg = 'ელფოსტა ან პაროლი არასწორია.';
          } else if (msg.indexOf('User already registered') !== -1) {
            msg = 'ეს ელფოსტა უკვე რეგისტრირებულია. გადადით „შესვლა“-ზე.';
          } else if (msg.indexOf('Email not confirmed') !== -1) {
            msg = '📩 თქვენი ელფოსტა ჯერ არ არის დადასტურებული! გთხოვთ შეამოწმოთ მეილი (და Spam საქაღალდე) და დააჭიროთ დადასტურების ბმულს.';
          }
          this.showOverlay(authMode, msg, false);
        }
      });
    },

    hideOverlay: function () {
      const overlay = document.getElementById('auth-modal-overlay');
      if (overlay) overlay.hidden = true;
    },

    signOut: async function () {
      if (supabaseClient) {
        try {
          await supabaseClient.auth.signOut();
        } catch (e) {}
      }
      currentUser = null;
      App.Storage.clearMemoryForLogout();
      this.renderHeaderControls();
      this.refreshAppUI();
      this.showOverlay('LOGIN');
      App.UI.toast('გამოხვედით ანგარიშიდან.', 'info');
    },

    init: async function () {
      App.Storage.setCloudSyncHook((updatedState) => {
        this.scheduleCloudSync(updatedState);
      });

      this.renderHeaderControls();
      this.initClient();

      if (!supabaseClient) {
        this.showOverlay('LOGIN', 'Supabase კლიენტის ჩატვირთვა ვერ მოხერხდა.', false);
        return;
      }

      // თუ მომხმარებელი მეილზე მოსულ დადასტურების ბმულს დააჭერს, ავტომატურად შევიყვანოთ
      supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if ((event === 'SIGNED_IN' || event === 'USER_UPDATED') && session && session.user) {
          if (!currentUser || currentUser.id !== session.user.id) {
            currentUser = session.user;
            this.hideOverlay();
            await this.fetchUserProgressFromCloud(currentUser);
            App.UI.toast('✓ ელფოსტა დადასტურდა! შეხვედით ანგარიშზე.', 'success');
          }
        }
      });

      try {
        const { data } = await supabaseClient.auth.getSession();
        if (data && data.session && data.session.user) {
          currentUser = data.session.user;
          this.hideOverlay();
          await this.fetchUserProgressFromCloud(currentUser);
        } else {
          this.showOverlay('REGISTER');
        }
      } catch (err) {
        this.showOverlay('LOGIN');
      }
    }
  };

  App.Auth = Auth;

  document.addEventListener('DOMContentLoaded', () => {
    Auth.init();
  });
})(window);