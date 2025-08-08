import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageCircle, 
  User, 
  Calendar, 
  Zap,
  AtSign,
  Smartphone,
  Navigation,
  Globe,
  MessageSquare,
  Users,
  Sparkles,
  Activity
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
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
    
    // Simulazione invio form
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset del messaggio di successo dopo 5 secondi
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <AtSign size={24} />,
      title: 'Email',
      value: 'rzozzolotto@gmail.com',
      link: 'mailto:rzozzolotto@gmail.com',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Telefono',
      value: '+39 376 238 1731',
      link: 'tel:+393762381731',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
    },
    {
      icon: <Navigation size={24} />,
      title: 'Località',
      value: 'Treviso, Italia',
      link: 'https://maps.google.com/?q=Treviso,Italia',
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
    }
  ];



  const contactFeatures = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Comunicazione Diretta',
      description: 'Risposta rapida entro 24 ore',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaborazioni',
      description: 'Progetti freelance e full-time',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Innovazione',
      description: 'Focus su AI e Data Science',
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)'
    }
  ];

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contatti</h2>
          <p className="section-subtitle">Contattami per collaborazioni e opportunità</p>
        </div>

        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          {/* Contact Features */}
          <div className="contact-features">
            {contactFeatures.map((feature, index) => (
              <div 
                key={index}
                className="contact-feature-card"
                style={{
                  '--feature-color': feature.color,
                  '--feature-gradient': feature.gradient,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="feature-glow"></div>
                <div className="feature-particles"></div>
                
                <div className="feature-icon" style={{ background: feature.gradient }}>
                  {feature.icon}
                </div>
                
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-main">
            <div className="contact-info">
              <div className="info-section">
                <div className="section-card">
                  <div className="card-glow"></div>
                  <div className="card-particles"></div>
                  
                  <h3>Informazioni di Contatto</h3>
                  <p>
                    Sono sempre interessato a nuove opportunità e collaborazioni. 
                    Non esitare a contattarmi per discutere di progetti, 
                    opportunità lavorative o semplicemente per fare networking.
                  </p>
                  
                  <div className="contact-details">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index} 
                        className="contact-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="contact-icon" style={{ background: info.gradient }}>
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



              <div className="availability-section">
                <div className="section-card">
                  <div className="card-glow"></div>
                  <div className="card-particles"></div>
                  
                  <h3>Disponibilità</h3>
                  <div className="availability-status">
                    <div className="status-indicator"></div>
                    <span>Disponibile per nuove opportunità</span>
                  </div>
                  <p>
                    Attualmente sono disponibile per collaborazioni freelance, 
                    progetti a tempo determinato e opportunità full-time. 
                    Sono particolarmente interessato a progetti che coinvolgono 
                    AI, Machine Learning e Data Analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-card">
                <div className="card-glow"></div>
                <div className="card-particles"></div>
                
                <h3>Invia un Messaggio</h3>
                
                {isSubmitted && (
                  <div className="success-message">
                    <div className="success-icon">
                      <CheckCircle size={20} />
                    </div>
                    <span>Messaggio inviato con successo! Ti risponderò presto.</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <span>Nome *</span>
                    </label>
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
                    <label htmlFor="email">
                      <span>Email *</span>
                    </label>
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
                    <label htmlFor="subject">
                      <span>Oggetto *</span>
                    </label>
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
                    <label htmlFor="message">
                      <span>Messaggio *</span>
                    </label>
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

                  <button
                    type="submit"
                    className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    <div className="btn-glow"></div>
                    <div className="btn-particles"></div>
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Invia Messaggio
                      </>
                    )}
                  </button>
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
