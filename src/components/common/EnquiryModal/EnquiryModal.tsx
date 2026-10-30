'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import { quickEnquirySchema, QuickEnquiryData } from '@/schemas/enquiryModal';
import styles from './EnquiryModal.module.css';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QuickEnquiryData>({
    resolver: zodResolver(quickEnquirySchema),
    defaultValues: {
      fullName: '',
      serviceType: 'Website Development',
      contact: '',
    },
  });

  useEffect(() => {
    // Show popup shortly after visitor arrives on website
    // Checks sessionStorage so it doesn't annoy the user if closed during the session
    const hasSeenPopup = sessionStorage.getItem('gt_enquiry_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // Trigger after 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen for custom trigger events to open the modal from buttons across the site
    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent<{ serviceType?: string }>;
      if (customEvent.detail?.serviceType) {
        setValue('serviceType', customEvent.detail.serviceType as any);
      }
      setIsOpen(true);
      setStatus('idle');
      setResponseMsg('');
    };

    window.addEventListener('open-enquiry-modal', handleOpenModal);
    return () => {
      window.removeEventListener('open-enquiry-modal', handleOpenModal);
    };
  }, [setValue]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('gt_enquiry_popup_seen', 'true');
  };

  const onSubmit = async (data: QuickEnquiryData) => {
    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/quick-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (res.ok && resData.success) {
        setStatus('success');
        setResponseMsg(resData.message);
        reset();
        setTimeout(() => {
          handleClose();
        }, 3200);
      } else {
        setStatus('error');
        setResponseMsg(resData.message || 'Submission error. Please check your information.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Network error. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay}>
          {/* Backdrop Click Closes */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            className={styles.modalCard}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Close Enquiry Dialog"
            >
              <CloseIcon />
            </button>

            {/* Modal Header */}
            <div className={styles.header}>
              <div className={styles.badgeWrap}>
                <span className={styles.badgeDot} />
                <span className={styles.badgeText}>ENQUIRY</span>
              </div>
              <h2 className={styles.title}>Let&apos;s Discuss Your Project</h2>

            </div>

            {/* Content / Form */}
            {status === 'success' ? (
              <motion.div
                className={styles.successBox}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIcon}>
                  <CheckCircleIcon fontSize="large" />
                </div>
                <h3 className={styles.successTitle}>Enquiry Received!</h3>
                <p className={styles.successText}>{responseMsg}</p>
                <span className={styles.closingNote}>Closing window automatically...</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                {/* Full Name */}
                <div className={styles.field}>
                  <label htmlFor="popup-name" className={styles.label}>
                    Your Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="popup-name"
                    type="text"
                    placeholder="e.g. Alistair Vance"
                    className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <span className={styles.errorMsg}>{errors.fullName.message}</span>
                  )}
                </div>

                {/* Service Type */}
                <div className={styles.field}>
                  <label htmlFor="popup-service" className={styles.label}>
                    Service Interested In <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="popup-service"
                    className={styles.select}
                    {...register('serviceType')}
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Merchant Account Management">Merchant Account Management & Listing</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other Consultation">Other Strategic Advisory</option>
                  </select>
                </div>


                <div className={styles.field}>
                  <label htmlFor="popup-contact" className={styles.label}>
                    Email or Phone <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="popup-contact"
                    type="text"
                    placeholder="Email address or phone number"
                    className={`${styles.input} ${errors.contact ? styles.inputError : ''}`}
                    {...register('contact')}
                  />
                  {errors.contact && (
                    <span className={styles.errorMsg}>{errors.contact.message}</span>
                  )}
                </div>

                {status === 'error' && (
                  <div className={styles.errorBanner}>
                    <span>{responseMsg}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className={styles.actionRow}>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={styles.submitBtn}
                  >
                    {status === 'loading' ? (
                      <span className={styles.loadingWrap}>
                        <CircularProgress size={18} color="inherit" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <span>Submit Quick Enquiry →</span>
                    )}
                  </button>
                </div>

                <div className={styles.privacyNote}>
                  <ShieldOutlinedIcon fontSize="inherit" />
                  <span>Your privacy is our priority.</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
