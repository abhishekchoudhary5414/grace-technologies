'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import { openEnquiryModal } from '@/utils/modal';
import styles from './Header.module.css';
import Logo from '../../../../public/logo/logo.png';
import Image from 'next/image';

const servicesList = [
  {
    title: 'Website Development',
    href: '/services/website-development',
    description: 'Digital experiences designed to make an impact. High-performance Next.js architectures.',
    icon: CodeIcon,
  },
  {
    title: 'Merchant Account Management',
    href: '/services/merchant-account-management',
    description: 'Payment operations, documentation advisory and ongoing provider coordination.',
    icon: AccountBalanceWalletIcon,
  },
  {
    title: 'AI Automation',
    href: '/services/ai-automation',
    description: 'Workflow orchestration, intelligent customer engines, and custom enterprise AI solutions.',
    icon: SmartToyIcon,
  },
  {
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    description: 'Data-driven SEO, conversion optimization, and high-impact multi-channel acquisition.',
    icon: TrendingUpIcon,
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container size="wide" className={styles.container}>
        <div className={styles.inner}>
          {/* Logo / Wordmark */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoMark}>
              <Image src={Logo} alt="Grace Technologies Logo" />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>GRACE</span>
              <span className={styles.brandSubtitle}>TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === 'file:///' ? styles.active : ''}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
            >
              About
            </Link>

            {/* Services with Dropdown */}
            <div
              className={styles.dropdownTrigger}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`${styles.navLink} ${pathname.startsWith('/services') ? styles.active : ''}`}
              >
                Services
                <KeyboardArrowDownIcon
                  className={`${styles.dropdownChevron} ${servicesOpen ? styles.chevronOpen : ''}`}
                />
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className={styles.dropdownMenu}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={styles.dropdownGrid}>
                      {servicesList.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={styles.dropdownItem}
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className={styles.dropdownItemIcon}>
                              <Icon fontSize="small" />
                            </div>
                            <div className={styles.dropdownItemContent}>
                              <span className={styles.dropdownItemTitle}>
                                {service.title}
                              </span>
                              <span className={styles.dropdownItemDesc}>
                                {service.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className={styles.dropdownFooter}>
                      <Link
                        href="/services"
                        className={styles.allServicesLink}
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>View All Services</span>
                        <ArrowForwardIcon fontSize="inherit" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/projects"
              className={`${styles.navLink} ${pathname.startsWith('/project') ? styles.active : ''}`}
            >
              Projects
            </Link>
            <Link
              href="/client"
              className={`${styles.navLink} ${pathname.startsWith('/client') ? styles.active : ''}`}
            >
              Clients
            </Link>
            <Link
              href="/partnership"
              className={`${styles.navLink} ${pathname === '/partnership' ? styles.active : ''}`}
            >
              Partnership
            </Link>
            <Link
              href="/contact"
              className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className={styles.desktopActions}>
            <Button
              variant="primary"
              size="sm"
              icon
              onClick={() => openEnquiryModal()}
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container>
              <div className={styles.mobileInner}>
                <Link href="/" className={styles.mobileLink}>
                  Home
                </Link>
                <Link href="/about" className={styles.mobileLink}>
                  About
                </Link>
                <div className={styles.mobileServicesSection}>
                  <Link href="/services" className={styles.mobileLinkHeading}>
                    Services
                  </Link>
                  <div className={styles.mobileServicesList}>
                    {servicesList.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={styles.mobileServiceItem}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/projects" className={styles.mobileLink}>
                  Projects
                </Link>
                <Link href="/client" className={styles.mobileLink}>
                  Clients
                </Link>
                <Link href="/partnership" className={styles.mobileLink}>
                  UK–India Partnership
                </Link>
                <Link href="/contact" className={styles.mobileLink}>
                  Contact Us
                </Link>
                <div className={styles.mobileCtaWrapper}>
                  <Button
                    variant="primary"
                    size="md"
                    icon
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openEnquiryModal();
                    }}
                  >
                    Let&apos;s Talk
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
