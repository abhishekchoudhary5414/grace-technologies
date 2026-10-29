'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectFilters.module.css';

export const CATEGORIES = [
  'All Projects',
  'Website Development',
  'Merchant Account Management',
  'AI Automation',
  'Digital Marketing',
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

interface ProjectFiltersProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (cat: CategoryFilter) => void;
}

export default function ProjectFilters({
  activeCategory,
  onSelectCategory,
}: ProjectFiltersProps) {
  return (
    <div className={styles.filtersContainer} role="tablist" aria-label="Project category filters">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        const displayLabel = category === 'Merchant Account Management' ? 'Merchant Solutions' : category;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            className={`${styles.filterBtn} ${isActive ? styles.activeBtn : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className={styles.activeGlow}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className={styles.btnText}>{displayLabel}</span>
          </button>
        );
      })}
    </div>
  );
}

