'use client';

import React from 'react';
import Link from 'next/link';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MemoryIcon from '@mui/icons-material/Memory';
import CampaignIcon from '@mui/icons-material/Campaign';
import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './ServicePlatform.module.css';

export interface ServicePlatformData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  href: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface ServicePlatformProps {
  data: ServicePlatformData;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

export default function ServicePlatform({
  data,
  isActive,
  onHover,
}: ServicePlatformProps) {
  const { id, number, title, subtitle, href, position } = data;

  const renderPlatformContent = () => {
    switch (id) {
      case 'website-development':
        return (
          <div className={styles.visualCanvas}>
            {/* Browser frame preview */}
            <div className={styles.browserFrame}>
              <div className={styles.browserHeader}>
                <span className={styles.bDot} />
                <span className={styles.bDot} />
                <span className={styles.bDot} />
                <span className={styles.urlBar}>gracetechnologies.co.uk</span>
              </div>
              <div className={styles.browserBody}>
                <div className={styles.miniHeroStrip}>
                  <LanguageIcon className={styles.miniWebIcon} />
                  <div className={styles.miniLines}>
                    <span className={styles.lineLong} />
                    <span className={styles.lineShort} />
                  </div>
                </div>
                <div className={styles.miniCardRow}>
                  <div className={styles.miniDevice} />
                  <div className={styles.codePill}>
                    <CodeIcon fontSize="inherit" />
                    <span>Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'merchant-account-management':
        return (
          <div className={styles.visualCanvas}>
            {/* Merchant Payment Cards & Dashboard */}
            <div className={styles.paymentDeck}>
              <div className={styles.creditCardVisual}>
                <div className={styles.cardChip} />
                <div className={styles.cardHeader}>
                  <CreditCardIcon fontSize="small" />
                  <span className={styles.cardBrand}>PAYMENT CORE</span>
                </div>
                <div className={styles.cardNumberMask}>•••• •••• •••• 8842</div>
              </div>

              {/* Transaction Approved Badge */}
              <div className={styles.approvedPill}>
                <CheckCircleIcon className={styles.checkIcon} fontSize="inherit" />
                <span>Payment Approved</span>
              </div>

              <div className={styles.secureBadge}>
                <SecurityIcon fontSize="inherit" />
                <span>PCI-DSS Validated</span>
              </div>
            </div>
          </div>
        );

      case 'ai-automation':
        return (
          <div className={styles.visualCanvas}>
            {/* Central AI Processor Chip */}
            <div className={styles.processorWrapper}>
              <div className={styles.aiChip}>
                <div className={styles.chipCores}>
                  <MemoryIcon className={styles.chipIcon} />
                  <span className={styles.aiLabel}>AI</span>
                </div>
                {/* Circuit pins */}
                <div className={`${styles.pins} ${styles.pinsTop}`} />
                <div className={`${styles.pins} ${styles.pinsBottom}`} />
                <div className={`${styles.pins} ${styles.pinsLeft}`} />
                <div className={`${styles.pins} ${styles.pinsRight}`} />
              </div>

              {/* Connected node badges */}
              <div className={styles.nodeBadge}>
                <span className={styles.nodeDot} />
                <span>Pipeline Active</span>
              </div>
            </div>
          </div>
        );

      case 'digital-marketing':
        return (
          <div className={styles.visualCanvas}>
            {/* Analytics Dashboard */}
            <div className={styles.analyticsFrame}>
              <div className={styles.analyticsHeader}>
                <BarChartIcon fontSize="small" />
                <span>Conversion Metrics</span>
                <span className={styles.liveTag}>LIVE</span>
              </div>

              <div className={styles.chartBars}>
                <span className={`${styles.bar} ${styles.bar1}`} />
                <span className={`${styles.bar} ${styles.bar2}`} />
                <span className={`${styles.bar} ${styles.bar3}`} />
                <span className={`${styles.bar} ${styles.bar4}`} />
                <span className={`${styles.bar} ${styles.bar5}`} />
              </div>

              <div className={styles.campaignBadge}>
                <CampaignIcon fontSize="inherit" />
                <span>Targeting +340%</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles.platformWrapper} ${styles[position]} ${isActive ? styles.active : ''}`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <Link href={href} className={styles.interactiveCard}>
        {/* Futuristic Pedestal Base Underneath */}
        <div className={styles.pedestalBase}>
          <div className={styles.pedestalGlow} />
        </div>

        {/* Dynamic Holographic Content Display */}
        <div className={styles.displayDeck}>
          {renderPlatformContent()}
        </div>

        {/* Label and Identification */}
        <div className={styles.platformMeta}>
          <span className={styles.platformNumber}>{number}</span>
          <div className={styles.platformTextGroup}>
            <span className={styles.platformTitle}>{title}</span>
            <span className={styles.platformSubtitle}>{subtitle}</span>
          </div>
        </div>

        {/* Ambient Corner Accents */}
        <div className={styles.cornerTopRight} />
        <div className={styles.cornerBottomLeft} />
      </Link>
    </div>
  );
}

