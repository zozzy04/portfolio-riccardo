// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { Typewriter } from 'react-simple-typewriter';
import LogoRZ from './LogoRZ';

const Hero = () => {
  return (
    <section id="home" style={{ width: '100vw', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', flexDirection: 'column', margin: 0, padding: 0, background: 'transparent' }}>
      {/* Layer di particelle casuali animate */}
      <div className="random-particles-layer">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="random-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 30}s`,
              opacity: 0.3 + Math.random() * 0.7,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        ))}
      </div>
      <div className="hero-split" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="hero-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <LogoRZ />
          </div>
          <div className="hero-buttons" style={{ marginTop: '2.2rem', display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.a href="#contact" className="hero-btn hero-btn-primary" whileHover={{ scale: 1.05 }}>Contattami</motion.a>
            <motion.a href="#about" className="hero-btn hero-btn-secondary" whileHover={{ scale: 1.05 }}>Scopri di più</motion.a>
          </div>
        </motion.div>
      </div>
      <div className="hero-fade-bottom"></div>
    </section>
  );
};

export default Hero;
