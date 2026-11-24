import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FloatingKatana from "./FloatingKatana";
import AnimeCharacter from "./AnimeCharacter";
import FlameTransition from "./FlameTransition";

type Phase = "idle" | "summon" | "draw" | "slash" | "split";

export default function CinematicIntro({ onReveal, onDone }: { onReveal: () => void; onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const reduce = useReducedMotion();
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach((t) => clearTimeout(t)), []);

  const at = (ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const start = () => {
    if (phase !== "idle") return;
    if (reduce) {
      setPhase("split");
      onReveal();
      at(500, onDone);
      return;
    }
    setPhase("summon");
    at(1100, () => setPhase("draw"));
    at(1900, () => setPhase("slash"));
    at(2400, () => {
      setPhase("split");
      onReveal();
    });
    at(4000, onDone);
  };

  const skip = () => {
    onReveal();
    onDone();
  };

  const on = phase !== "idle";
  const charged = phase === "draw" || phase === "slash";

  return (
    <div className="intro" role="dialog" aria-label="Introduzione cinematografica">
      {phase !== "split" ? (
        <div className={`stage night ${on ? "stage--on" : ""}`}>
          <div className="fog fog--a" />
          <div className="fog fog--b" />
          <FloatingKatana charged={charged} />
          <AnimeCharacter show={on} lunge={charged} />
          <div className="titles">
            <p className="jp" lang="ja">「神道」</p>
            <h1>SHINTOISMO</h1>
            <p className="sub">LA VIA DEI KAMI</p>
            <p className="hint">CLICCA PER INIZIARE</p>
          </div>
          <button className="hit" onClick={start} aria-label="Clicca per iniziare" />
          <button className="skip" onClick={skip}>SALTA INTRO</button>
        </div>
      ) : (
        <>
          <motion.div
            className="halfwrap"
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{ x: "-56%", y: "-3%", rotate: -4 }}
            transition={{ duration: 1.25, ease: [0.7, 0, 0.15, 1] }}
          >
            <div className="half half--a night" />
          </motion.div>
          <motion.div
            className="halfwrap"
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{ x: "56%", y: "3%", rotate: 4 }}
            transition={{ duration: 1.25, ease: [0.7, 0, 0.15, 1] }}
          >
            <div className="half half--b night" />
          </motion.div>
          <motion.div className="flash" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.6 }} />
        </>
      )}
      {(phase === "slash" || phase === "split") && <FlameTransition />}
    </div>
  );
}
