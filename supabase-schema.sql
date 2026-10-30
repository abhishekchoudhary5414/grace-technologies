-- ====================================================================
-- GRACE TECHNOLOGIES: PRODUCTION SUPABASE DATABASE SCHEMA
-- Compatible with PostgreSQL 15+ / Supabase
-- Tables: admin_users, enquiries, contact_submissions, whatsapp_clicks
-- ====================================================================

-- 1. Enable pgcrypto for UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ====================================================================
-- TABLE 1: admin_users
-- ====================================================================
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name VARCHAR(150),
  email VARCHAR(255),
  role VARCHAR(30) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT TRUE,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- TABLE 2: enquiries (Quick Popup Enquiries)
-- ===================================================================
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  service VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  status VARCHAR(30) DEFAULT 'New' CHECK (status IN ('New', 'Confirmed', 'Contacted', 'Spam')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- TABLE 3: contact_submissions (Full Contact Page Form Submissions)
-- ====================================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(30) NOT NULL,
  service VARCHAR(150) NOT NULL,
  messages TEXT NOT NULL,
  status VARCHAR(30) DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Resolved', 'Spam')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- TABLE 4: whatsapp_clicks (WhatsApp Analytics)
-- ====================================================================
CREATE TABLE IF NOT EXISTS whatsapp_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_url TEXT,
  page_path TEXT,
  referrer TEXT,
  browser VARCHAR(100),
  device_type VARCHAR(50),
  operating_system VARCHAR(100),
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- INDEXES FOR HIGH QUERY EFFICIENCY
-- ====================================================================
CREATE INDEX IF NOT EXISTS idx_admin_username ON admin_users(username);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_service ON enquiries(service);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON enquiries(email);

CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_service ON contact_submissions(service);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);

CREATE INDEX IF NOT EXISTS idx_whatsapp_clicked_at ON whatsapp_clicks(clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_whatsapp_page_path ON whatsapp_clicks(page_path);
CREATE INDEX IF NOT EXISTS idx_whatsapp_browser ON whatsapp_clicks(browser);
CREATE INDEX IF NOT EXISTS idx_whatsapp_device ON whatsapp_clicks(device_type);

-- ====================================================================
-- AUTOMATIC updated_at TRIGGER FUNCTION
-- ====================================================================
CREATE OR REPLACE FUNCTION set_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_set_admin_users_updated_at ON admin_users;
CREATE TRIGGER trigger_set_admin_users_updated_at
  BEFORE UPDATE ON admin_users
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_column();

DROP TRIGGER IF EXISTS trigger_set_enquiries_updated_at ON enquiries;
CREATE TRIGGER trigger_set_enquiries_updated_at
  BEFORE UPDATE ON enquiries
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_column();

DROP TRIGGER IF EXISTS trigger_set_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER trigger_set_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at_column();

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE whatsapp_clicks ENABLE ROW LEVEL SECURITY;

-- 1. admin_users: strictly accessible only by service_role
CREATE POLICY "Strict service role only on admin_users"
  ON admin_users
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 2. enquiries: allow anonymous inserts via validated server endpoint
CREATE POLICY "Allow service role full access on enquiries"
  ON enquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 3. contact_submissions: allow service role full access
CREATE POLICY "Allow service role full access on contact_submissions"
  ON contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 4. whatsapp_clicks: allow service role full access
CREATE POLICY "Allow service role full access on whatsapp_clicks"
  ON whatsapp_clicks
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ====================================================================
-- OPTIONAL SEED: Default Administrator Account
-- Username: admin
-- Password (hashed with bcrypt): Admin@Grace2026!
-- ====================================================================
INSERT INTO admin_users (username, password_hash, full_name, email, role, is_active)
VALUES (
  'admin',
  '$2b$12$T4btpMmpspsT58uYS5cXH.vQMcQasEgXQU4Epm5FWkoCgB4O5WN9m',
  'Grace Executive Admin',
  'contact@gracetechnologies.uk',
  'admin',
  TRUE
)
ON CONFLICT (username) DO NOTHING;
