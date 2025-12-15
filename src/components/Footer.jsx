import React, { useEffect, useRef } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import SocialMediaIcons from './SocialMediaIcons';
import WhatsAppChatButton from './WhatsAppChatButton';

const Footer = () => {
  const [currentYear] = React.useState(new Date().getFullYear());
  const footerRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (featuresRef.current?.children) {
      Array.from(featuresRef.current.children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Navigazione': [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    'Competenze': [
      { name: 'AI Development', href: '#skills' },
      { name: 'Data Analysis', href: '#skills' },
      { name: 'Machine Learning', href: '#skills' },
      { name: 'Web Development', href: '#skills' }
    ],
    'Contatti': [
      { name: 'rzozzolotto@gmail.com', href: 'mailto:rzozzolotto@gmail.com' },
      { name: 'Treviso, Italia', href: null }
    ]
  };


  return (
    <footer id="footer" className="footer section-base" ref={footerRef}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-section">
              <h3 className="footer-title">Riccardo Zozzolotto</h3>
              <p className="footer-description">
                  AI Developer & Data Analyst appassionato di tecnologie innovative. 
              </p>
              <div className="social-links" ref={featuresRef}>
                <SocialMediaIcons 
                  size={48}
                  spacing={12}
                  iconColor="var(--text-primary)"
                  containerBg="var(--bg-elevated)"
                  borderRadius={12}
                />
                <WhatsAppChatButton
                  phoneNumber="+393762381731"
                  message="Ciao! Vorrei saperne di più sul tuo lavoro."
                  size="medium"
                  showText={false}
                  showIcon={true}
                  position="static"
                  className="whatsapp-inline"
                />
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-section">
                <h4 className="footer-category">{category}</h4>
                  <ul className="footer-links">
                    {links.map((link, index) => (
                    <li key={index}>
                        {link.href ? (
                          <a href={link.href}>{link.name}</a>
                        ) : (
                          <span>{link.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>© {currentYear} Riccardo Zozzolotto. Tutti i diritti riservati.</span>
              <span className="made-with">
                Made with <Heart size={14} /> in Italia
              </span>
            </div>
            <button 
              onClick={scrollToTop} 
              className="scroll-top-btn" 
              aria-label="Torna in cima"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
