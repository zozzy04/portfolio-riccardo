import { useEffect, useRef } from "react";

const isTouchDevice = () =>
  window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;

export default function CustomCursor() {
  if (isTouchDevice()) return null;
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const posRef  = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterLink = () => {
      dot.classList.add("is-hovering");
      ring.classList.add("is-hovering");
    };

    const onLeaveLink = () => {
      dot.classList.remove("is-hovering");
      ring.classList.remove("is-hovering");
    };

    const LERP = 0.12;

    const animate = () => {
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * LERP;
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * LERP;

      dot.style.transform  = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove, { passive: true });

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
}
