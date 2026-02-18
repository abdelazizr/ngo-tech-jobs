"use client";

import styles from './SearchHeader.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function SearchHeader({ searchTerm, onSearchChange, jobCount, organizationCount, newJobsCount }) {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>{t('heroTitle')}</h1>
                <p>{t('heroSubtitle')}</p>

                <div className={styles.searchContainer}>
                    <div className={styles.searchRow}>
                        <div className={styles.searchInputWrapper}>
                            <span className={styles.searchIcon}>🔍</span>
                            <input
                                type="text"
                                placeholder={t('searchPlaceholder')}
                                value={searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                        </div>
                        <div className={styles.filterGroup}>
                            <button className={`${styles.filterBtn} ${styles.active}`}>
                                {t('filterAll')}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.statsWrapper}>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>{jobCount}</div>
                            <div className={styles.statLabel}>{t('openPositions')}</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>{organizationCount}</div>
                            <div className={styles.statLabel}>{t('organizations')}</div>
                        </div>
                    </div>
                    <div className={styles.weeklyBadge}>
                        ✨ {newJobsCount} {t('newJobsThisWeek')}
                    </div>
                </div>
            </div>
        </section>
    );
}
