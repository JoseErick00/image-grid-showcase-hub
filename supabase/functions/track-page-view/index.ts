import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function isStr(v: unknown, max = 2048): v is string {
  return typeof v === "string" && v.length > 0 && v.length <= max;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.json().catch(() => ({}));
    const {
      visitor_id,
      session_id,
      page_path,
      referrer,
      platform,
    } = body as Record<string, unknown>;

    if (!isStr(visitor_id, 128) || !isStr(page_path, 2048)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid payload" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userAgent = req.headers.get("user-agent")?.slice(0, 1024) ?? null;

    const { error } = await supabase.from("page_views").insert({
      visitor_id,
      session_id: isStr(session_id, 128) ? session_id : null,
      page_path,
      referrer: isStr(referrer, 2048) ? referrer : null,
      platform: isStr(platform, 32) ? platform : "unknown",
      user_agent: userAgent,
    });

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("track-page-view error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Tracking failed" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
