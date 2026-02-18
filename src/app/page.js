"use client";

import { useState, useMemo } from 'react';
import jobsData from '../data/jobs.json';
import JobCard from '../components/JobCard';
import SearchHeader from '../components/SearchHeader';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = useMemo(() => {
    if (!searchTerm) return jobsData;

    const lowerTerm = searchTerm.toLowerCase();
    return jobsData.filter(job =>
      job.title.toLowerCase().includes(lowerTerm) ||
      job.organization.toLowerCase().includes(lowerTerm) ||
      job.location.toLowerCase().includes(lowerTerm) ||
      job.description.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  return (
    <main>
      <SearchHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        jobCount={filteredJobs.length}
        organizationCount={new Set(filteredJobs.map(job => job.organization)).size}
        newJobsCount={jobsData.filter(job => {
          if (!job.created_at || job.created_at === 'N/A') return false;
          const date = new Date(job.created_at);
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          return date > oneWeekAgo;
        }).length}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          position: 'sticky',
          top: '80px',
          background: 'var(--primary-bg)',
          padding: '1rem 0',
          zIndex: 10
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Latest Opportunities</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {/* Assuming t function is available or replacing with static text */}
            Showing {filteredJobs.length} jobs
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
              <p>No jobs found matching "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  marginTop: '1rem',
                  color: 'var(--primary)',
                  fontWeight: 500,
                  textDecoration: 'underline'
                }}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
