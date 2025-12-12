import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Database, Globe, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (cardsRef.current?.children) {
      Array.from(cardsRef.current.children).forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    }
  }, [activeFilter]);

  const projects = projectsData.projects;
  const filters = projectsData.filters;

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'data': return <Database size={16} />;
      case 'web': return <Globe size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="projects section-base" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{projectsData.title}</h2>
          <p className="section-subtitle">{projectsData.subtitle}</p>
        </div>

        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn badge-base ${activeFilter === filter.id ? 'badge-primary' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" ref={cardsRef}>
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card card-base">
              {project.image && (
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`category-badge badge-base ${project.category === 'web' ? 'badge-primary' : ''}`}>
                  {getCategoryIcon(project.category)}
                  {project.category === 'data' ? 'Data Analysis' : 'Web Dev'}
                </span>
              </div>

              <p className="project-description text-muted">{project.description}</p>

              <div className="project-technologies">
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag badge-base">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <span className={`status-badge badge-base ${project.status === 'completato' ? 'badge-primary' : ''}`}>
                  {project.status === 'completato' ? 'Completato' : 'In Sviluppo'}
                </span>
                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-secondary"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-secondary"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p className="text-muted">Interessato a collaborare su un progetto?</p>
          <a href="#contact" className="btn-base btn-primary">
            <span>Contattami</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
