/**
 * AUDIO-ENGINE.JS — უსაფრთხო გლობალური სტუდიური აუდიო-ძრავა (US / UK)
 * არ ცვლის სხვა მოდულების კოდს: პირდაპირ იჭერს ხმოვან მოთხოვნებს ყველა მოდულიდან
 * და უკრავს სუფთა სტუდიურ US/UK აუდიოს (მათ შორის გრძელ აბზაცებზეც).
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ACCENT_STORAGE_KEY = "fluentpath_preferred_accent_v1";
  let preferredAccent = "US"; // "US" | "UK"
  let activeAudioElement = null;
  let audioQueue = [];
  let isPlayingQueue = false;

  try {
    const savedAcc = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (savedAcc === "UK" || savedAcc === "US") {
      preferredAccent = savedAcc;
    }
  } catch (e) {}

  function sanitizeTextForAudio(rawText) {
    let text = String(rawText || "").trim();
    if (!text) return "";

    text = text.replace(/\(\s*(verb|noun|adj|adjective|adv|adverb|plural|singular|formal|informal|idiom|ship|city|car trunk|helm|band-aid)\s*\)/gi, "");
    text = text.replace(/\s*\/\s*/g, ", ");
    text = text.replace(/\(([^)]+)\)/g, ", $1");
    text = text.replace(/["“”«»]/g, "");
    text = text.replace(/\s+/g, " ").trim();
    return text;
  }

  /**
   * ყოფს გრძელ ტექსტს (აბზაცებს) მოკლე ნაწილებად, რომ სტუდიურმა სერვერმა
   * გრძელი წინადადებებიც და სრული ტექსტებიც შეუფერხებლად წაიკითხოს.
   */
  function splitIntoPlayableChunks(text) {
    const cleaned = sanitizeTextForAudio(text);
    if (!cleaned) return [];
    if (cleaned.length <= 150) return [cleaned];

    const rawSentences = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
    const chunks = [];

    rawSentences.forEach((sentence) => {
      const s = sentence.trim();
      if (!s) return;
      if (s.length <= 150) {
        chunks.push(s);
      } else {
        const words = s.split(/\s+/);
        let current = "";
        words.forEach((w) => {
          if ((current + " " + w).trim().length > 140) {
            if (current) chunks.push(current.trim());
            current = w;
          } else {
            current = (current + " " + w).trim();
          }
        });
        if (current) chunks.push(current.trim());
      }
    });

    return chunks;
  }

  function createNoReferrerAudio(url) {
    const audio = document.createElement("audio");
    audio.setAttribute("referrerpolicy", "no-referrer");
    audio.crossOrigin = "anonymous";
    audio.preload = "auto";
    audio.src = url;
    return audio;
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
      audioQueue = [];
      isPlayingQueue = false;
      if (activeAudioElement) {
        try {
          activeAudioElement.onended = null;
          activeAudioElement.onerror = null;
          activeAudioElement.pause();
          activeAudioElement.src = "";
        } catch (e) {}
        activeAudioElement = null;
      }
    },

    playSingleChunk: function (chunkText, acc, rate, onDone) {
      const voiceType = (acc === "UK") ? 1 : 2;
      const primaryUrl = "https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(chunkText) + "&type=" + voiceType;
      const backupUrl = "https://translate.googleapis.com/translate_tts?ie=UTF-8&q=" + encodeURIComponent(chunkText) + "&tl=" + (acc === "UK" ? "en-GB" : "en-US") + "&client=tw-ob";

      let triedBackup = false;

      const tryPlayUrl = (url) => {
        try {
          const audio = createNoReferrerAudio(url);
          activeAudioElement = audio;
          if (rate && rate < 0.85) {
            audio.playbackRate = 0.8;
          }

          audio.onended = function () {
            onDone();
          };

          audio.onerror = function () {
            if (!triedBackup) {
              triedBackup = true;
              tryPlayUrl(backupUrl);
            } else {
              onDone();
            }
          };

          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {
              if (!triedBackup) {
                triedBackup = true;
                tryPlayUrl(backupUrl);
              } else {
                onDone();
              }
            });
          }
        } catch (e) {
          onDone();
        }
      };

      tryPlayUrl(primaryUrl);
    },

    processQueue: function (acc, rate) {
      if (!isPlayingQueue || audioQueue.length === 0) {
        isPlayingQueue = false;
        return;
      }
      const nextChunk = audioQueue.shift();
      this.playSingleChunk(nextChunk, acc, rate, () => {
        if (isPlayingQueue && audioQueue.length > 0) {
          this.processQueue(acc, rate);
        } else {
          isPlayingQueue = false;
        }
      });
    },

    speak: function (text, accentOverride, rateOverride) {
      const chunks = splitIntoPlayableChunks(text);
      if (chunks.length === 0) return;

      this.stop();

      const acc = (accentOverride === "UK" || accentOverride === "US")
        ? accentOverride
        : preferredAccent;

      if (accentOverride === "UK" || accentOverride === "US") {
        this.setAccent(acc);
      }

      audioQueue = chunks;
      isPlayingQueue = true;
      this.processQueue(acc, rateOverride || 1.0);
    }
  };

  App.AudioEngine = AudioEngine;

  // გლობალური გადამჭერი: ნებისმიერი მოდული (ლექსიკონი, გრამატიკა, კითხვა, მოსმენა, წერა, ბარათები),
  // რომელიც იძახებს window.speechSynthesis.speak(u)-ს, ავტომატურად გადამისამართდება AudioEngine-ზე!
  if ("speechSynthesis" in window) {
    try {
      window.speechSynthesis.speak = function (utterance) {
        if (utterance && utterance.text) {
          const r = utterance.rate || 1.0;
          AudioEngine.speak(utterance.text, preferredAccent, r);
        }
      };
      window.speechSynthesis.cancel = function () {
        AudioEngine.stop();
      };
    } catch (e) {}
  }
})(window);