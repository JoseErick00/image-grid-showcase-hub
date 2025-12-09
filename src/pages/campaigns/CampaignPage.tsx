import { useParams } from 'react-router-dom';
import { useCampaignBySlug } from '@/hooks/useCampaigns';
import { useProductsByCampaign } from '@/hooks/useProducts';
import { usePromoBannersByCampaign } from '@/hooks/usePromoBanners';
import CampaignTemplate, { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';
import { Skeleton } from '@/components/ui/skeleton';
import { type Platform } from '@/utils/platformLogos';

const CampaignPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: campaign, isLoading: campaignLoading, error: campaignError } = useCampaignBySlug(slug || '');
  const { data: products, isLoading: productsLoading } = useProductsByCampaign(campaign?.id || '');
  const { data: banners, isLoading: bannersLoading } = usePromoBannersByCampaign(campaign?.id || '');

  const isLoading = campaignLoading || productsLoading || bannersLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f7f7f7]">
        <Skeleton className="w-full h-[300px] md:h-[400px]" />
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (campaignError || !campaign) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-omne-medium mb-4">Campanha não encontrada</h1>
          <p className="text-muted-foreground">A campanha que você está procurando não existe ou foi desativada.</p>
        </div>
      </div>
    );
  }

  // Group products and banners by section
  const sectionIds = [...new Set(products?.map(p => p.section_id) || [])].sort();
  
  const sections = sectionIds.map(sectionId => {
    const sectionProducts = products?.filter(p => p.section_id === sectionId) || [];
    const sectionBanner = banners?.find(b => b.section_id === sectionId);
    
    return {
      id: sectionId,
      promoBanner: {
        desktop: sectionBanner?.desktop_url || '',
        tablet: sectionBanner?.tablet_url || sectionBanner?.desktop_url || '',
        mobile: sectionBanner?.mobile_url || sectionBanner?.desktop_url || '',
        link: sectionBanner?.affiliate_link || '#',
      },
      products: sectionProducts.map(p => ({
        image: p.image_url,
        label: p.label,
        link: p.affiliate_link,
        platform: p.platform as Platform,
        stamp: p.stamp || undefined,
      })),
    };
  });

  // Generate nav buttons from sections
  const navButtons = sections.map((section, index) => ({
    label: index === 0 ? 'Encontre +' : index === 1 ? 'Compartilhe!' : '+ Achados',
    targetId: section.id,
  }));

  // Build campaign config from database data
  const config: CampaignConfig = {
    campaignSlug: campaign.slug,
    pageTitle: campaign.title,
    pageSubtitle: campaign.subtitle || '',
    heroBanner: {
      desktop: campaign.hero_desktop || '',
      tablet: campaign.hero_tablet || campaign.hero_desktop || '',
      mobile: campaign.hero_mobile || campaign.hero_desktop || '',
    },
    navButtons,
    sections,
    backLink: {
      url: '/brasil/incriveis',
      label: 'Voltar para Brasil Incríveis',
    },
    seo: {
      title: campaign.seo_title || campaign.title,
      description: campaign.seo_description || campaign.subtitle || '',
      keywords: campaign.seo_keywords?.join(', '),
      canonicalUrl: `https://ineedstore.com.br/brasil/${campaign.slug}`,
    },
  };

  return <CampaignTemplate config={config} />;
};

export default CampaignPage;
