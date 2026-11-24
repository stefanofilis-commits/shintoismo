import { useEffect, useRef } from "react";

function flower(px: number, deep: string, pale: string, blur: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = c.height = px;
  const x = c.getContext("2d")!;
  if (blur) x.filter = `blur(${blur}px)`;
  x.translate(px / 2, px / 2);
  const R = px * 0.44;
  for (let k = 0; k < 5; k++) {
    x.save();
    x.rotate((k * Math.PI * 2) / 5);
    const g = x.createLinearGradient(0, 0, 0, -R);
    g.addColorStop(0, deep);
    g.addColorStop(0.6, "#F3C6D5");
    g.addColorStop(1, pale);
    x.beginPath();
    x.moveTo(0, 0);
    x.bezierCurveTo(-R * 0.62, -R * 0.2, -R * 0.62, -R * 0.98, -R * 0.13, -R);
    x.lineTo(0, -R * 0.89);
    x.lineTo(R * 0.13, -R);
    x.bezierCurveTo(R * 0.62, -R * 0.98, R * 0.62, -R * 0.2, 0, 0);
    x.fillStyle = g;
    x.fill();
    x.strokeStyle = "rgba(214,110,145,.4)";
    x.lineWidth = Math.max(0.5, px / 110);
    x.stroke();
    x.restore();
  }
  x.fillStyle = "#D96C8E";
  x.beginPath();
  x.arc(0, 0, R * 0.12, 0, 6.283);
  x.fill();
  x.strokeStyle = "#C4A36A";
  x.fillStyle = "#C4A36A";
  x.lineWidth = Math.max(0.6, px / 110);
  for (let k = 0; k < 8; k++) {
    const a = (k * Math.PI) / 4 + 0.2;
    const ex = Math.cos(a) * R * 0.3;
    const ey = Math.sin(a) * R * 0.3;
    x.beginPath();
    x.moveTo(0, 0);
    x.lineTo(ex, ey);
    x.stroke();
    x.beginPath();
    x.arc(ex, ey, R * 0.028 + 0.4, 0, 6.283);
    x.fill();
  }
  return c;
}

type P = { x: number; y: number; vy: number; s: number; rot: number; vr: number; ph: number; fr: number; sw: number; v: number };
type Layer = { n: number; s: [number, number]; vy: [number, number]; a: number; wind: number; sprites: HTMLCanvasElement[]; ps: P[] };

export default function CherryBlossomCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const k = window.innerWidth < 760 ? 0.5 : 1;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;

    const mk = (n: number, s: [number, number], vy: [number, number], a: number, wind: number, px: number, blur: number): Layer => ({
      n: Math.round(n * k),
      s,
      vy,
      a,
      wind,
      ps: [],
      sprites: [flower(px, "#E9A9BD", "#F5DCE5", blur), flower(px, "#F0B8C9", "#FFFFFF", blur)],
    });
    const layers = [
      mk(30, [12, 20], [0.25, 0.5], 0.5, 0.6, 64, 1.2), // sfondo: petali piccoli e sfocati
      mk(18, [24, 38], [0.5, 0.9], 0.85, 1, 96, 0), // piano medio
      mk(5, [64, 100], [0.9, 1.5], 0.92, 1.5, 160, 0), // primo piano
    ];
    const spawn = (l: Layer, anywhere: boolean): P => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -120,
      vy: l.vy[0] + Math.random() * (l.vy[1] - l.vy[0]),
      s: l.s[0] + Math.random() * (l.s[1] - l.s[0]),
      rot: Math.random() * 6.283,
      vr: (Math.random() - 0.5) * 0.004,
      ph: Math.random() * 6.283,
      fr: 0.6 + Math.random() * 0.9,
      sw: 0.15 + Math.random() * 0.35,
      v: Math.random() < 0.5 ? 0 : 1,
    });
    const fit = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();
    for (const l of layers) l.ps = Array.from({ length: l.n }, () => spawn(l, true));
    const paint = (p: P, l: Layer, flat: number) => {
      ctx.globalAlpha = l.a;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.scale(1, flat);
      ctx.drawImage(l.sprites[p.v], -p.s / 2, -p.s / 2, p.s, p.s);
      ctx.restore();
    };

    if (still) {
      for (const l of layers) for (const p of l.ps) paint(p, l, 0.9);
      return;
    }

    let gust = 0;
    let nextGust = 4000 + Math.random() * 5000;
    let raf = 0;
    let last = performance.now();
    const frame = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      if (!document.hidden) {
        nextGust -= dt;
        if (nextGust <= 0) {
          gust = (Math.random() < 0.5 ? -1 : 1) * (1.2 + Math.random() * 1.4);
          nextGust = 6000 + Math.random() * 7000;
        }
        gust *= Math.pow(0.9985, dt);
        const wind = Math.sin(now * 0.00031) * 0.35 + 0.15 + gust;
        ctx.clearRect(0, 0, w, h);
        for (const l of layers) {
          for (const p of l.ps) {
            p.x += (wind * l.wind + Math.sin(now * 0.001 * p.fr + p.ph) * p.sw) * dt * 0.06;
            p.y += p.vy * dt * 0.06;
            p.rot += p.vr * dt + wind * 0.0008 * dt;
            if (p.y > h + p.s) Object.assign(p, spawn(l, false));
            if (p.x > w + p.s) p.x = -p.s;
            else if (p.x < -p.s) p.x = w + p.s;
            paint(p, l, 0.45 + 0.55 * Math.abs(Math.cos(now * 0.0012 * p.fr + p.ph)));
          }
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", fit);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return <canvas ref={ref} className="sakura" aria-hidden="true" />;
}
