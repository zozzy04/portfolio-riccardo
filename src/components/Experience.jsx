import React, { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink, Brain } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current?.children) {
        gsap.set(cardsRef.current.children, { opacity: 1, y: 0 });
        gsap.from(cardsRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          immediateRender: false
        });
      }
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      icon: <Brain size={20} />,
      title: 'AI Developer Trainee',
      company: 'Enernext',
      companyLink: 'https://enernext.it',
      location: 'Italia',
      period: '2025 - Presente',
      description: 'Tirocinio come AI Developer Trainee presso Enernext, dove sviluppo app e software con AI applicata per soluzioni innovative nel settore energetico.',
      technologies: ['AI/ML', 'Python', 'React', 'JavaScript', 'Machine Learning']
    },
    {
      icon: <Brain size={20} />,
      title: 'AI Developer & Data Analyst',
      company: 'Espiù S.R.L.',
      companyLink: 'https://espiu.it',
      location: 'Treviso, Italia',
      period: 'Maggio 2025 - Settembre 2025',
      description: 'Lavoro nell\'Innovation Hub di Espiù, dove mi occupo di sviluppo di soluzioni AI e analisi dati per ottimizzare i processi aziendali.',
      technologies: ['Python', 'Power BI', 'Qlik', 'Knime', 'SQL', 'React']
    }
  ];

  return (
    <section id="experience" className="experience section-base" ref={experienceRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Esperienze</h2>
          <p className="section-subtitle">Il mio percorso professionale</p>
        </div>

        <div className="experience-grid" ref={cardsRef}>
          {experiences.map((experience, idx) => (
            <div key={idx} className="experience-card card-base">
              <div className="experience-header">
                <div className="icon-container">
                  {experience.icon}
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-meta">
                    <a 
                      href={experience.companyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="experience-company"
                    >
                      {experience.company}
                    </a>
                    <span className="text-muted">•</span>
                    <span className="text-muted">{experience.location}</span>
                  </div>
                  <p className="text-sm text-muted">{experience.period}</p>
                </div>
              </div>
              
              <p className="experience-description text-muted">{experience.description}</p>
              
              <div className="experience-technologies">
                <div className="tech-tags">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag badge-base">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
