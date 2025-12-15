import React, { useState, useRef, useEffect } from 'react';

const CircleExpandButton = ({
  children,
  href,
  onClick,
  color = '#6366f1',
  textColor = '#ffffff',
  className = '',
  style = {},
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    button.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const buttonStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.875rem 2rem',
    borderRadius: '9999px',
    backgroundColor: color,
    color: textColor,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    fontFamily: 'var(--font-base)',
    fontWeight: 600,
    fontSize: '0.9375rem',
    gap: '0.5rem',
    opacity: disabled ? 0.6 : 1,
    transform: isPressed ? 'scale(0.98)' : 'scale(1)',
    ...style
  };

  const circleStyle = {
    position: 'absolute',
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    width: isHovered ? '300px' : '0px',
    height: isHovered ? '300px' : '0px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'none',
    zIndex: 0
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const commonProps = {
    ref: buttonRef,
    className: `circle-expand-button ${className}`,
    style: buttonStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
    disabled: disabled
  };

  const content = (
    <>
      <span ref={circleRef} style={circleStyle} />
      <span style={contentStyle}>
        {children}
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <a 
        href={href} 
        {...commonProps}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick(e);
          }
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      onClick={onClick}
      type="button"
    >
      {content}
    </button>
  );
};

export default CircleExpandButton;
