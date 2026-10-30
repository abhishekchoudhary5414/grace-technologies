import 'server-only';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export interface WhatsAppClick {
  id: string;
  page_url: string | null;
  page_path: string | null;
  referrer: string | null;
  browser: string | null;
  device_type: string | null;
  operating_system: string | null;
  clicked_at: string;
}

export type WhatsAppDateRange = 'today' | '7days' | 'month' | 'all';

export async function recordWhatsAppClick(data: {
  page_url?: string;
  page_path?: string;
  referrer?: string;
  browser?: string;
  device_type?: string;
  operating_system?: string;
}) {
  const supabase = createServerSupabaseClient();
  if (!supabase) return { error: 'Database uninitialized' };

  const { error } = await supabase.from('whatsapp_clicks').insert([
    {
      page_url: data.page_url?.slice(0, 500) || null,
      page_path: data.page_path?.slice(0, 200) || null,
      referrer: data.referrer?.slice(0, 500) || null,
      browser: data.browser?.slice(0, 100) || 'Unknown',
      device_type: data.device_type?.slice(0, 50) || 'Desktop',
      operating_system: data.operating_system?.slice(0, 100) || 'Unknown',
    },
  ]);

  return { error: error?.message || null };
}

export async function getWhatsAppAnalytics(range: WhatsAppDateRange = 'all') {
  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return {
      totalClicks: 0,
      todayClicks: 0,
      monthClicks: 0,
      mostVisitedPage: 'N/A',
      mostUsedDevice: 'N/A',
      trend: [],
      deviceDist: [],
      browserDist: [],
      pageDist: [],
      recentClicks: [],
    };
  }

  // Calculate cutoff timestamp for range
  let query = supabase.from('whatsapp_clicks').select('*');
  const now = new Date();

  if (range === 'today') {
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    query = query.gte('clicked_at', startOfDay);
  } else if (range === '7days') {
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
    query = query.gte('clicked_at', sevenDaysAgo);
  } else if (range === 'month') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
    query = query.gte('clicked_at', startOfMonth);
  }

  const { data, error } = await query.order('clicked_at', { ascending: false });
  if (error || !data) {
    return {
      totalClicks: 0,
      todayClicks: 0,
      monthClicks: 0,
      mostVisitedPage: 'N/A',
      mostUsedDevice: 'N/A',
      trend: [],
      deviceDist: [],
      browserDist: [],
      pageDist: [],
      recentClicks: [],
    };
  }

  // Calculate metrics
  const totalClicks = data.length;
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const startOfCurMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

  let todayClicks = 0;
  let monthClicks = 0;

  const pageCounts: Record<string, number> = {};
  const deviceCounts: Record<string, number> = {};
  const browserCounts: Record<string, number> = {};
  const dateCounts: Record<string, number> = {};

  for (const c of data) {
    const t = new Date(c.clicked_at).getTime();
    if (t >= startOfToday) todayClicks++;
    if (t >= startOfCurMonth) monthClicks++;

    const page = c.page_path || '/';
    pageCounts[page] = (pageCounts[page] || 0) + 1;

    const dev = c.device_type || 'Desktop';
    deviceCounts[dev] = (deviceCounts[dev] || 0) + 1;

    const br = c.browser || 'Other';
    browserCounts[br] = (browserCounts[br] || 0) + 1;

    const dStr = c.clicked_at ? c.clicked_at.slice(0, 10) : 'Unknown';
    dateCounts[dStr] = (dateCounts[dStr] || 0) + 1;
  }

  // Find most frequent page
  let mostVisitedPage = 'N/A';
  let maxPCount = 0;
  for (const [p, cnt] of Object.entries(pageCounts)) {
    if (cnt > maxPCount) {
      maxPCount = cnt;
      mostVisitedPage = p;
    }
  }

  // Find most frequent device
  let mostUsedDevice = 'N/A';
  let maxDCount = 0;
  for (const [d, cnt] of Object.entries(deviceCounts)) {
    if (cnt > maxDCount) {
      maxDCount = cnt;
      mostUsedDevice = d;
    }
  }

  const trend = Object.entries(dateCounts)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-14)
    .map(([date, clicks]) => ({ date, clicks }));

  const deviceDist = Object.entries(deviceCounts).map(([name, value]) => ({ name, value }));
  const browserDist = Object.entries(browserCounts).map(([name, value]) => ({ name, value }));
  const pageDist = Object.entries(pageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([page, clicks]) => ({ page, clicks }));

  return {
    totalClicks,
    todayClicks,
    monthClicks,
    mostVisitedPage,
    mostUsedDevice,
    trend,
    deviceDist,
    browserDist,
    pageDist,
    recentClicks: data.slice(0, 50) as WhatsAppClick[],
  };
}

