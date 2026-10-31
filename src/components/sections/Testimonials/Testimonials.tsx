'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import testimonialsData from '@/config/testimonials.json';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  service: string;
  avatarInitial: string;
  content: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = testimonialsData.testimonials;
  const total = testimonials.length;

  // We determine visible cards based on screen width:
  // Desktop/Laptop: 3 cards
  // Tablet: 2 cards
  // Mobile: 1 card
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards per page listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 680) {
        setCardsPerPage(1);
      } else if (width <= 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoscroll timer (every 4.5 seconds), paused on hover/focus
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Infinite circular list: we duplicate the array 3 times so the sliding track has ample buffer
  // and we slide by translateX percentage based on currentIndex.
  // Each card width in percentage is 100 / cardsPerPage.
  const slidePercent = 100 / cardsPerPage;

  // Handle touch swiping on mobile
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

  // Build infinite list of items (3 copies of original testimonials)
  const displayItems = [...testimonials, ...testimonials, ...testimonials];
  const offset = total + currentIndex;

  return (
    <section
      id="testimonials"
      className={styles.section}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Client Testimonials and Reviews"
    >

      <Container size="wide">
        <SectionHeading
          label="CLIENT TESTIMONIALS"
          title="Endorsed by Visionary Leaders."
          description="Read how our strategic UK consulting and Indian engineering partnership delivers measurable results across digital transformation and enterprise operations."
          align="center"
        />

        {/* Carousel Container with Left Button, Track, and Right Button */}
        <div className={styles.sliderWrapper}>
          {/* Left / Prev Button */}
          <button
            type="button"
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous testimonial review"
          >
            <ArrowBackIcon fontSize="medium" />
          </button>

          {/* Viewport & Sliding Track */}
          <div
            className={styles.carouselViewport}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className={styles.carouselTrack}
              animate={{
                x: `-${offset * slidePercent}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 24,
                mass: 0.8,
              }}
            >
              {displayItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className={`${styles.slideItem} ${styles.col3}`}>
                  <div className={styles.card}>
                    <div>
                      <div className={styles.cardHeader}>
                        <div className={styles.starRating} aria-label={`${item.rating} out of 5 stars`}>
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <StarIcon key={i} sx={{ fontSize: '1.125rem' }} />
                          ))}
                        </div>
                        <span className={styles.serviceBadge}>{item.service}</span>
                      </div>

                      <div className={styles.quoteSymbol}>
                        <FormatQuoteIcon sx={{ fontSize: '2.5rem', transform: 'rotate(180deg)' }} />
                      </div>

                      <p className={styles.quoteContent}>&ldquo;{item.content}&rdquo;</p>
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.avatar}>{item.avatarInitial}</div>
                      <div className={styles.authorMeta}>
                        <span className={styles.authorName}>{item.author}</span>
                        <span className={styles.authorRole}>{item.role}</span>
                        <span className={styles.authorCompany}>
                          {item.company} &bull; {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right / Next Button */}
          <button
            type="button"
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next testimonial review"
          >
            <ArrowForwardIcon fontSize="medium" />
          </button>
        </div>

        {/* Pagination Dots indicator */}
        <div className={styles.dotsWrapper} aria-hidden="true">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

