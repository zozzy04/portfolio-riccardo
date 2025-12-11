import React, { useEffect, useRef } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4
      });

      gsap.from(descriptionRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6
      });

      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" ref={titleRef}>
              Riccardo Zozzolotto
            </h1>
            
            <h2 className="hero-subtitle" ref={subtitleRef}>
              AI Developer & Data Analyst
            </h2>
            
            <p className="hero-description" ref={descriptionRef}>
              Trasformo dati e codice in soluzioni intelligenti e funzionali.
              Specializzato in Machine Learning, Data Analysis e sviluppo di applicazioni data-driven.
            </p>
            
            <div className="hero-actions" ref={buttonRef}>
              <a href="#contact" className="btn btn-primary">
                <span>Contattami</span>
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn btn-secondary">
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
