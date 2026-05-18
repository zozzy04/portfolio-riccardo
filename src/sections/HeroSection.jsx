import { useEffect, useRef } from "react";
import ThemeToggle from "../components/ThemeToggle";
import HeroWriteEffect from "../components/HeroWriteEffect";

function LiveTime() {
  const ref = useRef(null);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      ref.current.textContent = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Rome",
      });
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return <span ref={ref} />;
}

export default function HeroSection({ hero, theme, onToggleTheme, loaded }) {
  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-top-bar">
        <span className="hero-label">{hero.role}</span>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <div className="hero-name-wrap">
        <HeroWriteEffect lines={hero.nameLines} loaded={loaded} />
      </div>

      <div className="hero-bottom-bar">
        <p className="hero-role">{hero.role}</p>

        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="hero-scroll-arrow" />
          <span>{hero.scrollHint}</span>
        </div>

        <div className="hero-location">
          <p className="hero-location-name">{hero.location}</p>
          <p className="hero-location-tz">
            {hero.timezone} · <LiveTime />
          </p>
        </div>
      </div>
    </section>
  );
}
