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
              <div className="about-title">
                <h3>Riccardo Zozzolotto</h3>
                <span className="about-role">AI Developer & Data Analyst</span>
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
                👋 Ciao, sono <strong>Riccardo Zozzolotto</strong>.<br />
                A.I. Developer and Data Analyst in tirocinio presso <a href="https://espiu.it" target="_blank" rel="noreferrer" className="company-link">Espiù S.R.L.</a>, trasformo dati in applicazioni intelligenti.
              </motion.p>
              
              <motion.p
                className="about-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Appassionato di <strong>Intelligenza Artificiale</strong>, <strong>open source</strong>, <strong>data science</strong> e <strong>design funzionale</strong> che emoziona.
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
