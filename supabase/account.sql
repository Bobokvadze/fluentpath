-- FluentPath — "delete my account" support
-- გაუშვით Supabase Dashboard → SQL Editor-ში. ფუნქცია შლის მხოლოდ იმ მომხმარებელს, ვინც მას იძახებს.
--
-- The app calls supabase.rpc('delete_own_account') from the profile dialog after the user types their email.
-- Deleting the auth user cascades to public.user_profiles (FOREIGN KEY ... ON DELETE CASCADE).

create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;
  delete from public.user_profiles where id = uid;
  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_own_account() from public, anon;
grant execute on function public.delete_own_account() to authenticated;
