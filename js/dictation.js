/**
 * DICTATION.JS — listen to a sentence and type it.
 * Sentences come from the listening scripts and the unit dialogues, grouped by CEFR level and filtered by length.
 * The answer is compared word by word (case, punctuation and common contractions are ignored); 90% or more counts
 * as passed. Progress: progress.dictation = { best: { sentenceId: percent }, attempts }.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const PASS = 90;
  const LENGTH = { A1: [4, 9], A2: [5, 12], B1: [6, 15], B2: [7, 18], C1: [8, 22], C2: [8, 26] };
  const CONTRACTIONS = {
    "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are", "he's": "he is", "she's": "she is",
    "it's": "it is", "that's": "that is", "there's": "there is", "what's": "what is", "let's": "let us",
    "i've": "i have", "you've": "you have", "we've": "we have", "they've": "they have",
    "i'll": "i will", "you'll": "you will", "we'll": "we will", "they'll": "they will", "he'll": "he will", "she'll": "she will", "it'll": "it will",
    "i'd": "i would", "you'd": "you would", "we'd": "we would", "they'd": "they would", "he'd": "he would", "she'd": "she would",
    "don't": "do not", "doesn't": "does not", "didn't": "did not", "isn't": "is not", "aren't": "are not", "wasn't": "was not",
    "weren't": "were not", "haven't": "have not", "hasn't": "has not", "hadn't": "had not", "won't": "will not",
    "wouldn't": "would not", "can't": "cannot", "couldn't": "could not", "shouldn't": "should not", "mustn't": "must not"
  };

  let pool = null;        // { A1: [{id, text, source}] ... }
  let level = null;
  let current = null;     // sentence
  let result = null;      // { pct, tokens, typed }
  let hint = false;
  let draft = "";

  function esc(s) { return App.UI.escapeHTML(s); }

  function hash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }

  function words(text) {
    return String(text).toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”"]/g, " ")
      .replace(/[^a-z0-9'\s-]/g, " ").replace(/-/g, " ")
      .split(/\s+/).filter(Boolean)
      .map(function (w) { return w.replace(/^'+|'+$/g, ""); }).filter(Boolean)
      .reduce(function (out, w) { return out.concat((CONTRACTIONS[w] || w).split(" ")); }, []);
  }

  // შედარება LCS-ით: ok / missing (გამოტოვებული) / extra (ზედმეტი) / wrong (ჩანაცვლება)
  function compare(expected, typed) {
    const a = words(expected);
    const b = words(typed);
    const dp = [];
    for (let i = 0; i <= a.length; i++) {
      dp.push(new Array(b.length + 1).fill(0));
    }
    for (let i = a.length - 1; i >= 0; i--) {
      for (let j = b.length - 1; j >= 0; j--) {
        dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
    const raw = [];
    let i = 0;
    let j = 0;
    while (i < a.length || j < b.length) {
      if (i < a.length && j < b.length && a[i] === b[j]) { raw.push({ t: "ok", w: a[i] }); i++; j++; }
      else if (j < b.length && (i === a.length || dp[i][j + 1] >= dp[i + 1][j])) { raw.push({ t: "extra", w: b[j] }); j++; }
      else { raw.push({ t: "missing", w: a[i] }); i++; }
    }
    // ზედმეტი + გამოტოვებული ერთად = არასწორად დაწერილი სიტყვა
    const tokens = [];
    for (let k = 0; k < raw.length; k++) {
      const x = raw[k];
      const y = raw[k + 1];
      if (y && ((x.t === "extra" && y.t === "missing") || (x.t === "missing" && y.t === "extra"))) {
        tokens.push({ t: "wrong", typed: x.t === "extra" ? x.w : y.w, w: x.t === "missing" ? x.w : y.w });
        k++;
      } else tokens.push(x);
    }
    const ok = tokens.filter(function (t) { return t.t === "ok"; }).length;
    const extra = tokens.filter(function (t) { return t.t === "extra"; }).length;
    const pct = a.length ? Math.max(0, Math.round(((ok - extra * 0.5) / a.length) * 100)) : 0;
    return { pct: Math.min(100, pct), tokens: tokens, total: a.length };
  }

  function splitSentences(text) {
    return String(text).replace(/\s+/g, " ").split(/(?<=[.!?])\s+(?=[A-Z"'])/)
      .map(function (s) { return s.replace(/^[A-Z][A-Za-z.' ]{1,24}:\s+/, "").trim(); })
      .filter(Boolean);
  }

  function suitable(s, lvl) {
    if (/[0-9()\[\]{};:…–—@/#]/.test(s) || /["“”]/.test(s) || !/[.!?]$/.test(s)) return false;
    const n = words(s).length;
    const r = LENGTH[lvl];
    return n >= r[0] && n <= r[1];
  }

  function buildPool() {
    if (pool) return pool;
    pool = {};
    LEVELS.forEach(function (l) { pool[l] = []; });
    const seen = {};
    const add = function (lvl, text, source) {
      if (!pool[lvl] || !suitable(text, lvl)) return;
      const id = "d-" + hash(text);
      if (seen[id]) return;
      seen[id] = true;
      pool[lvl].push({ id: id, text: text, source: source, level: lvl });
    };
    (App.UnitDialogues || []).forEach(function (d) {
      d.lines.forEach(function (line) { splitSentences(line[1]).forEach(function (s) { add(d.level, s, "Dialogue: " + d.title); }); });
    });
    if (App.Listening) {
      App.Listening.getAllTopics().forEach(function (t) {
        t.paragraphs.forEach(function (p) { splitSentences(p.en).forEach(function (s) { add(t.level, s, t.titleEn); }); });
      });
    }
    return pool;
  }

  function progress() {
    const p = App.Storage.get("progress.dictation", {}) || {};
    return { best: p.best || {}, attempts: Number(p.attempts) || 0 };
  }

  function pickNext() {
    const list = buildPool()[level] || [];
    const best = progress().best;
    const todo = list.filter(function (s) { return (best[s.id] || 0) < PASS && (!current || s.id !== current.id); });
    const from = todo.length ? todo : list;
    current = from.length ? from[Math.floor(Math.random() * from.length)] : null;
    result = null;
    hint = false;
    draft = "";
  }

  function speak(text, slow) {
    if (App.AudioEngine) App.AudioEngine.speak(text, "US", slow ? 0.8 : 1.0);
  }

  const Dictation = {
    words: words,
    compare: compare,
    buildPool: buildPool,
    getCurrent: function () { return current; },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;
      if (!level) {
        const user = App.Storage.get("progress.level", "A1");
        level = LEVELS.indexOf(user) !== -1 ? user : "A1";
      }
      buildPool();
      if (!current || current.level !== level) pickNext();
      const prog = progress();
      const list = pool[level] || [];
      const passed = list.filter(function (s) { return (prog.best[s.id] || 0) >= PASS; }).length;
      const tabs = LEVELS.map(function (l) {
        return '<button type="button" class="pill-tab' + (l === level ? " active" : "") + '" data-dc-level="' + l + '" aria-pressed="' + (l === level) + '">' + l + " (" + (pool[l] || []).length + ")</button>";
      }).join("");

      let body = '<section class="card"><p class="section-subtitle">ამ დონეზე წინადადებები არ მოიძებნა.</p></section>';
      if (current) {
        const res = result;
        const hintHtml = hint
          ? '<p class="dc-hint" lang="en">' + esc(current.text.split(/\s+/).map(function (w) { const m = w.match(/^([^A-Za-z]*)([A-Za-z])/); return m ? m[1] + m[2] + "…" : w; }).join(" ")) + "</p>"
          : "";
        const diff = res ? res.tokens.map(function (t) {
          if (t.t === "ok") return '<span class="dc-ok">' + esc(t.w) + "</span>";
          if (t.t === "missing") return '<span class="dc-missing" title="გამოტოვებული">' + esc(t.w) + "</span>";
          if (t.t === "extra") return '<span class="dc-extra" title="ზედმეტი">' + esc(t.w) + "</span>";
          return '<span class="dc-wrong" title="არასწორად"><s>' + esc(t.typed) + "</s> " + esc(t.w) + "</span>";
        }).join(" ") : "";
        body =
          '<section class="card dc-card">' +
            '<div class="dc-play">' +
              '<button type="button" class="btn btn-primary" id="dc-play">🔊 მოსმენა</button>' +
              '<button type="button" class="btn btn-outline" id="dc-slow">🐢 ნელა</button>' +
              '<button type="button" class="btn btn-outline btn-sm" id="dc-hint"' + (hint || res ? " disabled" : "") + ">💡 მინიშნება</button>" +
            "</div>" +
            hintHtml +
            '<label class="sr-only" for="dc-input">ჩაწერეთ მოსმენილი წინადადება</label>' +
            '<textarea id="dc-input" class="auth-input dc-input" rows="3" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ჩაწერეთ, რაც მოისმინეთ..."' + (res ? " readonly" : "") + ">" + esc(res ? res.typed : draft) + "</textarea>" +
            (res
              ? '<div class="dc-result ' + (res.pct >= PASS ? "dc-result--ok" : "dc-result--bad") + '" role="status">' +
                  '<div class="dc-result__score">' + res.pct + "%" + (res.pct >= PASS ? " ✓" : "") + "</div>" +
                  '<div class="dc-diff" lang="en">' + diff + "</div>" +
                  '<div class="dc-answer" lang="en"><strong>Correct:</strong> ' + esc(current.text) + "</div>" +
                  '<div class="dc-legend"><span class="dc-ok">სწორი</span> <span class="dc-wrong"><s>თქვენი</s> სწორი</span> <span class="dc-missing">გამოტოვებული</span> <span class="dc-extra">ზედმეტი</span></div>' +
                "</div>" +
                '<div class="dc-actions"><button type="button" class="btn btn-outline" id="dc-retry">↺ თავიდან</button><button type="button" class="btn btn-primary" id="dc-next">შემდეგი →</button></div>'
              : '<div class="dc-actions"><button type="button" class="btn btn-outline" id="dc-skip">გამოტოვება</button><button type="button" class="btn btn-primary" id="dc-check">შემოწმება</button></div>') +
            '<p class="dc-source">წყარო: <span lang="en">' + esc(current.source) + "</span></p>" +
          "</section>";
      }

      container.innerHTML = '<div class="dashboard-grid">' +
        '<section class="card"><div class="section-header"><div><h2 class="section-title">✍️ კარნახი</h2>' +
          '<p class="section-subtitle">მოუსმინეთ წინადადებას (რამდენჯერაც გინდათ) და ჩაწერეთ. შეამოწმებთ სიტყვა-სიტყვით — დიდი ასოები, სასვენი ნიშნები და შემოკლებები (I\'m = I am) არ ითვლება შეცდომად. ჩასათვლელად საჭიროა ' + PASS + "%.</p></div>" +
          '<span class="stat-pill stat-pill--level">' + level + ": " + passed + " / " + list.length + "</span></div>" +
          '<div class="pill-tabs" role="group" aria-label="დონე">' + tabs + "</div>" +
        "</section>" + body + "</div>";
      this.bind(container);
    },

    bind: function (container) {
      const self = this;
      container.querySelectorAll("[data-dc-level]").forEach(function (b) {
        b.addEventListener("click", function () { level = b.getAttribute("data-dc-level"); current = null; self.render(); });
      });
      const input = container.querySelector("#dc-input");
      if (input) {
        input.addEventListener("input", function () { draft = input.value; });
        input.addEventListener("keydown", function (e) {
          if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); const c = container.querySelector("#dc-check"); if (c) c.click(); }
        });
      }
      const on = function (id, fn) { const el = container.querySelector(id); if (el) el.addEventListener("click", fn); };
      on("#dc-play", function () { speak(current.text, false); if (input && !result) input.focus(); });
      on("#dc-slow", function () { speak(current.text, true); if (input && !result) input.focus(); });
      on("#dc-hint", function () { hint = true; self.render(); });
      on("#dc-skip", function () { pickNext(); self.render(); });
      on("#dc-next", function () { pickNext(); self.render(); const i = document.getElementById("dc-input"); if (i) i.focus(); });
      on("#dc-retry", function () { result = null; draft = ""; self.render(); });
      on("#dc-check", function () {
        const typed = (input && input.value || "").trim();
        if (!typed) { App.UI.toast("ჯერ ჩაწერეთ მოსმენილი წინადადება.", "warning"); return; }
        const r = compare(current.text, typed);
        result = { pct: r.pct, tokens: r.tokens, typed: typed };
        const prog = progress();
        const before = prog.best[current.id] || 0;
        prog.best[current.id] = Math.max(before, r.pct);
        prog.attempts++;
        App.Storage.set("progress.dictation", prog);
        if (r.pct >= PASS && before < PASS && App.Progress) {
          App.Progress.recordActivity({ title: "კარნახი (" + current.level + "): " + r.pct + "%", category: "მოსმენა" });
        }
        App.UI.playSound(r.pct >= PASS ? "success" : "click");
        self.render();
      });
    }
  };

  App.Dictation = Dictation;
})(window);
