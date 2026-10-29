'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Container/Container';
import Button from '../Button/Button';
import styles from './CTASection.module.css';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
}

export default function CTASection({
  title = 'Your Next Move Starts With a Conversation.',
  description = "Let's discuss your ideas, challenges and opportunities. Together, we can build something meaningful.",
  primaryCtaText = 'Start a Conversation',
  primaryCtaHref = '/contact',
  secondaryCtaText,
  secondaryCtaHref,
  badge = 'ELEVATE YOUR BUSINESS',
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGrid} />
      <div className={styles.glow} />
      <Container size="narrow">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          {badge && <span className={styles.badge}>{badge}</span>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Button href={primaryCtaHref} variant="primary" size="lg" icon>
              {primaryCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="outline" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

