import React from 'react';
import styles from './MessageModal.module.css';
import CloseIcon from '@mui/icons-material/Close';

interface MessageModalProps {
  isOpen: boolean;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  onClose: () => void;
}

export const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  name,
  email,
  phone,
  service,
  message,
  date,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Message from {name}</h3>
            <p className={styles.date}>{date}</p>
          </div>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close message">
            <CloseIcon sx={{ fontSize: 18 }} />
          </button>
        </div>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Service</span>
            <span className={styles.metaValue}>{service}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Email</span>
            <a href={`mailto:${email}`} className={styles.metaLink}>
              {email}
            </a>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Phone</span>
            <a href={`tel:${phone}`} className={styles.metaLink}>
              {phone}
            </a>
          </div>
        </div>

        <div className={styles.body}>
          <label className={styles.bodyLabel}>Message Body</label>
          <div className={styles.messageContent}>{message}</div>
        </div>

        <div className={styles.footer}>
          <button type="button" onClick={onClose} className={styles.dismissBtn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

