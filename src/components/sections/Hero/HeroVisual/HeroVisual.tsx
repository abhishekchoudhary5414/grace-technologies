'use client';

import React, { useState } from 'react';
import DigitalGlobe from './DigitalGlobe';
import ServiceOrbitNode, { OrbitNodeData } from './ServiceOrbitNode';
import GlobeOrbitalSystem from './GlobeOrbitalSystem';
import EnergyPlatform from './EnergyPlatform';
import styles from './HeroVisual.module.css';

const orbitNodes: OrbitNodeData[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'WEBSITE DEVELOPMENT',
    subtitle: 'Modern Web Experiences',
    href: '/services/website-development',
    position: 'top-left',
  },
  {
    id: 'digital-marketing',
    number: '02',
    title: 'DIGITAL MARKETING',
    subtitle: 'Growth & Performance',
    href: '/services/digital-marketing',
    position: 'top-right',
  },
  {
    id: 'merchant-account-management',
    number: '03',
    title: 'MERCHANT MANAGEMENT',
    subtitle: 'Payments & Business Operations',
    href: '/services/merchant-account-management',
    position: 'bottom-left',
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'AI AUTOMATION',
    subtitle: 'Intelligent Workflows',
    href: '/services/ai-automation',
    position: 'bottom-right',
  },
];

export default function HeroVisual() {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <div
      className={styles.heroVisualContainer}
      aria-label="Grace Technologies Interactive 3D Digital Globe Ecosystem"
    >
      {/* Background Deep Cosmic Radial Light & Space Atmosphere */}
      <div className={styles.ambientCoreGlow} />
      <div className={styles.outerOrbitTrack} />

      {/* SVG Interconnecting Orbital Lines & Traveling Photons */}
      <GlobeOrbitalSystem activePlatform={activePlatform} />

      {/* High-Tech Circular Energy Platform beneath Earth */}
      <EnergyPlatform activePlatform={activePlatform} />

      {/* Center 3D Digital Earth Globe with Equatorial Ring & Lighting */}
      <DigitalGlobe activePlatform={activePlatform} />

      {/* 4 Circular Holographic Orbiting Service Nodes */}
      <div className={styles.platformsContainer}>
        {orbitNodes.map((node) => (
          <ServiceOrbitNode
            key={node.id}
            data={node}
            isActive={activePlatform === node.id}
            onHover={setActivePlatform}
          />
        ))}
      </div>
    </div>
  );
}
