'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './EnquiriesClient.module.css';
import { StatCard } from '@/components/admin/common/StatCard/StatCard';
import { StatusBadge } from '@/components/admin/common/StatusBadge/StatusBadge';
import { NotesModal } from '@/components/admin/common/NotesModal/NotesModal';

// MUI Icons
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DangerousIcon from '@mui/icons-material/Dangerous';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Enquiry {
  id: string;
  name: string;
  service: string;
  email: string;
  phone: string;
  status: 'New' | 'Confirmed' | 'Contacted' | 'Spam';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

interface EnquiryStats {
  total: number;
  new: number;
  confirmed: number;
  contacted: number;
  spam: number;
}

const SERVICES = [
  'All Services',
  'Website Development',
  'Merchant Account Management',
  'AI Automation',
  'Digital Marketing',
];

const STATUSES = ['All Statuses', 'New', 'Confirmed', 'Contacted', 'Spam'];

export default function EnquiriesClient() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [stats, setStats] = useState<EnquiryStats>({ total: 0, new: 0, confirmed: 0, contacted: 0, spam: 0 });
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Filters & Pagination
  const [search, setSearch] = useState('');
  const [service, setService] = useState('All Services');
  const [status, setStatus] = useState('All Statuses');
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  // Notes Modal state
  const [activeNotesItem, setActiveNotesItem] = useState<{ id: string; name: string; notes: string | null } | null>(null);

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const q = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
        sort,
      });
      if (search.trim()) q.set('search', search.trim());
      if (service !== 'All Services') q.set('service', service);
      if (status !== 'All Statuses') q.set('status', status);

      const res = await fetch(`/api/admin/enquiries?${q.toString()}`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setEnquiries(json.data || []);
        setTotal(json.total || 0);
        if (json.stats) {
          setStats(json.stats);
        }
      }
    } catch (err) {
      console.error('Failed to load enquiries', err);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, sort, search, service, status]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  // Handle live inline status change
  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus as any } : item))
        );
        // Refresh counts in the background
        fetchEnquiries();
      }
    } catch (err) {
      console.error('Failed to update status', err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Handle saving notes
  const handleSaveNotes = async (newNotes: string) => {
    if (!activeNotesItem) return;
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: activeNotesItem.id, notes: newNotes }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((item) =>
            item.id === activeNotesItem.id ? { ...item, notes: newNotes } : item
          )
        );
      }
    } catch (err) {
      console.error('Failed to update notes', err);
    }
  };

  const totalPages = Math.ceil(total / pageSize) || 1;

  return (
    <div className={styles.container}>
      {/* 5 StatCards */}
      <div className={styles.statsGrid}>
        <StatCard
          label="Total Enquiries"
          value={stats.total}
          icon={<QuestionAnswerIcon sx={{ fontSize: 20 }} />}
          subtext="All recorded"
        />
        <StatCard
          label="New Inbound"
          value={stats.new}
          icon={<FiberNewIcon sx={{ fontSize: 20 }} />}
          subtext="Unprocessed"
        />
        <StatCard
          label="Confirmed"
          value={stats.confirmed}
          icon={<CheckCircleIcon sx={{ fontSize: 20 }} />}
          subtext="Qualified leads"
        />
        <StatCard
          label="Contacted"
          value={stats.contacted}
          icon={<PhoneInTalkIcon sx={{ fontSize: 20 }} />}
          subtext="In communication"
        />
        <StatCard
          label="Spam Filtered"
          value={stats.spam}
          icon={<DangerousIcon sx={{ fontSize: 20 }} />}
          subtext="Disqualified"
        />
      </div>

      {/* Filter / Search Controls Bar */}
      <div className={styles.controlsBar}>
        <div className={styles.searchBox}>
          <SearchIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.4)' }} />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filterGroup}>
          <select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setPage(1);
            }}
            className={styles.selectInput}
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
            className={styles.selectInput}
          >
            {STATUSES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as 'newest' | 'oldest');
              setPage(1);
            }}
            className={styles.selectInput}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          <button
            onClick={() => fetchEnquiries()}
            className={styles.refreshBtn}
            title="Refresh Enquiries"
            aria-label="Refresh Enquiries"
          >
            <RefreshIcon sx={{ fontSize: 18 }} />
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '60px' }}>#</th>
                <th>Submission Time</th>
                <th>Client Details</th>
                <th>Requested Service</th>
                <th>Pipeline Status</th>
                <th>Internal Notes</th>
                <th className={styles.alignRight}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className={styles.loadingCell}>
                    Loading inquiries...
                  </td>
                </tr>
              ) : enquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className={styles.emptyCell}>
                    No enquiries match the current filters.
                  </td>
                </tr>
              ) : (
                enquiries.map((enq, index) => {
                  const serialNum = (page - 1) * pageSize + index + 1;
                  const dateStr = enq.created_at
                    ? new Date(enq.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'N/A';

                  // Format WhatsApp URL
                  const cleanPhone = enq.phone.replace(/[^0-9]/g, '');
                  const waGreeting = encodeURIComponent(
                    `Hello ${enq.name}, thank you for reaching out to Grace Technologies regarding our ${enq.service} services.`
                  );
                  const waHref = cleanPhone ? `https://wa.me/${cleanPhone}?text=${waGreeting}` : '#';

                  return (
                    <tr key={enq.id}>
                      <td className={styles.idCol}>
                        <span className={styles.idBadge}>#{serialNum}</span>
                      </td>
                      <td className={styles.dateCol}>
                        <span className={styles.dateText}>{dateStr}</span>
                      </td>
                      <td className={styles.clientCol}>
                        <div className={styles.clientName}>{enq.name}</div>
                        <div className={styles.clientContact}>
                          <a href={`mailto:${enq.email}`} className={styles.emailLink}>
                            {enq.email}
                          </a>
                        </div>
                        <div className={styles.clientPhone}>{enq.phone}</div>
                      </td>
                      <td className={styles.serviceCol}>
                        <span className={styles.serviceBadge}>{enq.service}</span>
                      </td>
                      <td className={styles.statusCol}>
                        <select
                          value={enq.status}
                          disabled={updatingId === enq.id}
                          onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                          className={styles.statusSelect}
                        >
                          <option value="New">New</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Spam">Spam</option>
                        </select>
                      </td>
                      <td className={styles.notesCol}>
                        <button
                          type="button"
                          className={`${styles.notesButton} ${enq.notes ? styles.notesButtonActive : ''}`}
                          onClick={() =>
                            setActiveNotesItem({
                              id: enq.id,
                              name: enq.name,
                              notes: enq.notes,
                            })
                          }
                          title="View / Edit Note Popup"
                        >
                          <EditNoteIcon sx={{ fontSize: 16 }} />
                          <span>{enq.notes ? 'View Note' : 'Add Note'}</span>
                        </button>
                      </td>
                      <td className={styles.actionsCol}>
                        <div className={styles.actionButtons}>
                          {cleanPhone && (
                            <a
                              href={waHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.iconActionBtn}
                              title="Message on WhatsApp"
                            >
                              <WhatsAppIcon sx={{ fontSize: 17 }} />
                            </a>
                          )}
                          {enq.phone && (
                            <a
                              href={`tel:${enq.phone}`}
                              className={styles.iconActionBtn}
                              title="Call Client"
                            >
                              <PhoneIcon sx={{ fontSize: 17 }} />
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              setActiveNotesItem({
                                id: enq.id,
                                name: enq.name,
                                notes: enq.notes,
                              })
                            }
                            className={styles.iconActionBtn}
                            title="Edit Notes"
                          >
                            <EditNoteIcon sx={{ fontSize: 19 }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className={styles.paginationBar}>
          <div className={styles.pageInfo}>
            Showing {enquiries.length > 0 ? (page - 1) * pageSize + 1 : 0} to{' '}
            {Math.min(page * pageSize, total)} of {total} entries
          </div>

          <div className={styles.pageControls}>
            <div className={styles.pageSizeSelect}>
              <span>Rows:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
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

      {/* Notes Modal */}
      {activeNotesItem && (
        <NotesModal
          isOpen={true}
          title={`Enquiry Notes - ${activeNotesItem.name}`}
          initialNotes={activeNotesItem.notes}
          onClose={() => setActiveNotesItem(null)}
          onSave={handleSaveNotes}
        />
      )}
    </div>
  );
}
