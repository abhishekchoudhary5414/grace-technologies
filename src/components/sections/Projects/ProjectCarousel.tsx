'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ProjectItem } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectCarousel.module.css';

interface ProjectCarouselProps {
  projects: ProjectItem[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards per page listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setCardsPerPage(1);
      } else if (width <= 900) {
        setCardsPerPage(2);
      } else if (width <= 1200) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset or constrain index whenever projects or cardsPerPage changes
  const maxIndex = Math.max(0, projects.length - cardsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [projects, maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const slidePercent = 100 / cardsPerPage;

  return (
    <div className={styles.carouselWrapper}>
      {/* Sliding Viewport */}
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className={styles.track}
          animate={{
            x: `-${currentIndex * slidePercent}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 26,
            mass: 0.8,
          }}
        >
          {projects.map((project, idx) => (
            <div key={project.id} className={`${styles.slide} ${styles.col4}`}>
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls: Prev, Dots, Next */}
      <div className={styles.controlsRow}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handlePrev}
          aria-label="Previous projects"
          disabled={projects.length <= cardsPerPage}
        >
          <ArrowBackIcon fontSize="small" />
        </button>

        <div className={styles.dots} aria-hidden="true">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.navBtn}
          onClick={handleNext}
          aria-label="Next projects"
          disabled={projects.length <= cardsPerPage}
        >
          <ArrowForwardIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

