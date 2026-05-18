export default function ServicesSection({ services }) {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <p className="services-label">{services.label}</p>
        <h2 className="services-heading">{services.heading}</h2>
      </div>

      <ul className="services-list" role="list">
        {services.items.map((item) => (
          <li className="services-item" key={item.index}>
            <div className="services-item-header">
              <span className="services-item-num">{item.index}</span>
              <span className="services-item-name">{item.name}</span>
              <div className="services-item-arrow" aria-hidden="true">↗</div>
            </div>
            <div className="services-item-desc">
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
