import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[1]; // Merchant Account Management

export const metadata: Metadata = constructMetadata({
  title: 'Merchant Account Management Services',
  description:
    'Get UK merchant account management support from Grace Technologies, from onboarding and account setup to product catalogues and payment operations.',
  canonicalPath: '/services/merchant-account-management',
  keywords: [
    'Merchant account management services',
    'Merchant account support',
    'Merchant onboarding assistance',
    'Payment operations management',
    'Payment integration support',
    'E-commerce payment management',
  ],
});

export default function MerchantAccountManagementPage() {
  const serviceSchema = getServiceSchema({
    name: 'Merchant Account Management & Operational Support',
    description:
      'Strategic onboarding assistance, multi-currency payment operations advisory, product catalog management, and payment gateway coordination.',
    url: `${SEO_CONFIG.siteUrl}/services/merchant-account-management`,
    serviceType: 'Merchant Operations Management',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: 'Merchant Account Management', url: `${SEO_CONFIG.siteUrl}/services/merchant-account-management` },
  ]);

  const faqSchema = getFaqSchema(
    service.faqs ? service.faqs.map((f) => ({ question: f.question, answer: f.answer })) : []
  );

  return (
    <div className={styles.page}>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Merchant Account Management' },
        ]}
        backHref="/services"
        backLabel="Back to Services"
      />

      {/* Hero with Visual */}
      <ServiceDetailHero
        serviceId={service.id}
        serviceTitle={service.title}
        number={service.number}
        tagline={service.tagline}
        headline={service.headline}
        description={service.description}
      />

      {/* Mandatory Advisory Notice / Regulatory Disclaimer */}
      <div style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-glass-medium)', padding: '1.25rem 0' }}>
        <Container size="wide">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <InfoOutlinedIcon style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-primary)', margin: 0 }}>
              <strong>Advisory & Management Disclaimer:</strong> Grace Technologies provides strategic consulting, onboarding guidance, product catalog listing management, and merchant account administrative coordination. We are not a bank, payment processor, or regulated financial institution, and do not guarantee merchant account approvals. All approval determinations remain solely with independent acquiring institutions.
            </p>
          </div>
        </Container>
      </div>

      {/* Capabilities Section */}
      <section id="capabilities" className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="TURNKEY OPERATIONS"
            title="Comprehensive Merchant Store & Catalog Solutions."
            description="From initial merchant portal registration to bulk product catalog taxonomy, asset ingestion, and multi-channel inventory synchronization."
            align="left"
          />

          <div className={styles.capabilitiesGrid}>
            {service.capabilities.map((cap) => (
              <div key={cap.title} className={styles.capCard}>
                <div className={styles.capHeader}>
                  <div className={styles.capIconBullet} />
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                </div>
                <p className={styles.capDesc}>{cap.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <Container size="wide">
          <SectionHeading
            label="COMMERCIAL ADVANTAGES"
            title="Accelerate Store Launch & Maximize Sales Velocity."
            description="Eliminate tedious administrative backlogs and launch professionally formatted product catalogs ready to convert."
            align="left"
          />

          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, i) => (
              <div key={benefit.title} className={styles.benefitCard}>
                <span className={styles.benefitIndex}>0{i + 1}</span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="DEPLOYMENT WORKFLOW"
            title="Our 4-Stage Store Management Lifecycle."
            description="A structured roadmap designed to set up, populate, verify, and scale your merchant digital presence."
            align="center"
          />

          <div className={styles.processGrid}>
            {service.process.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className={styles.faqSection}>
        <Container size="narrow">
          <SectionHeading
            label="FREQUENT QUESTIONS"
            title="Merchant Account Management FAQs."
            description="Everything you need to know about our account creation, product listing, and store management services."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      {/* Enquiry CTA */}
      <ServiceCTASection
        title="Ready to Launch or Optimize Your Merchant Operations?"
        description="Speak with our UK advisory team today to discuss your store setup, catalog taxonomy, and platform onboarding."
        primaryCtaText="Consult With Our Team"
        serviceTitle={service.title}
      />
    </div>
  );
}
