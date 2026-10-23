/**
 * AUDIO-ENGINE.JS — უსაფრთხო, მკვეთრი ინგლისური აუდიო-ძრავა (US / UK)
 * 1) სიტყვებსა და ფრაზებზე უკრავს ნამდვილ სტუდიურ ჩანაწერს (CORS-ის ბლოკირების გარეშე!).
 * 2) გრძელ ტექსტებზე და ოფლაინ რეჟიმში იყენებს ბრაუზერის საუკეთესო Natural/Neural ხმას.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ACCENT_STORAGE_KEY = "fluentpath_preferred_accent_v1";
  let preferredAccent = "US"; // "US" | "UK"
  let activeAudioElement = null;

  // შევინახოთ ბრაუზერის ორიგინალი speechSynthesis ფუნქცია, სანამ გადავჭრით
  const nativeSynth = ("speechSynthesis" in window) ? window.speechSynthesis : null;
  const nativeSpeakFn = (nativeSynth && typeof nativeSynth.speak === "function")
    ? nativeSynth.speak.bind(nativeSynth)
    : null;
  const nativeCancelFn = (nativeSynth && typeof nativeSynth.cancel === "function")
    ? nativeSynth.cancel.bind(nativeSynth)
    : null;

  let cachedVoices = [];
  function loadVoices() {
    if (!nativeSynth) return [];
    const v = nativeSynth.getVoices() || [];
    if (v.length) cachedVoices = v;
    return cachedVoices;
  }
  if (nativeSynth) {
    loadVoices();
    if (typeof nativeSynth.onvoiceschanged !== "undefined") {
      nativeSynth.onvoiceschanged = loadVoices;
    }
  }

  try {
    const savedAcc = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (savedAcc === "UK" || savedAcc === "US") {
      preferredAccent = savedAcc;
    }
  } catch (e) {}

  function pickBestNativeVoice(acc) {
    const voices = loadVoices();
    if (!voices.length) return null;
    const enVoices = voices.filter((v) => /^en(-|_|$)/i.test(v.lang || ""));
    if (!enVoices.length) return voices[0];

    const targetPrefix = (acc === "UK") ? "en-gb" : "en-us";
    function score(v) {
      const name = (v.name || "").toLowerCase();
      const lang = (v.lang || "").toLowerCase().replace("_", "-");
      let s = 0;
      if (lang.indexOf(targetPrefix) === 0) s += 55;
      else if (acc === "UK" && (name.indexOf("uk") !== -1 || name.indexOf("british") !== -1 || name.indexOf("great britain") !== -1)) s += 50;
      else if (acc === "US" && (name.indexOf("us") !== -1 || name.indexOf("united states") !== -1)) s += 50;

      if (name.indexOf("natural") !== -1 || name.indexOf("online") !== -1) s += 100;
      if (name.indexOf("neural") !== -1) s += 90;
      if (name.indexOf("google") !== -1) s += 80;
      if (name.indexOf("aria") !== -1 || name.indexOf("ava") !== -1 || name.indexOf("andrew") !== -1 || name.indexOf("jenny") !== -1 || name.indexOf("sonia") !== -1 || name.indexOf("ryan") !== -1) s += 75;
      if (name.indexOf("desktop") !== -1) s -= 20;
      return s;
    }

    return enVoices.slice().sort((a, b) => score(b) - score(a))[0] || enVoices[0];
  }

  function cleanTextForAudio(rawText) {
    let text = String(rawText || "").trim();
    if (!text) return "";
    text = text.replace(/\(\s*(verb|noun|adj|adjective|adv|adverb|plural|singular|formal|informal|idiom|ship|city|car trunk|helm|band-aid)\s*\)/gi, "");
    text = text.replace(/\s*\/\s*/g, ", ");
    text = text.replace(/\(([^)]+)\)/g, ", $1");
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
          activeAudioElement.onended = null;
          activeAudioElement.onerror = null;
          activeAudioElement.pause();
        } catch (e) {}
        activeAudioElement = null;
      }
      if (nativeCancelFn) {
        try { nativeCancelFn(); } catch (e) {}
      }
    },

    speakNativeFallback: function (text, acc, rate) {
      if (!nativeSpeakFn) return;
      try {
        if (nativeCancelFn) nativeCancelFn();
        const u = new SpeechSynthesisUtterance(text);
        const bestVoice = pickBestNativeVoice(acc);
        if (bestVoice) {
          u.voice = bestVoice;
          u.lang = bestVoice.lang || (acc === "UK" ? "en-GB" : "en-US");
        } else {
          u.lang = (acc === "UK") ? "en-GB" : "en-US";
        }
        u.rate = (rate && rate < 0.85) ? 0.75 : 0.94;
        nativeSpeakFn(u);
      } catch (e) {}
    },

    speak: function (text, accentOverride, rateOverride) {
      const cleaned = cleanTextForAudio(text);
      if (!cleaned) return;

      this.stop();

      const acc = (accentOverride === "UK" || accentOverride === "US")
        ? accentOverride
        : preferredAccent;

      if (accentOverride === "UK" || accentOverride === "US") {
        this.setAccent(acc);
      }

      const wordCount = cleaned.split(/\s+/).length;

      // თუ ტექსტი 1-დან 12 სიტყვამდეა (სიტყვა, ფრაზა ან წინადადება), ჩავრთოთ სტუდიური MP3 (crossOrigin-ის გარეშე!)
      if (wordCount <= 12) {
        const voiceType = (acc === "UK") ? 1 : 2;
        const studioUrl = "https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(cleaned) + "&type=" + voiceType;

        let fallbackUsed = false;
        const runFallback = () => {
          if (fallbackUsed) return;
          fallbackUsed = true;
          this.speakNativeFallback(cleaned, acc, rateOverride);
        };

        try {
          // მნიშვნელოვანია: არ ვუწერთ crossOrigin="anonymous"-ს, რომ ბრაუზერმა არ დაბლოკოს!
          const audio = new window.Audio(studioUrl);
          activeAudioElement = audio;
          if (rateOverride && rateOverride < 0.85) {
            audio.playbackRate = 0.8;
          }

          audio.onerror = runFallback;

          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(runFallback);
          }
          return;
        } catch (e) {
          runFallback();
          return;
        }
      }

      // გრძელ აბზაცებზე (კითხვა, მოსმენა, წერა) — საუკეთესო Natural/Neural ხმა
      this.speakNativeFallback(cleaned, acc, rateOverride);
    }
  };

  App.AudioEngine = AudioEngine;

  // გადავაერთოთ გლობალური speechSynthesis.speak ისე, რომ მარყუჟი არ შეიქმნას
  if (nativeSynth) {
    try {
      window.speechSynthesis.speak = function (utterance) {
        if (utterance && utterance.text) {
          AudioEngine.speak(utterance.text, preferredAccent, utterance.rate || 1.0);
        }
      };
      window.speechSynthesis.cancel = function () {
        AudioEngine.stop();
      };
    } catch (e) {}
  }
})(window);