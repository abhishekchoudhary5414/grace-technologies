import React from 'react';
import { AdminLayout } from '@/components/admin/layout/AdminLayout/AdminLayout';
import ContactsClient from '@/components/admin/contacts/ContactsClient';

export default function AdminContactsPage() {
  return (
    <AdminLayout activePath="/admin/contacts" title="Contact Form Submissions">
      <ContactsClient />
    </AdminLayout>
  );
}
