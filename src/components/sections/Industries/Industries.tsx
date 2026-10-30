'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import { INDUSTRIES_DATA } from '@/config/site';
import styles from './Industries.module.css';

export default function Industries() {
  return (
    <section className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="SECTOR EXPERTISE"
          title="Solutions Across Business Landscapes."
          description="We engineer tailored digital, payments, and automation platforms for demanding business environments."
          align="left"
        />

        <div className={styles.grid}>
          {INDUSTRIES_DATA.map((ind, index) => (
            <motion.div
              key={ind.title}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.statsBadge}>{ind.stats}</span>
              </div>
              <h3 className={styles.industryTitle}>{ind.title}</h3>
              <p className={styles.industryDesc}>{ind.description}</p>
              <div className={styles.cardAccent} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

