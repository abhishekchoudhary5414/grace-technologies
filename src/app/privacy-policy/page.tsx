import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Grace Technologies',
  description: 'Privacy Policy and data governance principles of Grace Technologies.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <Breadcrumb
        items={[{ label: 'Privacy Policy' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      <Container size="narrow">
        <div className={styles.content}>
          <span className={styles.badge}>LEGAL GOVERNANCE</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: October 2026</p>

          <section className={styles.legalSection}>
            <h2>1. Commitment to Data Privacy</h2>
            <p>
              Grace Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to safeguarding the personal information and corporate data of visitors, clients, and partners. This Privacy Policy details our standards regarding the collection, processing, and storage of data in compliance with the UK Data Protection Act 2018 and General Data Protection Regulation (UK GDPR).
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide when submitting consultation inquiries via our website or during commercial discussions:
            </p>
            <ul>
              <li>Identity and contact details (e.g. name, business email, corporate phone number, company name).</li>
              <li>Project requirements, operational overviews, and budgetary parameters.</li>
              <li>Technical usage telemetry (e.g. IP address, browser type, anonymous traffic analytics).</li>
            </ul>
          </section>

          <section className={styles.legalSection}>
            <h2>3. Cross-Border Collaboration and Data Processing</h2>
            <p>
              In our strategic partnership with Ank Square Private Limited (India), technical and project execution data may be accessed by engineering teams for the purposes of development, testing, and system delivery. All cross-border data transfers are governed by strict International Data Transfer Agreements (IDTAs) and standard contractual clauses guaranteeing confidentiality and security.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>4. AI and Confidentiality Safeguards</h2>
            <p>
              We adhere to strict zero-data-retention agreements when configuring AI automation solutions. Client proprietary datasets, internal documents, and enterprise knowledge bases are never utilized to train public machine learning models.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>5. Your Rights</h2>
            <p>
              Under UK data protection law, you possess rights to request access to your data, rectification of inaccurate records, erasure, or restriction of processing. For any data protection inquiries, please submit an enquiry through our Contact portal.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

