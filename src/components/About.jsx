import React, { useEffect, useRef } from 'react';
import { User, Rocket, Code, MapPin, Clock, School, Briefcase, Award, Heart } from 'lucide-react';

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

  const personalInfo = [
    { icon: <MapPin size={18} />, label: 'Località', value: 'Treviso, Italia' },
    { icon: <Clock size={18} />, label: 'Età', value: '21 anni' },
    { icon: <School size={18} />, label: 'Formazione', value: 'ITS Digital Academy + Liceo Scientifico' },
    { icon: <Briefcase size={18} />, label: 'Esperienza', value: '2+ anni' }
  ];

  const interests = [
    { name: 'AI Development' },
    { name: 'Data Analysis' },
    { name: 'Machine Learning' },
    { name: 'Web Development' },
    { name: 'Automation' },
    { name: 'Innovation' }
  ];

  const aboutSections = [
    {
      icon: <User size={20} />,
      title: 'Chi Sono',
      description: 'Sono Riccardo, un giovane sviluppatore AI di 21 anni appassionato di tecnologia e innovazione. Mi piace trasformare idee complesse in soluzioni semplici ed efficaci.'
    },
    {
      icon: <Rocket size={20} />,
      title: 'Il Mio Lavoro',
      description: 'Lavoro come AI Developer & Data Analyst nell\'Innovation Hub di Espiù S.R.L., dove sviluppo soluzioni intelligenti e analisi dati per ottimizzare i processi aziendali.'
    },
    {
      icon: <Code size={20} />,
      title: 'Le Mie Competenze',
      description: 'Mi occupo di analisi, automazione e sviluppo con tecnologie come Python, Power BI, Qlik, Knime, SQL, React/Vite, Orange e altri strumenti moderni.'
    }
  ];

  return (
    <section id="about" className="about section-base" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Chi Sono</h2>
          <p className="section-subtitle">Conosciamoci meglio</p>
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
