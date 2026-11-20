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

const service = SERVICES_DATA.find((s) => s.id === 'software-development') || SERVICES_DATA[0];

export const metadata: Metadata = constructMetadata({
  title: 'Custom Software Development Company UK | Enterprise Software',
  description:
    'Custom software development company in the UK. Grace Technologies engineers bespoke cloud-native SaaS systems, microservice architectures and enterprise software.',
  canonicalPath: '/services/software-development',
  keywords: [
    'Software development company UK',
    'Custom software development UK',
    'Enterprise software solutions',
    'SaaS platform development UK',
    'Cloud software development',
    'Bespoke software development',
  ],
});

export default function SoftwareDevelopmentPage() {
  const serviceSchema = getServiceSchema({
    name: 'Custom Software Development Services UK',
    description:
      'Bespoke cloud software engineering, enterprise SaaS systems, microservice architectures, and mission-critical business automation.',
    url: `${SEO_CONFIG.siteUrl}/services/software-development`,
    serviceType: 'Custom Software Development',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: 'Software Development', url: `${SEO_CONFIG.siteUrl}/services/software-development` },
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
          { label: 'Software Development' },
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
            label="ENTERPRISE CAPABILITIES"
            title="Engineered to Power Mission-Critical Workflows."
            description="Our software solutions integrate cloud-native microservices, containerized deployments, and resilient database architectures."
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
            title="Strategic Advantages for Your Enterprise."
            description="Why industry-leading organisations partner with Grace Technologies to architect their mission-critical software systems."
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
            label="DEVELOPMENT LIFECYCLE"
            title="Our Structured Engineering Methodology."
            description="From system requirements architecture in the UK to high-precision engineering via Ank Square Private Limited (India)."
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
            description="Clear answers regarding our software engineering standards, architecture stack, intellectual property, and SLA governance."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      {/* Regional UK Locations Navigation */}
      <Container size="wide">
        <LocationNavigation
          currentServiceSlug="software-development"
          serviceTitle="Software Development"
        />
      </Container>

      {/* Enquiry CTA */}
      <ServiceCTASection
        title="Ready to Build Your Custom Software Platform?"
        description="Let's discuss your enterprise workflows, architecture specifications, and scalability objectives. Our senior engineering team is ready to deliver."
        primaryCtaText="Request a Software Consultation"
        serviceTitle={service.title}
      />
    </div>
  );
}
