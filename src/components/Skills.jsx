import React, { useState, useEffect, useRef } from 'react';
import { School, GraduationCap, BookOpen, Award } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('education');
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRefList = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (educationRef.current?.children) {
      Array.from(educationRef.current.children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }

    if (skillsRefList.current?.children) {
      Array.from(skillsRefList.current.children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }
  }, [activeCategory]);

  const educationData = [
    {
      icon: <School size={20} />,
      title: 'ITS Digital Academy',
      link: 'https://itsdigitalacademy.com',
      location: 'Treviso, Italia',
      period: '2023 - 2025',
      qualification: 'AI Developer & Data Analyst',
      description: 'Corso biennale specializzato in sviluppo di applicazioni AI e analisi dati. Focus su Python, Machine Learning, Data Visualization e tecnologie moderne.'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Liceo Scientifico Antonio Scarpa',
      link: 'https://www.antonioscarpa.edu.it',
      location: 'Motta di Livenza, Italia',
      period: '2018 - 2023',
      qualification: 'Diploma di Liceo Scientifico',
      description: 'Percorso di studi scientifico con focus su matematica, fisica, scienze e informatica. Sviluppo di competenze logiche, analitiche e problem solving.'
    }
  ];

  const technicalSkills = [
    'Python', 'JavaScript', 'React', 'Node.js', 'Power BI', 'Qlik',
    'SQL', 'Git', 'Vite', 'Knime', 'HTML5', 'CSS3', 'Machine Learning',
    'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'Orange'
  ];

  const categories = [
    { id: 'education', name: 'Formazione', icon: <BookOpen size={18} /> },
    { id: 'technical', name: 'Competenze Tecniche', icon: <Award size={18} /> }
  ];

  return (
    <section id="skills" className="skills section-base" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Competenze</h2>
          <p className="section-subtitle">Le mie competenze tecniche e formative</p>
        </div>

        <div className="skills-content">
          <div className="skills-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab-btn badge-base ${activeCategory === category.id ? 'badge-primary' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {activeCategory === 'education' && (
            <div className="education-section">
              <div className="education-grid" ref={educationRef}>
                {educationData.map((education, index) => (
                  <div key={index} className="education-card card-base">
                    <div className="education-header">
                      <div className="icon-container">
                        {education.icon}
                      </div>
                      <div className="education-info">
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
                        <p className="text-sm text-muted">{education.location}</p>
                        <p className="text-sm text-muted">{education.period}</p>
                      </div>
                    </div>
                    
                    <div className="education-details">
                      <h5 className="text-lg">{education.qualification}</h5>
                      <p className="text-muted">{education.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'technical' && (
            <div className="technical-skills-section">
              <div className="skills-grid" ref={skillsRefList}>
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item badge-base">
                    {skill}
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
