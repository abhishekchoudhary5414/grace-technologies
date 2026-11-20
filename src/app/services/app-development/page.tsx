import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import LocationNavigation from '@/components/sections/LocationNavigation/LocationNavigation';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA.find((s) => s.id === 'app-development') || SERVICES_DATA[0];

export const metadata: Metadata = constructMetadata({
  title: 'App Development Company UK | Mobile App Development',
  description:
    'Custom mobile app development in the UK. Grace Technologies designs and develops bespoke iOS, Android, Flutter and React Native mobile applications built to scale.',
  canonicalPath: '/services/app-development',
  keywords: [
    'App development company UK',
    'Mobile app development company UK',
    'iOS app development UK',
    'Android app development UK',
    'Flutter app development agency',
    'React Native development services',
    'Custom mobile applications',
  ],
});

export default function AppDevelopmentPage() {
  const serviceSchema = getServiceSchema({
    name: 'App Development Services UK',
    description:
      'Native iOS & Android development, cross-platform Flutter and React Native apps, scalable mobile APIs, and App Store deployment.',
    url: `${SEO_CONFIG.siteUrl}/services/app-development`,
    serviceType: 'Mobile App Development',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: 'App Development', url: `${SEO_CONFIG.siteUrl}/services/app-development` },
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
          { label: 'App Development' },
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
            label="MOBILE CAPABILITIES"
            title="Engineered for Unmatched Native Performance."
            description="Our mobile applications combine fluid native touch experiences, resilient offline data sync, and enterprise security standards."
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
            label="MEASURABLE IMPACT"
            title="Strategic Advantages for Your Mobile Presence."
            description="Why fast-growing UK and international brands trust Grace Technologies to architect their flagship mobile platforms."
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
            label="MOBILE DELIVERY LIFECYCLE"
            title="Our Structured Mobile Engineering Workflow."
            description="From product requirements in the UK to high-precision engineering via Ank Square Private Limited (India)."
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
            label="QUESTIONS & CLARIFICATIONS"
            title="Frequently Asked Questions."
            description="Clear answers regarding our mobile development technologies, platform stores, source code rights, and engagement models."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      {/* Regional UK Locations Navigation */}
      <Container size="wide">
        <LocationNavigation
          currentServiceSlug="app-development"
          serviceTitle="App Development"
        />
      </Container>

      {/* Enquiry CTA */}
      <ServiceCTASection
        title="Ready to Build Your Flagship Mobile App?"
        description="Let's discuss your technical requirements, target platforms, and launch timelines. Our mobile engineering team is ready to deliver."
        primaryCtaText="Request an App Consultation"
        serviceTitle={service.title}
      />
    </div>
  );
}
