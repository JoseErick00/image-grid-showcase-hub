-- Fix push_subscriptions INSERT policy to require authentication
-- Remove the overly permissive policy and add proper authentication check

DROP POLICY IF EXISTS "Anyone can insert subscriptions" ON public.push_subscriptions;

-- Require authentication for inserting subscriptions
-- The user_id must match the authenticated user or be set to the authenticated user
CREATE POLICY "Authenticated users can insert subscriptions"
ON public.push_subscriptions
FOR INSERT
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND (user_id = auth.uid() OR user_id IS NULL)
);