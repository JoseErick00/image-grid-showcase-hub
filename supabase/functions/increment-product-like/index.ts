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

    const body = await req.json().catch(() => ({}));
    const { productId, field } = body as { productId?: unknown; field?: unknown };

    if (
      !productId ||
      typeof productId !== "string" ||
      productId.length > 128 ||
      (field !== "like_count" && field !== "share_count")
    ) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid payload" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { data: existing } = await supabase
      .from("product_likes")
      .select("like_count, share_count")
      .eq("product_id", productId)
      .maybeSingle();

    let newCount: number;
    if (existing) {
      const current = (existing as any)[field] ?? 0;
      newCount = current + 1;
      const { error } = await supabase
        .from("product_likes")
        .update({ [field]: newCount })
        .eq("product_id", productId);
      if (error) throw error;
    } else {
      newCount = 1;
      const row: Record<string, unknown> = {
        product_id: productId,
        like_count: field === "like_count" ? 1 : 0,
        share_count: field === "share_count" ? 1 : 0,
      };
      const { error } = await supabase.from("product_likes").insert(row);
      if (error) throw error;
    }

    return new Response(
      JSON.stringify({ success: true, count: newCount }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("increment-product-like error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to update count" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
