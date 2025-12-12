import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-title-wrapper">
              <div className="hero-image-container">
                <img 
                  src="/hero-image.jpg" 
                  alt="Riccardo Zozzolotto" 
                  className="hero-portrait"
                  loading="eager"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h1 className="hero-title" ref={titleRef}>
                {personalInfo.name.split(' ').map((name, i, arr) => (
                  <React.Fragment key={i}>
                    {name}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </div>
            
            <h2 className="hero-subtitle" ref={subtitleRef}>
              {personalInfo.title}
            </h2>
            
            <p className="hero-description" ref={descriptionRef}>
              {personalInfo.description}
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
