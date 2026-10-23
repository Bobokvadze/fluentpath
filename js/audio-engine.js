/**
 * AUDIO-ENGINE.JS — მაღალი გარჩევადობის ინგლისური წარმოთქმის ძრავა
 * 1) ცალკეულ სიტყვებსა და მოკლე ტერმინებზე უკრავს ნამდვილ სტუდიურ (Dictionary) აუდიოს (US ან UK აქცენტით).
 * 2) წინადადებებსა და ტექსტებზე ირჩევს საუკეთესო Neural / Natural (Google / Microsoft Online) ხმას.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ACCENT_STORAGE_KEY = "fluentpath_preferred_accent_v1";
  let preferredAccent = "US"; // "US" (American) | "UK" (British)
  let cachedVoices = [];
  let activeAudioElement = null;

  try {
    const savedAcc = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (savedAcc === "UK" || savedAcc === "US") {
      preferredAccent = savedAcc;
    }
  } catch (e) {}

  function loadVoicesList() {
    if (!("speechSynthesis" in window)) return [];
    const list = window.speechSynthesis.getVoices() || [];
    if (list.length > 0) {
      cachedVoices = list;
    }
    return cachedVoices;
  }

  if ("speechSynthesis" in window) {
    loadVoicesList();
    if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
      window.speechSynthesis.onvoiceschanged = loadVoicesList;
    }
  }

  /**
   * ირჩევს ყველაზე სუფთა, მკვეთრ და ბუნებრივ ინგლისურ ხმას ბრაუზერში
   */
  function pickBestEnglishVoice(accent) {
    const voices = loadVoicesList();
    if (!voices.length) return null;

    const targetLangPrefix = accent === "UK" ? "en-gb" : "en-us";
    const enVoices = voices.filter((v) => /^en(-|_|$)/i.test(v.lang || ""));
    if (!enVoices.length) return voices[0];

    function scoreVoice(v) {
      const name = (v.name || "").toLowerCase();
      const lang = (v.lang || "").toLowerCase().replace("_", "-");
      let score = 0;

      // ზუსტი აქცენტის დამთხვევა (US ან UK)
      if (lang.indexOf(targetLangPrefix) === 0) score += 50;
      else if (accent === "UK" && (name.indexOf("uk") !== -1 || name.indexOf("british") !== -1 || name.indexOf("great britain") !== -1)) score += 45;
      else if (accent === "US" && (name.indexOf("us") !== -1 || name.indexOf("united states") !== -1 || name.indexOf("american") !== -1)) score += 45;

      // უმაღლესი ხარისხის Neural / Natural ხმები (Edge / Chrome / macOS)
      if (name.indexOf("natural") !== -1 || name.indexOf("online") !== -1) score += 100;
      if (name.indexOf("neural") !== -1) score += 95;
      if (name.indexOf("google") !== -1) score += 85;
      if (name.indexOf("aria") !== -1 || name.indexOf("jenny") !== -1 || name.indexOf("guy") !== -1 || name.indexOf("sonia") !== -1 || name.indexOf("ryan") !== -1 || name.indexOf("libby") !== -1) score += 80;
      if (name.indexOf("samantha") !== -1 || name.indexOf("daniel") !== -1 || name.indexOf("alex") !== -1 || name.indexOf("moira") !== -1) score += 70;
      if (name.indexOf("premium") !== -1 || name.indexOf("enhanced") !== -1) score += 65;

      // დავაქვეითოთ ძველი ყრუ Desktop ხმები, თუ უკეთესი არსებობს
      if (name.indexOf("desktop") !== -1) score -= 25;

      return score;
    }

    const sorted = enVoices.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a));
    return sorted[0] || enVoices[0];
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

    toggleAccent: function () {
      return this.setAccent(preferredAccent === "US" ? "UK" : "US");
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
     * კითხულობს ტექსტს Neural Web Speech API-ით
     */
    speakWithNeuralTTS: function (text, slowMode, accentOverride) {
      if (!("speechSynthesis" in window)) return;
      const acc = accentOverride || preferredAccent;
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(String(text || "").trim());
        const bestVoice = pickBestEnglishVoice(acc);
        if (bestVoice) {
          u.voice = bestVoice;
          u.lang = bestVoice.lang || (acc === "UK" ? "en-GB" : "en-US");
        } else {
          u.lang = (acc === "UK") ? "en-GB" : "en-US";
        }
        // მკვეთრი და სუფთა არტიკულაციის პარამეტრები
        u.rate = slowMode ? 0.72 : 0.94;
        u.pitch = 1.02;
        u.volume = 1.0;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    },

    /**
     * მთავარი ფუნქცია:
     * - თუ ტექსტი 1-3 სიტყვიანია (მაგ. ბარათის სიტყვა ან ფრაზა), ჯერ უკრავს სტუდიურ ლექსიკონის MP3-ს!
     * - თუ ტექსტი გრძელია ან ინტერნეტი გათიშულია, იყენებს საუკეთესო Neural TTS ხმას.
     */
    speak: function (text, slowMode, accentOverride) {
      const cleanText = String(text || "").trim();
      if (!cleanText) return;

      this.stop();
      const acc = accentOverride || preferredAccent;
      const wordCount = cleanText.split(/\s+/).length;

      // ცალკეულ სიტყვებსა და მოკლე ტერმინებზე (1–3 სიტყვა) გამოვიყენოთ სტუდიური ლექსიკონის ჩანაწერი
      if (wordCount <= 3 && /^[a-zA-Z\s\-'().,!?]+$/.test(cleanText)) {
        const cleanQuery = cleanText.replace(/[.,!?()]/g, "").trim();
        // type=2 -> სუფთა ამერიკული სტუდიური გამოთქმა, type=1 -> სუფთა ბრიტანული სტუდიური გამოთქმა
        const voiceType = (acc === "UK") ? 1 : 2;
        const dictUrl = "https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(cleanQuery) + "&type=" + voiceType;

        let fallbackTriggered = false;
        const triggerFallback = () => {
          if (fallbackTriggered) return;
          fallbackTriggered = true;
          this.speakWithNeuralTTS(cleanText, slowMode, acc);
        };

        try {
          const audio = new window.Audio(dictUrl);
          activeAudioElement = audio;
          audio.playbackRate = slowMode ? 0.76 : 1.0;

          const timeoutId = window.setTimeout(() => {
            if (audio.readyState < 2) {
              triggerFallback();
            }
          }, 1400);

          audio.oncanplaythrough = () => {
            window.clearTimeout(timeoutId);
          };

          audio.onerror = () => {
            window.clearTimeout(timeoutId);
            triggerFallback();
          };

          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {
              window.clearTimeout(timeoutId);
              triggerFallback();
            });
          }
          return;
        } catch (err) {
          triggerFallback();
          return;
        }
      }

      // გრძელ წინადადებებსა და აბზაცებზე — Neural TTS
      this.speakWithNeuralTTS(cleanText, slowMode, acc);
    }
  };

  App.AudioEngine = AudioEngine;

  // გადავაერთოთ ყველა მოდულის speak ფუნქცია ახალ AudioEngine-ზე
  function upgradeAllModulesAudio() {
    if (App.UI) {
      App.UI.speak = function (text, slow) {
        AudioEngine.speak(text, slow);
      };
    }
    ["Vocabulary", "Learn", "Grammar", "Reading", "Listening", "Writing", "Flashcards"].forEach((modName) => {
      if (App[modName]) {
        if (typeof App[modName].speak === "function") {
          App[modName].speak = function (text, slow) {
            AudioEngine.speak(text, slow);
          };
        }
        if (typeof App[modName].speakEnglish === "function") {
          App[modName].speakEnglish = function (text, slow) {
            AudioEngine.speak(text, slow);
          };
        }
        if (typeof App[modName].speakWord === "function") {
          App[modName].speakWord = function (text, slow) {
            AudioEngine.speak(text, slow);
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