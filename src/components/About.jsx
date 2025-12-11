import React, { useEffect, useRef } from 'react';
import { User, Rocket, Code, MapPin, Clock, School, Briefcase, Award, Heart } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const iconMap = {
  User,
  Rocket,
  Code,
  MapPin,
  Clock,
  School,
  Briefcase,
  Award,
  Heart
};

const About = () => {
  const aboutRef = useRef(null);
  const sectionsRef = useRef(null);
  const infoRef = useRef(null);
  const interestsRef = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (sectionsRef.current?.children) {
      Array.from(sectionsRef.current.children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }

    if (infoRef.current?.children) {
      Array.from(infoRef.current.children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }

    if (interestsRef.current?.children) {
      Array.from(interestsRef.current.children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }

  }, []);

  const personalInfo = aboutData.personalDetails.map(item => ({
    ...item,
    icon: React.createElement(iconMap[item.icon], { size: 18 })
  }));

  const interests = aboutData.interests.map(name => ({ name }));

  const aboutSections = aboutData.sections.map(section => ({
    ...section,
    icon: React.createElement(iconMap[section.icon], { size: 20 })
  }));

  return (
    <section id="about" className="about section-base" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{aboutData.title}</h2>
          <p className="section-subtitle">{aboutData.subtitle}</p>
        </div>

        <div className="about-content">
          <div className="about-sections" ref={sectionsRef}>
            {aboutSections.map((section, index) => (
              <div key={index} className="about-section-card card-base">
                <div className="section-header-inline">
                  <div className="icon-container">
                    {section.icon}
                  </div>
                  <h3>{section.title}</h3>
                </div>
                <p className="text-muted">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="about-details">
            <div className="info-card card-base" ref={infoRef}>
              <div className="card-header-inline">
                <Award size={20} />
                <h3>Informazioni Personali</h3>
              </div>
              <div className="info-list">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="icon-container icon-small">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <span className="info-label text-sm text-muted">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests-card card-base" ref={interestsRef}>
              <div className="card-header-inline">
                <Heart size={20} />
                <h3>Interessi & Passioni</h3>
              </div>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item badge-base">
                    {interest.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
