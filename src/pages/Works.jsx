import { Link } from 'react-router-dom';
import './Works.css';

const works = [
  {
    id: 1,
    title: 'HackVerse',
    category: 'Event Technology',
    year: '2020',
    description: 'End-to-end hackathon management platform that scaled to 1,200+ participants.',
    gradient: 'gradient-1',
  },
  {
    id: 2,
    title: 'Network Analyzer',
    category: 'Systems / CLI',
    year: '2021',
    description: 'Real-time packet capture and protocol dissection tool used at Cisco.',
    gradient: 'gradient-2',
  },
  {
    id: 3,
    title: 'GSoC Contribution',
    category: 'Open Source',
    year: '2019',
    description: 'Feature development and documentation for an open-source project under Google.',
    gradient: 'gradient-3',
  },
];

function Works() {
  return (
    <div className="page-wrapper">
      <div className="page-inner projects-inner">
        <header className="page-hero">
          <div className="page-label">Work</div>
          <h1 className="page-title">Selected Work</h1>
          <p className="page-lead">
            A curated look at projects I've shipped — from hackathon platforms to production network tools.
          </p>
        </header>

        <div className="works-grid">
          {works.map((w) => (
            <Link key={w.id} to={`/works/${w.id}`} className={`work-card ${w.gradient}`}>
              <div className="work-card-top">
                <span className="work-card-category">{w.category}</span>
                <span className="work-card-year">{w.year}</span>
              </div>
              <h2 className="work-card-title">{w.title}</h2>
              <p className="work-card-desc">{w.description}</p>
              <span className="work-card-cta">
                View case study
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
