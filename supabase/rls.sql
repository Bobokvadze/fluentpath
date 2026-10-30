-- FluentPath — Row Level Security for user_profiles
-- გაუშვით Supabase Dashboard → SQL Editor-ში (უფასო გეგმაზეც მუშაობს). სკრიპტი უსაფრთხოა განმეორებით გაშვებისთვის
-- და მონაცემებს არ ეხება — მხოლოდ წვდომის წესებს ცვლის.
--
-- What it guarantees: a signed-in user can read/insert/update/delete ONLY the row whose id equals
-- their own auth user id. Anonymous visitors (the public anon/publishable key) get no access at all.

begin;

alter table public.user_profiles enable row level security;
-- Note: RLS is intentionally NOT forced for the table owner, so server-side triggers/functions
-- (e.g. a signup trigger running as the owner) keep working. Client keys (anon/authenticated) are restricted.

-- Earlier policies (same rules, but granted to role "public" and without the select-wrapped auth.uid())
drop policy if exists "Users can view own profile" on public.user_profiles;
drop policy if exists "Users can insert own profile" on public.user_profiles;
drop policy if exists "Users can update own profile" on public.user_profiles;

drop policy if exists "user_profiles_select_own" on public.user_profiles;
drop policy if exists "user_profiles_insert_own" on public.user_profiles;
drop policy if exists "user_profiles_update_own" on public.user_profiles;
drop policy if exists "user_profiles_delete_own" on public.user_profiles;

-- (select auth.uid()) is evaluated once per statement instead of per row (Supabase performance advisor)
create policy "user_profiles_select_own" on public.user_profiles
  for select to authenticated
  using ((select auth.uid()) = id);

create policy "user_profiles_insert_own" on public.user_profiles
  for insert to authenticated
  with check ((select auth.uid()) = id);

create policy "user_profiles_update_own" on public.user_profiles
  for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "user_profiles_delete_own" on public.user_profiles
  for delete to authenticated
  using ((select auth.uid()) = id);

-- The anon role should not touch profiles at all, and TRUNCATE is not covered by RLS.
revoke all on public.user_profiles from anon;
revoke truncate, references, trigger on public.user_profiles from authenticated;

commit;

-- Check (should list the four policies above):
-- select policyname, cmd, roles from pg_policies where tablename = 'user_profiles';
