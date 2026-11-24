import type { CSSProperties } from "react";

const slashPath =
  "M 68 904 C 176 790, 268 666, 390 574 S 685 363, 934 84";

const sparks = Array.from({ length: 42 }, (_, i) => {
  const angle = (i / 42) * Math.PI * 2;
  const radius = 15 + (i % 6) * 4.2;
  const distance = 82 + (i % 5) * 30;

  return {
    left: 50 + Math.cos(angle) * radius,
    top: 50 + Math.sin(angle) * radius * 0.68,
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * (58 + (i % 5) * 20) - 18,
    delay: 0.08 + (i % 10) * 0.035,
    size: 3 + (i % 4) * 1.4,
  };
});

export default function FlameTransition() {
  return (
    <div className="flame" aria-hidden="true">
      <div className="flame__wash" />
      <div className="flame__bloom" />
      <div className="flame__ring" />

      <svg
        className="flame__slash-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <filter id="katanaSlashGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
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

        <path
          className="flame__slash flame__slash--outer"
          d={slashPath}
          pathLength="1"
        />
        <path
          className="flame__slash flame__slash--middle"
          d={slashPath}
          pathLength="1"
        />
        <path
          className="flame__slash flame__slash--core"
          d={slashPath}
          pathLength="1"
        />
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
