"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';

import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.africaSvg}>
                            <path d="M52.3,16.6 c1.1-1.1,2.5-1.4,3.1-0.3 c0.5,0.9-0.2,2.4-0.8,3.3 c-0.6,0.9-1.4,1.8-1.2,2.9 c0.2,1,1.3,1.6,2.3,1.9 c1,0.3,2.1,0.3,3.1,0.7 c1.1,0.5,1.9,1.6,2.9,2.4 c1,0.8,2.2,1.3,3.5,1.4 c1.3,0.1,2.6-0.3,3.8,0.1 c1.2,0.4,2.2,1.4,3.2,2.2 c1,0.8,2,1.7,3.1,2.4 c1.2,0.7,2.5,1.1,3.9,1.3 c1.3,0.2,2.7,0.2,4,0.7 c1.3,0.5,2.4,1.5,3.4,2.5 c0.9,1,1.5,2.3,2,3.6 c0.5,1.3,0.8,2.7,0.7,4.1 c-0.1,1.4-0.6,2.7-1.3,3.9 c-0.7,1.2-1.7,2.2-2.8,3 c-1.1,0.8-2.4,1.4-3.7,1.7 c-1.3,0.3-2.7,0.3-4.1,0.2 c-1.4-0.1-2.7-0.5-3.9-1.1 c-1.2-0.6-2.2-1.5-3.1-2.5 c-0.9-1-1.6-2.2-2.1-3.5 c-0.5-1.2-0.7-2.6-0.8-3.9 c0-1.4,0.3-2.7,0.9-3.9 c0.6-1.2,1.5-2.2,2.5-3 c1-0.8,2.2-1.4,3.5-1.7 c1.3-0.3,2.7-0.3,4-0.1 c1.3,0.2,2.6,0.7,3.6,1.5 c1.1,0.8,1.9,1.9,2.5,3.1 c0.6,1.2,0.9,2.6,0.9,4 c0,1.4-0.4,2.7-1.1,3.9 c-0.7,1.2-1.7,2.1-2.9,2.8 c-1.2,0.7-2.5,1.1-3.9,1.2 c-1.4,0.1-2.7-0.1-4-0.6 c-1.3-0.5-2.4-1.3-3.3-2.4 c-0.9-1-1.5-2.3-1.8-3.6 c-0.3-1.3-0.3-2.7,0-4.1 c0.3-1.3,0.9-2.6,1.8-3.6 c0.9-1,2.1-1.8,3.4-2.2 c1.3-0.4,2.7-0.5,4.1-0.2 c1.4,0.3,2.6,0.9,3.6,1.8 c1,0.9,1.7,2.1,2.1,3.4 c0.4,1.3,0.5,2.7,0.3,4.1 c-0.3,1.4-0.9,2.6-1.8,3.6 c-0.9,1-2.1,1.7-3.4,2.1 c-1.3,0.4-2.7,0.5-4.1,0.2 c-1.4-0.3-2.6-0.9-3.6-1.8 c-1-0.9-1.7-2.1-2.1-3.4 c-0.4-1.3-0.4-2.7-0.2-4.1 M77.5,75.5 c0.5,1.2,0.2,2.7-0.6,3.8 c-0.8,1.1-2.1,1.7-3.4,1.9 c-1.3,0.2-2.7-0.2-3.8-1 c-1.1-0.8-1.7-2.1-1.9-3.4 c-0.2-1.3,0.2-2.7,1-3.8 c0.8-1.1,2.1-1.7,3.4-1.9 C73.5,70.9,74.9,71.3,76,72.1 C77.1,72.9,77.7,74.2,77.5,75.5 z" fill="white" />
                        </svg>
                    </div>
                    <div className={styles.logoText}>NGO<span>Tech</span>Jobs</div>
                </Link>

                <div className={styles.actions}>
                    <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer" className={styles.postJobBtn}>
                        <span className={styles.desktopText}>{t('postJob')}</span>
                        <span className={styles.mobileText}>{t('postJobShort')}</span>
                    </a>
                    <button onClick={toggleLanguage} className={styles.langToggle}>
                        <span className={language === 'en' ? styles.activeLang : ''}>EN</span>
                        <span className={styles.divider}>|</span>
                        <span className={language === 'fr' ? styles.activeLang : ''}>FR</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
