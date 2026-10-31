import React from 'react';
import styles from './WhatsAppCharts.module.css';
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

interface WhatsAppChartsProps {
  trend: Array<{ date: string; clicks: number }>;
  deviceDist: Array<{ name: string; value: number }>;
  browserDist: Array<{ name: string; value: number }>;
}

const DEVICE_COLORS = [
  'var(--color-accent)',
  'var(--color-text-secondary)',
  'var(--color-text-subtle)',
  'var(--color-border-soft)',
];

export const WhatsAppCharts: React.FC<WhatsAppChartsProps> = ({
  trend,
  deviceDist,
  browserDist,
}) => {
  const displayTrends =
    trend.length > 0
      ? trend
      : [
          { date: 'Day 1', clicks: 0 },
          { date: 'Day 2', clicks: 0 },
          { date: 'Day 3', clicks: 0 },
          { date: 'Today', clicks: 0 },
        ];

  const displayDevices =
    deviceDist.filter((d) => d.value > 0).length > 0
      ? deviceDist.filter((d) => d.value > 0)
      : [
          { name: 'Desktop', value: 1 },
          { name: 'Mobile', value: 1 },
        ];

  const displayBrowsers =
    browserDist.filter((b) => b.value > 0).length > 0
      ? browserDist.filter((b) => b.value > 0)
      : [
          { name: 'Chrome', value: 0 },
          { name: 'Safari', value: 0 },
          { name: 'Edge', value: 0 },
          { name: 'Firefox', value: 0 },
        ];

  return (
    <div className={styles.chartsGrid}>
      {/* Trend Area Chart */}
      <div className={styles.chartCardLarge}>
        <div className={styles.chartHeader}>
          <div>
            <h3 className={styles.chartTitle}>WhatsApp Click Trajectory</h3>
            <p className={styles.chartSubtitle}>Engagement frequency over the selected timeframe</p>
          </div>
          <span className={styles.liveBadge}>Real-time telemetry</span>
        </div>
        <div className={styles.chartBody}>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={displayTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="waGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-subtle)" vertical={false} />
              <XAxis
                dataKey="date"
                stroke="var(--color-border-active)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--color-border-active)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-primary)',
                  borderColor: 'var(--color-border-soft)',
                  borderRadius: '8px',
                  color: 'var(--color-accent)',
                  fontSize: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="var(--color-accent)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#waGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Device Breakdown Donut */}
      <div className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <div>
            <h3 className={styles.chartTitle}>Device Distribution</h3>
            <p className={styles.chartSubtitle}>Desktop vs Mobile / Tablet</p>
          </div>
        </div>
        <div className={styles.chartBodyCenter}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={displayDevices}
                innerRadius={50}
                outerRadius={75}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {displayDevices.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={DEVICE_COLORS[index % DEVICE_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-primary)',
                  borderColor: 'var(--color-border-soft)',
                  borderRadius: '8px',
                  color: 'var(--color-accent)',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.legendGrid}>
            {displayDevices.map((item, idx) => (
              <div key={idx} className={styles.legendItem}>
                <span
                  className={styles.legendDot}
                  style={{ backgroundColor: DEVICE_COLORS[idx % DEVICE_COLORS.length] }}
                />
                <span className={styles.legendLabel}>{item.name}</span>
                <span className={styles.legendValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Browser Bar Chart */}
      <div className={styles.chartCardLarge}>
        <div className={styles.chartHeader}>
          <div>
            <h3 className={styles.chartTitle}>Browser Telemetry</h3>
            <p className={styles.chartSubtitle}>Client browser environment distribution</p>
          </div>
        </div>
        <div className={styles.chartBody}>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={displayBrowsers} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-subtle)" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="var(--color-border-active)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--color-border-active)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-primary)',
                  borderColor: 'var(--color-border-soft)',
                  borderRadius: '8px',
                  color: 'var(--color-accent)',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="value" fill="var(--color-text-secondary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

