import React from 'react';
import { AdminLayout } from '@/components/admin/layout/AdminLayout/AdminLayout';
import WhatsAppClient from '@/components/admin/whatsapp/WhatsAppClient';

export default function AdminWhatsAppPage() {
  return (
    <AdminLayout activePath="/admin/whatsapp" title="WhatsApp Analytics">
      <WhatsAppClient />
    </AdminLayout>
  );
}
