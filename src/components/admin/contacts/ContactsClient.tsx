'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './ContactsClient.module.css';
import { StatCard } from '@/components/admin/common/StatCard/StatCard';
import { NotesModal } from '@/components/admin/common/NotesModal/NotesModal';
import { MessageModal } from '@/components/admin/common/MessageModal/MessageModal';

// MUI Icons
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DangerousIcon from '@mui/icons-material/Dangerous';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  service: string;
  messages: string;
  status: 'New' | 'Contacted' | 'Resolved' | 'Spam';
  notes: string | null;
  created_at: string;
  updated_at: string;
}

interface ContactStats {
  total: number;
  new: number;
  contacted: number;
  resolved: number;
  spam: number;
}

const SERVICES = [
  'All Services',
  'Website Development',
  'Merchant Account Management',
  'AI Automation',
  'Digital Marketing',
];

const STATUSES = ['All Statuses', 'New', 'Contacted', 'Resolved', 'Spam'];

export default function ContactsClient() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [stats, setStats] = useState<ContactStats>({ total: 0, new: 0, contacted: 0, resolved: 0, spam: 0 });
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

  // Modal states
  const [activeNotesItem, setActiveNotesItem] = useState<{ id: string; name: string; notes: string | null } | null>(null);
  const [activeMessageItem, setActiveMessageItem] = useState<ContactSubmission | null>(null);

  const fetchContacts = useCallback(async () => {
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

      const res = await fetch(`/api/admin/contacts?${q.toString()}`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setContacts(json.data || []);
        setTotal(json.total || 0);
        if (json.stats) {
          setStats(json.stats);
        }
      }
    } catch (err) {
      console.error('Failed to load contact submissions', err);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, sort, search, service, status]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // Handle status update
  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setContacts((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus as any } : item))
        );
        fetchContacts();
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
      const res = await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: activeNotesItem.id, notes: newNotes }),
      });
      if (res.ok) {
        setContacts((prev) =>
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
          label="Total Contacts"
          value={stats.total}
          icon={<ContactMailIcon sx={{ fontSize: 20 }} />}
          subtext="Full form enquiries"
        />
        <StatCard
          label="New Inbound"
          value={stats.new}
          icon={<FiberNewIcon sx={{ fontSize: 20 }} />}
          subtext="Requires contact"
        />
        <StatCard
          label="In Contact"
          value={stats.contacted}
          icon={<PhoneInTalkIcon sx={{ fontSize: 20 }} />}
          subtext="Under discussion"
        />
        <StatCard
          label="Resolved / Closed"
          value={stats.resolved}
          icon={<DoneAllIcon sx={{ fontSize: 20 }} />}
          subtext="Processed deals"
        />
        <StatCard
          label="Spam Filtered"
          value={stats.spam}
          icon={<DangerousIcon sx={{ fontSize: 20 }} />}
          subtext="Flagged entries"
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
            onClick={() => fetchContacts()}
            className={styles.refreshBtn}
            title="Refresh Contact Submissions"
            aria-label="Refresh Contact Submissions"
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
                <th>Submitted</th>
                <th>Client Name & Email</th>
                <th>Phone Number</th>
                <th>Service Area</th>
                <th>Message Excerpt</th>
                <th>Status</th>
                <th>Notes</th>
                <th className={styles.alignRight}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={9} className={styles.loadingCell}>
                    Loading contact submissions...
                  </td>
                </tr>
              ) : contacts.length === 0 ? (
                <tr>
                  <td colSpan={9} className={styles.emptyCell}>
                    No contact submissions match the selected filters.
                  </td>
                </tr>
              ) : (
                contacts.map((c, index) => {
                  const serialNum = (page - 1) * pageSize + index + 1;
                  const dateStr = c.created_at
                    ? new Date(c.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'N/A';

                  const cleanPhone = (c.phone_number || '').replace(/[^0-9]/g, '');
                  const waGreeting = encodeURIComponent(
                    `Hello ${c.name}, thank you for contacting Grace Technologies regarding ${c.service}.`
                  );
                  const waHref = cleanPhone ? `https://wa.me/${cleanPhone}?text=${waGreeting}` : '#';

                  return (
                    <tr key={c.id}>
                      <td className={styles.idCol}>
                        <span className={styles.idBadge}>#{serialNum}</span>
                      </td>
                      <td className={styles.dateCol}>
                        <span className={styles.dateText}>{dateStr}</span>
                      </td>
                      <td className={styles.clientCol}>
                        <div className={styles.clientName}>{c.name}</div>
                        <a href={`mailto:${c.email}`} className={styles.emailLink}>
                          {c.email}
                        </a>
                      </td>
                      <td className={styles.phoneCol}>
                        <span className={styles.phoneText}>{c.phone_number || 'N/A'}</span>
                      </td>
                      <td className={styles.serviceCol}>
                        <span className={styles.serviceBadge}>{c.service}</span>
                      </td>
                      <td className={styles.messageCol}>
                        <button
                          type="button"
                          className={styles.messagePreviewBtn}
                          onClick={() => setActiveMessageItem(c)}
                          title="Click to view full message"
                        >
                          <span className={styles.messageSnippet}>
                            {c.messages ? c.messages.slice(0, 45) + (c.messages.length > 45 ? '...' : '') : 'No message'}
                          </span>
                          <VisibilityIcon sx={{ fontSize: 14, opacity: 0.6 }} />
                        </button>
                      </td>
                      <td className={styles.statusCol}>
                        <select
                          value={c.status}
                          disabled={updatingId === c.id}
                          onChange={(e) => handleStatusChange(c.id, e.target.value)}
                          className={styles.statusSelect}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Resolved">Resolved</option>
                          <option value="Spam">Spam</option>
                        </select>
                      </td>
                      <td className={styles.notesCol}>
                        <button
                          type="button"
                          className={`${styles.notesButton} ${c.notes ? styles.notesButtonActive : ''}`}
                          onClick={() =>
                            setActiveNotesItem({
                              id: c.id,
                              name: c.name,
                              notes: c.notes,
                            })
                          }
                          title="View / Edit Note Popup"
                        >
                          <EditNoteIcon sx={{ fontSize: 16 }} />
                          <span>{c.notes ? 'View Note' : 'Add Note'}</span>
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
                          {c.phone_number && (
                            <a
                              href={`tel:${c.phone_number}`}
                              className={styles.iconActionBtn}
                              title="Call Client"
                            >
                              <PhoneIcon sx={{ fontSize: 17 }} />
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={() => setActiveMessageItem(c)}
                            className={styles.iconActionBtn}
                            title="View Full Message"
                          >
                            <VisibilityIcon sx={{ fontSize: 17 }} />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveNotesItem({
                                id: c.id,
                                name: c.name,
                                notes: c.notes,
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
            Showing {contacts.length > 0 ? (page - 1) * pageSize + 1 : 0} to{' '}
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

      {/* Message Modal */}
      {activeMessageItem && (
        <MessageModal
          isOpen={true}
          name={activeMessageItem.name}
          email={activeMessageItem.email}
          phone={activeMessageItem.phone_number}
          service={activeMessageItem.service}
          message={activeMessageItem.messages}
          date={
            activeMessageItem.created_at
              ? new Date(activeMessageItem.created_at).toLocaleString('en-GB')
              : 'N/A'
          }
          onClose={() => setActiveMessageItem(null)}
        />
      )}

      {/* Notes Modal */}
      {activeNotesItem && (
        <NotesModal
          isOpen={true}
          title={`Contact Notes - ${activeNotesItem.name}`}
          initialNotes={activeNotesItem.notes}
          onClose={() => setActiveNotesItem(null)}
          onSave={handleSaveNotes}
        />
      )}
    </div>
  );
}

