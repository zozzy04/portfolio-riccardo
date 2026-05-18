import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function NavBar({ links, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`site-nav${scrolled ? " is-scrolled" : ""}`} aria-label="Main navigation">
        <a className="nav-brand" href="#hero" onClick={closeMenu}>
          RZ
        </a>

        <ul className="nav-links" role="list">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} className="nav-theme-toggle" />

          <a
            href="/Riccardo_Zozzolotto_CV.pdf"
            download
            className="nav-cv-btn"
            aria-label="Download CV"
          >
            CV
          </a>

          <button
            className={`nav-menu-btn${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`fullscreen-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="fullscreen-menu-links" role="list">
          {links.map((link, i) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>
                <span className="menu-num">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="fullscreen-menu-footer">
          <span>rzozzolotto@gmail.com</span>
          <span>Venice, Italy</span>
        </div>
      </div>
    </>
  );
}
