import React from 'react';
import Link from 'next/link';
import styles from './RecentActivityTable.module.css';
import { StatusBadge } from '../common/StatusBadge/StatusBadge';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ActivityItem {
  id: string;
  name: string;
  service: string;
  source: 'Enquiry' | 'Contact';
  date: string;
  status: string;
}

interface RecentActivityTableProps {
  activity: ActivityItem[];
}

export const RecentActivityTable: React.FC<RecentActivityTableProps> = ({ activity }) => {
  return (
    <div className={styles.tableCard}>
      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.title}>Recent Inbound Activity</h3>
          <p className={styles.subtitle}>Latest enquiries and contact form submissions</p>
        </div>
        <div className={styles.actions}>
          <Link href="/admin/enquiries" className={styles.viewLink}>
            Enquiries <ArrowForwardIcon sx={{ fontSize: 13 }} />
          </Link>
          <Link href="/admin/contacts" className={styles.viewLink}>
            Contacts <ArrowForwardIcon sx={{ fontSize: 13 }} />
          </Link>
        </div>
      </div>

      <div className={styles.tableContainer}>
        {activity.length === 0 ? (
          <div className={styles.emptyState}>No recent activity found.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Source</th>
                <th>Client Name</th>
                <th>Requested Service</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th className={styles.alignRight}>Action</th>
              </tr>
            </thead>
            <tbody>
              {activity.map((item) => {
                const dateStr = item.date
                  ? new Date(item.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : 'N/A';

                const targetHref =
                  item.source === 'Enquiry' ? '/admin/enquiries' : '/admin/contacts';

                return (
                  <tr key={`${item.source}-${item.id}`}>
                    <td>
                      <span
                        className={
                          item.source === 'Enquiry'
                            ? styles.badgeEnquiry
                            : styles.badgeContact
                        }
                      >
                        {item.source}
                      </span>
                    </td>
                    <td className={styles.nameCell}>{item.name}</td>
                    <td className={styles.serviceCell}>{item.service || 'General'}</td>
                    <td className={styles.dateCell}>{dateStr}</td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                    <td className={styles.alignRight}>
                      <Link href={targetHref} className={styles.actionBtn}>
                        Inspect
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

