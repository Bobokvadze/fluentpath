-- FluentPath — Row Level Security for user_profiles
-- გაუშვით Supabase Dashboard → SQL Editor-ში (უფასო გეგმაზეც მუშაობს). სკრიპტი უსაფრთხოა განმეორებით გაშვებისთვის.
--
-- What it guarantees: a signed-in user can read/insert/update/delete ONLY the row whose id equals
-- their own auth user id. Anonymous visitors (the public anon/publishable key) get no access at all.

alter table public.user_profiles enable row level security;
-- Owners of the table (and the service role) bypass RLS; force it for everyone else too.
alter table public.user_profiles force row level security;

drop policy if exists "user_profiles_select_own" on public.user_profiles;
drop policy if exists "user_profiles_insert_own" on public.user_profiles;
drop policy if exists "user_profiles_update_own" on public.user_profiles;
drop policy if exists "user_profiles_delete_own" on public.user_profiles;

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

-- The anon role should not touch profiles at all.
revoke all on public.user_profiles from anon;

-- Check (should list the four policies above):
-- select policyname, cmd, roles from pg_policies where tablename = 'user_profiles';
