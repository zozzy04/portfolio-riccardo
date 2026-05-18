import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      wheelMultiplier: 0.88,
      touchMultiplier: 0.9,
      smoothWheel: true,
    });

    /* Keep GSAP ScrollTrigger in sync with Lenis */
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);
}
