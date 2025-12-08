-- =============================================
-- FASE 1: TABELAS BASE PARA INDEXAÇÃO DE PRODUTOS
-- =============================================

-- 1. TABELA DE CATEGORIAS
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. TABELA DE CAMPANHAS
CREATE TABLE public.campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.categories(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  hero_desktop TEXT,
  hero_tablet TEXT,
  hero_mobile TEXT,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT[],
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. TABELA DE PRODUTOS
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES public.campaigns(id) ON DELETE CASCADE NOT NULL,
  section_id TEXT NOT NULL,
  image_url TEXT NOT NULL,
  label TEXT NOT NULL,
  affiliate_link TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('amazon', 'shopee', 'aliexpress', 'alibaba', 'mercadolivre', 'magazineluiza', 'americanas', 'submarino', 'ebay', 'temu')),
  stamp TEXT,
  display_order INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  share_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. TABELA DE BANNERS PROMOCIONAIS
CREATE TABLE public.promo_banners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES public.campaigns(id) ON DELETE CASCADE NOT NULL,
  section_id TEXT NOT NULL,
  desktop_url TEXT NOT NULL,
  tablet_url TEXT,
  mobile_url TEXT,
  affiliate_link TEXT NOT NULL,
  like_count INTEGER DEFAULT 0,
  share_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- ÍNDICES PARA PERFORMANCE
-- =============================================

CREATE INDEX idx_campaigns_category ON public.campaigns(category_id);
CREATE INDEX idx_campaigns_slug ON public.campaigns(slug);
CREATE INDEX idx_products_campaign ON public.products(campaign_id);
CREATE INDEX idx_products_platform ON public.products(platform);
CREATE INDEX idx_products_like_count ON public.products(like_count DESC);
CREATE INDEX idx_products_share_count ON public.products(share_count DESC);
CREATE INDEX idx_promo_banners_campaign ON public.promo_banners(campaign_id);

-- =============================================
-- FUNÇÃO PARA ATUALIZAR updated_at
-- =============================================

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- TRIGGERS DE UPDATED_AT
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_campaigns_updated_at
  BEFORE UPDATE ON public.campaigns
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_promo_banners_updated_at
  BEFORE UPDATE ON public.promo_banners
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============================================
-- RLS POLICIES (Leitura pública, escrita restrita)
-- =============================================

-- CATEGORIES
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read categories"
  ON public.categories FOR SELECT
  USING (true);

CREATE POLICY "Service role can manage categories"
  ON public.categories FOR ALL
  USING (auth.role() = 'service_role');

-- CAMPAIGNS
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active campaigns"
  ON public.campaigns FOR SELECT
  USING (is_active = true);

CREATE POLICY "Service role can manage campaigns"
  ON public.campaigns FOR ALL
  USING (auth.role() = 'service_role');

-- PRODUCTS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active products"
  ON public.products FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can update product metrics"
  ON public.products FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can manage products"
  ON public.products FOR ALL
  USING (auth.role() = 'service_role');

-- PROMO_BANNERS
ALTER TABLE public.promo_banners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active banners"
  ON public.promo_banners FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can update banner metrics"
  ON public.promo_banners FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can manage banners"
  ON public.promo_banners FOR ALL
  USING (auth.role() = 'service_role');