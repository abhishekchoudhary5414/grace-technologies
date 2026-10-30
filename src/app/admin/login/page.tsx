'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './login.module.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username.trim() || !password.trim()) {
      setErrorMsg('Please enter both username and password.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || 'Invalid username or password.');
        setIsLoading(false);
        return;
      }

      // Successful authentication -> redirect to admin dashboard
      router.push('/admin/dashboard');
      router.refresh();
    } catch {
      setErrorMsg('Connection error. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginDecor} />

      <div className={styles.loginCard}>
        <div className={styles.brandHeader}>
          <Image
            src="/logo/logo.png"
            alt="Grace Technologies Logo"
            width={58}
            height={58}
            className={styles.logoImage}
            priority
          />
          <h1 className={styles.portalTitle}>Admin Portal</h1>
          <p className={styles.portalSubtitle}>Grace Technologies Executive Console</p>
        </div>

        {errorMsg && (
          <div className={styles.errorBanner} role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="admin-username" className={styles.label}>
              Username
            </label>
            <input
              id="admin-username"
              type="text"
              autoComplete="username"
              className={styles.input}
              placeholder="Enter administrator username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="admin-password" className={styles.label}>
              Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                className={`${styles.input} ${styles.inputWithIcon}`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
              <button
                type="button"
                className={styles.togglePasswordBtn}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
              </button>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isLoading}>
            {isLoading ? (
              <>
                <CircularProgress size={16} sx={{ color: 'var(--color-primary)' }} />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <LockOutlinedIcon fontSize="small" />
                <span>Sign In to Console</span>
              </>
            )}
          </button>
        </form>

        <div className={styles.cardFooter}>
          Grace Technologies &bull; Secure Encrypted Session
        </div>
      </div>
    </div>
  );
}

