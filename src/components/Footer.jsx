// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="py-4 text-center" style={{ 
    background: 'var(--clr-bg)', 
    borderTop: '1px solid rgba(79, 140, 255, 0.1)',
    boxShadow: '0 -2px 16px 0 rgba(79,140,255,0.07)',
    position: 'relative',
    fontFamily: 'var(--font-base)',
    fontWeight: 400,
    letterSpacing: '0.5px'
  }}>
    {/* Linea luminosa sopra il footer */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: 'linear-gradient(90deg, var(--clr-accent) 0%, #4f8cff 100%)',
      opacity: 0.5,
      borderRadius: '0 0 8px 8px',
      pointerEvents: 'none',
    }} />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-muted mb-1" style={{ 
        textAlign: 'center', 
        width: '100%',
        fontSize: '1.08rem',
        color: 'rgba(255, 255, 255, 0.82)',
        fontFamily: 'var(--font-base)',
        fontWeight: 500,
        letterSpacing: '0.4px',
        marginBottom: '1.2rem',
        textShadow: '0 2px 8px rgba(79,140,255,0.10)',
        transition: 'color 0.3s',
      }}>
        &copy; {new Date().getFullYear()} Riccardo Zozzolotto. Portfolio personale. Tutti i diritti riservati.
      </p>
    </motion.div>
  </footer>
);

export default Footer;
