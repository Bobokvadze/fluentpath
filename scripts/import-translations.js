#!/usr/bin/env node
'use strict';
/**
 * Merges translated items (the JSON produced by export-translations.js, with the target-language fields filled in)
 * into js/content/i18n-<lang>.js.
 *   node scripts/import-translations.js to-translate.json [--dry-run]
 * Rejected: unknown keys, items whose English source changed since export, empty values, values identical to the
 * English source, and (for ka) values without Georgian letters. Existing translations are replaced only by new values.
 */
const fs = require('fs');
const { collectSource, loadTranslations, writeTranslations } = require('./i18n-source');

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
if (!file) {
  process.stderr.write('usage: node scripts/import-translations.js <file.json> [--dry-run]\n');
  process.exit(1);
}

const input = JSON.parse(fs.readFileSync(file, 'utf8'));
const lang = input.lang || 'ka';
const source = collectSource();
const table = loadTranslations(lang);
const SCRIPT_CHECK = { ka: /[Ⴀ-ჿ]/ };
const report = { added: 0, updated: 0, unchanged: 0, rejected: [] };

(input.items || []).forEach((item) => {
  const value = typeof item[lang] === 'string' ? item[lang].trim() : '';
  if (!value) return;
  const src = source[item.key];
  if (!src) return report.rejected.push(item.key + ': unknown key');
  if (item.en !== undefined && item.en !== src.en) return report.rejected.push(item.key + ': English source changed since export');
  if (value === src.en) return report.rejected.push(item.key + ': same as English');
  if (SCRIPT_CHECK[lang] && !SCRIPT_CHECK[lang].test(value)) return report.rejected.push(item.key + ': not in the expected script');

  const [section, id, field] = item.key.split('|');
  table[section] = table[section] || {};
  table[section][id] = table[section][id] || {};
  const prev = table[section][id][field];
  if (prev === value) return report.unchanged++;
  table[section][id][field] = value;
  if (prev) report.updated++;
  else report.added++;
});

if (args.indexOf('--dry-run') === -1) writeTranslations(lang, table);
process.stdout.write('added ' + report.added + ', updated ' + report.updated + ', unchanged ' + report.unchanged +
  ', rejected ' + report.rejected.length + (args.indexOf('--dry-run') !== -1 ? ' (dry run, nothing written)' : '') + '\n');
report.rejected.slice(0, 50).forEach((r) => process.stdout.write('  ✗ ' + r + '\n'));
