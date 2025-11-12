import './Blog.css';

function Blog() {
  const posts = [
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      category: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-content-wrapper">
        <div className="blog-header">
          <h1 className="page-title">Blog</h1>
        </div>
        <div className="blog-content">
          {posts.map((post, index) => (
            <article key={index} className="blog-post">
              <h2 className="blog-post-title">{post.title}</h2>
              <div className="blog-post-meta">
                <span className="blog-post-date">{post.date}</span>
                <span className="blog-post-separator">|</span>
                <span className="blog-post-category">{post.category}</span>
              </div>
              <p className="blog-post-description">{post.description}</p>
              {index < posts.length - 1 && <hr className="blog-post-divider" />}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

