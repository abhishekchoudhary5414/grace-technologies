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
    description: 'We focus on commercial outcomes, operational efficiency, and measurable ROI, ensuring technology supports real business priorities.',
  },
    {
  icon:  MemoryIcon,
  number: '02',
  title: 'Modern Technology Stack',
  description:
    'Built on Next.js, TypeScript, cloud-native microservices and leading enterprise AI frameworks—with zero technical debt.',
},
{
  icon: HubIcon,
  number: '03',
  title: 'Scalable Systems',
  description:
    'Architectures designed to scale seamlessly from early adoption to high-volume international transactions.',
},
{
  icon: PsychologyIcon,
  number: '04',
  title: 'Intelligent Automation',
  description:
    'Practical automation that orchestrates multi-system workflows, eliminates repetitive manual tasks and improves accuracy.',
},
{
  icon: ViewQuiltIcon,
  number: '05',
  title: 'Integrated Digital Capabilities',
  description:
    'A unified, cross-functional capability spanning web engineering, payment operations, data automation and digital growth.',
},
{
  icon: PublicIcon,
  number: '06',
  title: 'Global Collaboration',
  description:
    'A powerful partnership combining British corporate advisory and relationship management with world-class Indian engineering expertise.',
},
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="THE GRACE ADVANTAGE"
          title="Technology With a Business-First Mindset."
          description="We connect business strategy with precise engineering execution to deliver technology that creates real commercial value."
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

