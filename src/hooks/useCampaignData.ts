import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { type Platform } from "@/utils/platformLogos";
import { type CampaignConfig } from "@/components/campaigns/CampaignTemplate";

export type Campaign = Tables<"campaigns">;
export type Product = Tables<"products">;
export type PromoBanner = Tables<"promo_banners">;

interface CampaignWithData {
  campaign: Campaign;
  products: Product[];
  banners: PromoBanner[];
}

// Hook to fetch a complete campaign with all its data
export const useCampaignWithData = (slug: string) => {
  return useQuery({
    queryKey: ["campaign-with-data", slug],
    queryFn: async (): Promise<CampaignWithData | null> => {
      // First get the campaign
      const { data: campaign, error: campaignError } = await supabase
        .from("campaigns")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (campaignError || !campaign) return null;

      // Then get products and banners in parallel
      const [productsResponse, bannersResponse] = await Promise.all([
        supabase
          .from("products")
          .select("*")
          .eq("campaign_id", campaign.id)
          .eq("is_active", true)
          .order("section_id", { ascending: true })
          .order("display_order", { ascending: true }),
        supabase
          .from("promo_banners")
          .select("*")
          .eq("campaign_id", campaign.id)
          .eq("is_active", true)
          .order("section_id", { ascending: true })
          .order("display_order", { ascending: true }),
      ]);

      return {
        campaign,
        products: productsResponse.data || [],
        banners: bannersResponse.data || [],
      };
    },
    enabled: !!slug,
  });
};

// Helper function to transform database data to CampaignConfig
export const transformToCampaignConfig = (data: CampaignWithData): CampaignConfig => {
  const { campaign, products, banners } = data;

  // Group products and banners by section
  const sectionIds = [...new Set(products.map((p) => p.section_id))].sort();

  const sections = sectionIds.map((sectionId) => {
    const sectionProducts = products.filter((p) => p.section_id === sectionId);
    const sectionBanner = banners.find((b) => b.section_id === sectionId);

    return {
      id: sectionId,
      promoBanner: {
        desktop: sectionBanner?.desktop_url || "",
        tablet: sectionBanner?.tablet_url || sectionBanner?.desktop_url || "",
        mobile: sectionBanner?.mobile_url || sectionBanner?.desktop_url || "",
        link: sectionBanner?.affiliate_link || "#",
      },
      products: sectionProducts.map((p) => ({
        image: p.image_url,
        label: p.label,
        link: p.affiliate_link,
        platform: p.platform as Platform,
        stamp: p.stamp || undefined,
      })),
    };
  });

  // Generate nav buttons from sections
  const defaultLabels = ["Encontre +", "Compartilhe!", "+ Achados", "+ Baratos"];
  const navButtons = sections.map((section, index) => ({
    label: defaultLabels[index] || `Seção ${index + 1}`,
    targetId: section.id,
  }));

  return {
    campaignSlug: campaign.slug,
    pageTitle: campaign.title,
    pageSubtitle: campaign.subtitle || "",
    heroBanner: {
      desktop: campaign.hero_desktop || "",
      tablet: campaign.hero_tablet || campaign.hero_desktop || "",
      mobile: campaign.hero_mobile || campaign.hero_desktop || "",
    },
    navButtons,
    sections,
    backLink: {
      url: "/brasil/incriveis",
      label: "Voltar para Brasil Incríveis",
    },
    seo: {
      title: campaign.seo_title || campaign.title,
      description: campaign.seo_description || campaign.subtitle || "",
      keywords: campaign.seo_keywords?.join(", "),
      canonicalUrl: `https://ineedstore.com.br/brasil/${campaign.slug}`,
    },
  };
};
