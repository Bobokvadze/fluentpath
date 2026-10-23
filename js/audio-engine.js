/**
 * AUDIO-ENGINE.JS — 100% სტუდიური US / UK გამოთქმის ძრავა (რობოტული speechSynthesis-ის გარეშე)
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ACCENT_STORAGE_KEY = "fluentpath_preferred_accent_v1";
  let preferredAccent = "US"; // "US" | "UK"
  let activeAudioElement = null;

  try {
    const savedAcc = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (savedAcc === "UK" || savedAcc === "US") {
      preferredAccent = savedAcc;
    }
  } catch (e) {}

  /**
   * ასუფთავებს ტექსტს გრამატიკული მინიშნებებისგან (მაგ: "(verb)", "/")
   * რომ სტუდიურმა დიქტორმა ყველა სიტყვა და ფრაზა შეუფერხებლად წაიკითხოს.
   */
  function sanitizeTextForStudioAudio(rawText) {
    let text = String(rawText || "").trim();
    if (!text) return "";

    // მოვაშოროთ გრამატიკული შენიშვნები ფრჩხილებში: (verb), (noun), (adj), (plural) და ა.შ.
    text = text.replace(/\(\s*(verb|noun|adj|adjective|adv|adverb|plural|singular|formal|informal|idiom|ship|city|car trunk|helm|band-aid)\s*\)/gi, "");

    // თუ ფრჩხილებში სინონიმი წერია ან დახრილი ხაზია "/", გადავაქციოთ მძიმედ (პაუზად)
    text = text.replace(/\s*\/\s*/g, ", ");
    text = text.replace(/\(([^)]+)\)/g, ", $1");

    // მოვაშოროთ ზედმეტი სიმბოლოები
    text = text.replace(/[^a-zA-Z0-9\s\-'.,!?]/g, " ");
    text = text.replace(/\s+/g, " ").trim();

    return text;
  }

  const AudioEngine = {
    getAccent: function () {
      return preferredAccent;
    },

    setAccent: function (accent) {
      preferredAccent = (accent === "UK") ? "UK" : "US";
      try {
        window.localStorage.setItem(ACCENT_STORAGE_KEY, preferredAccent);
      } catch (e) {}
      return preferredAccent;
    },

    stop: function () {
      if (activeAudioElement) {
        try {
          activeAudioElement.pause();
          activeAudioElement.currentTime = 0;
        } catch (e) {}
        activeAudioElement = null;
      }
      if ("speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
    },

    /**
     * უკრავს მხოლოდ სტუდიურ US (type=2) ან UK (type=1) აუდიოს ნებისმიერი სიგრძის სიტყვასა და ფრაზაზე.
     * რობოტული speechSynthesis სრულად გათიშულია!
     */
    speak: function (text, accentOverride) {
      const cleanQuery = sanitizeTextForStudioAudio(text);
      if (!cleanQuery) return;

      this.stop();

      const acc = (accentOverride === "UK" || accentOverride === "US")
        ? accentOverride
        : preferredAccent;

      this.setAccent(acc);

      // type=2 -> სუფთა ამერიკული (US) სტუდიური აქცენტი, type=1 -> სუფთა ბრიტანული (UK) სტუდიური აქცენტი
      const voiceType = (acc === "UK") ? 1 : 2;
      const primaryUrl = "https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(cleanQuery) + "&type=" + voiceType;
      const backupUrl = "https://translate.googleapis.com/translate_tts?ie=UTF-8&q=" + encodeURIComponent(cleanQuery) + "&tl=" + (acc === "UK" ? "en-GB" : "en-US") + "&client=tw-ob";

      try {
        const audio = new window.Audio(primaryUrl);
        activeAudioElement = audio;

        audio.onerror = function () {
          // თუ პირველ სერვერზე კავშირი შეფერხდა, ჩავრთოთ მეორე ონლაინ სტუდიური ნაკადი (და არა რობოტი!)
          try {
            const backupAudio = new window.Audio(backupUrl);
            activeAudioElement = backupAudio;
            backupAudio.play().catch(function () {});
          } catch (e) {}
        };

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {
            try {
              const backupAudio = new window.Audio(backupUrl);
              activeAudioElement = backupAudio;
              backupAudio.play().catch(function () {});
            } catch (e) {}
          });
        }
      } catch (err) {}
    }
  };

  App.AudioEngine = AudioEngine;

  function upgradeAllModulesAudio() {
    if (App.UI) {
      App.UI.speak = function (text) {
        AudioEngine.speak(text);
      };
    }
    ["Vocabulary", "Learn", "Grammar", "Reading", "Listening", "Writing", "Flashcards"].forEach((modName) => {
      if (App[modName]) {
        if (typeof App[modName].speak === "function") {
          App[modName].speak = function (text) {
            AudioEngine.speak(text);
          };
        }
        if (typeof App[modName].speakEnglish === "function") {
          App[modName].speakEnglish = function (text, acc) {
            AudioEngine.speak(text, acc);
          };
        }
        if (typeof App[modName].speakWord === "function") {
          App[modName].speakWord = function (text) {
            AudioEngine.speak(text);
          };
        }
        if (typeof App[modName].stopSpeaking === "function") {
          App[modName].stopSpeaking = function () {
            AudioEngine.stop();
          };
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      window.setTimeout(upgradeAllModulesAudio, 40);
    });
  } else {
    window.setTimeout(upgradeAllModulesAudio, 40);
  }
})(window);