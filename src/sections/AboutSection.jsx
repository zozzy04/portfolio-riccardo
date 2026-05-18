import { useRef, useCallback } from "react";

export default function AboutSection({ about }) {
  const cardRef = useRef(null);
  const rafRef  = useRef(null);
  const targetR = useRef({ x: 0, y: 0 });
  const currentR = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect    = card.getBoundingClientRect();
    const cx      = rect.left + rect.width / 2;
    const cy      = rect.top  + rect.height / 2;
    const mx      = e.clientX - cx;
    const my      = e.clientY - cy;
    targetR.current.x =  (my / (rect.height / 2)) * -8;
    targetR.current.y =  (mx / (rect.width  / 2)) *  12;
  }, []);

  const onMouseEnter = useCallback(() => {
    const animate = () => {
      const { x: tx, y: ty } = targetR.current;
      const cr = currentR.current;
      cr.x += (tx - cr.x) * 0.1;
      cr.y += (ty - cr.y) * 0.1;

      if (cardRef.current) {
        cardRef.current.style.transform =
          `perspective(1200px) rotateX(${cr.x}deg) rotateY(${cr.y}deg) scale3d(1.02,1.02,1.02)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    targetR.current  = { x: 0, y: 0 };

    const smoothReset = () => {
      const cr = currentR.current;
      cr.x += (0 - cr.x) * 0.1;
      cr.y += (0 - cr.y) * 0.1;

      if (cardRef.current) {
        cardRef.current.style.transform =
          `perspective(1200px) rotateX(${cr.x}deg) rotateY(${cr.y}deg) scale3d(1,1,1)`;
      }

      if (Math.abs(cr.x) > 0.01 || Math.abs(cr.y) > 0.01) {
        rafRef.current = requestAnimationFrame(smoothReset);
      } else {
        cr.x = 0;
        cr.y = 0;
        if (cardRef.current) {
          cardRef.current.style.transform = "";
        }
      }
    };
    rafRef.current = requestAnimationFrame(smoothReset);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        {/* Left: text content */}
        <div className="about-left">
          <p className="about-label">{about.label}</p>

          <h2 className="about-heading">
            {about.heading.map((line, i) => (
              <span className="about-heading-line" key={i}>
                <span className="about-heading-inner">{line}</span>
              </span>
            ))}
          </h2>

          <p className="about-bio">{about.bio}</p>

          <div className="about-stats">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="about-tags">
            {about.tags.map((tag) => (
              <span className="about-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: sticky 3D card */}
        <div className="about-right">
          <div
            className="about-card-3d"
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onContextMenu={(e) => e.preventDefault()}
            aria-hidden="true"
          >
            <div className="about-card-visual">
              <div
                className="about-card-avatar"
                role="img"
                aria-label="Riccardo Zozzolotto"
              />
              <div className="about-card-grid" />
            </div>
            <div className="about-card-info">
              <div className="about-card-name">{about.card.name}</div>
              <div className="about-card-role">{about.card.role} · {about.card.location}</div>
              <div className="about-card-status">
                <span className="about-card-status-dot" />
                {about.card.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
