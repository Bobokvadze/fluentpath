'use strict';
// Persistence + cloud sync logic in js/auth.js, against a fake Supabase client.
const test = require('node:test');
const assert = require('assert');
const { sleep, same, loadScripts } = require('./helpers');

const USER = { id: 'u1', email: 'a@b.c', user_metadata: { full_name: 'Test User', cefr_level: 'B1' } };
const SESSION_KEY = 'sb-abcref-auth-token';
const SESSION_VAL = JSON.stringify({ user: { id: 'u1' } });
const load = (opts) => loadScripts(['js/auth.js'], opts);

test('guest progress persists in localStorage', () => {
  const env = load({});
  env.App.Storage.set('progress.completedGrammarIds', ['g1']);
  same(JSON.parse(env.store.get('fluentpath_app_state_v1')).progress.completedGrammarIds, ['g1']);
});

test('guest progress is migrated into an empty cloud profile on login', async () => {
  const guest = { progress: { completedGrammarIds: ['g1', 'g2'] }, vocabulary: { learnedIds: ['w1'] } };
  const env = load({ localStorage: { fluentpath_app_state_v1: JSON.stringify(guest), [SESSION_KEY]: SESSION_VAL }, session: { user: USER } });
  await sleep(100);
  same(env.App.Storage.get('progress.completedGrammarIds'), ['g1', 'g2']);
  same(env.App.Storage.get('vocabulary.learnedIds'), ['w1']);
  assert.ok(env.store.has('fluentpath_user_cache_u1'));
  same(env.log.upserts[0].state_json.progress.completedGrammarIds, ['g1', 'g2']);
});

test('newer cloud state wins over a stale offline cache', async () => {
  const local = { progress: { completedGrammarIds: ['old'] }, meta: { updatedAt: '2026-10-01T00:00:00Z' } };
  const row = { state_json: { progress: { completedGrammarIds: ['cloud'], level: 'B2' } }, updated_at: '2026-10-20T00:00:00Z', cefr_level: 'B2' };
  const env = load({ localStorage: { [SESSION_KEY]: SESSION_VAL, fluentpath_user_cache_u1: JSON.stringify(local) }, session: { user: USER }, row });
  same(env.App.Storage.get('progress.completedGrammarIds'), ['old'], 'offline copy shown immediately');
  await sleep(100);
  same(env.App.Storage.get('progress.completedGrammarIds'), ['cloud']);
  assert.strictEqual(env.App.Storage.get('settings.cefrLevel'), 'B2');
});

test('newer offline edits win and are uploaded', async () => {
  const local = { progress: { completedGrammarIds: ['offline'] }, meta: { updatedAt: '2026-10-25T00:00:00Z' } };
  const row = { state_json: { progress: { completedGrammarIds: ['cloud'] } }, updated_at: '2026-10-20T00:00:00Z' };
  const env = load({ localStorage: { [SESSION_KEY]: SESSION_VAL, fluentpath_user_cache_u1: JSON.stringify(local) }, session: { user: USER }, row });
  await sleep(100);
  same(env.App.Storage.get('progress.completedGrammarIds'), ['offline']);
  same(env.log.upserts[env.log.upserts.length - 1].state_json.progress.completedGrammarIds, ['offline']);
});

test('sync failure warns once, keeps data locally and retries when back online', async () => {
  const row = { state_json: { progress: {} }, updated_at: '2026-10-20T00:00:00Z' };
  const env = load({ localStorage: { [SESSION_KEY]: SESSION_VAL }, session: { user: USER }, row, upsertError: { message: 'RLS' } });
  await sleep(100);
  env.App.Storage.set('progress.completedReadingIds', ['r1']);
  await sleep(420);
  env.App.Storage.set('progress.completedReadingIds', ['r1', 'r2']);
  await sleep(420);
  assert.strictEqual(env.log.toasts.filter((t) => t.startsWith('warning:')).length, 1);
  same(JSON.parse(env.store.get('fluentpath_user_cache_u1')).progress.completedReadingIds, ['r1', 'r2']);
  env.log.upsertError = null;
  env.log.listeners.online.forEach((fn) => fn());
  await sleep(30);
  assert.ok(env.log.toasts.some((t) => t.startsWith('success:')));
});

test('logout removes the account copy and restores guest progress', async () => {
  const guest = { progress: { completedGrammarIds: ['guest'] } };
  const row = { state_json: { progress: { completedGrammarIds: ['acct'] } }, updated_at: '2026-10-20T00:00:00Z' };
  const env = load({ localStorage: { [SESSION_KEY]: SESSION_VAL, fluentpath_app_state_v1: JSON.stringify(guest) }, session: { user: USER }, row });
  await sleep(100);
  env.App.Auth.handleLogout();
  await sleep(30);
  assert.ok(!env.store.has('fluentpath_user_cache_u1'));
  same(env.App.Storage.get('progress.completedGrammarIds'), ['guest']);
});

test('expired session falls back to guest state', async () => {
  const env = load({ localStorage: { [SESSION_KEY]: SESSION_VAL, fluentpath_user_cache_u1: JSON.stringify({ progress: { completedGrammarIds: ['x'] } }) }, session: null });
  await sleep(100);
  same(env.App.Storage.get('progress.completedGrammarIds'), []);
});

test('CEFR level is mirrored between settings and progress', () => {
  const env = load({});
  env.App.Storage.set('settings.cefrLevel', 'C1');
  assert.strictEqual(env.App.Storage.get('progress.level'), 'C1');
  env.App.Storage.set('progress.level', 'A2');
  assert.strictEqual(env.App.Storage.get('settings.cefrLevel'), 'A2');
});

test('import keeps the whole state and rejects foreign files', () => {
  const env = load({});
  const ok = env.App.Storage.importData(JSON.stringify({ settings: {}, progress: { level: 'B1' }, user: { name: 'Nino' } }));
  assert.ok(ok.success);
  assert.strictEqual(env.App.Storage.get('user.name'), 'Nino');
  assert.strictEqual(env.App.Storage.importData('{"foo":1}').success, false);
  assert.strictEqual(env.App.Storage.importData('not json').success, false);
});
