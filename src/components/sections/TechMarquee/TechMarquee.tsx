'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container/Container';
import technologiesData from '@/config/technologies.json';
import marketplacesData from '@/config/marketplaces.json';
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
  const marketplaces: TechItem[] = marketplacesData.marketplaces;

  // Split developer technologies list evenly into two rows for dual opposing marquees
  const midPoint = Math.ceil(technologies.length / 2);
  const rowOne = technologies.slice(0, midPoint);
  const rowTwo = technologies.slice(midPoint);

  return (
    <section className={styles.section} aria-label="Core Technology & Retail Architecture Stack">
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

      {/* Row 1: Engineering & Languages (Left Scrolling) */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrackForward}>
          {[...rowOne, ...rowOne, ...rowOne].map((tech, index) => (
            <div key={`row1-${tech.id}-${index}`} className={styles.techCard}>
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

      {/* Row 2: Infrastructure, Databases & Tooling (Right Scrolling - Opposite Direction) */}
      <div className={styles.marqueeContainer} style={{ marginTop: '0.75rem' }}>
        <div className={styles.marqueeTrackReverse}>
          {[...rowTwo, ...rowTwo, ...rowTwo].map((tech, index) => (
            <div key={`row2-${tech.id}-${index}`} className={styles.techCard}>
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

      {/* Row 3: Top UK & Global Retail/E-Commerce Marketplaces (Left Scrolling - Added from Ecommerce Guide) */}
      <div className={styles.marqueeContainer} style={{ marginTop: '0.75rem' }}>
        <div className={styles.marqueeTrackForward}>
          {[...marketplaces, ...marketplaces, ...marketplaces].map((market, index) => (
            <div key={`market-${market.id}-${index}`} className={styles.techCard}>
              <div className={styles.techIconWrap} style={{ borderColor: `${market.color}33` }}>
                <Image
                  src={market.logo}
                  alt={`${market.name} official logo`}
                  width={28}
                  height={28}
                  className={styles.techLogoImage}
                />
              </div>
              <div className={styles.techInfo}>
                <span className={styles.techName}>{market.name}</span>
                <span className={styles.techCategory}>{market.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
