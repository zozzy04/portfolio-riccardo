import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Heart, Code, Brain, Target, Activity } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Navigazione': [
      { name: 'Home', href: '#home' },
      { name: 'Chi Sono', href: '#about' },
      { name: 'Competenze', href: '#skills' },
      { name: 'Esperienze', href: '#experience' },
      { name: 'Progetti', href: '#projects' },
      { name: 'Contatti', href: '#contact' }
    ],
    'Competenze': [
      { name: 'AI Development', href: '#skills' },
      { name: 'Data Analysis', href: '#skills' },
      { name: 'Machine Learning', href: '#skills' },
      { name: 'Web Development', href: '#skills' },
      { name: 'Power BI', href: '#skills' },
      { name: 'Python', href: '#skills' }
    ],
    'Contatti': [
      { name: 'rzozzolotto@gmail.com', href: 'mailto:rzozzolotto@gmail.com' },
      { name: 'Treviso, Italia', href: null }
    ]
  };

  const footerFeatures = [
    {
      icon: <Brain size={24} />,
      title: 'AI & ML',
      description: 'Soluzioni intelligenti',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
    },
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: 'Codice pulito e efficiente',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
    },
    {
      icon: <Target size={24} />,
      title: 'Data Driven',
      description: 'Analisi e insights',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
    }
  ];

  return (
    <footer id="footer" className="footer" ref={footerRef}>
      <div className="container">
        <div className={`footer-content ${isVisible ? 'visible' : ''}`}>
          {/* Footer Features */}
          <div className="footer-features">
            {footerFeatures.map((feature, index) => (
              <div 
                key={index}
                className="footer-feature-card"
                style={{
                  '--feature-color': feature.color,
                  '--feature-gradient': feature.gradient,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="feature-glow"></div>
                <div className="feature-particles"></div>
                
                <div className="feature-icon" style={{ background: feature.gradient }}>
                  {feature.icon}
                </div>
                
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <div className="section-card">
              <div className="card-glow"></div>
              <div className="card-particles"></div>
              
              <h4>Social Media</h4>
              <div className="social-links" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem', 
                marginTop: '1rem' 
              }}>
                <a
                  href="https://www.linkedin.com/in/riccardo-zozzolotto-53aa732b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href="https://github.com/zozzy04"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #333 0%, #666 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.facebook.com/riccardo.zozzolotto.77"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1877F2 0%, #42A5F5 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.instagram.com/riccardoozozzolotto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E4405F 0%, #F06292 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a
                  href="https://strava.com/athletes/99605951"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FC5200 0%, #FF6B35 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Activity size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-main">
            <div className="footer-section">
              <div className="section-card">
                <div className="card-glow"></div>
                <div className="card-particles"></div>
                
                <h3>Riccardo Zozzolotto</h3>
                <p>
                  AI Developer & Data Analyst appassionato di tecnologie innovative. 
                  Specializzato in Machine Learning, Data Analysis e sviluppo di soluzioni intelligenti.
                </p>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category} className="footer-section">
                <div className="section-card">
                  <div className="card-glow"></div>
                  <div className="card-particles"></div>
                  
                  <h4>{category}</h4>
                  <ul className="footer-links">
                    {links.map((link, index) => (
                      <li key={index} style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}>
                        {link.href ? (
                          <a href={link.href}>{link.name}</a>
                        ) : (
                          <span>{link.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>© {currentYear} Riccardo Zozzolotto. Tutti i diritti riservati.</span>
              <span className="made-with">
                Made with <Heart size={16} /> in Italia
              </span>
            </div>
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Torna in cima">
              <div className="btn-glow"></div>
              <div className="btn-particles"></div>
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
