'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import styles from './ServiceDetailHero.module.css';

interface ServiceDetailHeroProps {
  number: string;
  tagline: string;
  headline: string;
  description: string;
}

export default function ServiceDetailHero({
  number,
  tagline,
  headline,
  description,
}: ServiceDetailHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.gridOverlay} />
      <div className={styles.radialGlow} />

      <Container size="wide" className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badgeRow}>
            <span className={styles.badge}>SERVICE {number}</span>
            <span className={styles.tagline}>{tagline}</span>
          </div>

          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <Button href="/contact" variant="primary" size="lg" icon>
              Consult On This Service
            </Button>
            <Button href="#capabilities" variant="outline" size="lg">
              View Capabilities
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

