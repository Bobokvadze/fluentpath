/**
 * VOCABULARY.JS — curated A1–C1 vocabulary database and dictionary view.
 * Content: js/content/vocab-*.js (English source) · translations: App.I18n.ka.vocab (via App.tr)
 * IPA: looked up at runtime in ipa-dict.js (open-dict-data, CMUdict-based); never stored or invented.
 */
(function (window) {
  'use strict';

  const App = window.App = window.App || {};
  const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const POS_LABELS = {
    n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb', prep: 'preposition', pron: 'pronoun', det: 'determiner',
    conj: 'conjunction', num: 'number', int: 'exclamation', phr: 'phrase', pv: 'phrasal verb'
  };
  const PAGE_SIZE = 40;

  let entries = null;
  let byId = {};

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function titleCase(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
  }

  function splitList(v) {
    return v ? v.split(';').map((x) => x.trim()).filter(Boolean) : [];
  }

  function parseLine(line, level, order) {
    const parts = line.split('|');
    const extra = {};
    parts.slice(5).forEach((kv) => {
      const i = kv.indexOf('=');
      if (i > 0) extra[kv.slice(0, i)] = kv.slice(i + 1);
    });
    const word = parts[0];
    const pos = parts[1];
    return {
      id: 'v-' + slug(word) + '-' + pos,
      word: word,
      pos: pos,
      posLabel: POS_LABELS[pos] || pos,
      level: level,
      topic: parts[2],
      topicLabel: titleCase(parts[2]),
      def: parts[3],
      ex: parts[4],
      ex2: extra.x || '',
      collocations: splitList(extra.c),
      synonyms: splitList(extra.s),
      antonyms: splitList(extra.a),
      forms: extra.f || '',
      family: splitList(extra.w),
      note: extra.n || '',
      order: order
    };
  }

  function buildDatabase() {
    if (entries) return entries;
    entries = [];
    byId = {};
    const source = App.VocabSource || {};
    LEVELS.forEach((level) => {
      (source[level] || []).forEach((line, i) => {
        const e = parseLine(line, level, i);
        if (byId[e.id]) return;
        // flashcard / quiz compatibility fields
        e.en = e.word;
        e.meaning = e.def;
        e.exampleEn = e.ex;
        entries.push(e);
        byId[e.id] = e;
      });
    });
    return entries;
  }

  function getIpa(word) {
    const dict = App.IPADictionary;
    if (!dict) return '';
    const tokens = String(word || '').toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[\s/]+/)
      .map((t) => t.replace(/[^a-z'-]/g, '')).filter(Boolean);
    if (!tokens.length) return '';
    const parts = [];
    for (let i = 0; i < tokens.length; i++) {
      const ipa = dict[tokens[i]];
      if (!ipa) return '';
      parts.push(String(ipa).replace(/^\/|\/$/g, ''));
    }
    return '/' + parts.join(' ') + '/';
  }

  // ძველი ლექსიკონის (vw-*) id-ების გადატანა ახალ ბაზაზე — სიტყვის მიხედვით, ერთხელ თითოეულ მდგომარეობაზე
  function migrateLegacyIds() {
    if (!App.Storage || typeof App.Storage.get !== 'function' || App.Storage.get('vocabulary.migratedV2', false)) return;
    const legacy = App.VocabLegacyIds || {};
    const byWord = {};
    buildDatabase().forEach((e) => {
      const key = e.word.toLowerCase();
      if (!byWord[key]) byWord[key] = e.id;
    });
    const unmapped = [];
    const mapId = (id) => {
      if (typeof id !== 'string' || id.indexOf('vw-') !== 0) return id;
      const word = legacy[id];
      const newId = word && byWord[word.toLowerCase()];
      if (!newId) unmapped.push(id);
      return newId || null;
    };
    const mapList = (path) => {
      const list = App.Storage.get(path, []);
      if (!Array.isArray(list)) return;
      const out = [];
      list.forEach((id) => {
        const m = mapId(id);
        if (m && out.indexOf(m) === -1) out.push(m);
      });
      App.Storage.set(path, out);
    };
    const mapObject = (path, merge) => {
      const obj = App.Storage.get(path, {});
      if (!obj || typeof obj !== 'object') return;
      const out = {};
      Object.keys(obj).forEach((id) => {
        const m = mapId(id);
        if (!m) return;
        out[m] = out[m] === undefined ? obj[id] : merge(out[m], obj[id]);
      });
      App.Storage.set(path, out);
    };
    mapList('vocabulary.learnedIds');
    mapList('vocabulary.bookmarkedIds');
    mapObject('vocabulary.boxByWordId', (a, b) => Math.max(Number(a) || 1, Number(b) || 1));
    mapObject('vocabulary.lastReviewByWordId', (a, b) => (a > b ? a : b));
    // ids of removed auto-generated phrases are kept (not deleted) but no longer counted
    if (unmapped.length) {
      const prev = App.Storage.get('vocabulary.legacyUnmappedIds', []) || [];
      App.Storage.set('vocabulary.legacyUnmappedIds', prev.concat(unmapped.filter((id) => prev.indexOf(id) === -1)));
    }
    App.Storage.set('vocabulary.learnedCount', (App.Storage.get('vocabulary.learnedIds', []) || []).length);
    App.Storage.set('progress.vocabularyLearned', (App.Storage.get('vocabulary.learnedIds', []) || []).length);
    App.Storage.set('vocabulary.migratedV2', true);
  }

  // view state
  let levelFilter = null; // პირველ გახსნაზე — მომხმარებლის დონე
  let topicFilter = 'all';
  let posFilter = 'all';
  let statusFilter = 'all';
  let searchQuery = '';
  let visibleLimit = PAGE_SIZE;

  function getList(path) {
    const v = App.Storage.get(path, []);
    return Array.isArray(v) ? v : [];
  }

  const Vocabulary = {
    LEVELS: LEVELS,
    POS_LABELS: POS_LABELS,

    getAllWords: function () {
      buildDatabase();
      migrateLegacyIds();
      return entries.map((e) => {
        const ka = App.tr ? App.tr('vocab', e.id, 'term') : '';
        return Object.assign({}, e, { ka: ka, phonetic: getIpa(e.word) });
      });
    },

    getEntry: function (id) {
      buildDatabase();
      return byId[id] || null;
    },

    getIpa: getIpa,

    getTopics: function (level) {
      buildDatabase();
      const seen = [];
      entries.forEach((e) => {
        if ((!level || e.level === level) && seen.indexOf(e.topic) === -1) seen.push(e.topic);
      });
      return seen;
    },

    getWordsByTopic: function (level, topic) {
      buildDatabase();
      return entries.filter((e) => e.level === level && e.topic === topic);
    },

    getCounts: function () {
      buildDatabase();
      const counts = { total: entries.length };
      LEVELS.forEach((l) => { counts[l] = entries.filter((e) => e.level === l).length; });
      return counts;
    },

    getLearnedIds: function () {
      return getList('vocabulary.learnedIds');
    },

    ensureMigrated: function () {
      buildDatabase();
      migrateLegacyIds();
    },

    // ძველი სასწავლო ხის თავსებადობისთვის (ახალი სასწავლო გეგმა ამას აღარ იყენებს)
    getWordsForUnitNumber: function () { return []; },
    markUnitSliceLearned: function () {},

    speak: function (text) {
      if (App.AudioEngine && typeof App.AudioEngine.speak === 'function') {
        App.AudioEngine.speak(text);
      } else if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        window.speechSynthesis.speak(u);
      }
    },

    toggleLearned: function (id) {
      const learned = getList('vocabulary.learnedIds').slice();
      const idx = learned.indexOf(id);
      if (idx === -1) {
        learned.push(id);
        App.Storage.set('vocabulary.learnedIds', learned);
        App.Storage.set('progress.vocabularyLearned', learned.length);
        const e = byId[id];
        App.Progress.recordActivity({ xp: 5, title: 'Learned a word: ' + (e ? e.word : id), category: 'ლექსიკონი' });
        App.UI.playSound('success');
      } else {
        learned.splice(idx, 1);
        App.Storage.set('vocabulary.learnedIds', learned);
        App.Storage.set('progress.vocabularyLearned', learned.length);
        App.UI.playSound('click');
      }
      this.render();
    },

    toggleBookmark: function (id) {
      const list = getList('vocabulary.bookmarkedIds').slice();
      const idx = list.indexOf(id);
      if (idx === -1) list.push(id); else list.splice(idx, 1);
      App.Storage.set('vocabulary.bookmarkedIds', list);
      this.render();
    },

    // სიტყვის დამატება ინტერვალური გამეორების რიგში (ყუთი 1 — დღესვე გასამეორებელი)
    addToReview: function (ids) {
      const boxes = Object.assign({}, App.Storage.get('vocabulary.boxByWordId', {}) || {});
      let added = 0;
      ids.forEach((id) => {
        if (!boxes[id]) {
          boxes[id] = 1;
          added++;
        }
      });
      if (added) App.Storage.set('vocabulary.boxByWordId', boxes);
      return added;
    },

    filtered: function () {
      const all = this.getAllWords();
      const learned = getList('vocabulary.learnedIds');
      const bookmarked = getList('vocabulary.bookmarkedIds');
      const boxes = App.Storage.get('vocabulary.boxByWordId', {}) || {};
      const q = searchQuery.trim().toLowerCase();
      return all.filter((e) => {
        if (!q && levelFilter !== 'all' && e.level !== levelFilter) return false;
        if (topicFilter !== 'all' && e.topic !== topicFilter) return false;
        if (posFilter !== 'all' && e.pos !== posFilter) return false;
        if (statusFilter === 'learned' && learned.indexOf(e.id) === -1) return false;
        if (statusFilter === 'new' && (learned.indexOf(e.id) !== -1 || boxes[e.id])) return false;
        if (statusFilter === 'saved' && bookmarked.indexOf(e.id) === -1) return false;
        if (statusFilter === 'review' && !boxes[e.id]) return false;
        if (q) {
          const hay = (e.word + ' ' + e.def + ' ' + e.synonyms.join(' ') + ' ' + (e.ka || '')).toLowerCase();
          if (hay.indexOf(q) === -1) return false;
        }
        return true;
      });
    },

    renderCard: function (e, learned, bookmarked, boxes) {
      const esc = App.UI.escapeHTML;
      const isLearned = learned.indexOf(e.id) !== -1;
      const isSaved = bookmarked.indexOf(e.id) !== -1;
      const inReview = !!boxes[e.id];
      const list = (label, items) => items.length
        ? '<div class="vx-detail-row"><span class="vx-detail-label">' + label + '</span> <span lang="en">' + esc(items.join(', ')) + '</span></div>'
        : '';
      const details =
        list('Collocations', e.collocations) +
        list('Synonyms', e.synonyms) +
        list('Opposites', e.antonyms) +
        (e.forms ? list('Forms', [e.forms]) : '') +
        list('Word family', e.family) +
        (e.note ? '<div class="vx-note" lang="en">💡 ' + esc(e.note) + '</div>' : '');
      return (
        '<article class="card vocab-card' + (isLearned ? ' learned' : '') + '">' +
          '<div class="vocab-header">' +
            '<div>' +
              '<span class="lesson-level-tag">' + esc(e.level) + ' • ' + esc(e.topicLabel) + '</span>' +
              '<span class="vocab-pos">' + esc(e.posLabel) + '</span>' +
            '</div>' +
            '<button type="button" class="audio-btn" data-vocab-speak="' + esc(e.word) + '" aria-label="Listen: ' + esc(e.word) + '">&#128266;</button>' +
          '</div>' +
          '<div style="margin-top:8px;">' +
            '<div class="vocab-word" lang="en">' + esc(e.word) + '</div>' +
            (e.phonetic ? '<div class="vocab-phonetic" lang="en">' + esc(e.phonetic) + '</div>' : '') +
            (e.ka ? '<div class="vocab-translation" lang="ka">' + esc(e.ka) + '</div>' : '') +
            '<p class="vx-def" lang="en">' + esc(e.def) + '</p>' +
          '</div>' +
          '<div class="vocab-example-box">' +
            '<div class="vocab-ex-en" lang="en">' + esc(e.ex) + '</div>' +
            (e.ex2 ? '<div class="vocab-ex-en" lang="en">' + esc(e.ex2) + '</div>' : '') +
          '</div>' +
          (details ? '<details class="vx-details"><summary>More about this word</summary>' + details + '</details>' : '') +
          '<div class="vocab-actions">' +
            '<button type="button" class="btn btn-sm ' + (isLearned ? 'btn-secondary' : 'btn-outline') + '" data-toggle-learned="' + esc(e.id) + '">' + (isLearned ? '✓ ნასწავლია' : 'ნასწავლად მონიშვნა') + '</button>' +
            '<button type="button" class="btn btn-sm btn-outline" data-toggle-bookmark="' + esc(e.id) + '" aria-pressed="' + isSaved + '">' + (isSaved ? '★ შენახულია' : '☆ შენახვა') + '</button>' +
            (inReview ? '<span class="vx-review-tag">🔁 გამეორებაშია</span>' : '<button type="button" class="btn btn-sm btn-outline" data-add-review="' + esc(e.id) + '">🔁 გამეორებაში</button>') +
          '</div>' +
        '</article>'
      );
    },

    render: function () {
      const container = document.getElementById('app-view');
      if (!container) return;
      const esc = App.UI.escapeHTML;
      if (!levelFilter) {
        const userLevel = App.Storage.get('progress.level', 'A1');
        levelFilter = LEVELS.indexOf(userLevel) !== -1 ? userLevel : 'C1';
      }
      const counts = this.getCounts();
      const items = this.filtered();
      const learned = getList('vocabulary.learnedIds');
      const bookmarked = getList('vocabulary.bookmarkedIds');
      const boxes = App.Storage.get('vocabulary.boxByWordId', {}) || {};
      const levelLearned = (lvl) => entries.filter((e) => e.level === lvl && learned.indexOf(e.id) !== -1).length;

      const levelTabs = ['all'].concat(LEVELS).map((l) => {
        const label = l === 'all' ? 'ყველა (' + counts.total + ')' : l + ' (' + levelLearned(l) + '/' + counts[l] + ')';
        return '<button type="button" class="pill-tab' + (levelFilter === l ? ' active' : '') + '" data-vx-level="' + l + '" aria-pressed="' + (levelFilter === l) + '">' + label + '</button>';
      }).join('');
      const topics = this.getTopics(levelFilter === 'all' ? null : levelFilter);
      const topicOptions = '<option value="all">All topics</option>' + topics.map((t) =>
        '<option value="' + esc(t) + '"' + (topicFilter === t ? ' selected' : '') + '>' + esc(titleCase(t)) + '</option>').join('');
      const posOptions = '<option value="all">All parts of speech</option>' + Object.keys(POS_LABELS).map((p) =>
        '<option value="' + p + '"' + (posFilter === p ? ' selected' : '') + '>' + POS_LABELS[p] + '</option>').join('');
      const statusOptions = [['all', 'ყველა სიტყვა'], ['new', 'ახალი'], ['learned', 'ნასწავლი'], ['review', 'გამეორებაში'], ['saved', 'შენახული']]
        .map(([v, l]) => '<option value="' + v + '"' + (statusFilter === v ? ' selected' : '') + '>' + l + '</option>').join('');

      const shown = items.slice(0, visibleLimit);
      const cards = shown.map((e) => this.renderCard(e, learned, bookmarked, boxes)).join('');
      const notInReview = items.filter((e) => !boxes[e.id]).length;

      container.innerHTML =
        '<div class="dashboard-grid">' +
          '<section class="card">' +
            '<div class="section-header">' +
              '<div>' +
                '<h2 class="section-title">ლექსიკონი — ' + counts.total + ' სიტყვა და გამოთქმა (A1–C1)</h2>' +
                '<p class="section-subtitle">ყველა სიტყვას აქვს ინგლისური განმარტება, ბუნებრივი მაგალითი და, სადაც სასარგებლოა, შესიტყვებები, სინონიმები, ფორმები და შენიშვნები.</p>' +
              '</div>' +
              '<span class="stat-pill stat-pill--level">ნასწავლი: ' + learned.filter((id) => byId[id]).length + '</span>' +
            '</div>' +
            '<div class="filter-bar" style="margin-bottom:12px;"><div class="pill-tabs" role="group" aria-label="დონე">' + levelTabs + '</div></div>' +
            '<div class="vx-filters">' +
              '<label class="vx-search"><span class="sr-only">ძიება</span><input type="search" class="search-input" id="vx-search" placeholder="🔍 ძიება სიტყვით ან განმარტებით..." value="' + esc(searchQuery) + '" /></label>' +
              '<select class="select-input" id="vx-topic" aria-label="თემა">' + topicOptions + '</select>' +
              '<select class="select-input" id="vx-pos" aria-label="მეტყველების ნაწილი">' + posOptions + '</select>' +
              '<select class="select-input" id="vx-status" aria-label="სტატუსი">' + statusOptions + '</select>' +
            '</div>' +
            '<div class="vx-resultbar">' +
              '<span>' + items.length + ' შედეგი</span>' +
              (notInReview ? '<button type="button" class="btn btn-sm btn-outline" id="vx-add-all-review">🔁 ' + Math.min(notInReview, 20) + ' ახალი სიტყვა გამეორებაში</button>' : '') +
            '</div>' +
          '</section>' +
          '<section class="vx-grid" aria-label="სიტყვები">' + (cards || '<p class="section-subtitle">ამ ფილტრებით სიტყვა ვერ მოიძებნა.</p>') + '</section>' +
          (items.length > visibleLimit ? '<div style="text-align:center;"><button type="button" class="btn btn-outline" id="vx-more">კიდევ ' + Math.min(PAGE_SIZE, items.length - visibleLimit) + ' სიტყვა</button></div>' : '') +
        '</div>';

      this.bindEvents(container, items);
    },

    bindEvents: function (container, items) {
      const self = this;
      container.querySelectorAll('[data-vx-level]').forEach((btn) => btn.addEventListener('click', () => {
        levelFilter = btn.getAttribute('data-vx-level');
        topicFilter = 'all';
        visibleLimit = PAGE_SIZE;
        self.render();
      }));
      const search = container.querySelector('#vx-search');
      if (search) {
        let t = null;
        search.addEventListener('input', () => {
          window.clearTimeout(t);
          t = window.setTimeout(() => {
            searchQuery = search.value;
            visibleLimit = PAGE_SIZE;
            self.render();
            const again = document.getElementById('vx-search');
            if (again) {
              again.focus();
              again.setSelectionRange(again.value.length, again.value.length);
            }
          }, 250);
        });
      }
      [['#vx-topic', (v) => { topicFilter = v; }], ['#vx-pos', (v) => { posFilter = v; }], ['#vx-status', (v) => { statusFilter = v; }]].forEach(([sel, apply]) => {
        const el = container.querySelector(sel);
        if (el) el.addEventListener('change', () => { apply(el.value); visibleLimit = PAGE_SIZE; self.render(); });
      });
      const more = container.querySelector('#vx-more');
      if (more) more.addEventListener('click', () => { visibleLimit += PAGE_SIZE; self.render(); });
      const addAll = container.querySelector('#vx-add-all-review');
      if (addAll) addAll.addEventListener('click', () => {
        const boxes = App.Storage.get('vocabulary.boxByWordId', {}) || {};
        const ids = items.filter((e) => !boxes[e.id]).slice(0, 20).map((e) => e.id);
        const n = self.addToReview(ids);
        App.UI.toast('🔁 ' + n + ' სიტყვა დაემატა დღის გამეორებას (ბარათები).', 'success');
        self.render();
      });
      container.querySelectorAll('[data-vocab-speak]').forEach((b) => b.addEventListener('click', () => self.speak(b.getAttribute('data-vocab-speak'))));
      container.querySelectorAll('[data-toggle-learned]').forEach((b) => b.addEventListener('click', () => self.toggleLearned(b.getAttribute('data-toggle-learned'))));
      container.querySelectorAll('[data-toggle-bookmark]').forEach((b) => b.addEventListener('click', () => self.toggleBookmark(b.getAttribute('data-toggle-bookmark'))));
      container.querySelectorAll('[data-add-review]').forEach((b) => b.addEventListener('click', () => {
        self.addToReview([b.getAttribute('data-add-review')]);
        App.UI.toast('🔁 დაემატა დღის გამეორებას.', 'success', 1800);
        self.render();
      }));
    },

    // სასწავლო გეგმიდან კონკრეტული თემის გახსნა
    openTopic: function (level, topic) {
      levelFilter = level;
      topicFilter = topic;
      posFilter = 'all';
      statusFilter = 'all';
      searchQuery = '';
      visibleLimit = PAGE_SIZE;
    }
  };

  App.Vocabulary = Vocabulary;
})(window);
