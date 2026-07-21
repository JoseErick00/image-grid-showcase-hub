import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Generic response returned regardless of whether the email exists or
// whether the account is confirmed. This prevents:
//  - account enumeration via response shape
//  - account takeover by returning a usable magic-link URL to the caller
const GENERIC_RESPONSE = {
  success: true,
  message: 'Se existir uma conta para este email, um link de acesso foi enviado.',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { email, redirectTo } = await req.json();

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;

    // Use the anon client so signInWithOtp emails the magic link
    // to the address on file — the link is never returned to the caller.
    const supabase = createClient(supabaseUrl, anonKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // shouldCreateUser: false so unknown emails do NOT get auto-provisioned
    // (signup has its own flow). Errors are logged server-side only; the
    // response is always the same generic message to prevent enumeration.
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo || supabaseUrl,
        shouldCreateUser: false,
      },
    });

    if (error) {
      console.error('instant-login signInWithOtp error (masked from client):', error.message);
    }

    return new Response(
      JSON.stringify(GENERIC_RESPONSE),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('instant-login unexpected error:', error);
    // Still return generic success to avoid leaking anything through error shape
    return new Response(
      JSON.stringify(GENERIC_RESPONSE),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
