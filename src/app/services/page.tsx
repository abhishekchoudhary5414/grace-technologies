import React from 'react';
import type { Metadata } from 'next';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import styles from './services.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Technology & Digital Services',
  description:
    'Explore website development, merchant account management, AI automation and digital marketing from Grace Technologies in the UK, with Ank Square in India.',
  canonicalPath: '/services',
  keywords: [
    'Business technology services UK',
    'Technology solutions UK',
    'Custom software development',
    'Enterprise digital services',
    'AI automation solutions',
  ],
});

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Services' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Alternating Services Showcase Matching the Homepage */}
      <ServicesOverview headingLevel="h1" />

      {/* Conversion CTA */}
      <ServiceCTASection
        title="Ready to Transform Your Digital Infrastructure?"
        description="Speak with our strategic consulting team in the UK and discover how our collaborative approach accelerates delivery."
        primaryCtaText="Discuss Your Project"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaHref="/projects"
      />
    </div>
  );
}
