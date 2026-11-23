import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import IntroScene from "./components/IntroScene";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Conclusion from "./components/Conclusion";
import { sections } from "./data/shintoContent";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [lite, setLite] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("lite", lite);
  }, [lite]);

  useEffect(() => {
    document.body.style.overflow = intro ? "hidden" : "";
  }, [intro]);

  return (
    <MotionConfig reducedMotion={lite ? "always" : "user"}>
      {intro && <IntroScene lite={lite} onDone={() => setIntro(false)} />}
      <Navbar lite={lite} onToggleLite={() => setLite((v) => !v)} />
      <main>
        <Hero />
        {sections.map((s) => (
          <Section key={s.id} data={s} />
        ))}
        <Conclusion />
      </main>
    </MotionConfig>
  );
}
