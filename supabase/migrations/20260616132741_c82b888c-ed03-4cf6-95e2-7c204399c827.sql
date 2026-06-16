
-- prize_redemptions: remove user INSERT; only service_role (edge function) writes
DROP POLICY IF EXISTS "Users can insert own redemptions" ON public.prize_redemptions;
REVOKE INSERT, UPDATE, DELETE ON public.prize_redemptions FROM anon, authenticated;

-- push_subscriptions: re-scope public policies to authenticated only
DROP POLICY IF EXISTS "Users can view own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Users can update own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Users can delete own subscriptions" ON public.push_subscriptions;

CREATE POLICY "Users can view own subscriptions"
  ON public.push_subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON public.push_subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own subscriptions"
  ON public.push_subscriptions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

REVOKE SELECT, INSERT, UPDATE, DELETE ON public.push_subscriptions FROM anon;
