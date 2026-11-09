'use client';

import { openEnquiryModal } from '@/utils/modal';

export default function EnquiryNowButton({ serviceType }: { serviceType: string }) {
  return (
    <button
      type="button"
      onClick={() => openEnquiryModal(serviceType)}
      style={{
        appearance: 'none',
        border: 'none',
        borderRadius: '999px',
        background: 'var(--color-accent)',
        color: 'var(--color-primary)',
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        padding: '0.9rem 1.5rem',
        cursor: 'pointer',
        boxShadow: '0 18px 36px rgba(36, 124, 193, 0.2)',
      }}
    >
      Enquiry Now
    </button>
  );
}
