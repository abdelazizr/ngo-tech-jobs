"use client";

import Link from 'next/link';
import styles from './JobCard.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function JobCard({ job }) {
  const { t } = useLanguage();

  // Simple relative time formatter using translations
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    const diffInDays = Math.floor(diffInSeconds / (3600 * 24));

    if (diffInDays === 0) return t('postedToday');
    if (diffInDays === 1) return t('postedYesterday');
    return t('postedAgo').replace('{days}', diffInDays);
  };

  const isFrench = job.language === 'fr';

  return (
    <Link href={`/jobs/${job.id}`} className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.mainInfo}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{job.title}</h3>
            <span className={styles.flag} title={isFrench ? "French" : "English"}>
              {isFrench ? '🇫🇷' : '🇬🇧'}
            </span>
          </div>
          <div className={styles.orgRow}>
            <span className={styles.org}>{job.organization}</span>
          </div>
        </div>
        <div className={styles.metaRight}>
          <span className={styles.time}>{getRelativeTime(job.created_at)}</span>
        </div>
      </div>

      <div className={styles.tags}>
        <span className={styles.tag}>{job.location}</span>
        {job.employment_type && <span className={styles.tag}>{job.employment_type}</span>}
      </div>

      <p className={styles.description}>{job.description}</p>
    </Link>
  );
}
