'use client';

import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './AdminHeader.module.css';

interface AdminHeaderProps {
  pageTitle: string;
  onMenuToggle: () => void;
  adminName?: string;
  adminRole?: string;
}

export default function AdminHeader({
  pageTitle,
  onMenuToggle,
  adminName = 'Administrator',
  adminRole = 'Executive Console',
}: AdminHeaderProps) {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    );
  }, []);

  const initials = adminName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button
          type="button"
          onClick={onMenuToggle}
          className={styles.mobileMenuBtn}
          aria-label="Toggle navigation sidebar"
        >
          <MenuIcon />
        </button>

        <div className={styles.titleArea}>
          <h1 className={styles.pageTitle}>{pageTitle}</h1>
          <span className={styles.breadcrumb}>Admin / {pageTitle}</span>
        </div>
      </div>

      <div className={styles.rightSection}>
        <span className={styles.dateDisplay}>{currentDate}</span>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>{initials}</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{adminName}</span>
            <span className={styles.userRole}>{adminRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
