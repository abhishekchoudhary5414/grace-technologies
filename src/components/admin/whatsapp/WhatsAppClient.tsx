'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './WhatsAppClient.module.css';
import { StatCard } from '@/components/admin/common/StatCard/StatCard';
import { WhatsAppCharts } from './WhatsAppCharts';

// MUI Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LanguageIcon from '@mui/icons-material/Language';
import DevicesIcon from '@mui/icons-material/Devices';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface WhatsAppClick {
  id: string;
  page_url: string | null;
  page_path: string | null;
  referrer: string | null;
  browser: string | null;
  device_type: string | null;
  operating_system: string | null;
  clicked_at: string;
}

interface AnalyticsPayload {
  totalClicks: number;
  todayClicks: number;
  monthClicks: number;
  mostVisitedPage: string;
  mostUsedDevice: string;
  trend: Array<{ date: string; clicks: number }>;
  deviceDist: Array<{ name: string; value: number }>;
  browserDist: Array<{ name: string; value: number }>;
  pageDist: Array<{ name: string; value: number }>;
  recentClicks: WhatsAppClick[];
}

type RangeOption = 'today' | '7days' | 'month' | 'all';

export default function WhatsAppClient() {
  const [range, setRange] = useState<RangeOption>('all');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AnalyticsPayload>({
    totalClicks: 0,
    todayClicks: 0,
    monthClicks: 0,
    mostVisitedPage: 'N/A',
    mostUsedDevice: 'N/A',
    trend: [],
    deviceDist: [],
    browserDist: [],
    pageDist: [],
    recentClicks: [],
  });

  // Table pagination
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const fetchAnalytics = useCallback(async (r: RangeOption) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/whatsapp?range=${r}`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error('Failed to load WhatsApp analytics', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnalytics(range);
  }, [range, fetchAnalytics]);

  const clicks = data.recentClicks || [];
  const totalPages = Math.ceil(clicks.length / pageSize) || 1;
  const paginatedClicks = clicks.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={styles.container}>
      {/* Date Filter & Control Bar */}
      <div className={styles.topBar}>
        <div className={styles.rangeButtons}>
          <button
            type="button"
            className={`${styles.rangeBtn} ${range === 'today' ? styles.rangeBtnActive : ''}`}
            onClick={() => {
              setRange('today');
              setPage(1);
            }}
          >
            Today
          </button>
          <button
            type="button"
            className={`${styles.rangeBtn} ${range === '7days' ? styles.rangeBtnActive : ''}`}
            onClick={() => {
              setRange('7days');
              setPage(1);
            }}
          >
            Last 7 Days
          </button>
          <button
            type="button"
            className={`${styles.rangeBtn} ${range === 'month' ? styles.rangeBtnActive : ''}`}
            onClick={() => {
              setRange('month');
              setPage(1);
            }}
          >
            This Month
          </button>
          <button
            type="button"
            className={`${styles.rangeBtn} ${range === 'all' ? styles.rangeBtnActive : ''}`}
            onClick={() => {
              setRange('all');
              setPage(1);
            }}
          >
            All Time
          </button>
        </div>

        <button
          onClick={() => fetchAnalytics(range)}
          className={styles.refreshBtn}
          title="Refresh Data"
          aria-label="Refresh Data"
        >
          <RefreshIcon sx={{ fontSize: 18 }} />
        </button>
      </div>

      {/* 5 StatCards */}
      <div className={styles.statsGrid}>
        <StatCard
          label="Total WhatsApp Clicks"
          value={data.totalClicks}
          icon={<WhatsAppIcon sx={{ fontSize: 20 }} />}
          subtext="Clicks in selected period"
        />
        <StatCard
          label="Today's Clicks"
          value={data.todayClicks}
          icon={<TodayIcon sx={{ fontSize: 20 }} />}
          subtext="24h inbound engagement"
        />
        <StatCard
          label="This Month"
          value={data.monthClicks}
          icon={<DateRangeIcon sx={{ fontSize: 20 }} />}
          subtext="Monthly volume"
        />
        <StatCard
          label="Top Conversion Page"
          value={data.mostVisitedPage}
          icon={<LanguageIcon sx={{ fontSize: 20 }} />}
          subtext="Highest click origin"
        />
        <StatCard
          label="Leading Device"
          value={data.mostUsedDevice}
          icon={<DevicesIcon sx={{ fontSize: 20 }} />}
          subtext="Preferred platform"
        />
      </div>

      {/* Recharts Analytics Charts */}
      <WhatsAppCharts
        trend={data.trend}
        deviceDist={data.deviceDist}
        browserDist={data.browserDist}
      />

      {/* Telemetry Log Table */}
      <div className={styles.tableCard}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.title}>Click Telemetry Audit Log</h3>
            <p className={styles.subtitle}>Detailed click events with device and referrer telemetry</p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '60px' }}>#</th>
                <th>Timestamp</th>
                <th>Page Path</th>
                <th>Device</th>
                <th>Browser</th>
                <th>Operating System</th>
                <th>Referrer</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className={styles.loadingCell}>
                    Loading click records...
                  </td>
                </tr>
              ) : paginatedClicks.length === 0 ? (
                <tr>
                  <td colSpan={7} className={styles.emptyCell}>
                    No clicks recorded for the selected period.
                  </td>
                </tr>
              ) : (
                paginatedClicks.map((click, index) => {
                  const serialNum = (page - 1) * pageSize + index + 1;
                  const dateStr = click.clicked_at
                    ? new Date(click.clicked_at).toLocaleString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })
                    : 'N/A';

                  return (
                    <tr key={click.id}>
                      <td className={styles.idCol}>
                        <span className={styles.idBadge}>#{serialNum}</span>
                      </td>
                      <td className={styles.dateCol}>
                        <span className={styles.dateText}>{dateStr}</span>
                      </td>
                      <td className={styles.pathCol}>
                        <code className={styles.pathCode}>{click.page_path || '/'}</code>
                      </td>
                      <td>
                        <span className={styles.deviceBadge}>{click.device_type || 'Desktop'}</span>
                      </td>
                      <td className={styles.browserCol}>{click.browser || 'Unknown'}</td>
                      <td className={styles.osCol}>{click.operating_system || 'Unknown'}</td>
                      <td className={styles.refCol}>
                        <span className={styles.refText}>
                          {click.referrer && click.referrer !== 'Direct'
                            ? click.referrer
                            : 'Direct / Internal'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className={styles.paginationBar}>
          <div className={styles.pageInfo}>
            Showing {clicks.length > 0 ? (page - 1) * pageSize + 1 : 0} to{' '}
            {Math.min(page * pageSize, clicks.length)} of {clicks.length} events
          </div>

          <div className={styles.navButtons}>
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={styles.pageBtn}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 12 }} /> Prev
            </button>
            <span className={styles.pageNumber}>
              {page} / {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className={styles.pageBtn}
            >
              Next <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

