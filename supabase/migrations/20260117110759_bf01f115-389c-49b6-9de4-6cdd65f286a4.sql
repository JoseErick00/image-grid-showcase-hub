-- Drop the existing trigger and function
DROP TRIGGER IF EXISTS trigger_notify_new_products ON public.products;
DROP FUNCTION IF EXISTS public.notify_new_products();

-- Create a simplified function to send push notifications for new products
CREATE OR REPLACE FUNCTION public.notify_new_products()
RETURNS TRIGGER AS $$
DECLARE
  notification_payload JSONB;
BEGIN
  -- Only send for active products
  IF NEW.is_active IS NOT TRUE THEN
    RETURN NEW;
  END IF;

  -- Create the payload
  notification_payload := jsonb_build_object(
    'title', '🆕 Novo Produto no iNeed!',
    'body', NEW.label,
    'image', NEW.image_url,
    'url', NEW.affiliate_link,
    'productId', NEW.id,
    'platform', NEW.platform
  );
  
  -- Call the edge function using pg_net (fire and forget)
  -- Using the service role key stored in vault or as a setting
  PERFORM net.http_post(
    url := 'https://uwzsmfoxjfexodgblzfk.supabase.co/functions/v1/send-push-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3enNtZm94amZleG9kZ2JsemZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMzk2MDksImV4cCI6MjA3MDgxNTYwOX0.qvfliCVQ6iFPmc6w0fC5i8Je9omBpNwlyN23EyfyOgE'
    ),
    body := notification_payload
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create the trigger that fires after a new product is inserted
CREATE TRIGGER trigger_notify_new_products
AFTER INSERT ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.notify_new_products();