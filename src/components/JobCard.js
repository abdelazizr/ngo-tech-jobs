"use client";

import Link from 'next/link';
import styles from './JobCard.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function JobCard({ job }) {
  const { t } = useLanguage();

  const getClosingDateInfo = (closingDate) => {
    if (!closingDate || closingDate === 'N/A') return null;

    let closing;
    // Check if ISO format (YYYY-MM-DD)
    if (closingDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      closing = new Date(closingDate + 'T23:59:59');
    } else {
      // Handle human readable format (e.g., "February 28, 2026")
      closing = new Date(closingDate);
      closing.setHours(23, 59, 59, 999);
    }
    const now = new Date();
    const diffInDays = Math.ceil((closing - now) / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) return { label: 'Closed', urgency: 'expired' };
    if (diffInDays === 0) return { label: 'Closes today', urgency: 'urgent' };
    if (diffInDays === 1) return { label: 'Closes tomorrow', urgency: 'urgent' };
    if (diffInDays <= 3) return { label: `Closes in ${diffInDays} days`, urgency: 'urgent' };
    if (diffInDays <= 7) return { label: `Closes in ${diffInDays} days`, urgency: 'soon' };

    const formatted = closing.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    return { label: `Closes ${formatted}`, urgency: 'normal' };
  };

  const getRelativeTime = (dateString) => {
    if (!dateString || dateString === 'N/A') return null;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null; // Safety check
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return t('postedToday');
    if (diffInDays === 1) return t('postedYesterday');
    return t('postedAgo').replace('{days}', diffInDays);
  };

  const closingInfo = getClosingDateInfo(job.closing_date);
  const postedTime = getRelativeTime(job.created_at);

  const isFrench = job.language === 'fr';
  const langClass = isFrench ? styles.fr : styles.en;

  return (
    <Link href={`/jobs/${job.id}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={`${styles.languageBadge} ${langClass}`}>
            {isFrench ? '🇫🇷 FR' : '🇬🇧 EN'}
          </span>
          <h3 className={styles.title}>{job.title}</h3>
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <span className={styles.orgName}>{job.organization}</span>
        </span>
        <span className={styles.metaItem}>📍 {job.location}</span>
      </div>

      <p className={styles.description}>{job.description}</p>

      <div className={styles.footer}>
        <div className={styles.dateGroup}>
          {closingInfo && (
            <span className={`${styles.closingDate} ${styles[closingInfo.urgency]}`}>
              🕐 {closingInfo.label}
            </span>
          )}
          {postedTime && (
            <span className={styles.date}>
              {postedTime}
            </span>
          )}
        </div>
        <span className={styles.applyBtn}>
          {t('viewDetails')} →
        </span>
      </div>
    </Link>
  );
}
