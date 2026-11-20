'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container/Container';
import technologiesData from '@/config/technologies.json';
import styles from './TechMarquee.module.css';

interface TechItem {
  id: string;
  name: string;
  category: string;
  color: string;
  logo: string;
}

export default function TechMarquee() {
  const technologies: TechItem[] = technologiesData.technologies;

  return (
    <section className={styles.section} aria-label="Core Technology Stack">
      <Container size="wide">
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrap}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              ENTERPRISE TECH STACK & ARCHITECTURE
            </span>
          </div>
          <h2 className={styles.title}>Powering Next-Generation Digital Experiences.</h2>
          <p className={styles.subtitle}>
            Engineered with modern, battle-tested technologies for sub-second speeds, robust security, and seamless horizontal scale.
          </p>
        </div>
      </Container>

      {/* High-Velocity Marquee Ribbon (Infinite Seamless Loop) */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Double map for continuous seamless infinite loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.id}-${index}`} className={styles.techCard}>
              <div className={styles.techIconWrap} style={{ borderColor: `${tech.color}33` }}>
                <Image
                  src={tech.logo}
                  alt={`${tech.name} official logo`}
                  width={28}
                  height={28}
                  className={styles.techLogoImage}
                />
              </div>
              <div className={styles.techInfo}>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techCategory}>{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
