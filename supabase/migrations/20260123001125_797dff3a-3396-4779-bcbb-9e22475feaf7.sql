-- Fix push_subscriptions RLS policies to prevent credential exposure
-- Remove the vulnerable 'OR (user_id IS NULL)' condition from SELECT, UPDATE, DELETE policies

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Users can view own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Users can update own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Users can delete own subscriptions" ON public.push_subscriptions;

-- Recreate policies with proper restrictions
-- Users can only view their own subscriptions (not anonymous ones)
CREATE POLICY "Users can view own subscriptions"
ON public.push_subscriptions
FOR SELECT
USING (auth.uid() = user_id);

-- Users can only update their own subscriptions
CREATE POLICY "Users can update own subscriptions"
ON public.push_subscriptions
FOR UPDATE
USING (auth.uid() = user_id);

-- Users can only delete their own subscriptions
CREATE POLICY "Users can delete own subscriptions"
ON public.push_subscriptions
FOR DELETE
USING (auth.uid() = user_id);