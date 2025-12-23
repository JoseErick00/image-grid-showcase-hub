import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get the user from the authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ success: false, error: "Não autorizado" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ success: false, error: "Usuário não autenticado" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get request body
    const { referralCode } = await req.json();
    
    if (!referralCode) {
      return new Response(
        JSON.stringify({ success: false, error: "Código de indicação é obrigatório" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Processing referral code ${referralCode} for user ${user.id}`);

    // Check if user has already been referred
    const { data: existingReferral } = await supabase
      .from("referrals")
      .select("id")
      .eq("referred_id", user.id)
      .maybeSingle();

    if (existingReferral) {
      return new Response(
        JSON.stringify({ success: false, error: "Você já utilizou um código de indicação" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Find the referrer by code
    const { data: referrer, error: referrerError } = await supabase
      .from("user_gamification")
      .select("*")
      .eq("referral_code", referralCode.toUpperCase())
      .maybeSingle();

    if (referrerError || !referrer) {
      console.log("Referrer not found:", referralCode);
      return new Response(
        JSON.stringify({ success: false, error: "Código de indicação inválido" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Prevent self-referral
    if (referrer.user_id === user.id) {
      return new Response(
        JSON.stringify({ success: false, error: "Você não pode usar seu próprio código" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create referral record
    const { data: newReferral, error: refError } = await supabase
      .from("referrals")
      .insert({
        referrer_id: referrer.user_id,
        referred_id: user.id,
        referral_code: referralCode.toUpperCase(),
        coins_awarded: 10,
      })
      .select()
      .single();

    if (refError) {
      console.error("Error creating referral:", refError);
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao registrar indicação" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Add coin transaction for referrer
    await supabase
      .from("coin_transactions")
      .insert({
        user_id: referrer.user_id,
        transaction_type: "referral",
        amount: 10,
        referral_id: newReferral.id,
        description: `Indicação de novo usuário`,
      });

    // Calculate new values for referrer
    const newCurrentLevelCoins = referrer.current_level_coins + 10;
    const newTotalCoins = referrer.total_coins_earned + 10;
    const newReferrals = referrer.current_level_referrals + 1;
    const newTotalReferrals = referrer.total_referrals_ever + 1;

    // Check if referrer should level up
    let newLevel = referrer.current_level;
    if (newTotalCoins >= 3001 && referrer.current_level !== "socios") {
      newLevel = "socios";
    } else if (newTotalCoins >= 1501 && referrer.current_level === "amigos") {
      newLevel = "familia";
    } else if (newTotalCoins >= 501 && referrer.current_level === "colegas") {
      newLevel = "amigos";
    }

    const leveledUp = newLevel !== referrer.current_level;

    // Update referrer's gamification profile
    await supabase
      .from("user_gamification")
      .update({
        current_level_coins: leveledUp ? 0 : newCurrentLevelCoins,
        current_level_referrals: leveledUp ? 0 : newReferrals,
        total_coins_earned: newTotalCoins,
        total_referrals_ever: newTotalReferrals,
        current_level: newLevel,
      })
      .eq("user_id", referrer.user_id);

    // Update referred user's profile with referred_by
    await supabase
      .from("user_gamification")
      .update({
        referred_by: referrer.id,
      })
      .eq("user_id", user.id);

    console.log(`Referral processed successfully. Referrer ${referrer.user_id} received +10 coins`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Código aplicado com sucesso!",
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno do servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
