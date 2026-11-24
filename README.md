# SHINTOISMO — La via dei kami

Quaderno interattivo (React + Vite + TypeScript + Framer Motion + Three.js). Testi in italiano in `src/data/shintoContent.ts`.

## Comandi
1. `npm install` (crea `package-lock.json`: committalo)
2. `npm run dev` per provarlo in locale
3. `npm run build` per controllare i tipi e creare `dist`

## Render (Static Site)
Build Command `npm install && npm run build`, Publish Directory `dist`. Ogni `git push` ripubblica il sito.

## Illustrazione del samurai (da aggiungere)
L’intro mostra il personaggio solo se in `src/assets/character/` c’è un file `.webp` o `.png` (sfondo trasparente, figura a mezzo busto o intera, almeno 1400 px di altezza). Senza file, la sequenza prosegue senza personaggio.
Prompt suggerito per un generatore di immagini: *original anime swordsman, dark burgundy hair with individual strands, determined expressive eyes, elaborate original haori in deep red and black with subtle gold patterns, holding a katana, cinematic rim lighting, high-budget Japanese anime style, transparent background, full detail*. Usa solo immagini di cui hai i diritti.

## Struttura
- `CinematicIntro`, `FloatingKatana` (katana 3D procedurale), `AnimeCharacter`, `FlameTransition`
- `CherryBlossomCanvas` (petali a cinque lobi su 3 livelli) e `CherryBranches`
- `Notebook`, `NotebookContents`, `NotebookChapter`, `ChapterNavigation`
