const STACK = [
  "Python", "React", "Vite", "SQL", "LLMs",
  "RAG", "OCR + NLP", "Automation",
  "Monitoring", "Dashboards", "Qlik",
  "Power BI", "KNIME", "Arduino",
];

export default function ValueSection({ value }) {
  return (
    <section id="stack" className="value-section">
      <h2 className="value-headline reveal">
        From notebook demos<br />
        to <em>production systems.</em>
      </h2>

      <p className="value-body reveal">{value.body}</p>

      <p className="stack-label reveal">Tech stack</p>

      <div className="stack-pills">
        {STACK.map((tech) => (
          <span key={tech} className="stack-pill reveal">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
