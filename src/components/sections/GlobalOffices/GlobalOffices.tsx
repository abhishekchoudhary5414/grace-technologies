'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import HubIcon from '@mui/icons-material/Hub';
import officesData from '@/config/offices.json';
import styles from './GlobalOffices.module.css';

export default function GlobalOffices() {
  const [activeLocation, setActiveLocation] = useState<'uk' | 'india' | 'both'>('both');
  const { uk, india } = officesData.offices;

  return (
    <section id="global-offices" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="BILATERAL GEOGRAPHIC FOOTPRINT"
          title="Global Presence. Local Leadership."
          description="Operating across key international hubs, connecting United Kingdom corporate strategy with Indian technology implementation."
          align="center"
        />

        <div className={styles.grid}>
          {/* LEFT: United Kingdom Office Card */}
          <motion.div
            className={`${styles.officeCard} ${activeLocation === 'uk' || activeLocation === 'both' ? styles.cardHighlighted : ''}`}
            onMouseEnter={() => setActiveLocation('uk')}
            onMouseLeave={() => setActiveLocation('both')}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.flagIconWrap} title="United Kingdom">
                {/* Official UK Union Flag */}
                <svg
                  className={styles.flagSvg}
                  viewBox="0 0 60 36"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="United Kingdom Flag"
                >
                  <clipPath id="ukClip">
                    <rect width="60" height="36" rx="3" />
                  </clipPath>
                  <g clipPath="url(#ukClip)">
                    {/* Deep Blue Field */}
                    <rect width="60" height="36" fill="#012169" />
                    {/* Diagonal White Cross */}
                    <path d="M0,0 L60,36 M60,0 L0,36" stroke="#ffffff" strokeWidth="7" />
                    {/* Diagonal Red Cross */}
                    <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="4" />
                    {/* St George White Cross */}
                    <path d="M30,0 V36 M0,18 H60" stroke="#ffffff" strokeWidth="11" />
                    {/* St George Red Cross */}
                    <path d="M30,0 V36 M0,18 H60" stroke="#C8102E" strokeWidth="6.5" />
                  </g>
                </svg>
              </div>
              <div>
                <span className={styles.locationTag}>{uk.tag}</span>
                <h3 className={styles.countryName}>{uk.country}</h3>
              </div>
            </div>

            <div className={styles.companyMeta}>
              <h4 className={styles.companyName}>{uk.company}</h4>
              <span className={styles.companyRole}>{uk.role}</span>
            </div>

            <div className={styles.addressBox}>
              <LocationOnOutlinedIcon className={styles.pinIcon} />
              <div className={styles.addressText}>
                {uk.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            <div className={styles.contactDetails}>
              <a href={`mailto:${uk.email}`} className={styles.contactItem}>
                <EmailOutlinedIcon fontSize="small" className={styles.contactIcon} />
                <span>{uk.email}</span>
              </a>
              <a href={`tel:${uk.phone.replace(/\s+/g, '')}`} className={styles.contactItem}>
                <PhoneOutlinedIcon fontSize="small" className={styles.contactIcon} />
                <span>{uk.phone}</span>
              </a>
            </div>

            <div className={styles.detailsList}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Timezone:</span>
                <span className={styles.detailValue}>{uk.timezone}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Jurisdiction:</span>
                <span className={styles.detailValue}>{uk.jurisdiction}</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER: Interactive Animated Coordinate Globe */}
          <div className={styles.globeContainer}>
            <div className={styles.globeBackdropGlow} />

            <div className={styles.globeSphere}>
              {/* Latitude and Longitude Grids */}
              <div className={styles.globeGrid} />
              <div className={styles.globeDots} />

              {/* Animated UK Coordinates Beacon */}
              <div
                className={`${styles.beaconPin} ${styles.beaconUK} ${activeLocation === 'uk' || activeLocation === 'both' ? styles.activeBeacon : ''}`}
                onMouseEnter={() => setActiveLocation('uk')}
                onMouseLeave={() => setActiveLocation('both')}
              >
                <div className={styles.beaconRing} />
                <div className={styles.beaconCore} />
                <div className={styles.beaconTooltip}>
                  <span className={styles.tooltipCountry}>{uk.coordinates.label}</span>
                  <span className={styles.tooltipRole}>{uk.company}</span>
                  <span className={styles.coordText}>{uk.coordinates.lat}, {uk.coordinates.lng}</span>
                </div>
              </div>

              {/* Animated India Coordinates Beacon */}
              <div
                className={`${styles.beaconPin} ${styles.beaconIndia} ${activeLocation === 'india' || activeLocation === 'both' ? styles.activeBeacon : ''}`}
                onMouseEnter={() => setActiveLocation('india')}
                onMouseLeave={() => setActiveLocation('both')}
              >
                <div className={styles.beaconRing} />
                <div className={styles.beaconCore} />
                <div className={styles.beaconTooltip}>
                  <span className={styles.tooltipCountry}>{india.coordinates.label}</span>
                  <span className={styles.tooltipRole}>{india.company}</span>
                  <span className={styles.coordText}>{india.coordinates.lat}, {india.coordinates.lng}</span>
                </div>
              </div>

              {/* Arc Bridge Connecting UK to India */}
              <svg className={styles.bridgeSvg} viewBox="0 0 300 200" fill="none">
                <path
                  d="M 100 80 Q 150 35, 205 110"
                  className={styles.bridgePath}
                />
                <circle r="3" fill="var(--color-accent)" className={styles.bridgeParticle}>
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M 100 80 Q 150 35, 205 110"
                  />
                </circle>
              </svg>

              {/* Globe Center Branding */}
              <div className={styles.centerBrandPill}>
                <PublicIcon fontSize="inherit" />
                <span>BILATERAL SYNERGY</span>
              </div>
            </div>

            <div className={styles.globePedestal}>
              <div className={styles.pedestalRing} />
            </div>
          </div>

          {/* RIGHT: India Engineering Delivery Hub Card */}
          <motion.div
            className={`${styles.officeCard} ${activeLocation === 'india' || activeLocation === 'both' ? styles.cardHighlighted : ''}`}
            onMouseEnter={() => setActiveLocation('india')}
            onMouseLeave={() => setActiveLocation('both')}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.flagIconWrap} title="India">
                {/* Official India Tiranga Flag with Ashoka Chakra */}
                <svg
                  className={styles.flagSvg}
                  viewBox="0 0 60 36"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="India Flag"
                >
                  <clipPath id="indiaClip">
                    <rect width="60" height="36" rx="3" />
                  </clipPath>
                  <g clipPath="url(#indiaClip)">
                    {/* Top Saffron Band */}
                    <rect width="60" height="12" y="0" fill="#FF9933" />
                    {/* Middle White Band */}
                    <rect width="60" height="12" y="12" fill="#FFFFFF" />
                    {/* Bottom India Green Band */}
                    <rect width="60" height="12" y="24" fill="#138808" />
                    {/* Ashoka Chakra (Navy Blue 24-spoke wheel) */}
                    <circle cx="30" cy="18" r="4.8" fill="none" stroke="#000080" strokeWidth="0.8" />
                    <circle cx="30" cy="18" r="1.1" fill="#000080" />
                    {/* 24 Spokes generated with rotational symmetry */}
                    <g stroke="#000080" strokeWidth="0.45" strokeLinecap="round">
                      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((deg) => (
                        <line
                          key={deg}
                          x1="30"
                          y1="13.2"
                          x2="30"
                          y2="22.8"
                          transform={`rotate(${deg} 30 18)`}
                        />
                      ))}
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <span className={styles.locationTag}>{india.tag}</span>
                <h3 className={styles.countryName}>{india.country}</h3>
              </div>
            </div>

            <div className={styles.companyMeta}>
              <h4 className={styles.companyName}>{india.company}</h4>
              <span className={styles.companyRole}>{india.role}</span>
            </div>

            <div className={styles.addressBox}>
              <LocationOnOutlinedIcon className={styles.pinIcon} />
              <div className={styles.addressText}>
                {india.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            <div className={styles.contactDetails}>
              <a href={`mailto:${india.email}`} className={styles.contactItem}>
                <EmailOutlinedIcon fontSize="small" className={styles.contactIcon} />
                <span>{india.email}</span>
              </a>
              <a href={`tel:${india.phone.replace(/[^0-9+]/g, '')}`} className={styles.contactItem}>
                <PhoneOutlinedIcon fontSize="small" className={styles.contactIcon} />
                <span>{india.phone}</span>
              </a>
            </div>

            <div className={styles.detailsList}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Timezone:</span>
                <span className={styles.detailValue}>{india.timezone}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Jurisdiction:</span>
                <span className={styles.detailValue}>{india.jurisdiction}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
