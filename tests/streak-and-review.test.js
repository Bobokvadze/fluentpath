'use strict';
// Streak counts study days only; Leitner review queue; daily goal activity log.
const test = require('node:test');
const assert = require('assert');
const { same, loadScripts } = require('./helpers');

function localDate(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

const withState = (progress, vocabulary) => ({
  localStorage: { fluentpath_app_state_v1: JSON.stringify({ progress: progress || {}, vocabulary: vocabulary || {} }) }
});

test('opening the app does not grow the streak', () => {
  const env = loadScripts(['js/auth.js'], withState({ streak: 3, lastActiveDate: localDate(-1) }));
  assert.strictEqual(env.App.Storage.get('progress.streak'), 3);
});

test('a missed day resets the streak to 0 on load', () => {
  const env = loadScripts(['js/auth.js'], withState({ streak: 9, lastActiveDate: localDate(-3) }));
  assert.strictEqual(env.App.Storage.get('progress.streak'), 0);
});

test('recordActivity extends yesterday\'s streak once per day and logs the activity', () => {
  const env = loadScripts(['js/auth.js', 'js/progress.js'], withState({ streak: 3, lastActiveDate: localDate(-1) }));
  env.App.Progress.recordActivity({ title: 'A', category: 'x' });
  env.App.Progress.recordActivity({ title: 'B', category: 'x' });
  assert.strictEqual(env.App.Storage.get('progress.streak'), 4);
  assert.strictEqual(env.App.Storage.get('progress.lastActiveDate'), localDate(0));
  same(env.App.Storage.get('progress.recentActivities').map((a) => a.title), ['B', 'A']);
});

test('a brand-new learner starts at streak 0 and gets 1 after the first activity', () => {
  const env = loadScripts(['js/auth.js', 'js/progress.js'], {});
  assert.strictEqual(env.App.Storage.get('progress.streak'), 0);
  env.App.Progress.recordActivity({ title: 'first' });
  assert.strictEqual(env.App.Storage.get('progress.streak'), 1);
});

test('review queue follows Leitner intervals per box', () => {
  const vocabulary = {
    boxByWordId: { a: 1, b: 2, c: 2, d: 3, e: 5, f: 4 },
    lastReviewByWordId: { a: localDate(0), b: localDate(0), c: localDate(-1), d: localDate(-2), e: localDate(-14) }
  };
  const env = loadScripts(['js/auth.js', 'js/flashcards.js'], withState({}, vocabulary));
  const due = env.App.Flashcards.getDueWordIds().slice().sort();
  // a: box1 always due; b: reviewed today, needs 1 day; c: due; d: box3 needs 3 days; e: box5 after 14 days; f: never reviewed
  same(due, ['a', 'c', 'e', 'f']);
});
