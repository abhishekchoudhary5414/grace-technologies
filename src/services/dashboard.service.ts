import 'server-only';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { getEnquiryStats } from './enquiry.service';
import { getContactStats } from './contact.service';

export async function getDashboardOverview() {
  const supabase = createServerSupabaseClient();
  const defaultRes = {
    totalEnquiries: 0,
    newEnquiries: 0,
    confirmedEnquiries: 0,
    spamEnquiries: 0,
    totalContacts: 0,
    newContacts: 0,
    whatsappClicks: 0,
    enquiryTrends: [],
    statusDistribution: [],
    serviceDistribution: [],
    recentActivity: [],
  };

  if (!supabase) return defaultRes;

  const [enqStats, contStats, whCountRes, recentEnqRes, recentContRes, allEnquiries] = await Promise.all([
    getEnquiryStats(),
    getContactStats(),
    supabase.from('whatsapp_clicks').select('*', { count: 'exact', head: true }),
    supabase.from('enquiries').select('*').order('created_at', { ascending: false }).limit(5),
    supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }).limit(5),
    supabase.from('enquiries').select('created_at, status, service'),
  ]);

  const totalWh = whCountRes.count || 0;

  // Process enquiry trends (last 7 or 14 days)
  const dateCounts: Record<string, number> = {};
  const statusCounts: Record<string, number> = { New: 0, Confirmed: 0, Contacted: 0, Spam: 0 };
  const serviceCounts: Record<string, number> = {};

  if (allEnquiries.data) {
    for (const item of allEnquiries.data) {
      const d = item.created_at ? item.created_at.slice(0, 10) : 'Recent';
      dateCounts[d] = (dateCounts[d] || 0) + 1;

      if (item.status) {
        statusCounts[item.status] = (statusCounts[item.status] || 0) + 1;
      }
      if (item.service) {
        serviceCounts[item.service] = (serviceCounts[item.service] || 0) + 1;
      }
    }
  }

  const enquiryTrends = Object.entries(dateCounts)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-14)
    .map(([date, count]) => ({ date, count }));

  const statusDistribution = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
  const serviceDistribution = Object.entries(serviceCounts).map(([name, value]) => ({ name, value }));

  // Interleave recent activity from enquiries and contacts
  const activityList: Array<{
    id: string;
    name: string;
    service: string;
    source: 'Enquiry' | 'Contact';
    date: string;
    status: string;
  }> = [];

  for (const item of recentEnqRes.data || []) {
    activityList.push({
      id: item.id,
      name: item.name,
      service: item.service,
      source: 'Enquiry',
      date: item.created_at,
      status: item.status,
    });
  }

  for (const item of recentContRes.data || []) {
    activityList.push({
      id: item.id,
      name: item.name,
      service: item.service,
      source: 'Contact',
      date: item.created_at,
      status: item.status,
    });
  }

  activityList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    totalEnquiries: enqStats.total,
    newEnquiries: enqStats.new,
    confirmedEnquiries: enqStats.confirmed,
    spamEnquiries: enqStats.spam,
    totalContacts: contStats.total,
    newContacts: contStats.new,
    whatsappClicks: totalWh,
    enquiryTrends,
    statusDistribution,
    serviceDistribution,
    recentActivity: activityList.slice(0, 10),
  };
}

