(function (window) {
  'use strict';

  const App = window.App = window.App || {};
  const STORAGE_KEY = 'fluentpath_app_state_v1';

  function createDefaultState() {
    const today = new Date().toISOString().split('T')[0];
    return {
      meta: {
        version: '1.0.0-phase1-ka',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      settings: {
        theme: 'light',
        cefrLevel: 'A1',
        dailyGoalXP: 20,
        soundEnabled: true,
        userName: 'მოსწავლე'
      },
      progress: {
        xp: 0,
        dailyXP: 0,
        lastStudyDate: today,
        lessonsCompleted: 0,
        vocabularyLearned: 0,
        quizScores: [],
        quizAverage: 0,
        readingCompleted: 0,
        listeningCompleted: 0,
        speakingSessions: 0,
        writingSessions: 0,
        overallPercent: 0,
        levelProgress: {
          A1: 0,
          A2: 0,
          B1: 0,
          B2: 0,
          C1: 0,
          C2: 0
        }
      },
      vocabulary: {
        learnedIds: [],
        bookmarkedIds: [],
        customNotes: {}
      },
      quiz: {
        attempts: 0,
        history: [],
        bestScore: 0
      },
      streak: {
        current: 0,
        longest: 0,
        lastActiveDate: null,
        activeDates: []
      },
      achievements: {
        unlockedIds: []
      },
      recentActivity: [
        {
          id: 'welcome-init',
          title: 'FluentPath-ის ფაზა 1 (საძირკვლის სისტემა) გააქტიურდა',
          category: 'სისტემა',
          xp: 0,
          timestamp: new Date().toISOString(),
          isDemo: true
        }
      ]
    };
  }

  function mergeWithDefaults(saved) {
    const defaults = createDefaultState();
    if (!saved || typeof saved !== 'object') {
      return defaults;
    }

    const mergedSettings = Object.assign({}, defaults.settings, saved.settings || {});
    if (mergedSettings.userName === 'Learner') {
      mergedSettings.userName = 'მოსწავლე';
    }

    let mergedActivities = Array.isArray(saved.recentActivity)
      ? saved.recentActivity
      : defaults.recentActivity;

    mergedActivities = mergedActivities.map((item) => {
      if (item && item.id === 'welcome-init') {
        return Object.assign({}, item, {
          title: 'FluentPath-ის ფაზა 1 (საძირკვლის სისტემა) გააქტიურდა',
          category: 'სისტემა'
        });
      }
      return item;
    });

    return {
      meta: Object.assign({}, defaults.meta, saved.meta || {}, {
        updatedAt: new Date().toISOString()
      }),
      settings: mergedSettings,
      progress: Object.assign({}, defaults.progress, saved.progress || {}, {
        levelProgress: Object.assign(
          {},
          defaults.progress.levelProgress,
          (saved.progress && saved.progress.levelProgress) || {}
        )
      }),
      vocabulary: Object.assign({}, defaults.vocabulary, saved.vocabulary || {}),
      quiz: Object.assign({}, defaults.quiz, saved.quiz || {}),
      streak: Object.assign({}, defaults.streak, saved.streak || {}),
      achievements: Object.assign({}, defaults.achievements, saved.achievements || {}),
      recentActivity: mergedActivities
    };
  }

  const Storage = {
    STORAGE_KEY: STORAGE_KEY,

    getState: function () {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          const initial = createDefaultState();
          this.saveState(initial);
          return initial;
        }
        const parsed = JSON.parse(raw);
        return mergeWithDefaults(parsed);
      } catch (err) {
        return createDefaultState();
      }
    },

    saveState: function (state) {
      try {
        const safeState = mergeWithDefaults(state);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(safeState));
        return true;
      } catch (err) {
        return false;
      }
    },

    get: function (path, fallbackValue) {
      const state = this.getState();
      if (!path) return state;
      const parts = path.split('.');
      let current = state;
      for (let i = 0; i < parts.length; i++) {
        if (current && Object.prototype.hasOwnProperty.call(current, parts[i])) {
          current = current[parts[i]];
        } else {
          return fallbackValue;
        }
      }
      return current !== undefined ? current : fallbackValue;
    },

    set: function (path, value) {
      const state = this.getState();
      const parts = path.split('.');
      let current = state;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part] || typeof current[part] !== 'object') {
          current[part] = {};
        }
        current = current[part];
      }
      current[parts[parts.length - 1]] = value;
      return this.saveState(state);
    },

    remove: function (key) {
      try {
        window.localStorage.removeItem(key);
        return true;
      } catch (err) {
        return false;
      }
    },

    reset: function () {
      const freshState = createDefaultState();
      this.saveState(freshState);
      return freshState;
    },

    exportData: function () {
      const state = this.getState();
      return JSON.stringify(state, null, 2);
    },

    importData: function (jsonString) {
      try {
        const parsed = JSON.parse(jsonString);
        if (!parsed || typeof parsed !== 'object') {
          throw new Error('არასწორი JSON სტრუქტურა.');
        }
        if (!parsed.settings || !parsed.progress) {
          throw new Error('არჩეული ფაილი არ წარმოადგენს FluentPath-ის სარეზერვო ასლს.');
        }
        const merged = mergeWithDefaults(parsed);
        this.saveState(merged);
        return { success: true, state: merged };
      } catch (err) {
        return { success: false, error: err.message || 'უცნობი შეცდომა ფაილის იმპორტისას.' };
      }
    },

    getStorageSizeKB: function () {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY) || '';
        const bytes = new Blob([raw]).size;
        return (bytes / 1024).toFixed(2);
      } catch (e) {
        return '0.00';
      }
    }
  };

  App.Storage = Storage;
})(window);