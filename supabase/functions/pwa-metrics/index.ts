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

    // Fetch all PWA events from the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data: events, error } = await supabase
      .from("pwa_install_events")
      .select("*")
      .gte("created_at", thirtyDaysAgo.toISOString())
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Calculate metrics
    const totalEvents = events?.length || 0;
    
    // Count by event type
    const eventCounts: Record<string, number> = {};
    const platformCounts: Record<string, number> = {};
    const browserCounts: Record<string, number> = {};
    const inAppBrowserCounts: Record<string, number> = {};
    
    // Daily breakdown for last 7 days
    const dailyInstalls: Record<string, { opened: number; success: number; dismissed: number }> = {};
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    events?.forEach(event => {
      // Count event types
      eventCounts[event.event_type] = (eventCounts[event.event_type] || 0) + 1;
      
      // Count platforms (only for modal_opened to avoid double counting)
      if (event.event_type === 'modal_opened') {
        platformCounts[event.platform || 'unknown'] = (platformCounts[event.platform || 'unknown'] || 0) + 1;
      }
      
      // Count browsers
      if (event.event_type === 'modal_opened') {
        browserCounts[event.browser || 'unknown'] = (browserCounts[event.browser || 'unknown'] || 0) + 1;
      }
      
      // Count in-app browsers
      if (event.is_in_app_browser && event.in_app_browser_name) {
        inAppBrowserCounts[event.in_app_browser_name] = (inAppBrowserCounts[event.in_app_browser_name] || 0) + 1;
      }
      
      // Daily breakdown
      const eventDate = new Date(event.created_at);
      if (eventDate >= sevenDaysAgo) {
        const dateKey = eventDate.toISOString().split('T')[0];
        if (!dailyInstalls[dateKey]) {
          dailyInstalls[dateKey] = { opened: 0, success: 0, dismissed: 0 };
        }
        if (event.event_type === 'modal_opened') {
          dailyInstalls[dateKey].opened++;
        } else if (event.event_type === 'install_success') {
          dailyInstalls[dateKey].success++;
        } else if (event.event_type === 'install_dismissed') {
          dailyInstalls[dateKey].dismissed++;
        }
      }
    });

    // Calculate funnel metrics
    const modalOpened = eventCounts['modal_opened'] || 0;
    const installClicked = eventCounts['install_button_clicked'] || 0;
    const installSuccess = eventCounts['install_success'] || 0;
    const installDismissed = eventCounts['install_dismissed'] || 0;
    const okUnderstood = eventCounts['ok_understood_clicked'] || 0;
    const modalClosed = eventCounts['modal_closed'] || 0;
    const alreadyInstalled = eventCounts['already_installed_shown'] || 0;

    // Conversion rates
    const clickRate = modalOpened > 0 ? ((installClicked / modalOpened) * 100).toFixed(1) : '0';
    const successRate = installClicked > 0 ? ((installSuccess / installClicked) * 100).toFixed(1) : '0';
    const overallConversion = modalOpened > 0 ? ((installSuccess / modalOpened) * 100).toFixed(1) : '0';

    // Recent events (last 50)
    const recentEvents = events?.slice(0, 50).map(e => ({
      id: e.id,
      event_type: e.event_type,
      platform: e.platform,
      browser: e.browser,
      is_in_app_browser: e.is_in_app_browser,
      in_app_browser_name: e.in_app_browser_name,
      created_at: e.created_at,
    })) || [];

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          summary: {
            totalEvents,
            modalOpened,
            installClicked,
            installSuccess,
            installDismissed,
            okUnderstood,
            modalClosed,
            alreadyInstalled,
          },
          conversionRates: {
            clickRate: `${clickRate}%`,
            successRate: `${successRate}%`,
            overallConversion: `${overallConversion}%`,
          },
          platformBreakdown: platformCounts,
          browserBreakdown: browserCounts,
          inAppBrowserBreakdown: inAppBrowserCounts,
          dailyMetrics: dailyInstalls,
          recentEvents,
        },
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching PWA metrics:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
