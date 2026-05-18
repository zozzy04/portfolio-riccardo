import { useEffect, useRef } from "react";

/* ── Vertex shader: fullscreen clip-space quad ── */
const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

/* ── Fragment shader: domain-warped fBm nebula + star field ── */
const FRAG = `
precision mediump float;

uniform float  u_time;
uniform vec2   u_resolution;
uniform vec2   u_mouse;

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),             hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

/* Fractional Brownian Motion — 5 octaves */
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 r = rot(0.45);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = r * p * 2.1;
    a *= 0.5;
  }
  return v;
}

/* Sparse star field */
float stars(vec2 uv) {
  vec2  g = floor(uv * 280.0);
  float v = hash(g);
  float b = smoothstep(0.968, 1.0, v);
  float d = length(uv * 280.0 - (g + 0.5));
  return b * (1.0 - smoothstep(0.0, 0.55, d));
}

void main() {
  vec2 uv  = (gl_FragCoord.xy - u_resolution * 0.5) / min(u_resolution.x, u_resolution.y);
  float t  = u_time * 0.065;

  /* Subtle mouse parallax */
  vec2 mouse = (u_mouse / u_resolution - 0.5) * 0.06;
  uv += mouse;

  /* Domain warp — two layers of q, then r */
  float q0 = fbm(uv * 1.3 + t);
  float q1 = fbm(uv * 1.3 + vec2(5.2, 1.3) - t * 0.72);
  vec2  q  = vec2(q0, q1);

  float r0 = fbm(uv * 2.1 + q + vec2(1.7, 9.2) + 0.13 * t);
  float r1 = fbm(uv * 2.1 + q + vec2(8.3, 2.8) - 0.10 * t);
  vec2  r  = vec2(r0, r1);

  float f  = fbm(uv * 1.7 + r);

  /* Cosmic colour palette — all values kept very dark */
  vec3 col = vec3(0.020, 0.027, 0.059);                              /* #05070f base  */
  col = mix(col, vec3(0.055, 0.025, 0.120), smoothstep(0.15, 0.55, f)  * 0.9);  /* deep purple   */
  col = mix(col, vec3(0.018, 0.085, 0.270), smoothstep(0.35, 0.72, f)  * 0.75); /* indigo        */
  col = mix(col, vec3(0.065, 0.190, 0.520), smoothstep(0.52, 0.82, q0) * 0.42); /* electric blue */
  col = mix(col, vec3(0.035, 0.155, 0.400), smoothstep(0.58, 0.88, r0) * 0.32); /* mid-blue      */

  /* Star field */
  float s = stars(uv + 0.5);
  col += vec3(s * 0.52, s * 0.62, s * 0.95);

  /* Radial vignette — keeps edges darker */
  float vig = 1.0 - dot(uv * 1.25, uv * 1.25) * 0.52;
  vig = smoothstep(0.0, 1.0, vig);
  col *= vig;

  /* Clamp so content is always readable */
  col = clamp(col * 1.18, 0.0, 0.82);

  gl_FragColor = vec4(col, 1.0);
}
`;

function canUseWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

function buildProgram(gl) {
  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER,   VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  return prog;
}

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!canUseWebGL()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const prog = buildProgram(gl);
    gl.useProgram(prog);

    /* Fullscreen quad */
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime  = gl.getUniformLocation(prog, "u_time");
    const uRes   = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    let mouseX = 0, mouseY = 0, animId = null;
    const isMobile = window.innerWidth < 768;
    let lastT = 0;
    const FPS_TARGET = isMobile ? 28 : 60;
    const FRAME_MS   = 1000 / FPS_TARGET;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function onMouse(e) { mouseX = e.clientX; mouseY = e.clientY; }

    function render(t) {
      animId = requestAnimationFrame(render);
      if (t - lastT < FRAME_MS) return;
      lastT = t;
      gl.uniform1f(uTime,  t * 0.001);
      gl.uniform2f(uRes,   canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseX * (canvas.width / window.innerWidth),
                           (window.innerHeight - mouseY) * (canvas.height / window.innerHeight));
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    resize();
    animId = requestAnimationFrame(render);
    window.addEventListener("resize",    resize,  { passive: true });
    window.addEventListener("mousemove", onMouse,  { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize",    resize);
      window.removeEventListener("mousemove", onMouse);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        0,
        display:       "block",
      }}
    />
  );
}
