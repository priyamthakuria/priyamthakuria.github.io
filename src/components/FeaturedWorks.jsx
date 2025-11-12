import { Link } from 'react-router-dom';
import './FeaturedWorks.css';

function FeaturedWorks() {
  const works = [
    {
      id: 1,
      image: "dashboard",
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 2,
      image: "portrait",
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 3,
      image: "typography",
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];

  return (
    <section className="featured-works">
      <div className="featured-works-content">
        <h2 className="section-title">Featured works</h2>
        <div className="works-list">
          {works.map((work) => (
            <article key={work.id} className="work-item">
              <div className="work-image">
                <div className={`work-placeholder work-${work.image}`}>
                  {work.image === 'dashboard' && <div className="dashboard-preview"></div>}
                  {work.image === 'portrait' && <div className="portrait-preview"></div>}
                  {work.image === 'typography' && <div className="typography-preview">A</div>}
                </div>
              </div>
              <div className="work-content">
                <Link to={`/works/${work.id}`} className="work-title">{work.title}</Link>
                <div className="work-meta">
                  <span className="work-year">{work.year}</span>
                  <span className="work-category">{work.category}</span>
                </div>
                <p className="work-description">{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorks;

