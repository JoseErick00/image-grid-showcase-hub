import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch all user gamification data
    const { data: users, error: usersError } = await supabase
      .from("user_gamification")
      .select("*")
      .order("created_at", { ascending: false });

    if (usersError) throw usersError;

    // Fetch all favorites
    const { data: favorites, error: favoritesError } = await supabase
      .from("user_favorites")
      .select("*");

    if (favoritesError) throw favoritesError;

    // Fetch all coin transactions
    const { data: transactions, error: transactionsError } = await supabase
      .from("coin_transactions")
      .select("*")
      .order("created_at", { ascending: false });

    if (transactionsError) throw transactionsError;

    // Fetch all referrals
    const { data: referrals, error: referralsError } = await supabase
      .from("referrals")
      .select("*")
      .order("created_at", { ascending: false });

    if (referralsError) throw referralsError;

    // Fetch all prize redemptions
    const { data: redemptions, error: redemptionsError } = await supabase
      .from("prize_redemptions")
      .select("*")
      .order("created_at", { ascending: false });

    if (redemptionsError) throw redemptionsError;

    // Fetch products with most clicks/shares
    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("*")
      .order("click_count", { ascending: false })
      .limit(50);

    if (productsError) throw productsError;

    // Calculate metrics
    const totalUsers = users?.length || 0;
    
    // Users by level
    const usersByLevel = {
      colegas: users?.filter(u => u.current_level === 'colegas').length || 0,
      amigos: users?.filter(u => u.current_level === 'amigos').length || 0,
      familia: users?.filter(u => u.current_level === 'familia').length || 0,
      socios: users?.filter(u => u.current_level === 'socios').length || 0,
    };

    // Total coins earned across all users
    const totalCoinsEarned = users?.reduce((sum, u) => sum + (u.total_coins_earned || 0), 0) || 0;

    // Total referrals
    const totalReferrals = referrals?.length || 0;

    // Shares by type
    const shareTransactions = transactions?.filter(t => t.transaction_type === 'share') || [];
    const appShareTransactions = transactions?.filter(t => t.transaction_type === 'app_share') || [];
    
    // Most shared products
    const productShareCounts: Record<string, { count: number; product_id: string }> = {};
    shareTransactions.forEach(t => {
      if (t.product_id) {
        if (!productShareCounts[t.product_id]) {
          productShareCounts[t.product_id] = { count: 0, product_id: t.product_id };
        }
        productShareCounts[t.product_id].count++;
      }
    });
    const topSharedProducts = Object.values(productShareCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    // Most favorited products
    const favoriteCounts: Record<string, { count: number; product_id: string; product_data: any }> = {};
    favorites?.forEach(f => {
      if (!favoriteCounts[f.product_id]) {
        favoriteCounts[f.product_id] = { count: 0, product_id: f.product_id, product_data: f.product_data };
      }
      favoriteCounts[f.product_id].count++;
    });
    const topFavoriteProducts = Object.values(favoriteCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    // Platform clicks from products
    const platformClicks: Record<string, number> = {};
    products?.forEach(p => {
      if (!platformClicks[p.platform]) {
        platformClicks[p.platform] = 0;
      }
      platformClicks[p.platform] += p.click_count || 0;
    });

    // Users with most points
    const topUsers = users?.slice(0, 20).map(u => ({
      user_id: u.user_id,
      current_level: u.current_level,
      total_coins_earned: u.total_coins_earned,
      total_referrals_ever: u.total_referrals_ever,
      prizes_redeemed_count: u.prizes_redeemed_count,
      created_at: u.created_at,
      referral_code: u.referral_code,
    })) || [];

    // Oldest users
    const oldestUsers = [...(users || [])]
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      .slice(0, 20)
      .map(u => ({
        user_id: u.user_id,
        current_level: u.current_level,
        total_coins_earned: u.total_coins_earned,
        total_referrals_ever: u.total_referrals_ever,
        created_at: u.created_at,
        referral_code: u.referral_code,
      }));

    // Total favorites
    const totalFavorites = favorites?.length || 0;

    // Total prize redemptions
    const totalRedemptions = redemptions?.length || 0;

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          summary: {
            totalUsers,
            usersByLevel,
            totalCoinsEarned,
            totalReferrals,
            totalProductShares: shareTransactions.length,
            totalAppShares: appShareTransactions.length,
            totalFavorites,
            totalRedemptions,
          },
          platformClicks,
          topSharedProducts,
          topFavoriteProducts,
          topUsers,
          oldestUsers,
          recentTransactions: transactions?.slice(0, 50) || [],
          recentReferrals: referrals?.slice(0, 30) || [],
          recentRedemptions: redemptions?.slice(0, 30) || [],
        },
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching admin metrics:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
