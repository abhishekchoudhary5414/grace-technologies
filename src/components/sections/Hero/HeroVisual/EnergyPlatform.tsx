'use client';

import React from 'react';
import styles from './EnergyPlatform.module.css';

interface EnergyPlatformProps {
  activePlatform: string | null;
}

export default function EnergyPlatform({ activePlatform }: EnergyPlatformProps) {
  return (
    <div className={`${styles.platformContainer} ${activePlatform ? styles.platformActive : ''}`}>
      {/* Vertical Quantum Uplink Light Beam */}
      <div className={styles.verticalBeam} />
      <div className={styles.beamParticleTrail} />

      {/* Concentric 3D Elliptical Energy Rings */}
      <div className={styles.ringsPerspectiveBox}>
        {/* Deep Ambient Glow Disk */}
        <div className={styles.baseRadialGlow} />

        {/* Outer segmented energy ring */}
        <div className={`${styles.ellipticRing} ${styles.ringOuter}`}>
          <span className={`${styles.sectorPip} ${styles.pip1}`} />
          <span className={`${styles.sectorPip} ${styles.pip2}`} />
          <span className={`${styles.sectorPip} ${styles.pip3}`} />
          <span className={`${styles.sectorPip} ${styles.pip4}`} />
        </div>

        {/* Mid rotating track with illuminated dashes */}
        <div className={`${styles.ellipticRing} ${styles.ringMid}`}>
          <div className={styles.dashTrack} />
        </div>

        {/* Inner high-frequency pulse ring */}
        <div className={`${styles.ellipticRing} ${styles.ringInner}`} />

        {/* Core Projector Focal Point with Vertical Nodes */}
        <div className={styles.projectorCore}>
          <div className={styles.coreLens} />
          <div className={styles.emitterGlow} />
        </div>

        {/* Holographic alignment pylon pins */}
        <div className={`${styles.pylonMarker} ${styles.pylonLeft}`} />
        <div className={`${styles.pylonMarker} ${styles.pylonRight}`} />
      </div>
    </div>
  );
}

