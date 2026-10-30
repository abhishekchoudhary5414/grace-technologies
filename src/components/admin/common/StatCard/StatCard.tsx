'use client';

import React from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  subtitle?: string;
}

export function StatCard({ label, value, icon, subtitle, subtext }: StatCardProps & { subtext?: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
        {(subtext || subtitle) && <span className={styles.subtitle}>{subtext || subtitle}</span>}
      </div>
      <div className={styles.iconWrapper}>{icon}</div>
    </div>
  );
}

export default StatCard;
