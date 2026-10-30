'use client';

import React from 'react';
import styles from './DashboardClient.module.css';
import { StatCard } from '@/components/admin/common/StatCard/StatCard';
import { DashboardCharts } from './DashboardCharts';
import { RecentActivityTable } from './RecentActivityTable';

// MUI Icons
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';

interface DashboardClientProps {
  data: {
    totalEnquiries: number;
    newEnquiries: number;
    confirmedEnquiries: number;
    spamEnquiries: number;
    totalContacts: number;
    newContacts: number;
    whatsappClicks: number;
    enquiryTrends: Array<{ date: string; count: number }>;
    statusDistribution: Array<{ name: string; value: number }>;
    serviceDistribution: Array<{ name: string; value: number }>;
    recentActivity: Array<{
      id: string;
      name: string;
      service: string;
      source: 'Enquiry' | 'Contact';
      date: string;
      status: string;
    }>;
  };
}

export default function DashboardClient({ data }: DashboardClientProps) {
  return (
    <div className={styles.container}>
      {/* Metric Stat Cards Grid */}
      <div className={styles.statsGrid}>
        <StatCard
          label="Total Enquiries"
          value={data.totalEnquiries}
          icon={<QuestionAnswerIcon sx={{ fontSize: 22 }} />}
          subtext="Quick popup leads"
        />
        <StatCard
          label="New Inbound"
          value={data.newEnquiries}
          icon={<FiberNewIcon sx={{ fontSize: 22 }} />}
          subtext="Awaiting response"
        />
        <StatCard
          label="Contact Submissions"
          value={data.totalContacts}
          icon={<ContactMailIcon sx={{ fontSize: 22 }} />}
          subtext="Detailed contact forms"
        />
        <StatCard
          label="Confirmed Deals"
          value={data.confirmedEnquiries}
          icon={<CheckCircleIcon sx={{ fontSize: 22 }} />}
          subtext="Qualified pipeline"
        />
        <StatCard
          label="WhatsApp Clicks"
          value={data.whatsappClicks}
          icon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
          subtext="Direct chat engagements"
        />
        <StatCard
          label="Flagged as Spam"
          value={data.spamEnquiries}
          icon={<DangerousIcon sx={{ fontSize: 22 }} />}
          subtext="Filtered inquiries"
        />
      </div>

      {/* Recharts Analytics Section */}
      <DashboardCharts
        enquiryTrends={data.enquiryTrends}
        statusDistribution={data.statusDistribution}
        serviceDistribution={data.serviceDistribution}
      />

      {/* Real-time Activity Feed */}
      <RecentActivityTable activity={data.recentActivity} />
    </div>
  );
}

