#!/usr/bin/env node
'use strict';
/**
 * Free-plan Supabase projects pause after a week without activity. This makes one harmless request with the
 * public (publishable) key from js/supabase-config.js so the project stays awake. Run by
 * .github/workflows/supabase-keepalive.yml every few days; can also be run by hand: node scripts/supabase-keepalive.js
 */
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'supabase-config.js'), 'utf8');
const url = (src.match(/url:\s*"([^"]+)"/) || [])[1];
const key = (src.match(/anonKey:\s*"([^"]+)"/) || [])[1];
if (!url || !key) {
  console.error('Supabase URL or public key not found in js/supabase-config.js');
  process.exit(1);
}

async function main() {
  const auth = await fetch(url + '/auth/v1/settings', { headers: { apikey: key } });
  console.log('Auth settings: HTTP ' + auth.status);
  // A table query reaches Postgres itself. Row Level Security denies the anonymous role (401/42501), which is
  // expected and still counts as database activity; no data is read or changed.
  const db = await fetch(url + '/rest/v1/user_profiles?select=id&limit=1', { headers: { apikey: key, Authorization: 'Bearer ' + key } });
  console.log('Database query: HTTP ' + db.status + ' (401 = blocked by RLS, as intended)');
  if (!auth.ok || [200, 401].indexOf(db.status) === -1) process.exitCode = 1;
}

main().catch((err) => {
  console.error('Request failed: ' + err.message);
  process.exitCode = 1;
});
