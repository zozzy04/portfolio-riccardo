import { useState, useEffect, useRef } from "react";

export default function PageLoader({ onComplete }) {
  const [count, setCount]     = useState(0);
  const [exiting, setExiting] = useState(false);
  const fillRef               = useRef(null);
  const rafRef                = useRef(null);
  const startRef              = useRef(null);
  const DURATION              = 2200;

  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed  = now - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const value    = Math.round(eased * 100);

      setCount(value);

      if (fillRef.current) {
        fillRef.current.style.width = `${value}%`;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 980);
        }, 180);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <div className={`page-loader${exiting ? " is-exiting" : ""}`} aria-hidden="true">
      <div className="loader-number">
        {String(count).padStart(2, "0")}
      </div>
      <div className="loader-label">Loading</div>
      <div className="loader-bottom">
        <div className="loader-bottom-fill" ref={fillRef} />
      </div>
    </div>
  );
}
