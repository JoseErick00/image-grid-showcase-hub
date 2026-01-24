-- Add geographic columns to affiliate_clicks
ALTER TABLE public.affiliate_clicks
ADD COLUMN IF NOT EXISTS ip_address TEXT,
ADD COLUMN IF NOT EXISTS country TEXT,
ADD COLUMN IF NOT EXISTS country_code TEXT,
ADD COLUMN IF NOT EXISTS region TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION,
ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION;

-- Add geographic columns to affiliate_conversions
ALTER TABLE public.affiliate_conversions
ADD COLUMN IF NOT EXISTS ip_address TEXT,
ADD COLUMN IF NOT EXISTS country TEXT,
ADD COLUMN IF NOT EXISTS country_code TEXT,
ADD COLUMN IF NOT EXISTS region TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION,
ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION;

-- Create indexes for geographic queries
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_country ON public.affiliate_clicks(country);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_country_code ON public.affiliate_clicks(country_code);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_region ON public.affiliate_clicks(region);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_city ON public.affiliate_clicks(city);

CREATE INDEX IF NOT EXISTS idx_affiliate_conversions_country ON public.affiliate_conversions(country);
CREATE INDEX IF NOT EXISTS idx_affiliate_conversions_country_code ON public.affiliate_conversions(country_code);