import { useEffect, useRef, useState } from "react";
import { parse as parseFont } from "opentype.js";
import gsap from "gsap";

// SVG coordinate units — all positions scale from this base
const FS = 200;
// Match CSS letter-spacing: -0.05em
const TRACKING = -0.05 * FS;

// toPathData(2) produces NaN for certain glyphs when called sequentially (opentype.js state bug).
// Build the path string directly from path.commands, which are always clean.
function r(n) { return Math.round(n * 100) / 100; }
function commandsToD(commands) {
  return commands.map(cmd => {
    switch (cmd.type) {
      case 'M': return `M${r(cmd.x)} ${r(cmd.y)}`;
      case 'L': return `L${r(cmd.x)} ${r(cmd.y)}`;
      case 'C': return `C${r(cmd.x1)} ${r(cmd.y1)} ${r(cmd.x2)} ${r(cmd.y2)} ${r(cmd.x)} ${r(cmd.y)}`;
      case 'Q': return `Q${r(cmd.x1)} ${r(cmd.y1)} ${r(cmd.x)} ${r(cmd.y)}`;
      case 'Z': return 'Z';
      default:  return '';
    }
  }).filter(Boolean).join(' ');
}

function buildGlyphData(font, lines) {
  const scale = FS / font.unitsPerEm;
  const lineBaselines = [0.8 * FS, 1.72 * FS];
  const lineIndents   = [0, 0.22 * FS];
  let maxWidth = 0;

  const parsedLines = lines.map((text, li) => {
    const glyphs = font.stringToGlyphs(text);
    const baseline = lineBaselines[li] ?? (0.8 + li * 0.92) * FS;
    let x = lineIndents[li] ?? 0;

    const items = [];
    glyphs.forEach((glyph) => {
      const path = glyph.getPath(x, baseline, FS);
      const d = commandsToD(path.commands);
      if (d && d.trim()) items.push({ d });
      x += glyph.advanceWidth * scale + TRACKING;
    });

    maxWidth = Math.max(maxWidth, x - TRACKING);
    return items;
  });

  return {
    lines: parsedLines,
    viewBox: `0 0 ${maxWidth.toFixed(1)} ${2.1 * FS}`,
  };
}

export default function HeroWriteEffect({ lines, loaded }) {
  const svgRef    = useRef(null);
  const animated  = useRef(false);
  const [glyphData, setGlyphData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/fonts/PublicSans-Black.otf")
      .then((res) => res.arrayBuffer())
      .then((buf) => {
        if (cancelled) return;
        setGlyphData(buildGlyphData(parseFont(buf), lines));
      })
      .catch((err) => console.error("Hero font load failed:", err));
    return () => { cancelled = true; };
  }, [lines]);

  useEffect(() => {
    if (!loaded || !glyphData || !svgRef.current || animated.current) return;
    animated.current = true;

    const pathEls = Array.from(svgRef.current.querySelectorAll(".hero-glyph"));
    if (!pathEls.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pathEls.forEach((el) => el.setAttribute("data-filled", ""));
      return;
    }

    // set per-path dasharray so each character animates its own exact length
    pathEls.forEach((el) => {
      const len = el.getTotalLength() || 1;
      el.style.strokeDasharray  = len;
      el.style.strokeDashoffset = len;
    });

    const totalDraw = (pathEls.length - 1) * 0.055 + 0.2;

    gsap.to(pathEls, {
      strokeDashoffset: 0,
      duration:  0.2,
      stagger:   0.055,
      ease:      "power1.inOut",
    });

    // CSS transition handles fill-in via data-filled attribute (avoids GSAP/CSS specificity conflict)
    const fillStartMs = (totalDraw - 0.05) * 1000;
    pathEls.forEach((el, i) => {
      setTimeout(() => el.setAttribute("data-filled", ""), fillStartMs + i * 30);
    });
  }, [loaded, glyphData]);

  if (!glyphData) return null;

  return (
    <svg
      ref={svgRef}
      className="hero-name"
      viewBox={glyphData.viewBox}
      aria-label={lines.join(" ")}
      role="img"
      overflow="visible"
    >
      {glyphData.lines.flatMap((linePaths, li) =>
        linePaths.map((p, gi) => (
          <path
            key={`${li}-${gi}`}
            className="hero-glyph"
            d={p.d}
          />
        ))
      )}
    </svg>
  );
}
