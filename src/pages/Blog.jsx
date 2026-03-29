import './Blog.css';

const posts = [
  {
    slug: 'llm-agents-for-incident-response',
    title: 'Building an LLM Agent for Incident Diagnosis',
    date: 'Feb 2025',
    readTime: '10 min read',
    tags: ['LLMs', 'LangChain', 'DevOps', 'AI'],
    excerpt:
      'How we built an AI-powered agent at Salesforce that ingests alerts, correlates metrics, and auto-generates root-cause analysis reports — cutting RCA time by 60% and improving on-call efficiency dramatically.',
  },
  {
    slug: 'database-observability-at-scale',
    title: 'Database Observability at 99.999% Availability',
    date: 'Oct 2024',
    readTime: '12 min read',
    tags: ['Databases', 'Observability', 'Kubernetes', 'Prometheus'],
    excerpt:
      'A deep dive into how we monitor Salesforce\'s multitenant SDB — from metric aggregation and alert tuning to the on-call runbooks that keep availability at five nines.',
  },
  {
    slug: 'jinja-templates-for-rca',
    title: 'Jinja Templates for Automated Metric Extraction',
    date: 'Jul 2024',
    readTime: '7 min read',
    tags: ['Python', 'Jinja', 'Automation', 'SRE'],
    excerpt:
      'A practical guide to using Jinja templating for issue-specific metric extraction in SRE workflows — and how this pattern reduced our RCA time by 60%.',
  },
  {
    slug: 'kubernetes-for-engineers',
    title: 'Kubernetes Patterns Every Engineer Should Know',
    date: 'Mar 2024',
    readTime: '9 min read',
    tags: ['Kubernetes', 'Docker', 'Infrastructure'],
    excerpt:
      'Beyond basic deployments — sidecar containers, init containers, pod disruption budgets, and the operational patterns that actually matter in production Kubernetes clusters.',
  },
  {
    slug: 'golang-prometheus-exporter',
    title: 'Writing a Prometheus Exporter in Golang',
    date: 'Aug 2022',
    readTime: '8 min read',
    tags: ['Golang', 'Prometheus', 'Observability'],
    excerpt:
      'A step-by-step walkthrough of building a production-grade Prometheus exporter in Go — covering custom collectors, label cardinality pitfalls, and testing strategies.',
  },
];

function Blog() {
  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <header className="page-hero">
          <div className="page-label">Blog</div>
          <h1 className="page-title">Writing</h1>
          <p className="page-lead">
            I write about distributed systems, observability, AI/ML engineering, and lessons
            from building production infrastructure at scale.
          </p>
        </header>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-item">
              <div className="blog-meta">
                <time className="blog-date">{post.date}</time>
                <span className="blog-sep">·</span>
                <span className="blog-read">{post.readTime}</span>
              </div>
              <h2 className="blog-title">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
