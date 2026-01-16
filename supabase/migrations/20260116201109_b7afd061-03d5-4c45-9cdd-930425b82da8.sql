-- Enable the pg_net extension for HTTP requests from database triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create a function to send push notifications for new products
CREATE OR REPLACE FUNCTION public.notify_new_products()
RETURNS TRIGGER AS $$
DECLARE
  product_count INT;
  notification_title TEXT;
  notification_body TEXT;
  notification_payload JSONB;
  edge_function_url TEXT;
  anon_key TEXT;
BEGIN
  -- Get the count of new products (for batch inserts)
  product_count := (SELECT COUNT(*) FROM inserted_products);
  
  -- Build notification based on number of products
  IF product_count = 1 THEN
    notification_title := '🆕 Novo Produto no iNeed!';
    notification_body := NEW.label;
  ELSE
    notification_title := '🆕 Novos Produtos no iNeed!';
    notification_body := product_count || ' novos produtos foram adicionados';
  END IF;
  
  -- Create the payload
  notification_payload := jsonb_build_object(
    'title', notification_title,
    'body', notification_body,
    'image', NEW.image_url,
    'url', NEW.affiliate_link,
    'productId', NEW.id,
    'platform', NEW.platform
  );
  
  -- Get the edge function URL
  edge_function_url := current_setting('app.settings.supabase_url', true) || '/functions/v1/send-push-notification';
  anon_key := current_setting('app.settings.supabase_anon_key', true);
  
  -- Call the edge function using pg_net (fire and forget)
  PERFORM net.http_post(
    url := 'https://uwzsmfoxjfexodgblzfk.supabase.co/functions/v1/send-push-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('supabase.service_role_key', true)
    ),
    body := notification_payload
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create the trigger that fires after a new product is inserted
DROP TRIGGER IF EXISTS trigger_notify_new_products ON public.products;

CREATE TRIGGER trigger_notify_new_products
AFTER INSERT ON public.products
FOR EACH ROW
WHEN (NEW.is_active = true)
EXECUTE FUNCTION public.notify_new_products();