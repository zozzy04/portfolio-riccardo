import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Heart, 
  Target, 
  Zap, 
  Brain, 
  Code, 
  Database, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Lightbulb,
  Navigation,
  Clock,
  School,
  Briefcase,
  Sparkles,
  Cpu,
  BarChart3,
  GitBranch,
  Rocket,
  Settings,
  Bike,
  Car
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const personalInfo = [
    { icon: <Navigation size={20} />, label: 'Località', value: 'Treviso, Italia', color: '#3B82F6' },
    { icon: <Clock size={20} />, label: 'Età', value: '21 anni', color: '#10B981' },
    { icon: <School size={20} />, label: 'Formazione', value: 'ITS Digital Academy + Liceo Scientifico', color: '#8B5CF6' },
    { icon: <Briefcase size={20} />, label: 'Esperienza', value: '2+ anni', color: '#F59E0B' }
  ];

  const interests = [
    { icon: <Cpu size={16} />, name: 'AI Development', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)' },
    { icon: <BarChart3 size={16} />, name: 'Data Analysis', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)' },
    { icon: <Brain size={16} />, name: 'Machine Learning', color: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)' },
    { icon: <GitBranch size={16} />, name: 'Open Source', color: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)' },
    { icon: <Sparkles size={16} />, name: 'Innovation', color: '#F59E0B', gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' },
    { icon: <Settings size={16} />, name: 'Automation', color: '#06B6D4', gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)' },
    { 
      icon: <Car size={16} />, 
      name: 'F1', 
      color: '#FF0000', 
      gradient: 'linear-gradient(135deg, #FF0000 0%, #DC2626 100%)' 
    },
    { icon: <Bike size={16} />, name: 'Ciclismo', color: '#059669', gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)' }
  ];

  const aboutSections = [
    {
      icon: <User size={24} />,
      title: 'Chi Sono',
      description: 'Sono Riccardo, un giovane sviluppatore AI di 21 anni appassionato di tecnologia e innovazione. Mi piace trasformare idee complesse in soluzioni semplici ed efficaci.',
      color: '#9CAF88',
      gradient: 'linear-gradient(135deg, #9CAF88 0%, #B8C9A8 100%)',
      category: 'Personal'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Il Mio Lavoro',
      description: 'Lavoro come AI Developer & Data Analyst nell\'Innovation Hub di Espiù S.R.L., dove sviluppo soluzioni intelligenti e analisi dati per ottimizzare i processi aziendali.',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
      category: 'Professional'
    },
    {
      icon: <Code size={24} />,
      title: 'Le Mie Competenze',
      description: 'Mi occupo di analisi, automazione e sviluppo con tecnologie come Python, Power BI, Qlik, Knime, SQL, React/Vite, Orange e altri strumenti moderni.',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      category: 'Technical'
    }
  ];

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Chi Sono</h2>
          <p className="section-subtitle">Conosciamoci meglio</p>
        </div>

        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          {/* About Sections */}
          <div className="about-sections">
            {aboutSections.map((section, index) => (
              <div 
                key={index} 
                className="about-section-card"
                style={{
                  '--card-color': section.color,
                  '--card-gradient': section.gradient,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="card-glow"></div>
                <div className="card-particles"></div>
                
                <div className="section-header">
                  <div className="section-icon" style={{ background: section.gradient }}>
                    {section.icon}
                  </div>
                  <div className="section-info">
                    <div className="category-badge">
                      {section.category}
                    </div>
                    <h3 className="section-title">{section.title}</h3>
                  </div>
                </div>
                
                <p className="section-description">{section.description}</p>
              </div>
            ))}
          </div>

          {/* Personal Info Card */}
          <div className="info-card">
            <div className="card-glow"></div>
            <div className="card-particles"></div>
            
            <div className="card-header">
              <Award size={24} />
              <h3>Informazioni Personali</h3>
            </div>
            
            <div className="info-list">
              {personalInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="info-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="interests-card">
            <div className="card-glow"></div>
            <div className="card-particles"></div>
            
            <div className="card-header">
              <Heart size={24} />
              <h3>Interessi & Passioni</h3>
            </div>
            
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="interest-item"
                  style={{ 
                    '--interest-color': interest.color,
                    '--interest-gradient': interest.gradient,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="interest-icon" style={{ background: interest.gradient }}>
                    {interest.icon}
                  </div>
                  <span className="interest-name">{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
