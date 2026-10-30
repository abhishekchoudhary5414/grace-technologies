'use client';

import React from 'react';
import Image from 'next/image';
import styles from './DigitalGlobe.module.css';

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

      {/* Main 3D Spherical Earth Container */}
      <div className={styles.sphereContainer}>
        {/* Realistic Earth Night-Lights & Continents Texture */}
        <div className={styles.earthTextureWrapper}>
          <Image
            src="/images/earth-sphere-texture.png"
            alt="Grace Technologies 3D Digital Earth"
            width={380}
            height={380}
            priority
            className={styles.earthImage}
          />
        </div>

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

