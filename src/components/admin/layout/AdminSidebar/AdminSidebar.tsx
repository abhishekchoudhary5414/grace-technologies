'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import styles from './AdminSidebar.module.css';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const navItems = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: <DashboardOutlinedIcon fontSize="small" />,
  },
  {
    label: 'Enquiry Dashboard',
    href: '/admin/enquiries',
    icon: <MarkEmailReadOutlinedIcon fontSize="small" />,
  },
  {
    label: 'Contact Dashboard',
    href: '/admin/contacts',
    icon: <ContactMailOutlinedIcon fontSize="small" />,
  },
  {
    label: 'WhatsApp Dashboard',
    href: '/admin/whatsapp',
    icon: <WhatsAppIcon fontSize="small" />,
  },
];

export default function AdminSidebar({
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch {
      router.push('/admin/login');
    }
  };

  return (
    <aside
      className={`
        ${styles.sidebar}
        ${isOpen ? styles.sidebarOpen : ''}
        ${isCollapsed ? styles.sidebarCollapsed : ''}
      `}
      aria-label="Admin Navigation Sidebar"
    >
      <div className={styles.topContainer}>
        {/* Brand Area */}
        <div className={styles.brandArea}>
          <Link href="/admin/dashboard" className={styles.brandLink}>
            <Image
              src="/logo/logo.png"
              alt="Grace Technologies"
              width={34}
              height={34}
              className={styles.brandLogo}
            />
            {!isCollapsed && (
              <div className={styles.brandText}>
                <span className={styles.brandName}>Grace Tech</span>
                <span className={styles.brandTag}>Executive Console</span>
              </div>
            )}
          </Link>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onClose}
            className={styles.mobileCloseBtn}
            aria-label="Close sidebar"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Desktop Collapse Toggle Button */}
        <div className={styles.collapseToggleRow}>
          <button
            type="button"
            onClick={onToggleCollapse}
            className={styles.collapseToggleBtn}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRightIcon sx={{ fontSize: 18 }} />
            ) : (
              <>
                <ChevronLeftIcon sx={{ fontSize: 18 }} />
                <span className={styles.collapseToggleText}>Collapse View</span>
              </>
            )}
          </button>
        </div>

        {/* Navigation Section */}
        <nav className={styles.navSection} aria-label="Admin Primary Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                title={isCollapsed ? item.label : undefined}
                className={`
                  ${styles.navItem}
                  ${isActive ? styles.navItemActive : ''}
                  ${isCollapsed ? styles.navItemCollapsed : ''}
                `}
              >
                <span className={styles.iconSlot}>{item.icon}</span>
                {!isCollapsed && <span className={styles.navLabel}>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Area with Sign Out */}
      <div className={styles.footerArea}>
        <button
          type="button"
          onClick={handleLogout}
          title={isCollapsed ? 'Sign Out' : undefined}
          className={`
            ${styles.logoutBtn}
            ${isCollapsed ? styles.logoutBtnCollapsed : ''}
          `}
        >
          <LogoutOutlinedIcon fontSize="small" />
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
