/**
 * AUDIO-ENGINE.JS — სტუდიური აუდიო-ძრავა ავტომატური გაჩერებით გვერდის შეცვლისას
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};

  const ACCENT_STORAGE_KEY = "fluentpath_preferred_accent_v1";
  let preferredAccent = "US"; // "US" | "UK"
  let activeAudioPool = []; // ინახავს ყველა შექმნილ აუდიო ობიექტს მყისიერი გასუფთავებისთვის
  let playbackSessionId = 0;
  const apiAudioCache = {};

  // ბრაუზერის ჩაშენებული ხმის სინთეზატორი (ქვემოთ speechSynthesis.speak გადაიფარება, ამიტომ ორიგინალს ვინახავთ).
  // გამოიყენება ოფლაინ რეჟიმში ან როცა ყველა ონლაინ აუდიო-წყარო მიუწვდომელია.
  const nativeSynth = ("speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function")
    ? {
        speak: window.speechSynthesis.speak.bind(window.speechSynthesis),
        cancel: window.speechSynthesis.cancel.bind(window.speechSynthesis)
      }
    : null;

  function speakNatively(text, acc, playbackRate, sessionId, onDone) {
    if (!nativeSynth || sessionId !== playbackSessionId) {
      onDone();
      return;
    }
    try {
      const utterance = new window.SpeechSynthesisUtterance(text);
      utterance.lang = (acc === "UK") ? "en-GB" : "en-US";
      utterance.rate = (playbackRate && playbackRate < 0.88) ? 0.8 : 1.0;
      utterance.onend = utterance.onerror = function () {
        if (sessionId === playbackSessionId) onDone();
      };
      nativeSynth.speak(utterance);
    } catch (e) {
      onDone();
    }
  }

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
    if (navigator.onLine === false) {
      speakNatively(chunkText, acc, playbackRate, sessionId, onChunkFinished);
      return;
    }
    const urls = buildCandidateUrlsForChunk(chunkText, acc);
    let urlIdx = 0;

    function tryNextUrl() {
      if (sessionId !== playbackSessionId) return;
      if (urlIdx >= urls.length) {
        speakNatively(chunkText, acc, playbackRate, sessionId, onChunkFinished);
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
        activeAudioPool.push(audio);

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

    /**
     * მყისიერად აჩერებს მიმდინარე და რიგში მდგომ ყველა აუდიო ნაკადს
     */
    stop: function () {
      playbackSessionId++;
      if (nativeSynth) {
        try { nativeSynth.cancel(); } catch (e) {}
      }
      if (activeAudioPool.length > 0) {
        activeAudioPool.forEach(function (aud) {
          try {
            aud.onended = null;
            aud.onerror = null;
            aud.pause();
            aud.src = "";
          } catch (e) {}
        });
        activeAudioPool = [];
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

        if (chunkIdx < chunks.length) {
          try {
            const nextPart = chunks[chunkIdx];
            const voiceType = (acc === "UK") ? 1 : 2;
            const preloadAudio = document.createElement("audio");
            preloadAudio.preload = "auto";
            preloadAudio.src = "https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(nextPart) + "&type=" + voiceType;
            activeAudioPool.push(preloadAudio);
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

    // როუტერის ნებისმიერ გადართვაზე ხმა ავტომატურად გაჩერდეს
    if (App.Router) {
      Object.keys(App.Router).forEach(function (key) {
        if (typeof App.Router[key] === "function" && !App.Router[key]._audioStopHooked) {
          const origFn = App.Router[key];
          const wrapped = function () {
            AudioEngine.stop();
            return origFn.apply(this, arguments);
          };
          wrapped._audioStopHooked = true;
          App.Router[key] = wrapped;
        }
      });
    }
  }

  // 1. გვერდის მისამართის (Hash) ან ისტორიის შეცვლისთანავე გავაჩეროთ ხმა
  window.addEventListener("hashchange", function () {
    AudioEngine.stop();
  });
  window.addEventListener("popstate", function () {
    AudioEngine.stop();
  });
  window.addEventListener("beforeunload", function () {
    AudioEngine.stop();
  });

  // 2. ნებისმიერ ნავიგაციის ღილაკზე, უკან დაბრუნებაზე ან ტაბზე დაჭერისას მყისიერად გავაჩეროთ ხმა
  document.addEventListener("click", function (e) {
    const navTrigger = e.target.closest(
      'a[href^="#"], [data-route], .nav-item, .pill-tab, ' +
      '#back-reading-list-btn, #back-listening-list-btn, #back-writing-list-btn, #back-grammar-list-btn, #quit-exam-btn, ' +
      '[data-open-story], [data-open-listening], [data-open-writing], [data-open-topic]'
    );
    if (navTrigger) {
      AudioEngine.stop();
    }
  }, true);

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