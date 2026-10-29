'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import ServiceVisual from '@/components/sections/ServicesOverview/ServiceVisual';
import styles from './ServiceDetailHero.module.css';

interface ServiceDetailHeroProps {
  serviceId: string;
  number: string;
  tagline: string;
  headline: string;
  description: string;
}

export default function ServiceDetailHero({
  serviceId,
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
        <div className={styles.heroGrid}>
          {/* LEFT: Context, Badges, Title, Supporting Copy and CTAs */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.badgeRow}>
              <span className={styles.badge}>CAPABILITY {number}</span>
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

          {/* RIGHT: Dedicated High-Tech Interactive Visual */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ServiceVisual serviceId={serviceId} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
