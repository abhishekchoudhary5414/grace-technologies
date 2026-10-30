import React from 'react';
import { getDashboardOverview } from '@/services/dashboard.service';
import { AdminLayout } from '@/components/admin/layout/AdminLayout/AdminLayout';
import DashboardClient from '@/components/admin/dashboard/DashboardClient';

export const instant = false;

export default async function AdminDashboardPage() {
  const data = await getDashboardOverview();

  return (
    <AdminLayout activePath="/admin/dashboard" title="Executive Overview">
      <DashboardClient data={data} />
    </AdminLayout>
  );
}
