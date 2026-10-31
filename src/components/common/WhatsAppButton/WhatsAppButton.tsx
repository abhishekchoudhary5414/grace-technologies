'use client';

import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { trackAndOpenWhatsApp } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackAndOpenWhatsApp(
      'https://wa.me/447407268125?text=Hello%20*Grace%20Technologies*%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.'
    );
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

