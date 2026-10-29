'use client';

import React from 'react';
import CTASection from '@/components/common/CTASection/CTASection';
import { openEnquiryModal } from '@/utils/modal';

interface ServiceCTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  serviceTitle?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
}

export default function ServiceCTASection({
  title = 'Ready to Transform Your Digital Infrastructure?',
  description = 'Speak with our strategic consulting team in the UK and discover how our collaborative approach accelerates delivery.',
  primaryCtaText = 'Discuss Your Project',
  serviceTitle,
  secondaryCtaText = 'Explore Case Studies',
  secondaryCtaHref = '/projects',
  badge = 'ELEVATE YOUR BUSINESS',
}: ServiceCTASectionProps) {
  return (
    <CTASection
      badge={badge}
      title={title}
      description={description}
      primaryCtaText={primaryCtaText}
      onPrimaryCtaClick={() => openEnquiryModal(serviceTitle)}
      secondaryCtaText={secondaryCtaText}
      secondaryCtaHref={secondaryCtaHref}
    />
  );
}

