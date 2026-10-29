import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Grace Technologies | UK Business Vision & Technology Innovation',
  description:
    'Grace Technologies is a British corporate technology consultancy partnered strategically with Ank Square Private Limited (India) to empower ambitious companies with intelligent systems and exceptional digital experiences.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Editorial Hero */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <div className={styles.heroContent}>
            <span className={styles.badge}>ABOUT GRACE TECHNOLOGIES</span>
            <h1 className={styles.heroTitle}>
              Combining British Corporate Elegance With Global Technology Prowess.
            </h1>
            <p className={styles.heroSubtitle}>
              We empower ambitious enterprises to solve real commercial challenges through strategic consulting, modern engineering architectures, and disciplined international delivery.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <Container size="wide">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className={styles.subBadge}>OUR STORY</span>
              <h2 className={styles.storyHeading}>Born to Bridge Vision and Execution.</h2>
            </div>
            <div className={styles.storyRight}>
              <p className={styles.storyText}>
                Modern businesses frequently face a persistent dilemma: traditional corporate consultancies often lack deep hands-on technical execution, while pure engineering shops frequently lack business acumen and executive empathy.
              </p>
              <p className={styles.storyText}>
                Grace Technologies was founded in the United Kingdom to resolve this divide. By coupling our British commercial leadership with the technical depth and engineering velocity of Ank Square Private Limited in India, we deliver an integrated partnership model that gives our clients both strategic governance and deep development capability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mvSection}>
        <Container size="wide">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <span className={styles.mvTag}>OUR MISSION</span>
              <h3 className={styles.mvTitle}>Empowering Commercial Ambition Through Intelligent Systems.</h3>
              <p className={styles.mvDesc}>
                To engineer bespoke, reliable, and scalable digital solutions that streamline operations, elevate brand authority, and unlock compounding commercial opportunities for the enterprises we serve.
              </p>
            </div>

            <div className={styles.mvCard}>
              <span className={styles.mvTag}>OUR VISION</span>
              <h3 className={styles.mvTitle}>The Benchmark for Cross-Border Technology Collaboration.</h3>
              <p className={styles.mvDesc}>
                To set the global standard for international corporate technology delivery, demonstrating how bilateral strategic partnerships between the UK and India can create unparalleled client value.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <Container size="wide">
          <SectionHeading
            label="GUIDING PRINCIPLES"
            title="Our Core Values."
            description="The uncompromising principles that dictate every architectural decision, client communication, and delivery milestone."
            align="left"
          />

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>01</span>
              <h3 className={styles.valHeader}>Integrity & Candour</h3>
              <p className={styles.valP}>We speak plainly about technical feasibility, timelines, and commercial realities. We never over-promise or sell unnecessary complexity.</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>02</span>
              <h3 className={styles.valHeader}>Engineering Rigour</h3>
              <p className={styles.valP}>Every line of code, database schema, and automated pipeline is built to strict architectural standards, ensuring durability and future-proofing.</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>03</span>
              <h3 className={styles.valHeader}>Business-First Thinking</h3>
              <p className={styles.valP}>Technology is a vehicle for commercial value. We measure our achievements by revenue created, hours automated, and business friction removed.</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>04</span>
              <h3 className={styles.valHeader}>Global Collaboration</h3>
              <p className={styles.valP}>We champion bilateral synergy, combining British strategic planning with India&apos;s world-renowned technological talent and execution speed.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Businesses Choose Us */}
      <section className={styles.whySection}>
        <Container size="wide">
          <div className={styles.whyBox}>
            <div className={styles.whyContent}>
              <span className={styles.subBadge}>PROVEN METHOD</span>
              <h2 className={styles.whyTitle}>Why Forward-Thinking Leaders Choose Grace Technologies.</h2>
              <p className={styles.whyLead}>
                Our clients enjoy direct access to senior UK strategists coupled with the round-the-clock technical depth of a full engineering team in India. There are no communication barriers, no opaque layers of middlemen, and no compromise on quality.
              </p>
              <div className={styles.whyActions}>
                <Button href="/contact" variant="primary" size="lg" icon>
                  Initiate a Dialogue
                </Button>
                <Button href="/partnership" variant="outline" size="lg">
                  Explore The Partnership
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

