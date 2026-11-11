/**
 * WORD-LOOKUP.JS — tap any word in a reading, listening or writing text to see its meaning.
 * Paragraphs with class .reading-p-en are enhanced automatically (MutationObserver on #app-view): each word becomes
 * a button-like span. The popup shows the word from the site's vocabulary (Georgian meaning, definition, IPA, example)
 * or, for words outside it, the IPA and an English definition from the free Dictionary API. Words can be added to
 * "My words" or to the review queue.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const WORD_RE = /[A-Za-z]+(?:['’-][A-Za-z]+)*/g;
  let popup = null;
  let byWord = null;
  const onlineCache = {};

  function esc(s) { return App.UI.escapeHTML(s); }

  // ტექსტის სიტყვების გადაქცევა დასაჭერ ელემენტებად (ერთხელ თითოეულ აბზაცზე)
  function enhance(root) {
    (root || document).querySelectorAll(".reading-p-en:not([data-wl])").forEach(function (p) {
      p.setAttribute("data-wl", "1");
      if (!/[A-Za-z]/.test(p.textContent)) return;
      const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (node) {
        const text = node.nodeValue;
        if (!WORD_RE.test(text)) return;
        WORD_RE.lastIndex = 0;
        const frag = document.createDocumentFragment();
        let last = 0;
        let m;
        while ((m = WORD_RE.exec(text))) {
          if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          const span = document.createElement("span");
          span.className = "wl-w";
          span.textContent = m[0];
          span.setAttribute("role", "button");
          span.setAttribute("tabindex", "0");
          frag.appendChild(span);
          last = m.index + m[0].length;
        }
        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(frag, node);
      });
    });
  }

  function index() {
    if (byWord || !App.Vocabulary) return byWord;
    byWord = {};
    App.Vocabulary.getAllWords().forEach(function (w) {
      const key = w.word.toLowerCase();
      if (!byWord[key]) byWord[key] = w;
    });
    (App.Vocabulary.getCustomWords ? App.Vocabulary.getCustomWords() : []).forEach(function (w) {
      const key = w.word.toLowerCase();
      if (!byWord[key]) byWord[key] = w;
    });
    return byWord;
  }

  // მარტივი ლემატიზაცია: studies → study, running → run, played → play, children → child ...
  const IRREGULAR = { children: "child", men: "man", women: "woman", people: "person", feet: "foot", teeth: "tooth", mice: "mouse",
    went: "go", gone: "go", was: "be", were: "be", been: "be", is: "be", are: "be", am: "be", had: "have", has: "have",
    did: "do", does: "do", done: "do", made: "make", said: "say", saw: "see", seen: "see", took: "take", taken: "take",
    came: "come", got: "get", gave: "give", given: "give", knew: "know", known: "know", thought: "think", told: "tell",
    found: "find", left: "leave", felt: "feel", kept: "keep", brought: "bring", bought: "buy", began: "begin", begun: "begin",
    wrote: "write", written: "write", ate: "eat", eaten: "eat", spoke: "speak", spoken: "speak", ran: "run", sat: "sit",
    stood: "stand", lost: "lose", met: "meet", paid: "pay", sold: "sell", sent: "send", spent: "spend", built: "build",
    understood: "understand", chose: "choose", chosen: "choose", fell: "fall", fallen: "fall", grew: "grow", grown: "grow",
    better: "good", best: "good", worse: "bad", worst: "bad" };

  function candidates(raw) {
    const w = raw.toLowerCase().replace(/[’]/g, "'").replace(/'s$/, "");
    const out = [w];
    if (IRREGULAR[w]) out.push(IRREGULAR[w]);
    if (/ies$/.test(w)) out.push(w.slice(0, -3) + "y");
    if (/ied$/.test(w)) out.push(w.slice(0, -3) + "y");
    if (/es$/.test(w)) out.push(w.slice(0, -2));
    if (/s$/.test(w)) out.push(w.slice(0, -1));
    if (/ed$/.test(w)) { out.push(w.slice(0, -2)); out.push(w.slice(0, -1)); }
    if (/ing$/.test(w)) { out.push(w.slice(0, -3)); out.push(w.slice(0, -3) + "e"); }
    if (/(ed|ing)$/.test(w)) {
      const stem = w.replace(/(ed|ing)$/, "");
      if (/(.)\1$/.test(stem)) out.push(stem.slice(0, -1));
    }
    if (/ly$/.test(w)) out.push(w.slice(0, -2));
    if (/er$/.test(w)) out.push(w.slice(0, -2));
    if (/est$/.test(w)) out.push(w.slice(0, -3));
    return out.filter(function (x, i, a) { return x.length > 1 && a.indexOf(x) === i; });
  }

  function ipaFor(word) {
    const dict = App.IPADictionary || {};
    return dict[word] || "";
  }

  function close() {
    if (popup) {
      popup.remove();
      popup = null;
    }
    document.querySelectorAll(".wl-w.wl-active").forEach(function (s) { s.classList.remove("wl-active"); });
  }

  function place(el, anchor) {
    const r = anchor.getBoundingClientRect();
    const mobile = window.innerWidth < 640;
    if (mobile) {
      el.classList.add("wl-pop--sheet");
      return;
    }
    const width = Math.min(340, window.innerWidth - 24);
    let left = Math.max(12, Math.min(r.left, window.innerWidth - width - 12));
    let top = r.bottom + 8;
    el.style.width = width + "px";
    el.style.left = left + "px";
    el.style.top = top + "px";
    // არ გავიდეს ეკრანის ქვემოთ
    requestAnimationFrame(function () {
      const h = el.offsetHeight;
      if (top + h > window.innerHeight - 12) el.style.top = Math.max(12, r.top - h - 8) + "px";
    });
  }

  function renderPopup(anchor, raw, entry, lemma, online) {
    const word = entry ? entry.word : lemma;
    const ka = entry ? (entry.ka || (App.tr ? App.tr("vocab", entry.id, "term") : "")) : "";
    const ipa = (entry && entry.phonetic) || ipaFor(word.toLowerCase()) || (online && online.ipa) || "";
    const def = entry ? entry.def : (online && online.def) || "";
    const ex = entry ? entry.ex : (online && online.ex) || "";
    const boxes = App.Storage.get("vocabulary.boxByWordId", {}) || {};
    const inReview = entry && boxes[entry.id];
    const custom = entry && entry.custom;
    const el = document.createElement("div");
    el.className = "wl-pop";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Word: " + word);
    el.innerHTML =
      '<div class="wl-pop__head"><strong lang="en">' + esc(word) + "</strong>" +
        (entry && entry.level ? '<span class="lesson-level-tag">' + esc(entry.level) + "</span>" : "") +
        '<button type="button" class="audio-btn" data-wl-say="' + esc(word) + '" aria-label="Listen">🔊</button>' +
        '<button type="button" class="wl-pop__close" data-wl-close aria-label="დახურვა">✕</button></div>' +
      (ipa ? '<div class="wl-pop__ipa" lang="en">' + esc(ipa) + "</div>" : "") +
      (ka ? '<div class="wl-pop__ka" lang="ka">' + esc(ka) + "</div>" : "") +
      (def ? '<div class="wl-pop__def" lang="en">' + esc(def) + "</div>" : (online === null ? '<div class="wl-pop__def">⏳ ვეძებთ ლექსიკონში...</div>' : (!entry ? '<div class="wl-pop__def">ეს სიტყვა საიტის ლექსიკონში არ არის.</div>' : ""))) +
      (ex ? '<div class="wl-pop__ex" lang="en">' + esc(ex) + "</div>" : "") +
      (raw.toLowerCase() !== word.toLowerCase() ? '<div class="wl-pop__form" lang="en">Form in the text: ' + esc(raw) + "</div>" : "") +
      '<div class="wl-pop__actions">' +
        (entry && !custom
          ? (inReview ? '<span class="vx-review-tag">🔁 გამეორებაშია</span>' : '<button type="button" class="btn btn-sm btn-primary" data-wl-review="' + esc(entry.id) + '">🔁 გამეორებაში დამატება</button>')
          : (custom ? '<span class="vx-review-tag">✍️ ჩემს სიტყვებშია</span>' : '<button type="button" class="btn btn-sm btn-primary" data-wl-add>✍️ ჩემს სიტყვებში</button>')) +
      "</div>";
    close();
    anchor.classList.add("wl-active");
    document.body.appendChild(el);
    popup = el;
    place(el, anchor);

    el.querySelector("[data-wl-close]").addEventListener("click", close);
    el.querySelector("[data-wl-say]").addEventListener("click", function () {
      if (App.AudioEngine) App.AudioEngine.speak(word);
      else if (App.UI.speak) App.UI.speak(word);
    });
    const rev = el.querySelector("[data-wl-review]");
    if (rev) rev.addEventListener("click", function () {
      App.Vocabulary.addToReview([entry.id]);
      App.UI.toast("🔁 «" + word + "» დაემატა დღის გამეორებას.", "success", 2000);
      close();
    });
    const add = el.querySelector("[data-wl-add]");
    if (add) add.addEventListener("click", function () {
      const level = App.Storage.get("progress.level", "B1");
      const item = App.Vocabulary.addCustomWord({ word: word, def: def, ex: ex, level: level });
      if (item) {
        App.Vocabulary.addToReview([item.id]);
        App.UI.toast("✍️ «" + word + "» დაემატა „ჩემს სიტყვებს“ და გამეორებას. თარგმანი ლექსიკონში დაამატეთ.", "success", 3000);
        byWord = null;
      } else {
        App.UI.toast("ეს სიტყვა უკვე დამატებულია.", "info", 2000);
      }
      close();
    });
  }

  function strip(html) {
    const d = document.createElement("div");
    d.innerHTML = String(html || "");
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  // 1) Free Dictionary API, 2) Wiktionary (ორივე უფასოა); ჯერ ძირითადი ფორმა, მერე ტექსტში არსებული (მაგ. Thursday)
  function fromDictionaryApi(word) {
    return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!Array.isArray(data) || !data.length) return null;
        let def = "";
        let ex = "";
        let ipa = "";
        data.forEach(function (e) {
          (e.phonetics || []).forEach(function (p) { if (p.text && !ipa) ipa = p.text; });
          (e.meanings || []).forEach(function (m) {
            (m.definitions || []).forEach(function (d) { if (!def && d.definition) { def = d.definition; ex = d.example || ""; } });
          });
        });
        return def ? { def: def, ex: ex, ipa: ipa } : null;
      })
      .catch(function () { return null; });
  }

  function fromWiktionary(word) {
    return fetch("https://en.wiktionary.org/api/rest_v1/page/definition/" + encodeURIComponent(word))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        const list = data && data.en;
        if (!Array.isArray(list)) return null;
        for (let i = 0; i < list.length; i++) {
          const defs = list[i].definitions || [];
          for (let j = 0; j < defs.length; j++) {
            const def = strip(defs[j].definition);
            if (def) return { def: def, ex: strip((defs[j].examples || [])[0] || ""), ipa: "" };
          }
        }
        return null;
      })
      .catch(function () { return null; });
  }

  function lookupOnline(word, raw) {
    const key = word + "|" + raw;
    if (onlineCache[key] !== undefined) return Promise.resolve(onlineCache[key]);
    if (navigator.onLine === false) return Promise.resolve(onlineCache[key] = false);
    const forms = [word];
    if (raw && raw !== word) forms.push(raw);
    let chain = Promise.resolve(null);
    forms.forEach(function (f) {
      chain = chain.then(function (found) { return found || fromDictionaryApi(f); })
        .then(function (found) { return found || fromWiktionary(f); });
    });
    return chain.then(function (found) { return (onlineCache[key] = found || false); });
  }

  function open(anchor) {
    const raw = anchor.textContent;
    const ready = App.loadModuleData ? App.loadModuleData(["vocabulary", "ipa"]) : Promise.resolve();
    ready.then(function () {
      const idx = index() || {};
      const cands = candidates(raw);
      let entry = null;
      let lemma = cands[0];
      for (let i = 0; i < cands.length; i++) {
        if (idx[cands[i]]) { entry = idx[cands[i]]; lemma = cands[i]; break; }
      }
      if (!entry) {
        // ლექსიკონში არ არის — IPA-ს მიხედვით ვარჩევთ ფუძეს და ონლაინ განმარტებას ვეძებთ
        const known = cands.find(function (c) { return ipaFor(c); });
        if (known) lemma = known;
        renderPopup(anchor, raw, null, lemma, null);
        lookupOnline(lemma, raw).then(function (online) {
          if (popup && anchor.classList.contains("wl-active")) renderPopup(anchor, raw, null, lemma, online || false);
        });
        return;
      }
      renderPopup(anchor, raw, entry, lemma, undefined);
    }, function () {
      App.UI.toast("ლექსიკონი ვერ ჩაიტვირთა.", "warning");
    });
  }

  document.addEventListener("click", function (e) {
    const w = e.target.closest && e.target.closest(".wl-w");
    if (w) {
      e.preventDefault();
      open(w);
      return;
    }
    if (popup && !popup.contains(e.target)) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
    const w = e.target.closest && e.target.closest(".wl-w");
    if (w && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      open(w);
    }
  });
  window.addEventListener("hashchange", close);

  function observe() {
    const view = document.getElementById("app-view");
    if (!view) return;
    enhance(view);
    new MutationObserver(function () { enhance(view); }).observe(view, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", observe);
  else observe();

  App.WordLookup = { enhance: enhance, candidates: candidates, close: close };
})(window);
