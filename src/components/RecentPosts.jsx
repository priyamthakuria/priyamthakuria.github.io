import { Link } from 'react-router-dom';
import './RecentPosts.css';

const posts = [
  {
    slug: 'llm-agents-for-incident-response',
    title: 'Building an LLM Agent for Incident Diagnosis',
    date: 'Feb 2025',
    tags: ['LLMs', 'DevOps', 'AI'],
    readTime: '10 min read',
    excerpt:
      'How we built an AI-powered agent at Salesforce that ingests alerts, correlates metrics, and auto-generates root-cause analysis reports — cutting RCA time by 60%.',
  },
  {
    slug: 'database-observability-at-scale',
    title: 'Database Observability at 99.999% Availability',
    date: 'Oct 2024',
    tags: ['Databases', 'Observability', 'SRE'],
    readTime: '12 min read',
    excerpt:
      'A deep dive into how we monitor Salesforce\'s multitenant SDB — from metric aggregation and alert tuning to the on-call runbooks that keep availability at five nines.',
  },
  {
    slug: 'kubernetes-for-engineers',
    title: 'Kubernetes Patterns Every Engineer Should Know',
    date: 'Mar 2024',
    tags: ['Kubernetes', 'Infrastructure'],
    readTime: '9 min read',
    excerpt:
      'Beyond basic deployments — sidecar containers, init containers, pod disruption budgets, and the operational patterns that actually matter in production clusters.',
  },
];

function RecentPosts() {
  return (
    <section className="recent-posts">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-label">Writing</div>
          <h2 className="section-heading">Recent Posts</h2>
          <Link to="/blog" className="view-all">
            All posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

        <div className="posts-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-item">
              <div className="post-meta">
                <time className="post-date">{post.date}</time>
                <span className="post-sep">·</span>
                <span className="post-read">{post.readTime}</span>
              </div>
              <h3 className="post-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="post-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentPosts;
