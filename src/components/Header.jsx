import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Home, User, Brain, Briefcase, FolderOpen, Mail, Share2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const headerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={16} /> },
    { name: 'Chi Sono', href: '#about', icon: <User size={16} /> },
    { name: 'Competenze', href: '#skills', icon: <Brain size={16} /> },
    { name: 'Esperienze', href: '#experience', icon: <Briefcase size={16} /> },
    { name: 'Progetti', href: '#projects', icon: <FolderOpen size={16} /> },
    { name: 'Contatti', href: '#contact', icon: <Mail size={16} /> },
    { name: 'Social Media', href: '#footer', icon: <Share2 size={16} /> }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleMouseEnter = () => {
    // Solo su desktop (larghezza > 768px)
    if (window.innerWidth > 768) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsHovered(true);
      setIsMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    // Solo su desktop (larghezza > 768px)
    if (window.innerWidth > 768) {
      setIsHovered(false);
      timeoutRef.current = setTimeout(() => {
        setIsMenuOpen(false);
      }, 300); // Ritardo di 300ms prima di chiudere
    }
  };

  // Cleanup del timeout quando il componente si smonta
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);



  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`} 
      ref={headerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="header-background">
        <div className="header-pattern"></div>
        <div className="header-particles"></div>
      </div>
      
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-card">
              <div className="card-glow"></div>
              <div className="card-particles"></div>
              <div className="logo-circle">
                <span>RZ</span>
              </div>
            </div>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-container">
              <div className="nav-glow"></div>
              <div className="nav-particles"></div>
              

              
              <ul className="nav-list">
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="nav-link"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      title={item.name}
                    >
                      <div className="link-glow"></div>
                      <div className="link-particles"></div>
                      <div className="link-icon">
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
            >
              <div className="toggle-glow"></div>
              <div className="toggle-particles"></div>
              <div className="toggle-icon">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </div>
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="menu-glow"></div>
              <div className="menu-particles"></div>
              <div className="menu-icon">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
