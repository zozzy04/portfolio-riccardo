import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink, Code, Database, Brain, ChevronLeft, ChevronRight, Zap, Target, Users, Award } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  const experiences = [
    {
      icon: <Brain size={24} />,
      title: 'AI Developer & Data Analyst',
      company: 'Espiù S.R.L.',
      companyLink: 'https://espiu.it',
      location: 'Treviso, Italia',
      period: '2024 - Presente',
      description: 'Lavoro nell\'Innovation Hub di Espiù, dove mi occupo di sviluppo di soluzioni AI e analisi dati per ottimizzare i processi aziendali.',
      technologies: ['Python', 'Power BI', 'Qlik', 'Knime', 'SQL', 'React', 'Orange'],
      achievements: [
        'Sviluppo di modelli di Machine Learning per l\'analisi predittiva',
        'Creazione di dashboard interattive per la visualizzazione dati',
        'Automazione di processi aziendali con Python',
        'Collaborazione con team cross-funzionali per implementare soluzioni data-driven'
      ],
      color: 'var(--primary-color)',
      gradient: 'linear-gradient(135deg, #9CAF88 0%, #B8C9A8 100%)',
      category: 'Tech'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Magazziniere',
      company: 'Eraldo SRL',
      companyLink: 'https://eraldo.it',
      location: 'Ceggia, Italia',
      period: '2024',
      description: 'Gestione logistica e preparazione ordini. Carico/scarico merci e creazione ordini per spedizioni estere.',
      technologies: ['Logistica', 'Gestione ordini', 'Efficienza operativa', 'Teamwork'],
      achievements: [
        'Carico/scarico merci con precisione e tempestività',
        'Preparazione ordini esteri e spedizioni',
        'Creazione e gestione ordini',
        'Collaborazione efficace con il team logistico'
      ],
      color: 'var(--accent-color)',
      gradient: 'linear-gradient(135deg, #6B7C5A 0%, #8A9B7A 100%)',
      category: 'Logistics'
    },
    {
      icon: <Code size={24} />,
      title: 'Manovale di Cantina',
      company: 'Opitergium Vini',
      companyLink: 'https://www.cantinaoderzo.it',
      location: 'Oderzo, Italia',
      period: '2023/2024',
      description: 'Gestione della produzione vinicola con conferimento uve, lavaggio vasche e gestione spaccio e stoccaggio vini.',
      technologies: ['Teamwork', 'Organizzazione', 'Precisione', 'Gestione produzione'],
      achievements: [
        'Conferimento uve con attenzione alla qualità',
        'Lavaggio vasche per la produzione vinicola',
        'Gestione spaccio e stoccaggio vini',
        'Mantenimento degli standard di qualità aziendali'
      ],
      color: '#8B4513',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      category: 'Wine'
    },
    {
      icon: <Database size={24} />,
      title: 'Stage Scuola Secondaria',
      company: 'ARKO SPA',
      companyLink: 'https://arko.it',
      location: 'Motta di Livenza, Italia',
      period: '2022',
      description: 'Attività di controllo qualità e documentazione. Smaltimento archivi e organizzazione tabulati orari.',
      technologies: ['Controllo qualità', 'Documentazione', 'Analisi dati', 'Organizzazione'],
      achievements: [
        'Smaltimento archivi con precisione e ordine',
        'Organizzazione tabulati orari',
        'Controllo carichi e scarichi',
        'Supporto alle attività di documentazione'
      ],
      color: '#4682B4',
      gradient: 'linear-gradient(135deg, #4682B4 0%, #5F9EA0 100%)',
      category: 'Quality'
    },
    {
      icon: <Brain size={24} />,
      title: 'Tirocinio estivo',
      company: 'Gruppo Geromin',
      companyLink: 'https://geromin.it',
      location: 'San Stino di Livenza, Italia',
      period: '2021',
      description: 'Addetto alla sezionatrice con assemblaggio e imballaggio dei prodotti. Carico macchine e gestione produzione.',
      technologies: ['Produzione', 'Assemblaggio', 'Sicurezza', 'Gestione macchine'],
      achievements: [
        'Addetto alla sezionatrice con precisione',
        'Assemblaggio e imballaggio dei prodotti',
        'Carico macchine per la produzione',
        'Rispetto delle norme di sicurezza'
      ],
      color: '#32CD32',
      gradient: 'linear-gradient(135deg, #32CD32 0%, #228B22 100%)',
      category: 'Production'
    }
  ];

  // Duplica le esperienze per creare l'effetto infinito
  const duplicatedExperiences = [...experiences, ...experiences, ...experiences];

  useEffect(() => {
    // L'auto-scroll è rimosso, quindi questo effetto non è più necessario
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Tech': return <Zap size={16} />;
      case 'Logistics': return <Target size={16} />;
      case 'Wine': return <Code size={16} />;
      case 'Quality': return <Award size={16} />;
      case 'Production': return <Users size={16} />;
      default: return <Briefcase size={16} />;
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Esperienze</h2>
          <p className="section-subtitle">Il mio percorso professionale</p>
        </div>

        {/* Experience Cards */}
        <div className="experience-grid">
          {experiences.map((experience, idx) => (
            <div 
              key={idx} 
              className="experience-card"
              style={{
                '--card-color': experience.color,
                '--card-gradient': experience.gradient
              }}
            >
              <div className="card-glow"></div>
              <div className="card-particles"></div>
              
              <div className="experience-header">
                <div className="experience-icon" style={{ background: experience.gradient }}>
                  {experience.icon}
                </div>
                <div className="category-badge" style={{ backgroundColor: experience.color }}>
                  {experience.category}
                </div>
              </div>
              
              <div className="experience-info">
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-company">
                  <span className="company-name">
                    {experience.companyLink ? (
                      <a 
                        href={experience.companyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}
                  </span>
                </div>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <p>{experience.description}</p>
                </div>
                
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="experience-technologies">
                    <h4>Tecnologie Utilizzate</h4>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="achievements-list">
                    <h4>Risultati Principali</h4>
                    {experience.achievements.map((achievement, achievementIdx) => (
                      <div key={achievementIdx} className="achievement-item">
                        <span className="achievement-bullet">•</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-stats">
            {[
              { number: '5+', label: 'Esperienze Lavorative' },
              { number: '4+', label: 'Anni di Esperienza' },
              { number: '4+', label: 'Settori Esplorati' },
              { number: '15+', label: 'Competenze Sviluppate' }
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
