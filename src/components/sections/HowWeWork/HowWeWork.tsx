'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import { HOW_WE_WORK_STEPS } from '@/config/site';
import styles from './HowWeWork.module.css';

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="OUR METHODOLOGY"
          title="From First Conversation to Lasting Impact."
          description="A disciplined, transparent delivery methodology structured for velocity, precision, and enduring commercial outcomes."
          align="center"
        />

        <div className={styles.timelineWrapper}>
          {/* Desktop Connecting Line */}
          <div className={styles.progressLine} />

          <div className={styles.stepsGrid}>
            {HOW_WE_WORK_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.markerContainer}>
                  <div className={styles.markerNode}>
                    <span className={styles.markerNumber}>{step.number}</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

