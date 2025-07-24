import React, { useEffect, useRef, useState } from "react";
import "../styles/LogoRZ.css";

const MATRIX_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const LOGO = "RZ";
const ANIMATION_DURATION = 4000; // 4 secondi

function getRandomChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

// SVG icone a tema, solo ingranaggio
const ICONS = [
  // Ingranaggio
  ({ style }) => (
    <svg width="1em" height="1em" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <defs>
        <linearGradient id="gearGradient" x1="0" y1="120" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e90ff" />
          <stop offset="1" stopColor="#6ba3ff" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="38" stroke="url(#gearGradient)" strokeWidth="12" fill="rgba(255,255,255,0.08)" filter="url(#glow)" />
      <g stroke="url(#gearGradient)" strokeWidth="8" strokeLinecap="round">
        <line x1="60" y1="10" x2="60" y2="0" />
        <line x1="60" y1="120" x2="60" y2="110" />
        <line x1="10" y1="60" x2="0" y2="60" />
        <line x1="120" y1="60" x2="110" y2="60" />
        <line x1="25" y1="25" x2="17" y2="17" />
        <line x1="95" y1="25" x2="103" y2="17" />
        <line x1="25" y1="95" x2="17" y2="103" />
        <line x1="95" y1="95" x2="103" y2="103" />
      </g>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </svg>
  )
];

const LogoRZ = () => {
  const [displayed, setDisplayed] = useState(["", ""]);
  const [hovered, setHovered] = useState(false);
  const [showGear, setShowGear] = useState(false);
  const [matrixCycles, setMatrixCycles] = useState(0);
  const timeoutRef = useRef();
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    let reveal = [false, false];
    let running = true;

    function animateMatrix() {
      if (!running) return;
      frame++;
      let next = ["", ""];
      for (let i = 0; i < 2; i++) {
        if (!reveal[i]) {
          if (Math.random() < frame / 60) {
            next[i] = LOGO[i];
            reveal[i] = true;
          } else {
            next[i] = getRandomChar();
          }
        } else {
          next[i] = LOGO[i];
        }
      }
      setDisplayed(next);
      if (reveal[0] && reveal[1]) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(["R", "Z"]);
          timeoutRef.current = setTimeout(() => {
            setMatrixCycles(c => c + 1);
            if ((matrixCycles + 1) % 3 === 0) {
              setIconIndex(i => (i + 1) % ICONS.length);
              setShowGear(true);
            } else {
              frame = 0;
              reveal = [false, false];
              animateMatrix();
            }
          }, 5000);
        }, 700);
      } else {
        timeoutRef.current = setTimeout(animateMatrix, 120);
      }
    }
    if (!showGear) animateMatrix();
    return () => {
      running = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [showGear, matrixCycles]);

  // Gestione gear: mostra per 3s, poi torna a Matrix
  useEffect(() => {
    if (showGear) {
      timeoutRef.current = setTimeout(() => {
        setShowGear(false);
      }, 3000);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [showGear]);

  return (
    <div
      className={`logo-rz-glass ${hovered ? "logo-rz-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'Poppins, Inter, Arial, sans-serif',
        fontWeight: 800,
        fontSize: '15rem',
        background: 'none',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        backgroundImage: 'linear-gradient(135deg, var(--color-primary) 0%, #6ba3ff 100%)',
        filter: 'drop-shadow(0 0 24px #4f8cff88)',
        transition: 'transform 0.5s cubic-bezier(.4,0,.2,1), filter 0.5s',
        cursor: 'pointer',
        userSelect: 'none',
        textShadow: '0 2px 16px #4f8cff55, 0 0 32px #4f8cff44',
        letterSpacing: '-0.02em',
        textAlign: 'center',
        lineHeight: 1,
        WebkitTextStroke: '1.5px #ffffff33',
        animation: 'textGradient 6s ease-in-out infinite, logoRZPulse 2.2s infinite cubic-bezier(.4,0,.2,1)',
        backgroundSize: '200% 200%'
      }}
    >
      {showGear ? (
        <span style={{ display: 'inline-block', animation: 'logoRZGearSpin 2.5s linear infinite' }}>
          {ICONS[0]({ style: { verticalAlign: 'middle', width: '1em', height: '1em' } })}
        </span>
      ) : (
        <>
          <span className="logo-rz-matrix">
            {displayed[0]}{displayed[1]}
          </span>
          <span className="logo-rz-glass-reflection" />
        </>
      )}
      <style>{`
        @media (max-width: 900px) {
          .logo-rz-glass { font-size: 9rem !important; }
        }
        @media (max-width: 600px) {
          .logo-rz-glass { font-size: 5rem !important; }
        }
        @keyframes logoRZPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 24px #4f8cff88); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 48px #6be6ff); }
        }
        @keyframes logoRZGearSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LogoRZ; 