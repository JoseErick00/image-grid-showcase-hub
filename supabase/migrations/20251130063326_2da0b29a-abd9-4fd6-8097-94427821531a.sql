-- Create table for product likes
CREATE TABLE public.product_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT NOT NULL UNIQUE,
  like_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.product_likes ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can read product likes" 
ON public.product_likes 
FOR SELECT 
USING (true);

-- Create policy for public insert access
CREATE POLICY "Anyone can insert product likes" 
ON public.product_likes 
FOR INSERT 
WITH CHECK (true);

-- Create policy for public update access
CREATE POLICY "Anyone can update product likes" 
ON public.product_likes 
FOR UPDATE 
USING (true);

-- Create index for faster lookups
CREATE INDEX idx_product_likes_product_id ON public.product_likes(product_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_product_likes_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_product_likes_updated_at
BEFORE UPDATE ON public.product_likes
FOR EACH ROW
EXECUTE FUNCTION public.update_product_likes_updated_at();