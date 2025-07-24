// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { FaCode, FaFileAlt, FaMicrochip, FaGithub, FaLinkedin, FaEnvelope, FaJava, FaDatabase, FaRegKeyboard } from 'react-icons/fa';
import { SiQlik, SiKnime, SiPython, SiCss3, SiReact, SiVite, SiHtml5, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb, SiMysql, SiDocker, SiGit, SiFigma, SiDbeaver, SiOpenai } from 'react-icons/si';

const digitalSkills = [
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
  { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
  { name: 'DBeaver', icon: <FaDatabase />, color: '#FF6B6B' },
  { name: 'ChatGPT', icon: <SiOpenai />, color: '#10A37F' },
  { name: 'Microsoft Office', icon: <FaFileAlt />, color: '#D83B01' },
  { name: 'Qlik', icon: <SiQlik />, color: '#0066CC' },
  { name: 'Knime', icon: <SiKnime />, color: '#0088CC' },
  { name: 'C# (Base)', icon: <FaCode />, color: '#239120' },
  { name: 'Arduino', icon: <FaMicrochip />, color: '#00979D' },
  { name: 'Cursor', icon: <FaRegKeyboard />, color: '#5D3FD3' },
  { name: 'Orange', icon: <FaRegKeyboard />, color: '#FF7900' }
];

// Triplica l'array per creare un marquee continuo
const marqueeSkills = [...digitalSkills, ...digitalSkills, ...digitalSkills];

const Skills = () => {
  return (
    <SectionWrapper id="skills" withSeparator>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <SectionTitle style={{ textAlign: 'center', width: '100%' }}>Competenze Digitali</SectionTitle>
        <motion.div 
          className="skills-fade-bg" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%'
          }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="skills-marquee-outer" style={{ 
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          overflow: 'hidden'
        }}>
          <div className="skills-marquee-inner">
            {[...digitalSkills, ...digitalSkills].map((skill, i) => (
              <div 
                className="skill-marquee-icon-box" 
                key={i}
                style={{
                  '--skill-color': skill.color
                }}
              >
                <span className="skill-marquee-icon" style={{ color: skill.color }}>{skill.icon}</span>
                <span className="skill-marquee-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
