'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleOutlined, ErrorOutlined } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import { contactFormSchema, ContactFormData } from '@/schemas/contact';
import Button from '@/components/common/Button/Button';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      businessEmail: '',
      companyName: '',
      phoneNumber: '',
      country: '',
      serviceInterestedIn: 'Website Development',
      message: '',
      botCheck: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmissionStatus('success');
        setResponseMessage(resData.message);
        reset();
      } else {
        setSubmissionStatus('error');
        setResponseMessage(resData.message || 'Failed to submit enquiry. Please verify your details.');
      }
    } catch {
      setSubmissionStatus('error');
      setResponseMessage('Network error. Please try again or email us directly.');
    }
  };

  return (
    <div className={styles.formCard}>
      <AnimatePresence mode="wait">
        {submissionStatus === 'success' ? (
          <motion.div
            key="success-message"
            className={styles.successState}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.successIconWrap}>
              <CheckCircleOutlined className={styles.successIcon} />
            </div>
            <h3 className={styles.successHeading}>Enquiry Submitted Successfully</h3>
            <p className={styles.successDesc}>{responseMessage}</p>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => {
                setSubmissionStatus('idle');
                setResponseMessage('');
              }}
            >
              Send Another Enquiry
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
            {/* Honeypot anti-spam field (hidden from genuine users) */}
            <input
              type="text"
              {...register('botCheck')}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className={styles.grid2}>
              <div className={styles.fieldGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Alistair Vance"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <span className={styles.errorText}>{errors.fullName.message}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="businessEmail" className={styles.label}>
                  Business Email <span className={styles.required}>*</span>
                </label>
                <input
                  id="businessEmail"
                  type="email"
                  placeholder="e.g. a.vance@company.co.uk"
                  className={`${styles.input} ${errors.businessEmail ? styles.inputError : ''}`}
                  {...register('businessEmail')}
                />
                {errors.businessEmail && (
                  <span className={styles.errorText}>{errors.businessEmail.message}</span>
                )}
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.fieldGroup}>
                <label htmlFor="companyName" className={styles.label}>
                  Company Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="e.g. Vance Capital Ltd"
                  className={`${styles.input} ${errors.companyName ? styles.inputError : ''}`}
                  {...register('companyName')}
                />
                {errors.companyName && (
                  <span className={styles.errorText}>{errors.companyName.message}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="phoneNumber" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+44 20 7946 0991"
                  className={`${styles.input} ${errors.phoneNumber ? styles.inputError : ''}`}
                  {...register('phoneNumber')}
                />
                {errors.phoneNumber && (
                  <span className={styles.errorText}>{errors.phoneNumber.message}</span>
                )}
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.fieldGroup}>
                <label htmlFor="country" className={styles.label}>
                  Country / Region <span className={styles.required}>*</span>
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="e.g. United Kingdom"
                  className={`${styles.input} ${errors.country ? styles.inputError : ''}`}
                  {...register('country')}
                />
                {errors.country && (
                  <span className={styles.errorText}>{errors.country.message}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="serviceInterestedIn" className={styles.label}>
                  Service Interested In <span className={styles.required}>*</span>
                </label>
                <select
                  id="serviceInterestedIn"
                  className={`${styles.select} ${errors.serviceInterestedIn ? styles.inputError : ''}`}
                  {...register('serviceInterestedIn')}
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Merchant Account Management">Merchant Account Management</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Other">Other</option>
                </select>
                {errors.serviceInterestedIn && (
                  <span className={styles.errorText}>{errors.serviceInterestedIn.message}</span>
                )}
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message" className={styles.label}>
                Message & Overview of Objectives <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Please outline your commercial requirements, timeline, or current technical bottlenecks..."
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                {...register('message')}
              />
              {errors.message && (
                <span className={styles.errorText}>{errors.message.message}</span>
              )}
            </div>

            {submissionStatus === 'error' && (
              <div className={styles.errorMessageBanner}>
                <ErrorOutlined fontSize="small" />
                <span>{responseMessage}</span>
              </div>
            )}

            <div className={styles.submitWrap}>
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className={styles.submitButton}
              >
                {submissionStatus === 'loading' ? (
                  <span className={styles.loadingSpinnerWrap}>
                    <CircularProgress size={20} color="inherit" />
                    <span>Submitting Enquiry...</span>
                  </span>
                ) : (
                  <span>Submit Commercial Enquiry →</span>
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
