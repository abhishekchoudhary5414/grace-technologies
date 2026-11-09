'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleOutlined, ErrorOutlined } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircularProgress from '@mui/material/CircularProgress';
import { contactFormSchema, ContactFormData } from '@/schemas/contact';
import Button from '@/components/common/Button/Button';
import { trackEvent } from '@/lib/seo/analytics';
import {
  UkFlag,
  IndiaFlag,
  UsaFlag,
  CanadaFlag,
  AustraliaFlag,
  UaeFlag,
  SaudiFlag,
  QatarFlag,
  SingaporeFlag,
  IrelandFlag,
  GermanyFlag,
  FranceFlag,
  NetherlandsFlag,
  SwitzerlandFlag,
  SwedenFlag,
  NorwayFlag,
  DenmarkFlag,
  BelgiumFlag,
  ItalyFlag,
  SpainFlag,
  PolandFlag,
  JapanFlag,
  SouthKoreaFlag,
  NewZealandFlag,
  SouthAfricaFlag,
  BrazilFlag,
  MexicoFlag,
  GlobalFlag,
} from '@/components/common/Flags/CountryFlags';
import styles from './ContactForm.module.css';

interface CountryOption {
  code: string;
  name: string;
  dialCode: string;
  Flag: React.ComponentType<{ className?: string; width?: number | string; height?: number | string }>;
}

const COUNTRIES: CountryOption[] = [
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', Flag: UkFlag },
  { code: 'IN', name: 'India', dialCode: '+91', Flag: IndiaFlag },
  { code: 'US', name: 'United States', dialCode: '+1', Flag: UsaFlag },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', Flag: UaeFlag },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', Flag: SaudiFlag },
  { code: 'QA', name: 'Qatar', dialCode: '+974', Flag: QatarFlag },
  { code: 'SG', name: 'Singapore', dialCode: '+65', Flag: SingaporeFlag },
  { code: 'IE', name: 'Ireland', dialCode: '+353', Flag: IrelandFlag },
  { code: 'CA', name: 'Canada', dialCode: '+1', Flag: CanadaFlag },
  { code: 'AU', name: 'Australia', dialCode: '+61', Flag: AustraliaFlag },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', Flag: NewZealandFlag },
  { code: 'DE', name: 'Germany', dialCode: '+49', Flag: GermanyFlag },
  { code: 'FR', name: 'France', dialCode: '+33', Flag: FranceFlag },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', Flag: NetherlandsFlag },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', Flag: SwitzerlandFlag },
  { code: 'SE', name: 'Sweden', dialCode: '+46', Flag: SwedenFlag },
  { code: 'NO', name: 'Norway', dialCode: '+47', Flag: NorwayFlag },
  { code: 'DK', name: 'Denmark', dialCode: '+45', Flag: DenmarkFlag },
  { code: 'BE', name: 'Belgium', dialCode: '+32', Flag: BelgiumFlag },
  { code: 'IT', name: 'Italy', dialCode: '+39', Flag: ItalyFlag },
  { code: 'ES', name: 'Spain', dialCode: '+34', Flag: SpainFlag },
  { code: 'PL', name: 'Poland', dialCode: '+48', Flag: PolandFlag },
  { code: 'JP', name: 'Japan', dialCode: '+81', Flag: JapanFlag },
  { code: 'KR', name: 'South Korea', dialCode: '+82', Flag: SouthKoreaFlag },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', Flag: SouthAfricaFlag },
  { code: 'BR', name: 'Brazil', dialCode: '+55', Flag: BrazilFlag },
  { code: 'MX', name: 'Mexico', dialCode: '+52', Flag: MexicoFlag },
  { code: 'OTHER', name: 'Other / International', dialCode: '+', Flag: GlobalFlag },
];

export default function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(COUNTRIES[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone_number: '+44 ',
      country: 'United Kingdom',
      service: 'Website Development',
      message: '',
      botCheck: '',
    },
  });

  const phoneValue = watch('phone_number');

  // Close country dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };

    if (isCountryOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCountryOpen]);

  const handleSelectCountry = (country: CountryOption) => {
    setSelectedCountry(country);
    setValue('country', country.name);
    setIsCountryOpen(false);

    // Auto-suggest country code if phone is empty or matches code pattern
    if (!phoneValue || /^\+\d{1,4}\s?$/.test(phoneValue)) {
      setValue('phone_number', country.dialCode === '+' ? '' : `${country.dialCode} `);
    }
  };

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
        // Track successful lead generation
        trackEvent('generate_lead', {
          service_name: data.service,
          source: 'Contact Page Form',
        });
        reset({
          name: '',
          email: '',
          phone_number: '+44 ',
          country: 'United Kingdom',
          service: 'Website Development',
          message: '',
          botCheck: '',
        });
        setSelectedCountry(COUNTRIES[0]);
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
            <input
              type="text"
              {...register('botCheck')}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className={styles.grid2}>
              <div className={styles.fieldGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Alistair Vance"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  {...register('name', {
                    onChange: (event) => {
                      const sanitizedValue = event.target.value.replace(/[^a-zA-Z\s.'-]/g, '');
                      if (sanitizedValue !== event.target.value) {
                        event.target.value = sanitizedValue;
                      }
                    },
                  })}
                />
                {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  placeholder="e.g. a.vance@company.co.uk"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  {...register('email', {
                    onChange: (event) => {
                      const sanitizedValue = event.target.value.replace(/\s+/g, '');
                      if (sanitizedValue !== event.target.value) {
                        event.target.value = sanitizedValue;
                      }
                    },
                  })}
                />
                {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
              </div>
            </div>

            <div className={styles.grid2}>
              {/* Country Selection with Flags */}
              <div className={styles.fieldGroup} ref={countryDropdownRef}>
                <label id="contact-country-label" className={styles.label}>
                  Country
                </label>
                <div className={styles.countryPickerWrap}>
                  <button
                    type="button"
                    id="contact-country-btn"
                    aria-haspopup="listbox"
                    aria-expanded={isCountryOpen}
                    aria-labelledby="contact-country-label contact-country-btn"
                    className={`${styles.countryTrigger} ${isCountryOpen ? styles.countryTriggerActive : ''}`}
                    onClick={() => setIsCountryOpen((prev) => !prev)}
                  >
                    <span className={styles.selectedCountryDisplay}>
                      <span className={styles.flagIconBox}>
                        <selectedCountry.Flag width={24} height={15} className={styles.countryFlagSvg} />
                      </span>
                      <span className={styles.countryNameText}>{selectedCountry.name}</span>
                    </span>
                    <KeyboardArrowDownIcon
                      className={`${styles.dropdownArrow} ${isCountryOpen ? styles.dropdownArrowOpen : ''}`}
                    />
                  </button>

                  {/* Hidden input for react-hook-form */}
                  <input type="hidden" {...register('country')} value={selectedCountry.name} />

                  <AnimatePresence>
                    {isCountryOpen && (
                      <motion.ul
                        role="listbox"
                        className={styles.countryMenu}
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                      >
                        {COUNTRIES.map((c) => {
                          const isSelected = c.code === selectedCountry.code;
                          return (
                            <li
                              key={c.code}
                              role="option"
                              aria-selected={isSelected}
                              className={`${styles.countryOption} ${isSelected ? styles.countryOptionSelected : ''}`}
                              onClick={() => handleSelectCountry(c)}
                            >
                              <span className={styles.flagIconBox}>
                                <c.Flag width={24} height={15} className={styles.countryFlagSvg} />
                              </span>
                              <span className={styles.optionCountryName}>{c.name}</span>
                              <span className={styles.optionDialCode}>{c.dialCode}</span>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Phone Number */}
              <div className={styles.fieldGroup}>
                <label htmlFor="phone_number" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone_number"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9+()\-\s]*"
                  placeholder="+44 20 7946 0991"
                  className={`${styles.input} ${errors.phone_number ? styles.inputError : ''}`}
                  {...register('phone_number', {
                    onChange: (event) => {
                      const sanitizedValue = event.target.value.replace(/[^0-9+()\-\s]/g, '');
                      if (sanitizedValue !== event.target.value) {
                        event.target.value = sanitizedValue;
                      }
                    },
                  })}
                />
                {errors.phone_number && (
                  <span className={styles.errorText}>{errors.phone_number.message}</span>
                )}
              </div>
            </div>

            {/* Service Selection Row */}
            <div className={styles.fieldGroup}>
              <label htmlFor="service" className={styles.label}>
                Service <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="service"
                  className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
                  {...register('service')}
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Merchant Account Management">Merchant Account Management</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Other">Other</option>
                </select>
                <KeyboardArrowDownIcon className={styles.selectArrowIcon} aria-hidden="true" />
              </div>
              {errors.service && <span className={styles.errorText}>{errors.service.message}</span>}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message" className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Please share your project or requirements..."
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                {...register('message')}
              />
              {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
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
                  <span>Submit Enquiry →</span>
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
