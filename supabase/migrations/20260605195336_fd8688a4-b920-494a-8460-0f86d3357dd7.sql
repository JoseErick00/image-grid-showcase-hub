
-- Fix: restrict direct UPDATE on user_gamification. All legitimate writes go
-- through service-role edge functions (add-share-coin, process-referral,
-- redeem-prize) and the claim_notification_bonus RPC. Prevent users from
-- self-awarding coins, upgrading levels, or resetting notification_bonus_claimed.
DROP POLICY IF EXISTS "Users can update own gamification" ON public.user_gamification;

-- Revoke EXECUTE on trigger-only / internal SECURITY DEFINER functions so they
-- cannot be invoked directly by anon or authenticated clients.
REVOKE EXECUTE ON FUNCTION public.generate_referral_code() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.handle_new_user_gamification() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.notify_new_products() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_product_likes_updated_at() FROM anon, authenticated, public;
