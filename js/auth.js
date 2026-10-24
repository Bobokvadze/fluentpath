/**
 * AUTH.JS — 100% Supabase-ზე მიბმული ავტორიზაცია და პროგრესის სინქრონიზაცია
 * - ლოკალურად (localStorage-ში) პროგრესი საერთოდ აღარ ინახება.
 * - ახალი რეგისტრაცია იწყება სუფთა ნულიდან (0 XP, 0 ნასწავლი სიტყვა).
 * - პაროლის მოთხოვნა: მინ. 8 სიმბოლო, 1 დიდი ასო, 1 პატარა ასო, 1 ციფრი და 1 სპეციალური სიმბოლო.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  let supabaseClient = null;
  let currentCloudUser = null;
  let activeTab = "login"; // "login" | "register"
  let modalElement = null;
  let syncDebounceTimer = null;

  /**
   * შლის ყველა ძველ ლოკალურ ჩანაწერს ბრაუზერიდან, რომ ლოკალურად არაფერი დარჩეს
   */
  function purgeAllLocalProgressKeys() {
    try {
      const keysToRemove = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        // ვტოვებთ მხოლოდ Supabase-ის ავტორიზაციის ტოკენს (sb-*) და თემის ფერს
        if (k && k.indexOf("sb-") !== 0 && k !== "fluentpath_preferred_accent_v1") {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach(function (k) {
        window.localStorage.removeItem(k);
      });
    } catch (e) {}
  }

  /**
   * ქმნის სრულიად სუფთა საწყის მდგომარეობას (0 XP, 0 ნასწავლი სიტყვა)
   */
  function createCleanBlankState(level, fullName, email) {
    return {
      user: {
        name: fullName || "",
        email: email || ""
      },
      settings: {
        theme: "light",
        soundEffects: true,
        dailyGoalXP: 100
      },
      progress: {
        xp: 0,
        streak: 1,
        level: level || "A1",
        vocabularyLearned: 0,
        grammarCompleted: 0,
        readingCompleted: 0,
        listeningCompleted: 0,
        writingCompleted: 0,
        quizzesCompleted: 0,
        completedGrammarIds: [],
        completedReadingIds: [],
        completedListeningIds: [],
        completedWritingIds: [],
        moduleCompletion: {
          vocabulary: 0,
          grammar: 0,
          reading: 0,
          listening: 0,
          writing: 0,
          flashcards: 0,
          quizzes: 0
        },
        recentActivities: []
      },
      vocabulary: {
        learnedIds: [],
        bookmarkedIds: [],
        customWords: [],
        boxByWordId: {},
        selectedFcLevels: ["A1", "A2", "B1", "B2", "C1", "C2"]
      },
      flashcards: {
        reviewedToday: 0
      }
    };
  }

  // მეხსიერებაში (RAM) არსებული მიმდინარე სესიის მდგომარეობა (ლოკალურ დისკზე ჩაწერის გარეშე!)
  let inMemoryState = createCleanBlankState("A1", "", "");

  function getByPath(obj, path, defaultVal) {
    if (!path) return obj;
    const parts = String(path).split(".");
    let cur = obj;
    for (let i = 0; i < parts.length; i++) {
      if (cur === null || cur === undefined || typeof cur !== "object") {
        return defaultVal;
      }
      cur = cur[parts[i]];
    }
    return cur === undefined ? defaultVal : cur;
  }

  function setByPath(obj, path, value) {
    const parts = String(path).split(".");
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      if (!cur[p] || typeof cur[p] !== "object") {
        cur[p] = {};
      }
      cur = cur[p];
    }
    cur[parts[parts.length - 1]] = value;
  }

  /**
   * გადავაერთოთ App.Storage ისე, რომ მუშაობდეს მხოლოდ RAM-სა და Supabase-თან!
   */
  function hookStorageToSupabaseOnly() {
    if (!App.Storage) return;

    App.Storage.getState = function () {
      return inMemoryState;
    };

    App.Storage.saveState = function (newState) {
      if (newState && typeof newState === "object") {
        inMemoryState = newState;
      }
      scheduleCloudPush();
      return inMemoryState;
    };

    App.Storage.get = function (path, defaultValue) {
      return getByPath(inMemoryState, path, defaultValue);
    };

    App.Storage.set = function (path, value) {
      setByPath(inMemoryState, path, value);
      scheduleCloudPush();
      return value;
    };

    App.Storage.resetAll = function () {
      const lvl = getByPath(inMemoryState, "progress.level", "A1");
      const name = currentCloudUser ? currentCloudUser.fullName : "";
      const email = currentCloudUser ? currentCloudUser.email : "";
      inMemoryState = createCleanBlankState(lvl, name, email);
      scheduleCloudPush();
      return inMemoryState;
    };
  }

  /**
   * მონაცემების ჩაწერა პირდაპირ Supabase-ის user_profiles ცხრილში
   */
  function pushStateToSupabaseNow() {
    if (!supabaseClient || !currentCloudUser || !currentCloudUser.id) return Promise.resolve();

    const boxes = getByPath(inMemoryState, "vocabulary.boxByWordId", {});
    const fcLevels = getByPath(inMemoryState, "vocabulary.selectedFcLevels", ["A1", "A2", "B1", "B2", "C1", "C2"]);
    const curLevel = getByPath(inMemoryState, "progress.level", currentCloudUser.level || "A1");

    const payload = {
      id: currentCloudUser.id,
      email: currentCloudUser.email,
      full_name: currentCloudUser.fullName,
      cefr_level: curLevel,
      state_json: inMemoryState,
      leitner_boxes: boxes,
      selected_fc_levels: fcLevels,
      updated_at: new Date().toISOString()
    };

    return supabaseClient
      .from("user_profiles")
      .upsert(payload, { onConflict: "id" })
      .then(function () {})
      .catch(function () {});
  }

  function scheduleCloudPush() {
    if (!currentCloudUser) return;
    if (syncDebounceTimer) {
      window.clearTimeout(syncDebounceTimer);
    }
    syncDebounceTimer = window.setTimeout(function () {
      pushStateToSupabaseNow();
    }, 350);
  }

  /**
   * პაროლის სიმკაცრის შემოწმება:
   * - მინიმუმ 8 სიმბოლო
   * - მინიმუმ 1 დიდი ასო (A-Z)
   * - მინიმუმ 1 პატარა ასო (a-z)
   * - მინიმუმ 1 ციფრი (0-9)
   * - მინიმუმ 1 სპეციალური სიმბოლო (!@#$%^&*...)
   */
  function evaluatePasswordRules(pw) {
    const str = String(pw || "");
    return {
      minLen: str.length >= 8,
      hasUpper: /[A-Z]/.test(str),
      hasLower: /[a-z]/.test(str),
      hasDigit: /[0-9]/.test(str),
      hasSpecial: /[^A-Za-z0-9\s]/.test(str)
    };
  }

  function isPasswordValid(pw) {
    const r = evaluatePasswordRules(pw);
    return r.minLen && r.hasUpper && r.hasLower && r.hasDigit && r.hasSpecial;
  }

  function getInitials(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "U";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function refreshEntireAppUI() {
    Auth.syncHeaderAuthUI();
    if (App.Progress && typeof App.Progress.syncHeaderStats === "function") {
      App.Progress.syncHeaderStats();
    }
    if (App.Router && typeof App.Router.handleRoute === "function") {
      App.Router.handleRoute();
    }
  }

  const Auth = {
    initClient: function () {
      purgeAllLocalProgressKeys();
      hookStorageToSupabaseOnly();

      if (!window.supabase || !App.SupabaseConfig || !App.SupabaseConfig.url || !App.SupabaseConfig.anonKey) {
        return;
      }

      supabaseClient = window.supabase.createClient(App.SupabaseConfig.url, App.SupabaseConfig.anonKey);

      // შევამოწმოთ აქტიური Supabase სესია
      supabaseClient.auth.getSession().then(function (res) {
        const session = res && res.data ? res.data.session : null;
        if (session && session.user) {
          Auth.loadUserProfileFromSupabase(session.user, false);
        } else {
          currentCloudUser = null;
          inMemoryState = createCleanBlankState("A1", "", "");
          refreshEntireAppUI();
          // საიტის გახსნისას თუ მომხმარებელი არ არის შესული, გავუხსნათ შესვლა/რეგისტრაციის ფანჯარა
          Auth.openModal("login");
        }
      });
    },

    loadUserProfileFromSupabase: function (supaUser, isNewRegistration, chosenName, chosenLevel) {
      if (!supabaseClient || !supaUser) return Promise.resolve();

      const fallbackName = chosenName || (supaUser.user_metadata && supaUser.user_metadata.full_name) || supaUser.email.split("@")[0];
      const fallbackLevel = chosenLevel || (supaUser.user_metadata && supaUser.user_metadata.cefr_level) || "A1";

      // თუ ახალი რეგისტრაციაა — ვქმნით 100%-ით სუფთა პროფილს ნულიდან (სტუმრის პროგრესის გარეშე!)
      if (isNewRegistration) {
        inMemoryState = createCleanBlankState(fallbackLevel, fallbackName, supaUser.email);
        currentCloudUser = {
          id: supaUser.id,
          email: supaUser.email,
          fullName: fallbackName,
          level: fallbackLevel
        };
        return pushStateToSupabaseNow().then(function () {
          refreshEntireAppUI();
        });
      }

      // თუ უკვე არსებული მომხმარებელი შედის — წამოვიღოთ მისი პროგრესი Supabase-იდან
      return supabaseClient
        .from("user_profiles")
        .select("*")
        .eq("id", supaUser.id)
        .maybeSingle()
        .then(function (result) {
          const row = result && result.data ? result.data : null;
          if (row && row.state_json && Object.keys(row.state_json).length > 0) {
            inMemoryState = row.state_json;
            inMemoryState.vocabulary = inMemoryState.vocabulary || {};
            if (row.leitner_boxes) {
              inMemoryState.vocabulary.boxByWordId = row.leitner_boxes;
            }
            if (row.selected_fc_levels) {
              inMemoryState.vocabulary.selectedFcLevels = row.selected_fc_levels;
            }
            if (row.cefr_level) {
              setByPath(inMemoryState, "progress.level", row.cefr_level);
            }
            currentCloudUser = {
              id: supaUser.id,
              email: supaUser.email,
              fullName: row.full_name || fallbackName,
              level: row.cefr_level || fallbackLevel
            };
          } else {
            // თუ ცხრილში ჯერ ჩანაწერი არ ჰქონდა, შევუქმნათ სუფთა ნულიდან
            inMemoryState = createCleanBlankState(fallbackLevel, fallbackName, supaUser.email);
            currentCloudUser = {
              id: supaUser.id,
              email: supaUser.email,
              fullName: fallbackName,
              level: fallbackLevel
            };
            pushStateToSupabaseNow();
          }
          refreshEntireAppUI();
        })
        .catch(function () {
          refreshEntireAppUI();
        });
    },

    ensureModalCreated: function () {
      if (modalElement) return modalElement;
      const backdrop = document.createElement("div");
      backdrop.className = "fp-auth-backdrop";
      backdrop.id = "fp-auth-backdrop";
      backdrop.addEventListener("click", function (e) {
        if (e.target === backdrop) {
          Auth.closeModal();
        }
      });
      document.body.appendChild(backdrop);
      modalElement = backdrop;
      return backdrop;
    },

    openModal: function (defaultTab) {
      if (defaultTab === "login" || defaultTab === "register") {
        activeTab = defaultTab;
      }
      this.ensureModalCreated();
      this.renderModalContent();
      window.setTimeout(function () {
        modalElement.classList.add("is-open");
      }, 10);
    },

    closeModal: function () {
      if (!modalElement) return;
      modalElement.classList.remove("is-open");
    },

    showError: function (msg) {
      if (!modalElement) return;
      const errEl = modalElement.querySelector("#fp-auth-error-box");
      if (errEl) {
        errEl.textContent = "⚠️ " + msg;
        errEl.classList.add("visible");
      }
    },

    handleRegister: function (formData, submitBtn) {
      const fullName = String(formData.fullName || "").trim();
      const email = String(formData.email || "").toLowerCase().trim();
      const password = String(formData.password || "");
      const confirmPassword = String(formData.confirmPassword || "");
      const startLevel = String(formData.level || "A1");

      if (fullName.length < 2) {
        this.showError("გთხოვთ მიუთითოთ თქვენი სახელი და გვარი.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.showError("გთხოვთ მიუთითოთ სწორი ელ-ფოსტის მისამართი.");
        return;
      }
      if (!isPasswordValid(password)) {
        this.showError("პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, 1 დიდ ასოს, 1 პატარა ასოს, 1 ციფრს და 1 სპეციალურ სიმბოლოს!");
        return;
      }
      if (password !== confirmPassword) {
        this.showError("პაროლები ერთმანეთს არ ემთხვევა.");
        return;
      }
      if (!supabaseClient) {
        this.showError("Supabase კლიენტი ვერ მოიძებნა. გადატვირთეთ გვერდი.");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ მიმდინარეობს რეგისტრაცია...";
      }

      // წავშალოთ ნებისმიერი დროებითი მეხსიერება, რომ სტუმრის პროგრესი არ მიებას!
      purgeAllLocalProgressKeys();
      inMemoryState = createCleanBlankState(startLevel, fullName, email);

      supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
            cefr_level: startLevel
          }
        }
      }).then(function (res) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "🚀 ანგარიშის შექმნა";
        }
        if (res.error) {
          Auth.showError(res.error.message || "რეგისტრაციის შეცდომა.");
          return;
        }
        const user = res.data ? res.data.user : null;
        if (!user) {
          Auth.showError("მომხმარებლის შექმნა ვერ მოხერხდა.");
          return;
        }

        Auth.loadUserProfileFromSupabase(user, true, fullName, startLevel).then(function () {
          Auth.closeModal();
          if (App.UI) {
            App.UI.playSound("success");
            App.UI.toast("🎉 ანგარიში შეიქმნა Supabase-ში! მოგესალმებით, " + fullName + "!", "success", 3600);
          }
        });
      }).catch(function (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "🚀 ანგარიშის შექმნა";
        }
        Auth.showError(err.message || "კავშირის შეცდომა.");
      });
    },

    handleLogin: function (formData, submitBtn) {
      const email = String(formData.email || "").toLowerCase().trim();
      const password = String(formData.password || "");

      if (!email || !password) {
        this.showError("გთხოვთ შეავსოთ ელ-ფოსტა და პაროლი.");
        return;
      }
      if (!supabaseClient) {
        this.showError("Supabase კლიენტი ვერ მოიძებნა.");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ მიმდინარეობს შესვლა...";
      }

      purgeAllLocalProgressKeys();

      supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      }).then(function (res) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "🔑 სისტემაში შესვლა";
        }
        if (res.error) {
          Auth.showError("ელ-ფოსტა ან პაროლი არასწორია.");
          return;
        }
        const user = res.data ? res.data.user : null;
        if (user) {
          Auth.loadUserProfileFromSupabase(user, false).then(function () {
            Auth.closeModal();
            if (App.UI) {
              App.UI.playSound("success");
              App.UI.toast("👋 კეთილი იყოს თქვენი დაბრუნება!", "success", 2800);
            }
          });
        }
      }).catch(function (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "🔑 სისტემაში შესვლა";
        }
        Auth.showError(err.message || "კავშირის შეცდომა.");
      });
    },

    handleLogout: function () {
      pushStateToSupabaseNow().finally(function () {
        if (supabaseClient) {
          supabaseClient.auth.signOut();
        }
        currentCloudUser = null;
        purgeAllLocalProgressKeys();
        inMemoryState = createCleanBlankState("A1", "", "");
        refreshEntireAppUI();
        Auth.closeModal();
        if (App.UI) {
          App.UI.toast("თქვენ გამოხვედით ანგარიშიდან. ყველა მონაცემი შენახულია Supabase-ში.", "info", 3000);
        }
      });
    },

    renderModalContent: function () {
      if (!modalElement) return;

      if (currentCloudUser) {
        const xp = getByPath(inMemoryState, "progress.xp", 0);
        const streak = getByPath(inMemoryState, "progress.streak", 1);
        const learned = (getByPath(inMemoryState, "vocabulary.learnedIds", []) || []).length;
        const curLevel = getByPath(inMemoryState, "progress.level", currentCloudUser.level || "A1");

        const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
        const levelOptionsHtml = levels.map(function (lvl) {
          return '<option value="' + lvl + '" ' + (curLevel === lvl ? "selected" : "") + '>დონე ' + lvl + "</option>";
        }).join("");

        modalElement.innerHTML =
          '<div class="fp-auth-modal" role="dialog" aria-modal="true">' +
            '<button type="button" class="fp-auth-close-btn" id="fp-modal-close-btn" title="დახურვა">✕</button>' +
            '<div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">' +
              '<div class="header-user-avatar" style="width:52px; height:52px; font-size:1.2rem;">' + App.UI.escapeHTML(getInitials(currentCloudUser.fullName)) + "</div>" +
              "<div>" +
                '<h3 class="section-title" style="font-size:1.25rem;">' + App.UI.escapeHTML(currentCloudUser.fullName) + "</h3>" +
                '<div style="font-size:0.84rem; color:var(--text-secondary);">☁️ ' + App.UI.escapeHTML(currentCloudUser.email) + " (Supabase Cloud)</div>" +
              "</div>" +
            "</div>" +

            '<div class="fp-profile-stat-grid">' +
              '<div class="fp-profile-stat-box">' +
                '<div class="fp-profile-stat-val">' + xp + " XP</div>" +
                '<div class="fp-profile-stat-lbl">დაგროვებული XP</div>' +
              "</div>" +
              '<div class="fp-profile-stat-box">' +
                '<div class="fp-profile-stat-val">🔥 ' + streak + "</div>" +
                '<div class="fp-profile-stat-lbl">დღის სტრიკი</div>' +
              "</div>" +
              '<div class="fp-profile-stat-box">' +
                '<div class="fp-profile-stat-val">' + learned + "</div>" +
                '<div class="fp-profile-stat-lbl">ათვისებული სიტყვა</div>' +
              "</div>" +
            "</div>" +

            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-profile-name-input">სახელი და გვარი</label>' +
              '<input type="text" id="fp-profile-name-input" class="fp-input" value="' + App.UI.escapeHTML(currentCloudUser.fullName) + '" />' +
            "</div>" +

            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-profile-level-select">სამიზნე CEFR დონე</label>' +
              '<select id="fp-profile-level-select" class="fp-input">' + levelOptionsHtml + "</select>" +
            "</div>" +

            '<div style="display:flex; justify-content:space-between; gap:10px; margin-top:20px;">' +
              '<button type="button" class="btn btn-outline" id="fp-logout-btn" style="color:var(--color-danger); border-color:var(--color-danger);">🚪 გამოსვლა</button>' +
              '<button type="button" class="btn btn-primary" id="fp-save-profile-btn">☁️ Supabase-ში შენახვა</button>' +
            "</div>" +
          "</div>";

        modalElement.querySelector("#fp-modal-close-btn").addEventListener("click", function () {
          Auth.closeModal();
        });

        modalElement.querySelector("#fp-logout-btn").addEventListener("click", function () {
          Auth.handleLogout();
        });

        modalElement.querySelector("#fp-save-profile-btn").addEventListener("click", function () {
          const newName = modalElement.querySelector("#fp-profile-name-input").value.trim();
          const newLvl = modalElement.querySelector("#fp-profile-level-select").value;
          if (newName.length >= 2) {
            currentCloudUser.fullName = newName;
            currentCloudUser.level = newLvl;
            setByPath(inMemoryState, "progress.level", newLvl);
            setByPath(inMemoryState, "user.name", newName);
            pushStateToSupabaseNow().then(function () {
              refreshEntireAppUI();
              Auth.closeModal();
              App.UI.toast("☁️ პროფილი განახლდა Supabase-ში!", "success", 2200);
            });
          }
        });
        return;
      }

      const isReg = (activeTab === "register");

      const formHtml = isReg
        ? '<form id="fp-register-form" autocomplete="on">' +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-reg-name">სახელი და გვარი</label>' +
              '<input type="text" id="fp-reg-name" class="fp-input" placeholder="მაგ: ოთარ ბობოყვაძე" required />' +
            "</div>" +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-reg-email">ელ-ფოსტა</label>' +
              '<input type="email" id="fp-reg-email" class="fp-input" placeholder="name@example.com" required />' +
            "</div>" +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-reg-level">საწყისი დონე</label>' +
              '<select id="fp-reg-level" class="fp-input">' +
                '<option value="A1">A1 — დამწყები (Beginner)</option>' +
                '<option value="A2">A2 — ელემენტარული (Elementary)</option>' +
                '<option value="B1">B1 — საშუალო (Intermediate)</option>' +
                '<option value="B2">B2 — საშუალოზე მაღალი (Upper-Intermediate)</option>' +
                '<option value="C1">C1 — მაღალი (Advanced)</option>' +
                '<option value="C2">C2 — სრულყოფილი (Mastery)</option>' +
              "</select>" +
            "</div>" +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-reg-pw">პაროლი</label>' +
              '<div class="fp-input-wrap">' +
                '<input type="password" id="fp-reg-pw" class="fp-input" placeholder="მინ. 8 სიმბოლო (A-Z, a-z, 0-9, !@#)" required />' +
                '<button type="button" class="fp-pw-toggle" data-toggle-pw="fp-reg-pw" title="პაროლის ჩვენება">👁️</button>' +
              "</div>" +
              '<div class="fp-pw-checklist" id="fp-pw-live-checklist">' +
                '<div class="fp-pw-rule" data-pw-rule="minLen"><span class="fp-pw-rule-dot">•</span> <span>მინიმუმ 8 სიმბოლო</span></div>' +
                '<div class="fp-pw-rule" data-pw-rule="hasUpper"><span class="fp-pw-rule-dot">•</span> <span>1 დიდი ასო (A-Z)</span></div>' +
                '<div class="fp-pw-rule" data-pw-rule="hasLower"><span class="fp-pw-rule-dot">•</span> <span>1 პატარა ასო (a-z)</span></div>' +
                '<div class="fp-pw-rule" data-pw-rule="hasDigit"><span class="fp-pw-rule-dot">•</span> <span>1 ციფრი (0-9)</span></div>' +
                '<div class="fp-pw-rule" data-pw-rule="hasSpecial" style="grid-column:1/-1;"><span class="fp-pw-rule-dot">•</span> <span>1 სპეციალური სიმბოლო (!@#$%^&*...)</span></div>' +
              "</div>" +
            "</div>" +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-reg-pw2">გაიმეორეთ პაროლი</label>' +
              '<div class="fp-input-wrap">' +
                '<input type="password" id="fp-reg-pw2" class="fp-input" placeholder="••••••••" required />' +
                '<button type="button" class="fp-pw-toggle" data-toggle-pw="fp-reg-pw2" title="პაროლის ჩვენება">👁️</button>' +
              "</div>" +
            "</div>" +
            '<button type="submit" class="btn btn-primary" id="fp-reg-submit-btn" style="width:100%; margin-top:6px; padding:12px;">🚀 ანგარიშის შექმნა</button>' +
          "</form>"
        : '<form id="fp-login-form" autocomplete="on">' +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-login-email">ელ-ფოსტა</label>' +
              '<input type="email" id="fp-login-email" class="fp-input" placeholder="name@example.com" required />' +
            "</div>" +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-login-pw">პაროლი</label>' +
              '<div class="fp-input-wrap">' +
                '<input type="password" id="fp-login-pw" class="fp-input" placeholder="••••••••" required />' +
                '<button type="button" class="fp-pw-toggle" data-toggle-pw="fp-login-pw" title="პაროლის ჩვენება">👁️</button>' +
              "</div>" +
            "</div>" +
            '<button type="submit" class="btn btn-primary" id="fp-login-submit-btn" style="width:100%; margin-top:8px; padding:12px;">🔑 სისტემაში შესვლა</button>' +
          "</form>";

      modalElement.innerHTML =
        '<div class="fp-auth-modal" role="dialog" aria-modal="true">' +
          '<button type="button" class="fp-auth-close-btn" id="fp-modal-close-btn" title="დახურვა">✕</button>' +
          '<div style="text-align:center;">' +
            '<div style="font-size:2rem; margin-bottom:4px;">☁️</div>' +
            '<h3 class="section-title" style="font-size:1.3rem;">' + (isReg ? "რეგისტრაცია (Supabase Cloud)" : "შესვლა ანგარიშზე") + "</h3>" +
            '<p style="font-size:0.82rem; color:var(--text-secondary); margin-top:4px;">ყველა მონაცემი ინახება მხოლოდ Supabase-ის ღრუბლოვან ბაზაში.</p>' +
          "</div>" +

          '<div class="fp-auth-tabs">' +
            '<button type="button" class="fp-auth-tab ' + (!isReg ? "active" : "") + '" data-switch-auth-tab="login">🔑 შესვლა</button>' +
            '<button type="button" class="fp-auth-tab ' + (isReg ? "active" : "") + '" data-switch-auth-tab="register">📝 რეგისტრაცია</button>' +
          "</div>" +

          '<div class="fp-auth-error" id="fp-auth-error-box"></div>' +

          formHtml +
        "</div>";

      modalElement.querySelector("#fp-modal-close-btn").addEventListener("click", function () {
        Auth.closeModal();
      });

      modalElement.querySelectorAll("[data-switch-auth-tab]").forEach(function (tabBtn) {
        tabBtn.addEventListener("click", function () {
          activeTab = tabBtn.getAttribute("data-switch-auth-tab");
          Auth.renderModalContent();
        });
      });

      modalElement.querySelectorAll("[data-toggle-pw]").forEach(function (eyeBtn) {
        eyeBtn.addEventListener("click", function () {
          const inputId = eyeBtn.getAttribute("data-toggle-pw");
          const inp = modalElement.querySelector("#" + inputId);
          if (inp) {
            inp.type = (inp.type === "password") ? "text" : "password";
          }
        });
      });

      // პაროლის ცოცხალი ვალიდაციის ინდიკატორი
      const regPwInput = modalElement.querySelector("#fp-reg-pw");
      if (regPwInput) {
        regPwInput.addEventListener("input", function () {
          const rules = evaluatePasswordRules(regPwInput.value);
          Object.keys(rules).forEach(function (ruleKey) {
            const ruleEl = modalElement.querySelector('[data-pw-rule="' + ruleKey + '"]');
            if (ruleEl) {
              const dotEl = ruleEl.querySelector(".fp-pw-rule-dot");
              if (rules[ruleKey]) {
                ruleEl.classList.add("met");
                if (dotEl) dotEl.textContent = "✓";
              } else {
                ruleEl.classList.remove("met");
                if (dotEl) dotEl.textContent = "•";
              }
            }
          });
        });
      }

      const regForm = modalElement.querySelector("#fp-register-form");
      if (regForm) {
        regForm.addEventListener("submit", function (e) {
          e.preventDefault();
          Auth.handleRegister({
            fullName: modalElement.querySelector("#fp-reg-name").value,
            email: modalElement.querySelector("#fp-reg-email").value,
            level: modalElement.querySelector("#fp-reg-level").value,
            password: modalElement.querySelector("#fp-reg-pw").value,
            confirmPassword: modalElement.querySelector("#fp-reg-pw2").value
          }, modalElement.querySelector("#fp-reg-submit-btn"));
        });
      }

      const loginForm = modalElement.querySelector("#fp-login-form");
      if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
          e.preventDefault();
          Auth.handleLogin({
            email: modalElement.querySelector("#fp-login-email").value,
            password: modalElement.querySelector("#fp-login-pw").value
          }, modalElement.querySelector("#fp-login-submit-btn"));
        });
      }
    },

    syncHeaderAuthUI: function () {
      const headerRight = document.querySelector(".top-header__right, .header-actions, header");
      if (!headerRight) return;

      let container = document.getElementById("fp-header-auth-slot");
      if (!container) {
        container = document.createElement("div");
        container.id = "fp-header-auth-slot";
        container.style.display = "inline-flex";
        container.style.alignItems = "center";

        const existingAuthBtn = document.getElementById("header-auth-btn") || document.getElementById("auth-trigger-btn");
        if (existingAuthBtn && existingAuthBtn.parentNode) {
          existingAuthBtn.style.display = "none";
          existingAuthBtn.parentNode.insertBefore(container, existingAuthBtn);
        } else {
          headerRight.appendChild(container);
        }
      }

      if (currentCloudUser) {
        container.innerHTML =
          '<button type="button" class="header-user-chip" id="fp-open-profile-btn" title="Supabase პროფილი">' +
            '<span class="header-user-avatar">' + App.UI.escapeHTML(getInitials(currentCloudUser.fullName)) + "</span>" +
            '<span>' + App.UI.escapeHTML(currentCloudUser.fullName.split(" ")[0]) + "</span>" +
          "</button>";
        container.querySelector("#fp-open-profile-btn").addEventListener("click", function () {
          Auth.openModal();
        });
      } else {
        container.innerHTML =
          '<button type="button" class="header-auth-btn" id="fp-open-auth-btn">' +
            '<span>☁️ შესვლა / რეგისტრაცია</span>' +
          "</button>";
        container.querySelector("#fp-open-auth-btn").addEventListener("click", function () {
          Auth.openModal("login");
        });
      }
    }
  };

  App.Auth = Auth;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(function () { Auth.initClient(); }, 35);
    });
  } else {
    window.setTimeout(function () { Auth.initClient(); }, 35);
  }
})(window);