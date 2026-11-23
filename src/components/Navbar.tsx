import { useEffect, useState } from "react";
import { sections } from "../data/shintoContent";

export default function Navbar({ lite, onToggleLite }: { lite: boolean; onToggleLite: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const links = [{ id: "home", nav: "Home" }, ...sections.filter((s) => s.nav)];

  return (
    <header className={`nav ${scrolled || open ? "nav--glass" : ""} ${open ? "nav--open" : ""}`}>
      <a className="logo" href="#home">SHINTŌ</a>
      <button className="burger" aria-label="Apri o chiudi il menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav className={open ? "open" : ""} aria-label="Navigazione principale">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.nav}</a>
        ))}
        <button className="fx" aria-pressed={lite} onClick={onToggleLite}>
          Effetti: {lite ? "OFF" : "ON"}
        </button>
      </nav>
    </header>
  );
}
