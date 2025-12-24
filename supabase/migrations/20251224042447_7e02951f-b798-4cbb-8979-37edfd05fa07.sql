-- Create push_subscriptions table
CREATE TABLE public.push_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own subscriptions" 
ON public.push_subscriptions 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can insert subscriptions" 
ON public.push_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update own subscriptions" 
ON public.push_subscriptions 
FOR UPDATE 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can delete own subscriptions" 
ON public.push_subscriptions 
FOR DELETE 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Service role can manage all subscriptions" 
ON public.push_subscriptions 
FOR ALL 
USING (auth.role() = 'service_role');

-- Create trigger for updated_at
CREATE TRIGGER update_push_subscriptions_updated_at
BEFORE UPDATE ON public.push_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_push_subscriptions_active ON public.push_subscriptions(is_active) WHERE is_active = true;