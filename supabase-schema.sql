-- Schema for Grace Technologies Contact Enquiries
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  business_email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  country TEXT NOT NULL,
  service_interested_in TEXT NOT NULL,
  project_budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'archived'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from public contact form)
CREATE POLICY "Allow public insert to contact_enquiries" 
ON contact_enquiries 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow only authenticated service role to read/manage entries
CREATE POLICY "Allow service role full access" 
ON contact_enquiries 
FOR ALL 
TO service_role 
USING (true)
WITH CHECK (true);

