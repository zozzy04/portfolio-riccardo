import React, { useEffect, useRef } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [currentYear] = React.useState(new Date().getFullYear());
  const footerRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (featuresRef.current?.children) {
        gsap.set(featuresRef.current.children, { opacity: 1, y: 0 });
        gsap.from(featuresRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          immediateRender: false
        });
      }
    }, footerRef);

    return () => ctx.revert();
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

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/riccardo-zozzolotto-53aa732b1/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/zozzy04',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

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
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
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
