'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { quickEnquirySchema, QuickEnquiryData } from '@/schemas/enquiryModal';
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
import styles from './EnquiryModal.module.css';

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

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
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
  } = useForm<QuickEnquiryData>({
    resolver: zodResolver(quickEnquirySchema),
    defaultValues: {
      fullName: '',
      serviceType: 'Website Development',
      country: 'United Kingdom',
      email: '',
      phone: '+44 ',
    },
  });

  const phoneValue = watch('phone');

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

    // If phone is currently empty or just another country code, helpfully prefill/suggest dial code
    if (!phoneValue || /^\+\d{1,4}\s?$/.test(phoneValue)) {
      setValue('phone', country.dialCode === '+' ? '' : `${country.dialCode} `);
    }
  };

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
        setValue('serviceType', customEvent.detail.serviceType as QuickEnquiryData['serviceType']);
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
        // Track lead event
        trackEvent('generate_lead', {
          service_name: data.serviceType,
          source: 'Quick Enquiry Modal',
        });
        reset({
          fullName: '',
          serviceType: 'Website Development',
          country: 'United Kingdom',
          email: '',
          phone: '+44 ',
        });
        setSelectedCountry(COUNTRIES[0]);
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
                    {...register('fullName', {
                      onChange: (event) => {
                        const sanitizedValue = event.target.value.replace(/[^a-zA-Z\s.'-]/g, '');
                        if (sanitizedValue !== event.target.value) {
                          event.target.value = sanitizedValue;
                        }
                      },
                    })}
                  />
                  {errors.fullName && (
                    <span className={styles.errorMsg}>{errors.fullName.message}</span>
                  )}
                </div>

                {/* Service & Country Selection Row */}
                <div className={styles.row2}>
                  {/* Service Type */}
                  <div className={styles.field}>
                    <label htmlFor="popup-service" className={styles.label}>
                      Service <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="popup-service"
                        className={`${styles.select} ${errors.serviceType ? styles.inputError : ''}`}
                        aria-invalid={Boolean(errors.serviceType)}
                        {...register('serviceType')}
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Merchant Account Management">Merchant Account Management</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other Consultation">Other Consultation</option>
                      </select>
                      <KeyboardArrowDownIcon className={styles.selectArrowIcon} aria-hidden="true" />
                    </div>
                    {errors.serviceType && (
                      <span className={styles.errorMsg}>{errors.serviceType.message}</span>
                    )}
                  </div>

                  {/* Country Dropdown with Flag */}
                  <div className={styles.field} ref={countryDropdownRef}>
                    <label id="popup-country-label" className={styles.label}>
                      Country
                    </label>
                    <div className={styles.countryPickerWrap}>
                      <button
                        type="button"
                        id="popup-country-btn"
                        aria-haspopup="listbox"
                        aria-expanded={isCountryOpen}
                        aria-labelledby="popup-country-label popup-country-btn"
                        className={`${styles.countryTrigger} ${isCountryOpen ? styles.countryTriggerActive : ''}`}
                        onClick={() => setIsCountryOpen((prev) => !prev)}
                      >
                        <span className={styles.selectedCountryDisplay}>
                          <span className={styles.flagIconBox}>
                            <selectedCountry.Flag width={22} height={14} className={styles.countryFlagSvg} />
                          </span>
                          <span className={styles.countryNameText}>{selectedCountry.name}</span>
                        </span>
                        <KeyboardArrowDownIcon
                          className={`${styles.dropdownArrow} ${isCountryOpen ? styles.dropdownArrowOpen : ''}`}
                        />
                      </button>

                      {/* Hidden registered country input for form submission */}
                      <input type="hidden" {...register('country')} value={selectedCountry.name} />

                      {/* Animated Dropdown Menu */}
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
                                    <c.Flag width={22} height={14} className={styles.countryFlagSvg} />
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
                </div>


                <div className={styles.row2}>
                  {/* Phone */}
                  <div className={styles.field}>
                    <label htmlFor="popup-phone" className={styles.label}>
                      Phone Number
                    </label>
                    <input
                      id="popup-phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9+()\-\s]*"
                      placeholder="+44 20 7946 0991"
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      {...register('phone', {
                        onChange: (event) => {
                          const sanitizedValue = event.target.value.replace(/[^0-9+()\-\s]/g, '');
                          if (sanitizedValue !== event.target.value) {
                            event.target.value = sanitizedValue;
                          }
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className={styles.errorMsg}>{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className={styles.field}>
                    <label htmlFor="popup-email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      id="popup-email"
                      type="email"
                      inputMode="email"
                      placeholder="name@company.com"
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
                    {errors.email && (
                      <span className={styles.errorMsg}>{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Combined Contact Requirement Validation Error */}
                {errors.email && !errors.phone && (
                  <div className={styles.contactRequirementError}>
                    <span>{errors.email.message}</span>
                  </div>
                )}

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
                  <span>Your privacy is our priority. We do not spam.</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
