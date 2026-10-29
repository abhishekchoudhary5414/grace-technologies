'use client';

import React from 'react';
import styles from './CentralGlobe.module.css';

interface CentralGlobeProps {
  activePlatform: string | null;
}

export default function CentralGlobe({ activePlatform }: CentralGlobeProps) {
  return (
    <div className={`${styles.globeSystem} ${activePlatform ? styles.hasActive : ''}`}>
      {/* Layered circular base pedestal with 3D perspective */}
      <div className={styles.pedestalOuter}>
        <div className={styles.pedestalMid}>
          <div className={styles.pedestalInner}>
            <div className={styles.pedestalGlow} />
          </div>
        </div>
      </div>

      {/* Concentric rotating orbital rings */}
      <div className={`${styles.orbitalRing} ${styles.ring1}`} />
      <div className={`${styles.orbitalRing} ${styles.ring2}`} />
      <div className={`${styles.orbitalRing} ${styles.ring3}`} />
      <div className={`${styles.orbitalRing} ${styles.ringHorizontal}`} />

      {/* Main Spherical Globe */}
      <div className={styles.globeSphere}>
        {/* Holographic latitude / longitude grid */}
        <div className={styles.gridLatLong} />
        <div className={styles.globeGlowInner} />
        
        {/* Animated particle dotted matrix */}
        <div className={styles.particleDots} />

        {/* Central Core Glass Branding */}
        <div className={styles.brandCore}>
          <div className={styles.logoMarkWrapper}>
            <span className={styles.brandTitle}>GRACE</span>
            <div className={styles.brandSubWrapper}>
              <span className={styles.brandDot} />
              <span className={styles.brandSubtitle}>TECHNOLOGIES</span>
              <span className={styles.brandDot} />
            </div>
          </div>
        </div>

        {/* Outer spherical corona glow & rim highlight */}
        <div className={styles.coronaGlow} />
        <div className={styles.rimLight} />
      </div>

      {/* Orbiting data satellites */}
      <div className={`${styles.satellite} ${styles.sat1}`} />
      <div className={`${styles.satellite} ${styles.sat2}`} />
      <div className={`${styles.satellite} ${styles.sat3}`} />
    </div>
  );
}

