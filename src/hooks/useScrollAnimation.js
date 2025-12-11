import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const {
    delay = 0,
    duration = 0.8,
    y = 60,
    opacity = 0,
    ease = 'power3.out',
    start = 'top 80%'
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        y: y,
        opacity: opacity
      },
      {
        y: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: ease,
        scrollTrigger: {
          trigger: element,
          start: start,
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay, duration, y, opacity, ease, start]);

  return ref;
};

export default useScrollAnimation;

