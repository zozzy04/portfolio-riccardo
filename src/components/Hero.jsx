import React, { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink, Brain, Target, Users, Award, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBadge, setCurrentBadge] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadge(prev => (prev + 1) % heroBadges.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  const heroBadges = [
    { text: '👋 Disponibile per nuove opportunità', icon: <Award size={16} /> },
    { text: '🚀 AI Developer & Data Analyst', icon: <Brain size={16} /> },
    { text: '💡 Soluzioni innovative', icon: <Target size={16} /> },
    { text: '🤝 Collaborazioni aperte', icon: <Users size={16} /> }
  ];

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <div className="hero-badge-container">
              <div 
                className="hero-badge"
                style={{ animationDelay: `${currentBadge * 0.5}s` }}
              >
                <div className="badge-icon">
                  {heroBadges[currentBadge].icon}
                </div>
                <span>{heroBadges[currentBadge].text}</span>
                <div className="badge-glow"></div>
                <div className="badge-particles"></div>
              </div>
            </div>
            
            <h1 className="hero-title">
              Ciao, sono{' '}
              <span className="highlight">Riccardo Zozzolotto</span>
            </h1>
            
            <h2 className="hero-subtitle">
              AI Developer & Data Analyst
            </h2>
            
            <p className="hero-description">
              Trasformo dati e codice in app intelligenti e funzionali.
              Mi occupo di analisi, automazione e sviluppo di soluzioni data-driven
              con tecnologie moderne e innovative.
            </p>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <div className="btn-glow"></div>
                <div className="btn-particles"></div>
                <Mail size={16} />
                Contattami
              </a>
              <a href="#projects" className="btn btn-secondary">
                <div className="btn-glow"></div>
                <div className="btn-particles"></div>
                <ExternalLink size={16} />
                Vedi Progetti
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-profile">
              <div className="profile-card">
                <div className="card-glow"></div>
                <div className="card-particles"></div>
                
                <div className="profile-avatar">
                  <div className="memoji-container">
                    <img 
                      src="/memoji.png" 
                      alt="Riccardo Zozzolotto Memoji" 
                      className="memoji-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="memoji-placeholder">
                      <span>RZ</span>
                    </div>
                  </div>
                </div>
                
                <div className="profile-info">
                  <h3>Riccardo Zozzolotto</h3>
                  <p>AI Developer & Data Analyst appassionato di tecnologie innovative. Specializzato in Machine Learning, Data Analysis e sviluppo di soluzioni intelligenti.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Hero;
