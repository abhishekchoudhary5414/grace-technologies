'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import styles from './MediaPreviewModal.module.css';

interface MediaPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  imageSrc: string;
  type?: 'logo' | 'visitingCard' | 'profile' | 'image';
}

export default function MediaPreviewModal({
  isOpen,
  onClose,
  title,
  category,
  imageSrc,
  type = 'image',
}: MediaPreviewModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.metaInfo}>
            <span className={styles.categoryBadge}>{category}</span>
            <h3 className={styles.modalTitle}>{title}</h3>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close preview"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Modal Media Body */}
        <div className={`${styles.mediaWrapper} ${type === 'logo' ? styles.logoWrapper : ''}`}>
          <div className={styles.imageBackdrop}>
            <Image
              src={imageSrc}
              alt={title}
              width={1200}
              height={800}
              className={`${styles.modalImage} ${type === 'logo' ? styles.logoImage : styles.standardImage}`}
              priority
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <span className={styles.footerHint}>
            <ZoomInIcon sx={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '4px' }} />
            High-Resolution Asset Preview
          </span>
          <button type="button" className={styles.dismissBtn} onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

