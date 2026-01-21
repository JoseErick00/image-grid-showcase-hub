-- Create table for PWA installation events tracking
CREATE TABLE public.pwa_install_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  platform TEXT,
  browser TEXT,
  is_in_app_browser BOOLEAN DEFAULT false,
  in_app_browser_name TEXT,
  user_agent TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Indexes for efficient queries
CREATE INDEX idx_pwa_events_type ON public.pwa_install_events(event_type);
CREATE INDEX idx_pwa_events_created ON public.pwa_install_events(created_at);
CREATE INDEX idx_pwa_events_platform ON public.pwa_install_events(platform);

-- Enable RLS
ALTER TABLE public.pwa_install_events ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anonymous tracking)
CREATE POLICY "Allow public inserts" ON public.pwa_install_events FOR INSERT WITH CHECK (true);

-- Service role can read all events
CREATE POLICY "Service role can read all events" ON public.pwa_install_events FOR SELECT USING (auth.role() = 'service_role'::text);