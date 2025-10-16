import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Code, 
  Database, 
  Brain, 
  Globe, 
  Award, 
  Zap, 
  Target, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Lightbulb, 
  ChevronLeft, 
  ChevronRight,
  School,
  Cpu,
  BarChart3,
  Rocket,
  GitBranch,
  Settings,
  Sparkles,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('education');
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const educationData = [
    {
      icon: <School size={24} />,
      title: 'ITS Digital Academy',
      link: 'https://itsdigitalacademy.com',
      location: 'Treviso, Italia',
      period: '2023 - 2025',
      qualification: 'AI Developer & Data Analyst',
      description: 'Corso biennale specializzato in sviluppo di applicazioni AI e analisi dati. Focus su Python, Machine Learning, Data Visualization e tecnologie moderne.',
      color: '#9CAF88',
      gradient: 'linear-gradient(135deg, #9CAF88 0%, #B8C9A8 100%)',
      category: 'Education'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Liceo Scientifico Antonio Scarpa',
      link: 'https://www.antonioscarpa.edu.it',
      location: 'Motta di Livenza, Italia',
      period: '2018 - 2023',
      qualification: 'Diploma di Liceo Scientifico',
      description: 'Percorso di studi scientifico con focus su matematica, fisica, scienze e informatica. Sviluppo di competenze logiche, analitiche e problem solving.',
      color: '#6B7C5A',
      gradient: 'linear-gradient(135deg, #6B7C5A 0%, #8BA876 100%)',
      category: 'Education'
    }
  ];

  const technicalSkills = [
    {
      name: 'Python',
      icon: <Code size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'JavaScript',
      icon: <Zap size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'React',
      icon: <Globe size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'Node.js',
      icon: <Cpu size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'Power BI',
      icon: <BarChart3 size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'Qlik',
      icon: <Target size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'Pandas',
      icon: <Database size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'Scikit-learn',
      icon: <Brain size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'SQL',
      icon: <Database size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'Git',
      icon: <GitBranch size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'Vite',
      icon: <Rocket size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'Knime',
      icon: <Settings size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'HTML5',
      icon: <Globe size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'CSS3',
      icon: <Layers size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'TensorFlow',
      icon: <Brain size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'NumPy',
      icon: <Cpu size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    },
    {
      name: 'Orange',
      icon: <Lightbulb size={24} />,
      color: 'var(--primary-color)',
      gradient: 'var(--gradient-primary)'
    },
    {
      name: 'Machine Learning',
      icon: <TrendingUp size={24} />,
      color: 'var(--accent-color)',
      gradient: 'var(--gradient-secondary)'
    }
  ];

  const categories = [
    { id: 'education', name: 'Formazione', icon: <BookOpen size={20} /> },
    { id: 'technical', name: 'Competenze Tecniche', icon: <Sparkles size={20} /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplica le competenze per creare l'effetto infinito
  const duplicatedSkills = [...technicalSkills, ...technicalSkills, ...technicalSkills];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Competenze</h2>
          <p className="section-subtitle">Le mie competenze tecniche e formative</p>
        </div>

        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          {/* Category Tabs */}
          <div className="skills-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category.id);
                }}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Education Section */}
          {activeCategory === 'education' && (
            <div className="education-section">
              <div className="section-subheader">
                <GraduationCap size={24} />
                <h3>Formazione</h3>
              </div>
              
              <div className="education-grid">
                {educationData.map((education, index) => (
                  <div 
                    key={index} 
                    className="education-card"
                    style={{
                      '--card-color': education.color,
                      '--card-gradient': education.gradient,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="card-glow"></div>
                    <div className="card-particles"></div>
                    
                    <div className="education-header">
                      <div className="education-icon" style={{ background: education.gradient }}>
                        {education.icon}
                      </div>
                      <div className="education-info">
                        <div className="category-badge">
                          {education.category}
                        </div>
                        <h4 className="education-title">
                          <a 
                            href={education.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="education-link"
                          >
                            {education.title}
                          </a>
                        </h4>
                        <p className="education-location">{education.location}</p>
                        <p className="education-period">{education.period}</p>
                      </div>
                    </div>
                    
                    <div className="education-details">
                      <h5 className="education-qualification">{education.qualification}</h5>
                      <p className="education-description">{education.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Skills Section */}
          {activeCategory === 'technical' && (
            <div className="technical-skills-section">
              <div className="section-subheader">
                <Award size={24} />
                <h3>Competenze Tecniche</h3>
              </div>
              
              <div className="skills-carousel-container">
                <div className="skills-carousel">
                  {duplicatedSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="skill-card"
                      style={{
                        '--skill-color': skill.color,
                        '--skill-gradient': skill.gradient,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="skill-card-glow"></div>
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
