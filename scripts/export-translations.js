#!/usr/bin/env node
'use strict';
/**
 * Exports translatable English content as JSON for a translator (human or a free AI tool such as Gemini).
 *   node scripts/export-translations.js [--lang ka] [--all] [--section vocab] > to-translate.json
 * By default only items without a translation are exported; --all includes existing ones for review.
 * Fill in the "<lang>" field of each item (leave it empty if unsure) and import with import-translations.js.
 */
const { collectSource, loadTranslations } = require('./i18n-source');

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i !== -1 && args[i + 1] ? args[i + 1] : def; };
const lang = opt('lang', 'ka');
const section = opt('section', null);
const all = args.indexOf('--all') !== -1;

const source = collectSource();
const existing = loadTranslations(lang);
const items = Object.keys(source)
  .filter((key) => !section || key.split('|')[0] === section)
  .map((key) => {
    const [sec, id, field] = key.split('|');
    const current = existing[sec] && existing[sec][id] && existing[sec][id][field];
    return { key: key, en: source[key].en, context: source[key].context, [lang]: current || '' };
  })
  .filter((item) => all || !item[lang]);

process.stdout.write(JSON.stringify({
  lang: lang,
  instructions: 'Translate each "en" text into the target language and put it in the "' + lang + '" field. ' +
    'Use "context" to choose the right meaning. Keep it natural and short; for vocab terms give the dictionary form. ' +
    'Leave the field empty if you are not sure. Do not change "key" or "en".',
  items: items
}, null, 2) + '\n');
process.stderr.write(items.length + ' item(s) exported for "' + lang + '"\n');
