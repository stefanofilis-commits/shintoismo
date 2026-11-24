import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import NotebookContents from "./NotebookContents";
import NotebookChapter, { Bibliography } from "./NotebookChapter";
import ChapterNavigation from "./ChapterNavigation";
import { chapters } from "../data/shintoContent";

export default function Notebook({ ready }: { ready: boolean }) {
  const n = chapters.length;
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(-1); // -1 indice, 0..n-1 capitoli, n bibliografia
  const [dir, setDir] = useState(1);
  const [turning, setTurning] = useState(false);
  const top = useRef<HTMLDivElement>(null);
  const locked = useRef(false);
  const pendingIndex = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setOpen(true), 1300);
    return () => clearTimeout(t);
  }, [ready]);

  const go = useCallback(
    (i: number, direction: number) => {
      if (i < -1 || i > n || i === idx || locked.current) return;

      const nextDirection = direction >= 0 ? 1 : -1;
      setDir(nextDirection);
      top.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      if (reduceMotion) {
        setIdx(i);
        return;
      }

      // Keep the current spread visible while the paper leaf turns.
      pendingIndex.current = i;
      locked.current = true;
      setTurning(true);
    },
    [n, idx, reduceMotion]
  );

  const finishTurn = useCallback(() => {
    const next = pendingIndex.current;
    if (next !== null) setIdx(next);
    pendingIndex.current = null;
    locked.current = false;
    setTurning(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const f = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(idx + 1, 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(idx - 1, -1);
      }
    };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [open, idx, go]);

  return (
    <section className="notebook" aria-label="Quaderno su Shintoismo">
      <div ref={top} className={`book ${open ? "" : "book--closed"}`}>
        <motion.div
          className="book__in"
          animate={{ y: open ? 0 : [0, -10, 0] }}
          transition={open ? { duration: 0.6 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.button
            className="cover"
            aria-label="Apri il quaderno"
            onClick={() => setOpen(true)}
            animate={{ rotateY: open ? -160 : 0, opacity: open ? 0 : 1 }}
            transition={{
              rotateY: { duration: 1.3, ease: [0.6, 0, 0.2, 1] },
              opacity: { duration: 0.5, delay: open ? 0.85 : 0 },
            }}
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
            <motion.div
              className="spreadwrap"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              aria-busy={turning}
            >
              <motion.div
                key={idx}
                className="spread-current"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                {idx === -1 && <NotebookContents onOpen={(i) => go(i, 1)} onBib={() => go(n, 1)} />}
                {idx >= 0 && idx < n && <NotebookChapter chapter={chapters[idx]} index={idx} />}
                {idx === n && <Bibliography page={n + 3} />}
              </motion.div>

              {turning && (
                <motion.div
                  key={`page-turn-${idx}-${pendingIndex.current}`}
                  className={`page-turn-sheet page-turn-sheet--${dir > 0 ? "forward" : "backward"}`}
                  initial={{ rotateY: 0, filter: "brightness(1)" }}
                  animate={{ rotateY: dir > 0 ? -180 : 180, filter: "brightness(.82)" }}
                  transition={{ duration: 0.82, ease: [0.68, 0.04, 0.22, 1] }}
                  onAnimationComplete={finishTurn}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  aria-hidden="true"
                >
                  <span className="page-turn-sheet__face page-turn-sheet__front" />
                  <span className="page-turn-sheet__face page-turn-sheet__back" />
                  <span className="page-turn-sheet__edge" />
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {open && <ChapterNavigation idx={idx} n={n} onGo={go} busy={turning} />}
    </section>
  );
}
