import { Link } from 'react-router-dom';
import './FeaturedWorks.css';

const projects = [
  {
    id: 1,
    gradient: 'gradient-1',
    icon: '🏆',
    title: 'SIH 2022 — Habit Tracker',
    subtitle: 'Smart India Hackathon Winner · Team CodeChronicles',
    year: 'Aug 2022',
    tags: ['ML', 'Full-Stack', 'React', 'Python', 'GovTech'],
    description:
      'Won Smart India Hackathon 2022 (NCERT domain). Built a habit-tracking platform with an ML model that predicts personalised use-cases for all age groups — toddlers to adults.',
  },
  {
    id: 2,
    gradient: 'gradient-2',
    icon: '◻',
    title: 'TIC-TAC-TOE',
    subtitle: 'Minimax Algorithm — Multi-size Boards',
    year: '2021',
    tags: ['Algorithms', 'Minimax', 'JavaScript'],
    description:
      'An unbeatable Tic-Tac-Toe using the minimax algorithm, supporting 3×3 to 7×7 boards and four difficulty levels including an Unbeatable mode the machine never loses.',
  },
];

function FeaturedWorks() {
  return (
    <section className="featured-works">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-label">Projects</div>
          <h2 className="section-heading">Featured Work</h2>
          <Link to="/projects" className="view-all">
            All projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className={`project-card ${project.gradient}`}>
              <div className="project-card-header">
                <span className="project-icon">{project.icon}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`} className="project-link">
                View project
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorks;
