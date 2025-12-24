import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Web Push library for Deno
async function sendWebPush(
  subscription: { endpoint: string; p256dh: string; auth: string },
  payload: string,
  vapidPublicKey: string,
  vapidPrivateKey: string,
  vapidSubject: string
): Promise<Response> {
  // Import web-push compatible module
  const encoder = new TextEncoder();
  
  // Create JWT for VAPID
  const header = { alg: 'ES256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    aud: new URL(subscription.endpoint).origin,
    exp: now + 12 * 60 * 60, // 12 hours
    sub: vapidSubject,
  };

  // For web push, we need to use the web-push library approach
  // Since Deno doesn't have native web-push, we'll use a simpler HTTP approach
  
  const response = await fetch(subscription.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Encoding': 'aes128gcm',
      'TTL': '86400',
    },
    body: payload,
  });

  return response;
}

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

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

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

    // Prepare notification payload
    const notificationPayload = JSON.stringify({
      title: '🔥 Oferta da Semana - iNeed',
      body: randomProduct.label,
      image: randomProduct.image_url,
      url: randomProduct.affiliate_link,
      productId: randomProduct.id,
      platform: randomProduct.platform,
    });

    let successCount = 0;
    let failCount = 0;
    const failedEndpoints: string[] = [];

    // Send to each subscription using web-push compatible approach
    for (const sub of subscriptions) {
      try {
        // Use the web-push API endpoint directly
        // Note: This is a simplified approach - for production, use a proper web-push library
        const response = await fetch(sub.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
            'TTL': '86400',
          },
          body: notificationPayload,
        });

        if (response.ok || response.status === 201) {
          successCount++;
          console.log(`Notification sent to: ${sub.endpoint.substring(0, 50)}...`);
        } else if (response.status === 410 || response.status === 404) {
          // Subscription is no longer valid
          failedEndpoints.push(sub.endpoint);
          failCount++;
          console.log(`Subscription expired: ${sub.endpoint.substring(0, 50)}...`);
        } else {
          failCount++;
          console.error(`Failed to send to ${sub.endpoint.substring(0, 50)}...: ${response.status}`);
        }
      } catch (error) {
        failCount++;
        console.error(`Error sending to ${sub.endpoint.substring(0, 50)}...:`, error);
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
      product: randomProduct.label,
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
