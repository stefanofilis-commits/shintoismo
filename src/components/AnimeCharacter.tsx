import { motion } from "framer-motion";

// L’illustrazione va messa in src/assets/character/ (.webp o .png). Senza file non viene mostrato nulla.
const art = import.meta.glob<string>("../assets/character/*.{png,webp}", { eager: true, import: "default" });
const src = Object.values(art)[0];

export default function AnimeCharacter({ show, lunge }: { show: boolean; lunge: boolean }) {
  if (!src) return null;
  return (
    <motion.div
      className="char"
      initial={{ opacity: 0, x: 90, filter: "blur(14px)" }}
      animate={show ? { opacity: 1, x: lunge ? -26 : 0, scale: lunge ? 1.05 : 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <span className="char__aura" />
      <img src={src} alt="Samurai originale con haori rosso e oro" />
    </motion.div>
  );
}
