import type { CSSProperties } from "react";

const slashPath =
  "M 68 904 C 176 790, 268 666, 390 574 S 685 363, 934 84";

// Embers travel along the diagonal light trail and scatter outward from it.
const sparks = Array.from({ length: 48 }, (_, i) => {
  const t = i / 47;
  const jitter = Math.sin(i * 12.9898) * 3.2;

  return {
    left: 6.8 + t * 86.6 + jitter,
    top: 90.4 - t * 82 + Math.cos(i * 7.17) * 3.2,
    dx: (t - 0.5) * 104 + Math.cos(i * 2.3) * 30,
    dy: Math.sin(i * 3.1) * 58 + (t - 0.5) * 34,
    delay: 0.12 + (i % 11) * 0.035,
    size: 2.6 + (i % 5) * 1.25,
  };
});

export default function FlameTransition() {
  return (
    <div className="flame" aria-hidden="true">
      <div className="flame__wash" />
      <div className="flame__bloom" />
      <div className="flame__ring" />
      <div className="flame__smoke" />

      <svg
        className="flame__slash-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <filter id="katanaSlashGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="katanaSlashGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#8f1d22" />
            <stop offset="32%" stopColor="#ef5c2e" />
            <stop offset="72%" stopColor="#ffc16c" />
            <stop offset="100%" stopColor="#fff6df" />
          </linearGradient>
        </defs>

        <path className="flame__slash flame__slash--char" d={slashPath} pathLength="1" />
        <path className="flame__slash flame__slash--outer" d={slashPath} pathLength="1" />
        <path className="flame__slash flame__slash--middle" d={slashPath} pathLength="1" />
        <path className="flame__slash flame__slash--core" d={slashPath} pathLength="1" />
      </svg>

      {sparks.map((spark, i) => (
        <i
          key={i}
          className="ember"
          style={
            {
              left: `${spark.left}%`,
              top: `${spark.top}%`,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              animationDelay: `${spark.delay}s`,
              "--dx": `${spark.dx}px`,
              "--dy": `${spark.dy}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
