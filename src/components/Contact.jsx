// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import { SiGmail } from 'react-icons/si';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

// Icona Gmail super stilizzata, ancora più grande e piena
function GmailIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="10" width="34" height="28" rx="6" fill="none" stroke="#EA4335" strokeWidth="3.2"/>
      <polyline points="7,15 24,32 41,15" fill="none" stroke="#EA4335" strokeWidth="3.2" strokeLinejoin="round"/>
    </svg>
  );
}

const contacts = [
  { name: 'Gmail', icon: <GmailIcon size={48} />, url: 'mailto:rzozzolotto@gmail.com?subject=Contatto%20Portfolio' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/riccardoozozzolotto', color: '#E4405F' },
  { name: 'Facebook',  icon: <FaFacebook />,  url: 'https://facebook.com/Riccardo-Zozzolotto.77', color: '#1877F3' },
  { name: 'LinkedIn',  icon: <FaLinkedin />,  url: 'https://www.linkedin.com/in/riccardo-zozzolotto-53aa732b1', color: '#0A66C2' },
  { name: 'WhatsApp',  icon: <FaWhatsapp />,  url: 'https://wa.me/+393762381731', color: '#25D366' },
  { name: 'GitHub',    icon: <FaGithub />, url: 'https://github.com/zozzy04', color: '#a259ff' },
];

const Contact = () => {
  const [form, setForm] = useState({ email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = `mailto:rzozzolotto@gmail.com?subject=Messaggio dal portfolio&body=${encodeURIComponent(form.message + '\n\nEmail: ' + form.email)}`;
    setSent(true);
  };
  return (
    <SectionWrapper id="contact" withSeparator>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <SectionTitle className="fullwidth" style={{ textAlign: 'center', width: '100%' }}>Contatti</SectionTitle>
        <motion.div 
          className="glass-box contact-horizontal-box fullwidth contact-content-centered" 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '2rem'
          }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="contacts-flex contact-icons-horizontal-centered socials-animated-bar" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: '2rem',
          gap: '1.5rem',
          flexWrap: 'wrap',
          minHeight: '7rem',
        }}>
          {contacts.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className={`contact-circle-link${c.name === 'LinkedIn' ? ' contact-linkedin-center' : ''}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
              title={c.name}
              onMouseEnter={() => setActiveIcon(c.name)}
              onMouseLeave={() => setActiveIcon(null)}
              onFocus={() => setActiveIcon(c.name)}
              onBlur={() => setActiveIcon(null)}
              style={
                c.name === 'GitHub'
                  ? { '--social-color': '#a259ff' }
                  : activeIcon === c.name && c.color
                  ? { '--social-color': c.color }
                  : {}
              }
            >
              <span className="contact-circle-icon">
                {c.name === 'Gmail'
                  ? <GmailIcon size={48} />
                  : React.cloneElement(c.icon, { color: c.color, size: 48 })}
              </span>
            </motion.a>
          ))}
        </div>
        {/* RIMOSSO IL FORM DI CONTATTO */}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
