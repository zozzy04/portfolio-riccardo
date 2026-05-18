export default function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <p className="testimonials-label">{testimonials.label}</p>
        <h2 className="testimonials-heading">{testimonials.heading}</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.items.map((item, i) => (
          <article className="testimonial-card" key={i}>
            <div className="testimonial-quote-mark" aria-hidden="true">"</div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-author">
              <p className="testimonial-name">{item.name}</p>
              <p className="testimonial-role">{item.role} · {item.company}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
