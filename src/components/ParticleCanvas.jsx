import { useEffect, useRef } from "react";

const SPACING = 76;
const MAX_DIST = 100;
const DRIFT = 20;

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let particles = [];
    let animId = null;
    let mouseX = -9999;
    let mouseY = -9999;

    function buildParticles() {
      particles = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const ox = c * SPACING - SPACING / 2;
          const oy = r * SPACING - SPACING / 2;
          particles.push({
            ox,
            oy,
            x: ox + (Math.random() - 0.5) * DRIFT,
            y: oy + (Math.random() - 0.5) * DRIFT,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            size: Math.random() * 1.1 + 0.4,
            alpha: Math.random() * 0.3 + 0.08,
          });
        }
      }
    }

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      buildParticles();
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Drift within bounds
        p.x += p.vx;
        p.y += p.vy;
        if (Math.abs(p.x - p.ox) > DRIFT) p.vx *= -1;
        if (Math.abs(p.y - p.oy) > DRIFT) p.vy *= -1;

        // Soft mouse repulsion
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 110 && mdist > 0) {
          const force = (110 - mdist) / 110;
          p.x += (mdx / mdist) * force * 1.4;
          p.y += (mdy / mdist) * force * 1.4;
        }
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,185,234,${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    resize();
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
