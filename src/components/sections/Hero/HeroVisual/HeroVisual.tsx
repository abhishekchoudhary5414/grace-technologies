'use client';

import React, { useState } from 'react';
import DigitalGlobe from './DigitalGlobe';
import OrbitingSatellites from './OrbitingSatellites';
import EnergyPlatform from './EnergyPlatform';
import styles from './HeroVisual.module.css';

export default function HeroVisual() {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <div
      className={styles.heroVisualContainer}
      aria-label="Grace Technologies Interactive 3D Digital Globe Ecosystem"
    >
      {/* Background Deep Cosmic Radial Light */}
      <div className={styles.ambientCoreGlow} />
      <div className={styles.outerOrbitTrack} />

      {/* High-Tech Circular Energy Platform beneath Earth */}
      <EnergyPlatform activePlatform={activePlatform} />

      {/* Center 3D Digital Earth Globe with Equatorial Ring & Lighting */}
      <DigitalGlobe activePlatform={activePlatform} />

      {/* 4 Satellites revolving in a circular orbit around the globe */}
      <OrbitingSatellites
        activePlatform={activePlatform}
        onHover={setActivePlatform}
      />
    </div>
  );
}
