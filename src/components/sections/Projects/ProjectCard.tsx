'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ProjectItem } from '@/data/projects';
import { openEnquiryModal } from '@/utils/modal';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, category, summary, visualType, slug } = project;

  const renderVisualMockup = () => {
    switch (visualType) {
      case 'web':
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.laptopFrame}>
              <div className={styles.laptopTopBar}>
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
              </div>
              <div className={styles.laptopScreen}>
                <div>
                  <div className={styles.schoolHeroTitle}>Bright Learning</div>
                  <div className={styles.schoolHeroSub}>Brighter Futures</div>
                  <div className={styles.schoolBtnPill}>Admissions Open</div>
                </div>
                <div className={styles.schoolCardsRow}>
                  <div className={styles.schoolCardMini} />
                  <div className={styles.schoolCardMini} />
                  <div className={styles.schoolCardMini} />
                </div>
              </div>
            </div>

            {/* Mobile Phone Mockup Overlay */}
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreenContent}>
                <div className={styles.phoneLine} style={{ width: '60%' }} />
                <div className={styles.phoneLine} style={{ width: '80%' }} />
                <div className={styles.phoneLine} style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        );

      case 'merchant':
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.merchantCanvas}>
              <div className={styles.merchantDashboard}>
                <div className={styles.dashHeader}>
                  <span className={styles.dashTitle}>Payment Dashboard</span>
                  <span className={styles.dashTag}>Active</span>
                </div>
                <div className={styles.dashRows}>
                  <div className={styles.dashRowItem}>
                    <span>Merchant Ledger</span>
                    <span>£14,850.00</span>
                  </div>
                  <div className={styles.dashRowItem}>
                    <span>Settlement Sync</span>
                    <span>99.98%</span>
                  </div>
                  <div className={styles.dashRowItem}>
                    <span>Multi-Currency</span>
                    <span>GBP / USD / EUR</span>
                  </div>
                </div>
              </div>

              {/* Physical Smart Credit Card Overlay */}
              <div className={styles.creditCard}>
                <div className={styles.cardChip} />
                <div className={styles.cardNumber}>8890 3011 3992 3335</div>
              </div>
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.aiCanvas}>
              {/* Left Input Nodes */}
              <div className={styles.aiNodeGroupLeft}>
                <div className={styles.aiNodeItem}>
                  <InsertDriveFileOutlinedIcon sx={{ fontSize: '0.625rem' }} />
                  <span>Documents</span>
                </div>
                <div className={styles.aiNodeItem}>
                  <EmailOutlinedIcon sx={{ fontSize: '0.625rem' }} />
                  <span>Emails</span>
                </div>
                <div className={styles.aiNodeItem}>
                  <AnalyticsOutlinedIcon sx={{ fontSize: '0.625rem' }} />
                  <span>Reports</span>
                </div>
              </div>

              {/* Center Neural Processing Chip */}
              <div className={styles.aiCenterChip}>
                <span>AI</span>
              </div>

              {/* Right Output Process Nodes */}
              <div className={styles.aiNodeGroupRight}>
                <div className={styles.aiNodeItem}>
                  <SettingsSuggestOutlinedIcon sx={{ fontSize: '0.625rem' }} />
                  <span>Process</span>
                </div>
                <div className={styles.aiNodeItem}>
                  <AnalyticsOutlinedIcon sx={{ fontSize: '0.625rem' }} />
                  <span>Automate</span>
                </div>
                <div className={styles.aiNodeItem}>
                  <SettingsSuggestOutlinedIcon sx={{ fontSize: '0.625rem' }} />
                  <span>Generate</span>
                </div>
              </div>

              {/* Bottom Stream Wave Bar */}
              <div className={styles.aiWaveBar}>
                <span style={{ fontSize: '0.45rem', color: 'rgba(255,255,255,0.7)' }}>Pipeline</span>
                <div className={styles.waveIndicator} />
                <span style={{ fontSize: '0.45rem', color: 'var(--color-accent)' }}>Active</span>
              </div>
            </div>
          </div>
        );

      case 'marketing':
      default:
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.marketingCanvas}>
              <div className={styles.mktHeader}>
                <div>
                  <div className={styles.mktTitle}>Digital Growth</div>
                  <div style={{ fontSize: '0.45rem', color: 'rgba(255,255,255,0.6)' }}>Real Results</div>
                </div>
                <div className={styles.mktCirclePill}>85%</div>
              </div>

              <div className={styles.mktStatsGrid}>
                <div className={styles.mktStatBox}>
                  <div className={styles.mktStatVal}>125K</div>
                  <div className={styles.mktStatLbl}>Visits</div>
                </div>
                <div className={styles.mktStatBox}>
                  <div className={styles.mktStatVal}>+66%</div>
                  <div className={styles.mktStatLbl}>Leads</div>
                </div>
                <div className={styles.mktStatBox}>
                  <div className={styles.mktStatVal}>42K</div>
                  <div className={styles.mktStatLbl}>Conversions</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

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

      {/* Visual Preview Graphic */}
      <div className={styles.previewArea}>
        <div className={styles.previewGlow} />
        {renderVisualMockup()}
      </div>

      {/* Card Information */}
      <div className={styles.cardContent}>
        <div>
          <span className={styles.categoryLabel}>{category}</span>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{summary}</p>
        </div>

        {/* Action Row */}
        <div className={styles.cardActionRow}>
          <button
            type="button"
            className={styles.primaryAction}
            onClick={() => openEnquiryModal(category)}
          >
            <span>View Project</span>
            <ArrowForwardIcon />
          </button>

          <button
            type="button"
            className={styles.secondaryAction}
            onClick={() => openEnquiryModal(category)}
            aria-label={`Let’s talk about ${title}`}
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </motion.div>
  );
}

