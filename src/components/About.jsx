// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import '../styles/About.css';

const About = () => {
  return (
    <SectionWrapper id="about" withSeparator>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <SectionTitle className="fullwidth" style={{ textAlign: 'center', width: '100%' }}>Chi sono</SectionTitle>

        <motion.div
          className="glass-box about-content-centered"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2.5rem'
          }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about-content">
            <div className="about-header">
              <div className="about-icon">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <div className="about-title" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <span className="about-role" style={{ fontSize: '1.25rem', fontWeight: 700, textAlign: 'center', marginTop: 0 }}>AI Developer & Data Analyst</span>
              </div>
            </div>
            
            <div className="about-text-content">
              <motion.p
                className="about-intro"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                👋 Ciao! Mi chiamo Riccardo, ho 21 anni e sto per iniziare il secondo anno del corso AI Developer & Data Analyst presso un istituto ITS.
              </motion.p>
              <motion.p
                className="about-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Attualmente lavoro come AI Developer & Data Analyst nell’Innovation Hub di <a href="https://espiu.it" target="_blank" rel="noreferrer" className="company-link">Espiù S.R.L.</a>, dove trasformo dati e codice in app intelligenti e funzionali.<br /><br />
                Mi occupo di analisi, automazione e sviluppo di soluzioni data-driven con tecnologie come Python, Power BI, Qlik, Knime, SQL, React/Vite, Orange, e altri strumenti.<br /><br />
                Sono pratico, curioso e orientato al risultato. Cerco visibilità e nuove opportunità per crescere nel mondo tech, portando valore concreto con idee semplici ma efficaci.
              </motion.p>
              
              <motion.div
                className="about-tags"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="about-tag">
                  <i className="fas fa-robot"></i>
                  AI Development
                </span>
                <span className="about-tag">
                  <i className="fas fa-chart-line"></i>
                  Data Analysis
                </span>
                <span className="about-tag">
                  <i className="fas fa-brain"></i>
                  Machine Learning
                </span>
                <span className="about-tag">
                  <i className="fab fa-github"></i>
                  Open Source
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
