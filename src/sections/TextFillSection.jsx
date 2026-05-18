import { useLayoutEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextFillSection({ textFill }) {
  const sectionRef = useRef(null);

  const words = useMemo(
    () => textFill.text.split(" "),
    [textFill.text]
  );

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const wordEls = sectionRef.current.querySelectorAll(".fill-word");
      const isLight = document.documentElement.dataset.theme === "light";
      const colorFrom = isLight ? "rgba(13,13,13,0.13)" : "rgba(237,233,224,0.13)";
      const colorTo   = isLight ? "rgba(13,13,13,1)"    : "rgba(237,233,224,1)";

      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.fromTo(wordEls, { color: colorFrom }, {
          color: colorTo,
          stagger: { each: 0.045, from: "start" },
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: 1.2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="textfill-section" ref={sectionRef}>
      <div className="textfill-inner">
        <p className="textfill-label">Approach</p>
        <p className="textfill-text" aria-label={textFill.text}>
          {words.map((word, i) => (
            <span className="fill-word" key={i} aria-hidden="true">
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
