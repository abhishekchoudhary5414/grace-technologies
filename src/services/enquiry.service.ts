import 'server-only';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export interface Enquiry {
  id: string;
  name: string;
  service: string;
  email: string;
  phone: string;
  status: 'New' | 'Confirmed' | 'Contacted' | 'Spam';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface EnquiryQueryParams {
  search?: string;
  service?: string;
  status?: string;
  sort?: 'newest' | 'oldest';
  page?: number;
  pageSize?: number;
}

export async function getEnquiries(params: EnquiryQueryParams) {
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return { data: [], total: 0, page: 1, pageSize: 10 };
  }

  const page = Math.max(1, params.page || 1);
  const pageSize = Math.min(100, Math.max(1, params.pageSize || 10));
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('enquiries')
    .select('*', { count: 'exact' });

  if (params.search) {
    const s = `%${params.search.trim()}%`;
    query = query.or(`name.ilike.${s},email.ilike.${s},phone.ilike.${s}`);
  }

  if (params.service && params.service !== 'all') {
    query = query.eq('service', params.service);
  }

  if (params.status && params.status !== 'all') {
    query = query.eq('status', params.status);
  }

  const isAsc = params.sort === 'oldest';
  query = query.order('created_at', { ascending: isAsc }).range(from, to);

  const { data, count, error } = await query;
  if (error) {
    console.error('Error fetching enquiries:', error);
    return { data: [], total: 0, page, pageSize, stats: { total: 0, new: 0, confirmed: 0, contacted: 0, spam: 0 } };
  }

  const stats = await getEnquiryStats();

  return {
    data: (data || []) as Enquiry[],
    total: count || 0,
    page,
    pageSize,
    stats,
  };
}

export async function updateEnquiryStatus(id: string, status: Enquiry['status']) {
  const supabase = createServerSupabaseClient();
  if (!supabase) return { error: 'Database uninitialized' };

  const { error } = await supabase
    .from('enquiries')
    .update({ status })
    .eq('id', id);

  return { error: error?.message || null };
}

export async function updateEnquiryNotes(id: string, notes: string) {
  const supabase = createServerSupabaseClient();
  if (!supabase) return { error: 'Database uninitialized' };

  const { error } = await supabase
    .from('enquiries')
    .update({ notes })
    .eq('id', id);

  return { error: error?.message || null };
}

export async function getEnquiryStats() {
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return { total: 0, new: 0, confirmed: 0, contacted: 0, spam: 0 };
  }

  const { data, error } = await supabase
    .from('enquiries')
    .select('status');

  if (error || !data) {
    return { total: 0, new: 0, confirmed: 0, contacted: 0, spam: 0 };
  }

  const stats = { total: data.length, new: 0, confirmed: 0, contacted: 0, spam: 0 };
  for (const item of data) {
    if (item.status === 'New') stats.new++;
    else if (item.status === 'Confirmed') stats.confirmed++;
    else if (item.status === 'Contacted') stats.contacted++;
    else if (item.status === 'Spam') stats.spam++;
  }

  return stats;
}

