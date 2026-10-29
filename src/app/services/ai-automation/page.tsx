import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[2]; // AI Automation

export const metadata: Metadata = {
  title: 'AI Automation | Grace Technologies',
  description:
    'Turn Repetitive Work Into Intelligent Workflows. Business process automation, AI-powered customer support, document processing, data automation, and custom enterprise AI solutions.',
};

export default function AiAutomationPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <ServiceDetailHero
        number={service.number}
        tagline={service.tagline}
        headline={service.headline}
        description={service.description}
      />

      {/* Interactive Workflow Visual Section */}
      <section style={{ backgroundColor: 'rgba(20, 43, 69, 0.4)', padding: '3.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Container size="wide">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', background: 'var(--color-secondary)', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              INTELLIGENT PIPELINE ARCHITECTURE
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-accent)', marginTop: '1rem' }}>
              From Raw Unstructured Data to Autonomous Execution
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            <div style={{ background: 'var(--color-secondary)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', fontWeight: 700 }}>01 // INGESTION</span>
              <h4 style={{ color: 'var(--color-accent)', fontSize: '1.1rem', margin: '0.5rem 0' }}>Multi-Modal Inputs</h4>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>PDFs, invoices, emails, webhook payloads, CRM events and database logs.</p>
            </div>
            <div style={{ background: 'var(--color-secondary)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', fontWeight: 700 }}>02 // PARSING & EMBEDDING</span>
              <h4 style={{ color: 'var(--color-accent)', fontSize: '1.1rem', margin: '0.5rem 0' }}>Semantic Vectorization</h4>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Zero-data-retention embedding models index and structure unstructured business text.</p>
            </div>
            <div style={{ background: 'var(--color-secondary)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', fontWeight: 700 }}>03 // REASONING & VALIDATION</span>
              <h4 style={{ color: 'var(--color-accent)', fontSize: '1.1rem', margin: '0.5rem 0' }}>Agentic Logic</h4>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Configured business rules evaluate confidence thresholds with human oversight gates.</p>
            </div>
            <div style={{ background: 'var(--color-secondary)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', fontWeight: 700 }}>04 // ACTION</span>
              <h4 style={{ color: 'var(--color-accent)', fontSize: '1.1rem', margin: '0.5rem 0' }}>Automated Dispatch</h4>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>Instant database updates, ERP transactions, customer notifications and reports.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="AUTOMATION ENGINE"
            title="Practical AI Built for Enterprise Velocity."
            description="We engineer reliable autonomous agents, data pipelines, and workflow connectors that run securely 24/7."
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
            label="EFFICIENCY GAINS"
            title="Measurable Multipliers for Operational Growth."
            description="Transform resource-intensive human bottlenecks into streamlined automated operations."
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
            label="IMPLEMENTATION LIFECYCLE"
            title="How We Deploy Enterprise AI Systems."
            description="A secure four-stage roadmap guaranteeing data confidentiality, stability, and staff adoption."
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
            label="SECURITY & COMPLIANCE"
            title="AI Automation FAQs."
            description="Clear answers regarding data governance, proprietary privacy, and technical integrations."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

    </div>
  );
}

