
-- Remove permissive public INSERT policies; edge functions use service_role which bypasses RLS
DROP POLICY IF EXISTS "Anyone can insert affiliate clicks" ON public.affiliate_clicks;
DROP POLICY IF EXISTS "Anyone can insert conversions" ON public.affiliate_conversions;
DROP POLICY IF EXISTS "Anyone can insert page views" ON public.page_views;

-- Lock down product_likes writes; only edge function (service_role) may write
DROP POLICY IF EXISTS "Anyone can insert product likes" ON public.product_likes;
DROP POLICY IF EXISTS "Anyone can update product likes" ON public.product_likes;

-- Revoke direct write privileges from anon/authenticated on these tables
REVOKE INSERT, UPDATE, DELETE ON public.affiliate_clicks FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.affiliate_conversions FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.page_views FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.product_likes FROM anon, authenticated;
