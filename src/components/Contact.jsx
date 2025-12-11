import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    const ctx = gsap.context(() => {
      if (infoRef.current?.children) {
        gsap.set(infoRef.current.children, { opacity: 1, y: 0 });
        gsap.from(infoRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          immediateRender: false
        });
      }

      if (formRef.current) {
        gsap.set(formRef.current, { opacity: 1, y: 0 });
        gsap.from(formRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          immediateRender: false
        });
      }
    }, contactRef);

    return () => ctx.revert();
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

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'rzozzolotto@gmail.com',
      link: 'mailto:rzozzolotto@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Telefono',
      value: '+39 376 238 1731',
      link: 'tel:+393762381731'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Località',
      value: 'Treviso, Italia',
      link: 'https://maps.google.com/?q=Treviso,Italia'
    }
  ];

  return (
    <section id="contact" className="contact section-base" ref={contactRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contatti</h2>
          <p className="section-subtitle">Contattami per collaborazioni e opportunità</p>
        </div>

        <div className="contact-content">
          <div className="contact-main">
            <div className="contact-info" ref={infoRef}>
              <div className="info-card card-base">
                <h3>Informazioni di Contatto</h3>
                <p className="text-muted">
                  Sono sempre interessato a nuove opportunità e collaborazioni.
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

                  <button
                    type="submit"
                    className={`btn-base btn-primary ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <span>Invia Messaggio</span>
                        <ArrowRight size={18} />
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
