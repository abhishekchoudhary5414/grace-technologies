'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import LanguageIcon from '@mui/icons-material/Language';
import HubIcon from '@mui/icons-material/Hub';
import HandshakeIcon from '@mui/icons-material/Handshake';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import officesData from '@/config/offices.json';
import styles from './PartnershipSection.module.css';

export default function PartnershipSection() {
  const { uk, india } = officesData.offices;

  return (
    <section className={styles.section}>
      <Container size="wide">
        <div className={styles.header}>
          <span className={styles.badge}>STRATEGIC BILATERAL COLLABORATION</span>
          <h2 className={styles.title}>
            British Business Vision. <br />
            Indian Technology Expertise.
          </h2>
          <p className={styles.description}>
            A strategic partnership combining United Kingdom commercial leadership and strategic client governance with world-class engineering execution from Ank Square Private Limited, India.
          </p>
        </div>

        {/* Bilateral Interconnected Visual Grid */}
        <div className={styles.bilateralContainer}>
          {/* UK Entity Card */}
          <motion.div
            className={styles.partnerCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardTopRow}>
              <div className={styles.partnerBadge}>
                <LanguageIcon fontSize="small" />
                <span>{uk.country}</span>
              </div>
              <a
                href={uk.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websitePill}
              >
                <span>{uk.websiteDisplay}</span>
                <OpenInNewIcon className={styles.extIcon} />
              </a>
            </div>

            {/* Official Logo Banner */}
            <div className={styles.logoBanner}>
              <Image
                src="/logo/logo.png"
                alt="Grace Technologies Official Logo"
                width={160}
                height={48}
                className={styles.officialLogo}
              />
              <p>Grace Technologies</p>
            </div>

            <h3 className={styles.companyName}>{uk.company}</h3>
            <p className={styles.entityRole}>{uk.role}</p>

            <ul className={styles.roleList}>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>Business development & client relationships</span>
              </li>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>High-level commercial strategy & project scoping</span>
              </li>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>End-to-end service coordination & governance</span>
              </li>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>British corporate elegance & executive reporting</span>
              </li>
            </ul>

            <div className={styles.websiteActionRow}>
              <a
                href={uk.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitLink}
              >
                <span>Visit {uk.websiteDisplay}</span>
                <OpenInNewIcon fontSize="inherit" />
              </a>
            </div>
          </motion.div>

          {/* Central Interactive Connector */}
          <div className={styles.centralNexus}>
            <div className={styles.nexusLine} />
            <div className={styles.nexusHub}>
              <HandshakeIcon className={styles.nexusIcon} />
              <span className={styles.nexusText}>SYNERGY</span>
            </div>
            <div className={styles.nexusLine} />
          </div>

          {/* Indian Entity Card */}
          <motion.div
            className={styles.partnerCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardTopRow}>
              <div className={styles.partnerBadge}>
                <HubIcon fontSize="small" />
                <span>{india.country}</span>
              </div>
              <a
                href={india.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websitePill}
              >
                <span>{india.websiteDisplay}</span>
                <OpenInNewIcon className={styles.extIcon} />
              </a>
            </div>

            {/* Official Logo Banner */}
            <div className={styles.logoBanner}>
              <Image
                src="/ank-square-logo.svg"
                alt="Ank Square Private Limited Official Logo"
                width={160}
                height={48}
                className={styles.officialLogo}
              />
            </div>

            <h3 className={styles.companyName}>{india.company}</h3>
            <p className={styles.entityRole}>{india.role}</p>

            <ul className={styles.roleList}>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>Technical architecture & full-stack development</span>
              </li>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>AI engineering, model fine-tuning & automation pipelines</span>
              </li>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>Digital service delivery & technical scaling</span>
              </li>
              <li className={styles.roleItem}>
                <span className={styles.bullet}>•</span>
                <span>Rigorous automated QA, security, & SLA monitoring</span>
              </li>
            </ul>

            <div className={styles.websiteActionRow}>
              <a
                href={india.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitLink}
              >
                <span>Visit {india.websiteDisplay}</span>
                <OpenInNewIcon fontSize="inherit" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Explanatory disclaimer / Legal Distinction */}
        <div className={styles.disclaimerBox}>
          <p className={styles.disclaimerText}>
            Grace Technologies ({uk.country}) and Ank Square Private Limited ({india.country}) operate as distinct, independently registered corporate legal entities bound by a formal bilateral partnership agreement to deliver exceptional cross-border technology consulting and engineering.
          </p>
          <div className={styles.ctaWrapper}>
            <Button href="/partnership" variant="primary" size="md" icon>
              Discover Our Partnership
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
