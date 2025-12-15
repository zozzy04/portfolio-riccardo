import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { contactData } from '../data/portfolioData';
import CircleExpandButton from './CircleExpandButton';
import WhatsAppChatButton from './WhatsAppChatButton';

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
                  <div className="contact-item">
                    <div className="icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <h4>WhatsApp</h4>
                      <WhatsAppChatButton
                        phoneNumber="+393762381731"
                        message="Ciao! Vorrei saperne di più sul tuo lavoro."
                        size="small"
                        showText={true}
                        showIcon={true}
                        position="static"
                        className="whatsapp-inline"
                      />
                    </div>
                  </div>
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
