'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon = false,
  disabled = false,
  className = '',
}: ButtonProps) {
  const combinedClassName = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  const content = (
    <>
      <span className={styles.text}>{children}</span>
      {icon && (
        <span className={styles.iconWrap}>
          <ArrowForwardIcon fontSize="inherit" className={styles.arrowIcon} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {content}
    </motion.button>
  );
}

