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
      category: 'Programming & Web',
      icon: <Code size={24} />,
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
      skills: [
        { name: 'Python', level: 90, color: '#10B981' },
        { name: 'JavaScript', level: 85, color: '#F59E0B' },
        { name: 'React', level: 80, color: '#3B82F6' },
        { name: 'Node.js', level: 70, color: '#F59E0B' }
      ]
    },
    {
      category: 'Data & AI',
      icon: <Cpu size={24} />,
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      skills: [
        { name: 'Power BI', level: 85, color: '#F59E0B' },
        { name: 'Qlik', level: 80, color: '#10B981' },
        { name: 'Pandas', level: 85, color: '#3B82F6' },
        { name: 'Scikit-learn', level: 80, color: '#8B5CF6' }
      ]
    },
    {
      category: 'Tools & Others',
      icon: <Settings size={24} />,
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
      skills: [
        { name: 'SQL', level: 80, color: '#8B5CF6' },
        { name: 'Git', level: 75, color: '#EF4444' },
        { name: 'Vite', level: 85, color: '#10B981' },
        { name: 'Knime', level: 75, color: '#3B82F6' }
      ]
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

  const getSkillIcon = (skillName) => {
    const icons = {
      'Python': <Zap size={16} />,
      'JavaScript': <Code size={16} />,
      'SQL': <Database size={16} />,
      'HTML/CSS': <Globe size={16} />,
      'Power BI': <Target size={16} />,
      'Qlik': <Brain size={16} />,
      'Knime': <Users size={16} />,
      'Orange': <Lightbulb size={16} />,
      'Scikit-learn': <Brain size={16} />,
      'TensorFlow': <Zap size={16} />,
      'Pandas': <Database size={16} />,
      'NumPy': <Code size={16} />,
      'React': <Globe size={16} />,
      'Vite': <Zap size={16} />,
      'Node.js': <Code size={16} />,
      'Git': <Users size={16} />
    };
    return icons[skillName] || <Code size={16} />;
  };

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
              
              <div className="skills-grid">
                {technicalSkills.map((category, categoryIndex) => (
                  <div 
                    key={categoryIndex} 
                    className="skill-category-card"
                    style={{
                      '--card-color': category.color,
                      '--card-gradient': category.gradient
                    }}
                  >
                    <div className="card-glow"></div>
                    <div className="card-particles"></div>
                    
                    <div className="category-header">
                      <div className="category-icon" style={{ background: category.gradient }}>
                        {category.icon}
                      </div>
                      <h4>{category.category}</h4>
                    </div>
                    
                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex} 
                          className="skill-item"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          <div className="skill-info">
                            <div className="skill-name-wrapper">
                              {getSkillIcon(skill.name)}
                              <span className="skill-name">{skill.name}</span>
                            </div>
                            <span className="skill-level">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress"
                              style={{ 
                                width: `${skill.level}%`,
                                backgroundColor: skill.color
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
