"use client";

import styles from './SearchHeader.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function SearchHeader({ searchTerm, onSearchChange, jobCount }) {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div className={styles.actionsRight}>
                    <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer" className={styles.postJobBtn}>
                        {t('postJob')}
                    </a>
                    <button onClick={toggleLanguage} className={styles.langToggle}>
                        <span className={language === 'en' ? styles.activeLang : ''}>EN</span>
                        <span className={styles.divider}>|</span>
                        <span className={language === 'fr' ? styles.activeLang : ''}>FR</span>
                    </button>
                </div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.brand}>
                    <h1 className={styles.heading}>{t('heroTitle')}</h1>
                </div>

                <p className={styles.subheading}>
                    {t('heroSubtitle')}
                </p>

                <div className={styles.searchBar}>
                    <div className={styles.inputWrapper}>
                        <span className={styles.searchIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </span>
                        <input
                            type="text"
                            placeholder={t('searchPlaceholder')}
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                </div>

                <p className={styles.trustText}>
                    {t('newJobsWeekly')}
                </p>

                <div className={styles.stats}>
                    <span className={styles.liveIndicator}></span>
                    {t('showingJobs').replace('{count}', jobCount)}
                </div>
            </div>
        </div>
    );
}
