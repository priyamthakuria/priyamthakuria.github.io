import './About.css';

function About() {
  const timeline = [
    {
      org: 'Salesforce',
      span: 'Jul 2023 – Present',
      grouped: true,
      roles: [
        {
          year: 'Feb 2025 – now',
          role: 'Member of Technical Staff (SDE2)',
          desc: 'Enhanced an RCA tool using Jinja-based templates to automate metric extraction, cutting RCA time by 60%. Built an LLM AI agent for incident diagnosis that improved DevOps productivity by 50% and incident management efficiency by 50%.',
        },
        {
          year: 'Jul 2023 – Jan 2025',
          role: 'Associate Member of Technical Staff (SDE1)',
          desc: 'Developed a monitoring system aggregating database health metrics to trigger alerts, ensuring 100% proactive issue detection. Designed a cloud-based DevOps UI for real-time monitoring. Optimised operations to ensure 99.999% availability of Salesforce\'s multitenant database.',
        },
      ],
    },
    {
      org: 'TalentedHippo',
      span: 'Mar 2023 – May 2023',
      role: 'Software Engineer Intern',
      desc: 'Built an experiential learning environment using Three.js, Python, React, and Next.js. Developed the landing page and added interactive 3D UI components.',
    },
    {
      org: 'Salesforce',
      span: 'May 2022 – Jun 2022',
      role: 'Software Engineer Intern',
      desc: 'Implemented an Exadata Exporter in the monitoring platform using Golang, enabling real-time metric collection and improving system observability.',
    },
    {
      org: 'NIT Kurukshetra',
      span: '2019 – 2023',
      role: 'B.Tech — Electronics & Communication Engineering',
      desc: 'CGPA 9.2033 · Department Rank 1 (3rd & 4th semester). Won Smart India Hackathon 2022. Gold Medalist — Department Sophomore Year. Secretary of the Literary & Debating Club.',
    },
  ];

  const interests = [
    { emoji: '⚙️', label: 'System Design' },
    { emoji: '🤖', label: 'AI / LLMs' },
    { emoji: '☁️', label: 'Kubernetes & Docker' },
    { emoji: '🗄️', label: 'Databases & Infra' },
    { emoji: '📊', label: 'Observability' },
    { emoji: '🌐', label: 'Web Development' },
    { emoji: '🧠', label: 'Mental Health Advocacy' },
    { emoji: '✍️', label: 'Technical Writing' },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <header className="page-hero">
          <div className="page-label">About</div>
          <h1 className="page-title">Hey, I'm Priyam.</h1>
          <p className="page-lead">
            Software engineer at Salesforce specialising in scalable monitoring systems,
            database reliability, and AI-powered incident tooling. I love building things
            that are robust, observable, and genuinely useful.
          </p>
        </header>

        <section className="about-section">
          <h2 className="about-section-title">Background</h2>
          <div className="about-prose">
            <p>
              I'm currently an <strong>MTS (SDE2) at Salesforce</strong> in Hyderabad, where I work on
              the reliability and observability of Salesforce's multitenant database infrastructure.
              My day-to-day spans Python, Kubernetes, Docker, LangChain, and ReactJS — from backend
              automation pipelines to DevOps UIs.
            </p>
            <p>
              I graduated in <strong>Electronics & Communication Engineering</strong> from{' '}
              <a href="https://nitkkr.ac.in" target="_blank" rel="noreferrer" className="prose-link">
                NIT Kurukshetra
              </a>{' '}
              with a CGPA of 9.2033 and Department Rank 1 in my sophomore year. At NITKKR I served as
              Secretary of the Literary &amp; Debating Club and won{' '}
              <a href="#" className="prose-link">Smart India Hackathon 2022</a>.
            </p>
            <p>
              Outside engineering, I volunteer as a Teaching Intern at{' '}
              <a href="https://www.aksharfoundation.org" target="_blank" rel="noreferrer" className="prose-link">
                Akshar Foundation
              </a>{' '}
              teaching underprivileged kids in Guwahati, mentor engineering aspirants at Steerme,
              and previously founded <em>Colours: A Happy Place</em> — a mental health awareness
              community that ran events and normalised conversations around mental wellbeing.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Interests</h2>
          <div className="interests-grid">
            {interests.map(({ emoji, label }) => (
              <div key={label} className="interest-chip">
                <span>{emoji}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Timeline</h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${item.grouped ? 'timeline-item--grouped' : ''}`}>
                <div className="timeline-left">
                  <span className="timeline-year">{item.span}</span>
                </div>
                <div className="timeline-dot" />
                <div className="timeline-right">
                  <div className="timeline-org">{item.org}</div>

                  {item.grouped ? (
                    <div className="timeline-subroles">
                      {item.roles.map((r, j) => (
                        <div key={j} className="timeline-subrole">
                          <div className="subrole-dot" />
                          <div className="subrole-body">
                            <div className="subrole-header">
                              <span className="timeline-role">{r.role}</span>
                              <span className="subrole-year">{r.year}</span>
                            </div>
                            <p className="timeline-desc">{r.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="timeline-role">{item.role}</div>
                      <p className="timeline-desc">{item.desc}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
