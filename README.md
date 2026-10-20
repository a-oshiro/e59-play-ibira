# Play Ibira

Clickable prototype for discovering, joining and playing community sports in Ibirapuera Park. This is a React (Vite) port of the Claude Design project `Play Ibira.dc.html`. It includes the interactive iPhone prototype, the walk-up totem, the gallery of every screen (phone, notifications, smartwatch, totem) and the design decisions.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally
```

## Deploy to Vercel

Vercel detects Vite on its own, so no config is needed:

- **From GitHub:** push this folder to a repo, then import it at vercel.com/new. Build command `npm run build`, output directory `dist`.
- **From the CLI:** `npx vercel` (preview) or `npx vercel --prod`.

## Project layout

```
public/assets/            Park maps and sport pictograms (served as /assets/...)
src/main.jsx              Entry point; renders the canvas page
src/designs/
  PlayIbira*.jsx          The canvas page (flow jumper, galleries, design decisions)
  PlayIbiraApp*.jsx       The iPhone app prototype
  PlayIbiraTotem*.jsx     The walk-up totem (iPad)
  PlayIbiraNotifications* Lock-screen and smartwatch notifications
src/lib/template.js       Helpers shared by the views
```

Each design has three files:

- `Name.jsx` holds the data, state and behavior: a React class component whose `renderVals()` returns everything the view needs.
- `NameView.jsx` holds the markup, as a plain function of those values.
- `Name.css` holds global styles, keyframes, and the hover/focus/active states.

The views were converted mechanically from the Claude Design templates, which is why styles are inline objects that mirror the original CSS. One change from the original: in the totem, the keypad list and the page padding were both named `pad`, which left the "Text me" keypad empty. The keypad is now called `keypad`.
