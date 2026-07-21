
-- Defense-in-depth: explicit deny-by-default RLS policies for tracking tables.
-- Table privileges are already revoked from anon/authenticated; these
-- policies ensure that even if privileges are ever restored, no client
-- can insert/update/delete rows.

DO $$
DECLARE
  t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['affiliate_clicks','affiliate_conversions','page_views','pwa_install_events']
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS "Deny client inserts" ON public.%I', t);
    EXECUTE format('DROP POLICY IF EXISTS "Deny client updates" ON public.%I', t);
    EXECUTE format('DROP POLICY IF EXISTS "Deny client deletes" ON public.%I', t);

    EXECUTE format(
      'CREATE POLICY "Deny client inserts" ON public.%I FOR INSERT TO anon, authenticated WITH CHECK (false)', t
    );
    EXECUTE format(
      'CREATE POLICY "Deny client updates" ON public.%I FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false)', t
    );
    EXECUTE format(
      'CREATE POLICY "Deny client deletes" ON public.%I FOR DELETE TO anon, authenticated USING (false)', t
    );
  END LOOP;
END $$;

-- user_roles: block any user from inserting or updating a row that targets
-- their own account, preventing self-service privilege escalation regardless
-- of what other permissive policies may allow. Only service_role bypasses RLS.
DROP POLICY IF EXISTS "Block self role assignment" ON public.user_roles;
CREATE POLICY "Block self role assignment"
  ON public.user_roles
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (user_id <> auth.uid())
  WITH CHECK (user_id <> auth.uid());
