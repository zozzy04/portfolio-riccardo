import React, { useEffect } from 'react';
import './App.css'; // Importiamo i tuoi stili

// Importiamo tutti i componenti
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import CmdBackground from "./components/CmdBackground";

function App() {
  useEffect(() => {
    // Funzione per gestire le animazioni di apparizione progressiva su mobile
    const handleScrollAnimations = () => {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        const sections = document.querySelectorAll('.section-wrapper');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });
        
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    // Gestione animazioni testo al hover su desktop
    const handleTextAnimations = () => {
      const isDesktop = window.innerWidth > 768;
      
      if (isDesktop) {
        const textElements = document.querySelectorAll('h1, h2, h3, p, .skill-label, .skill-marquee-label');
        
        textElements.forEach(element => {
          element.addEventListener('mouseenter', (e) => {
            e.target.style.cursor = 'default';
          });
          
          element.addEventListener('mouseleave', (e) => {
            e.target.style.cursor = 'default';
          });
        });
      }
    };

    // Inizializza le animazioni
    handleScrollAnimations();
    handleTextAnimations();

    // Gestisci il ridimensionamento della finestra
    const handleResize = () => {
      handleScrollAnimations();
      handleTextAnimations();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <CmdBackground />
      {/* Navbar rimossa */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
      {/* Questo è l'alert di successo per il form, gestito in Contact.jsx */}
      <div className="alert alert-success alert-dismissible fade show" role="alert" id="success-alert" style={{ display: 'none', position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
        <strong>Grazie!</strong> Il tuo messaggio è stato inviato con successo.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </>
  );
}

export default App;