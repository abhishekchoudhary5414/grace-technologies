'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import LaunchIcon from '@mui/icons-material/Launch';
import { ClientItem } from '@/components/sections/ClientSection/ClientCard';
import styles from './client-detail.module.css';

function formatTabLabel(type: string) {
  return type
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function ClientWorkTabs({ workItems }: { workItems: ClientItem['workDone'] }) {
  const [activeType, setActiveType] = useState('All');

  const tabs = useMemo(() => {
    const uniqueTypes = Array.from(new Set(workItems.map((item) => item.type)));
    return ['All', ...uniqueTypes];
  }, [workItems]);

  const visibleWork = useMemo(() => {
    return activeType === 'All'
      ? workItems
      : workItems.filter((item) => item.type === activeType);
  }, [activeType, workItems]);

  return (
    <>
      <div className={styles.filterTabs} role="tablist" aria-label="Project type filters">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeType === tab}
            className={`${styles.filterTab} ${activeType === tab ? styles.filterTabActive : ''}`}
            onClick={() => setActiveType(tab)}
          >
            {tab === 'All' ? 'All' : formatTabLabel(tab)}
          </button>
        ))}
      </div>

      <div className={styles.workGrid}>
        {visibleWork.map((work, index) => (
          <article key={`${work.type}-${index}`} className={styles.workItemCard}>
            <span className={styles.workTypeBadge}>{work.type}</span>
            <h2 className={styles.workTitle}>{work.title}</h2>
            <p className={styles.workDesc}>{work.description}</p>

            {work.url && (
              <div className={styles.workActionRow}>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveWebsiteBtn}
                >
                  <span>Visit Live Website</span>
                  <LaunchIcon fontSize="small" />
                </a>
              </div>
            )}

            {work.presentationUrl && (
              <div className={styles.presentationEmbedWrapper}>
                <iframe
                  loading="lazy"
                  src={work.presentationUrl}
                  title={`${work.title} Presentation`}
                  className={styles.presentationIframe}
                  allowFullScreen
                />
              </div>
            )}

            {work.images && work.images.length > 0 && work.type === 'website' && (
              <div className={styles.projectPreviewCard}>
                <Image
                  src={work.images[0]}
                  alt={`${work.title} Website Preview`}
                  width={1200}
                  height={800}
                  className={styles.projectPreviewImage}
                />
                <div className={styles.previewMeta}>
                  <h3>Website Preview</h3>
                  <p>Responsive interface and user experience highlighted in the live digital experience.</p>
                </div>
              </div>
            )}

            {work.images && work.images.length > 0 && work.type === 'visitingCard' && (
              <div className={styles.projectPreviewCard}>
                <Image
                  src={work.images[0]}
                  alt={`${work.title} Visiting Card Preview`}
                  width={1200}
                  height={800}
                  className={styles.projectPreviewImage}
                />
                <div className={styles.previewMeta}>
                  <h3>Stationery Preview</h3>
                  <p>Premium print-ready identity system and branded collateral presented in use.</p>
                </div>
              </div>
            )}

            {work.images && work.images.length > 0 && work.type === 'logo' && (
              <div className={styles.logoDisplayBox}>
                <Image
                  src={work.images[0]}
                  alt={`${work.title} Brand Mark`}
                  width={100}
                  height={100}
                  className={styles.logoDisplayImg}
                />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.35rem' }}>
                    Official Brand Identity Asset
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Vectorized master symbol, corporate stationery palette, and digital brand governance guide.
                  </p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
