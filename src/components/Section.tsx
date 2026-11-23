import type { PointerEvent } from "react";
import { motion } from "framer-motion";
import type { SectionData } from "../data/shintoContent";

const glow = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function Section({ data }: { data: SectionData }) {
  const { id, no, title, kanji, paragraphs, items, layout, quote, tone } = data;
  return (
    <section id={id} className={`sec ${tone ?? ""}`} aria-labelledby={`${id}-t`}>
      <span className="sec__kanji" lang="ja" aria-hidden="true">{kanji}</span>
      <div className="wrap">
        <motion.header
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="no">{no}</p>
          <h2 id={`${id}-t`}>{title}</h2>
        </motion.header>
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            {p}
          </motion.p>
        ))}
        {items.length > 0 && (
          <ul className={layout === "timeline" ? "timeline" : "grid"}>
            {items.map((it, i) => (
              <motion.li
                key={it.term}
                className="card"
                onPointerMove={glow}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              >
                {it.tag && <span className="tag">{it.tag}</span>}
                <h3>
                  {it.term}
                  {it.jp && <small lang="ja">{it.jp}</small>}
                </h3>
                <p>{it.text}</p>
              </motion.li>
            ))}
          </ul>
        )}
        {quote && <blockquote>{quote}</blockquote>}
      </div>
    </section>
  );
}
