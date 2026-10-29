'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import styles from './ProjectCard.module.css';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  summary: string;
  metrics: string;
  tags: string[];
  deliverables: string[];
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={styles.projectCard}>
        {/* Top Header metadata */}
        <div className={styles.cardHeader}>
          <div className={styles.categoryBadge}>
            <LayersOutlinedIcon fontSize="small" />
            <span>{project.category}</span>
          </div>
          <span className={styles.yearTag}>{project.year}</span>
        </div>

        {/* Project Title & Client info */}
        <div className={styles.titleSection}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.clientMeta}>
            <span>{project.client}</span> • <span>{project.location}</span>
          </p>
        </div>

        {/* Summary Description */}
        <p className={styles.projectSummary}>{project.summary}</p>

        {/* Key Metrics Pill */}
        <div className={styles.metricsPill}>
          <TrendingUpIcon fontSize="small" className={styles.metricIcon} />
          <span>{project.metrics}</span>
        </div>

        {/* Deliverables checklist */}
        <div className={styles.deliverablesList}>
          {project.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className={styles.deliverableItem}>
              <CheckCircleIcon fontSize="inherit" className={styles.checkIcon} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className={styles.tagsGroup}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tagPill}>
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className={styles.cardFooter}>
          <Link href="/contact" className={styles.enquireLink}>
            <span>Request Similar Implementation</span>
            <ArrowForwardIcon fontSize="inherit" className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
