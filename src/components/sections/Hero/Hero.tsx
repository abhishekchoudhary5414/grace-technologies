'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import HeroVisual from './HeroVisual/HeroVisual';
import { openEnquiryModal } from '@/utils/modal';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.85], [0, 60]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('company-intro');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Background architectural grid and ambient particles */}
      <div className={styles.gridOverlay} />
      <div className={styles.radialBackdrop} />

      <Container size="wide" className={styles.container}>
        <motion.div style={{ opacity, y }} className={styles.heroGrid}>
          {/* LEFT SIDE: Brand Intro, Headline, Description, CTAs & Metrics */}
          <div className={styles.leftCol}>
            <motion.div
              className={styles.badgeWrap}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className={styles.badgePulse} />
              <span className={styles.badgeText}>
                UK BUSINESS | GLOBAL TECHNOLOGY PARTNERSHIP
              </span>
            </motion.div>

            <motion.h1
              className={styles.headline}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Technology That Moves{' '}
              <span className={styles.highlightText}>Business Forward.</span>
            </motion.h1>

            <motion.p
              className={styles.supportingText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Empowering ambitious businesses through digital experiences, intelligent automation, payment solutions and strategic technology services.
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button href="/services" variant="primary" size="lg" icon>
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openEnquiryModal()}
              >
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* Interactive trust metrics strip */}
            <motion.div
              className={styles.metricStrip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className={styles.metricItem}>
                <span className={styles.metricNum}>UK & India</span>
                <span className={styles.metricLabel}>Strategic Bilateral Delivery</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricNum}>4 Pillars</span>
                <span className={styles.metricLabel}>Web, Merchant, AI & Growth</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricNum}>Enterprise</span>
                <span className={styles.metricLabel}>Engineering & Governance</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Interactive 4-Platform Connected Technology Visual */}
          <div className={styles.rightCol}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </motion.div>

      
      </Container>
    </section>
  );
}
