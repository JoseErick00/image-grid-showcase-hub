import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Map Brazilian state names to codes
const BRAZIL_STATE_CODES: Record<string, string> = {
  "Acre": "AC", "Alagoas": "AL", "Amapá": "AP", "Amazonas": "AM",
  "Bahia": "BA", "Ceará": "CE", "Distrito Federal": "DF", "Espírito Santo": "ES",
  "Goiás": "GO", "Maranhão": "MA", "Mato Grosso": "MT", "Mato Grosso do Sul": "MS",
  "Minas Gerais": "MG", "Pará": "PA", "Paraíba": "PB", "Paraná": "PR",
  "Pernambuco": "PE", "Piauí": "PI", "Rio de Janeiro": "RJ", "Rio Grande do Norte": "RN",
  "Rio Grande do Sul": "RS", "Rondônia": "RO", "Roraima": "RR", "Santa Catarina": "SC",
  "São Paulo": "SP", "Sergipe": "SE", "Tocantins": "TO",
  "AC": "AC", "AL": "AL", "AP": "AP", "AM": "AM", "BA": "BA", "CE": "CE",
  "DF": "DF", "ES": "ES", "GO": "GO", "MA": "MA", "MT": "MT", "MS": "MS",
  "MG": "MG", "PA": "PA", "PB": "PB", "PR": "PR", "PE": "PE", "PI": "PI",
  "RJ": "RJ", "RN": "RN", "RS": "RS", "RO": "RO", "RR": "RR", "SC": "SC",
  "SP": "SP", "SE": "SE", "TO": "TO",
};

// Helper function to verify admin role
async function verifyAdminRole(req: Request): Promise<{ isAdmin: boolean; userId: string | null; error?: string }> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify admin role for all requests
    const { isAdmin, error: authError } = await verifyAdminRole(req);
    if (!isAdmin) {
      console.log("Unauthorized access attempt to affiliate-metrics:", authError);
      return new Response(
        JSON.stringify({ success: false, error: authError || "Forbidden" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 403,
        }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Parse request body for days filter
    let requestBody: { days?: number | null } = {};
    try {
      requestBody = await req.json();
    } catch {
      // No body or invalid JSON - use default
    }

    // Calculate date filter
    const days = requestBody?.days;
    let dateFilter: string | null = null;
    if (days && typeof days === 'number') {
      const filterDate = new Date();
      filterDate.setDate(filterDate.getDate() - days);
      dateFilter = filterDate.toISOString();
    }

    // Fetch all clicks with optional date filter
    let clicksQuery = supabase
      .from("affiliate_clicks")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (dateFilter) {
      clicksQuery = clicksQuery.gte("created_at", dateFilter);
    }
    
    const { data: allClicks, error: clicksError } = await clicksQuery;

    if (clicksError) throw clicksError;

    // Fetch all conversions with optional date filter
    let conversionsQuery = supabase
      .from("affiliate_conversions")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (dateFilter) {
      conversionsQuery = conversionsQuery.gte("created_at", dateFilter);
    }
    
    const { data: allConversions, error: conversionsError } = await conversionsQuery;

    if (conversionsError) throw conversionsError;

    // Calculate clicks by platform
    const clicksByPlatform: Record<string, number> = {};
    (allClicks || []).forEach((click) => {
      const platform = click.platform || "unknown";
      clicksByPlatform[platform] = (clicksByPlatform[platform] || 0) + 1;
    });

    // Calculate clicks by type
    const clicksByType: Record<string, number> = {};
    (allClicks || []).forEach((click) => {
      const type = click.click_type || "unknown";
      clicksByType[type] = (clicksByType[type] || 0) + 1;
    });

    // Calculate clicks by day (based on selected period or last 7 days)
    const chartDays = days && days <= 30 ? days : 7;
    const clicksByDay: Array<{ date: string; clicks: number }> = [];
    for (let i = chartDays - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      
      const dayClicks = (allClicks || []).filter((click) => {
        const clickDate = new Date(click.created_at).toISOString().split("T")[0];
        return clickDate === dateStr;
      }).length;
      
      clicksByDay.push({ date: dateStr, clicks: dayClicks });
    }

    // Calculate conversions by source
    const conversionsBySource: Record<string, number> = {};
    (allConversions || []).forEach((conversion) => {
      const source = conversion.utm_source || "unknown";
      conversionsBySource[source] = (conversionsBySource[source] || 0) + 1;
    });

    // Recent clicks (last 50)
    const recentClicks = (allClicks || []).slice(0, 50).map((click) => ({
      id: click.id,
      platform: click.platform,
      item_name: click.item_name,
      click_type: click.click_type,
      created_at: click.created_at,
    }));

    // Recent conversions (last 50)
    const recentConversions = (allConversions || []).slice(0, 50).map((conversion) => ({
      id: conversion.id,
      utm_source: conversion.utm_source,
      utm_campaign: conversion.utm_campaign,
      page_url: conversion.page_url,
      created_at: conversion.created_at,
    }));

    // ============ GEOGRAPHIC METRICS ============
    
    // Count clicks with and without geo data
    const clicksWithGeo = (allClicks || []).filter(c => c.country);
    const clicksWithoutGeo = (allClicks || []).filter(c => !c.country);

    // Clicks by country
    const clicksByCountry: Record<string, number> = {};
    clicksWithGeo.forEach((click) => {
      const country = click.country || "Unknown";
      clicksByCountry[country] = (clicksByCountry[country] || 0) + 1;
    });

    // Clicks by region (primarily for Brazil)
    const clicksByRegion: Record<string, number> = {};
    clicksWithGeo.forEach((click) => {
      if (click.region) {
        clicksByRegion[click.region] = (clicksByRegion[click.region] || 0) + 1;
      }
    });

    // Brazil states map data
    const brazilStates: Record<string, number> = {};
    clicksWithGeo
      .filter(c => c.country_code === "BR" && c.region)
      .forEach((click) => {
        const stateCode = BRAZIL_STATE_CODES[click.region] || click.region;
        if (stateCode && stateCode.length === 2) {
          brazilStates[stateCode] = (brazilStates[stateCode] || 0) + 1;
        }
      });

    // Clicks by city (top cities)
    const cityMap: Record<string, { city: string; region: string; country: string; count: number }> = {};
    clicksWithGeo.forEach((click) => {
      if (click.city) {
        const key = `${click.city}-${click.region}-${click.country}`;
        if (!cityMap[key]) {
          cityMap[key] = {
            city: click.city,
            region: click.region || "",
            country: click.country || "",
            count: 0,
          };
        }
        cityMap[key].count++;
      }
    });
    const clicksByCity = Object.values(cityMap)
      .sort((a, b) => b.count - a.count)
      .slice(0, 50);

    const geoMetrics = {
      totalWithGeo: clicksWithGeo.length,
      totalWithoutGeo: clicksWithoutGeo.length,
      clicksByCountry,
      clicksByRegion,
      clicksByCity,
      brazilStates,
    };

    const response = {
      success: true,
      data: {
        totalClicks: allClicks?.length || 0,
        totalConversions: allConversions?.length || 0,
        clicksByPlatform,
        clicksByType,
        clicksByDay,
        conversionsBySource,
        recentClicks,
        recentConversions,
        geoMetrics,
      },
    };

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching affiliate metrics:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
