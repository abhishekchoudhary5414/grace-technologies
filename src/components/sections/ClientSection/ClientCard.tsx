'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './ClientCard.module.css';

export interface ClientItem {
  id: number;
  name: string;
  slug: string;
  logo: string;
  category: string;
  location: string;
  project: string;
  summary: string;
  testimonial: string;
  metrics: string;
  workDone: Array<{
    type: string;
    title: string;
    description: string;
    images?: string[];
    url?: string;
    presentationUrl?: string;
  }>;
}

interface ClientCardProps {
  client: ClientItem;
  index: number;
}

export default function ClientCard({ client, index }: ClientCardProps) {
  const { name, slug, logo, category, location, project, summary } = client;

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Corner Bracket Tech Accents */}
      <span className={styles.bracketTL} />
      <span className={styles.bracketBR} />

      {/* Visual Preview Graphic with Dedicated Company Logo Box */}
      <div className={styles.previewArea}>
        <div className={styles.previewGlow} />
        {location && <span className={styles.previewTopBadge}>{location}</span>}

        <div className={styles.logoContainer}>
          {logo ? (
            <Image
              src={logo}
              alt={`${name} Official Logo`}
              width={90}
              height={90}
              className={styles.logoImage}
            />
          ) : (
            <div className={styles.logoPlaceholder}>{initials}</div>
          )}
        </div>
      </div>

      {/* Card Content Information */}
      <div className={styles.cardContent}>
        <div>
          <span className={styles.categoryLabel}>{category}</span>
          <h3 className={styles.clientName}>{name}</h3>
          <h4 className={styles.projectTitle}>{project}</h4>
          <p className={styles.description}>{summary}</p>
        </div>

        {/* Action Row */}
        <div className={styles.cardActionRow}>
          <Link href={`/client/${slug}`} className={styles.viewProjectLink}>
            <span>View Full Case Details</span>
            <ArrowForwardIcon />
          </Link>

          <Link
            href={`/client/${slug}`}
            className={styles.actionCircle}
            aria-label={`View full project details for ${name}`}
          >
            <ArrowForwardIcon />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
