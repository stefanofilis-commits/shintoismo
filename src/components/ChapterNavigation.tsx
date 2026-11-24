export default function ChapterNavigation({
  idx,
  n,
  onGo,
  busy = false,
}: {
  idx: number;
  n: number;
  onGo: (i: number, d: number) => void;
  busy?: boolean;
}) {
  const label = idx < 0 ? "Indice" : idx < n ? `Capitolo ${idx + 1} di ${n}` : "Bibliografia";

  return (
    <nav className="pill" aria-label="Navigazione del quaderno" aria-busy={busy}>
      <button onClick={() => onGo(idx - 1, -1)} disabled={idx <= -1 || busy}>
        ← Precedente
      </button>
      <button onClick={() => onGo(-1, -1)} disabled={idx === -1 || busy}>
        Indice
      </button>
      <button onClick={() => onGo(idx + 1, 1)} disabled={idx >= n || busy}>
        Successivo →
      </button>
      <span className="lab">{label}</span>
      <span className="dots">
        {Array.from({ length: n }, (_, i) => (
          <button
            key={i}
            className={i === idx ? "on" : ""}
            aria-label={`Vai al capitolo ${i + 1}`}
            aria-current={i === idx ? "step" : undefined}
            disabled={busy}
            onClick={() => onGo(i, i > idx ? 1 : -1)}
          />
        ))}
      </span>
    </nav>
  );
}
