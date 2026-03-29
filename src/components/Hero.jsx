import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-heading">
            Hi, I'm{' '}
            <span className="hero-name">Priyam Thakuria</span>
          </h1>

          <p className="hero-role">
            MTS @ Salesforce &middot; Scalable Systems &middot; AI/ML
          </p>

          <p className="hero-bio">
            I build scalable monitoring systems, data infrastructure, and AI-powered DevOps tooling.
            Currently at <strong>Salesforce</strong> as Member of Technical Staff.
            ECE grad from{' '}
            <a href="https://nitkkr.ac.in" target="_blank" rel="noreferrer" className="hero-link">
              NIT Kurukshetra
            </a>{' '}
          </p>

          <div className="hero-tags">
            {['System Design', 'Python', 'Kubernetes', 'LLMs', 'AI/ML', 'ReactJS', 'Golang'].map(t => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
            <a href="/contact" className="btn-secondary">Get in touch</a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="profile-wrap">
            <img
              src="/priyam.jpeg"
              alt="Priyam Thakuria"
              className="profile-avatar"
            />
            <div className="profile-ring" />
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years at Salesforce</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">9.2</span>
              <span className="stat-label">CGPA at NITKKR</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">SIH</span>
              <span className="stat-label">'22 Winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
