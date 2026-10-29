import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[0]; // Website Development

export const metadata: Metadata = {
  title: 'Website Development | Grace Technologies',
  description:
    'Digital Experiences Designed to Make an Impact. Bespoke business websites, e-commerce, custom web applications, responsive engineering, and technical SEO foundations.',
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className={styles.page}>
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
            label="FULL-STACK CAPABILITIES"
            title="Engineered to Perform at Scale."
            description="Our web solutions integrate cutting-edge Next.js architecture, TypeScript type safety, and clean semantic structures."
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
            title="Strategic Advantages for Your Brand."
            description="Why industry-leading organisations trust Grace Technologies with their core digital presence."
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
            label="DELIVERY WORKFLOW"
            title="Our Structured Development Lifecycle."
            description="From requirements architecture in the UK to high-precision engineering via Ank Square Private Limited (India)."
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
            description="Clear answers regarding our web development engagements, intellectual property, and technical stack."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      {/* Enquiry CTA */}
      <ServiceCTASection
        title="Ready to Build Your Flagship Web Experience?"
        description="Let's discuss your technical specifications and business targets. Our engineering team is ready to deliver."
        primaryCtaText="Request a Web Consultation"
        serviceTitle={service.title}
      />
    </div>
  );
}
