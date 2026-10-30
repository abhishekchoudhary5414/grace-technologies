import React from 'react';
import { AdminLayout } from '@/components/admin/layout/AdminLayout/AdminLayout';
import EnquiriesClient from '@/components/admin/enquiries/EnquiriesClient';

export default function AdminEnquiriesPage() {
  return (
    <AdminLayout activePath="/admin/enquiries" title="Enquiry Submissions">
      <EnquiriesClient />
    </AdminLayout>
  );
}
