import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <nav className={`navbar-hamburger${open ? ' open' : ''}`} style={{position: 'sticky', top: '0.7rem', left: '0.7rem', zIndex: 1000}}>
      <div style={{position: 'relative', display: 'inline-block'}}>
        <button
          className={`navbar-hamburger-btn${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Apri menu"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
        >
          <span className="navbar-hamburger-icon"></span>
          <span className="navbar-hamburger-icon"></span>
          <span className="navbar-hamburger-icon"></span>
        </button>
        <span className={`navbar-hamburger-label${hover ? ' show' : ''}`}>Menu</span>
      </div>
      <div className={`navbar-menu${open ? ' show' : ''}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>Chi sono</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setOpen(false)}>Esperienze</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contatti</a>
      </div>
      {open && <div className="navbar-backdrop" onClick={() => setOpen(false)}></div>}
    </nav>
  );
};

export default Navbar; 