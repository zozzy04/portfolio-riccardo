import React, { useState, useEffect, useRef } from 'react';

const EyesFollowCursor = ({ 
  radius = 8,
  eyeSize = 24,
  pupilSize = 8,
  eyeColor = '#6366f1',
  pupilColor = '#ffffff',
  gap = 4,
  className = ''
}) => {
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calcola la distanza dal centro
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Limita il movimento al raggio specificato
      let moveX = deltaX;
      let moveY = deltaY;

      if (distance > radius) {
        moveX = (deltaX / distance) * radius;
        moveY = (deltaY / distance) * radius;
      }

      setPupilPosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [radius]);

  const eyeStyle = {
    width: `${eyeSize}px`,
    height: `${eyeSize}px`,
    borderRadius: '50%',
    backgroundColor: eyeColor,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const pupilStyle = {
    width: `${pupilSize}px`,
    height: `${pupilSize}px`,
    borderRadius: '50%',
    backgroundColor: pupilColor,
    position: 'absolute',
    transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
    transition: 'transform 0.1s ease-out',
    pointerEvents: 'none'
  };

  return (
    <div
      ref={containerRef}
      className={`eyes-follow-cursor ${className}`}
      style={{
        display: 'flex',
        gap: `${gap}px`,
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      {/* Occhio sinistro */}
      <div style={eyeStyle}>
        <div style={pupilStyle} />
      </div>
      
      {/* Occhio destro */}
      <div style={eyeStyle}>
        <div style={pupilStyle} />
      </div>
    </div>
  );
};

export default EyesFollowCursor;
