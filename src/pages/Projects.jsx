import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Smart India Hackathon — Habit Tracker',
    subtitle: 'SIH 2022 Winner · Team CodeChronicles · Issued by NCERT, Govt. of India',
    year: 'Aug 2022',
    status: 'Won',
    tags: ['Hackathon', 'ML', 'Full-Stack', 'React', 'Python'],
    links: [],
    description:
      'Won Smart India Hackathon 2022 (problem statement KH1160 — developing one\'s ability to manage time for relevant aspects of life) with Team CodeChronicles. Built a habit-tracking platform where users log daily activities, set goals, and read domain-relevant blogs to improve awareness. Implemented a basic ML model to predict personally relevant use cases based on user behaviour — making the app useful across all age groups, from toddlers to adults. Selected out of thousands of teams and awarded by NCERT, Government of India.',
  },
  {
    id: 2,
    title: 'TIC-TAC-TOE',
    subtitle: 'Minimax Algorithm — Multi-size Boards',
    year: '2021',
    status: 'Open Source',
    tags: ['Algorithms', 'Minimax', 'JavaScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/priyamthakuria' }],
    description:
      'Built an unbeatable Tic-Tac-Toe using the minimax algorithm, supporting board sizes 3×3, 4×4, 5×5, and 7×7 with four difficulty levels: Easy, Medium, Hard, and Unbeatable. The Unbeatable mode cannot be defeated — the machine always finds the optimal move regardless of board size.',
  },
];

const statusColors = {
  Won: '#a855f7',
  'Open Source': '#f59e0b',
};

function Projects() {
  return (
    <div className="page-wrapper">
      <div className="page-inner projects-inner">
        <header className="page-hero">
          <div className="page-label">Projects</div>
          <h1 className="page-title">Things I've Built</h1>
          <p className="page-lead">
            Hackathon wins and open-source experiments — the things I can actually talk about.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((p) => (
            <article key={p.id} className="project-entry">
              <div className="project-entry-header">
                <div className="project-entry-meta">
                  <span className="project-entry-year">{p.year}</span>
                  <span
                    className="project-entry-status"
                    style={{ '--status-color': statusColors[p.status] }}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="project-entry-links">
                  {p.links.map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="project-ext-link">
                      {label}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <h2 className="project-entry-title">{p.title}</h2>
              <p className="project-entry-subtitle">{p.subtitle}</p>
              <p className="project-entry-desc">{p.description}</p>
              <div className="project-entry-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="project-tag-pill">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
