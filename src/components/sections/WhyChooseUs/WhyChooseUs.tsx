'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MemoryIcon from '@mui/icons-material/Memory';
import HubIcon from '@mui/icons-material/Hub';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PublicIcon from '@mui/icons-material/Public';
import styles from './WhyChooseUs.module.css';

const strengths = [
  {
    icon: BusinessCenterIcon,
    number: '01',
    title: 'Business-Focused Solutions',
    description: 'We prioritize commercial objectives, operational efficiency, and tangible ROI rather than technology for its own sake.',
  },
  {
    icon: MemoryIcon,
    number: '02',
    title: 'Modern Technology',
    description: 'Built on Next.js, TypeScript, cloud microservices, and leading enterprise AI frameworks with zero technical debt.',
  },
  {
    icon: HubIcon,
    number: '03',
    title: 'Scalable Systems',
    description: 'Architectures engineered to expand smoothly from early adoption to high-load international transaction volumes.',
  },
  {
    icon: PsychologyIcon,
    number: '04',
    title: 'Intelligent Automation',
    description: 'Practical automation that orchestrates multi-system processes, removes repetitive manual toil, and elevates accuracy.',
  },
  {
    icon: ViewQuiltIcon,
    number: '05',
    title: 'Integrated Digital Capabilities',
    description: 'Unified cross-functional capability covering web engineering, payment operations, data automation, and digital reach.',
  },
  {
    icon: PublicIcon,
    number: '06',
    title: 'International Collaboration',
    description: 'Bilateral excellence combining British corporate advisory and relationship management with Indian engineering prowess.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="THE GRACE ADVANTAGE"
          title="Technology With a Business-First Mindset."
          description="We bridge the gap between high-level business strategy and rigorous engineering execution."
          align="left"
        />

        <div className={styles.editorialGrid}>
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                className={styles.editorialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconCircle}>
                    <Icon className={styles.icon} />
                  </div>
                  <span className={styles.cardNumber}>{item.number}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <div className={styles.bottomBorder} />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

