import { useState } from "react";

export default function ContactSection({ contact }) {
  const [form, setForm] = useState({
    name: "", email: "", type: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType: ${form.type}\n\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        {/* Left: heading + social links */}
        <div className="contact-left">
          <p className="contact-label">{contact.label}</p>

          <h2 className="contact-heading">
            {contact.headingLines.map((line, i) => (
              <span className="contact-heading-line" key={i}>
                <span className="contact-heading-inner">{line}</span>
              </span>
            ))}
          </h2>

          <div className="contact-links">
            <a
              className="contact-link"
              href={`mailto:${contact.email}`}
              aria-label="Send email"
            >
              <span className="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </span>
              {contact.email}
            </a>

            <a
              className="contact-link"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <span className="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </span>
              GitHub
            </a>

            <a
              className="contact-link"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <span className="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: minimal form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className="form-field">
            <label htmlFor="cf-name">Full name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="cf-email">Email address</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="cf-type">Project type</label>
            <select
              id="cf-type"
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option value="" disabled>Select a type</option>
              <option value="LLM System">LLM System</option>
              <option value="RAG Pipeline">RAG Pipeline</option>
              <option value="Data Pipeline">Data Pipeline</option>
              <option value="Observability">Observability</option>
              <option value="Advisory">Advisory / Retainer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              placeholder="Describe your project or challenge..."
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>

          <button
            className="form-submit"
            type="submit"
            disabled={sent}
            aria-label="Send message"
          >
            <span className="form-submit-label">
              {sent ? "Message sent" : "Send message"}
            </span>
            <span className="form-submit-arrow" aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}
