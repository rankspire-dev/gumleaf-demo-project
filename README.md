# Gumleaf Landscapes

Demo landing page for a fictional Melbourne garden and landscaping business, built with Next.js (App Router) and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx`: root layout, metadata and fonts (Bricolage Grotesque, Figtree via `next/font`)
- `app/page.tsx`: the landing page, with section content kept in data arrays at the top
- `app/components/QuoteForm.tsx`: client-side quote form with validation (demo only, nothing is sent)
- `app/globals.css`: site styles
