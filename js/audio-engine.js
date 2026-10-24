/**
 * AUDIO-ENGINE.JS — სტუდიური აუდიო-ძრავა მოკლე სიტყვებისა და გრძელი ტექსტებისთვის
 * - ცალკეულ სიტყვებზე: Oxford Dictionary MP3 + Youdao Studio (US/UK)
 * - გრძელ ტექსტებსა და აბზაცებზე: ავტომატურად ყოფს ტექსტს წინადადებებად (<=140 სიმბოლო)
 *   და უწყვეტ რიგში (Preloaded Queue) კითხულობს სტუდიური US/UK ხმით!
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ACCENT_STORAGE_KEY = "fluentpath_preferred_accent_v1";
  let preferredAccent = "US"; // "US" | "UK"
  let activeAudio = null;
  let playbackSessionId = 0;
  const apiAudioCache = {};

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

  /**
   * ყოფს ნებისმიერი სიგრძის ტექსტს (აბზაცს ან მთლიან ისტორიას) <=135 სიმბოლოიან
   * ბუნებრივ ფრაზებად, რომ სტუდიურმა სერვერმა თითოეული ნაწილი შეუფერხებლად წაიკითხოს.
   */
  function splitTextIntoStudioChunks(rawText) {
    const cleaned = cleanTextForAudio(rawText);
    if (!cleaned) return [];
    if (cleaned.length <= 135) return [cleaned];

    const sentences = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
    const chunks = [];

    sentences.forEach(function (sent) {
      const s = sent.trim();
      if (!s) return;
      if (s.length <= 135) {
        chunks.push(s);
        return;
      }

      // თუ წინადადება 135 სიმბოლოზე გრძელია, გავყოთ მძიმეებთან ან სიტყვებთან
      const clauses = s.split(/(?<=[,;—–:])\s+/);
      let current = "";

      clauses.forEach(function (cl) {
        if ((current + " " + cl).trim().length <= 135) {
          current = (current + " " + cl).trim();
        } else {
          if (current) chunks.push(current);
          if (cl.length <= 135) {
            current = cl.trim();
          } else {
            const words = cl.split(/\s+/);
            current = "";
            words.forEach(function (w) {
              if ((current + " " + w).trim().length > 130) {
                if (current) chunks.push(current);
                current = w;
              } else {
                current = (current + " " + w).trim();
              }
            });
          }
        }
      });

      if (current) chunks.push(current);
    });

    return chunks;
  }

  function buildCandidateUrlsForChunk(chunkText, acc) {
    const words = chunkText.split(/\s+/);
    const singleWord = words.length === 1 ? words[0].toLowerCase().replace(/[^a-z'-]/g, "") : "";
    const voiceType = (acc === "UK") ? 1 : 2;
    const tlCode = (acc === "UK") ? "en-GB" : "en-US";
    const urls = [];

    if (singleWord) {
      const oxSuffix = (acc === "UK") ? "_gb_1" : "_us_1";
      const oxAltSuffix = (acc === "UK") ? "_us_1" : "_gb_1";
      if (apiAudioCache[singleWord + "_" + acc]) {
        urls.push(apiAudioCache[singleWord + "_" + acc]);
      }
      urls.push("https://ssl.gstatic.com/dictionary/static/sounds/20200429/" + encodeURIComponent(singleWord) + "--" + oxSuffix + ".mp3");
      urls.push("https://ssl.gstatic.com/dictionary/static/sounds/20200429/" + encodeURIComponent(singleWord) + "--" + oxAltSuffix + ".mp3");
    }

    urls.push("https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(chunkText) + "&type=" + voiceType);
    urls.push("https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=" + tlCode + "&q=" + encodeURIComponent(chunkText));

    return urls;
  }

  function playSingleChunkWithFallback(chunkText, acc, playbackRate, sessionId, onChunkFinished) {
    if (sessionId !== playbackSessionId) return;
    const urls = buildCandidateUrlsForChunk(chunkText, acc);
    let urlIdx = 0;

    function tryNextUrl() {
      if (sessionId !== playbackSessionId) return;
      if (urlIdx >= urls.length) {
        onChunkFinished();
        return;
      }

      const currentUrl = urls[urlIdx++];
      try {
        const audio = document.createElement("audio");
        audio.preload = "auto";
        audio.src = currentUrl;
        if (playbackRate && playbackRate < 0.88) {
          audio.playbackRate = 0.82;
        }
        activeAudio = audio;

        let advanced = false;
        const nextUrlOnError = function () {
          if (advanced || sessionId !== playbackSessionId) return;
          advanced = true;
          tryNextUrl();
        };

        audio.onended = function () {
          if (advanced || sessionId !== playbackSessionId) return;
          advanced = true;
          onChunkFinished();
        };

        audio.onerror = nextUrlOnError;

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(nextUrlOnError);
        }
      } catch (e) {
        tryNextUrl();
      }
    }

    tryNextUrl();
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
      playbackSessionId++;
      if (activeAudio) {
        try {
          activeAudio.onended = null;
          activeAudio.onerror = null;
          activeAudio.pause();
          activeAudio.src = "";
        } catch (e) {}
        activeAudio = null;
      }
    },

    speak: function (text, accentOverride, rateOverride) {
      const chunks = splitTextIntoStudioChunks(text);
      if (!chunks.length) return;

      this.stop();
      const currentSession = ++playbackSessionId;

      const acc = (accentOverride === "UK" || accentOverride === "US")
        ? accentOverride
        : preferredAccent;

      if (accentOverride === "UK" || accentOverride === "US") {
        this.setAccent(acc);
      }

      const rate = (typeof rateOverride === "number")
        ? rateOverride
        : (rateOverride === true ? 0.8 : 1.0);

      let chunkIdx = 0;

      function playNextChunk() {
        if (currentSession !== playbackSessionId) return;
        if (chunkIdx >= chunks.length) return;

        const textPart = chunks[chunkIdx++];

        // წინასწარ ჩავტვირთოთ მომდევნო წინადადების აუდიო ფონურად, რომ პაუზა არ ჰქონდეს
        if (chunkIdx < chunks.length) {
          try {
            const nextPart = chunks[chunkIdx];
            const voiceType = (acc === "UK") ? 1 : 2;
            const preloadAudio = document.createElement("audio");
            preloadAudio.preload = "auto";
            preloadAudio.src = "https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(nextPart) + "&type=" + voiceType;
          } catch (e) {}
        }

        playSingleChunkWithFallback(textPart, acc, rate, currentSession, function () {
          playNextChunk();
        });
      }

      playNextChunk();
    },

    registerApiAudio: function (word, usMp3, ukMp3) {
      const w = String(word || "").toLowerCase().trim();
      if (!w) return;
      if (usMp3) apiAudioCache[w + "_US"] = usMp3;
      if (ukMp3) apiAudioCache[w + "_UK"] = ukMp3;
    }
  };

  App.AudioEngine = AudioEngine;

  // გადავაერთოთ ყველა მოდულის ხმოვანი გამოძახება AudioEngine-ზე
  function connectAllModulesToAudioEngine() {
    if (App.UI) {
      App.UI.speak = function (text, slow) {
        AudioEngine.speak(text, preferredAccent, slow ? 0.8 : 1.0);
      };
    }
    ["Vocabulary", "Learn", "Grammar", "Reading", "Listening", "Writing", "Flashcards"].forEach(function (modName) {
      if (App[modName]) {
        if (typeof App[modName].speak === "function") {
          App[modName].speak = function (text, slow) {
            AudioEngine.speak(text, preferredAccent, slow ? 0.8 : 1.0);
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(connectAllModulesToAudioEngine, 30);
    });
  } else {
    window.setTimeout(connectAllModulesToAudioEngine, 30);
  }
})(window);