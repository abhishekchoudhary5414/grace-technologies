'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import EnquiryModal from '@/components/common/EnquiryModal/EnquiryModal';
import WhatsAppButton from '@/components/common/WhatsAppButton/WhatsAppButton';

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return (
      <main id="main-content" style={{ flex: '1 0 auto', width: '100%', minHeight: '100vh' }}>
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      {/* Automatic Welcome Lead Enquiry Popup */}
      <EnquiryModal />
    </>
  );
}

