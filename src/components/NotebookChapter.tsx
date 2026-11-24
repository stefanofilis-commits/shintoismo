import { motion } from "framer-motion";
import { bibliography, type Chapter } from "../data/shintoContent";
import ChapterSticker from "./ChapterSticker";

export default function NotebookChapter({ chapter: c, index }: { chapter: Chapter; index: number }) {
  return (
    <article className="spread">
      <div className="page page--l">
        <div className="chapter-head">
          <div className="chapter-head__copy">
            <p className="chap-no">CAPITOLO {c.no}</p>
            <h2>{c.title}</h2>
            <p className="chap-sub">{c.subtitle}</p>
          </div>
          <ChapterSticker index={index} />
        </div>
        <span className="chap-kanji" lang="ja" aria-hidden="true">{c.kanji}</span>
        <aside className="panel">
          <h3>Da ricordare</h3>
          <ul>{c.facts.map((f) => <li key={f}>{f}</li>)}</ul>
        </aside>
        {c.timeline && (
          <ol className="tl">
            {c.timeline.map((t, i) => (
              <motion.li key={t.when} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <b>{t.when}</b>{t.what}
              </motion.li>
            ))}
          </ol>
        )}
        {c.plates && (
          <>
            <h3 className="pt">{c.platesTitle}</h3>
            <div className="plates">
              {c.plates.map((p, i) => (
                <motion.div key={p.name} className="plate" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                  <b lang="ja" aria-hidden="true">{p.glyph}</b>
                  <strong>{p.name}</strong>
                  <small lang="ja">{p.jp}</small>
                  <span>{p.text}</span>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="page page--r">
        {c.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <dl className="gloss">
          <h3>Parole chiave</h3>
          {c.terms.map((t) => (
            <div key={t.k}>
              <dt>{t.k}{t.jp && <small lang="ja">{t.jp}</small>}</dt>
              <dd>{t.v}</dd>
            </div>
          ))}
        </dl>
        <p className="folio">Pagina {index + 3}</p>
      </div>
    </article>
  );
}

export function Bibliography({ page }: { page: number }) {
  return (
    <div className="spread">
      <div className="page page--l">
        <p className="chap-no">FONTI</p>
        <h2>Bibliografia</h2>
        <p className="chap-sub">Dove approfondire</p>
        <span className="chap-kanji" lang="ja" aria-hidden="true">参考</span>
      </div>
      <div className="page page--r">
        <ul className="bib">{bibliography.map((b) => <li key={b}>{b}</li>)}</ul>
        <p className="folio">Pagina {page}</p>
      </div>
    </div>
  );
}
