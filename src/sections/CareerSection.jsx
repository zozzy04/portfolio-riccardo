export default function CareerSection({ career }) {
  return (
    <section id="career" className="career-section" aria-label="Career">
      <div className="career-header">
        <p className="career-label">{career.label}</p>
        <span className="career-count">
          {String(career.roles.length).padStart(2, "0")}
        </span>
      </div>

      <ul className="career-list" role="list">
        {career.roles.map((role) => (
          <li key={role.index} className="career-item">
            <a
              href={role.href}
              target="_blank"
              rel="noopener noreferrer"
              className="career-item-link"
              aria-label={`${role.company} — ${role.role}`}
            >
              <div className="career-item-left">
                <span className="career-item-index">{role.index}</span>
                <span className="career-item-period">{role.period}</span>
              </div>

              <div className="career-item-center">
                <h3 className="career-item-company">{role.company}</h3>
                <p className="career-item-role">{role.role}</p>

                {role.bullets.length > 0 && (
                  <ul className="career-item-bullets">
                    {role.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {role.tags.length > 0 && (
                  <div className="career-item-tags">
                    {role.tags.map((t) => (
                      <span className="career-tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="career-item-right">
                <span className="career-item-location">{role.location}</span>
                <span className="career-item-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
