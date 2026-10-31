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
              More Than Technology. <br />
              <span className={styles.accentText}>Your Partner in Growth.</span>
            </motion.h2>

            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Grace TechnoloGrace Technologies brings together technology and business expertise to help companies grow and succeed. We provide website and mobile app development, digital marketing, AI automation, merchant account management, and IT solutions to simplify business operations and support long-term growth.gies combines digital expertise, business understanding, and technical innovation to help ambitious companies solve complex operational challenges.
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
                <h3 className={styles.cardHeading}>Technology That Delivers Real Results.</h3>
                <p className={styles.cardText}>
                  At Grace Technologies, we combine strategic business insight with technical excellence to deliver solutions that create lasting value. From software and mobile application development to AI automation and digital services, every project is strategically managed in the United Kingdom and executed by our dedicated technology delivery partner, Ank Square Private Limited, India. This approach enables us to deliver scalable, efficient, and high-quality solutions aligned with our clients' business objectives.                </p>
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <h4 className={styles.valTitle}>Strategic Business Alignment</h4>
                      <p className={styles.valDesc}>Connecting technology decisions with business goals to deliver meaningful results.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <h4 className={styles.valTitle}>Tailored Technology Solutions</h4>
                      <p className={styles.valDesc}>Developing custom, scalable, and maintainable solutions designed around your business needs.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <h4 className={styles.valTitle}>Reliable Project Delivery</h4>
                      <p className={styles.valDesc}>Ensuring transparent communication, structured project management, timely delivery, and ongoing support.</p>
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

