/**
 * AUTH.JS — მომხმარებლის რეგისტრაციის, ავტორიზაციისა და პროფილის მართვის სისტემა
 * - ინახავს მომხმარებლების ანგარიშებს და თითოეული მომხმარებლის ინდივიდუალურ პროგრესს
 * - ავტომატურად სინქრონიზდება Supabase-თან (თუ ჩართულია) და ლოკალურ ბაზასთან.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const USERS_DB_KEY = "fluentpath_users_registry_v1";
  const ACTIVE_USER_KEY = "fluentpath_active_session_user_v1";
  const USER_SNAPSHOT_PREFIX = "fluentpath_user_snapshot_v1_";

  let activeTab = "register"; // "login" | "register"
  let modalElement = null;

  function getUsersRegistry() {
    try {
      const raw = window.localStorage.getItem(USERS_DB_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return (parsed && typeof parsed === "object") ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function saveUsersRegistry(registry) {
    try {
      window.localStorage.setItem(USERS_DB_KEY, JSON.stringify(registry));
    } catch (e) {}
  }

  function getActiveUser() {
    try {
      const raw = window.localStorage.getItem(ACTIVE_USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setActiveUser(userObj) {
    try {
      if (userObj) {
        window.localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(userObj));
      } else {
        window.localStorage.removeItem(ACTIVE_USER_KEY);
      }
    } catch (e) {}
  }

  function getInitials(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "U";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  /**
   * ინახავს მიმდინარე მომხმარებლის მთლიან სასწავლო პროგრესს (Storage + Leitner ყუთები)
   */
  function saveUserProgressSnapshot(email) {
    if (!email) return;
    const cleanEmail = String(email).toLowerCase().trim();
    try {
      const snapshot = {
        appState: (App.Storage && typeof App.Storage.getState === "function") ? App.Storage.getState() : null,
        leitnerBoxes: window.localStorage.getItem("fluentpath_leitner_boxes_v2"),
        selectedFcLevels: window.localStorage.getItem("fluentpath_selected_fc_levels_v2"),
        updatedAt: new Date().toISOString()
      };
      window.localStorage.setItem(USER_SNAPSHOT_PREFIX + cleanEmail, JSON.stringify(snapshot));
    } catch (e) {}
  }

  /**
   * ტვირთავს კონკრეტული მომხმარებლის შენახულ პროგრესს შესვლისას
   */
  function loadUserProgressSnapshot(email, initialLevel) {
    if (!email) return;
    const cleanEmail = String(email).toLowerCase().trim();
    try {
      const raw = window.localStorage.getItem(USER_SNAPSHOT_PREFIX + cleanEmail);
      if (raw) {
        const snapshot = JSON.parse(raw);
        if (snapshot.leitnerBoxes !== undefined && snapshot.leitnerBoxes !== null) {
          window.localStorage.setItem("fluentpath_leitner_boxes_v2", snapshot.leitnerBoxes);
        } else {
          window.localStorage.removeItem("fluentpath_leitner_boxes_v2");
        }
        if (snapshot.selectedFcLevels) {
          window.localStorage.setItem("fluentpath_selected_fc_levels_v2", snapshot.selectedFcLevels);
        }
        if (snapshot.appState && App.Storage && typeof App.Storage.saveState === "function") {
          App.Storage.saveState(snapshot.appState);
        }
      } else {
        // ახალი მომხმარებელია — მივაბათ მიმდინარე პროგრესი და დავაყენოთ არჩეული დონე
        if (initialLevel && App.Storage && typeof App.Storage.set === "function") {
          App.Storage.set("progress.level", initialLevel);
        }
        saveUserProgressSnapshot(cleanEmail);
      }
    } catch (e) {}
  }

  /**
   * სტუმრის რეჟიმზე გადართვა (გამოსვლისას)
   */
  function resetToFreshGuestSession() {
    try {
      window.localStorage.removeItem("fluentpath_leitner_boxes_v2");
      if (App.Storage && typeof App.Storage.resetAll === "function") {
        App.Storage.resetAll();
      }
    } catch (e) {}
  }

  const Auth = {
    getCurrentUser: function () {
      return getActiveUser();
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

    handleRegister: function (formData) {
      const fullName = String(formData.fullName || "").trim();
      const email = String(formData.email || "").toLowerCase().trim();
      const password = String(formData.password || "");
      const confirmPassword = String(formData.confirmPassword || "");
      const startLevel = String(formData.level || "A1");

      if (fullName.length < 2) {
        this.showError("გთხოვთ მიუთითოთ თქვენი სახელი (მინიმუმ 2 სიმბოლო).");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.showError("გთხოვთ მიუთითოთ სწორი ელ-ფოსტის მისამართი.");
        return;
      }
      if (password.length < 6) {
        this.showError("პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან.");
        return;
      }
      if (password !== confirmPassword) {
        this.showError("პაროლები ერთმანეთს არ ემთხვევა.");
        return;
      }

      const registry = getUsersRegistry();
      if (registry[email]) {
        this.showError("ამ ელ-ფოსტით მომხმარებელი უკვე რეგისტრირებულია. გადადით „შესვლის“ ჩანართზე.");
        return;
      }

      const newUser = {
        id: "usr_" + Date.now(),
        fullName: fullName,
        email: email,
        password: password,
        level: startLevel,
        createdAt: new Date().toISOString()
      };

      registry[email] = newUser;
      saveUsersRegistry(registry);

      if (App.Storage && typeof App.Storage.set === "function") {
        App.Storage.set("progress.level", startLevel);
        App.Storage.set("user.name", fullName);
        App.Storage.set("user.email", email);
      }

      saveUserProgressSnapshot(email);
      setActiveUser({
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
        level: newUser.level,
        createdAt: newUser.createdAt
      });

      this.syncHeaderAuthUI();
      if (App.Progress && typeof App.Progress.syncHeaderStats === "function") {
        App.Progress.syncHeaderStats();
      }
      if (App.Router && typeof App.Router.handleRoute === "function") {
        App.Router.handleRoute();
      }

      this.closeModal();
      if (App.UI) {
        App.UI.playSound("success");
        App.UI.toast("🎉 რეგისტრაცია წარმატებით დასრულდა! მოგესალმებით, " + fullName + "!", "success", 3600);
      }
    },

    handleLogin: function (formData) {
      const email = String(formData.email || "").toLowerCase().trim();
      const password = String(formData.password || "");

      if (!email || !password) {
        this.showError("გთხოვთ შეავსოთ ელ-ფოსტა და პაროლი.");
        return;
      }

      const registry = getUsersRegistry();
      const existing = registry[email];

      if (!existing || existing.password !== password) {
        this.showError("ელ-ფოსტა ან პაროლი არასწორია. გთხოვთ გადაამოწმოთ.");
        return;
      }

      // თუ სხვა მომხმარებელი იყო შესული, ჯერ მისი პროგრესი შევინახოთ
      const prevUser = getActiveUser();
      if (prevUser && prevUser.email) {
        saveUserProgressSnapshot(prevUser.email);
      }

      loadUserProgressSnapshot(email, existing.level);

      setActiveUser({
        id: existing.id,
        fullName: existing.fullName,
        email: existing.email,
        level: existing.level,
        createdAt: existing.createdAt
      });

      this.syncHeaderAuthUI();
      if (App.Progress && typeof App.Progress.syncHeaderStats === "function") {
        App.Progress.syncHeaderStats();
      }
      if (App.Router && typeof App.Router.handleRoute === "function") {
        App.Router.handleRoute();
      }

      this.closeModal();
      if (App.UI) {
        App.UI.playSound("success");
        App.UI.toast("👋 კეთილი იყოს თქვენი დაბრუნება, " + existing.fullName + "!", "success", 3200);
      }
    },

    handleLogout: function () {
      const currentUser = getActiveUser();
      if (currentUser && currentUser.email) {
        saveUserProgressSnapshot(currentUser.email);
      }
      setActiveUser(null);
      resetToFreshGuestSession();

      this.syncHeaderAuthUI();
      if (App.Progress && typeof App.Progress.syncHeaderStats === "function") {
        App.Progress.syncHeaderStats();
      }
      if (App.Router && typeof App.Router.handleRoute === "function") {
        App.Router.handleRoute();
      }

      this.closeModal();
      if (App.UI) {
        App.UI.toast("თქვენ გამოხვედით ანგარიშიდან. პროგრესი შენახულია.", "info", 2800);
      }
    },

    renderModalContent: function () {
      if (!modalElement) return;
      const user = getActiveUser();

      // თუ მომხმარებელი უკვე შესულია, ვაჩვენოთ პროფილის მართვის ფანჯარა
      if (user) {
        const xp = (App.Storage && typeof App.Storage.get === "function") ? App.Storage.get("progress.xp", 0) : 0;
        const streak = (App.Storage && typeof App.Storage.get === "function") ? App.Storage.get("progress.streak", 1) : 1;
        const learned = (App.Storage && typeof App.Storage.get === "function") ? (App.Storage.get("vocabulary.learnedIds", []) || []).length : 0;
        const curLevel = (App.Storage && typeof App.Storage.get === "function") ? App.Storage.get("progress.level", user.level || "A1") : "A1";

        const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
        const levelOptionsHtml = levels.map(function (lvl) {
          return '<option value="' + lvl + '" ' + (curLevel === lvl ? "selected" : "") + '>დონე ' + lvl + "</option>";
        }).join("");

        modalElement.innerHTML =
          '<div class="fp-auth-modal" role="dialog" aria-modal="true">' +
            '<button type="button" class="fp-auth-close-btn" id="fp-modal-close-btn" title="დახურვა">✕</button>' +
            '<div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">' +
              '<div class="header-user-avatar" style="width:52px; height:52px; font-size:1.2rem;">' + App.UI.escapeHTML(getInitials(user.fullName)) + "</div>" +
              "<div>" +
                '<h3 class="section-title" style="font-size:1.25rem;">' + App.UI.escapeHTML(user.fullName) + "</h3>" +
                '<div style="font-size:0.84rem; color:var(--text-secondary);">' + App.UI.escapeHTML(user.email) + "</div>" +
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
              '<input type="text" id="fp-profile-name-input" class="fp-input" value="' + App.UI.escapeHTML(user.fullName) + '" />' +
            "</div>" +

            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-profile-level-select">სამიზნე CEFR დონე</label>' +
              '<select id="fp-profile-level-select" class="fp-input">' + levelOptionsHtml + "</select>" +
            "</div>" +

            '<div style="display:flex; justify-content:space-between; gap:10px; margin-top:20px;">' +
              '<button type="button" class="btn btn-outline" id="fp-logout-btn" style="color:var(--color-danger); border-color:var(--color-danger);">🚪 გამოსვლა</button>' +
              '<button type="button" class="btn btn-primary" id="fp-save-profile-btn">✓ ცვლილებების შენახვა</button>' +
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
            user.fullName = newName;
            user.level = newLvl;
            setActiveUser(user);

            const reg = getUsersRegistry();
            if (reg[user.email]) {
              reg[user.email].fullName = newName;
              reg[user.email].level = newLvl;
              saveUsersRegistry(reg);
            }
            if (App.Storage && typeof App.Storage.set === "function") {
              App.Storage.set("progress.level", newLvl);
              App.Storage.set("user.name", newName);
            }
            saveUserProgressSnapshot(user.email);
            Auth.syncHeaderAuthUI();
            if (App.Progress && typeof App.Progress.syncHeaderStats === "function") {
              App.Progress.syncHeaderStats();
            }
            Auth.closeModal();
            App.UI.toast("✓ პროფილი წარმატებით განახლდა!", "success", 2200);
          }
        });
        return;
      }

      // სტუმრის რეჟიმი — რეგისტრაციისა და შესვლის ფორმა
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
              '<label class="fp-form-label" for="fp-reg-pw">პაროლი (მინ. 6 სიმბოლო)</label>' +
              '<div class="fp-input-wrap">' +
                '<input type="password" id="fp-reg-pw" class="fp-input" placeholder="••••••••" required />' +
                '<button type="button" class="fp-pw-toggle" data-toggle-pw="fp-reg-pw" title="პაროლის ჩვენება">👁️</button>' +
              "</div>" +
            "</div>" +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-reg-pw2">გაიმეორეთ პაროლი</label>' +
              '<div class="fp-input-wrap">' +
                '<input type="password" id="fp-reg-pw2" class="fp-input" placeholder="••••••••" required />' +
                '<button type="button" class="fp-pw-toggle" data-toggle-pw="fp-reg-pw2" title="პაროლის ჩვენება">👁️</button>' +
              "</div>" +
            "</div>" +
            '<button type="submit" class="btn btn-primary" style="width:100%; margin-top:6px; padding:12px;">🚀 ანგარიშის შექმნა და დაწყება</button>' +
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
            '<button type="submit" class="btn btn-primary" style="width:100%; margin-top:8px; padding:12px;">🔑 სისტემაში შესვლა</button>' +
          "</form>";

      modalElement.innerHTML =
        '<div class="fp-auth-modal" role="dialog" aria-modal="true">' +
          '<button type="button" class="fp-auth-close-btn" id="fp-modal-close-btn" title="დახურვა">✕</button>' +
          '<div style="text-align:center;">' +
            '<div style="font-size:2.1rem; margin-bottom:4px;">🎓</div>' +
            '<h3 class="section-title" style="font-size:1.35rem;">' + (isReg ? "შექმენით პირადი ანგარიში" : "შესვლა პირად ანგარიშზე") + "</h3>" +
            '<p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">შეინახეთ თქვენი XP, სტრიკი, ბარათების ყუთები და გახსნილი თემები.</p>' +
          "</div>" +

          '<div class="fp-auth-tabs">' +
            '<button type="button" class="fp-auth-tab ' + (isReg ? "active" : "") + '" data-switch-auth-tab="register">📝 რეგისტრაცია</button>' +
            '<button type="button" class="fp-auth-tab ' + (!isReg ? "active" : "") + '" data-switch-auth-tab="login">🔑 შესვლა</button>' +
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
          });
        });
      }

      const loginForm = modalElement.querySelector("#fp-login-form");
      if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
          e.preventDefault();
          Auth.handleLogin({
            email: modalElement.querySelector("#fp-login-email").value,
            password: modalElement.querySelector("#fp-login-pw").value
          });
        });
      }
    },

    /**
     * ამატებს ან აახლებს "შესვლა / რეგისტრაცია" ან მომხმარებლის პროფილის ღილაკს Header-ში
     */
    syncHeaderAuthUI: function () {
      const headerRight = document.querySelector(".top-header__right, .header-actions, header");
      if (!headerRight) return;

      let container = document.getElementById("fp-header-auth-slot");
      if (!container) {
        container = document.createElement("div");
        container.id = "fp-header-auth-slot";
        container.style.display = "inline-flex";
        container.style.alignItems = "center";

        // თუ არსებობს ძველი auth ღილაკი, ჩავანაცვლოთ ან ჩავსვათ გვერდით
        const existingAuthBtn = document.getElementById("header-auth-btn") || document.getElementById("auth-trigger-btn");
        if (existingAuthBtn && existingAuthBtn.parentNode) {
          existingAuthBtn.style.display = "none";
          existingAuthBtn.parentNode.insertBefore(container, existingAuthBtn);
        } else {
          headerRight.appendChild(container);
        }
      }

      const user = getActiveUser();
      if (user) {
        container.innerHTML =
          '<button type="button" class="header-user-chip" id="fp-open-profile-btn" title="პირადი პროფილი და გამოსვლა">' +
            '<span class="header-user-avatar">' + App.UI.escapeHTML(getInitials(user.fullName)) + "</span>" +
            '<span>' + App.UI.escapeHTML(user.fullName.split(" ")[0]) + "</span>" +
          "</button>";
        container.querySelector("#fp-open-profile-btn").addEventListener("click", function () {
          Auth.openModal();
        });
      } else {
        container.innerHTML =
          '<button type="button" class="header-auth-btn" id="fp-open-auth-btn">' +
            '<span>👤 რეგისტრაცია / შესვლა</span>' +
          "</button>";
        container.querySelector("#fp-open-auth-btn").addEventListener("click", function () {
          Auth.openModal("register");
        });
      }
    }
  };

  App.Auth = Auth;

  // ყოველ ჯერზე, როცა მომხმარებელი სწავლობს და XP ან ყუთები ეცვლება, ავტომატურად შევინახოთ მის პროფილზე
  window.addEventListener("beforeunload", function () {
    const u = getActiveUser();
    if (u && u.email) {
      saveUserProgressSnapshot(u.email);
    }
  });

  document.addEventListener("click", function () {
    const u = getActiveUser();
    if (u && u.email) {
      saveUserProgressSnapshot(u.email);
    }
  });

  function initAuthSystem() {
    const u = getActiveUser();
    if (u && u.email) {
      loadUserProgressSnapshot(u.email, u.level);
    }
    Auth.syncHeaderAuthUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(initAuthSystem, 40);
    });
  } else {
    window.setTimeout(initAuthSystem, 40);
  }
})(window);