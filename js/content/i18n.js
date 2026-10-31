/**
 * I18N.JS — translation lookup for educational content.
 * English source text lives in the content files; translations live separately in App.I18n.<lang>,
 * keyed by content section, item id and field (see js/content/i18n-ka.js and scripts/export-translations.js).
 * A missing translation returns '' so the UI simply shows the English source.
 */
(function (window) {
  "use strict";
  const App = window.App = window.App || {};
  App.I18n = App.I18n || {};

  App.tr = function (section, id, field, lang) {
    const table = App.I18n[lang || "ka"];
    const item = table && table[section] && table[section][id];
    const value = item && item[field];
    return typeof value === "string" ? value : "";
  };
})(window);
