import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { siteContent } from "../content/siteContent";

export default function BlogPostPage() {
  const { slug } = useParams();
  const posts = siteContent.en.blog.posts;
  const post  = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="blogpost-page">
      <nav className="blogpost-nav">
        <Link to="/" className="blogpost-back">
          <span className="blogpost-back-arrow">←</span>
          Back
        </Link>
      </nav>

      <article className="blogpost-article">
        <header className="blogpost-header">
          <div className="blogpost-meta">
            <span className="blogpost-index">{post.index}</span>
            <span className="blogpost-date">{post.date}</span>
            <span className="blogpost-readtime">{post.readTime}</span>
          </div>
          <h1 className="blogpost-title">{post.title}</h1>
        </header>

        <div className="blogpost-body">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
