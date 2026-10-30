'use client';

import React from 'react';
import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const norm = (status || '').toLowerCase();
  let statusClass = styles.new;

  if (norm === 'confirmed') statusClass = styles.confirmed;
  else if (norm === 'contacted') statusClass = styles.contacted;
  else if (norm === 'resolved') statusClass = styles.resolved;
  else if (norm === 'spam') statusClass = styles.spam;

  return (
    <span className={`${styles.badge} ${statusClass}`}>
      <span className={styles.dot} />
      <span>{status}</span>
    </span>
  );
}

export default StatusBadge;
