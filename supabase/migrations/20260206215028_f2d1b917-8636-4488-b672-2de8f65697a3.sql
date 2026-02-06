
CREATE TABLE page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id text NOT NULL,
  session_id text,
  page_path text NOT NULL,
  referrer text,
  user_agent text,
  platform text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_page_views_created_at ON page_views(created_at);
CREATE INDEX idx_page_views_visitor_id ON page_views(visitor_id);
CREATE INDEX idx_page_views_page_path ON page_views(page_path);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert page views"
  ON page_views FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can read page views"
  ON page_views FOR SELECT
  USING (auth.role() = 'service_role');
