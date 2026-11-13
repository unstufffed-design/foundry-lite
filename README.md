# Foundry Lite

A lightweight Next.js App Router starter with TypeScript, Tailwind CSS 4, a responsive landing page, and a dashboard UI.

## Requirements

- Node.js 22.13+ (or 20.19+) and npm

## Get started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables or external services are required.

## Demo behavior

- The sign-in and sign-up screens are UI previews. Continuing stores a display value in the current browser session; it does not create an account or send credentials to a server.
- Workspace notes are saved in this browser's local storage. They are not shared, backed up, or protected as private data.
- Pricing and billing are previews only. The sample prices are placeholders, and no payments are collected.
- Dashboard metrics are illustrative examples.

Connect real services and add server-side authorization before using this starter with production data or accounts.

## Project map

- `app/`: landing page, demo account screens, dashboard, workspace, billing preview, and docs
- `components/`: landing page, dashboard, theme controls, and shared UI
- `styles/globals.css`: Tailwind CSS 4 import, theme tokens, and responsive styles

## Checks

```bash
npm run lint
npm test
npx tsc --noEmit
npm run build
```
