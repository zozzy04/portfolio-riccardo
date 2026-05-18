function WorkCard({ work, className }) {
  const handleMouseMove = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el  = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x   = (e.clientX - rect.left) / rect.width;
    const y   = (e.clientY - rect.top)  / rect.height;
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 8}deg) rotateX(${-(y - 0.5) * 8}deg) translateZ(18px)`;
    el.style.setProperty("--lx", `${x * 100}%`);
    el.style.setProperty("--ly", `${y * 100}%`);
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = "";
    el.style.setProperty("--lx", "50%");
    el.style.setProperty("--ly", "0%");
  };

  return (
    <article
      className={`work-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="work-card-visual"     aria-hidden="true" />
      <div className="work-card-ambient"    aria-hidden="true" />
      <div className="work-card-specular"   aria-hidden="true" />

      <div className="work-card-year">{work.year}</div>

      <div className="work-card-tags">
        {work.tags.split(" • ").map((tag) => (
          <span key={tag} className="work-tag">{tag}</span>
        ))}
      </div>

      <h3 className="work-card-title">{work.name}</h3>
      <p  className="work-card-desc">{work.summary}</p>
    </article>
  );
}

export default function WorksSection({ title, works }) {
  const [hero, side, wide] = works;

  const handleWideTilt = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el   = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x    = (e.clientX - rect.left) / rect.width;
    const y    = (e.clientY - rect.top)  / rect.height;
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 4}deg) rotateX(${-(y - 0.5) * 4}deg) translateZ(8px)`;
    el.style.setProperty("--lx", `${x * 100}%`);
    el.style.setProperty("--ly", `${y * 100}%`);
  };

  const handleWideLeave = (e) => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.setProperty("--lx", "50%");
    e.currentTarget.style.setProperty("--ly", "0%");
  };

  return (
    <section id="work" className="works-section">
      <p className="section-label">{title}</p>

      <div className="works-bento">
        <WorkCard work={hero} className="work-card-hero" />
        <WorkCard work={side} className="work-card-side" />

        <article
          className="work-card work-card-full"
          onMouseMove={handleWideTilt}
          onMouseLeave={handleWideLeave}
        >
          <div className="work-card-ambient"  aria-hidden="true" />
          <div className="work-card-specular" aria-hidden="true" />
          <div>
            <div className="work-card-year">{wide.year}</div>
            <div className="work-card-tags">
              {wide.tags.split(" • ").map((tag) => (
                <span key={tag} className="work-tag">{tag}</span>
              ))}
            </div>
            <h3 className="work-card-title">{wide.name}</h3>
          </div>
          <p className="work-card-desc">{wide.summary}</p>
        </article>
      </div>
    </section>
  );
}
