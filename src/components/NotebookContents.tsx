import { useState } from "react";
import { motion } from "framer-motion";
import { chapters } from "../data/shintoContent";

export default function NotebookContents({ onOpen, onBib }: { onOpen: (i: number) => void; onBib: () => void }) {
  const [sel, setSel] = useState<number | null>(null);
  const pick = (i: number) => {
    setSel(i);
    window.setTimeout(() => onOpen(i), 280);
  };
  return (
    <div className="spread">
      <div className="page page--l">
        <p className="chap-no">QUADERNO</p>
        <h2>Indice</h2>
        <p className="lead">Otto capitoli per capire lo Shintoismo, la religione tradizionale del Giappone: dalle origini ai kami, dai riti fino all’idea della morte.</p>
        <div className="hanko" aria-hidden="true" lang="ja">神</div>
        <span className="chap-kanji" lang="ja" aria-hidden="true">神道</span>
      </div>
      <div className="page page--r">
        <ol className="toc">
          {chapters.map((c, i) => (
            <motion.li key={c.no} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.07, duration: 0.5 }}>
              <button className={sel === i ? "sel" : ""} onClick={() => pick(i)}>
                <span className="n">{c.no}</span>
                <span className="t">{c.title}<em>{c.subtitle}</em></span>
                <span className="k"><b lang="ja" aria-hidden="true">{c.deco}</b><small>p. {i + 3}</small></span>
              </button>
            </motion.li>
          ))}
        </ol>
        <button className="biblink" onClick={onBib}>Bibliografia · p. {chapters.length + 3}</button>
        <motion.i className="landing" aria-hidden="true" initial={{ opacity: 0, x: 50, y: -160, rotate: -40 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 14 }} transition={{ delay: 1.6, duration: 2.4, ease: "easeOut" }} />
      </div>
    </div>
  );
}
