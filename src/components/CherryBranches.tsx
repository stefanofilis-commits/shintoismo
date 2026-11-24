const flowers: [number, number, number][] = [
  [30, 30, 48], [85, 44, 44], [140, 70, 50], [196, 112, 46], [262, 150, 50], [330, 160, 44], [392, 150, 40],
  [110, 16, 40], [170, 6, 38], [225, 26, 44], [258, 64, 38], [290, 80, 40], [48, 96, 38], [60, 138, 34], [300, 200, 36], [334, 228, 32],
];
const buds: [number, number][] = [[20, 60], [150, 36], [210, 70], [240, 110], [318, 126], [356, 186], [80, 150], [270, 36]];

export default function CherryBranches() {
  return (
    <>
      <div className="br br--l" aria-hidden="true">
        <svg viewBox="0 0 420 260" focusable="false">
          <defs>
            <radialGradient id="pg" cx="50%" cy="100%" r="100%">
              <stop offset="0" stopColor="#E9A9BD" />
              <stop offset="1" stopColor="#FBEFF3" />
            </radialGradient>
            <symbol id="fl" viewBox="-50 -50 100 100">
              <g fill="url(#pg)" stroke="#D66E91" strokeWidth=".7">
                {[0, 72, 144, 216, 288].map((a) => (
                  <path key={a} transform={`rotate(${a})`} d="M0 0C-16-6-19-38-4-46L0-41 4-46C19-38 16-6 0 0Z" />
                ))}
              </g>
              <circle r="4.5" fill="#D96C8E" />
              <g stroke="#C4A36A" strokeWidth="1">
                {Array.from({ length: 7 }, (_, i) => (
                  <line key={i} x2={Math.cos(i * 0.9) * 11} y2={Math.sin(i * 0.9) * 11} />
                ))}
              </g>
            </symbol>
            <g id="brn">
              <g fill="none" stroke="#2a1b17" strokeLinecap="round">
                <path d="M-12 24C70 40 130 52 190 104S320 168 420 150" strokeWidth="9" />
                <path d="M96 52C120 12 170 2 222 14" strokeWidth="5" />
                <path d="M190 104C214 70 250 56 292 68" strokeWidth="5" />
                <path d="M250 134C262 176 300 204 330 236" strokeWidth="4" />
                <path d="M60 36C44 74 50 120 70 150" strokeWidth="4" />
              </g>
              <path d="M-12 21C70 37 130 49 190 100" fill="none" stroke="#5a382d" strokeWidth="2" strokeLinecap="round" />
              {buds.map(([x, y], i) => (
                <ellipse key={i} cx={x} cy={y} rx="4" ry="6.5" fill="#E9A9BD" transform={`rotate(${i * 40} ${x} ${y})`} />
              ))}
              {flowers.map(([x, y, s]) => (
                <use key={`${x}-${y}`} href="#fl" x={x - s / 2} y={y - s / 2} width={s} height={s} />
              ))}
            </g>
          </defs>
          <use href="#brn" />
        </svg>
      </div>
      <div className="br br--r" aria-hidden="true">
        <svg viewBox="0 0 420 260" focusable="false">
          <use href="#brn" />
        </svg>
      </div>
    </>
  );
}
