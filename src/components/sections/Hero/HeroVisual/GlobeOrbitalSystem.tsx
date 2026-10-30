'use client';

import React from 'react';
import styles from './GlobeOrbitalSystem.module.css';

interface GlobeOrbitalSystemProps {
  activePlatform: string | null;
}

export default function GlobeOrbitalSystem({ activePlatform }: GlobeOrbitalSystemProps) {
  return (
    <svg
      className={styles.orbitalSvg}
      viewBox="0 0 860 760"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filter for orbital photons and active connection lines */}
        <filter id="orbitalGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <linearGradient id="orbitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#142B45" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Orbit 1: Elliptical path connecting Website Dev (top-left) to Globe & AI Automation */}
      <path
        id="orbit-path-1"
        d="M 180 180 C 260 220, 360 320, 430 380 C 500 440, 680 500, 710 520"
        className={`${styles.orbitalLine} ${
          activePlatform === 'website-development' || activePlatform === 'ai-automation'
            ? styles.activeLine
            : ''
        }`}
      />
      {/* Photon moving along path 1 */}
      <circle r="3.5" fill="#FFFFFF" filter="url(#orbitalGlow)">
        <animateMotion
          dur="5.5s"
          repeatCount="indefinite"
          path="M 180 180 C 260 220, 360 320, 430 380 C 500 440, 680 500, 710 520"
        />
      </circle>

      {/* Orbit 2: Curved path connecting Digital Marketing (top-right) to Globe & Merchant */}
      <path
        id="orbit-path-2"
        d="M 680 180 C 600 220, 500 320, 430 380 C 360 440, 220 500, 160 520"
        className={`${styles.orbitalLine} ${
          activePlatform === 'digital-marketing' || activePlatform === 'merchant-account-management'
            ? styles.activeLine
            : ''
        }`}
      />
      {/* Photon moving along path 2 */}
      <circle r="3.5" fill="#FFFFFF" filter="url(#orbitalGlow)">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M 680 180 C 600 220, 500 320, 430 380 C 360 440, 220 500, 160 520"
        />
      </circle>

      {/* Direct Quantum Beam: Website Dev Node -> Earth Core */}
      <path
        d="M 180 180 Q 290 280, 350 350"
        className={`${styles.directBeam} ${activePlatform === 'website-development' ? styles.activeBeam : ''}`}
      />
      <circle r="3" fill="#FFFFFF" filter="url(#orbitalGlow)">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M 180 180 Q 290 280, 350 350" />
      </circle>

      {/* Direct Quantum Beam: Digital Marketing Node -> Earth Core */}
      <path
        d="M 680 180 Q 570 280, 510 350"
        className={`${styles.directBeam} ${activePlatform === 'digital-marketing' ? styles.activeBeam : ''}`}
      />
      <circle r="3" fill="#FFFFFF" filter="url(#orbitalGlow)">
        <animateMotion dur="3.6s" repeatCount="indefinite" path="M 680 180 Q 570 280, 510 350" />
      </circle>

      {/* Direct Quantum Beam: Merchant Management Node -> Earth Core */}
      <path
        d="M 160 520 Q 270 460, 350 420"
        className={`${styles.directBeam} ${activePlatform === 'merchant-account-management' ? styles.activeBeam : ''}`}
      />
      <circle r="3" fill="#FFFFFF" filter="url(#orbitalGlow)">
        <animateMotion dur="3.4s" repeatCount="indefinite" path="M 160 520 Q 270 460, 350 420" />
      </circle>

      {/* Direct Quantum Beam: AI Automation Node -> Earth Core */}
      <path
        d="M 710 520 Q 600 460, 510 420"
        className={`${styles.directBeam} ${activePlatform === 'ai-automation' ? styles.activeBeam : ''}`}
      />
      <circle r="3" fill="#FFFFFF" filter="url(#orbitalGlow)">
        <animateMotion dur="3.8s" repeatCount="indefinite" path="M 710 520 Q 600 460, 510 420" />
      </circle>

      {/* Fine Concentric Outer Astrolabe Coordinate Circle */}
      <circle
        cx="430"
        cy="380"
        r="280"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeDasharray="4 8"
        strokeWidth="1"
      />
      <circle
        cx="430"
        cy="380"
        r="340"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeDasharray="2 12"
        strokeWidth="1"
      />

      {/* Illuminated Intersection Anchor Dots on Globe Horizon */}
      <circle cx="340" cy="340" r="4" fill="#FFFFFF" filter="url(#orbitalGlow)" opacity="0.9" />
      <circle cx="520" cy="340" r="4" fill="#FFFFFF" filter="url(#orbitalGlow)" opacity="0.9" />
      <circle cx="340" cy="420" r="4" fill="#FFFFFF" filter="url(#orbitalGlow)" opacity="0.9" />
      <circle cx="520" cy="420" r="4" fill="#FFFFFF" filter="url(#orbitalGlow)" opacity="0.9" />
    </svg>
  );
}

