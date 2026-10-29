import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Grace Technologies',
  description: 'Terms and Conditions governing the use of Grace Technologies services and web platforms.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <div className={styles.content}>
          <span className={styles.badge}>TERMS OF ENGAGEMENT</span>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: October 2026</p>

          <section className={styles.legalSection}>
            <h2>1. Introduction & Acceptance</h2>
            <p>
              By accessing the Grace Technologies website or engaging our consultancy services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use immediately.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>2. Nature of Services & Partnership</h2>
            <p>
              Grace Technologies is a United Kingdom business and technology consultancy strategically partnered with Ank Square Private Limited, India. Both companies are distinct, independent legal entities operating collaboratively under contract to deliver client solutions.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>3. Merchant Account Advisory Disclaimer</h2>
            <p>
              Grace Technologies provides merchant account onboarding support, document preparation, and operational coordination. We are neither a bank, credit institution, nor payment processor. We do not provide financial or banking services and do not warrant or guarantee merchant account approvals, which remain solely at the discretion of independent acquiring banks.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>4. Intellectual Property</h2>
            <p>
              All website content, brand assets, typography, and original designs are the intellectual property of Grace Technologies. Custom software and source code produced for clients will be assigned in accordance with the specific provisions outlined in each project&apos;s Master Services Agreement (MSA).
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>5. Governing Law</h2>
            <p>
              These Terms and Conditions and any disputes arising out of or related to our services are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

