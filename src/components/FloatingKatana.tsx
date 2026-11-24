import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

function wrapTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const x = c.getContext("2d")!;
  x.fillStyle = "#170d10";
  x.fillRect(0, 0, 128, 128);
  for (let i = -4; i <= 8; i++) {
    for (const s of [1, -1]) {
      x.beginPath();
      x.moveTo(i * 32, s > 0 ? 0 : 128);
      x.lineTo(i * 32 + 128, s > 0 ? 128 : 0);
      x.strokeStyle = "#8f1d22";
      x.lineWidth = 11;
      x.stroke();
      x.strokeStyle = "rgba(196,163,106,.65)";
      x.lineWidth = 1.4;
      x.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 5);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function buildKatana(): THREE.Group {
  const g = new THREE.Group();
  const steel = new THREE.MeshPhysicalMaterial({ color: 0xd8dde2, metalness: 1, roughness: 0.14, clearcoat: 0.6, clearcoatRoughness: 0.1 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xc4a36a, metalness: 1, roughness: 0.28 });
  const iron = new THREE.MeshStandardMaterial({ color: 0x1c1c22, metalness: 0.9, roughness: 0.38 });
  const silk = new THREE.MeshStandardMaterial({ map: wrapTexture(), roughness: 0.7, metalness: 0.05 });

  // lama con leggera curvatura (sori)
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.lineTo(0, 2.6);
  s.lineTo(0.15, 2.84);
  s.lineTo(0.16, 0);
  s.closePath();
  const bg = new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 2 });
  bg.translate(-0.08, 0, -0.015);
  const p = bg.attributes.position;
  for (let i = 0; i < p.count; i++) p.setX(i, p.getX(i) + 0.012 * p.getY(i) * p.getY(i));
  bg.computeVertexNormals();
  g.add(new THREE.Mesh(bg, steel));

  const habaki = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.075), gold);
  habaki.position.y = 0.05;
  g.add(habaki);

  // tsuba con quattro aperture
  const t = new THREE.Shape();
  t.absarc(0, 0, 0.36, 0, Math.PI * 2, false);
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k * Math.PI) / 2;
    const h = new THREE.Path();
    h.absarc(Math.cos(a) * 0.22, Math.sin(a) * 0.22, 0.07, 0, Math.PI * 2, true);
    t.holes.push(h);
  }
  const tg = new THREE.ExtrudeGeometry(t, { depth: 0.035, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 2, curveSegments: 48 });
  tg.rotateX(Math.PI / 2);
  tg.translate(0, 0.0175, 0);
  const tsuba = new THREE.Mesh(tg, iron);
  tsuba.position.y = -0.09;
  g.add(tsuba);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.016, 12, 72), gold);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = -0.09;
  g.add(rim);

  // impugnatura (tsuka) con avvolgimento a rombi, fuchi, kashira e menuki
  const tsuka = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.066, 1.05, 32), silk);
  tsuka.scale.set(1.25, 1, 0.85);
  tsuka.position.y = -0.78;
  g.add(tsuka);
  for (const y of [-0.2, -1.34]) {
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.095, 0.1, 32), gold);
    ring.scale.set(1.2, 1, 0.9);
    ring.position.y = y;
    g.add(ring);
  }
  for (const y of [-0.6, -1.0]) {
    for (const z of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 12), gold);
      m.position.set(0, y, z * 0.066);
      g.add(m);
    }
  }
  return g;
}

function makeRenderer(): THREE.WebGLRenderer | null {
  try {
    return new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return null;
  }
}

export default function FloatingKatana({ charged }: { charged: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const charge = useRef(false);
  charge.current = charged;

  useEffect(() => {
    const el = host.current;
    const renderer = makeRenderer();
    if (!el || !renderer) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    pm.dispose();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    camera.position.set(0, 0, 13.5);

    const key = new THREE.DirectionalLight(0xffe2b8, 2.4);
    key.position.set(3, 4, 5);
    const red = new THREE.PointLight(0xae292d, 60, 24);
    red.position.set(-3.2, 0.5, 2.5);
    const warm = new THREE.PointLight(0xc4a36a, 30, 24);
    warm.position.set(2.8, -1.5, -3);
    scene.add(key, red, warm);

    const pivot = new THREE.Group();
    const sword = buildKatana();
    sword.position.y = -0.735;
    pivot.add(sword);
    scene.add(pivot);

    const fit = () => {
      const w = Math.max(1, el.clientWidth);
      const h = Math.max(1, el.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);

    let raf = 0;
    let last = performance.now();
    let spin = 0;
    let sc = 1;
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const on = charge.current;
      spin += dt * (on ? 3.4 : 0.42);
      sc += ((on ? 1.1 : 1) - sc) * Math.min(1, dt * 4);
      pivot.rotation.y = spin;
      pivot.position.y = 0.5 + Math.sin(now / 900) * 0.09;
      pivot.scale.setScalar(sc);
      red.intensity += ((on ? 220 : 60) - red.intensity) * Math.min(1, dt * 3);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={host} className="katana3d" aria-hidden="true" />;
}
