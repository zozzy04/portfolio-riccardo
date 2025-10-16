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
      icon: '🐍',
      color: '#3776ab',
      gradient: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)'
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      color: '#f7df1e',
      gradient: 'linear-gradient(135deg, #f7df1e 0%, #000000 100%)'
    },
    {
      name: 'React',
      icon: '⚛️',
      color: '#61dafb',
      gradient: 'linear-gradient(135deg, #61dafb 0%, #282c34 100%)'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: '#339933',
      gradient: 'linear-gradient(135deg, #339933 0%, #68a063 100%)'
    },
    {
      name: 'Power BI',
      icon: '📊',
      color: '#f2c811',
      gradient: 'linear-gradient(135deg, #f2c811 0%, #000000 100%)'
    },
    {
      name: 'Qlik',
      icon: '🔍',
      color: '#00b7c3',
      gradient: 'linear-gradient(135deg, #00b7c3 0%, #ffffff 100%)'
    },
    {
      name: 'Pandas',
      icon: '🐼',
      color: '#150458',
      gradient: 'linear-gradient(135deg, #150458 0%, #e70488 100%)'
    },
    {
      name: 'Scikit-learn',
      icon: '🤖',
      color: '#f7931e',
      gradient: 'linear-gradient(135deg, #f7931e 0%, #ffffff 100%)'
    },
    {
      name: 'SQL',
      icon: '🗄️',
      color: '#336791',
      gradient: 'linear-gradient(135deg, #336791 0%, #ffffff 100%)'
    },
    {
      name: 'Git',
      icon: '🌿',
      color: '#f05032',
      gradient: 'linear-gradient(135deg, #f05032 0%, #ffffff 100%)'
    },
    {
      name: 'Vite',
      icon: '⚡',
      color: '#646cff',
      gradient: 'linear-gradient(135deg, #646cff 0%, #747bff 100%)'
    },
    {
      name: 'Knime',
      icon: '🔧',
      color: '#0092cc',
      gradient: 'linear-gradient(135deg, #0092cc 0%, #ffffff 100%)'
    },
    {
      name: 'HTML5',
      icon: '🌐',
      color: '#e34f26',
      gradient: 'linear-gradient(135deg, #e34f26 0%, #f06529 100%)'
    },
    {
      name: 'CSS3',
      icon: '🎨',
      color: '#1572b6',
      gradient: 'linear-gradient(135deg, #1572b6 0%, #33a9dc 100%)'
    },
    {
      name: 'TensorFlow',
      icon: '🧠',
      color: '#ff6f00',
      gradient: 'linear-gradient(135deg, #ff6f00 0%, #ffffff 100%)'
    },
    {
      name: 'NumPy',
      icon: '🔢',
      color: '#4dabcf',
      gradient: 'linear-gradient(135deg, #4dabcf 0%, #ffffff 100%)'
    },
    {
      name: 'Orange',
      icon: '🍊',
      color: '#ff8c00',
      gradient: 'linear-gradient(135deg, #ff8c00 0%, #ffffff 100%)'
    },
    {
      name: 'Machine Learning',
      icon: '🎯',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)'
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
