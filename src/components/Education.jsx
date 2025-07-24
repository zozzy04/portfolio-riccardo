// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

const education = [
  {
    headerIcon: 'fa-graduation-cap',
    headerTitle: 'ITS Digital Academy',
    period: '2024 – Oggi',
    institution: 'Mario Volpato, Venezia',
    institutionUrl: 'https://itsdigitalacademy.com',
    descriptions: [
      'Qualifica post-diploma - Livello EQF 5',
      'Specializzazione in competenze digitali avanzate e programmazione.'
    ]
  },
  {
    headerIcon: 'fa-school',
    headerTitle: 'Diploma Superiore',
    period: '2018 – 2023',
    institution: 'I.S.I.S.S. Antonio Scarpa, Motta di Livenza',
    institutionUrl: 'https://www.antonioscarpa.edu.it/',
    descriptions: [
      'Diploma di Scuola Secondaria di Secondo Grado - Livello EQF 4'
    ]
  }
];

const Education = () => (
  <SectionWrapper id="education" withSeparator>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <SectionTitle className="fullwidth" style={{ textAlign: 'center', width: '100%' }}>Formazione</SectionTitle>
      <motion.div 
        className="glass-box fullwidth education-content-centered" 
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem'
        }}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="education-grid">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="education-header">
              <div className="education-icon">
                <i className={`fas ${ed.headerIcon}`}></i>
              </div>
              <div className="education-title">
                <h3>{ed.headerTitle}</h3>
                <a 
                  href={ed.institutionUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="institution-link"
                >
                  {ed.institution}
                </a>
              </div>
              <div className="education-period">
                <span>{ed.period}</span>
              </div>
            </div>
            <div className="education-content">
              {ed.descriptions.map((d, j) => (
                <p key={j}>{d}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default Education;
