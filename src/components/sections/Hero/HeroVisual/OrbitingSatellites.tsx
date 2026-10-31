'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import RealisticSatelliteSvg from './RealisticSatelliteSvg';
import styles from './OrbitingSatellites.module.css';

export interface SatelliteData {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: 'code' | 'trending' | 'cart' | 'ai';
  orbitAngleDeg: number; // 0 (Top), 90 (Right), 180 (Bottom), 270 (Left)
}

const satellites: SatelliteData[] = [
  {
    id: 'website-development',
    title: 'WEBSITE DEVELOPMENT',
    subtitle: 'Modern Web Experiences',
    href: '/services/website-development',
    icon: 'code',
    orbitAngleDeg: 0,
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    subtitle: 'Growth & Performance',
    href: '/services/digital-marketing',
    icon: 'trending',
    orbitAngleDeg: 90,
  },
  {
    id: 'ai-automation',
    title: 'AI AUTOMATION',
    subtitle: 'Intelligent Workflows',
    href: '/services/ai-automation',
    icon: 'ai',
    orbitAngleDeg: 180,
  },
  {
    id: 'merchant-account-management',
    title: 'MERCHANT MANAGEMENT',
    subtitle: 'Payments & Business Operations',
    href: '/services/merchant-account-management',
    icon: 'cart',
    orbitAngleDeg: 270,
  },
];

interface OrbitingSatellitesProps {
  activePlatform: string | null;
  onHover: (id: string | null) => void;
}

export default function OrbitingSatellites({
  activePlatform,
  onHover,
}: OrbitingSatellitesProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`${styles.satellitesOrchestrator} ${isPaused ? styles.isPaused : ''}`}
      aria-label="Orbiting actual satellites system"
    >
      {/* Visual Glowing Circular Orbit Track Guideline */}
      <div className={styles.circularOrbitTrack}>
        <div className={styles.orbitPulseRing} />
      </div>

      {/* Rotating Orbital Carrier Ring */}
      <div className={styles.carrierRing}>
        {satellites.map((sat) => {
          const isActive = activePlatform === sat.id;

          return (
            <div
              key={sat.id}
              className={`${styles.orbitSpoke} ${styles[`spoke_${sat.orbitAngleDeg}`]}`}
            >
              {/* Counter-rotating Anchor to keep satellite upright during revolution */}
              <div className={styles.counterRotator}>
                <Link
                  href={sat.href}
                  className={`${styles.satelliteDisc} ${isActive ? styles.activeDisc : ''}`}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    onHover(sat.id);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    onHover(null);
                  }}
                  aria-label={`${sat.title} - ${sat.subtitle}`}
                >
                  {/* Detailed Spacecraft Model with Solar Panels & Parabolic Antenna */}
                  <div className={styles.craftContainer}>
                    <RealisticSatelliteSvg
                      iconType={sat.icon}
                      isActive={isActive}
                    />
                  </div>

                  {/* Service Telemetry Badge */}
                  <div className={styles.labelPlate}>
                    <span className={styles.labelText}>{sat.title}</span>
                    <span className={styles.labelSub}>{sat.subtitle}</span>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
