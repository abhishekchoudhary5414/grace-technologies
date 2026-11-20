'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { trackAndOpenWhatsApp } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    let customText = 'Hello *Grace Technologies*, I would like to enquire about your services.';

    if (pathname) {
      if (pathname.includes('/services/website-development') || pathname.includes('/website-development')) {
        customText = 'Hello *Grace Technologies*, I am interested in your Website Development services.';
      } else if (pathname.includes('/services/ai-automation') || pathname.includes('/ai-automation')) {
        customText = 'Hello *Grace Technologies*, I am interested in your AI Automation & Workflow solutions.';
      } else if (pathname.includes('/services/merchant-account-management') || pathname.includes('/merchant-account-management')) {
        customText = 'Hello *Grace Technologies*, I need assistance with Merchant Account Management.';
      } else if (pathname.includes('/services/digital-marketing') || pathname.includes('/digital-marketing')) {
        customText = 'Hello *Grace Technologies*, I am looking for Digital Marketing & SEO/GEO growth.';
      } else if (pathname.includes('/partnership')) {
        customText = 'Hello *Grace Technologies*, I would like to discuss a Strategic Partnership.';
      }
    }

    const whatsappUrl = `https://wa.me/447440007332?text=${encodeURIComponent(customText)}`;
    trackAndOpenWhatsApp(whatsappUrl);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="whatsappFloat"
      aria-label="Chat with Grace Technologies on WhatsApp"
    >
      <WhatsAppIcon fontSize="large" />
    </button>
  );
}

