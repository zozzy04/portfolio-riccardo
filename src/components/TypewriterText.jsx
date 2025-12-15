import React, { useState, useEffect, useRef } from 'react';

const TypewriterText = ({
  texts = ['AI Developer & Data Analyst'],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  initialDelay = 0,
  loop = true,
  variableSpeed = false,
  startOnViewport = true,
  reverse = false,
  cursorChar = '|',
  cursorColor = 'currentColor',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorBlinkSpeed = 530,
  className = '',
  style = {}
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursorState, setShowCursorState] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(!startOnViewport);
  
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const cursorBlinkRef = useRef(null);

  // Intersection Observer per startOnViewport
  useEffect(() => {
    if (!startOnViewport || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [startOnViewport, hasStarted]);

  // Cursor blink animation
  useEffect(() => {
    if (!showCursor) return;

    cursorBlinkRef.current = setInterval(() => {
      setShowCursorState((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => {
      if (cursorBlinkRef.current) {
        clearInterval(cursorBlinkRef.current);
      }
    };
  }, [showCursor, cursorBlinkSpeed]);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;

    // Handle initial delay
    if (initialDelay > 0 && !hasStarted) {
      timeoutRef.current = setTimeout(() => {
        setHasStarted(true);
      }, initialDelay);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }

    if (!hasStarted) return;

    const currentText = texts[currentIndex];
    const textToType = reverse 
      ? currentText.split('').reverse().join('')
      : currentText;

    let delay;

    if (isTyping && !isDeleting) {
      // Typing mode
      if (charIndex < textToType.length) {
        delay = variableSpeed
          ? typingSpeed + Math.random() * 50 - 25
          : typingSpeed;
        
        timeoutRef.current = setTimeout(() => {
          const newText = textToType.substring(0, charIndex + 1);
          setDisplayText(reverse ? newText.split('').reverse().join('') : newText);
          setCharIndex(charIndex + 1);
          if (hideCursorWhileTyping) {
            setShowCursorState(false);
          }
        }, delay);
      } else {
        // Finished typing, pause then delete or move to next
        timeoutRef.current = setTimeout(() => {
          if (loop || currentIndex < texts.length - 1) {
            setIsDeleting(true);
            if (hideCursorWhileTyping) {
              setShowCursorState(true);
            }
          }
        }, pauseDuration);
      }
    } else if (isDeleting) {
      // Deleting mode
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          const newText = textToType.substring(0, charIndex - 1);
          setDisplayText(reverse ? newText.split('').reverse().join('') : newText);
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        if (loop || currentIndex < texts.length - 1) {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    charIndex,
    isTyping,
    isDeleting,
    currentIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    initialDelay,
    loop,
    variableSpeed,
    reverse,
    isVisible,
    hasStarted,
    hideCursorWhileTyping
  ]);

  const displayTextFinal = reverse 
    ? displayText.split('').reverse().join('')
    : displayText;

  return (
    <span
      ref={containerRef}
      className={`typewriter-text ${className}`}
      style={style}
    >
      {displayTextFinal}
      {showCursor && showCursorState && (
        <span
          className="typewriter-cursor"
          style={{
            color: cursorColor,
            marginLeft: '2px'
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypewriterText;
