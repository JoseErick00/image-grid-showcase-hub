import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type PromoBanner = Tables<"promo_banners">;

export const usePromoBanners = () => {
  return useQuery({
    queryKey: ["promo_banners"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("promo_banners")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as PromoBanner[];
    },
  });
};

export const usePromoBannersByCampaign = (campaignId: string) => {
  return useQuery({
    queryKey: ["promo_banners", "campaign", campaignId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("promo_banners")
        .select("*")
        .eq("campaign_id", campaignId)
        .eq("is_active", true)
        .order("section_id", { ascending: true })
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as PromoBanner[];
    },
    enabled: !!campaignId,
  });
};

export const usePromoBannersBySection = (campaignId: string, sectionId: string) => {
  return useQuery({
    queryKey: ["promo_banners", "campaign", campaignId, "section", sectionId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("promo_banners")
        .select("*")
        .eq("campaign_id", campaignId)
        .eq("section_id", sectionId)
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .single();

      if (error && error.code !== "PGRST116") throw error;
      return data as PromoBanner | null;
    },
    enabled: !!campaignId && !!sectionId,
  });
};

export const useUpdateBannerMetrics = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      bannerId,
      field,
      increment = 1,
    }: {
      bannerId: string;
      field: "like_count" | "share_count" | "click_count";
      increment?: number;
    }) => {
      // First get current value
      const { data: current, error: fetchError } = await supabase
        .from("promo_banners")
        .select(field)
        .eq("id", bannerId)
        .single();

      if (fetchError) throw fetchError;

      const currentValue = (current?.[field] as number) || 0;

      // Update with incremented value
      const { data, error } = await supabase
        .from("promo_banners")
        .update({ [field]: currentValue + increment })
        .eq("id", bannerId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["promo_banners"] });
    },
  });
};
