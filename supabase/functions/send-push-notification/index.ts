import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting send-push-notification function');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const vapidPublicKey = Deno.env.get('VAPID_PUBLIC_KEY');
    const vapidPrivateKey = Deno.env.get('VAPID_PRIVATE_KEY');
    const vapidSubject = Deno.env.get('VAPID_SUBJECT');

    if (!vapidPublicKey || !vapidPrivateKey || !vapidSubject) {
      console.error('VAPID keys not configured');
      return new Response(
        JSON.stringify({ error: 'VAPID keys not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Configure web-push with VAPID details
    webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse request body for custom notification (optional)
    let customPayload = null;
    try {
      const body = await req.json();
      if (body.title && body.body) {
        customPayload = body;
      }
    } catch {
      // No body or invalid JSON - use random product
    }

    let notificationPayload: string;

    if (customPayload) {
      // Use custom payload
      notificationPayload = JSON.stringify({
        title: customPayload.title,
        body: customPayload.body,
        image: customPayload.image,
        url: customPayload.url || '/',
        productId: customPayload.productId,
        platform: customPayload.platform,
      });
      console.log('Using custom notification payload');
    } else {
      // Get a random active product
      const { data: products, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .limit(50);

      if (productError || !products || products.length === 0) {
        console.error('Error fetching products:', productError);
        return new Response(
          JSON.stringify({ error: 'No products found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Select a random product
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      console.log('Selected product:', randomProduct.label);

      notificationPayload = JSON.stringify({
        title: '🔥 Oferta da Semana - iNeed',
        body: randomProduct.label,
        image: randomProduct.image_url,
        url: randomProduct.affiliate_link,
        productId: randomProduct.id,
        platform: randomProduct.platform,
      });
    }

    // Get all active subscriptions
    const { data: subscriptions, error: subError } = await supabase
      .from('push_subscriptions')
      .select('*')
      .eq('is_active', true);

    if (subError) {
      console.error('Error fetching subscriptions:', subError);
      return new Response(
        JSON.stringify({ error: 'Error fetching subscriptions' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!subscriptions || subscriptions.length === 0) {
      console.log('No active subscriptions found');
      return new Response(
        JSON.stringify({ message: 'No active subscriptions', sent: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Sending notifications to ${subscriptions.length} subscribers`);

    let successCount = 0;
    let failCount = 0;
    const failedEndpoints: string[] = [];

    // Send to each subscription using web-push
    for (const sub of subscriptions) {
      try {
        const pushSubscription = {
          endpoint: sub.endpoint,
          keys: {
            p256dh: sub.p256dh,
            auth: sub.auth,
          },
        };

        await webpush.sendNotification(pushSubscription, notificationPayload);
        successCount++;
        console.log(`Notification sent to: ${sub.endpoint.substring(0, 50)}...`);
      } catch (error: any) {
        if (error.statusCode === 410 || error.statusCode === 404) {
          // Subscription is no longer valid
          failedEndpoints.push(sub.endpoint);
          console.log(`Subscription expired: ${sub.endpoint.substring(0, 50)}...`);
        } else {
          console.error(`Failed to send to ${sub.endpoint.substring(0, 50)}...:`, error.message || error);
        }
        failCount++;
      }
    }

    // Mark expired subscriptions as inactive
    if (failedEndpoints.length > 0) {
      await supabase
        .from('push_subscriptions')
        .update({ is_active: false })
        .in('endpoint', failedEndpoints);
      console.log(`Marked ${failedEndpoints.length} subscriptions as inactive`);
    }

    const result = {
      message: 'Push notifications sent',
      sent: successCount,
      failed: failCount,
      total: subscriptions.length,
    };

    console.log('Result:', result);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in send-push-notification:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
