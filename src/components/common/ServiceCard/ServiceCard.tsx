'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  number: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  index: number;
}

export default function ServiceCard({
  number,
  title,
  tagline,
  description,
  href,
  index,
}: ServiceCardProps) {
  const getIcon = () => {
    switch (number) {
      case '01':
        return <CodeIcon className={styles.icon} />;
      case '02':
        return <AccountBalanceWalletIcon className={styles.icon} />;
      case '03':
        return <SmartToyIcon className={styles.icon} />;
      case '04':
        return <TrendingUpIcon className={styles.icon} />;
      default:
        return <CodeIcon className={styles.icon} />;
    }
  };

  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <Link href={href} className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.number}>{number}</span>
          <div className={styles.iconWrapper}>{getIcon()}</div>
        </div>

        <div className={styles.cardBody}>
          <p className={styles.tagline}>{tagline}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.exploreText}>Explore Service</span>
          <div className={styles.arrowCircle}>
            <ArrowForwardIcon className={styles.arrow} />
          </div>
        </div>

        {/* Ambient geometric highlight */}
        <div className={styles.ambientGlow} />
      </Link>
    </motion.div>
  );
}

