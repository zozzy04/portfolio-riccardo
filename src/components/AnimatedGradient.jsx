import React, { useEffect, useRef } from 'react';

const AnimatedGradient = ({
  speed = 1,
  intensity = 0.5,
  colors = [
    { r: 99, g: 102, b: 241 },   // indigo
    { r: 139, g: 92, b: 246 },   // purple
    { r: 6, g: 182, b: 212 },    // cyan
    { r: 168, g: 85, b: 247 }    // violet
  ],
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      timeRef.current += 0.005 * speed;
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Create gradient with animated positions
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Animated gradient positions using sine waves
      const offset1 = Math.sin(timeRef.current) * 0.3;
      const offset2 = Math.cos(timeRef.current * 0.7) * 0.3;
      const offset3 = Math.sin(timeRef.current * 1.3) * 0.25;
      
      // Create multiple radial gradients for warp effect
      const gradient1 = ctx.createRadialGradient(
        centerX + width * offset1 * 0.3,
        centerY + height * offset2 * 0.3,
        0,
        centerX + width * offset1 * 0.3,
        centerY + height * offset2 * 0.3,
        width * 0.8
      );
      
      gradient1.addColorStop(0, `rgba(${colors[0].r}, ${colors[0].g}, ${colors[0].b}, ${0.3 * intensity})`);
      gradient1.addColorStop(0.5, `rgba(${colors[1].r}, ${colors[1].g}, ${colors[1].b}, ${0.2 * intensity})`);
      gradient1.addColorStop(1, 'transparent');
      
      const gradient2 = ctx.createRadialGradient(
        centerX - width * offset2 * 0.4,
        centerY - height * offset1 * 0.4,
        0,
        centerX - width * offset2 * 0.4,
        centerY - height * offset1 * 0.4,
        width * 0.7
      );
      
      gradient2.addColorStop(0, `rgba(${colors[2].r}, ${colors[2].g}, ${colors[2].b}, ${0.25 * intensity})`);
      gradient2.addColorStop(0.5, `rgba(${colors[3].r}, ${colors[3].g}, ${colors[3].b}, ${0.15 * intensity})`);
      gradient2.addColorStop(1, 'transparent');
      
      const gradient3 = ctx.createRadialGradient(
        centerX + width * offset3 * 0.5,
        centerY - height * offset3 * 0.5,
        0,
        centerX + width * offset3 * 0.5,
        centerY - height * offset3 * 0.5,
        width * 0.6
      );
      
      gradient3.addColorStop(0, `rgba(${colors[1].r}, ${colors[1].g}, ${colors[1].b}, ${0.2 * intensity})`);
      gradient3.addColorStop(0.5, `rgba(${colors[0].r}, ${colors[0].g}, ${colors[0].b}, ${0.1 * intensity})`);
      gradient3.addColorStop(1, 'transparent');
      
      // Draw gradients
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);
      
      // Add warp effect with perlin-like noise
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % width;
        const y = Math.floor((i / 4) / width);
        
        // Subtle warp effect
        const noise = Math.sin(x * 0.01 + timeRef.current) * Math.cos(y * 0.01 + timeRef.current) * 2;
        data[i + 3] = Math.min(255, data[i + 3] + noise);
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, intensity, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`animated-gradient ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.8
      }}
    />
  );
};

export default AnimatedGradient;
