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
    const { productId } = await req.json();
    
    if (!productId) {
      return new Response(
        JSON.stringify({ success: false, error: "ID do produto é obrigatório" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Adding share coin for user ${user.id}, product ${productId}`);

    // Get user's gamification profile
    const { data: gamification, error: gamError } = await supabase
      .from("user_gamification")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (gamError || !gamification) {
      console.error("Error fetching gamification:", gamError);
      return new Response(
        JSON.stringify({ success: false, error: "Perfil de gamificação não encontrado" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Add coin transaction
    const { error: txError } = await supabase
      .from("coin_transactions")
      .insert({
        user_id: user.id,
        transaction_type: "share",
        amount: 1,
        product_id: productId,
        description: `Compartilhamento de produto`,
      });

    if (txError) {
      console.error("Error inserting transaction:", txError);
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao registrar transação" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Calculate new values
    const newCurrentLevelCoins = gamification.current_level_coins + 1;
    const newTotalCoins = gamification.total_coins_earned + 1;

    // Check if user should level up
    let newLevel = gamification.current_level;
    if (newTotalCoins >= 3001 && gamification.current_level !== "socios") {
      newLevel = "socios";
    } else if (newTotalCoins >= 1501 && gamification.current_level === "amigos") {
      newLevel = "familia";
    } else if (newTotalCoins >= 501 && gamification.current_level === "colegas") {
      newLevel = "amigos";
    }

    const leveledUp = newLevel !== gamification.current_level;

    // Update gamification profile
    const { error: updateError } = await supabase
      .from("user_gamification")
      .update({
        current_level_coins: leveledUp ? 0 : newCurrentLevelCoins, // Reset if leveled up
        total_coins_earned: newTotalCoins,
        current_level: newLevel,
      })
      .eq("user_id", user.id);

    if (updateError) {
      console.error("Error updating gamification:", updateError);
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao atualizar perfil" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Successfully added coin. New total: ${newTotalCoins}, Level: ${newLevel}`);

    return new Response(
      JSON.stringify({
        success: true,
        newTotal: newTotalCoins,
        currentLevelCoins: leveledUp ? 0 : newCurrentLevelCoins,
        level: newLevel,
        leveledUp,
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
