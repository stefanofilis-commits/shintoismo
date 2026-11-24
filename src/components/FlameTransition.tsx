import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const trails = [
  { w: 54, c: "#a92720", b: 16, d: 0 },
  { w: 30, c: "#e9852f", b: 9, d: 0.03 },
  { w: 13, c: "#ffd27a", b: 3, d: 0.06 },
  { w: 4, c: "#fff6e0", b: 0, d: 0.09 },
];

export default function FlameTransition() {
  return (
    <div className="flame" aria-hidden="true">
      {trails.map((t) => (
        <svg key={t.w} viewBox="0 0 100 100" preserveAspectRatio="none" style={{ filter: t.b ? `blur(${t.b}px)` : undefined }}>
          <motion.path
            d="M63.4 -6L36.6 106"
            fill="none"
            stroke={t.c}
            strokeWidth={t.w}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.45, delay: t.d, ease: "easeIn" }}
          />
        </svg>
      ))}
      {Array.from({ length: 34 }, (_, i) => (
        <i
          key={i}
          className="ember"
          style={
            {
              left: `${37 + ((i * 7) % 27)}%`,
              top: `${(i * 13) % 100}%`,
              animationDelay: `${0.2 + (i % 9) * 0.05}s`,
              "--dx": `${(i % 2 ? 1 : -1) * (40 + ((i * 17) % 170))}px`,
              "--dy": `${-70 - ((i * 29) % 230)}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
