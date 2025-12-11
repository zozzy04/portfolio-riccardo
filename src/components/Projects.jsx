import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Brain, Database, Globe } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Portfolio Personale',
      category: 'web',
      description: 'Portfolio professionale sviluppato con React e Vite. Design moderno e responsive con animazioni fluide, dark mode e ottimizzazioni SEO.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript', 'Lucide React'],
      features: [
        'Design responsive per tutti i dispositivi',
        'Animazioni CSS e transizioni fluide',
        'Dark/Light mode toggle',
        'Ottimizzazioni SEO e performance',
        'Smooth scroll e navigazione'
      ],
      status: 'completato',
      image: null,
      liveUrl: 'https://riccardozozzolotto.com',
      codeUrl: 'https://github.com/riccardozozzolotto/portfolio-nuovo'
    },
    {
      title: 'Web App Analisi Fatture Energetiche - Espiù SRL',
      category: 'data',
      description: 'Web application per l\'analisi e l\'estrazione dati con catalogazione e archiviazione da fatture energetiche e del gas. Sistema completo con inserimento dati diretto nel database.',
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Power BI', 'API REST'],
      features: [
        'Estrazione automatica dati da fatture PDF',
        'Catalogazione e archiviazione intelligente',
        'Dashboard analitiche per monitoraggio consumi',
        'Inserimento dati diretto nel database',
        'Reportistica avanzata e export dati',
        'Sistema di notifiche e alert'
      ],
      status: 'in-sviluppo',
      image: null,
      liveUrl: null,
      codeUrl: null
    }
  ];

  const filters = [
    { id: 'all', label: 'Tutti', icon: <Eye size={16} /> },
    { id: 'data', label: 'Data Analysis', icon: <Database size={16} /> },
    { id: 'web', label: 'Web Development', icon: <Globe size={16} /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Progetti</h2>
          <p className="section-subtitle">I miei lavori più recenti e significativi</p>
        </div>

        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <Code size={48} />
                    <p>Immagine in arrivo</p>
                  </div>
                )}
                
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn"
                      >
                        <Github size={16} />
                        Codice
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`category-badge ${project.category}`}>
                    {project.category === 'ai' && <Brain size={12} />}
                    {project.category === 'data' && <Database size={12} />}
                    {project.category === 'web' && <Globe size={12} />}
                    {project.category === 'ai' && 'AI/ML'}
                    {project.category === 'data' && 'Data Analysis'}
                    {project.category === 'web' && 'Web Dev'}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <h4>Tecnologie Utilizzate</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4>Caratteristiche Principali</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-status">
                  <span className={`status-badge ${project.status}`}>
                    {project.status === 'completato' ? 'Completato' : 'In Sviluppo'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interessato a collaborare su un progetto? Contattami per discutere delle tue idee!</p>
          <a href="#contact" className="cta-btn">
            <Code size={16} />
            Iniziamo a Collaborare
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
