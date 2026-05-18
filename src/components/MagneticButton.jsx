import { useRef } from "react";

export default function MagneticButton({ children, href, variant = "primary" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <a
      href={href}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={variant === "ghost" ? "btn-ghost" : "btn-primary"}
    >
      {children}
    </a>
  );
}
