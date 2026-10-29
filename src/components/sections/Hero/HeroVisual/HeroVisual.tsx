'use client';

import React, { useState } from 'react';
import CentralGlobe from './CentralGlobe';
import ServicePlatform, { ServicePlatformData } from './ServicePlatform';
import ConnectionLines from './ConnectionLines';
import styles from './HeroVisual.module.css';

const platforms: ServicePlatformData[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'WEBSITE DEVELOPMENT',
    subtitle: 'Modern Web Experiences',
    href: '/services/website-development',
    position: 'top-left',
  },
  {
    id: 'merchant-account-management',
    number: '02',
    title: 'MERCHANT ACCOUNT',
    subtitle: 'Payment Operations & Security',
    href: '/services/merchant-account-management',
    position: 'top-right',
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI AUTOMATION',
    subtitle: 'Intelligent Workflows & Logic',
    href: '/services/ai-automation',
    position: 'bottom-left',
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'DIGITAL MARKETING',
    subtitle: 'Growth & Precision Analytics',
    href: '/services/digital-marketing',
    position: 'bottom-right',
  },
];

export default function HeroVisual() {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <div className={styles.heroVisualContainer} aria-label="Grace Technologies Interactive Technology Universe">
      {/* Background ambient light fields */}
      <div className={styles.ambientCoreGlow} />
      <div className={styles.outerOrbitTrack} />

      {/* SVG Connecting Cables with Animated Traveling Light Photons */}
      <ConnectionLines activePlatform={activePlatform} />

      {/* Center Spherical Globe */}
      <CentralGlobe activePlatform={activePlatform} />

      {/* 4 Interactive Surrounding Platforms */}
      <div className={styles.platformsContainer}>
        {platforms.map((platform) => (
          <ServicePlatform
            key={platform.id}
            data={platform}
            isActive={activePlatform === platform.id}
            onHover={setActivePlatform}
          />
        ))}
      </div>
    </div>
  );
}
