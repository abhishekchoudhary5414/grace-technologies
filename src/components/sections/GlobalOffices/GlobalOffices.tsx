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
              <div className={styles.flagIconWrap}>
                <LanguageIcon />
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
              <div className={styles.flagIconWrap}>
                <HubIcon />
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
