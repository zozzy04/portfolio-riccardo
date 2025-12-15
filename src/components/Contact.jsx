import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { contactData } from '../data/portfolioData';
import CircleExpandButton from './CircleExpandButton';

const iconMap = {
  Mail,
  Phone,
  MapPin
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (infoRef.current?.children) {
      Array.from(infoRef.current.children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }

    if (formRef.current) {
      formRef.current.style.opacity = '1';
      formRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = contactData.info.map(item => ({
    ...item,
    icon: React.createElement(iconMap[item.icon], { size: 20 })
  }));

  return (
    <section id="contact" className="contact section-base" ref={contactRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{contactData.title}</h2>
          <p className="section-subtitle">{contactData.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-main">
            <div className="contact-info" ref={infoRef}>
              <div className="info-card card-base">
                <h3>Informazioni di Contatto</h3>
                <p className="text-muted">
                  {contactData.availability}
                </p>
                
                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                      <div className="icon-container">
                        {info.icon}
                      </div>
                      <div className="contact-text">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="contact-link"
                            target={info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? '_self' : '_blank'}
                            rel={info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form" ref={formRef}>
              <div className="form-card card-base">
                <h3>Invia un Messaggio</h3>
                
                {isSubmitted && (
                  <div className="success-message">
                    <CheckCircle size={20} />
                    <span>Messaggio inviato con successo! Ti risponderò presto.</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    <label htmlFor="name">Nome *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Oggetto *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Oggetto del messaggio"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Messaggio *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Scrivi il tuo messaggio qui..."
                      rows="5"
                    ></textarea>
                  </div>

                  <CircleExpandButton
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                    color="var(--accent-primary)"
                    textColor="#ffffff"
                    disabled={isSubmitting}
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <span>Invia Messaggio</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </CircleExpandButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
