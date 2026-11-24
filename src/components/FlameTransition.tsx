import type { CSSProperties } from "react";

const sparks = Array.from({ length: 36 }, (_, i) => {
  const angle = (i / 36) * Math.PI * 2;
  const radius = 17 + (i % 5) * 4.5;
  const distance = 70 + (i % 4) * 34;

  return {
    left: 50 + Math.cos(angle) * radius,
    top: 50 + Math.sin(angle) * radius * 0.68,
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * (52 + (i % 5) * 22) - 24,
    delay: 0.12 + (i % 9) * 0.035,
  };
});

export default function FlameTransition() {
  return (
    <div className="flame" aria-hidden="true">
      <div className="flame__wash" />
      <div className="flame__bloom" />
      <div className="flame__ring" />
      {sparks.map((spark, i) => (
        <i
          key={i}
          className="ember"
          style={
            {
              left: `${spark.left}%`,
              top: `${spark.top}%`,
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
