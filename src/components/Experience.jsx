import React, { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Brain } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const iconMap = {
  Brain
};

const Experience = () => {
  const experienceRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (cardsRef.current?.children) {
      Array.from(cardsRef.current.children).forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    }
  }, []);

  const experiences = experienceData.experiences.map(exp => ({
    ...exp,
    icon: React.createElement(iconMap[exp.icon], { size: 20 })
  }));

  return (
    <section id="experience" className="experience section-base" ref={experienceRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{experienceData.title}</h2>
          <p className="section-subtitle">{experienceData.subtitle}</p>
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
