import { useState } from "react";

export default function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <p className="faq-label">{faq.label}</p>
        <h2 className="faq-heading">{faq.heading}</h2>
      </div>

      <ul className="faq-list" role="list">
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <li className={`faq-item${isOpen ? " is-open" : ""}`} key={i}>
              <button
                className="faq-question-btn"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>

              <div
                id={`faq-answer-${i}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-btn-${i}`}
              >
                <p>{item.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
