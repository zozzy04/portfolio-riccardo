export default function ManifestoSection({ manifesto }) {
  return (
    <section id="manifesto" className="manifesto-section">
      <p className="manifesto-eyebrow reveal">Approach</p>

      <blockquote className="manifesto-quote">
        <span className="manifesto-quote-line">
          <span className="manifesto-quote-inner reveal">"Less noise.</span>
        </span>
        <span className="manifesto-quote-line">
          <span className="manifesto-quote-inner reveal">More maintainable</span>
        </span>
        <span className="manifesto-quote-line">
          <span className="manifesto-quote-inner reveal">systems."</span>
        </span>
      </blockquote>

      <p className="manifesto-body reveal">{manifesto.body}</p>
    </section>
  );
}
