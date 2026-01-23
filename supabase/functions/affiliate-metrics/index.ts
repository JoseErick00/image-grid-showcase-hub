import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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
