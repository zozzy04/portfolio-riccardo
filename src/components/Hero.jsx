import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '1';
      subtitleRef.current.style.transform = 'translateY(0)';
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = '1';
      descriptionRef.current.style.transform = 'translateY(0)';
    }
    if (buttonRef.current) {
      buttonRef.current.style.opacity = '1';
      buttonRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-image-wrapper">
          <img 
            src="/hero-image.jpg" 
            alt="Riccardo Zozzolotto" 
            className="hero-image"
            loading="eager"
            onError={(e) => {
              // Fallback se l'immagine non esiste - mostra solo background gradient
              e.target.style.display = 'none';
              const wrapper = e.target.parentElement;
              if (wrapper) {
                wrapper.style.background = 'linear-gradient(135deg, var(--color-brand-night) 0%, var(--color-brand-night-blue) 100%)';
              }
            }}
          />
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" ref={titleRef}>
              Riccardo<br />Zozzolotto
            </h1>
            
            <h2 className="hero-subtitle" ref={subtitleRef}>
              AI Developer & Data Analyst
            </h2>
            
            <p className="hero-description" ref={descriptionRef}>
              Trasformo dati e codice in soluzioni intelligenti e funzionali.
              Specializzato in Machine Learning, Data Analysis e sviluppo di applicazioni data-driven.
            </p>
            
            <div className="hero-actions" ref={buttonRef}>
              <a href="#contact" className="btn-base btn-primary">
                <span>Contattami</span>
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-base btn-secondary">
                <span>Progetti</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
