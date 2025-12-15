import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TypewriterText from './TypewriterText';
import CircleExpandButton from './CircleExpandButton';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Assicura che gli elementi siano sempre visibili
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '1';
      subtitleRef.current.style.transform = 'translateY(0)';
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = '1';
      descriptionRef.current.style.transform = 'translateY(0)';
    }
    if (buttonRef.current) {
      buttonRef.current.style.opacity = '1';
      buttonRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background-image">
        <img 
          src="/images/profile-photo.png" 
          alt="Riccardo Zozzolotto" 
          className="hero-bg-image"
        />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text-bottom">
            <h1 className="hero-title" ref={titleRef}>
              {personalInfo.name}
            </h1>
            <h2 className="hero-subtitle" ref={subtitleRef}>
              <TypewriterText
                texts={[
                  personalInfo.title,
                  'Machine Learning',
                  'Data Visualization',
                  'Full Stack Developer',
                  'AI Developer',
                  'Data Analyst',
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
                initialDelay={500}
                loop={true}
                variableSpeed={true}
                startOnViewport={true}
                cursorChar="|"
                cursorColor="var(--accent-primary)"
                showCursor={true}
                hideCursorWhileTyping={false}
                cursorBlinkSpeed={530}
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
