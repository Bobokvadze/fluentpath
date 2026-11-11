/**
 * MISTAKES.JS — the mistake notebook.
 * Every module reports a wrongly answered multiple-choice question with App.Mistakes.record(...). The questions are
 * kept in progress.mistakes and practised again on the #mistakes page; a question leaves the notebook after it has been
 * answered correctly twice in a row there. The store is capped so old entries make room for new ones.
 */
(function (window) {
  "use strict";

  const App = window.App = window.App || {};
  const PATH = "progress.mistakes";
  const MAX_ITEMS = 300;
  const SESSION_SIZE = 12;
  const REQUIRED_STREAK = 2;
  const MODULE_LABELS = {
    grammar: "გრამატიკა", reading: "კითხვა", listening: "მოსმენა", writing: "წერა",
    vocab: "ლექსიკა", quiz: "ტესტები", learn: "სასწავლო გეგმა"
  };

  let session = null; // { items: [...], answers: {}, done: false }

  function esc(s) { return App.UI.escapeHTML(s); }

  function hash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }

  function load() {
    const v = App.Storage.get(PATH, {});
    return v && typeof v === "object" && !Array.isArray(v) ? Object.assign({}, v) : {};
  }

  function save(store) {
    const keys = Object.keys(store);
    if (keys.length > MAX_ITEMS) {
      keys.sort(function (a, b) { return (store[a].last || 0) - (store[b].last || 0); })
        .slice(0, keys.length - MAX_ITEMS).forEach(function (k) { delete store[k]; });
    }
    App.Storage.set(PATH, store);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  const Mistakes = {
    /**
     * item: { module, ref, title, q, options: [4 strings], correct: index or text, why }
     */
    record: function (item) {
      if (!item || !item.q || !Array.isArray(item.options) || item.options.length < 2) return;
      const correctText = typeof item.correct === "number" ? item.options[item.correct] : item.correct;
      if (correctText === undefined || correctText === null || item.options.indexOf(correctText) === -1) return;
      const q = String(item.q).replace(/^\d+\.\s*/, "").trim();
      const key = (item.module || "other") + "-" + hash(q + "|" + correctText);
      const store = load();
      const prev = store[key];
      store[key] = {
        module: item.module || "other",
        ref: item.ref || "",
        title: item.title || "",
        q: q,
        options: item.options.map(String),
        correct: correctText,
        why: item.why || "",
        count: (prev ? prev.count : 0) + 1,
        streak: 0,
        last: Date.now()
      };
      save(store);
    },

    count: function () { return Object.keys(load()).length; },

    list: function () {
      const store = load();
      return Object.keys(store).map(function (k) { return Object.assign({ key: k }, store[k]); })
        .sort(function (a, b) { return b.last - a.last; });
    },

    // ჯერ ყველაზე ხშირად შეცდომილი და ძველი, შემდეგ დანარჩენი
    pickSession: function (size) {
      const items = this.list().sort(function (a, b) { return (b.count - a.count) || (a.last - b.last); });
      return shuffle(items.slice(0, size || SESSION_SIZE));
    },

    resolve: function (key, right) {
      const store = load();
      const it = store[key];
      if (!it) return false;
      if (right) {
        it.streak = (it.streak || 0) + 1;
        if (it.streak >= REQUIRED_STREAK) {
          delete store[key];
          save(store);
          return true; // ისწავლა
        }
      } else {
        it.streak = 0;
        it.count = (it.count || 0) + 1;
        it.last = Date.now();
      }
      save(store);
      return false;
    },

    remove: function (key) {
      const store = load();
      delete store[key];
      save(store);
    },

    clear: function () { App.Storage.set(PATH, {}); },

    render: function () {
      const container = document.getElementById("app-view");
      if (!container) return;
      container.innerHTML = '<div class="dashboard-grid">' + (session ? this.renderSession() : this.renderHome()) + "</div>";
      this.bind(container);
    },

    renderHome: function () {
      const items = this.list();
      const byModule = {};
      items.forEach(function (it) { byModule[it.module] = (byModule[it.module] || 0) + 1; });
      const chips = Object.keys(byModule).map(function (m) {
        return '<span class="stat-pill">' + esc(MODULE_LABELS[m] || m) + ": " + byModule[m] + "</span>";
      }).join("");
      const rows = items.slice(0, 60).map(function (it) {
        return '<li class="mk-item"><div class="mk-item__body">' +
          '<div class="mk-item__src">' + esc(MODULE_LABELS[it.module] || it.module) + (it.title ? ' · <span lang="en">' + esc(it.title) + "</span>" : "") +
            (it.count > 1 ? " · " + it.count + "-ჯერ" : "") + (it.streak ? " · ✓ " + it.streak + "/" + REQUIRED_STREAK : "") + "</div>" +
          '<div class="mk-item__q" lang="en">' + esc(it.q) + "</div>" +
          '<div class="mk-item__a" lang="en">✓ ' + esc(it.correct) + "</div></div>" +
          '<button type="button" class="btn btn-sm btn-outline" data-mk-remove="' + esc(it.key) + '" aria-label="წაშლა">✕</button></li>';
      }).join("");
      return '<section class="card">' +
          '<div class="section-header"><div><h2 class="section-title">📕 შეცდომების რვეული</h2>' +
          '<p class="section-subtitle">აქ ავტომატურად გროვდება ყველა კითხვა, რომელსაც არასწორად უპასუხეთ — გრამატიკაში, კითხვაში, მოსმენაში, წერაში, ტესტებსა და სასწავლო გეგმაში. ' +
          "კითხვა რვეულიდან ქრება, როცა მას ზედიზედ " + REQUIRED_STREAK + "-ჯერ სწორად უპასუხებთ.</p></div>" +
          '<span class="stat-pill stat-pill--level">' + items.length + " კითხვა</span></div>" +
          (items.length
            ? '<div class="mk-chips">' + chips + "</div>" +
              '<div class="mk-actions"><button type="button" class="btn btn-primary" data-mk-start>▶ გამეორება (' + Math.min(SESSION_SIZE, items.length) + " კითხვა)</button>" +
              '<button type="button" class="btn btn-outline" data-mk-clear>რვეულის გასუფთავება</button></div>'
            : '<p class="mk-empty">🎉 რვეული ცარიელია. როცა რომელიმე სავარჯიშოში შეცდებით, კითხვა აქ გამოჩნდება.</p>') +
        "</section>" +
        (items.length ? '<section class="card"><h3 class="section-title" style="margin-bottom:10px;">ბოლო შეცდომები</h3><ul class="mk-list">' + rows + "</ul></section>" : "");
    },

    renderSession: function () {
      const s = session;
      const answered = Object.keys(s.answers).length;
      if (s.done) {
        return '<section class="card cx-result"><div class="cx-result__score ok">' + s.learned + "</div>" +
          '<h2 class="section-title">ნასწავლი კითხვა</h2>' +
          '<p class="section-subtitle">სწორი პასუხი: ' + s.right + " / " + s.items.length + ". რვეულში დარჩა " + this.count() + " კითხვა.</p>" +
          '<div class="cx-result__actions">' + (this.count() ? '<button type="button" class="btn btn-primary" data-mk-start>▶ კიდევ ერთი რაუნდი</button>' : "") +
          '<button type="button" class="btn btn-outline" data-mk-home>რვეულზე დაბრუნება</button></div></section>';
      }
      const qs = s.items.map(function (it, i) {
        const chosen = s.answers[i];
        const done = chosen !== undefined;
        const opts = s.order[i].map(function (opt) {
          let cls = "option-btn";
          if (done && opt === it.correct) cls += " correct";
          else if (done && opt === chosen) cls += " wrong";
          return '<button type="button" class="' + cls + '" data-mk-q="' + i + '" data-mk-a="' + esc(opt) + '"' + (done ? " disabled" : "") + ' lang="en">' + esc(opt) + "</button>";
        }).join("");
        return '<div class="drill-question-box"><div class="mk-item__src">' + esc(MODULE_LABELS[it.module] || it.module) + (it.title ? ' · <span lang="en">' + esc(it.title) + "</span>" : "") + "</div>" +
          '<div class="drill-q-title" lang="en">' + (i + 1) + ". " + esc(it.q) + '</div><div class="drill-options">' + opts + "</div>" +
          (done ? '<div class="gx-feedback ' + (chosen === it.correct ? "ok" : "bad") + '" role="status" lang="en">' + (chosen === it.correct ? "✓ Correct" : "✗ Correct answer: " + esc(it.correct)) + (it.why ? " — " + esc(it.why) : "") + "</div>" : "") +
          "</div>";
      }).join("");
      return '<div class="player-topbar"><button type="button" class="btn btn-outline btn-sm" data-mk-home>← რვეულზე დაბრუნება</button>' +
          '<span class="stat-pill stat-pill--level">' + answered + " / " + s.items.length + "</span></div>" +
        '<section class="card"><h2 class="section-title">📕 შეცდომების გამეორება</h2>' +
          '<p class="section-subtitle">ყოველი კითხვა რვეულიდან ქრება ზედიზედ ' + REQUIRED_STREAK + " სწორი პასუხის შემდეგ.</p>" + qs +
          '<div style="text-align:center; margin-top:16px;"><button type="button" class="btn btn-primary" data-mk-finish' + (answered < s.items.length ? " disabled" : "") + ">დასრულება</button></div></section>";
    },

    bind: function (container) {
      const self = this;
      container.querySelectorAll("[data-mk-start]").forEach(function (b) {
        b.addEventListener("click", function () {
          const items = self.pickSession();
          session = { items: items, order: items.map(function (it) { return shuffle(it.options); }), answers: {}, right: 0, learned: 0, done: false };
          self.render();
          window.scrollTo({ top: 0 });
        });
      });
      container.querySelectorAll("[data-mk-home]").forEach(function (b) {
        b.addEventListener("click", function () { session = null; self.render(); window.scrollTo({ top: 0 }); });
      });
      container.querySelectorAll("[data-mk-q]").forEach(function (b) {
        b.addEventListener("click", function () {
          const i = Number(b.getAttribute("data-mk-q"));
          if (session.answers[i] !== undefined) return;
          const chosen = b.getAttribute("data-mk-a");
          session.answers[i] = chosen;
          const it = session.items[i];
          const right = chosen === it.correct;
          if (right) session.right++;
          if (self.resolve(it.key, right)) session.learned++;
          App.UI.playSound(right ? "success" : "click");
          const y = window.scrollY;
          self.render();
          window.scrollTo({ top: y, behavior: "instant" });
        });
      });
      const finish = container.querySelector("[data-mk-finish]");
      if (finish) finish.addEventListener("click", function () {
        session.done = true;
        if (App.Progress) App.Progress.recordActivity({ title: "შეცდომების გამეორება: " + session.right + "/" + session.items.length, category: "ტესტები" });
        self.render();
        window.scrollTo({ top: 0 });
      });
      container.querySelectorAll("[data-mk-remove]").forEach(function (b) {
        b.addEventListener("click", function () { self.remove(b.getAttribute("data-mk-remove")); self.render(); });
      });
      const clear = container.querySelector("[data-mk-clear]");
      if (clear) clear.addEventListener("click", function () {
        if (window.confirm("წაიშალოს რვეულის ყველა კითხვა?")) { self.clear(); self.render(); }
      });
    }
  };

  App.Mistakes = Mistakes;
})(window);
