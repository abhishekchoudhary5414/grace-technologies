'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Container from '@/components/common/Container/Container';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  backHref?: string;
  backLabel?: string;
}

export default function Breadcrumb({
  items,
  backHref,
  backLabel = 'Back',
}: BreadcrumbProps) {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    if (!backHref) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <div className={styles.wrapper}>
      <Container size="wide">
        <div className={styles.inner}>
          {/* Back Action Link/Button */}
          {backHref ? (
            <Link href={backHref} className={styles.backButton}>
              <ArrowBackIcon fontSize="inherit" />
              <span>{backLabel}</span>
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleBack}
              className={styles.backButton}
              aria-label="Go back to previous page"
            >
              <ArrowBackIcon fontSize="inherit" />
              <span>{backLabel}</span>
            </button>
          )}

          {/* Breadcrumbs List */}
          <nav className={styles.breadcrumbNav} aria-label="Breadcrumb hierarchy">
            <ol className={styles.breadcrumbList}>
              <li className={styles.item}>
                <Link href="/" className={styles.link} title="Home">
                  <HomeOutlinedIcon className={styles.homeIcon} />
                  <span>Home</span>
                </Link>
              </li>

              {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                  <li key={index} className={styles.item}>
                    <ChevronRightIcon className={styles.separator} />
                    {isLast || !item.href ? (
                      <span className={styles.current} aria-current="page">
                        {item.label}
                      </span>
                    ) : (
                      <Link href={item.href} className={styles.link}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </Container>
    </div>
  );
}

