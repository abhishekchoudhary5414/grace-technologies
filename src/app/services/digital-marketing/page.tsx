import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[3]; // Digital Marketing

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing & SEO Services UK',
  description:
    'Help your UK business stand out with digital marketing from Grace Technologies, including SEO, content, paid campaigns and conversion optimisation.',
  canonicalPath: '/services/digital-marketing',
  keywords: [
    'Digital marketing agency UK',
    'SEO services UK',
    'Search engine optimisation',
    'Digital marketing for SMEs',
    'Organic growth strategy',
    'Online brand visibility',
  ],
});

export default function DigitalMarketingPage() {
  const serviceSchema = getServiceSchema({
    name: 'Digital Marketing & Search Engine Optimisation Services',
    description:
      'Omnichannel search engine optimisation, Generative Engine Optimisation (GEO), content strategy, paid acquisition, and conversion rate optimisation.',
    url: `${SEO_CONFIG.siteUrl}/services/digital-marketing`,
    serviceType: 'Digital Marketing & SEO',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: 'Digital Marketing', url: `${SEO_CONFIG.siteUrl}/services/digital-marketing` },
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
          { label: 'Digital Marketing' },
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

      {/* Capabilities Section */}
      <section id="capabilities" className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="GROWTH ARSENAL"
            title="Precision Marketing Engineered for ROI."
            description="We discard vanity metrics and focus relentlessly on acquiring qualified commercial opportunities through organic search and paid channels."
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
            label="COMMERCIAL RESULTS"
            title="Why Ambitious Brands Trust Grace."
            description="Achieve predictable revenue expansion and establish unmistakable authority in your industry."
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
            label="STRATEGY FRAMEWORK"
            title="Our Performance Marketing Lifecycle."
            description="A methodical process engineered to audit, execute, and continuously amplify acquisition channels."
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
            label="CLARITY & TIMELINES"
            title="Digital Marketing FAQs."
            description="Everything you need to know about our growth retainers, channel management, and reporting."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      {/* Enquiry CTA */}
      <ServiceCTASection
        title="Ready to Scale Your Inbound Pipeline?"
        description="Connect with our digital marketing specialists to evaluate your competitive positioning and organic growth opportunities."
        primaryCtaText="Request a Marketing Audit"
        serviceTitle={service.title}
      />
    </div>
  );
}
