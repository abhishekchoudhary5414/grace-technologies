'use client';

import React from 'react';
import styles from './ConnectionLines.module.css';

interface ConnectionLinesProps {
  activePlatform: string | null;
}

export default function ConnectionLines({ activePlatform }: ConnectionLinesProps) {
  return (
    <svg
      className={styles.svgOverlay}
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Linear gradient for connections */}
        <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.8" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.7" />
        </linearGradient>

        {/* Filter for particle glow */}
        <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 01: Top-Left Path (Web Dev to Center Globe: ~250,160 to 450,330) */}
      <path
        id="path-web"
        d="M 230 150 C 310 190, 390 280, 440 330"
        className={`${styles.baseLine} ${activePlatform === 'website-development' ? styles.lineActive : ''}`}
      />
      <circle r="4" fill="var(--color-accent)" filter="url(#glowFilter)" className={styles.particle}>
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M 230 150 C 310 190, 390 280, 440 330" />
      </circle>

      {/* 02: Top-Right Path (Merchant Acct to Center Globe: ~770,150 to 560,330) */}
      <path
        id="path-merchant"
        d="M 770 150 C 690 190, 610 280, 560 330"
        className={`${styles.baseLine} ${activePlatform === 'merchant-account-management' ? styles.lineActive : ''}`}
      />
      <circle r="4" fill="var(--color-accent)" filter="url(#glowFilter)" className={styles.particle}>
        <animateMotion dur="4.2s" repeatCount="indefinite" path="M 770 150 C 690 190, 610 280, 560 330" />
      </circle>

      {/* 03: Bottom-Left Path (AI Automation to Center Globe: ~230,550 to 440,370) */}
      <path
        id="path-ai"
        d="M 230 550 C 310 510, 390 420, 440 370"
        className={`${styles.baseLine} ${activePlatform === 'ai-automation' ? styles.lineActive : ''}`}
      />
      <circle r="4" fill="var(--color-accent)" filter="url(#glowFilter)" className={styles.particle}>
        <animateMotion dur="3.8s" repeatCount="indefinite" path="M 230 550 C 310 510, 390 420, 440 370" />
      </circle>

      {/* 04: Bottom-Right Path (Digital Marketing to Center Globe: ~770,550 to 560,370) */}
      <path
        id="path-marketing"
        d="M 770 550 C 690 510, 610 420, 560 370"
        className={`${styles.baseLine} ${activePlatform === 'digital-marketing' ? styles.lineActive : ''}`}
      />
      <circle r="4" fill="var(--color-accent)" filter="url(#glowFilter)" className={styles.particle}>
        <animateMotion dur="4s" repeatCount="indefinite" path="M 770 550 C 690 510, 610 420, 560 370" />
      </circle>

      {/* Connection Endpoint Nodes on the central pedestal rim */}
      <circle cx="440" cy="330" r="5" className={styles.nodePoint} />
      <circle cx="560" cy="330" r="5" className={styles.nodePoint} />
      <circle cx="440" cy="370" r="5" className={styles.nodePoint} />
      <circle cx="560" cy="370" r="5" className={styles.nodePoint} />
    </svg>
  );
}

