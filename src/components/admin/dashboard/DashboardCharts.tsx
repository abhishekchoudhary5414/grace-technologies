import React from 'react';
import styles from './DashboardCharts.module.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

interface DashboardChartsProps {
  enquiryTrends: Array<{ date: string; count: number }>;
  statusDistribution: Array<{ name: string; value: number }>;
  serviceDistribution: Array<{ name: string; value: number }>;
}

const STATUS_COLORS: Record<string, string> = {
  New: 'rgba(255, 255, 255, 0.95)',
  Confirmed: 'rgba(255, 255, 255, 0.7)',
  Contacted: 'rgba(255, 255, 255, 0.45)',
  Spam: 'rgba(255, 255, 255, 0.2)',
};

export const DashboardCharts: React.FC<DashboardChartsProps> = ({
  enquiryTrends,
  statusDistribution,
  serviceDistribution,
}) => {
  // Ensure we have at least fallback data points so charts render gracefully
  const displayTrends = enquiryTrends.length > 0
    ? enquiryTrends
    : [
        { date: 'Day 1', count: 0 },
        { date: 'Day 2', count: 0 },
        { date: 'Day 3', count: 0 },
        { date: 'Today', count: 0 },
      ];

  const displayStatuses = statusDistribution.filter(s => s.value > 0).length > 0
    ? statusDistribution.filter(s => s.value > 0)
    : [
        { name: 'New', value: 1 },
        { name: 'Confirmed', value: 1 },
      ];

  const displayServices = serviceDistribution.filter(s => s.value > 0).length > 0
    ? serviceDistribution.filter(s => s.value > 0)
    : [
        { name: 'Web Dev', value: 0 },
        { name: 'Merchant', value: 0 },
        { name: 'AI Auto', value: 0 },
        { name: 'Digital Mkt', value: 0 },
      ];

  return (
    <div className={styles.chartsGrid}>
      {/* Trend Area Chart */}
      <div className={styles.chartCardLarge}>
        <div className={styles.chartHeader}>
          <div>
            <h3 className={styles.chartTitle}>Enquiry & Lead Volume</h3>
            <p className={styles.chartSubtitle}>Daily submission trajectory</p>
          </div>
          <span className={styles.trendBadge}>Live Sync</span>
        </div>
        <div className={styles.chartBody}>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={displayTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#142B45" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.07)" vertical={false} />
              <XAxis
                dataKey="date"
                stroke="rgba(255, 255, 255, 0.4)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="rgba(255, 255, 255, 0.4)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-primary)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: 'var(--color-accent)',
                  fontSize: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="var(--color-accent)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#primaryGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Status Donut Chart */}
      <div className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <div>
            <h3 className={styles.chartTitle}>Status Breakdown</h3>
            <p className={styles.chartSubtitle}>Enquiry pipeline states</p>
          </div>
        </div>
        <div className={styles.chartBodyCenter}>
          <ResponsiveContainer width="100%" height={210}>
            <PieChart>
              <Pie
                data={displayStatuses}
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {displayStatuses.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={STATUS_COLORS[entry.name] || 'rgba(255, 255, 255, 0.3)'}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-primary)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: 'var(--color-accent)',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.legendGrid}>
            {displayStatuses.map((item, idx) => (
              <div key={idx} className={styles.legendItem}>
                <span
                  className={styles.legendDot}
                  style={{ backgroundColor: STATUS_COLORS[item.name] || 'rgba(255, 255, 255, 0.3)' }}
                />
                <span className={styles.legendLabel}>{item.name}</span>
                <span className={styles.legendValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Distribution Bar Chart */}
      <div className={styles.chartCardLarge}>
        <div className={styles.chartHeader}>
          <div>
            <h3 className={styles.chartTitle}>Service Demand Distribution</h3>
            <p className={styles.chartSubtitle}>Client inquiries partitioned by core service vertical</p>
          </div>
        </div>
        <div className={styles.chartBody}>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={displayServices} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.07)" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="rgba(255, 255, 255, 0.4)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                interval={0}
                angle={-15}
                textAnchor="end"
              />
              <YAxis
                stroke="rgba(255, 255, 255, 0.4)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-primary)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: 'var(--color-accent)',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="value" fill="rgba(255, 255, 255, 0.75)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

