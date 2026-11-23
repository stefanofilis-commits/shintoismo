import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Phase = "idle" | "burst" | "sweep";

export default function IntroScene({ lite, onDone }: { lite: boolean; onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  phaseRef.current = phase;
  const canvas = useRef<HTMLCanvasElement>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const c = canvas.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    let w = 0, h = 0, raf = 0;
    const fit = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };
    fit();
    window.addEventListener("resize", fit);
    const n = lite ? 0 : w < 700 ? 40 : 90;
    const ps = Array.from({ length: n }, (_, i) => ({
      a: Math.random() * 6.283,
      r: 70 + Math.random() * Math.min(w, h) * 0.4,
      v: 0.0004 + Math.random() * 0.0007,
      z: 0.8 + Math.random() * 1.6,
      red: i % 5 === 0,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const burst = phaseRef.current !== "idle";
      for (const p of ps) {
        p.a += p.v * 16;
        if (burst) p.r *= 0.975;
        const x = w / 2 + Math.cos(p.a) * p.r;
        const y = h / 2 - 20 + Math.sin(p.a) * p.r * 0.6;
        ctx.beginPath();
        ctx.arc(x, y, p.z, 0, 6.283);
        ctx.fillStyle = p.red ? "rgba(200,60,50,.8)" : "rgba(198,166,107,.85)";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
    };
  }, [lite]);

  useEffect(() => () => timers.current.forEach((t) => clearTimeout(t)), []);

  const start = () => {
    if (phase !== "idle") return;
    setPhase("burst");
    const k = lite ? 0.3 : 1;
    timers.current.push(
      window.setTimeout(() => setPhase("sweep"), 1100 * k),
      window.setTimeout(onDone, 2500 * k)
    );
  };

  return (
    <>
      <div className={`intro intro--${phase}`} role="dialog" aria-label="Introduzione">
        <div className="intro__bg" aria-hidden="true" />
        <canvas ref={canvas} className="intro__canvas" aria-hidden="true" />
        <div className="intro__center">
          <button className="magatama" onClick={start} aria-label="Clicca per iniziare il viaggio">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F3E3B3" />
                  <stop offset=".5" stopColor="#C6A66B" />
                  <stop offset="1" stopColor="#7A5E2B" />
                </linearGradient>
              </defs>
              <path d="M74 66C70 92 44 106 14 108" stroke="url(#gold)" strokeWidth="20" strokeLinecap="round" fill="none" />
              <circle cx="74" cy="44" r="30" fill="url(#gold)" />
              <circle cx="82" cy="38" r="6" fill="#08090B" />
            </svg>
          </button>
          <p className="jp" lang="ja">「神道」</p>
          <p className="intro__title">SHINTŌ</p>
          <p className="sub"><em>La via dei kami.</em></p>
          <p className="hint">CLICCA PER INIZIARE IL VIAGGIO</p>
        </div>
        <button className="skip" onClick={onDone}>SALTA INTRODUZIONE</button>
      </div>
      {phase === "sweep" && (
        <motion.div
          className="brush"
          aria-hidden="true"
          initial={{ x: "-105%" }}
          animate={{ x: "105%" }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />
      )}
    </>
  );
}
