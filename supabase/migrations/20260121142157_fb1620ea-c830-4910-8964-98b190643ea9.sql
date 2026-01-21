-- Table to store affiliate click events
CREATE TABLE public.affiliate_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL,
  affiliate_link TEXT NOT NULL,
  item_name TEXT,
  banner_id TEXT,
  click_type TEXT NOT NULL DEFAULT 'product', -- 'product', 'banner_promo', 'banner_small', 'banner_hero'
  user_agent TEXT,
  referrer TEXT,
  page_url TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table to store conversions (return visits with UTM params)
CREATE TABLE public.affiliate_conversions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  original_click_id UUID REFERENCES public.affiliate_clicks(id),
  page_url TEXT,
  user_agent TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_conversions ENABLE ROW LEVEL SECURITY;

-- Policies for affiliate_clicks - anyone can insert (tracking), service role can read all
CREATE POLICY "Anyone can insert affiliate clicks"
ON public.affiliate_clicks
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Service role can read all affiliate clicks"
ON public.affiliate_clicks
FOR SELECT
USING (auth.role() = 'service_role');

-- Policies for affiliate_conversions
CREATE POLICY "Anyone can insert conversions"
ON public.affiliate_conversions
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Service role can read all conversions"
ON public.affiliate_conversions
FOR SELECT
USING (auth.role() = 'service_role');

-- Create indexes for common queries
CREATE INDEX idx_affiliate_clicks_platform ON public.affiliate_clicks(platform);
CREATE INDEX idx_affiliate_clicks_created_at ON public.affiliate_clicks(created_at);
CREATE INDEX idx_affiliate_clicks_click_type ON public.affiliate_clicks(click_type);
CREATE INDEX idx_affiliate_conversions_created_at ON public.affiliate_conversions(created_at);
CREATE INDEX idx_affiliate_conversions_utm_source ON public.affiliate_conversions(utm_source);