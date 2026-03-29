import { useParams, Link } from 'react-router-dom';
import './WorkDetail.css';

const worksData = {
  1: {
    title: 'HackVerse',
    subtitle: 'National-Level Hackathon Platform',
    year: '2020',
    category: 'Event Technology · Full-Stack',
    summary: 'An end-to-end platform built to run India\'s largest college hackathon — handling 1,200+ participants, real-time team formation, submissions, and live judging.',
    sections: [
      {
        heading: 'The Problem',
        body: 'Running a national hackathon with 1,200+ participants across India meant handling real-time registrations, team formation across colleges, a secure submission pipeline, a multi-tier judging workflow, and a live leaderboard — all under a 48-hour window with zero room for downtime.',
      },
      {
        heading: 'What I Built',
        body: 'A full-stack platform using Node.js and PostgreSQL, with a React frontend and WebSocket-powered live updates. The system handled 600 concurrent users at peak without degradation. I designed the schema for multi-round judging, built the submission queue, and wrote the real-time leaderboard engine.',
      },
      {
        heading: 'Outcome',
        body: 'HackVerse ran flawlessly. 1,200+ registrations, 300+ team submissions, and 40 finalists across tracks. The platform has since been open-sourced and adapted by two other college hackathons in India.',
      },
    ],
    tags: ['Node.js', 'React', 'PostgreSQL', 'WebSockets', 'Docker'],
  },
};

function WorkDetail() {
  const { id } = useParams();
  const work = worksData[id] || worksData[1];

  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <div className="detail-back">
          <Link to="/works" className="back-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 5 5 12 12 19"/>
            </svg>
            All work
          </Link>
        </div>

        <header className="page-hero">
          <div className="detail-meta-row">
            <span className="detail-year">{work.year}</span>
            <span className="detail-category">{work.category}</span>
          </div>
          <h1 className="page-title">{work.title}</h1>
          <p className="page-lead">{work.summary}</p>
          <div className="detail-tags">
            {work.tags.map(tag => (
              <span key={tag} className="detail-tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="detail-content">
          {work.sections.map((section, i) => (
            <section key={i} className="detail-section">
              <h2 className="detail-section-heading">{section.heading}</h2>
              <p className="detail-section-body">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
