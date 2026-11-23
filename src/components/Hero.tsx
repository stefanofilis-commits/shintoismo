import type { PointerEvent } from "react";
import { motion } from "framer-motion";
import Torii from "./Torii";

export default function Hero() {
  const move = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", String((e.clientX - r.left) / r.width - 0.5));
    e.currentTarget.style.setProperty("--py", String((e.clientY - r.top) / r.height - 0.5));
  };

  return (
    <section id="home" className="hero" onPointerMove={move}>
      <div className="hero__bg" aria-hidden="true">
        <div className="fog fog--a" />
        <div className="fog fog--b" />
        <Torii className="hero__torii" />
        {Array.from({ length: 16 }, (_, i) => (
          <i
            key={i}
            className="petal"
            style={{ left: `${(i * 37) % 100}%`, animationDelay: `${-i * 1.3}s`, animationDuration: `${9 + (i % 5) * 2}s` }}
          />
        ))}
      </div>
      <motion.div
        className="hero__body"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <p className="kanji-top" lang="ja" aria-hidden="true">神道</p>
        <h1>SHINTŌ</h1>
        <p className="sub">La via dei kami</p>
        <p className="lead">
          Una delle tradizioni spirituali più antiche del Giappone. Un legame profondo tra l’uomo, la natura, gli antenati e le forze sacre che abitano il mondo.
        </p>
        <a className="cta" href="#origini">ESPLORA LA RELIGIONE</a>
      </motion.div>
    </section>
  );
}
