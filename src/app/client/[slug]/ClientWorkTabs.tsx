'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import LaunchIcon from '@mui/icons-material/Launch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import { ClientItem } from '@/components/sections/ClientSection/ClientCard';
import MediaPreviewModal from '@/components/sections/Projects/MediaPreviewModal';
import { openEnquiryModal } from '@/utils/modal';
import styles from './client-detail.module.css';

function formatTabLabel(type: string) {
  switch (type) {
    case 'website':
      return 'Web Architecture';
    case 'logo':
      return 'Brand Identity & Logo';
    case 'visitingCard':
      return 'Business Stationery';
    case 'profile':
      return 'Corporate Credentials';
    default:
      return type
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}

export default function ClientWorkTabs({ workItems }: { workItems: ClientItem['workDone'] }) {
  const [activeType, setActiveType] = useState('All');
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    imageSrc: string;
    type?: 'logo' | 'visitingCard' | 'profile' | 'image';
  }>({
    isOpen: false,
    title: '',
    category: '',
    imageSrc: '',
  });

  const tabs = useMemo(() => {
    const uniqueTypes = Array.from(new Set(workItems.map((item) => item.type)));
    return ['All', ...uniqueTypes];
  }, [workItems]);

  const visibleWork = useMemo(() => {
    return activeType === 'All'
      ? workItems
      : workItems.filter((item) => item.type === activeType);
  }, [activeType, workItems]);

  const openPreview = (title: string, category: string, imageSrc: string, type: 'logo' | 'visitingCard' | 'image') => {
    setPreviewModal({
      isOpen: true,
      title,
      category,
      imageSrc,
      type,
    });
  };

  return (
    <>
      {/* Category Filter Tabs */}
      <div className={styles.filterTabs} role="tablist" aria-label="Project deliverables filter">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeType === tab}
            className={`${styles.filterTab} ${activeType === tab ? styles.filterTabActive : ''}`}
            onClick={() => setActiveType(tab)}
          >
            {tab === 'All' ? 'All Deliverables' : formatTabLabel(tab)}
          </button>
        ))}
      </div>

      {/* Main Deliverables Showcase Grid */}
      <div className={styles.deliverablesStack}>
        {visibleWork.map((work, index) => {
          const isWebsite = work.type === 'website';
          const isLogo = work.type === 'logo';
          const isVisitingCard = work.type === 'visitingCard';
          const isProfile = work.type === 'profile';

          return (
            <article key={`${work.type}-${index}`} className={styles.showcaseCard}>
              <div className={styles.showcaseGrid}>
                {/* Left Side: Technical Info & Deliverable Specs */}
                <div className={styles.showcaseInfo}>
                  <div className={styles.badgeRow}>
                    <span className={styles.deliverableBadge}>
                      {formatTabLabel(work.type)}
                    </span>
                    {work.url && (
                      <span className={styles.liveIndicator}>
                        <span className={styles.liveDot} /> Live Production
                      </span>
                    )}
                  </div>

                  <h2 className={styles.deliverableTitle}>{work.title}</h2>
                  <p className={styles.deliverableDesc}>{work.description}</p>

                  {/* Highlights / Technical Features */}
                  <div className={styles.featurePoints}>
                    {isWebsite && (
                      <>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>Fully responsive architectural and engineering portfolio layout</span>
                        </div>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>SEO structured engineering service taxonomy & lead routing</span>
                        </div>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>Fast edge CDN delivery and modern client consultation funnels</span>
                        </div>
                      </>
                    )}

                    {isLogo && (
                      <>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>Bespoke vector geometry combining heritage authority with modern aesthetics</span>
                        </div>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>Complete master digital suite for print, signage, and screen collateral</span>
                        </div>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>Harmonized corporate typography & industrial color hierarchy</span>
                        </div>
                      </>
                    )}

                    {isVisitingCard && (
                      <>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>Precision corporate print dimensions & high-density typography</span>
                        </div>
                        <div className={styles.featurePoint}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: 'var(--color-blue)' }} />
                          <span>Tailored finishes reflecting industrial infrastructure standards</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtonGroup}>
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primaryLiveBtn}
                      >
                        <span>Visit Live Website</span>
                        <OpenInNewIcon fontSize="small" />
                      </a>
                    )}

                    {work.images && work.images.length > 0 && (
                      <button
                        type="button"
                        className={styles.secondaryPreviewBtn}
                        onClick={() =>
                          openPreview(
                            work.title,
                            formatTabLabel(work.type),
                            work.images![0],
                            isLogo ? 'logo' : isVisitingCard ? 'visitingCard' : 'image'
                          )
                        }
                      >
                        <ZoomInIcon fontSize="small" />
                        <span>High-Res Fullscreen Preview</span>
                      </button>
                    )}

                    <button
                      type="button"
                      className={styles.talkBtn}
                      onClick={() => openEnquiryModal(work.title)}
                    >
                      <span>Let's Talk</span>
                      <ArrowForwardIcon fontSize="small" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Interactive Visual Stage */}
                <div className={styles.showcaseVisual}>
                  {/* Website Visual Stage */}
                  {isWebsite && work.images && work.images.length > 0 && (
                    <div
                      className={styles.browserShowcaseFrame}
                      onClick={() =>
                        openPreview(work.title, 'Website Preview', work.images![0], 'image')
                      }
                      title="Click to view full screenshot"
                    >
                      <div className={styles.browserBar}>
                        <div className={styles.browserDots}>
                          <span className={styles.bDot} />
                          <span className={styles.bDot} />
                          <span className={styles.bDot} />
                        </div>
                        <span className={styles.browserUrl}>
                          {work.url ? work.url.replace(/^https?:\/\//, '') : 'aprajitastrategics.com'}
                        </span>
                        <span className={styles.browserPill}>SSL Active</span>
                      </div>
                      <div className={styles.browserViewport}>
                        <Image
                          src={work.images[0]}
                          alt={`${work.title} Screenshot`}
                          width={1400}
                          height={900}
                          className={styles.browserImg}
                          priority
                        />
                        <div className={styles.visualOverlayHint}>
                          <ZoomInIcon />
                          <span>Click to Expand Screenshot</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Logo Visual Stage */}
                  {isLogo && work.images && work.images.length > 0 && (
                    <div
                      className={styles.logoStageFrame}
                      onClick={() =>
                        openPreview(work.title, 'Corporate Logo Identity', work.images![0], 'logo')
                      }
                      title="Click to view high-res logo"
                    >
                      <div className={styles.logoStageCard}>
                        <Image
                          src={work.images[0]}
                          alt={`${work.title} Logo`}
                          width={280}
                          height={280}
                          className={styles.logoStageImg}
                          priority
                        />
                      </div>
                      <div className={styles.logoStageFooter}>
                        <div className={styles.logoSpecItem}>
                          <span className={styles.specLabel}>Vector Format</span>
                          <span className={styles.specVal}>SVG / EPS / PNG</span>
                        </div>
                        <div className={styles.logoSpecItem}>
                          <span className={styles.specLabel}>Color Model</span>
                          <span className={styles.specVal}>CMYK + RGB</span>
                        </div>
                        <span className={styles.logoExpandHint}>
                          <ZoomInIcon fontSize="small" /> View Master Mark
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Visiting Card Visual Stage */}
                  {isVisitingCard && work.images && work.images.length > 0 && (
                    <div
                      className={styles.visitingCardStageFrame}
                      onClick={() =>
                        openPreview(work.title, 'Business Stationery & Card', work.images![0], 'visitingCard')
                      }
                      title="Click to view business card"
                    >
                      <div className={styles.visitingCardStageCard}>
                        <Image
                          src={work.images[0]}
                          alt={`${work.title} Business Card`}
                          width={600}
                          height={380}
                          className={styles.visitingCardStageImg}
                          priority
                        />
                        <div className={styles.visualOverlayHint}>
                          <ZoomInIcon />
                          <span>Click to Expand Stationery</span>
                        </div>
                      </div>
                      <div className={styles.logoStageFooter}>
                        <div className={styles.logoSpecItem}>
                          <span className={styles.specLabel}>Dimension Spec</span>
                          <span className={styles.specVal}>3.5" x 2.0" Standard</span>
                        </div>
                        <div className={styles.logoSpecItem}>
                          <span className={styles.specLabel}>Print Production</span>
                          <span className={styles.specVal}>350 GSM Matte Finish</span>
                        </div>
                        <span className={styles.logoExpandHint}>
                          <ZoomInIcon fontSize="small" /> Zoom Card
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Presentation Iframe Stage */}
                  {isProfile && work.presentationUrl && (
                    <div className={styles.presentationFrame}>
                      <iframe
                        loading="lazy"
                        src={work.presentationUrl}
                        title={`${work.title} Presentation`}
                        className={styles.presentationIframe}
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Fullscreen Media Modal */}
      {previewModal.imageSrc && (
        <MediaPreviewModal
          isOpen={previewModal.isOpen}
          onClose={() => setPreviewModal((prev) => ({ ...prev, isOpen: false }))}
          title={previewModal.title}
          category={previewModal.category}
          imageSrc={previewModal.imageSrc}
          type={previewModal.type}
        />
      )}
    </>
  );
}
