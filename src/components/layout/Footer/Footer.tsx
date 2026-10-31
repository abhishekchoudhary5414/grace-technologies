import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  LinkedIn,
  X,
  YouTube,
} from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import Container from '@/components/common/Container/Container';
import officesData from '@/config/offices.json';
import styles from './Footer.module.css';
import Logo from '../../../../public/logo/logo.png';


export default function Footer() {
  const currentYear = 2026;
  const { uk, india } = officesData.offices;
  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/gracetechnologiesofficial/', icon: Instagram },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1CKuqfF3Ef/', icon: Facebook },
    { label: 'YouTube', href: 'https://www.youtube.com/@Gracetechnologiesofficial', icon: YouTube },
    { label: 'X', href: 'https://x.com/grace_Official4', icon: X },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedIn },
  ];

  return (
    <footer className={styles.footer}>
      <Container size="wide">
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoMark}>
                <Image
                  src={Logo}
                  alt="Grace Technologies Logo"
                  width={38}
                  height={38}
                  className={styles.logoImage}
                />
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
              <span>Global Technology Partnership</span>
            </div>

            <div className={styles.socials}>
              <span className={styles.socialLabel}>Follow us</span>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon fontSize="small" />
                    </a>
                  );
                })}
              </div>
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
                <Link href="/projects" className={styles.footerLink}>
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/client" className={styles.footerLink}>
                  Client Case Studies
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
            
            {/* UK Headquarters */}
            <div className={styles.locationItem}>
              <span className={styles.locLabel}>
                <BusinessOutlinedIcon sx={{ fontSize: 16 }} className={styles.locIcon} />
                <span>{uk.company}</span>
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${uk.company}, ${uk.addressLines.join(', ')}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.locLink}
                title="View on Google Maps"
              >
                <LocationOnOutlinedIcon sx={{ fontSize: 15 }} className={styles.detailIcon} />
                <span className={styles.locDetail}>{uk.addressLines.join(', ')}</span>
              </a>
              <a
                href={`mailto:${uk.email}`}
                className={styles.locLink}
                title="Send Email"
              >
                <EmailOutlinedIcon sx={{ fontSize: 14 }} className={styles.subIcon} />
                <span className={styles.locSub}>{uk.email}</span>
              </a>
              <a
                href={`tel:${uk.phone.replace(/[^+\d]/g, '')}`}
                className={styles.locLink}
                title="Call Office"
              >
                <PhoneOutlinedIcon sx={{ fontSize: 14 }} className={styles.subIcon} />
                <span className={styles.locSub}>{uk.phone}</span>
              </a>
            </div>

            {/* India Technology Hub */}
            <div className={styles.locationItem}>
              <span className={styles.locLabel}>
                <BusinessOutlinedIcon sx={{ fontSize: 16 }} className={styles.locIcon} />
                <span>{india.company}</span>
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${india.company}, ${india.addressLines.join(', ')}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.locLink}
                title="View on Google Maps"
              >
                <LocationOnOutlinedIcon sx={{ fontSize: 15 }} className={styles.detailIcon} />
                <span className={styles.locDetail}>{india.addressLines.join(', ')}</span>
              </a>
              <a
                href={`mailto:${india.email}`}
                className={styles.locLink}
                title="Send Email"
              >
                <EmailOutlinedIcon sx={{ fontSize: 14 }} className={styles.subIcon} />
                <span className={styles.locSub}>{india.email}</span>
              </a>
              <a
                href={`tel:${india.phone.replace(/[^+\d]/g, '')}`}
                className={styles.locLink}
                title="Call Office"
              >
                <PhoneOutlinedIcon sx={{ fontSize: 14 }} className={styles.subIcon} />
                <span className={styles.locSub}>{india.phone}</span>
              </a>
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
            <span className={styles.separator}>•</span>
            <Link href="/admin/login" className={styles.legalLink}>
              Admin
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
