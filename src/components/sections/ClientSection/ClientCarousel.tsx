'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClientCard, { ClientItem } from './ClientCard';
import styles from './ClientCarousel.module.css';

interface ClientCarouselProps {
  clients: ClientItem[];
}

export default function ClientCarousel({ clients }: ClientCarouselProps) {
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

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

  const maxIndex = Math.max(0, clients.length - cardsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [clients, maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

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
          {clients.map((client, idx) => (
            <div key={client.id} className={`${styles.slide} ${styles.col4}`}>
              <ClientCard client={client} index={idx} />
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
          aria-label="Previous clients"
          disabled={clients.length <= cardsPerPage}
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
          aria-label="Next clients"
          disabled={clients.length <= cardsPerPage}
        >
          <ArrowForwardIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

