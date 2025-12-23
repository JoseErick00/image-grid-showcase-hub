import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type UserLevel = "colegas" | "amigos" | "familia" | "socios";

const LEVEL_ORDER: UserLevel[] = ["colegas", "amigos", "familia", "socios"];

interface LevelConfig {
  level: UserLevel;
  min_coins: number;
  max_coins: number;
  required_referrals: number;
}

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
    const { prizeLevel, productId, productName } = await req.json();
    
    if (!prizeLevel) {
      return new Response(
        JSON.stringify({ success: false, error: "Nível do prêmio é obrigatório" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Processing prize redemption for user ${user.id}, prize level: ${prizeLevel}`);

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

    // Get level configs
    const { data: levelConfigs, error: configError } = await supabase
      .from("level_config")
      .select("*");

    if (configError || !levelConfigs) {
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao carregar configurações" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const currentLevelConfig = levelConfigs.find((c: LevelConfig) => c.level === gamification.current_level);
    if (!currentLevelConfig) {
      return new Response(
        JSON.stringify({ success: false, error: "Configuração de nível não encontrada" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const currentLevelIndex = LEVEL_ORDER.indexOf(gamification.current_level);
    const prizeLevelIndex = LEVEL_ORDER.indexOf(prizeLevel as UserLevel);

    // Validate redemption eligibility
    let redemptionType: "full" | "partial";
    let coinsConsumed = 0;
    let referralsConsumed = 0;

    if (prizeLevel === gamification.current_level) {
      // Full redemption (100% of current level)
      redemptionType = "full";
      
      if (gamification.current_level_coins < currentLevelConfig.max_coins ||
          gamification.current_level_referrals < currentLevelConfig.required_referrals) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: `Para resgatar o prêmio ${prizeLevel}, você precisa de ${currentLevelConfig.max_coins} moedas e ${currentLevelConfig.required_referrals} indicados.` 
          }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      // For full redemption, user keeps their coins and referrals
      coinsConsumed = 0;
      referralsConsumed = 0;
      
    } else if (prizeLevelIndex === currentLevelIndex - 1) {
      // Partial redemption (50% for previous level)
      redemptionType = "partial";
      
      const requiredCoins = Math.floor(currentLevelConfig.max_coins * 0.5);
      const requiredReferrals = Math.floor(currentLevelConfig.required_referrals * 0.5);
      
      if (gamification.current_level_coins < requiredCoins ||
          gamification.current_level_referrals < requiredReferrals) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: `Para resgatar o prêmio ${prizeLevel}, você precisa de ${requiredCoins} moedas e ${requiredReferrals} indicados.` 
          }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      // For partial redemption, user loses current level progress
      coinsConsumed = gamification.current_level_coins;
      referralsConsumed = gamification.current_level_referrals;
      
    } else {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Você só pode resgatar prêmios do seu nível atual (100%) ou do nível anterior (50%)." 
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create prize redemption record
    const { data: redemption, error: redemptionError } = await supabase
      .from("prize_redemptions")
      .insert({
        user_id: user.id,
        user_level_at_redemption: gamification.current_level,
        prize_level: prizeLevel,
        redemption_type: redemptionType,
        coins_at_redemption: gamification.current_level_coins,
        referrals_at_redemption: gamification.current_level_referrals,
        coins_consumed: coinsConsumed,
        referrals_consumed: referralsConsumed,
        product_id: productId || null,
        product_name: productName || null,
        status: "pending",
      })
      .select()
      .single();

    if (redemptionError) {
      console.error("Error creating redemption:", redemptionError);
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao registrar resgate" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Record coin transaction if coins were consumed
    if (coinsConsumed > 0) {
      await supabase
        .from("coin_transactions")
        .insert({
          user_id: user.id,
          transaction_type: "redemption",
          amount: -coinsConsumed,
          redemption_id: redemption.id,
          description: `Resgate de prêmio ${prizeLevel}`,
        });
    }

    // Update user gamification profile
    const updateData: Record<string, unknown> = {
      prizes_redeemed_count: gamification.prizes_redeemed_count + 1,
      coins_consumed: gamification.coins_consumed + coinsConsumed,
      referrals_consumed: gamification.referrals_consumed + referralsConsumed,
    };

    // For partial redemption, reset current level progress
    if (redemptionType === "partial") {
      updateData.current_level_coins = 0;
      updateData.current_level_referrals = 0;
    }

    await supabase
      .from("user_gamification")
      .update(updateData)
      .eq("user_id", user.id);

    console.log(`Prize redemption created successfully: ${redemption.id}`);

    return new Response(
      JSON.stringify({
        success: true,
        redemptionId: redemption.id,
        redemptionType,
        message: "Prêmio solicitado com sucesso!",
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
