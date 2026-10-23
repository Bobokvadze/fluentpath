/**
 * AUDIO-ENGINE.JS — 100% სტუდიური ადამიანური ხმის ძრავა (Oxford MP3 + DictionaryAPI + Studio Stream)
 * Windows-ის რობოტული speechSynthesis სრულად ამოღებულია!
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ACCENT_STORAGE_KEY = "fluentpath_preferred_accent_v1";
  let preferredAccent = "US"; // "US" | "UK"
  let activeAudio = null;
  const apiAudioCache = {}; // ინახავს DictionaryAPI-დან მოძებნილ სტუდიურ MP3 ბმულებს

  try {
    const savedAcc = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (savedAcc === "UK" || savedAcc === "US") {
      preferredAccent = savedAcc;
    }
  } catch (e) {}

  function cleanTextForAudio(rawText) {
    let text = String(rawText || "").trim();
    if (!text) return "";
    text = text.replace(/\(\s*(verb|noun|adj|adjective|adv|adverb|plural|singular|formal|informal|idiom|ship|city|car trunk|helm|band-aid)\s*\)/gi, "");
    text = text.replace(/\s*\/\s*/g, ", ");
    text = text.replace(/\(([^)]+)\)/g, ", $1");
    text = text.replace(/["“”«»]/g, "");
    text = text.replace(/\s+/g, " ").trim();
    return text;
  }

  function playUrlListSequentially(urls, playbackRate) {
    if (!urls || !urls.length) return;
    let idx = 0;

    function tryNext() {
      if (idx >= urls.length) return;
      const currentUrl = urls[idx++];
      if (!currentUrl) {
        tryNext();
        return;
      }

      try {
        const audio = document.createElement("audio");
        audio.setAttribute("referrerpolicy", "no-referrer");
        audio.preload = "auto";
        audio.src = currentUrl;
        if (playbackRate && playbackRate < 0.85) {
          audio.playbackRate = 0.82;
        }
        activeAudio = audio;

        let failed = false;
        const handleFail = function () {
          if (failed) return;
          failed = true;
          tryNext();
        };

        audio.onerror = handleFail;

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(handleFail);
        }
      } catch (e) {
        tryNext();
      }
    }

    tryNext();
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
      if (activeAudio) {
        try {
          activeAudio.onerror = null;
          activeAudio.onended = null;
          activeAudio.pause();
          activeAudio.src = "";
        } catch (e) {}
        activeAudio = null;
      }
      if ("speechSynthesis" in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
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

      const words = cleaned.split(/\s+/);
      const singleWord = words.length === 1 ? words[0].toLowerCase().replace(/[^a-z'-]/g, "") : "";
      const voiceType = (acc === "UK") ? 1 : 2;
      const tlCode = (acc === "UK") ? "en-GB" : "en-US";

      const candidateUrls = [];

      // 1. თუ ერთი სიტყვაა — პირველ რიგში ოქსფორდის ოფიციალური სტუდიური MP3 (Google Static CDN)
      if (singleWord) {
        const oxSuffix = (acc === "UK") ? "_gb_1" : "_us_1";
        const oxAltSuffix = (acc === "UK") ? "_us_1" : "_gb_1";
        candidateUrls.push("https://ssl.gstatic.com/dictionary/static/sounds/20200429/" + encodeURIComponent(singleWord) + "--" + oxSuffix + ".mp3");
        if (apiAudioCache[singleWord + "_" + acc]) {
          candidateUrls.unshift(apiAudioCache[singleWord + "_" + acc]);
        }
        candidateUrls.push("https://ssl.gstatic.com/dictionary/static/sounds/20200429/" + encodeURIComponent(singleWord) + "--" + oxAltSuffix + ".mp3");
      }

      // 2. Youdao-ს სტუდიური დიქტორის ჩანაწერი (US = type 2, UK = type 1)
      candidateUrls.push("https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(cleaned) + "&type=" + voiceType);

      // 3. Google Neural TTS სტრიმი (no-referrer-ით)
      candidateUrls.push("https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=" + tlCode + "&q=" + encodeURIComponent(cleaned));

      playUrlListSequentially(candidateUrls, rateOverride || 1.0);
    },

    registerApiAudio: function (word, usMp3, ukMp3) {
      const w = String(word || "").toLowerCase().trim();
      if (!w) return;
      if (usMp3) apiAudioCache[w + "_US"] = usMp3;
      if (ukMp3) apiAudioCache[w + "_UK"] = ukMp3;
    }
  };

  App.AudioEngine = AudioEngine;

  // დავბლოკოთ ბრაუზერის რობოტული speechSynthesis და ყველა მოდული გადავრთოთ სტუდიურ AudioEngine-ზე
  if ("speechSynthesis" in window) {
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