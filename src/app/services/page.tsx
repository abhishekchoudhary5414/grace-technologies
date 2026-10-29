import React from 'react';
import type { Metadata } from 'next';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import CTASection from '@/components/common/CTASection/CTASection';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Services & Capabilities | Grace Technologies',
  description:
    'Explore the four core capabilities of Grace Technologies: Website Development, Merchant Account Management, AI Automation, and Digital Marketing.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Alternating Services Showcase Matching the Homepage */}
      <ServicesOverview />

      {/* Conversion CTA */}
      <CTASection
        title="Ready to Transform Your Digital Infrastructure?"
        description="Speak with our strategic consulting team in the UK and discover how our collaborative approach accelerates delivery."
        primaryCtaText="Discuss Your Project"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaHref="/projects"
      />
    </div>
  );
}
