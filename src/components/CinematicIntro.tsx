import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FloatingKatana from "./FloatingKatana";
import AnimeCharacter from "./AnimeCharacter";
import FlameTransition from "./FlameTransition";

type Phase = "idle" | "summon" | "bloom" | "split";

export default function CinematicIntro({
  onReveal,
  onDone,
}: {
  onReveal: () => void;
  onDone: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const reduce = useReducedMotion();
  const timers = useRef<number[]>([]);

  useEffect(
    () => () => timers.current.forEach((timer) => window.clearTimeout(timer)),
    []
  );

  const at = (ms: number, callback: () => void) => {
    timers.current.push(window.setTimeout(callback, ms));
  };

  const start = () => {
    if (phase !== "idle") return;

    setPhase("summon");

    if (reduce) {
      setPhase("split");
      onReveal();
      at(450, onDone);
      return;
    }

    // The character enters first; the katana's light and the graphic slash
    // then lead into the split-screen reveal.
    at(850, () => setPhase("bloom"));
    at(2050, () => {
      setPhase("split");
      onReveal();
    });
    at(3550, onDone);
  };

  const skip = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    onReveal();
    onDone();
  };

  const charged = phase === "bloom" || phase === "split";
  const characterVisible = phase !== "idle";

  return (
    <div className="intro" role="dialog" aria-label="Introduzione cinematografica">
      <div
        className={[
          "stage",
          "night",
          characterVisible ? "stage--charged" : "",
          phase === "split" ? "stage--split" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="fog fog--a" />
        <div className="fog fog--b" />

        <FloatingKatana charged={charged} />
        <AnimeCharacter show={characterVisible} lunge={charged} />

        <div className="titles">
          <p className="jp" lang="ja">「神道」</p>
          <h1>SHINTOISMO</h1>
          <p className="sub">LA VIA DEI KAMI</p>
          {phase === "idle" && <p className="hint">CLICCA PER INIZIARE</p>}
        </div>

        {phase === "idle" && (
          <button
            className="hit"
            onClick={start}
            aria-label="Clicca per iniziare"
          />
        )}

        <button className="skip" onClick={skip}>
          SALTA INTRO
        </button>
      </div>

      {phase === "split" && (
        <div className="split-open" aria-hidden="true">
          <motion.div
            className="split-panel split-panel--left"
            initial={{ x: 0 }}
            animate={{ x: "-108%" }}
            transition={{ duration: 1.35, ease: [0.72, 0, 0.18, 1] }}
          />
          <motion.div
            className="split-panel split-panel--right"
            initial={{ x: 0 }}
            animate={{ x: "108%" }}
            transition={{ duration: 1.35, ease: [0.72, 0, 0.18, 1] }}
          />
        </div>
      )}

      {(phase === "bloom" || phase === "split") && <FlameTransition />}
    </div>
  );
}
