'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { ProjectItem } from '@/data/projects';
import { openEnquiryModal } from '@/utils/modal';
import MediaPreviewModal from './MediaPreviewModal';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, category, summary, visualType, clientSlug, logo, image, workType, websiteUrl } = project;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Determine media asset for popup modal
  const previewAsset = image || logo || '';

  // Determine action type:
  // 1. If it's a website project with an external URL -> Open external website in new tab
  // 2. If it's a logo or visiting card with an image/logo -> Open asset in modal popup
  // 3. If it has a client slug -> Navigate to client case study page
  const isWebsite = workType === 'website' && Boolean(websiteUrl);
  const isPopupMedia = (workType === 'logo' || workType === 'visitingCard') && Boolean(previewAsset);

  const handlePrimaryClick = (e: React.MouseEvent) => {
    if (isPopupMedia) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const renderVisualMockup = () => {
    // Client projects
    if (visualType === 'client') {
      if (workType === 'website' && image) {
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.laptopFrame}>
              <div className={styles.laptopTopBar}>
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
                <span className={styles.browserUrlText}>{websiteUrl || 'https://client-portal.com'}</span>
              </div>
              <div className={styles.laptopScreenImage}>
                <Image
                  src={image}
                  alt={`${title} Preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.clientPreviewImg}
                  priority={index < 3}
                />
              </div>
            </div>
          </div>
        );
      }

      if (workType === 'visitingCard' && image) {
        return (
          <div className={styles.mockupContainer} onClick={() => setIsModalOpen(true)}>
            <div className={styles.visitingCardFrame}>
              <Image
                src={image}
                alt={`${title} Stationery`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.visitingCardImg}
              />
              <div className={styles.zoomHoverBadge}>
                <ZoomInIcon sx={{ fontSize: '1.1rem' }} />
                <span>Click to Expand</span>
              </div>
            </div>
          </div>
        );
      }

      if (workType === 'profile') {
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.profileDeckFrame}>
              <div className={styles.profileTopBadge}>Company Profile</div>
              {logo && (
                <div className={styles.profileLogoCircle}>
                  <Image
                    src={logo}
                    alt={`${project.client} Logo`}
                    width={48}
                    height={48}
                    className={styles.profileLogoImg}
                  />
                </div>
              )}
              <span className={styles.profileDocTitle}>{project.client}</span>
              <span className={styles.profileDocSub}>Corporate Profile & Credentials</span>
            </div>
          </div>
        );
      }

      // Default logo / branding
      if (logo || image) {
        return (
          <div className={styles.mockupContainer} onClick={() => setIsModalOpen(true)}>
            <div className={styles.logoBoxWrapper}>
              <div className={styles.logoBoxInner}>
                <Image
                  src={image || logo || ''}
                  alt={`${project.client} Brand Identity`}
                  width={96}
                  height={96}
                  className={styles.logoBoxImg}
                />
              </div>
              <div className={styles.zoomHoverBadge}>
                <ZoomInIcon sx={{ fontSize: '1.1rem' }} />
                <span>View Logo</span>
              </div>
            </div>
          </div>
        );
      }
    }

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
                <span style={{ fontSize: '0.45rem', color: 'var(--color-text-secondary)' }}>Pipeline</span>
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
                  <div style={{ fontSize: '0.45rem', color: 'var(--color-border-highlight)' }}>Real Results</div>
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
    <>
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
          {project.location && (
            <span className={styles.previewLocationBadge}>{project.location}</span>
          )}
          {renderVisualMockup()}
        </div>

        {/* Card Information */}
        <div className={styles.cardContent}>
          <div>
            <div className={styles.categoryRow}>
              <span className={styles.categoryLabel}>{category}</span>
              {workType && (
                <span className={styles.workTypeTag}>
                  {workType === 'visitingCard' ? 'Visiting Card' : workType}
                </span>
              )}
            </div>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{summary}</p>
          </div>

          {/* Action Row */}
          <div className={styles.cardActionRow}>
            {/* Primary Action Button */}
            {isWebsite && websiteUrl ? (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
                aria-label={`Open ${title} live website in new tab`}
              >
                <span>Website</span>
                <OpenInNewIcon fontSize="small" />
              </a>
            ) : isPopupMedia ? (
              <button
                type="button"
                className={styles.primaryAction}
                onClick={handlePrimaryClick}
                aria-label={`Preview ${title} asset popup`}
              >
                <span>View {workType === 'logo' ? 'Logo' : 'Card'}</span>
                <ZoomInIcon fontSize="small" />
              </button>
            ) : clientSlug ? (
              <Link href={`/client/${clientSlug}`} className={styles.primaryAction}>
                <span>View</span>
                <ArrowForwardIcon fontSize="small" />
              </Link>
            ) : (
              <button
                type="button"
                className={styles.primaryAction}
                onClick={() => openEnquiryModal(category)}
              >
                <span>View Project</span>
                <ArrowForwardIcon fontSize="small" />
              </button>
            )}

            {/* Secondary Action Button */}
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

      {/* High-Resolution Media Popup Modal */}
      {previewAsset && (
        <MediaPreviewModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          category={category}
          imageSrc={previewAsset}
          type={workType === 'logo' ? 'logo' : 'image'}
        />
      )}
    </>
  );
}
