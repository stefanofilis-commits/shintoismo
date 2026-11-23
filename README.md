# SHINTŌ — La via dei kami

Esperienza web interattiva sullo Shintō (React + Vite + TypeScript + Framer Motion). Tutti i testi sono in italiano e vivono in `src/data/shintoContent.ts`.

## Uso in locale
1. `npm install` (crea `package-lock.json`: **committalo**)
2. `npm run dev` — avvia il sito su http://localhost:5173
3. `npm run build` — controlla i tipi e genera la cartella `dist`
4. `npm run preview` — prova la build

## GitHub
1. Crea un repository vuoto su github.com.
2. Dalla cartella del progetto:
   `git init && git add . && git commit -m "Primo commit"`
   `git branch -M main`
   `git remote add origin https://github.com/TUO-UTENTE/NOME-REPO.git`
   `git push -u origin main`

## Render (Static Site)
1. Su render.com: **New → Blueprint** e scegli il repository (usa `render.yaml`), oppure **New → Static Site**.
2. Se configuri a mano: Build Command `npm ci && npm run build`, Publish Directory `dist`.
3. Premi **Deploy**: il sito riceve un indirizzo pubblico.
4. Ogni `git push` su `main` ripubblica il sito automaticamente.

## Struttura
- `src/components` — IntroScene, Navbar, Hero, Section (usata per tutte le sezioni), Conclusion, Torii
- `src/data/shintoContent.ts` — contenuti e fonti
- `src/styles/main.css` — palette e stile

Il pulsante **Effetti** nella navbar disattiva le animazioni più intense; `prefers-reduced-motion` è rispettato.
