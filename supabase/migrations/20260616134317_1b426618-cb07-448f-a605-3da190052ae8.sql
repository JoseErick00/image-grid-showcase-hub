
DROP POLICY IF EXISTS "Allow public inserts" ON public.pwa_install_events;
REVOKE INSERT, UPDATE, DELETE ON public.pwa_install_events FROM anon, authenticated;
