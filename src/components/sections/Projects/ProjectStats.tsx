'use client';

import React from 'react';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import styles from './ProjectStats.module.css';

const statsData = [
  {
    icon: <LayersOutlinedIcon />,
    number: 'Our Capabilities',
    label: 'Four Core Service Areas',
  },
  {
    icon: <HandshakeOutlinedIcon />,
    number: 'Our Approach',
    label: 'Business-Focused Solutions',
  },
  {
    icon: <PublicOutlinedIcon />,
    number: 'UK–India Partnership',
    label: 'Strategic Bilateral Delivery',
  },
  {
    icon: <BarChartOutlinedIcon />,
    number: 'Our Commitment',
    label: 'Technology-Led Excellence',
  },
];

export default function ProjectStats() {
  return (
    <div className={styles.statsBar} aria-label="Grace Technologies delivery pillars">
      {statsData.map((item, index) => (
        <div key={index} className={styles.statItem}>
          <div className={styles.iconCircle}>{item.icon}</div>
          <div className={styles.statMeta}>
            <span className={styles.statNumber}>{item.number}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

