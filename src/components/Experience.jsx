// src/components/Experience.jsx
import React from 'react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const experiences = [
  {
    role: 'AI Developer (Tirocinio)',
    company: 'Espiù S.R.L.',
    companyUrl: 'https://espiu.it',
    period: '2025 – In corso',
    location: 'Innovation Hub',
    description: (
      <ul style={{margin: '1em 0 0 1.2em', padding: 0, color: '#b6d2ff', fontSize: '1.04em', lineHeight: '1.7', listStyle: 'disc inside'}}>
        <li>Progettazione e sviluppo di modelli di intelligenza artificiale</li>
        <li>Collaborazione con team multidisciplinari</li>
        <li>Ricerca e sperimentazione su nuove tecnologie</li>
      </ul>
    ),
    tags: [
      { name: 'Intelligenza Artificiale', icon: 'fas fa-robot' },
      { name: 'Sviluppo', icon: 'fas fa-code' },
      { name: 'Innovazione', icon: 'fas fa-lightbulb' }
    ],
    icon: 'fa-robot'
  },
  {
    role: 'Magazziniere',
    company: 'Eraldo SRL',
    companyUrl: 'https://eraldo.it',
    period: '2024',
    location: 'Ceggia, Italia',
    description: (
      <ul style={{margin: '1em 0 0 1.2em', padding: 0, color: '#b6d2ff', fontSize: '1.04em', lineHeight: '1.7', listStyle: 'disc inside'}}>
        <li>Carico/scarico merci</li>
        <li>Preparazione ordini esteri e spedizioni</li>
        <li>Creazione ordini</li>
      </ul>
    ),
    tags: [
      { name: 'Logistica', icon: 'fas fa-truck' },
      { name: 'Gestione ordini', icon: 'fas fa-clipboard-list' },
      { name: 'Efficienza', icon: 'fas fa-chart-line' }
    ],
    icon: 'fa-boxes'
  },
  {
    role: 'Manovale di Cantina',
    company: 'Opitergium Vini',
    companyUrl: 'https://www.cantinaoderzo.it/',
    period: '2023/2024',
    location: 'Oderzo, Italia',
    description: (
      <ul style={{margin: '1em 0 0 1.2em', padding: 0, color: '#b6d2ff', fontSize: '1.04em', lineHeight: '1.7', listStyle: 'disc inside'}}>
        <li>Conferimento uve</li>
        <li>Lavaggio vasche</li>
        <li>Gestione spaccio e stoccaggio vini</li>
      </ul>
    ),
    tags: [
      { name: 'Teamwork', icon: 'fas fa-users' },
      { name: 'Organizzazione', icon: 'fas fa-tasks' },
      { name: 'Precisione', icon: 'fas fa-bullseye' }
    ],
    icon: 'fa-wine-bottle'
  },
  {
    role: 'Stage Scuola Secondaria',
    company: 'ARKO SPA',
    companyUrl: 'https://www.arkospa.com/',
    period: '2022',
    location: 'Motta di Livenza, Italia',
    description: (
      <ul style={{margin: '1em 0 0 1.2em', padding: 0, color: '#b6d2ff', fontSize: '1.04em', lineHeight: '1.7', listStyle: 'disc inside'}}>
        <li>Smaltimento archivi</li>
        <li>Organizzazione tabulati orari</li>
        <li>Controllo carichi e scarichi</li>
      </ul>
    ),
    tags: [
      { name: 'Controllo qualità', icon: 'fas fa-check-circle' },
      { name: 'Documentazione', icon: 'fas fa-file-alt' },
      { name: 'Analisi', icon: 'fas fa-search' }
    ],
    icon: 'fa-clipboard-check'
  },
  {
    role: 'Tirocinio estivo',
    company: 'Gruppo Geromin',
    companyUrl: 'https://geromin.it',
    period: '2021',
    location: 'San Stino di Livenza, Italia',
    description: (
      <ul style={{margin: '1em 0 0 1.2em', padding: 0, color: '#b6d2ff', fontSize: '1.04em', lineHeight: '1.7', listStyle: 'disc inside'}}>
        <li>Addetto alla sezionatrice</li>
        <li>Assemblaggio e imballaggio dei prodotti</li>
        <li>Carico macchine</li>
      </ul>
    ),
    tags: [
      { name: 'Produzione', icon: 'fas fa-industry' },
      { name: 'Assemblaggio', icon: 'fas fa-tools' },
      { name: 'Sicurezza', icon: 'fas fa-shield-alt' }
    ],
    icon: 'fa-industry'
  }
];

const Experience = () => (
  <SectionWrapper id="experience" withSeparator>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <SectionTitle className="fullwidth" style={{ textAlign: 'center', width: '100%' }}>Esperienze</SectionTitle>
      <div className="glass-box fullwidth experience-content-centered" style={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <div className="experiences-grid" style={{ 
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'start',
          placeItems: 'center'
        }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="experience-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              height: '100%',
              width: '100%'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="experience-header">
              <div className="experience-icon">
                <i className={`fas ${exp.icon}`}></i>
              </div>
              <div className="experience-title">
                <h3>{exp.role}</h3>
                <a 
                  href={exp.companyUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="company-link"
                >
                  {exp.company}
                </a>
                <span className="experience-location">– {exp.location}</span>
              </div>
              <div className="experience-period">
                <span>{exp.period}</span>
              </div>
            </div>
            <div className="experience-content">
              {exp.description}
              <div className="experience-tags">
                {exp.tags.map(tag => (
                  <span key={tag.name} className="experience-tag">
                    <i className={tag.icon}></i>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Experience;
