// Hook per scroll reveal animations - Stile masterPortfolio
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (!options.once) {
          setIsRevealed(false);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isRevealed];
};

export default useScrollReveal;

