import React from 'react';

const CircularSkillsCarousel = ({ 
  skills = [],
  radius = 200,
  speed = 30,
  iconSize = 48,
  className = ''
}) => {
  const totalSkills = skills.length;
  const angleStep = (2 * Math.PI) / totalSkills;

  return (
    <div className={`circular-skills-carousel ${className}`}>
      <div 
        className="circular-skills-container"
        style={{
          '--radius': `${radius}px`,
          '--speed': `${speed}s`,
          '--icon-size': `${iconSize}px`
        }}
      >
        <div className="circular-skills-track">
          {skills.map((skill, index) => {
            const angle = index * angleStep - Math.PI / 2; // Start from top
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="circular-skill-item"
                style={{
                  '--x': `${x}px`,
                  '--y': `${y}px`,
                  '--delay': `${(index / totalSkills) * speed}s`
                }}
              >
                <div className="circular-skill-badge">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="circular-skills-track circular-skills-track-duplicate">
          {skills.map((skill, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={`duplicate-${index}`}
                className="circular-skill-item"
                style={{
                  '--x': `${x}px`,
                  '--y': `${y}px`,
                  '--delay': `${((index / totalSkills) * speed) + (speed / 2)}s`
                }}
              >
                <div className="circular-skill-badge">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularSkillsCarousel;
