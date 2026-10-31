import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import CTASection from '@/components/common/CTASection/CTASection';
import LanguageIcon from '@mui/icons-material/Language';
import HubIcon from '@mui/icons-material/Hub';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import officesData from '@/config/offices.json';
import styles from './partnership.module.css';
import Logo from "../../../public/logo/logo.png"

export const metadata: Metadata = {
  title: 'UK–India Strategic Partnership | Grace Technologies & Ank Square',
  description:
    'Discover the strategic cross-border partnership between Grace Technologies (United Kingdom) and Ank Square Private Limited (India). Uniting British commercial strategy with high-velocity engineering excellence.',
};

export default function PartnershipPage() {
  const { uk, india } = officesData.offices;

  return (
    <div className={styles.page}>
      <Breadcrumb
        items={[{ label: 'UK–India Partnership' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Hero */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <div className={styles.heroContent}>
            <span className={styles.badge}>BILATERAL STRATEGIC ALLIANCE</span>
            <h1 className={styles.heroTitle}>
              British Business Vision. <br />
              Indian Technology Expertise.
            </h1>
            <p className={styles.heroSubtitle}>
              A formalized cross-border alliance between Grace Technologies (UK) and Ank Square Private Limited (India) structured to deliver institutional-grade digital systems and business transformation.
            </p>
          </div>
        </Container>
      </section>

      {/* Dual Corporate Profiles */}
      <section className={styles.profilesSection}>
        <Container size="wide">
          <div className={styles.profilesGrid}>
            {/* Grace Technologies UK */}
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.profileIconWrap}>
                  <LanguageIcon />
                </div>
                <div>
                  <span className={styles.profileCountry}>{uk.country}</span>
                  <h2 className={styles.profileTitle}>{uk.company}</h2>
                </div>
                <a
                  href={uk.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.urlBadge}
                >
                  <span>{uk.websiteDisplay}</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>

              {/* Official Logo Banner */}
              <div className={styles.logoBox}>
                <Image
                  src={Logo}
                  alt="Grace Technologies Official Logo"
                  width={160}
                  height={48}
                  className={styles.officialLogo}
                />
                <p className={styles.logoName}>Grace Technologies</p>
              </div>

              <p className={styles.profileRole}>{uk.role}</p>
              <p className={styles.profileDesc}>
                Headquartered in the UK, Grace Technologies manages business consulting, high-level architecture planning, client relationship management, and commercial service delivery. We ensure every technical solution serves clear, quantifiable business objectives.
              </p>

              <div className={styles.coreContributions}>
                <h4 className={styles.contribTitle}>Key Responsibilities:</h4>
                <ul className={styles.contribList}>
                  <li>Commercial requirements scoping and ROI analysis</li>
                  <li>Client advisory and British corporate governance</li>
                  <li>Executive milestone oversight & SLA guarantee</li>
                  <li>Merchant account operational advisory</li>
                </ul>
              </div>

              <div className={styles.cardFooterLink}>
                <a
                  href={uk.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  <span>Visit Official Site ({uk.websiteDisplay})</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>
            </div>

            {/* Central Nexus Symbol */}
            <div className={styles.nexusStrip}>
              <div className={styles.nexusCircle}>
                <HandshakeIcon className={styles.nexusIcon} />
                <span className={styles.nexusTag}>FORMAL ALLIANCE</span>
              </div>
            </div>

            {/* Ank Square India */}
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.profileIconWrap}>
                  <HubIcon />
                </div>
                <div>
                  <span className={styles.profileCountry}>{india.country}</span>
                  <h2 className={styles.profileTitle}>{india.company}</h2>
                </div>
                <a
                  href={india.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.urlBadge}
                >
                  <span>{india.websiteDisplay}</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>

              {/* Official Logo Banner */}
              <div className={styles.logoBox}>
                <Image
                  src="/logo/anksquarelogo.svg"
                  alt="Ank Square Private Limited Official Logo"
                  width={160}
                  height={48}
                  className={styles.officialLogo}
                />
                <p className={styles.logoName}>Ank Square Private Limited</p>
              </div>

              <p className={styles.profileRole}>{india.role}</p>
              <p className={styles.profileDesc}>
                Based in India, Ank Square Private Limited serves as our premier engineering and technology execution partner. Their high-caliber engineering team implements modern web platforms, AI automation systems, and complex digital integrations.
              </p>

              <div className={styles.coreContributions}>
                <h4 className={styles.contribTitle}>Key Responsibilities:</h4>
                <ul className={styles.contribList}>
                  <li>Full-stack Next.js and TypeScript engineering</li>
                  <li>AI agent pipelines, OCR systems, and custom automation</li>
                  <li>DevOps, continuous deployment, and security hardening</li>
                  <li>Technical SEO architecture & performance engineering</li>
                </ul>
              </div>

              <div className={styles.cardFooterLink}>
                <a
                  href={india.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  <span>Visit Official Site ({india.websiteDisplay})</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Legal Structure Clarity Notice */}
      <section className={styles.legalSection}>
        <Container size="narrow">
          <div className={styles.legalNotice}>
            <h3 className={styles.legalTitle}>Formal Independent Partnership Framework</h3>
            <p className={styles.legalText}>
              Grace Technologies ({uk.country}) and Ank Square Private Limited ({india.country}) operate as distinct, independently registered corporate legal entities. Neither entity owns the other, nor do they constitute a single corporate entity. Instead, both organisations operate under a legally defined strategic partnership agreement to offer unified, cross-border commercial and technical solutions to international clients.
            </p>
          </div>
        </Container>
      </section>

      {/* Client Benefits */}
      <section className={styles.benefitsSection}>
        <Container size="wide">
          <SectionHeading
            label="THE BILATERAL ADVANTAGE"
            title="Why Our Delivery Model Delivers Superior Results."
            description="Our clients receive the distinct benefits of both corporate UK advisory proximity and premier Indian engineering depth."
            align="center"
          />

          <div className={styles.benefitsGrid}>
            <div className={styles.bCard}>
              <div className={styles.bIconWrap}>
                <SpeedIcon />
              </div>
              <h3 className={styles.bTitle}>Accelerated Time-to-Market</h3>
              <p className={styles.bDesc}>
                Strategic daytime governance in the UK coupled with overlapping continuous engineering cycles in India enables agile sprint completions and faster system rollouts.
              </p>
            </div>

            <div className={styles.bCard}>
              <div className={styles.bIconWrap}>
                <MilitaryTechIcon />
              </div>
              <h3 className={styles.bTitle}>Uncompromising Quality</h3>
              <p className={styles.bDesc}>
                Every digital asset is architected to British corporate aesthetic standards, backed by exhaustive automated testing, TypeScript strict mode, and robust documentation.
              </p>
            </div>

            <div className={styles.bCard}>
              <div className={styles.bIconWrap}>
                <VerifiedUserIcon />
              </div>
              <h3 className={styles.bTitle}>Cost-Effective Scalability</h3>
              <p className={styles.bDesc}>
                Clients benefit from high-tier enterprise technology architecture without the excessive overhead typical of London traditional consultancies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Experience the Power of Our Global Delivery Model."
        description="Schedule an initial strategic discovery conversation with our UK leadership team."
        primaryCtaText="Initiate Partnership Discussion"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
