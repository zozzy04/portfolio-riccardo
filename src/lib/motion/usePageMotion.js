import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageMotion(ready) {
  useLayoutEffect(() => {
    if (!ready) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const kickoff = setTimeout(run, 80);
    return () => clearTimeout(kickoff);

    function run() {
      gsap.context(() => {

        /* ─── HERO TOP BAR ───────────────────────────────────────── */

        gsap.from(".hero-top-bar", {
          y: -16,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.05,
          clearProps: "transform,opacity",
        });

        /* ─── HERO NAME — handled by CSS @keyframes (hero-write / hero-fill)
         * Triggered via .hero-name--write class added by React when loaded.
         * See layout.css for the stroke-dashoffset animation definition.
         * --------------------------------------------------------- */

        /* ─── HERO BOTTOM BAR ────────────────────────────────────── */

        gsap.from(".hero-bottom-bar", {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 2.1,
          clearProps: "transform,opacity",
        });

        /* ─── HERO 3D SCROLL EFFECT ─────────────────────────────── */

        gsap.to(".hero-name", {
          rotateX:         20,
          scale:           0.9,
          opacity:         0.25,
          transformOrigin: "50% 100%",
          ease:            "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start:   "top top",
            end:     "bottom top",
            scrub:   1.5,
          },
        });

        gsap.fromTo(".hero-top-bar, .hero-bottom-bar",
          { y: 0, opacity: 1 },
          {
            y:      -28,
            opacity: 0,
            ease:   "none",
            scrollTrigger: {
              trigger: ".hero-section",
              start:   "top top",
              end:     "38% top",
              scrub:   1,
            },
          }
        );

        /* ─── ABOUT ─────────────────────────────────────────────── */

        gsap.from(".about-heading-inner", {
          yPercent: 110,
          stagger:  0.09,
          duration: 1.1,
          ease:     "power4.out",
          scrollTrigger: { trigger: ".about-section", start: "top 82%" },
        });

        gsap.from(".about-bio", {
          y: 28, opacity: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".about-bio", start: "top 88%" },
        });

        gsap.from(".about-stat-value, .about-stat-label", {
          y: 16, opacity: 0, stagger: 0.06, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: ".about-stats", start: "top 88%" },
        });

        gsap.from(".about-tag", {
          y: 12, opacity: 0, stagger: 0.05, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: ".about-tags", start: "top 90%" },
        });

        gsap.from(".about-card-3d", {
          y: 36, opacity: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-card-3d", start: "top 85%" },
        });

        /* ─── PORTFOLIO ─────────────────────────────────────────── */

        gsap.from(".career-header", {
          y: 24, opacity: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".career-section", start: "top 85%" },
        });

        gsap.from(".career-item", {
          y: 20, opacity: 0, stagger: 0.09, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".career-list", start: "top 85%" },
        });

        /* ─── BLOG ──────────────────────────────────────────────── */

        gsap.from(".blog-heading", {
          y: 28, opacity: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".blog-section", start: "top 82%" },
        });

        gsap.utils.toArray(".blog-item").forEach((el, i) => {
          gsap.from(el, {
            y: 16, opacity: 0, duration: 0.65, ease: "power2.out",
            delay: i * 0.07,
            scrollTrigger: { trigger: el, start: "top 92%" },
          });
        });

        /* ─── CONTACT ───────────────────────────────────────────── */

        gsap.from(".contact-heading-inner", {
          yPercent: 110,
          stagger:  0.08,
          duration: 1.1,
          ease:     "power4.out",
          scrollTrigger: { trigger: ".contact-section", start: "top 80%" },
        });

        gsap.from(".contact-links", {
          y: 20, opacity: 0, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-links", start: "top 88%" },
        });

        gsap.from(".form-field", {
          y: 16, opacity: 0, stagger: 0.07, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".contact-form", start: "top 85%" },
        });

      });
    }
  }, [ready]);
}
