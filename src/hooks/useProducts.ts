import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Product = Tables<"products">;

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Product[];
    },
  });
};

export const useProductsByCampaign = (campaignId: string) => {
  return useQuery({
    queryKey: ["products", "campaign", campaignId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("campaign_id", campaignId)
        .eq("is_active", true)
        .order("section_id", { ascending: true })
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Product[];
    },
    enabled: !!campaignId,
  });
};

export const useProductsBySection = (campaignId: string, sectionId: string) => {
  return useQuery({
    queryKey: ["products", "campaign", campaignId, "section", sectionId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("campaign_id", campaignId)
        .eq("section_id", sectionId)
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Product[];
    },
    enabled: !!campaignId && !!sectionId,
  });
};

export const useUpdateProductMetrics = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      productId,
      field,
      increment = 1,
    }: {
      productId: string;
      field: "like_count" | "share_count" | "click_count";
      increment?: number;
    }) => {
      // First get current value
      const { data: current, error: fetchError } = await supabase
        .from("products")
        .select(field)
        .eq("id", productId)
        .single();

      if (fetchError) throw fetchError;

      const currentValue = (current?.[field] as number) || 0;

      // Update with incremented value
      const { data, error } = await supabase
        .from("products")
        .update({ [field]: currentValue + increment })
        .eq("id", productId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useMostLikedProducts = (limit = 10) => {
  return useQuery({
    queryKey: ["products", "most-liked", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .order("like_count", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as Product[];
    },
  });
};

export const useMostSharedProducts = (limit = 10) => {
  return useQuery({
    queryKey: ["products", "most-shared", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .order("share_count", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as Product[];
    },
  });
};

export const useProductsByPlatform = (platform: string) => {
  return useQuery({
    queryKey: ["products", "platform", platform],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("platform", platform)
        .eq("is_active", true)
        .order("like_count", { ascending: false });

      if (error) throw error;
      return data as Product[];
    },
    enabled: !!platform,
  });
};
