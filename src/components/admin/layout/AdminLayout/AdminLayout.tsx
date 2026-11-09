'use client';

import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AdminHeader from '../AdminHeader/AdminHeader';
import styles from './AdminLayout.module.css';

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  title?: string;
  activePath?: string;
  adminName?: string;
  adminRole?: string;
}

export function AdminLayout({
  children,
  pageTitle,
  title,
  adminName = 'Administrator',
  adminRole = 'Executive Console',
}: AdminLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const saved = window.localStorage.getItem('gt_admin_sidebar_collapsed');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('gt_admin_sidebar_collapsed', String(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const displayTitle = pageTitle || title || 'Management Portal';

  return (
    <div className={styles.adminContainer}>
      <AdminSidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
      />

      {/* Mobile / Tablet Backdrop */}
      {mobileSidebarOpen && (
        <div
          className={styles.backdropVisible}
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`
          ${styles.mainWrapper}
          ${isCollapsed ? styles.mainWrapperCollapsed : ''}
        `}
      >
        <AdminHeader
          pageTitle={displayTitle}
          onMenuToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          adminName={adminName}
          adminRole={adminRole}
        />

        <main className={styles.contentArea}>{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
