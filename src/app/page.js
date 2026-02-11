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
      />

      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '4rem' }}>
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
