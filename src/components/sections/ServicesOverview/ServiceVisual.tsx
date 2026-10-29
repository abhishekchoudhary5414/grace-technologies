'use client';

import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MemoryIcon from '@mui/icons-material/Memory';
import HubIcon from '@mui/icons-material/Hub';
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import styles from './ServiceVisual.module.css';

interface ServiceVisualProps {
  serviceId: string;
}

export default function ServiceVisual({ serviceId }: ServiceVisualProps) {
  switch (serviceId) {
    case 'website-development':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />
          {/* Main Browser Window */}
          <div className={styles.browserWindow}>
            <div className={styles.browserHeader}>
              <div className={styles.dots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <span className={styles.browserUrl}>gracetechnologies.uk/platform</span>
              <div className={styles.liveTag}>PRODUCTION</div>
            </div>

            <div className={styles.browserBody}>
              <div className={styles.codeBanner}>
                <div className={styles.codePill}>
                  <CodeIcon fontSize="inherit" />
                  <span>Next.js 16 + TypeScript</span>
                </div>
                <span className={styles.speedScore}>100% Core Web Vitals</span>
              </div>

              <div className={styles.mockupHero}>
                <div className={styles.mockupTextGroup}>
                  <div className={styles.lineH1} />
                  <div className={styles.lineP1} />
                  <div className={styles.lineP2} />
                </div>
                <div className={styles.mockupCta} />
              </div>

              <div className={styles.mockupGrid3}>
                <div className={styles.mockupCard}>
                  <LanguageIcon fontSize="small" />
                  <div className={styles.miniBar} />
                </div>
                <div className={styles.mockupCard}>
                  <div className={styles.miniCircle} />
                  <div className={styles.miniBar} />
                </div>
                <div className={styles.mockupCard}>
                  <div className={styles.miniSquare} />
                  <div className={styles.miniBar} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Preview Companion */}
          <div className={styles.floatingMobile}>
            <div className={styles.mobileSpeaker} />
            <div className={styles.mobileScreen}>
              <div className={styles.mobileHero} />
              <div className={styles.mobileBtn} />
            </div>
          </div>
        </div>
      );

    case 'merchant-account-management':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />
          {/* Merchant Portal Dashboard Visual */}
          <div className={styles.merchantPortalFrame}>
            {/* Portal Navigation & Account Status */}
            <div className={styles.portalHeader}>
              <div className={styles.merchantStoreBrand}>
                <StorefrontIcon fontSize="small" className={styles.storeIcon} />
                <div>
                  <span className={styles.storeName}>GLOBAL MERCHANT CONSOLE</span>
                  <span className={styles.storeStatus}>Account ID: MC-892410 // ACTIVE</span>
                </div>
              </div>
              <div className={styles.verifiedBadge}>
                <VerifiedUserIcon fontSize="inherit" />
                <span>KYC VERIFIED</span>
              </div>
            </div>

            {/* Product Catalog Management Table */}
            <div className={styles.catalogDeck}>
              <div className={styles.catalogToolbar}>
                <span className={styles.catalogHeading}>
                  <Inventory2Icon fontSize="inherit" /> Product Catalog (1,420 Active SKUs)
                </span>
                <span className={styles.syncStatus}>• Real-time Inventory Sync</span>
              </div>

              {/* Product Listing Items */}
              <div className={styles.productList}>
                <div className={styles.productRow}>
                  <div className={styles.prodThumb}>
                    <AddShoppingCartIcon fontSize="inherit" />
                  </div>
                  <div className={styles.prodDetails}>
                    <span className={styles.prodTitle}>Enterprise SaaS Tier - Multi-Seat</span>
                    <span className={styles.prodMeta}>SKU: GT-SaaS-001 • Category: Software • In Stock: 450</span>
                  </div>
                  <div className={styles.prodPrice}>
                    <span className={styles.priceNum}>£499.00</span>
                    <span className={styles.statusLive}>PUBLISHED</span>
                  </div>
                </div>

                <div className={styles.productRow}>
                  <div className={styles.prodThumb}>
                    <AddShoppingCartIcon fontSize="inherit" />
                  </div>
                  <div className={styles.prodDetails}>
                    <span className={styles.prodTitle}>Hardware Terminal Node Pro</span>
                    <span className={styles.prodMeta}>SKU: GT-HW-089 • Category: Hardware • In Stock: 85</span>
                  </div>
                  <div className={styles.prodPrice}>
                    <span className={styles.priceNum}>£1,250.00</span>
                    <span className={styles.statusLive}>PUBLISHED</span>
                  </div>
                </div>

                <div className={styles.productRow}>
                  <div className={styles.prodThumb}>
                    <AddShoppingCartIcon fontSize="inherit" />
                  </div>
                  <div className={styles.prodDetails}>
                    <span className={styles.prodTitle}>Custom API Access Token License</span>
                    <span className={styles.prodMeta}>SKU: GT-API-310 • Category: Digital • Unlimited</span>
                  </div>
                  <div className={styles.prodPrice}>
                    <span className={styles.priceNum}>£199.00</span>
                    <span className={styles.statusLive}>PUBLISHED</span>
                  </div>
                </div>
              </div>

              {/* Status footer pill */}
              <div className={styles.portalFooter}>
                <div className={styles.footItem}>
                  <CheckCircleIcon fontSize="inherit" className={styles.footCheck} />
                  <span>Multi-Currency Multi-Store Publishing</span>
                </div>
                <div className={styles.footItem}>
                  <CheckCircleIcon fontSize="inherit" className={styles.footCheck} />
                  <span>Stripe, Shopify & Amazon Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'ai-automation':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />
          {/* Central Neural Chip & Automation Nodes */}
          <div className={styles.aiCanvas}>
            <div className={styles.chipCoreWrapper}>
              <div className={styles.chipCores}>
                <MemoryIcon className={styles.aiProcessorIcon} />
                <span className={styles.chipTitle}>NEURAL ENGINE</span>
              </div>
              <div className={`${styles.chipPin} ${styles.pinTop}`} />
              <div className={`${styles.chipPin} ${styles.pinBottom}`} />
              <div className={`${styles.chipPin} ${styles.pinLeft}`} />
              <div className={`${styles.chipPin} ${styles.pinRight}`} />
            </div>

            {/* Floating Pipeline Processors */}
            <div className={`${styles.nodeBox} ${styles.node1}`}>
              <HubIcon fontSize="inherit" />
              <span>Multi-modal Ingestion</span>
            </div>
            <div className={`${styles.nodeBox} ${styles.node2}`}>
              <CheckCircleIcon fontSize="inherit" />
              <span>Agentic Reasoning</span>
            </div>
            <div className={`${styles.nodeBox} ${styles.node3}`}>
              <span className={styles.pulseDot} />
              <span>Zero-Data-Retention</span>
            </div>
          </div>
        </div>
      );

    case 'digital-marketing':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />
          {/* Performance Dashboard */}
          <div className={styles.marketingCanvas}>
            <div className={styles.dashHeader}>
              <div className={styles.dashTitle}>
                <BarChartIcon fontSize="small" />
                <span>Conversion Velocity</span>
              </div>
              <div className={styles.growthBadge}>
                <TrendingUpIcon fontSize="inherit" />
                <span>+340% ROAS</span>
              </div>
            </div>

            <div className={styles.chartArea}>
              <div className={styles.chartBarsGroup}>
                <div className={`${styles.cBar} ${styles.cb1}`}><span className={styles.barLabel}>SEO</span></div>
                <div className={`${styles.cBar} ${styles.cb2}`}><span className={styles.barLabel}>PPC</span></div>
                <div className={`${styles.cBar} ${styles.cb3}`}><span className={styles.barLabel}>CRO</span></div>
                <div className={`${styles.cBar} ${styles.cb4}`}><span className={styles.barLabel}>GEO</span></div>
                <div className={`${styles.cBar} ${styles.cb5}`}><span className={styles.barLabel}>PIPE</span></div>
              </div>
            </div>

            <div className={styles.campaignPill}>
              <CampaignIcon fontSize="small" />
              <span>Targeted Pipeline Acquisition Active</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
