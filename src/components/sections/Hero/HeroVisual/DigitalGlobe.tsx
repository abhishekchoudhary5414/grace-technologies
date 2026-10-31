'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './DigitalGlobe.module.css';

// Dynamically import Earth3DCanvas with SSR disabled to avoid any WebGL window/DOM hydration mismatch
const Earth3DCanvas = dynamic(() => import('./Earth3DCanvas'), {
  ssr: false,
  loading: () => <div className={styles.canvasPlaceholder} />,
});

interface DigitalGlobeProps {
  activePlatform: string | null;
}

export default function DigitalGlobe({ activePlatform }: DigitalGlobeProps) {
  return (
    <div className={`${styles.globeViewport} ${activePlatform ? styles.hasActive : ''}`}>
      {/* Outer Atmospheric Corona Glow */}
      <div className={styles.atmosphericGlow} />

      {/* Prominent Equatorial Inclined Orbit Ring */}
      <div className={styles.prominentOrbitRing}>
        <span className={styles.orbitPhoton1} />
        <span className={styles.orbitPhoton2} />
      </div>

      {/* Secondary Counter-Rotating Orbital Ring */}
      <div className={styles.secondaryOrbitRing} />

      {/* Main 3D WebGL Spherical Earth Container */}
      <div className={styles.sphereContainer}>
        {/* Real Interactive Three.js 3D Globe with Dynamic globals.css Color Binding */}
        <Earth3DCanvas />

        {/* Dynamic Holographic Sphere Overlays */}
        {/* 1. Luminous Atmospheric Rim Gradient */}
        <div className={styles.atmosphericRim} />

        {/* 2. Concentric Lat/Long Cyber Grid */}
        <div className={styles.latLongGrid} />

        {/* 3. Dotted Network Data Topology Points */}
        <div className={styles.networkNodes} />

        {/* 4. Subtle Shading & Specular Reflection (Day/Night Edge) */}
        <div className={styles.specularSheen} />
      </div>

      {/* Orbiting Satellite Data Particles */}
      <div className={`${styles.orbitSatellite} ${styles.satTopRight}`} />
      <div className={`${styles.orbitSatellite} ${styles.satBottomLeft}`} />
      <div className={`${styles.orbitSatellite} ${styles.satFarRight}`} />
    </div>
  );
}
