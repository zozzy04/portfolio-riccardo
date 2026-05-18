import { Link } from "react-router-dom";

export default function BlogSection({ blog }) {
  const { posts } = blog;

  return (
    <section id="blog" className="blog-section" aria-label="Blog">
      <div className="blog-header">
        <div className="blog-header-left">
          <p className="blog-label">{blog.label}</p>
          <h2 className="blog-heading">{blog.heading}</h2>
        </div>
        <span className="blog-count">
          {String(posts.length).padStart(2, "0")}
        </span>
      </div>

      <ul className="blog-list" role="list">
        {posts.map((post) => (
          <li key={post.index} className="blog-item">
            <Link to={`/blog/${post.slug}`} className="blog-item-link" aria-label={post.title}>
              <div className="blog-item-left">
                <span className="blog-item-index">{post.index}</span>
                <span className="blog-item-date">{post.date}</span>
              </div>

              <div className="blog-item-center">
                <h3 className="blog-item-title">{post.title}</h3>
                <p className="blog-item-excerpt">{post.excerpt}</p>
              </div>

              <div className="blog-item-right">
                <span className="blog-item-meta">{post.readTime}</span>
                <span className="blog-item-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
