export default function ChapterNavigation({ idx, n, onGo }: { idx: number; n: number; onGo: (i: number, d: number) => void }) {
  const label = idx < 0 ? "Indice" : idx < n ? `Capitolo ${idx + 1} di ${n}` : "Bibliografia";
  return (
    <nav className="pill" aria-label="Navigazione del quaderno">
      <button onClick={() => onGo(idx - 1, -1)} disabled={idx <= -1}>← Precedente</button>
      <button onClick={() => onGo(-1, -1)} disabled={idx === -1}>Indice</button>
      <button onClick={() => onGo(idx + 1, 1)} disabled={idx >= n}>Successivo →</button>
      <span className="lab">{label}</span>
      <span className="dots">
        {Array.from({ length: n }, (_, i) => (
          <button key={i} className={i === idx ? "on" : ""} aria-label={`Vai al capitolo ${i + 1}`} aria-current={i === idx} onClick={() => onGo(i, i > idx ? 1 : -1)} />
        ))}
      </span>
    </nav>
  );
}
