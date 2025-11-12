import { Link } from 'react-router-dom';
import './RecentPosts.css';

function RecentPosts() {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      category: "Figma, Icon Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];

  return (
    <section className="recent-posts">
      <div className="recent-posts-content">
        <div className="recent-posts-header">
          <h2 className="section-title">Recent posts</h2>
          <Link to="/blog" className="view-all-link">View all</Link>
        </div>
        <div className="posts-grid">
          {posts.map((post, index) => (
            <article key={index} className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-separator">|</span>
                <span className="post-category">{post.category}</span>
              </div>
              <p className="post-description">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentPosts;

