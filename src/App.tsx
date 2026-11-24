import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import CinematicIntro from "./components/CinematicIntro";
import Notebook from "./components/Notebook";
import CherryBranches from "./components/CherryBranches";
import CherryBlossomCanvas from "./components/CherryBlossomCanvas";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = intro ? "hidden" : "";
  }, [intro]);

  useEffect(() => {
    const f = (e: PointerEvent) => {
      const s = document.documentElement.style;
      s.setProperty("--cx", `${e.clientX}px`);
      s.setProperty("--cy", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", f, { passive: true });
    return () => window.removeEventListener("pointermove", f);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="glow" aria-hidden="true" />
      <main>
        <Notebook ready={ready} />
      </main>
      {intro && <CinematicIntro onReveal={() => setReady(true)} onDone={() => setIntro(false)} />}
      <CherryBranches />
      <CherryBlossomCanvas />
    </MotionConfig>
  );
}
