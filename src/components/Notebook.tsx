import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import NotebookContents from "./NotebookContents";
import NotebookChapter, { Bibliography } from "./NotebookChapter";
import ChapterNavigation from "./ChapterNavigation";
import { chapters } from "../data/shintoContent";

const turn: Variants = {
  enter: (d: number) => ({ opacity: 0, rotateY: d > 0 ? 38 : -38, x: d > 0 ? 50 : -50 }),
  center: { opacity: 1, rotateY: 0, x: 0 },
  exit: (d: number) => ({ opacity: 0, rotateY: d > 0 ? -38 : 38, x: d > 0 ? -50 : 50 }),
};

export default function Notebook({ ready }: { ready: boolean }) {
  const n = chapters.length;
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(-1); // -1 indice, 0..n-1 capitoli, n bibliografia
  const [dir, setDir] = useState(1);
  const top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setOpen(true), 1300);
    return () => clearTimeout(t);
  }, [ready]);

  const go = useCallback(
    (i: number, d: number) => {
      if (i < -1 || i > n) return;
      setDir(d);
      setIdx(i);
      top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [n]
  );

  useEffect(() => {
    if (!open) return;
    const f = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(idx + 1, 1);
      if (e.key === "ArrowLeft") go(idx - 1, -1);
    };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [open, idx, go]);

  return (
    <section className="notebook" aria-label="Quaderno su Shintoismo">
      <div ref={top} className={`book ${open ? "" : "book--closed"}`}>
        <motion.div className="book__in" animate={{ y: open ? 0 : [0, -10, 0] }} transition={open ? { duration: 0.6 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <motion.button
            className="cover"
            aria-label="Apri il quaderno"
            onClick={() => setOpen(true)}
            animate={{ rotateY: open ? -160 : 0, opacity: open ? 0 : 1 }}
            transition={{ rotateY: { duration: 1.3, ease: [0.6, 0, 0.2, 1] }, opacity: { duration: 0.5, delay: open ? 0.85 : 0 } }}
            style={{ pointerEvents: open ? "none" : "auto" }}
          >
            <span className="cover__face cover__front">
              <span className="c-title">SHINTOISMO</span>
              <span className="c-rule" />
              <span className="c-jp" lang="ja">「神道」</span>
              <span className="c-sub">LA VIA DEI KAMI</span>
              <span className="c-seal" lang="ja">神</span>
              <span className="c-hint">TOCCA PER APRIRE</span>
            </span>
            <span className="cover__face cover__back" />
          </motion.button>
          {open && (
            <motion.div className="spreadwrap" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div key={idx} custom={dir} variants={turn} initial="enter" animate="center" exit="exit" transition={{ duration: 0.45, ease: "easeInOut" }} style={{ transformPerspective: 1800 }}>
                  {idx === -1 && <NotebookContents onOpen={(i) => go(i, 1)} onBib={() => go(n, 1)} />}
                  {idx >= 0 && idx < n && <NotebookChapter chapter={chapters[idx]} index={idx} />}
                  {idx === n && <Bibliography page={n + 3} />}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </div>
      {open && <ChapterNavigation idx={idx} n={n} onGo={go} />}
    </section>
  );
}
