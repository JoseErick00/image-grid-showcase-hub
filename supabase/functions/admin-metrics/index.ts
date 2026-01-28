import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper function to verify admin role
async function verifyAdminRole(req: Request): Promise<{ isAdmin: boolean; userId: string | null; error?: string }> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return { isAdmin: false, userId: null, error: "Unauthorized" };
  }

  const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: authHeader } },
  });

  const token = authHeader.replace("Bearer ", "");
  const { data: claimsData, error: claimsError } = await supabaseAuth.auth.getClaims(token);
  
  if (claimsError || !claimsData?.claims?.sub) {
    return { isAdmin: false, userId: null, error: "Invalid token" };
  }

  const userId = claimsData.claims.sub;
  
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
  const { data: roleData } = await supabaseAdmin
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();

  return { isAdmin: !!roleData, userId };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify admin role for all requests
    const { isAdmin, error: authError } = await verifyAdminRole(req);
    if (!isAdmin) {
      console.log("Unauthorized access attempt to admin-metrics:", authError);
      return new Response(
        JSON.stringify({ success: false, error: authError || "Forbidden" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 403,
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse request body
    let requestBody: { action?: string; days?: number | null } = {};
    try {
      requestBody = await req.json();
    } catch {
      // No body or invalid JSON - continue with full metrics
    }

    // Check if this is a push stats request
    if (requestBody?.action === "push-stats") {
      // Fetch push subscription stats
      const { data: allSubs, error: subsError } = await supabase
        .from("push_subscriptions")
        .select("is_active");

      if (subsError) throw subsError;

      const total = allSubs?.length || 0;
      const active = allSubs?.filter(s => s.is_active).length || 0;
      const inactive = total - active;

      return new Response(
        JSON.stringify({
          success: true,
          pushStats: { total, active, inactive },
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Calculate date filter if days is provided
    const days = requestBody?.days;
    let dateFilter: string | null = null;
    if (days && typeof days === 'number') {
      const filterDate = new Date();
      filterDate.setDate(filterDate.getDate() - days);
      dateFilter = filterDate.toISOString();
    }

    // Fetch all auth users to get emails
    const { data: authUsersData } = await supabase.auth.admin.listUsers();
    const emailMap = new Map<string, string>();
    authUsersData?.users?.forEach(u => {
      emailMap.set(u.id, u.email || 'N/A');
    });

    // Fetch all user gamification data
    let usersQuery = supabase
      .from("user_gamification")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (dateFilter) {
      usersQuery = usersQuery.gte("created_at", dateFilter);
    }
    
    const { data: users, error: usersError } = await usersQuery;

    if (usersError) throw usersError;

    // Fetch all favorites
    let favoritesQuery = supabase
      .from("user_favorites")
      .select("*");
    
    if (dateFilter) {
      favoritesQuery = favoritesQuery.gte("created_at", dateFilter);
    }
    
    const { data: favorites, error: favoritesError } = await favoritesQuery;

    if (favoritesError) throw favoritesError;

    // Fetch all coin transactions
    let transactionsQuery = supabase
      .from("coin_transactions")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (dateFilter) {
      transactionsQuery = transactionsQuery.gte("created_at", dateFilter);
    }
    
    const { data: transactions, error: transactionsError } = await transactionsQuery;

    if (transactionsError) throw transactionsError;

    // Fetch all referrals
    let referralsQuery = supabase
      .from("referrals")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (dateFilter) {
      referralsQuery = referralsQuery.gte("created_at", dateFilter);
    }
    
    const { data: referrals, error: referralsError } = await referralsQuery;

    if (referralsError) throw referralsError;

    // Fetch all prize redemptions
    let redemptionsQuery = supabase
      .from("prize_redemptions")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (dateFilter) {
      redemptionsQuery = redemptionsQuery.gte("created_at", dateFilter);
    }
    
    const { data: redemptions, error: redemptionsError } = await redemptionsQuery;

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
      email: emailMap.get(u.user_id) || 'N/A',
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
        email: emailMap.get(u.user_id) || 'N/A',
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
