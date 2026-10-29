'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container/Container';
import officesData from '@/config/offices.json';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = 2026;
  const { uk, india } = officesData.offices;

  return (
    <footer className={styles.footer}>
      <Container size="wide">
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoMark}>
                <span className={styles.markG}>G</span>
              </div>
              <div className={styles.brandText}>
                <span className={styles.brandTitle}>GRACE</span>
                <span className={styles.brandSubtitle}>TECHNOLOGIES</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              A premier United Kingdom technology and business services consultancy. Strategically partnered with {india.company}, to deliver intelligent, scalable, and high-impact digital solutions.
            </p>
            <div className={styles.partnerBadge}>
              <span className={styles.partnerDot} />
              <span>UK Business | Global Technology Partnership</span>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/website-development" className={styles.footerLink}>
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/merchant-account-management" className={styles.footerLink}>
                  Merchant Account Management
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className={styles.footerLink}>
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className={styles.footerLink}>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLinkHighlight}>
                  All Capabilities →
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Grace Technologies
                </Link>
              </li>
              <li>
                <Link href="/partnership" className={styles.footerLink}>
                  UK–India Partnership
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact & Consultation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className={styles.footerLink}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Headquarters & Hub</h4>
            <div className={styles.locationItem}>
              <span className={styles.locLabel}>{uk.company}</span>
              <p className={styles.locDetail}>{uk.addressLines.join(', ')}</p>
              <p className={styles.locSub}>{uk.email}</p>
              <p className={styles.locSub}>{uk.phone}</p>
            </div>

            <div className={styles.locationItem}>
              <span className={styles.locLabel}>{india.company}</span>
              <p className={styles.locDetail}>{india.addressLines.join(', ')}</p>
              <p className={styles.locSub}>{india.email}</p>
              <p className={styles.locSub}>{india.phone}</p>
            </div>

            <div className={styles.directContact}>
              <Link href="/contact" className={styles.contactEmail}>
                Initiate Enquiry →
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {currentYear} Grace Technologies. All rights reserved. Strategically partnered with {india.company}.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy
            </Link>
            <span className={styles.separator}>•</span>
            <Link href="/terms-and-conditions" className={styles.legalLink}>
              Terms
            </Link>
            <span className={styles.separator}>•</span>
            <Link href="/contact" className={styles.legalLink}>
              Support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
