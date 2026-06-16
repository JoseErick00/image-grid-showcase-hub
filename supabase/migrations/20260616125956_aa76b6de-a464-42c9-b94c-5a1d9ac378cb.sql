
-- Deduplicate existing share transactions, keep the earliest one per (user, product)
DELETE FROM public.coin_transactions a
USING public.coin_transactions b
WHERE a.transaction_type = 'share'
  AND b.transaction_type = 'share'
  AND a.user_id = b.user_id
  AND a.product_id = b.product_id
  AND a.product_id IS NOT NULL
  AND a.created_at > b.created_at;

-- Handle exact-tie duplicates (same created_at) by keeping smallest id
DELETE FROM public.coin_transactions a
USING public.coin_transactions b
WHERE a.transaction_type = 'share'
  AND b.transaction_type = 'share'
  AND a.user_id = b.user_id
  AND a.product_id = b.product_id
  AND a.product_id IS NOT NULL
  AND a.created_at = b.created_at
  AND a.id > b.id;

CREATE UNIQUE INDEX IF NOT EXISTS coin_transactions_share_unique
  ON public.coin_transactions (user_id, product_id)
  WHERE transaction_type = 'share' AND product_id IS NOT NULL;

-- Restrict role management: admins can only manage non-admin roles via Data API
DROP POLICY IF EXISTS "Only admins can manage roles" ON public.user_roles;

CREATE POLICY "Admins can manage non-admin roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) AND role <> 'admin'::app_role)
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role) AND role <> 'admin'::app_role);
