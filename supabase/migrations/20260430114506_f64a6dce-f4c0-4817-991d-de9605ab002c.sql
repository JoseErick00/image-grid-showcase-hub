-- 1. PRODUCTS: replace permissive UPDATE policy with a secure RPC for metric increments
DROP POLICY IF EXISTS "Anyone can update product metrics" ON public.products;

CREATE OR REPLACE FUNCTION public.increment_product_metric(
  _product_id uuid,
  _field text,
  _increment integer DEFAULT 1
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF _field NOT IN ('like_count', 'share_count', 'click_count') THEN
    RAISE EXCEPTION 'Invalid metric field: %', _field;
  END IF;
  IF _increment < -1 OR _increment > 10 THEN
    RAISE EXCEPTION 'Invalid increment value';
  END IF;

  EXECUTE format(
    'UPDATE public.products SET %I = COALESCE(%I, 0) + $1, updated_at = now() WHERE id = $2',
    _field, _field
  ) USING _increment, _product_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_product_metric(uuid, text, integer) TO anon, authenticated;

-- Same for promo_banners (also has a permissive UPDATE policy)
DROP POLICY IF EXISTS "Anyone can update banner metrics" ON public.promo_banners;

CREATE OR REPLACE FUNCTION public.increment_banner_metric(
  _banner_id uuid,
  _field text,
  _increment integer DEFAULT 1
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF _field NOT IN ('like_count', 'share_count', 'click_count') THEN
    RAISE EXCEPTION 'Invalid metric field: %', _field;
  END IF;
  IF _increment < -1 OR _increment > 10 THEN
    RAISE EXCEPTION 'Invalid increment value';
  END IF;

  EXECUTE format(
    'UPDATE public.promo_banners SET %I = COALESCE(%I, 0) + $1, updated_at = now() WHERE id = $2',
    _field, _field
  ) USING _increment, _banner_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_banner_metric(uuid, text, integer) TO anon, authenticated;

-- 2. PUSH_SUBSCRIPTIONS: require non-null user_id matching auth.uid()
DROP POLICY IF EXISTS "Authenticated users can insert subscriptions" ON public.push_subscriptions;

CREATE POLICY "Authenticated users can insert subscriptions"
ON public.push_subscriptions
FOR INSERT
TO authenticated
WITH CHECK (user_id IS NOT NULL AND user_id = auth.uid());

-- Clean up any orphaned anonymous subscriptions
DELETE FROM public.push_subscriptions WHERE user_id IS NULL;

ALTER TABLE public.push_subscriptions ALTER COLUMN user_id SET NOT NULL;

-- 3. NOTIFICATION BONUS: track server-side via flag column on user_gamification
ALTER TABLE public.user_gamification
  ADD COLUMN IF NOT EXISTS notification_bonus_claimed boolean NOT NULL DEFAULT false;

-- Server-side function: idempotent claim that requires an active push subscription
CREATE OR REPLACE FUNCTION public.claim_notification_bonus()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _user_id uuid := auth.uid();
  _already_claimed boolean;
  _has_subscription boolean;
  _bonus_amount integer := 20;
BEGIN
  IF _user_id IS NULL THEN
    RETURN jsonb_build_object('success', false, 'error', 'not_authenticated');
  END IF;

  -- Already claimed?
  SELECT notification_bonus_claimed INTO _already_claimed
  FROM public.user_gamification WHERE user_id = _user_id;

  IF _already_claimed THEN
    RETURN jsonb_build_object('success', true, 'already_claimed', true);
  END IF;

  -- Must have an active subscription
  SELECT EXISTS (
    SELECT 1 FROM public.push_subscriptions
    WHERE user_id = _user_id AND is_active = true
  ) INTO _has_subscription;

  IF NOT _has_subscription THEN
    RETURN jsonb_build_object('success', false, 'error', 'no_active_subscription');
  END IF;

  UPDATE public.user_gamification
  SET notification_bonus_claimed = true,
      current_level_coins = current_level_coins + _bonus_amount,
      total_coins_earned = total_coins_earned + _bonus_amount,
      updated_at = now()
  WHERE user_id = _user_id;

  INSERT INTO public.coin_transactions (user_id, transaction_type, amount, description)
  VALUES (_user_id, 'notification_bonus', _bonus_amount, 'Bônus por ativar notificações');

  RETURN jsonb_build_object('success', true, 'amount', _bonus_amount);
END;
$$;

REVOKE ALL ON FUNCTION public.claim_notification_bonus() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_notification_bonus() TO authenticated;

-- 4. Replace notify_new_products to use service role from vault instead of hardcoded anon key
CREATE OR REPLACE FUNCTION public.notify_new_products()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  notification_payload JSONB;
  service_key TEXT;
BEGIN
  IF NEW.is_active IS NOT TRUE THEN
    RETURN NEW;
  END IF;

  -- Try to fetch the service role key from vault; fall back silently if unavailable
  BEGIN
    SELECT decrypted_secret INTO service_key
    FROM vault.decrypted_secrets
    WHERE name = 'SUPABASE_SERVICE_ROLE_KEY'
    LIMIT 1;
  EXCEPTION WHEN OTHERS THEN
    service_key := NULL;
  END;

  IF service_key IS NULL THEN
    RETURN NEW;
  END IF;

  notification_payload := jsonb_build_object(
    'title', '🆕 Novo Produto no iNeed!',
    'body', NEW.label,
    'image', NEW.image_url,
    'url', NEW.affiliate_link,
    'productId', NEW.id,
    'platform', NEW.platform
  );

  PERFORM net.http_post(
    url := 'https://uwzsmfoxjfexodgblzfk.supabase.co/functions/v1/send-push-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_key
    ),
    body := notification_payload
  );

  RETURN NEW;
END;
$function$;