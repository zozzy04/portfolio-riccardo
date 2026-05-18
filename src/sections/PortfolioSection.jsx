export default function PortfolioSection({ portfolio }) {
  const { works } = portfolio;

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <p className="portfolio-label">{portfolio.label}</p>
        <span className="portfolio-count">
          {String(works.length).padStart(2, "0")}
        </span>
      </div>

      <div className="portfolio-cards-track">
        {works.map((work, i) => (
          <div className="portfolio-card-wrapper" key={work.name}>
            <article
              className="portfolio-card"
              style={{ zIndex: i + 1 }}
              aria-label={work.name}
            >
              {/* Top bar: index + year */}
              <div className="portfolio-card-top">
                <span className="portfolio-card-index">{work.index}</span>
                <span className="portfolio-card-year">{work.year}</span>
              </div>

              {/* Visual area */}
              <div className="portfolio-card-visual">
                <div
                  className="portfolio-card-visual-inner"
                  style={{ background: work.gradient, position: "absolute", inset: 0 }}
                  aria-hidden="true"
                />
                <div className="portfolio-card-visual-grid" aria-hidden="true" />
              </div>

              {/* Bottom bar: title + tags */}
              <div className="portfolio-card-bottom">
                <h3 className="portfolio-card-title">{work.name}</h3>
                <p className="portfolio-card-tags-inline" aria-label={`Tags: ${work.tags.join(", ")}`}>
                  {work.tags.join(" · ")}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
