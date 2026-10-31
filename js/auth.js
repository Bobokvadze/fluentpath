/**
 * AUTH.JS — Supabase ავტორიზაცია + რეგისტრაციის დონის განმსაზღვრელი ტესტი + სტრიკების სისტემა
 * - საიტის გახსნისას ფანჯარა ავტომატურად არ იხსნება (მხოლოდ ღილაკზე დაჭერით).
 * - რეგისტრაციისას ტარდება 12-კითხვიანი ტესტი (A1–C2) და ქულის მიხედვით ენიჭება დონე.
 * - XP სისტემა ამოღებულია, მუშაობს მხოლოდ დღიური სტრიკი (🔥).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  let supabaseClient = null;
  let currentCloudUser = null;
  let activeTab = "login"; // "login" | "register"
  let modalElement = null;
  let syncDebounceTimer = null;
  let lastFocusedBeforeModal = null;
  let authView = null; // null | "forgot" | "recovery" | "delete"
  let releaseAuthFocus = null;

  // სარეგისტრაციო ტესტის დროებითი მდგომარეობა
  let pendingRegistrationData = null; // { fullName, email, password }
  let regPlacementQuestions = [];
  let regPlacementIndex = 0;
  let regPlacementScore = 0;
  let regPlacementFinishedResult = null; // { score, total, assignedLevel }

    // 30-კითხვიანი დიაგნოსტიკური ტესტი (გრამატიკა და ლექსიკონი: 5-5 კითხვა თითოეულ დონეზე A1–C2)
  const PLACEMENT_BANK = [
    // ==================== A1 (5 კითხვა) ====================
    { level: "A1", cat: "🌐 გრამატიკა", q: "Choose the correct form: 'My brother ___ in a commercial bank in Tbilisi.'", options: ["works", "work", "working", "is work"], correct: 0 },
    { level: "A1", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს ქართულად სიტყვა «schedule»?", options: ["განრიგი / ცხრილი", "მისამართი", "სადგური", "საფულე"], correct: 0 },
    { level: "A1", cat: "🌐 გრამატიკა", q: "Choose the correct word: '___ there any new messages for me this morning?'", options: ["Are", "Is", "Have", "Do"], correct: 0 },
    { level: "A1", cat: "🗂️ ლექსიკონი", q: "რომელი ინგლისური სიტყვა ნიშნავს: «შეხვედრა / ვიზიტზე ჩაწერა»?", options: ["appointment", "department", "equipment", "environment"], correct: 0 },
    { level: "A1", cat: "🌐 გრამატიკა", q: "Choose the correct past form: 'We ___ the contract yesterday afternoon.'", options: ["signed", "sign", "have sign", "signing"], correct: 0 },

    // ==================== A2 (5 კითხვა) ====================
    { level: "A2", cat: "🌐 გრამატიკა", q: "Choose the correct form: 'While I ___ the presentation, the power went out.'", options: ["was preparing", "prepared", "prepare", "have prepared"], correct: 0 },
    { level: "A2", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს ქართულად სიტყვა «accommodation»?", options: ["საცხოვრებელი / ღამის გასათევი", "ტრანსპორტირება", "დაზღვევა", "შეთანხმება"], correct: 0 },
    { level: "A2", cat: "🌐 გრამატიკა", q: "Choose the correct comparative: 'Online transfers are much ___ than visiting a branch.'", options: ["faster", "more fast", "fastest", "as fast"], correct: 0 },
    { level: "A2", cat: "🗂️ ლექსიკონი", q: "რომელი სიტყვა ნიშნავს «სანდო / საიმედო»-ს?", options: ["reliable", "flexible", "available", "comfortable"], correct: 0 },
    { level: "A2", cat: "🌐 გრამატიკა", q: "Choose the correct Present Perfect form: 'She ___ already ___ all the invoices.'", options: ["has / checked", "did / check", "was / checking", "have / checked"], correct: 0 },

    // ==================== B1 (5 კითხვა) ====================
    { level: "B1", cat: "🌐 გრამატიკა", q: "Choose the correct Second Conditional: 'If I ___ more free time, I would learn a third language.'", options: ["had", "have", "will have", "would have"], correct: 0 },
    { level: "B1", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს ფრაზული ზმნა «to figure out»?", options: ["გარკვევა / მიხვედრა / ამოხსნა", "გაუქმება / გადადება", "უარის თქმა", "დავიწყება"], correct: 0 },
    { level: "B1", cat: "🌐 გრამატიკა", q: "Choose the correct Passive form: 'The new logistics hub ___ two years ago.'", options: ["was built", "built", "has built", "is building"], correct: 0 },
    { level: "B1", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს სიტყვა «mandatory»?", options: ["სავალდებულო", "ნებაყოფლობითი", "დროებითი", "სახიფათო"], correct: 0 },
    { level: "B1", cat: "🌐 გრამატიკა", q: "Choose the correct preposition: 'All applications must be submitted ___ Friday at 6 PM.'", options: ["by", "until", "during", "for"], correct: 0 },

    // ==================== B2 (5 კითხვა) ====================
    { level: "B2", cat: "🌐 გრამატიკა", q: "Choose the correct Third Conditional: 'If the supplier had delivered on time, we ___ the penalty.'", options: ["would have avoided", "will avoid", "would avoid", "avoided"], correct: 0 },
    { level: "B2", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს პროფესიულ ინგლისურში ზმნა «to mitigate (risks)»?", options: ["რისკების შემცირება / შერბილება", "რისკების გაზრდა", "ხელშეკრულების შეწყვეტა", "ვალდებულების გადაბარება"], correct: 0 },
    { level: "B2", cat: "🌐 გრამატიკა", q: "Choose the correct past modal: 'You ___ informed the legal team earlier — they could have helped.'", options: ["should have", "must", "would", "should"], correct: 0 },
    { level: "B2", cat: "🗂️ ლექსიკონი", q: "რომელი ინგლისური ტერმინი ნიშნავს «წესებთან და რეგულაციებთან შესაბამისობას»?", options: ["compliance", "deficiency", "redundancy", "turnover"], correct: 0 },
    { level: "B2", cat: "🌐 გრამატიკა", q: "Choose the correct Future Perfect: 'By next autumn, he ___ at the institution for ten years.'", options: ["will have worked", "will work", "has worked", "is working"], correct: 0 },

    // ==================== C1 (5 კითხვა) ====================
    { level: "C1", cat: "🌐 გრამატიკა", q: "Choose the correct negative inversion: 'Seldom ___ such a well-documented feasibility study.'", options: ["have we seen", "we have seen", "we saw", "did we saw"], correct: 0 },
    { level: "C1", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს ზედსართავი სახელი «viable» (მაგ: a viable business model)?", options: ["სიცოცხლისუნარიანი / განხორციელებადი", "წამგებიანი / სარისკო", "მოძველებული", "სადავო"], correct: 0 },
    { level: "C1", cat: "🌐 გრამატიკა", q: "Choose the correct Mixed Conditional: 'If she hadn't taken that role in 2023, she ___ head of the department today.'", options: ["wouldn't be", "wouldn't have been", "won't be", "isn't"], correct: 0 },
    { level: "C1", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს სამართლებრივი ფრაზა «free of encumbrances»?", options: ["ყოველგვარი ვალდებულებისა და იპოთეკისგან თავისუფალი", "გადასახადებისგან გათავისუფლებული", "სრულად დაზღვეული", "საჯარო რეესტრში დაურეგისტრირებელი"], correct: 0 },
    { level: "C1", cat: "🌐 გრამატიკა", q: "Choose the formal Subjunctive: 'The board insisted that the audit report ___ submitted before Monday.'", options: ["be", "is", "was", "will be"], correct: 0 },

    // ==================== C2 (5 კითხვა) ====================
    { level: "C2", cat: "🌐 გრამატიკა", q: "Choose the correct formal conditional inversion: '___ the borrower default on the instalment, the bank may invoke recourse.'", options: ["Should", "Unless", "Were", "Had"], correct: 0 },
    { level: "C2", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს C2 დონის სიტყვა «ubiquitous»?", options: ["ყოვლისმომცველი / ყველგან მყოფი", "უკიდურესად იშვიათი", "ორაზროვანი / ბუნდოვანი", "უსაფუძვლო"], correct: 0 },
    { level: "C2", cat: "🌐 გრამატიკა", q: "Choose the correct structure: 'Not until the archival records were cross-checked ___ the truth emerge.'", options: ["did", "had", "was", "has"], correct: 0 },
    { level: "C2", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს სიტყვა «insurmountable» (მაგ: an insurmountable obstacle)?", options: ["დაუძლეველი / გადაულახავი", "უმნიშვნელო / წვრილმანი", "დროებითი", "წინასწარ განჭვრეტადი"], correct: 0 },
    { level: "C2", cat: "🗂️ ლექსიკონი", q: "რას ნიშნავს აკადემიური ტერმინი «ephemeral»?", options: ["ხანმოკლე / წარმავალი", "მარადიული / უცვლელი", "სისტემური", "დადასტურებული"], correct: 0 }
  ];

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function preparePlacementQuestions() {
    return PLACEMENT_BANK.map(function (item) {
      const correctAns = item.options[item.correct];
      const mixed = shuffleArray(item.options);
      return {
        level: item.level,
        cat: item.cat || "🌐 გრამატიკა",
        q: item.q,
        options: mixed,
        correct: mixed.indexOf(correctAns)
      };
    });
  }

  function calculateLevelFromScore(score, total) {
    const pct = total ? Math.round((score / total) * 100) : 0;
    if (pct >= 90) return "C2";
    if (pct >= 75) return "C1";
    if (pct >= 58) return "B2";
    if (pct >= 41) return "B1";
    if (pct >= 25) return "A2";
    return "A1";
  }

  // ===== ლოკალური შენახვა (LocalStorage) =====
  // სტუმრის პროგრესი ინახება GUEST_STATE_KEY-ზე, შესული მომხმარებლის ოფლაინ ასლი — USER_CACHE_PREFIX + id-ზე.
  const GUEST_STATE_KEY = "fluentpath_app_state_v1";
  const USER_CACHE_PREFIX = "fluentpath_user_cache_";
  const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  let activeLocalKey = GUEST_STATE_KEY;

  function readLocalJSON(key) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeLocalJSON(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function removeLocalKey(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  }

  // Supabase-ის სესიიდან (თუ არსებობს) ვიღებთ მომხმარებლის id-ს, რომ ოფლაინ ასლი მყისიერად ჩაიტვირთოს
  function readStoredSessionUserId() {
    try {
      const ref = new URL(App.SupabaseConfig.url).hostname.split(".")[0];
      const session = readLocalJSON("sb-" + ref + "-auth-token");
      return session && session.user && session.user.id ? session.user.id : null;
    } catch (e) {
      return null;
    }
  }

  function isPlainObject(v) {
    return v !== null && typeof v === "object" && !Array.isArray(v);
  }

  // ავსებს დაკარგულ ველებს ნაგულისხმევი მნიშვნელობებით (არსებულ მონაცემებს არ ეხება)
  function fillDefaults(target, defaults) {
    Object.keys(defaults).forEach(function (key) {
      if (target[key] === undefined || target[key] === null) {
        target[key] = defaults[key];
      } else if (isPlainObject(target[key]) && isPlainObject(defaults[key])) {
        fillDefaults(target[key], defaults[key]);
      }
    });
    return target;
  }

  function normalizeState(raw) {
    const state = isPlainObject(raw) ? raw : {};
    fillDefaults(state, createCleanBlankState("A1", "", ""));
    // პარამეტრების გვერდის ველები
    fillDefaults(state, {
      settings: { dailyGoalActivities: 5, soundEnabled: true, userName: "მოსწავლე" }
    });
    let level = state.progress.level;
    if (CEFR_LEVELS.indexOf(level) === -1) level = state.settings.cefrLevel;
    if (CEFR_LEVELS.indexOf(level) === -1) level = "A1";
    state.progress.level = level;
    state.settings.cefrLevel = level;
    return state;
  }

  function getStateTimestamp(state) {
    const t = state && state.meta ? Date.parse(state.meta.updatedAt) : NaN;
    return isNaN(t) ? 0 : t;
  }

  function persistLocally() {
    inMemoryState.meta = inMemoryState.meta || {};
    inMemoryState.meta.updatedAt = new Date().toISOString();
    writeLocalJSON(activeLocalKey, inMemoryState);
  }

  function hasAnyProgress(state) {
    const p = (state && state.progress) || {};
    const v = (state && state.vocabulary) || {};
    return ["completedGrammarIds", "completedReadingIds", "completedListeningIds", "completedWritingIds", "completedLessonIds"]
      .some(function (k) { return Array.isArray(p[k]) && p[k].length > 0; }) ||
      (Array.isArray(v.learnedIds) && v.learnedIds.length > 0) ||
      (isPlainObject(v.boxByWordId) && Object.keys(v.boxByWordId).length > 0);
  }

  // სტუმრად დაგროვებულ პროგრესს უერთებს ახალ/ცარიელ ღრუბლოვან პროფილს, რომ რეგისტრაციისას არაფერი დაიკარგოს
  function mergeGuestProgressInto(target) {
    const guest = readLocalJSON(GUEST_STATE_KEY);
    if (!hasAnyProgress(guest)) return target;

    function unionAt(path) {
      const a = getByPath(target, path, []);
      const b = getByPath(guest, path, []);
      if (!Array.isArray(b) || !b.length) return;
      const merged = (Array.isArray(a) ? a : []).slice();
      b.forEach(function (id) {
        if (merged.indexOf(id) === -1) merged.push(id);
      });
      setByPath(target, path, merged);
    }

    ["progress.completedGrammarIds", "progress.completedReadingIds", "progress.completedListeningIds",
      "progress.completedWritingIds", "progress.completedLessonIds", "progress.completedSpeakingIds",
      "vocabulary.learnedIds", "vocabulary.bookmarkedIds"]
      .forEach(unionAt);

    const boxes = Object.assign({}, getByPath(guest, "vocabulary.boxByWordId", {}), getByPath(target, "vocabulary.boxByWordId", {}));
    setByPath(target, "vocabulary.boxByWordId", boxes);

    const crowns = Object.assign({}, getByPath(guest, "progress.nodeCrowns", {}));
    const ownCrowns = getByPath(target, "progress.nodeCrowns", {});
    Object.keys(ownCrowns || {}).forEach(function (k) {
      crowns[k] = Math.max(Number(crowns[k]) || 0, Number(ownCrowns[k]) || 0);
    });
    setByPath(target, "progress.nodeCrowns", crowns);

    setByPath(target, "progress.vocabularyLearned", getByPath(target, "vocabulary.learnedIds", []).length);
    return target;
  }

  function getTodayDateString() {
    // ადგილობრივი (და არა UTC) თარიღი — სტრიკი შუაღამისას უნდა განახლდეს მომხმარებლის საათით
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function createCleanBlankState(level, fullName, email) {
    return {
      user: {
        name: fullName || "",
        email: email || ""
      },
      settings: {
        theme: "light",
        soundEffects: true
      },
      progress: {
        xp: 0,
        streak: 0,
        lastActiveDate: "",
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

  function daysSinceLastStudy() {
    const lastDate = getByPath(inMemoryState, "progress.lastActiveDate", "");
    if (!lastDate) return null;
    const d1 = new Date(lastDate + "T00:00:00Z");
    const d2 = new Date(getTodayDateString() + "T00:00:00Z");
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    return isNaN(diff) ? null : diff;
  }

  /**
   * სტრიკი ითვლის სწავლის დღეებს (და არა საიტის გახსნას). აქ მხოლოდ ვამოწმებთ, ხომ არ გაწყდა:
   * თუ ბოლო სასწავლო დღე გუშინდელზე ადრე იყო, სტრიკი ნულდება.
   */
  function updateDailyStreakInState() {
    const diff = daysSinceLastStudy();
    if (diff !== null && diff > 1 && Number(getByPath(inMemoryState, "progress.streak", 0)) !== 0) {
      setByPath(inMemoryState, "progress.streak", 0);
    }
  }

  // იძახებს Progress.recordActivity — ანუ როცა მომხმარებელმა რეალურად ისწავლა რამე
  function registerStudyDay() {
    const diff = daysSinceLastStudy();
    if (diff === 0) return;
    const current = Number(getByPath(inMemoryState, "progress.streak", 0)) || 0;
    setByPath(inMemoryState, "progress.streak", diff === 1 ? current + 1 : 1);
    setByPath(inMemoryState, "progress.lastActiveDate", getTodayDateString());
  }

  function commitStateChange() {
    updateDailyStreakInState();
    persistLocally();
    scheduleCloudPush();
  }

  function hookStorage() {
    if (!App.Storage) return;

    App.Storage.getState = function () {
      return inMemoryState;
    };

    App.Storage.saveState = function (newState) {
      if (newState && typeof newState === "object") {
        inMemoryState = normalizeState(newState);
      }
      commitStateChange();
      return inMemoryState;
    };

    App.Storage.get = function (path, defaultValue) {
      return getByPath(inMemoryState, path, defaultValue);
    };

    App.Storage.set = function (path, value) {
      setByPath(inMemoryState, path, value);
      // CEFR დონე ორ ადგილას ინახება (ძველი და ახალი მოდულები) — ვინარჩუნებთ სინქრონში
      if ((path === "settings.cefrLevel" || path === "progress.level") && CEFR_LEVELS.indexOf(value) !== -1) {
        setByPath(inMemoryState, "settings.cefrLevel", value);
        setByPath(inMemoryState, "progress.level", value);
      }
      commitStateChange();
      return value;
    };

    App.Storage.resetAll = function () {
      const lvl = getByPath(inMemoryState, "progress.level", "A1");
      const name = currentCloudUser ? currentCloudUser.fullName : getByPath(inMemoryState, "user.name", "");
      const email = currentCloudUser ? currentCloudUser.email : "";
      inMemoryState = normalizeState(createCleanBlankState(lvl, name, email));
      commitStateChange();
      return inMemoryState;
    };
    App.Storage.reset = App.Storage.resetAll;
    App.Storage.registerStudyDay = registerStudyDay;

    // storage.js-ის importData ძველ სქემაზეა მორგებული და კარგავს user/flashcards ველებს
    App.Storage.importData = function (jsonString) {
      try {
        const parsed = JSON.parse(jsonString);
        if (!isPlainObject(parsed) || !isPlainObject(parsed.settings) || !isPlainObject(parsed.progress)) {
          throw new Error("არჩეული ფაილი არ წარმოადგენს FluentPath-ის სარეზერვო ასლს.");
        }
        inMemoryState = normalizeState(parsed);
        commitStateChange();
        return { success: true, state: inMemoryState };
      } catch (err) {
        return { success: false, error: (err && err.message) || "უცნობი შეცდომა ფაილის იმპორტისას." };
      }
    };

    App.Storage.getStorageSizeKB = function () {
      try {
        const raw = window.localStorage.getItem(activeLocalKey) || "";
        return (new Blob([raw]).size / 1024).toFixed(2);
      } catch (e) {
        return "0.00";
      }
    };
  }

  let cloudSyncFailed = false;

  function pushStateToSupabaseNow() {
    if (syncDebounceTimer) {
      window.clearTimeout(syncDebounceTimer);
      syncDebounceTimer = null;
    }
    if (!supabaseClient || !currentCloudUser || !currentCloudUser.id) return Promise.resolve(false);

    const boxes = getByPath(inMemoryState, "vocabulary.boxByWordId", {});
    const fcLevels = getByPath(inMemoryState, "vocabulary.selectedFcLevels", CEFR_LEVELS);
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

    // supabase-js შეცდომისას Promise-ს არ უარყოფს — ვამოწმებთ res.error-ს
    return supabaseClient
      .from("user_profiles")
      .upsert(payload, { onConflict: "id" })
      .then(function (res) {
        if (res && res.error) throw res.error;
        if (cloudSyncFailed && App.UI) {
          App.UI.toast("☁️ პროგრესი ღრუბელთან კვლავ სინქრონიზებულია.", "success", 2600);
        }
        cloudSyncFailed = false;
        return true;
      })
      .catch(function () {
        // მონაცემები ლოკალურად უკვე შენახულია; ვცდით ხელახლა, როცა კავშირი აღდგება
        if (!cloudSyncFailed && App.UI) {
          App.UI.toast("⚠️ ღრუბელთან სინქრონიზაცია ვერ მოხერხდა. პროგრესი შენახულია ამ მოწყობილობაზე და გაიგზავნება კავშირის აღდგენისას.", "warning", 5000);
        }
        cloudSyncFailed = true;
        return false;
      });
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

  window.addEventListener("online", function () {
    if (currentCloudUser && cloudSyncFailed) pushStateToSupabaseNow();
  });

  // გვერდის დახურვისას დაუგზავნელი ცვლილებები მაშინვე გავგზავნოთ
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden" && syncDebounceTimer) pushStateToSupabaseNow();
  });

  // ადრეული ჩატვირთვა: სტორიჯი უნდა იყოს მიბმული სანამ app.js ინიციალიზაციას დაიწყებს
  (function bootstrapLocalState() {
    const cachedUserId = App.SupabaseConfig ? readStoredSessionUserId() : null;
    const cached = cachedUserId ? readLocalJSON(USER_CACHE_PREFIX + cachedUserId) : null;
    if (cached) {
      activeLocalKey = USER_CACHE_PREFIX + cachedUserId;
      inMemoryState = normalizeState(cached);
    } else {
      activeLocalKey = GUEST_STATE_KEY;
      inMemoryState = normalizeState(readLocalJSON(GUEST_STATE_KEY));
    }
    updateDailyStreakInState();
    hookStorage();
  })();

  function switchToGuestState() {
    currentCloudUser = null;
    activeLocalKey = GUEST_STATE_KEY;
    inMemoryState = normalizeState(readLocalJSON(GUEST_STATE_KEY));
    updateDailyStreakInState();
  }

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

  // ელ-ფოსტის ბმულები (დადასტურება, პაროლის აღდგენა) აბრუნებს იმავე გვერდზე, სადაც საიტი გაიხსნა
  function getAuthRedirectUrl() {
    return window.location.origin + window.location.pathname;
  }

  function getInitials(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "U";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function refreshEntireAppUI() {
    if (App.UI && typeof App.UI.applyTheme === "function") {
      App.UI.applyTheme(getByPath(inMemoryState, "settings.theme", "light"));
    }
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
      if (!App.SupabaseConfig || !App.SupabaseConfig.url || !App.SupabaseConfig.anonKey) {
        return;
      }
      if (!window.supabase) {
        // Supabase SDK იტვირთება async-ით (CDN-ის ნელი ქსელი აპის ჩატვირთვას აღარ აფერხებს) — ჩატვირთვას ვუცდით
        Auth.syncHeaderAuthUI();
        const sdk = document.getElementById("supabase-sdk");
        if (sdk && !sdk._fpWaiting) {
          sdk._fpWaiting = true;
          sdk.addEventListener("load", function () { Auth.initClient(); }, { once: true });
        }
        return;
      }
      if (supabaseClient) return;

      supabaseClient = window.supabase.createClient(App.SupabaseConfig.url, App.SupabaseConfig.anonKey);

      // შევამოწმოთ აქტიური სესია — მაგრამ თუ მომხმარებელი არ არის შესული, ფანჯარას ავტომატურად ა რ  ვ ხ ს ნ ი თ!
      supabaseClient.auth.getSession().then(function (res) {
        const session = res && res.data ? res.data.session : null;
        if (session && session.user) {
          Auth.loadUserProfileFromSupabase(session.user, false);
        } else {
          // ოფლაინ ასლი ეკუთვნოდა ვადაგასულ სესიას — ვბრუნდებით სტუმრის პროგრესზე
          if (activeLocalKey !== GUEST_STATE_KEY) switchToGuestState();
          refreshEntireAppUI();
        }
      }).catch(function () {
        // ქსელი მიუწვდომელია — ვაგრძელებთ ლოკალური მონაცემებით
        refreshEntireAppUI();
      });

      supabaseClient.auth.onAuthStateChange(function (event) {
        // მომხმარებელი დაბრუნდა პაროლის აღდგენის ბმულით — ვთავაზობთ ახალი პაროლის დაყენებას
        if (event === "PASSWORD_RECOVERY") {
          authView = "recovery";
          window.setTimeout(function () { Auth.openModal(); }, 50);
          return;
        }
        // სესია სხვა ჩანართში ან ვადის გასვლით დასრულდა
        if (event === "SIGNED_OUT" && currentCloudUser) {
          switchToGuestState();
          refreshEntireAppUI();
        }
      });
    },

    loadUserProfileFromSupabase: function (supaUser, isNewRegistration, chosenName, assignedLevel) {
      if (!supabaseClient || !supaUser) return Promise.resolve();

      const fallbackName = chosenName || (supaUser.user_metadata && supaUser.user_metadata.full_name) || supaUser.email.split("@")[0];
      const fallbackLevel = assignedLevel || (supaUser.user_metadata && supaUser.user_metadata.cefr_level) || "A1";

      const userCacheKey = USER_CACHE_PREFIX + supaUser.id;

      if (isNewRegistration) {
        // წინა დონეების გასახსნელად სრული თემების სიებია საჭირო — პაკეტები შეიძლება ჯერ არ იყოს ჩატვირთული
        const packsReady = typeof App.loadModuleData === "function"
          ? App.loadModuleData(["grammar", "reading", "listening", "writing"]).catch(function (err) { console.warn(err); })
          : Promise.resolve();
        return packsReady.then(function () {
          inMemoryState = createCleanBlankState(fallbackLevel, fallbackName, supaUser.email);
          setByPath(inMemoryState, "vocabulary.selectedFcLevels", [fallbackLevel]);

          // გავუხსნათ დადგენილ დონემდე არსებული წინა დონეების თემები ყველა მოდულში
          const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];
          const assignedIdx = levelOrder.indexOf(fallbackLevel);
          if (assignedIdx > 0) {
            const passedLevels = levelOrder.slice(0, assignedIdx);
            if (App.Grammar && typeof App.Grammar.getAllTopics === "function") {
              const gIds = App.Grammar.getAllTopics().filter(function (x) { return passedLevels.indexOf(x.level) !== -1; }).map(function (x) { return x.id; });
              setByPath(inMemoryState, "progress.completedGrammarIds", gIds);
            }
            if (App.Reading && typeof App.Reading.getAllPassages === "function") {
              const rIds = App.Reading.getAllPassages().filter(function (x) { return passedLevels.indexOf(x.level) !== -1; }).map(function (x) { return x.id; });
              setByPath(inMemoryState, "progress.completedReadingIds", rIds);
            }
            if (App.Listening && typeof App.Listening.getAllTopics === "function") {
              const lIds = App.Listening.getAllTopics().filter(function (x) { return passedLevels.indexOf(x.level) !== -1; }).map(function (x) { return x.id; });
              setByPath(inMemoryState, "progress.completedListeningIds", lIds);
            }
            if (App.Writing && typeof App.Writing.getAllTopics === "function") {
              const wIds = App.Writing.getAllTopics().filter(function (x) { return passedLevels.indexOf(x.level) !== -1; }).map(function (x) { return x.id; });
              setByPath(inMemoryState, "progress.completedWritingIds", wIds);
            }
          }

          if (App.Learn && typeof App.Learn.setActiveLevelTab === "function") {
            App.Learn.setActiveLevelTab(fallbackLevel);
          }

          mergeGuestProgressInto(inMemoryState);
          inMemoryState = normalizeState(inMemoryState);

          currentCloudUser = {
            id: supaUser.id,
            email: supaUser.email,
            fullName: fallbackName,
            level: fallbackLevel
          };
          activeLocalKey = userCacheKey;
          persistLocally();
          return pushStateToSupabaseNow().then(function () {
            refreshEntireAppUI();
          });
        });
      }

      return supabaseClient
        .from("user_profiles")
        .select("*")
        .eq("id", supaUser.id)
        .maybeSingle()
        .then(function (result) {
          if (result && result.error) throw result.error;
          const row = result && result.data ? result.data : null;
          const localCache = readLocalJSON(userCacheKey);
          const cloudTime = row && row.updated_at ? (Date.parse(row.updated_at) || 0) : 0;
          let source = "blank";

          if (row && row.state_json && Object.keys(row.state_json).length > 0) {
            source = (localCache && getStateTimestamp(localCache) > cloudTime) ? "local" : "cloud";
          } else if (localCache) {
            source = "local";
          }

          if (source === "cloud") {
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
          } else if (source === "local") {
            // ამ მოწყობილობაზე ოფლაინ შეტანილი ცვლილებები ღრუბელზე ახალია
            inMemoryState = localCache;
          } else {
            inMemoryState = mergeGuestProgressInto(createCleanBlankState(fallbackLevel, fallbackName, supaUser.email));
          }

          inMemoryState = normalizeState(inMemoryState);
          if (row && row.cefr_level && source === "cloud") {
            inMemoryState.settings.cefrLevel = inMemoryState.progress.level;
          }
          updateDailyStreakInState();
          currentCloudUser = {
            id: supaUser.id,
            email: supaUser.email,
            fullName: (row && row.full_name) || fallbackName,
            level: inMemoryState.progress.level
          };
          activeLocalKey = userCacheKey;
          persistLocally();
          pushStateToSupabaseNow();
          refreshEntireAppUI();
        })
        .catch(function () {
          // ქსელის შეცდომა: ვიყენებთ ამ მოწყობილობაზე შენახულ ასლს (თუ არსებობს)
          const localCache = readLocalJSON(userCacheKey);
          currentCloudUser = {
            id: supaUser.id,
            email: supaUser.email,
            fullName: fallbackName,
            level: fallbackLevel
          };
          activeLocalKey = userCacheKey;
          inMemoryState = normalizeState(localCache || createCleanBlankState(fallbackLevel, fallbackName, supaUser.email));
          cloudSyncFailed = true;
          refreshEntireAppUI();
        });
    },

    ensureModalCreated: function () {
      if (modalElement) return modalElement;
      const backdrop = document.createElement("div");
      backdrop.className = "fp-auth-backdrop";
      backdrop.id = "fp-auth-backdrop";
      backdrop.setAttribute("role", "dialog");
      backdrop.setAttribute("aria-modal", "true");
      backdrop.setAttribute("aria-label", "ანგარიში");
      backdrop.addEventListener("click", function (e) {
        if (e.target === backdrop && !pendingRegistrationData && authView !== "recovery") {
          Auth.closeModal();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && backdrop.classList.contains("is-open") && !pendingRegistrationData && authView !== "recovery") {
          Auth.closeModal();
        }
      });
      document.body.appendChild(backdrop);
      modalElement = backdrop;
      return backdrop;
    },

    openModal: function (defaultTab) {
      if (defaultTab) authView = null;
      pendingRegistrationData = null;
      regPlacementFinishedResult = null;
      if (defaultTab === "login" || defaultTab === "register") {
        activeTab = defaultTab;
      }
      this.ensureModalCreated();
      this.renderModalContent();
      lastFocusedBeforeModal = document.activeElement;
      if (releaseAuthFocus) releaseAuthFocus();
      releaseAuthFocus = App.UI && typeof App.UI.trapFocus === "function" ? App.UI.trapFocus(modalElement) : null;
      window.setTimeout(function () {
        modalElement.classList.add("is-open");
        const firstField = modalElement.querySelector("input") || modalElement.querySelector("button");
        if (firstField) firstField.focus();
      }, 10);
    },

    closeModal: function () {
      if (!modalElement) return;
      pendingRegistrationData = null;
      regPlacementFinishedResult = null;
      if (authView !== "recovery") authView = null;
      modalElement.classList.remove("is-open");
      if (releaseAuthFocus) {
        releaseAuthFocus();
        releaseAuthFocus = null;
      }
      if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === "function") {
        lastFocusedBeforeModal.focus();
      }
      lastFocusedBeforeModal = null;
    },

    showError: function (msg) {
      if (!modalElement) return;
      const errEl = modalElement.querySelector("#fp-auth-error-box");
      if (errEl) {
        errEl.textContent = "⚠️ " + msg;
        errEl.classList.add("visible");
      }
    },

    showResendButton: function (email) {
      if (!modalElement) return;
      const slot = modalElement.querySelector("#fp-auth-extra");
      if (!slot) return;
      slot.innerHTML = '<button type="button" class="btn btn-outline btn-sm" id="fp-resend-btn" style="width:100%;">📧 დადასტურების წერილის ხელახლა გაგზავნა</button>';
      slot.querySelector("#fp-resend-btn").addEventListener("click", function () {
        Auth.resendConfirmation(email, this);
      });
    },

    resendConfirmation: function (email, btn) {
      if (!supabaseClient || !email) return;
      if (btn) {
        btn.disabled = true;
        btn.textContent = "⏳ იგზავნება...";
      }
      supabaseClient.auth.resend({ type: "signup", email: email, options: { emailRedirectTo: getAuthRedirectUrl() } })
        .then(function (res) {
          if (res.error) throw res.error;
          if (btn) btn.textContent = "✓ წერილი გაიგზავნა";
          App.UI.toast("📧 დადასტურების წერილი ხელახლა გაიგზავნა: " + email, "success", 4000);
        })
        .catch(function (err) {
          if (btn) {
            btn.disabled = false;
            btn.textContent = "📧 დადასტურების წერილის ხელახლა გაგზავნა";
          }
          // Supabase ზღუდავს წერილების სიხშირეს (rate limit)
          Auth.showError((err && /rate|seconds/i.test(err.message || "")) ? "გთხოვთ, დაელოდოთ ერთ წუთს და სცადოთ თავიდან." : "წერილის გაგზავნა ვერ მოხერხდა.");
        });
    },

    requestPasswordReset: function (email, btn) {
      const clean = String(email || "").toLowerCase().trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
        this.showError("გთხოვთ მიუთითოთ სწორი ელ-ფოსტის მისამართი.");
        return;
      }
      if (!supabaseClient) return;
      if (btn) {
        btn.disabled = true;
        btn.textContent = "⏳ იგზავნება...";
      }
      supabaseClient.auth.resetPasswordForEmail(clean, { redirectTo: getAuthRedirectUrl() })
        .then(function (res) {
          if (res.error) throw res.error;
          // შეგნებულად არ ვამბობთ, არსებობს თუ არა ანგარიში (ელ-ფოსტების გამოცნობის თავიდან ასაცილებლად)
          modalElement.querySelector("#fp-auth-extra").innerHTML =
            '<p class="fp-auth-note">✓ თუ ამ მისამართზე ანგარიში არსებობს, მასზე გაიგზავნა პაროლის აღდგენის ბმული. შეამოწმეთ შემოსულები (და Spam).</p>';
          if (btn) btn.textContent = "✓ გაიგზავნა";
        })
        .catch(function (err) {
          if (btn) {
            btn.disabled = false;
            btn.textContent = "📧 აღდგენის ბმულის გაგზავნა";
          }
          Auth.showError((err && /rate|seconds/i.test(err.message || "")) ? "გთხოვთ, დაელოდოთ ერთ წუთს და სცადოთ თავიდან." : "ბმულის გაგზავნა ვერ მოხერხდა.");
        });
    },

    saveNewPassword: function (pw, pw2, btn) {
      if (!isPasswordValid(pw)) {
        this.showError("პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, 1 დიდ ასოს, 1 პატარა ასოს, 1 ციფრს და 1 სპეციალურ სიმბოლოს!");
        return;
      }
      if (pw !== pw2) {
        this.showError("პაროლები ერთმანეთს არ ემთხვევა.");
        return;
      }
      if (btn) {
        btn.disabled = true;
        btn.textContent = "⏳ ინახება...";
      }
      supabaseClient.auth.updateUser({ password: pw })
        .then(function (res) {
          if (res.error) throw res.error;
          authView = null;
          Auth.closeModal();
          App.UI.toast("🔐 ახალი პაროლი შენახულია.", "success", 3500);
          if (res.data && res.data.user && !currentCloudUser) {
            Auth.loadUserProfileFromSupabase(res.data.user, false);
          }
        })
        .catch(function (err) {
          if (btn) {
            btn.disabled = false;
            btn.textContent = "🔐 ახალი პაროლის შენახვა";
          }
          Auth.showError((err && err.message) || "პაროლის შეცვლა ვერ მოხერხდა. მოითხოვეთ ახალი ბმული.");
        });
    },

    // ანგარიშის სრული წაშლა: მონაცემთა ბაზის ფუნქცია delete_own_account() შლის მხოლოდ მიმდინარე მომხმარებელს
    deleteAccount: function (btn) {
      if (!supabaseClient || !currentCloudUser) return;
      const userId = currentCloudUser.id;
      if (btn) {
        btn.disabled = true;
        btn.textContent = "⏳ იშლება...";
      }
      supabaseClient.rpc("delete_own_account")
        .then(function (res) {
          if (res.error) throw res.error;
          removeLocalKey(USER_CACHE_PREFIX + userId);
          authView = null;
          return supabaseClient.auth.signOut({ scope: "local" }).catch(function () {});
        })
        .then(function () {
          switchToGuestState();
          refreshEntireAppUI();
          Auth.closeModal();
          App.UI.toast("ანგარიში და მისი მონაცემები წაიშალა.", "info", 4000);
        })
        .catch(function () {
          if (btn) {
            btn.disabled = false;
            btn.textContent = "🗑️ ანგარიშის საბოლოოდ წაშლა";
          }
          Auth.showError("ანგარიშის წაშლა ვერ მოხერხდა. სცადეთ მოგვიანებით.");
        });
    },

    renderSpecialView: function () {
      const esc = App.UI.escapeHTML;
      let title = "";
      let intro = "";
      let body = "";

      if (authView === "forgot") {
        title = "პაროლის აღდგენა";
        intro = "მიუთითეთ ანგარიშის ელ-ფოსტა — გამოგიგზავნით ბმულს ახალი პაროლის დასაყენებლად.";
        body =
          '<form id="fp-forgot-form">' +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-forgot-email">ელ-ფოსტა</label>' +
              '<input type="email" id="fp-forgot-email" class="fp-input" placeholder="name@example.com" autocomplete="email" required />' +
            "</div>" +
            '<button type="submit" class="btn btn-primary" id="fp-forgot-submit" style="width:100%;">📧 აღდგენის ბმულის გაგზავნა</button>' +
          "</form>" +
          '<button type="button" class="fp-auth-link" data-auth-back>← შესვლაზე დაბრუნება</button>';
      } else if (authView === "recovery") {
        title = "ახალი პაროლის დაყენება";
        intro = "შეიყვანეთ ახალი პაროლი თქვენი ანგარიშისთვის.";
        body =
          '<form id="fp-recovery-form">' +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-new-pw">ახალი პაროლი</label>' +
              '<input type="password" id="fp-new-pw" class="fp-input" autocomplete="new-password" placeholder="მინ. 8 სიმბოლო (A-Z, a-z, 0-9, !@#)" required />' +
            "</div>" +
            '<div class="fp-form-group">' +
              '<label class="fp-form-label" for="fp-new-pw2">გაიმეორეთ პაროლი</label>' +
              '<input type="password" id="fp-new-pw2" class="fp-input" autocomplete="new-password" required />' +
            "</div>" +
            '<button type="submit" class="btn btn-primary" id="fp-recovery-submit" style="width:100%;">🔐 ახალი პაროლის შენახვა</button>' +
          "</form>";
      } else if (authView === "delete" && currentCloudUser) {
        title = "ანგარიშის წაშლა";
        intro = "ეს მოქმედება შეუქცევადია: წაიშლება თქვენი ანგარიში და ღრუბელში შენახული მთელი პროგრესი.";
        body =
          '<div class="fp-form-group">' +
            '<label class="fp-form-label" for="fp-delete-confirm">დასადასტურებლად ჩაწერეთ თქვენი ელ-ფოსტა: <strong>' + esc(currentCloudUser.email) + "</strong></label>" +
            '<input type="email" id="fp-delete-confirm" class="fp-input" autocomplete="off" />' +
          "</div>" +
          '<button type="button" class="btn btn-danger" id="fp-delete-submit" style="width:100%;" disabled>🗑️ ანგარიშის საბოლოოდ წაშლა</button>' +
          '<button type="button" class="fp-auth-link" data-auth-back>← გაუქმება</button>';
      }

      modalElement.innerHTML =
        '<div class="fp-auth-modal" role="dialog" aria-modal="true" aria-labelledby="fp-special-title">' +
          (authView === "recovery" ? "" : '<button type="button" class="fp-auth-close-btn" id="fp-modal-close-btn" aria-label="დახურვა">✕</button>') +
          '<div style="text-align:center; margin-bottom:12px;">' +
            '<h3 class="section-title" id="fp-special-title" style="font-size:1.25rem;">' + title + "</h3>" +
            '<p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">' + intro + "</p>" +
          "</div>" +
          '<div class="fp-auth-error" id="fp-auth-error-box" role="alert"></div>' +
          body +
          '<div id="fp-auth-extra"></div>' +
        "</div>";

      const closeBtn = modalElement.querySelector("#fp-modal-close-btn");
      if (closeBtn) closeBtn.addEventListener("click", function () { Auth.closeModal(); });
      modalElement.querySelectorAll("[data-auth-back]").forEach(function (b) {
        b.addEventListener("click", function () {
          authView = null;
          Auth.renderModalContent();
        });
      });

      const forgotForm = modalElement.querySelector("#fp-forgot-form");
      if (forgotForm) {
        forgotForm.addEventListener("submit", function (e) {
          e.preventDefault();
          Auth.requestPasswordReset(modalElement.querySelector("#fp-forgot-email").value, modalElement.querySelector("#fp-forgot-submit"));
        });
      }
      const recoveryForm = modalElement.querySelector("#fp-recovery-form");
      if (recoveryForm) {
        recoveryForm.addEventListener("submit", function (e) {
          e.preventDefault();
          Auth.saveNewPassword(modalElement.querySelector("#fp-new-pw").value, modalElement.querySelector("#fp-new-pw2").value, modalElement.querySelector("#fp-recovery-submit"));
        });
      }
      const delInput = modalElement.querySelector("#fp-delete-confirm");
      const delBtn = modalElement.querySelector("#fp-delete-submit");
      if (delInput && delBtn) {
        delInput.addEventListener("input", function () {
          delBtn.disabled = delInput.value.trim().toLowerCase() !== String(currentCloudUser.email || "").toLowerCase();
        });
        delBtn.addEventListener("click", function () {
          Auth.deleteAccount(delBtn);
        });
      }
    },

    /**
     * ნაბიჯი 1: ამოწმებს სარეგისტრაციო ველებს და გადადის ნაბიჯ 2-ზე (დონის განმსაზღვრელ ტესტზე)
     */
    startRegistrationPlacementStep: function (formData) {
      const fullName = String(formData.fullName || "").trim();
      const email = String(formData.email || "").toLowerCase().trim();
      const password = String(formData.password || "");
      const confirmPassword = String(formData.confirmPassword || "");

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

      pendingRegistrationData = {
        fullName: fullName,
        email: email,
        password: password
      };
      regPlacementQuestions = preparePlacementQuestions();
      regPlacementIndex = 0;
      regPlacementScore = 0;
      regPlacementFinishedResult = null;

      if (App.UI) App.UI.playSound("click");
      this.renderModalContent();
    },

    /**
     * ნაბიჯი 2-ის დასასრული: ტესტის ქულის მიხედვით ქმნის ანგარიშს Supabase-ში და სვამს მომხმარებელს შესაბამის დონეზე
     */
    finalizeRegistrationWithLevel: function (assignedLevel, score, total) {
      if (!pendingRegistrationData || !supabaseClient) return;

      const regData = pendingRegistrationData;
      modalElement.innerHTML =
        '<div class="fp-auth-modal" style="text-align:center; padding:40px 28px;">' +
          '<div style="font-size:2.4rem; margin-bottom:10px;">⏳</div>' +
          '<h3 class="section-title">იქმნება თქვენი ანგარიში...</h3>' +
          '<p style="color:var(--text-secondary); margin-top:6px;">მიმდინარეობს დონე ' + assignedLevel + '-ის შენახვა Supabase-ში.</p>' +
        "</div>";

      supabaseClient.auth.signUp({
        email: regData.email,
        password: regData.password,
        options: {
          // დადასტურების ბმული დააბრუნებს იმავე მისამართზე, სადაც საიტი გაიხსნა (უნდა იყოს Supabase-ის Redirect URLs სიაში)
          emailRedirectTo: getAuthRedirectUrl(),
          data: {
            full_name: regData.fullName,
            cefr_level: assignedLevel
          }
        }
      }).then(function (res) {
        if (res.error) {
          pendingRegistrationData = null;
          activeTab = "register";
          Auth.renderModalContent();
          Auth.showError(res.error.message || "რეგისტრაციის შეცდომა.");
          return;
        }

        const user = res.data ? res.data.user : null;
        if (!user) {
          pendingRegistrationData = null;
          activeTab = "register";
          Auth.renderModalContent();
          Auth.showError("მომხმარებლის შექმნა ვერ მოხერხდა.");
          return;
        }

        if (!res.data.session) {
          // ელ-ფოსტის დადასტურება ჩართულია: სესია ჯერ არ არსებობს, ამიტომ დადგენილ დონეს ვინახავთ
          // ამ მოწყობილობაზე და პირველი შესვლისას ავტომატურად აიტვირთება ღრუბელში
          const pendingState = normalizeState(mergeGuestProgressInto(createCleanBlankState(assignedLevel, regData.fullName, regData.email)));
          pendingState.meta = { updatedAt: new Date().toISOString() };
          writeLocalJSON(USER_CACHE_PREFIX + user.id, pendingState);
          pendingRegistrationData = null;
          activeTab = "login";
          Auth.renderModalContent();
          Auth.showError("ანგარიში შეიქმნა (დონე " + assignedLevel + "). დაადასტურეთ ელ-ფოსტა წერილში მოცემული ბმულით და შემდეგ შედით სისტემაში.");
          return;
        }

        Auth.loadUserProfileFromSupabase(user, true, regData.fullName, assignedLevel).then(function () {
          pendingRegistrationData = null;
          regPlacementFinishedResult = {
            score: score,
            total: total,
            assignedLevel: assignedLevel
          };
          if (App.UI) App.UI.playSound("success");
          Auth.renderModalContent();
        });
      }).catch(function (err) {
        pendingRegistrationData = null;
        activeTab = "register";
        Auth.renderModalContent();
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

      supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      }).then(function (res) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "🔑 სისტემაში შესვლა";
        }
        if (res.error) {
          const code = res.error.code || "";
          if (code === "email_not_confirmed" || /not confirmed/i.test(res.error.message || "")) {
            Auth.showError("ელ-ფოსტა ჯერ არ არის დადასტურებული. იპოვეთ ჩვენი წერილი (შეამოწმეთ Spam) ან გამოგიგზავნით ხელახლა.");
            Auth.showResendButton(email);
          } else {
            Auth.showError("ელ-ფოსტა ან პაროლი არასწორია.");
          }
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
        const userId = currentCloudUser ? currentCloudUser.id : null;
        if (userId) removeLocalKey(USER_CACHE_PREFIX + userId);
        switchToGuestState();
        refreshEntireAppUI();
        Auth.closeModal();
        if (App.UI) {
          App.UI.toast("თქვენ გამოხვედით ანგარიშიდან.", "info", 2600);
        }
      });
    },

    renderModalContent: function () {
      if (!modalElement) return;

      if (authView === "forgot" || authView === "recovery" || (authView === "delete" && currentCloudUser)) {
        this.renderSpecialView();
        return;
      }

      // 1. თუ ახლახან დასრულდა სარეგისტრაციო ტესტი — ვაჩვენოთ დადგენილი დონის შედეგი
      if (regPlacementFinishedResult) {
        const r = regPlacementFinishedResult;
        modalElement.innerHTML =
          '<div class="fp-auth-modal" style="text-align:center;">' +
            '<div style="font-size:3rem; margin-bottom:8px;">🏆</div>' +
            '<h3 class="section-title" style="font-size:1.45rem;">რეგისტრაცია და ტესტი დასრულდა!</h3>' +
            '<p style="color:var(--text-secondary); margin:8px 0 18px;">თქვენ უპასუხეთ სწორად <strong>' + r.score + " / " + r.total + '</strong> კითხვას.</p>' +
            '<div style="padding:18px; border-radius:16px; background:var(--brand-primary-soft); border:2px solid var(--brand-primary); margin-bottom:20px;">' +
              '<div style="font-size:0.82rem; font-weight:800; color:var(--text-secondary); text-transform:uppercase;">თქვენი განსაზღვრული დონეა</div>' +
              '<div style="font-size:2.4rem; font-weight:800; color:var(--brand-primary); margin-top:4px;">დონე ' + r.assignedLevel + "</div>" +
            "</div>" +
            '<button type="button" class="btn btn-primary" id="fp-finish-placement-btn" style="width:100%; padding:12px;">🚀 სწავლის დაწყება (' + r.assignedLevel + ' დონიდან)</button>' +
          "</div>";

        modalElement.querySelector("#fp-finish-placement-btn").addEventListener("click", function () {
          const targetLvl = r.assignedLevel;
          regPlacementFinishedResult = null;
          Auth.closeModal();
          if (App.Learn && typeof App.Learn.setActiveLevelTab === "function") {
            App.Learn.setActiveLevelTab(targetLvl);
          }
          window.location.hash = "#learn";
          if (App.Learn && typeof App.Learn.render === "function") {
            App.Learn.render();
          }
        });
        return;
      }

      // 2. თუ მიმდინარეობს რეგისტრაციის მე-2 ნაბიჯი (12-კითხვიანი დონის ტესტი)
      if (pendingRegistrationData && regPlacementQuestions.length > 0) {
        const qObj = regPlacementQuestions[regPlacementIndex];
        const totalQ = regPlacementQuestions.length;
        const pct = Math.round(((regPlacementIndex + 1) / totalQ) * 100);

        const optsHtml = qObj.options.map(function (opt, oIdx) {
          return (
            '<button type="button" class="fp-placement-opt-btn" data-reg-place-opt="' + oIdx + '">' +
              App.UI.escapeHTML(opt) +
            "</button>"
          );
        }).join("");

        modalElement.innerHTML =
          '<div class="fp-auth-modal" role="dialog" aria-modal="true">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">' +
              '<span class="stat-pill stat-pill--level">🎯 ნაბიჯი 2/2 • დონის ტესტი (' + qObj.level + ')</span>' +
              '<span style="font-size:0.82rem; font-weight:800; color:var(--text-secondary);">კითხვა ' + (regPlacementIndex + 1) + " / " + totalQ + "</span>" +
            "</div>" +
            '<div style="margin-bottom:14px;">' +
              (App.UI && typeof App.UI.renderProgressBar === "function"
                ? App.UI.renderProgressBar(pct, "დიაგნოსტიკის პროგრესი", pct + "%")
                : "") +
            "</div>" +
            '<div class="fp-placement-q-card">' +
              '<div class="fp-placement-q-title">' + (regPlacementIndex + 1) + ". " + App.UI.escapeHTML(qObj.q) + "</div>" +
              '<div class="fp-placement-options">' + optsHtml + "</div>" +
            "</div>" +
            '<p style="font-size:0.78rem; color:var(--text-muted); text-align:center;">თქვენი პასუხების მიხედვით სისტემა ავტომატურად განსაზღვრავს თქვენს CEFR დონეს (A1–C2).</p>' +
          "</div>";

        modalElement.querySelectorAll("[data-reg-place-opt]").forEach(function (btn) {
          btn.addEventListener("click", function () {
            const chosen = Number(btn.getAttribute("data-reg-place-opt"));
            if (chosen === qObj.correct) {
              regPlacementScore++;
              if (App.UI) App.UI.playSound("success");
            } else {
              if (App.UI) App.UI.playSound("click");
            }

            if (regPlacementIndex < regPlacementQuestions.length - 1) {
              regPlacementIndex++;
              Auth.renderModalContent();
            } else {
              const finalLevel = calculateLevelFromScore(regPlacementScore, regPlacementQuestions.length);
              Auth.finalizeRegistrationWithLevel(finalLevel, regPlacementScore, regPlacementQuestions.length);
            }
          });
        });
        return;
      }

      // 3. თუ მომხმარებელი უკვე შესულია — პროფილის ფანჯარა (XP-ის გარეშე, მხოლოდ სტრიკი, დონე და სიტყვები)
      if (currentCloudUser) {
        const streak = Number(getByPath(inMemoryState, "progress.streak", 0)) || 0;
        const learned = (getByPath(inMemoryState, "vocabulary.learnedIds", []) || []).length;
        const curLevel = getByPath(inMemoryState, "progress.level", currentCloudUser.level || "A1");

        modalElement.innerHTML =
          '<div class="fp-auth-modal" role="dialog" aria-modal="true">' +
            '<button type="button" class="fp-auth-close-btn" id="fp-modal-close-btn" title="დახურვა">✕</button>' +
            '<div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">' +
              '<div class="header-user-avatar" style="width:52px; height:52px; font-size:1.2rem;">' + App.UI.escapeHTML(getInitials(currentCloudUser.fullName)) + "</div>" +
              "<div>" +
                '<h3 class="section-title" style="font-size:1.25rem;">' + App.UI.escapeHTML(currentCloudUser.fullName) + "</h3>" +
                '<div style="font-size:0.84rem; color:var(--text-secondary);">☁️ ' + App.UI.escapeHTML(currentCloudUser.email) + "</div>" +
              "</div>" +
            "</div>" +

            '<div class="fp-profile-stat-grid">' +
              '<div class="fp-profile-stat-box">' +
                '<div class="fp-profile-stat-val">🔥 ' + streak + "</div>" +
                '<div class="fp-profile-stat-lbl">დღის სტრიკი</div>' +
              "</div>" +
              '<div class="fp-profile-stat-box">' +
                '<div class="fp-profile-stat-val">🎯 ' + App.UI.escapeHTML(curLevel) + "</div>" +
                '<div class="fp-profile-stat-lbl">დადგენილი დონე</div>' +
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

            '<div style="display:flex; justify-content:space-between; gap:10px; margin-top:20px;">' +
              '<button type="button" class="btn btn-outline" id="fp-logout-btn" style="color:var(--color-danger); border-color:var(--color-danger);">🚪 გამოსვლა</button>' +
              '<button type="button" class="btn btn-primary" id="fp-save-profile-btn">☁️ სახელის შენახვა</button>' +
            "</div>" +
            '<button type="button" class="fp-auth-link fp-auth-link--danger" id="fp-delete-account-link">ანგარიშის წაშლა</button>' +
          "</div>";

        modalElement.querySelector("#fp-modal-close-btn").addEventListener("click", function () {
          Auth.closeModal();
        });

        modalElement.querySelector("#fp-logout-btn").addEventListener("click", function () {
          Auth.handleLogout();
        });

        modalElement.querySelector("#fp-delete-account-link").addEventListener("click", function () {
          authView = "delete";
          Auth.renderModalContent();
        });

        modalElement.querySelector("#fp-save-profile-btn").addEventListener("click", function () {
          const newName = modalElement.querySelector("#fp-profile-name-input").value.trim();
          if (newName.length >= 2) {
            currentCloudUser.fullName = newName;
            setByPath(inMemoryState, "user.name", newName);
            pushStateToSupabaseNow().then(function () {
              refreshEntireAppUI();
              Auth.closeModal();
              App.UI.toast("☁️ პროფილი განახლდა!", "success", 2200);
            });
          }
        });
        return;
      }

      // 4. შესვლის ან რეგისტრაციის 1-ლი ნაბიჯის ფორმა
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
            '<button type="submit" class="btn btn-primary" id="fp-reg-submit-btn" style="width:100%; margin-top:6px; padding:12px;">🎯 გაგრძელება: დონის განმსაზღვრელი ტესტი &rarr;</button>' +
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
            '<button type="button" class="fp-auth-link" id="fp-forgot-link">დაგავიწყდათ პაროლი?</button>' +
          "</form>";

      modalElement.innerHTML =
        '<div class="fp-auth-modal" role="dialog" aria-modal="true">' +
          '<button type="button" class="fp-auth-close-btn" id="fp-modal-close-btn" title="დახურვა">✕</button>' +
          '<div style="text-align:center;">' +
            '<div style="font-size:2rem; margin-bottom:4px;">☁️</div>' +
            '<h3 class="section-title" style="font-size:1.3rem;">' + (isReg ? "ნაბიჯი 1/2: ანგარიშის მონაცემები" : "შესვლა ანგარიშზე") + "</h3>" +
            '<p style="font-size:0.82rem; color:var(--text-secondary); margin-top:4px;">' +
              (isReg
                ? "მონაცემების შევსების შემდეგ გაივლით 30-კითხვიან გრამატიკისა და ლექსიკის ტესტს, რომელიც განსაზღვრავს თქვენს დონეს."
                : "შედით თქვენს ანგარიშზე პროგრესის გასაგრძელებლად.") +
            "</p>" +
          "</div>" +

          '<div class="fp-auth-tabs">' +
            '<button type="button" class="fp-auth-tab ' + (!isReg ? "active" : "") + '" data-switch-auth-tab="login">🔑 შესვლა</button>' +
            '<button type="button" class="fp-auth-tab ' + (isReg ? "active" : "") + '" data-switch-auth-tab="register">📝 რეგისტრაცია</button>' +
          "</div>" +

          '<div class="fp-auth-error" id="fp-auth-error-box" role="alert"></div>' +

          formHtml +
          '<div id="fp-auth-extra"></div>' +
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
          Auth.startRegistrationPlacementStep({
            fullName: modalElement.querySelector("#fp-reg-name").value,
            email: modalElement.querySelector("#fp-reg-email").value,
            password: modalElement.querySelector("#fp-reg-pw").value,
            confirmPassword: modalElement.querySelector("#fp-reg-pw2").value
          });
        });
      }

      const forgotLink = modalElement.querySelector("#fp-forgot-link");
      if (forgotLink) {
        forgotLink.addEventListener("click", function () {
          authView = "forgot";
          Auth.renderModalContent();
          const emailField = modalElement.querySelector("#fp-forgot-email");
          if (emailField) emailField.focus();
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
      // ვიპოვოთ ზუსტად ის მარჯვენა კონტეინერი, სადაც ზის დონე, სტრიკი, თემა და პარამეტრები
      const anchorEl =
        document.getElementById("settings-btn") ||
        document.getElementById("theme-toggle-btn") ||
        document.getElementById("header-streak") ||
        document.querySelector(".stat-pill--streak") ||
        document.querySelector(".stat-pill--level");

      const headerRight = (anchorEl && anchorEl.parentElement)
        ? anchorEl.parentElement
        : document.querySelector(".top-header__right, .header-actions, .header-right, header");

      if (!headerRight) return;

      headerRight.style.display = "flex";
      headerRight.style.alignItems = "center";
      headerRight.style.gap = "10px";
      headerRight.style.marginLeft = "auto";
      headerRight.style.flexShrink = "0";

      let container = document.getElementById("fp-header-auth-slot");
      if (!container) {
        container = document.createElement("div");
        container.id = "fp-header-auth-slot";
      }

      // თუ სხვა მშობელში იჯდა (მაგ. პირდაპირ header-ში), გადმოვიტანოთ მარჯვენა ჯგუფის ბოლოში
      if (container.parentElement !== headerRight) {
        headerRight.appendChild(container);
      }

      if (currentCloudUser) {
        container.innerHTML =
          '<button type="button" class="header-user-chip" id="fp-open-profile-btn" title="პირადი პროფილი" aria-label="პირადი პროფილი">' +
            '<span class="header-user-avatar" aria-hidden="true">' + App.UI.escapeHTML(getInitials(currentCloudUser.fullName)) + "</span>" +
            '<span class="header-user-name">' + App.UI.escapeHTML(currentCloudUser.fullName.split(" ")[0]) + "</span>" +
          "</button>";
        container.querySelector("#fp-open-profile-btn").addEventListener("click", function () {
          Auth.openModal();
        });
      } else {
        container.innerHTML =
          '<button type="button" class="header-auth-btn" id="fp-open-auth-btn" aria-label="შესვლა / რეგისტრაცია">' +
            '<span aria-hidden="true">☁️</span> <span class="header-auth-label">შესვლა / რეგისტრაცია</span>' +
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