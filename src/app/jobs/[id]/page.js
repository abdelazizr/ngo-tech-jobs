"use client";

import { use, useState, useEffect } from 'react';
import jobsData from '../../../data/jobs.json';
import Link from 'next/link';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import { useLanguage } from '../../../context/LanguageContext';

// Helper to find job
function getJob(id) {
    return jobsData.find(j => j.id.toString() === id);
}

export default function JobPage({ params }) {
    // Unwrap params using React.use()
    const { id } = use(params);
    const { t } = useLanguage();

    const [job, setJob] = useState(null);

    useEffect(() => {
        if (id) {
            const found = getJob(id);
            if (found) {
                setJob(found);
            }
        }
    }, [id]);

    if (!job) {
        return <div className="container" style={{ paddingTop: '4rem' }}>Loading...</div>;
    }

    const isFrench = job.language === 'fr';

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
                {t('backToJobs')}
            </Link>

            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <span className={styles.flag}>{isFrench ? '🇫🇷' : '🇬🇧'}</span>
                    <h1 className={styles.title}>{job.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.org}>{job.organization}</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.location}>{job.location}</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.type}>{job.employment_type || 'Full-time'}</span>
                    </div>
                    {job.salary_range && (
                        <div className={styles.salary}>
                            💰 {job.salary_range}
                        </div>
                    )}
                </div>
                <div className={styles.actions}>
                    <a href={job.apply_url} target="_blank" rel="noopener noreferrer" className={styles.applyButton}>
                        {t('applyNow')}
                    </a>
                </div>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t('aboutRole')}</h2>
                    <p className={styles.text}>{job.full_description || job.description}</p>
                </section>

                {job.responsibilities && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('responsibilities')}</h2>
                        <ul className={styles.list}>
                            {job.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {job.requirements && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('requirements')}</h2>
                        <ul className={styles.list}>
                            {job.requirements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}
