#!/usr/bin/env node
'use strict';
/**
 * Exports translatable English content as JSON for a translator (human or a free AI tool such as Gemini).
 *   node scripts/export-translations.js [--lang ka] [--all] [--section vocab] > to-translate.json
 *   node scripts/export-translations.js --out translations --chunk 200   (writes translations/part-01.json, ...)
 * By default only items without a translation are exported; --all includes existing ones for review.
 * Fill in the "<lang>" field of each item (leave it empty if unsure) and import with import-translations.js.
 */
const fs = require('fs');
const path = require('path');
const { collectSource, loadTranslations } = require('./i18n-source');

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i !== -1 && args[i + 1] ? args[i + 1] : def; };
const lang = opt('lang', 'ka');
const section = opt('section', null);
const outDir = opt('out', null);
const chunk = Math.max(1, Number(opt('chunk', 0)) || 0);
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

const instructions = 'Translate each "en" text into the target language and put it in the "' + lang + '" field. ' +
  'Use "context" to choose the right meaning. Keep it natural and short; for vocab terms give the dictionary form. ' +
  'Leave the field empty if you are not sure. Do not change "key" or "en".';
const doc = (list) => JSON.stringify({ lang: lang, instructions: instructions, items: list }, null, 2) + '\n';

if (outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const size = chunk || items.length || 1;
  const parts = Math.ceil(items.length / size);
  for (let i = 0; i < parts; i++) {
    const name = 'part-' + String(i + 1).padStart(2, '0') + '.json';
    fs.writeFileSync(path.join(outDir, name), doc(items.slice(i * size, (i + 1) * size)));
  }
  process.stderr.write(items.length + ' item(s) exported for "' + lang + '" into ' + parts + ' file(s) in ' + outDir + '\n');
} else {
  process.stdout.write(doc(items));
  process.stderr.write(items.length + ' item(s) exported for "' + lang + '"\n');
}
