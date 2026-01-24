import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GeoData {
  country: string;
  countryCode: string;
  region: string;
  city: string;
  lat: number;
  lon: number;
}

async function getGeoLocation(ip: string): Promise<GeoData | null> {
  try {
    // Skip geolocation for localhost/private IPs
    if (ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.") || ip.startsWith("172.")) {
      console.log("Skipping geolocation for private IP:", ip);
      return null;
    }

    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,region,city,lat,lon`);
    const data = await response.json();

    if (data.status === "success") {
      return {
        country: data.country,
        countryCode: data.countryCode,
        region: data.region,
        city: data.city,
        lat: data.lat,
        lon: data.lon,
      };
    }

    console.log("Geolocation failed for IP:", ip, data);
    return null;
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return null;
  }
}

function getClientIP(req: Request): string {
  // Try various headers that might contain the real IP
  const headers = req.headers;
  
  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    const ips = xForwardedFor.split(",").map(ip => ip.trim());
    return ips[0];
  }

  const xRealIP = headers.get("x-real-ip");
  if (xRealIP) {
    return xRealIP;
  }

  const cfConnectingIP = headers.get("cf-connecting-ip");
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return "unknown";
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

    const body = await req.json();
    const { 
      platform, 
      affiliate_link, 
      item_name, 
      banner_id, 
      click_type, 
      referrer, 
      page_url, 
      user_agent, 
      session_id,
      // For conversions
      is_conversion,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term
    } = body;

    // Get client IP
    const clientIP = getClientIP(req);
    console.log("Client IP:", clientIP);

    // Get geolocation data
    const geoData = await getGeoLocation(clientIP);
    console.log("Geo data:", geoData);

    if (is_conversion) {
      // Track conversion
      const { error: conversionError } = await supabase
        .from("affiliate_conversions")
        .insert({
          utm_source,
          utm_medium,
          utm_campaign,
          utm_content,
          utm_term,
          page_url,
          user_agent,
          session_id,
          ip_address: clientIP !== "unknown" ? clientIP : null,
          country: geoData?.country || null,
          country_code: geoData?.countryCode || null,
          region: geoData?.region || null,
          city: geoData?.city || null,
          latitude: geoData?.lat || null,
          longitude: geoData?.lon || null,
        });

      if (conversionError) {
        console.error("Error inserting conversion:", conversionError);
        throw conversionError;
      }

      console.log("Conversion tracked successfully");
    } else {
      // Track affiliate click
      const { error: clickError } = await supabase
        .from("affiliate_clicks")
        .insert({
          platform,
          affiliate_link,
          item_name,
          banner_id,
          click_type: click_type || "product",
          referrer,
          page_url,
          user_agent,
          session_id,
          ip_address: clientIP !== "unknown" ? clientIP : null,
          country: geoData?.country || null,
          country_code: geoData?.countryCode || null,
          region: geoData?.region || null,
          city: geoData?.city || null,
          latitude: geoData?.lat || null,
          longitude: geoData?.lon || null,
        });

      if (clickError) {
        console.error("Error inserting click:", clickError);
        throw clickError;
      }

      console.log("Click tracked successfully:", { platform, item_name, click_type });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Error in track-affiliate:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
