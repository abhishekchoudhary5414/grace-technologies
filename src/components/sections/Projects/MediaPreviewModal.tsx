'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const modalNode = (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-preview-title"
    >
      <div
        className={`${styles.modalContent} ${type === 'logo' ? styles.logoModalContent : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.metaInfo}>
            <span className={styles.categoryBadge}>{category}</span>
            <h3 id="media-preview-title" className={styles.modalTitle}>
              {title}
            </h3>
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
          <div className={type === 'logo' ? styles.logoCardBox : styles.imageBackdrop}>
            <Image
              src={imageSrc}
              alt={title}
              width={type === 'logo' ? 420 : 1000}
              height={type === 'logo' ? 260 : 640}
              className={`${styles.modalImage} ${type === 'logo' ? styles.logoImage : styles.standardImage}`}
              priority
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <span className={styles.footerHint}>
            <ZoomInIcon sx={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '4px' }} />
            High-Resolution Brand Asset
          </span>
          <button type="button" className={styles.dismissBtn} onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalNode, document.body);
}
