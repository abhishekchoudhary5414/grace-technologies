'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.wrapper} ${align === 'center' ? styles.center : styles.left} ${className}`}
    >
      {label && (
        <motion.div
          className={styles.labelWrapper}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.label}>{label}</span>
        </motion.div>
      )}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

