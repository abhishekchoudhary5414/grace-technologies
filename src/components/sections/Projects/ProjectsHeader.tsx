'use client';

import React from 'react';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './ProjectsHeader.module.css';

interface ProjectsHeaderProps {
  label?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  viewAllHref?: string;
  viewAllText?: string;
}

export default function ProjectsHeader({
  label = 'OUR PROJECTS',
  title = 'Ideas Into Real',
  highlightText = 'Digital Solutions',
  description = 'Explore some of the solutions we have delivered across web development, payment systems, AI automation and digital marketing for businesses around the world.',
  viewAllHref = '/projects',
  viewAllText = 'View All Projects',
}: ProjectsHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.leftCol}>
        <div className={styles.labelWrapper}>
          <span className={styles.dot} />
          <span className={styles.label}>{label}</span>
        </div>
        <h2 className={styles.title}>
          {title}{' '}
          <span className={styles.titleHighlight}>{highlightText}</span>
        </h2>
      </div>

      <div className={styles.centerCol}>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.rightCol}>
        <Link href={viewAllHref} className={styles.viewAllBtn}>
          <span>{viewAllText}</span>
          <ArrowForwardIcon />
        </Link>
      </div>
    </div>
  );
}

