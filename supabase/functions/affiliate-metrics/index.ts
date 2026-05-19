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

    // Parse request body for days filter / explicit range
    let requestBody: { days?: number | null; range?: { start: string; end: string } } = {};
    try {
      requestBody = await req.json();
    } catch {
      // No body or invalid JSON - use default
    }

    // Calculate date filter — either explicit range or last N days
    const days = requestBody?.days;
    const range = requestBody?.range;
    let startFilter: string | null = null;
    let endFilter: string | null = null;
    if (range?.start && range?.end) {
      startFilter = range.start;
      endFilter = range.end;
    } else if (days && typeof days === 'number') {
      const filterDate = new Date();
      filterDate.setDate(filterDate.getDate() - days);
      startFilter = filterDate.toISOString();
    }

    // Fetch all clicks with optional date filter
    let clicksQuery = supabase
      .from("affiliate_clicks")
      .select("*")
      .order("created_at", { ascending: false });
    if (startFilter) clicksQuery = clicksQuery.gte("created_at", startFilter);
    if (endFilter) clicksQuery = clicksQuery.lt("created_at", endFilter);

    const { data: allClicks, error: clicksError } = await clicksQuery;
    if (clicksError) throw clicksError;

    // Fetch all conversions with optional date filter
    let conversionsQuery = supabase
      .from("affiliate_conversions")
      .select("*")
      .order("created_at", { ascending: false });
    if (startFilter) conversionsQuery = conversionsQuery.gte("created_at", startFilter);
    if (endFilter) conversionsQuery = conversionsQuery.lt("created_at", endFilter);

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

    // Determine span of the daily chart based on the actual selected period
    let chartDays: number;
    if (range?.start && range?.end) {
      chartDays = Math.max(
        1,
        Math.ceil(
          (new Date(range.end).getTime() - new Date(range.start).getTime()) / 86400000
        )
      );
    } else if (days && typeof days === "number") {
      chartDays = days;
    } else {
      // "all" — span from oldest click to today
      const oldest = (allClicks || []).reduce<string | null>((min, c) => {
        return !min || c.created_at < min ? c.created_at : min;
      }, null);
      chartDays = oldest
        ? Math.max(
            1,
            Math.ceil((Date.now() - new Date(oldest).getTime()) / 86400000) + 1
          )
        : 7;
    }
    chartDays = Math.min(chartDays, 365); // hard cap

    // Build per-day buckets (and per-day per-platform)
    const platformSet = new Set<string>();
    (allClicks || []).forEach((c) => platformSet.add(c.platform || "unknown"));
    const platforms = Array.from(platformSet);

    const clicksByDay: Array<{ date: string; clicks: number }> = [];
    const clicksByDayPlatform: Array<Record<string, number | string>> = [];
    const baseDate = range?.end ? new Date(range.end) : new Date();
    for (let i = chartDays - 1; i >= 0; i--) {
      const date = new Date(baseDate);
      date.setUTCDate(date.getUTCDate() - i - (range?.end ? 1 : 0));
      const dateStr = date.toISOString().split("T")[0];

      const dayList = (allClicks || []).filter(
        (c) => new Date(c.created_at).toISOString().split("T")[0] === dateStr
      );
      clicksByDay.push({ date: dateStr, clicks: dayList.length });

      const row: Record<string, number | string> = { date: dateStr };
      platforms.forEach((p) => (row[p] = 0));
      dayList.forEach((c) => {
        const p = c.platform || "unknown";
        row[p] = ((row[p] as number) || 0) + 1;
      });
      clicksByDayPlatform.push(row);
    }

    // Clicks by hour-of-day (0..23) aggregated across the whole period
    const clicksByHourOfDay: Array<{ hour: number; clicks: number }> = Array.from(
      { length: 24 },
      (_, i) => ({ hour: i, clicks: 0 })
    );
    (allClicks || []).forEach((c) => {
      // Convert UTC to São Paulo (UTC-3)
      const d = new Date(new Date(c.created_at).getTime() - 3 * 3600 * 1000);
      clicksByHourOfDay[d.getUTCHours()].clicks++;
    });

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

    // ============ EXTRA AGGREGATIONS (Lovable-style overview) ============

    // Hourly series (last 24h) — used when period === 1 day
    const clicksByHour: Array<{ hour: string; clicks: number }> = [];
    const nowH = new Date();
    for (let i = 23; i >= 0; i--) {
      const d = new Date(nowH.getTime() - i * 60 * 60 * 1000);
      const key = `${d.toISOString().slice(0, 13)}:00`;
      const count = (allClicks || []).filter((c) => {
        const ck = new Date(c.created_at).toISOString().slice(0, 13);
        return ck === d.toISOString().slice(0, 13);
      }).length;
      clicksByHour.push({ hour: key, clicks: count });
    }

    // Top pages (by path, ignoring query string)
    const pageMap: Record<string, number> = {};
    (allClicks || []).forEach((c) => {
      if (!c.page_url) return;
      try {
        const u = new URL(c.page_url);
        const path = u.pathname || "/";
        pageMap[path] = (pageMap[path] || 0) + 1;
      } catch {
        // ignore malformed urls
      }
    });
    const clicksByPage = Object.entries(pageMap)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    // Device breakdown (mobile / desktop / tablet)
    const clicksByDevice: Record<string, number> = { mobile: 0, desktop: 0, tablet: 0 };
    (allClicks || []).forEach((c) => {
      const ua = (c.user_agent || "").toLowerCase();
      if (/ipad|tablet/.test(ua)) clicksByDevice.tablet++;
      else if (/mobi|android|iphone|ipod/.test(ua)) clicksByDevice.mobile++;
      else clicksByDevice.desktop++;
    });

    // Top referrers (by host)
    const refMap: Record<string, number> = {};
    (allClicks || []).forEach((c) => {
      if (!c.referrer) {
        refMap["Direct"] = (refMap["Direct"] || 0) + 1;
        return;
      }
      try {
        const host = new URL(c.referrer).hostname.replace(/^www\./, "");
        refMap[host] = (refMap[host] || 0) + 1;
      } catch {
        refMap["Direct"] = (refMap["Direct"] || 0) + 1;
      }
    });
    const clicksByReferrer = Object.entries(refMap)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const response = {
      success: true,
      data: {
        totalClicks: allClicks?.length || 0,
        totalConversions: allConversions?.length || 0,
        clicksByPlatform,
        clicksByType,
        clicksByDay,
        clicksByHour,
        clicksByPage,
        clicksByDevice,
        clicksByReferrer,
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
