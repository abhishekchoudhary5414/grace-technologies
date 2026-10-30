'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
  return (
    <section id="company-intro" className={styles.section}>
      <Container size="wide">
        <div className={styles.grid}>
          {/* Left Column: Asymmetrical Editorial Heading & Subheading */}
          <div className={styles.leftCol}>
            <motion.div
              className={styles.labelWrap}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.label}>WHO WE ARE</span>
            </motion.div>

            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Beyond Technology. <br />
              <span className={styles.accentText}>Building What&apos;s Next.</span>
            </motion.h2>

            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Grace Technologies brings together digital expertise, business understanding, and innovative technology to help ambitious companies overcome complex challenges and achieve sustainable growth
            </motion.p>

            <motion.div
              className={styles.ctaWrap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href="/about" variant="secondary" size="md" icon>
                About Us
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Abstract editorial architectural visualization card */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.interactivePillarCard}>
              <div className={styles.cardHeaderStrip}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.systemTag}>SYSTEM ARCHITECTURE // GT-UK-IN</span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardHeading}>Engineered for Measurable Commercial Impact</h3>
                <p className={styles.cardText}>
                 Software should do more than work—it should drive business results. We combine enterprise-grade engineering with commercial strategy to deliver technology that creates measurable value. Every project is planned in the United Kingdom and developed through our high-calibre technical delivery hub, Ank Square Private Limited, in India.
                </p>

                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <h4 className={styles.valTitle}>Strategic Clarity</h4>
                      <p className={styles.valDesc}>Technical architecture aligned directly with your commercial goals.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <h4 className={styles.valTitle}>Bespoke Engineering</h4>
                      <p className={styles.valDesc}>Tailored, modular, and maintainable TypeScript systems—never generic templates.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <h4 className={styles.valTitle}>Transparent Delivery</h4>
                      <p className={styles.valDesc}>Collaborative milestones, agile governance, and reliable, accountable support.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient visual overlay */}
              <div className={styles.cardMesh} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

