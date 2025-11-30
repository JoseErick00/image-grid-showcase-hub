-- Add share_count column to product_likes table
ALTER TABLE public.product_likes 
ADD COLUMN share_count integer NOT NULL DEFAULT 0;