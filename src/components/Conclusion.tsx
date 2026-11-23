import { motion } from "framer-motion";
import Torii from "./Torii";
import { conclusion } from "../data/shintoContent";

export default function Conclusion() {
  return (
    <>
      <section id="conclusione" className="sec end" aria-labelledby="end-t">
        <div className="sun" aria-hidden="true" />
        <Torii className="end__torii" />
        <motion.div
          className="wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 id="end-t">{conclusion.title}</h2>
          <p className="body">{conclusion.text}</p>
          <p className="jp" lang="ja">{conclusion.kanji}</p>
          <p><em>{conclusion.translation}</em></p>
        </motion.div>
      </section>
      <footer className="foot">
        <h2>FONTI</h2>
        <ul>
          {conclusion.sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p>Grafica e simboli: illustrazioni originali create per questo progetto.</p>
      </footer>
    </>
  );
}
