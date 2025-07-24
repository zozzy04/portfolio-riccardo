import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FOOTER_HEIGHT = 110; // Altezza stimata del footer in px (puoi regolare)

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(36);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
      // Calcola quanto manca al fondo
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = docHeight - (scrollY + windowHeight);
      // Se siamo vicini al footer, alza la freccia
      if (distanceFromBottom < FOOTER_HEIGHT + 24) {
        setBottomOffset(FOOTER_HEIGHT + 36 - distanceFromBottom);
      } else {
        setBottomOffset(36);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Torna su"
          style={{
            position: 'fixed',
            bottom: `${bottomOffset}px`,
            right: '2.2rem',
            zIndex: 1500,
            background: 'rgba(30,144,255,0.18)',
            border: '2.5px solid var(--color-primary, #1e90ff)',
            boxShadow: '0 8px 32px 0 rgba(30,144,255,0.18)',
            color: 'var(--color-primary, #1e90ff)',
            borderRadius: '50%',
            width: '3.5rem',
            height: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.6rem',
            cursor: 'pointer',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            transition: 'box-shadow 0.22s, border 0.22s, background 0.22s, color 0.22s, bottom 0.4s cubic-bezier(0.4,0,0.2,1)',
            outline: 'none',
          }}
          whileHover={{
            scale: 1.13,
            boxShadow: '0 12px 36px 0 rgba(30,144,255,0.32)',
            background: 'rgba(30,144,255,0.28)',
            color: '#fff',
            borderColor: '#fff',
          }}
          whileTap={{ scale: 0.97 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton; 