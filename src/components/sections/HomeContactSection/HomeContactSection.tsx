'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ContactForm from '@/components/sections/ContactForm/ContactForm';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './HomeContactSection.module.css';

export default function HomeContactSection() {
  return (
    <section id="contact-section" className={styles.section}>
      <Container size="wide">
        <div className={styles.layout}>
          {/* Left Column: Context, Value Proposition & Reassurance */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.badge}>EXECUTIVE CONSULTATION</span>
            <h2 className={styles.heading}>
                Start Your Strategic Digital Transformation
            </h2>

<p className={styles.subheading}>
  Whether you need scalable Next.js engineering, merchant account advisory,
  AI automation pipelines, or data-driven digital growth, our senior team is
  ready to help.
</p>

<div className={styles.benefitsList}>
  <div className={styles.benefitItem}>
    <div className={styles.iconCircle}>
      <CheckCircleIcon fontSize="small" />
    </div>
    <div>
      <h4 className={styles.benefitTitle}>
        Direct Senior Leadership Access
      </h4>
      <p className={styles.benefitDesc}>
        Consult directly with strategic advisors based in the UK.
      </p>
    </div>
  </div>

  <div className={styles.benefitItem}>
    <div className={styles.iconCircle}>
      <SecurityOutlinedIcon fontSize="small" />
    </div>
    <div>
      <h4 className={styles.benefitTitle}>
        Confidentiality & Rigour
      </h4>
      <p className={styles.benefitDesc}>
        Commercial NDA protection and strict adherence to UK GDPR standards.
      </p>
    </div>
  </div>

  <div className={styles.benefitItem}>
    <div className={styles.iconCircle}>
      <EmailOutlinedIcon fontSize="small" />
    </div>
    <div>
      <h4 className={styles.benefitTitle}>
        Prompt Technical Evaluation
      </h4>
      <p className={styles.benefitDesc}>
        Receive a comprehensive response and feasibility review within 24
        business hours.
      </p>
    </div>
  </div>
</div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
