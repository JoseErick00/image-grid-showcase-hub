// Google Search Console admin + metrics edge function (admin-only).
// Actions: status, verify, submit-sitemap, metrics
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "https://www.ineedbrasil.com.br/";
const SITE_ENC = encodeURIComponent(SITE);
const SITEMAP = "https://www.ineedbrasil.com.br/sitemap.xml";
const SITEMAP_ENC = encodeURIComponent(SITEMAP);

async function verifyAdmin(req: Request): Promise<{ ok: boolean; error?: string }> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return { ok: false, error: "Unauthorized" };
  const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const token = authHeader.replace("Bearer ", "");
  const { data: claimsData, error } = await supabaseAuth.auth.getClaims(token);
  if (error || !claimsData?.claims?.sub) return { ok: false, error: "Invalid token" };
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
  const { data: roleData } = await supabaseAdmin
    .from("user_roles").select("role")
    .eq("user_id", claimsData.claims.sub).eq("role", "admin").maybeSingle();
  return { ok: !!roleData, error: roleData ? undefined : "Forbidden" };
}

function gwHeaders() {
  return {
    Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
    "X-Connection-Api-Key": Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY")!,
    "Content-Type": "application/json",
  };
}

async function gwFetch(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GATEWAY}${path}`, { ...init, headers: { ...gwHeaders(), ...(init.headers || {}) } });
  const text = await res.text();
  let json: any = null;
  try { json = text ? JSON.parse(text) : null; } catch { json = { raw: text }; }
  return { ok: res.ok, status: res.status, json };
}

async function getStatus() {
  // Check if site is already verified/registered
  const sites = await gwFetch("/webmasters/v3/sites");
  const registered =
    sites.ok &&
    Array.isArray(sites.json?.siteEntry) &&
    sites.json.siteEntry.some((s: any) => s.siteUrl === SITE || s.siteUrl === SITE.replace(/\/$/, ""));

  // Check sitemap submission
  let sitemapInfo: any = null;
  if (registered) {
    const sm = await gwFetch(`/webmasters/v3/sites/${SITE_ENC}/sitemaps/${SITEMAP_ENC}`);
    if (sm.ok) sitemapInfo = sm.json;
  }

  return { registered, site: SITE, sitemap: SITEMAP, sitemapInfo };
}

async function verifyAndRegister() {
  // 1. Verify site ownership via META tag
  const verifyRes = await gwFetch(
    "/siteVerification/v1/webResource?verificationMethod=META",
    { method: "POST", body: JSON.stringify({ site: { identifier: SITE, type: "SITE" } }) }
  );
  if (!verifyRes.ok) {
    return {
      success: false,
      step: "verify",
      status: verifyRes.status,
      error: verifyRes.json,
      hint: "A meta tag de verificação precisa estar live em " + SITE + ". Publique o site antes de tentar novamente.",
    };
  }

  // 2. Add site to Search Console
  const addRes = await gwFetch(`/webmasters/v3/sites/${SITE_ENC}`, { method: "PUT" });
  if (!addRes.ok && addRes.status !== 204) {
    return { success: false, step: "add-site", status: addRes.status, error: addRes.json };
  }

  // 3. Submit sitemap
  const sitemapRes = await gwFetch(
    `/webmasters/v3/sites/${SITE_ENC}/sitemaps/${SITEMAP_ENC}`,
    { method: "PUT" }
  );
  if (!sitemapRes.ok && sitemapRes.status !== 204) {
    return { success: false, step: "submit-sitemap", status: sitemapRes.status, error: sitemapRes.json };
  }

  return { success: true, message: "Site verificado, propriedade adicionada e sitemap submetido." };
}

async function submitSitemap() {
  const res = await gwFetch(
    `/webmasters/v3/sites/${SITE_ENC}/sitemaps/${SITEMAP_ENC}`,
    { method: "PUT" }
  );
  if (!res.ok && res.status !== 204) {
    return { success: false, status: res.status, error: res.json };
  }
  return { success: true, message: "Sitemap resubmetido." };
}

async function getMetrics(days: number) {
  // Search Analytics: clicks/impressions/ctr/position
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - days);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);

  const baseBody = { startDate: fmt(start), endDate: fmt(end), rowLimit: 25 };

  const [totals, byDate, byQuery, byPage, byCountry, byDevice, sitemapInfo] = await Promise.all([
    gwFetch(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify(baseBody),
    }),
    gwFetch(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify({ ...baseBody, dimensions: ["date"], rowLimit: 400 }),
    }),
    gwFetch(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify({ ...baseBody, dimensions: ["query"], rowLimit: 25 }),
    }),
    gwFetch(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify({ ...baseBody, dimensions: ["page"], rowLimit: 25 }),
    }),
    gwFetch(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify({ ...baseBody, dimensions: ["country"], rowLimit: 15 }),
    }),
    gwFetch(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify({ ...baseBody, dimensions: ["device"], rowLimit: 5 }),
    }),
    gwFetch(`/webmasters/v3/sites/${SITE_ENC}/sitemaps/${SITEMAP_ENC}`),
  ]);

  return {
    success: true,
    range: { startDate: fmt(start), endDate: fmt(end), days },
    totals: totals.json?.rows?.[0] || null,
    byDate: byDate.json?.rows || [],
    byQuery: byQuery.json?.rows || [],
    byPage: byPage.json?.rows || [],
    byCountry: byCountry.json?.rows || [],
    byDevice: byDevice.json?.rows || [],
    sitemap: sitemapInfo.ok ? sitemapInfo.json : null,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const admin = await verifyAdmin(req);
    if (!admin.ok) {
      return new Response(JSON.stringify({ success: false, error: admin.error }), {
        status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!Deno.env.get("LOVABLE_API_KEY") || !Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY")) {
      return new Response(JSON.stringify({ success: false, error: "GSC connector not linked" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => ({}));
    const action = body?.action || "status";
    let result: any;
    switch (action) {
      case "status": result = await getStatus(); break;
      case "verify": result = await verifyAndRegister(); break;
      case "submit-sitemap": result = await submitSitemap(); break;
      case "metrics": result = await getMetrics(Number(body?.days) || 28); break;
      default: result = { success: false, error: `Unknown action: ${action}` };
    }

    return new Response(JSON.stringify(result), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e: any) {
    console.error("gsc-console error:", e);
    return new Response(JSON.stringify({ success: false, error: "Internal server error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
