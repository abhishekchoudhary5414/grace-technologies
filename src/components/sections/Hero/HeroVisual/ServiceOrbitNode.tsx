'use client';

import React from 'react';
import Link from 'next/link';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MemoryIcon from '@mui/icons-material/Memory';
import styles from './ServiceOrbitNode.module.css';

export interface OrbitNodeData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  href: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface ServiceOrbitNodeProps {
  data: OrbitNodeData;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

export default function ServiceOrbitNode({
  data,
  isActive,
  onHover,
}: ServiceOrbitNodeProps) {
  const { id, title, subtitle, href, position } = data;

  const getNodeIcon = () => {
    switch (id) {
      case 'website-development':
        return <CodeIcon className={styles.muiIcon} />;
      case 'digital-marketing':
        return <TrendingUpIcon className={styles.muiIcon} />;
      case 'merchant-account-management':
        return <ShoppingCartIcon className={styles.muiIcon} />;
      case 'ai-automation':
        return <MemoryIcon className={styles.muiIcon} />;
      default:
        return <CodeIcon className={styles.muiIcon} />;
    }
  };

  return (
    <div
      className={`${styles.nodeAnchor} ${styles[position]} ${isActive ? styles.active : ''}`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <Link
        href={href}
        className={styles.nodeLink}
        aria-label={`${title} - ${subtitle}`}
      >
        {/* Outer Circular Holographic Glow Ring */}
        <div className={styles.outerGlowRing} />
        <div className={styles.pulsingRadarWave} />

        {/* Circular Glass Capsule */}
        <div className={styles.glassCircle}>
          <div className={styles.glassHighlight} />
          <div className={styles.innerBevel} />
          <div className={styles.iconContainer}>
            {getNodeIcon()}
          </div>
          {/* Subtle micro orbital satellite dot on the circle rim */}
          <span className={styles.rimSatelliteDot} />
        </div>

        {/* Floating Typography Label */}
        <div className={`${styles.labelContainer} ${styles[`label_${position}`]}`}>
          <span className={styles.nodeTitle}>{title}</span>
          <span className={styles.nodeSubtitle}>{subtitle}</span>
        </div>
      </Link>
    </div>
  );
}

