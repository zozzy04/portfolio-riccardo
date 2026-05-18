import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hidden,  setHidden]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);

      const sendBtn = document.querySelector(".form-submit");
      if (sendBtn) {
        const rect = sendBtn.getBoundingClientRect();
        // nasconde quando il send button entra negli ultimi 120px del viewport (dove vive il back-to-top)
        setHidden(rect.top < window.innerHeight - 120 && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`back-to-top${visible && !hidden ? " is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <span className="form-submit-arrow" aria-hidden="true">↗</span>
    </button>
  );
}
