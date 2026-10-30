'use client';

import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './NotesModal.module.css';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (notes: string) => Promise<void>;
  initialNotes?: string | null;
  title?: string;
}

export function NotesModal({
  isOpen,
  onClose,
  onSave,
  initialNotes = '',
  title = 'Internal Administrative Notes',
}: NotesModalProps) {
  const [notes, setNotes] = useState(initialNotes || '');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setNotes(initialNotes || '');
  }, [initialNotes]);

  if (!isOpen) return null;

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(notes);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <button type="button" onClick={onClose} className={styles.closeBtn} aria-label="Close dialog">
            <CloseIcon fontSize="small" />
          </button>
        </div>

        <textarea
          className={styles.textarea}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add executive notes, client requirements, callback dates, or follow-up details..."
        />

        <div className={styles.actions}>
          <button type="button" onClick={onClose} className={styles.cancelBtn} disabled={isSaving}>
            Cancel
          </button>
          <button type="button" onClick={handleSave} className={styles.saveBtn} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Notes'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesModal;
