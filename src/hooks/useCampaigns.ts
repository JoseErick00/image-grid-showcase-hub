import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Campaign = Tables<"campaigns">;

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Campaign[];
    },
  });
};

export const useCampaignsByCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["campaigns", "category", categoryId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("category_id", categoryId)
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Campaign[];
    },
    enabled: !!categoryId,
  });
};

export const useCampaignBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["campaign", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (error) throw error;
      return data as Campaign;
    },
    enabled: !!slug,
  });
};
