import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Definição das categorias
const categories = [
  { name: 'Saúde', slug: 'saude', description: 'Produtos para saúde e bem-estar', icon: 'heart', display_order: 1 },
  { name: 'Incríveis', slug: 'incriveis', description: 'Achados incríveis e gadgets', icon: 'sparkles', display_order: 2 },
  { name: 'Casa', slug: 'casa', description: 'Produtos para casa e decoração', icon: 'home', display_order: 3 },
  { name: 'Esportes', slug: 'esportes', description: 'Produtos para esportes e lazer', icon: 'dumbbell', display_order: 4 },
];

// Mapeamento de campanhas existentes
const campaignMappings = [
  // Saúde
  { slug: 'sel-cuidado-rosto', name: 'Seleção - Cuidado com o rosto', category_slug: 'saude' },
  { slug: 'sel-corpo', name: 'Seleção para o Corpo', category_slug: 'saude' },
  { slug: 'sel-cremes-gringos', name: 'Seleção de cremes Gringos', category_slug: 'saude' },
  // Incríveis
  { slug: 'sel-acampamentos', name: 'Seleção para Acampamentos', category_slug: 'incriveis' },
  { slug: 'sel-praia', name: 'Seleção amantes de Praia', category_slug: 'incriveis' },
  { slug: 'sel-incriveis-01', name: 'Seleção OS INCRÍVEIS 01', category_slug: 'incriveis' },
  { slug: 'sel-incriveis-02', name: 'Seleção OS INCRÍVEIS 02', category_slug: 'incriveis' },
  { slug: 'sel-incriveis-03', name: 'Seleção OS INCRÍVEIS 03', category_slug: 'incriveis' },
  { slug: 'sel-incriveis-04', name: 'Seleção OS INCRÍVEIS 04', category_slug: 'incriveis' },
  { slug: 'sel-calcados-femininos', name: 'Seleção - Calçados Femininos', category_slug: 'incriveis' },
  { slug: 'sel-calcados-masculinos', name: 'Seleção - Calçados Masculinos', category_slug: 'incriveis' },
  // Casa
  { slug: 'sel-cozinha', name: 'Seleção para Cozinha', category_slug: 'casa' },
  { slug: 'sel-sala', name: 'Seleção para Sala', category_slug: 'casa' },
  { slug: 'sel-quarto', name: 'Seleção para Quarto', category_slug: 'casa' },
  { slug: 'sel-banheiro', name: 'Seleção para Banheiro', category_slug: 'casa' },
  // Esportes
  { slug: 'sel-academia', name: 'Seleção para Academia', category_slug: 'esportes' },
  { slug: 'sel-corredores', name: 'Seleção para Corredores', category_slug: 'esportes' },
  { slug: 'sel-aquaticos', name: 'Seleção Esportes Aquáticos', category_slug: 'esportes' },
  { slug: 'sel-time-campo', name: 'Seleção Time de Campo', category_slug: 'esportes' },
];

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action, campaignData } = await req.json();

    if (action === 'init-categories') {
      // Inserir categorias
      const { data, error } = await supabase
        .from('categories')
        .upsert(categories, { onConflict: 'slug' })
        .select();

      if (error) throw error;

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Categorias criadas/atualizadas',
        data 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'migrate-campaign') {
      if (!campaignData) {
        throw new Error('campaignData é obrigatório');
      }

      // Buscar categoria
      const campaignMapping = campaignMappings.find(c => c.slug === campaignData.campaignSlug);
      if (!campaignMapping) {
        throw new Error(`Mapeamento não encontrado para: ${campaignData.campaignSlug}`);
      }

      const { data: category } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', campaignMapping.category_slug)
        .single();

      if (!category) {
        throw new Error(`Categoria não encontrada: ${campaignMapping.category_slug}`);
      }

      // Inserir/atualizar campanha
      const campaignRecord = {
        category_id: category.id,
        name: campaignMapping.name,
        slug: campaignData.campaignSlug,
        title: campaignData.pageTitle,
        subtitle: campaignData.pageSubtitle || null,
        hero_desktop: campaignData.heroBanner?.desktop || null,
        hero_tablet: campaignData.heroBanner?.tablet || null,
        hero_mobile: campaignData.heroBanner?.mobile || null,
        seo_title: campaignData.seo?.title || null,
        seo_description: campaignData.seo?.description || null,
        seo_keywords: campaignData.seo?.keywords?.split(', ') || [],
        is_active: true,
      };

      const { data: campaign, error: campaignError } = await supabase
        .from('campaigns')
        .upsert(campaignRecord, { onConflict: 'slug' })
        .select()
        .single();

      if (campaignError) throw campaignError;

      // Remover produtos e banners existentes para esta campanha
      await supabase.from('products').delete().eq('campaign_id', campaign.id);
      await supabase.from('promo_banners').delete().eq('campaign_id', campaign.id);

      // Inserir produtos e banners por seção
      let productOrder = 0;
      let bannerOrder = 0;

      for (const section of campaignData.sections || []) {
        // Inserir banner promocional
        if (section.promoBanner) {
          const bannerRecord = {
            campaign_id: campaign.id,
            section_id: section.id,
            desktop_url: section.promoBanner.desktop,
            tablet_url: section.promoBanner.tablet || null,
            mobile_url: section.promoBanner.mobile || null,
            affiliate_link: section.promoBanner.link,
            display_order: bannerOrder++,
          };

          const { error: bannerError } = await supabase
            .from('promo_banners')
            .insert(bannerRecord);

          if (bannerError) {
            console.error('Erro ao inserir banner:', bannerError);
          }
        }

        // Inserir produtos
        for (const product of section.products || []) {
          const productRecord = {
            campaign_id: campaign.id,
            section_id: section.id,
            image_url: product.image,
            label: product.label,
            affiliate_link: product.link,
            platform: product.platform,
            stamp: product.stamp || null,
            display_order: productOrder++,
          };

          const { error: productError } = await supabase
            .from('products')
            .insert(productRecord);

          if (productError) {
            console.error('Erro ao inserir produto:', productError);
          }
        }
      }

      return new Response(JSON.stringify({ 
        success: true, 
        message: `Campanha ${campaignData.campaignSlug} migrada`,
        campaign,
        productsCount: productOrder,
        bannersCount: bannerOrder
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'get-stats') {
      const { count: categoriesCount } = await supabase.from('categories').select('*', { count: 'exact', head: true });
      const { count: campaignsCount } = await supabase.from('campaigns').select('*', { count: 'exact', head: true });
      const { count: productsCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
      const { count: bannersCount } = await supabase.from('promo_banners').select('*', { count: 'exact', head: true });

      return new Response(JSON.stringify({ 
        success: true,
        stats: {
          categories: categoriesCount,
          campaigns: campaignsCount,
          products: productsCount,
          banners: bannersCount
        }
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    throw new Error(`Ação desconhecida: ${action}`);

  } catch (error) {
    console.error('Erro na migração:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});