import 'server-only';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  service: string;
  messages: string;
  status: 'New' | 'Contacted' | 'Resolved' | 'Spam';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface ContactQueryParams {
  search?: string;
  service?: string;
  status?: string;
  sort?: 'newest' | 'oldest';
  page?: number;
  pageSize?: number;
}

export async function getContactSubmissions(params: ContactQueryParams) {
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return { data: [], total: 0, page: 1, pageSize: 10 };
  }

  const page = Math.max(1, params.page || 1);
  const pageSize = Math.min(100, Math.max(1, params.pageSize || 10));
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('contact_submissions')
    .select('*', { count: 'exact' });

  if (params.search) {
    const s = `%${params.search.trim()}%`;
    query = query.or(`name.ilike.${s},email.ilike.${s},phone_number.ilike.${s}`);
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
    console.error('Error fetching contact submissions:', error);
    return { data: [], total: 0, page, pageSize, stats: { total: 0, new: 0, contacted: 0, resolved: 0, spam: 0 } };
  }

  const stats = await getContactStats();

  return {
    data: (data || []) as ContactSubmission[],
    total: count || 0,
    page,
    pageSize,
    stats,
  };
}

export async function updateContactStatus(id: string, status: ContactSubmission['status']) {
  const supabase = createServerSupabaseClient();
  if (!supabase) return { error: 'Database uninitialized' };

  const { error } = await supabase
    .from('contact_submissions')
    .update({ status })
    .eq('id', id);

  return { error: error?.message || null };
}

export async function updateContactNotes(id: string, notes: string) {
  const supabase = createServerSupabaseClient();
  if (!supabase) return { error: 'Database uninitialized' };

  const { error } = await supabase
    .from('contact_submissions')
    .update({ notes })
    .eq('id', id);

  return { error: error?.message || null };
}

export async function getContactStats() {
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return { total: 0, new: 0, contacted: 0, resolved: 0, spam: 0 };
  }

  const { data, error } = await supabase
    .from('contact_submissions')
    .select('status');

  if (error || !data) {
    return { total: 0, new: 0, contacted: 0, resolved: 0, spam: 0 };
  }

  const stats = { total: data.length, new: 0, contacted: 0, resolved: 0, spam: 0 };
  for (const item of data) {
    if (item.status === 'New') stats.new++;
    else if (item.status === 'Contacted') stats.contacted++;
    else if (item.status === 'Resolved') stats.resolved++;
    else if (item.status === 'Spam') stats.spam++;
  }

  return stats;
}

