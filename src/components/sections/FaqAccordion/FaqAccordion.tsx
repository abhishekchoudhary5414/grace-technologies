'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './FaqAccordion.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button
              type="button"
              className={styles.questionBtn}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.questionText}>{faq.question}</span>
              <span className={`${styles.iconWrap} ${isOpen ? styles.iconOpen : ''}`}>
                <KeyboardArrowDownIcon />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className={styles.answerWrapper}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

