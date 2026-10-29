import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[3]; // Digital Marketing

export const metadata: Metadata = {
  title: 'Digital Marketing | Grace Technologies',
  description:
    'Make Your Business Impossible to Ignore. Search engine optimisation, local SEO, social media marketing, content marketing, paid advertising, and conversion rate optimisation.',
};

export default function DigitalMarketingPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <ServiceDetailHero
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

    </div>
  );
}

