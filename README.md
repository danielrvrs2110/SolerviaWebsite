# Solervia Website

Official Solervia marketing frontend for presenting the company’s two lines:
Products and Custom software for Mexican PyMEs.

## Requirements

- Node.js 22.23.2 or compatible Node 22 release
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Routes

- `/` — Home
- `/products` — PedidoFlow and Solervia Sales Agent with explicit development status
- `/products/[slug]` — product details, implemented scope, and pending work
- `/custom` — custom software service
- `/about` — company purpose and working principles
- `/quote` — local consultation form demo; no submission or storage
- `/privacy` — transparent legal placeholder

## Structure

- `src/app` — App Router pages, metadata, sitemap, and robots
- `src/components` — shared layout, marketing, and UI components
- `src/features/quote` — quote form and replaceable submission adapter
- `src/content` — central product configuration
- `src/config` — site-wide configuration
- `docs/DESIGN_SYSTEM.md` — visual tokens and usage rules

## Backend pending

`submitQuote()` currently prepares the frontend state only. The form does not
transmit or persist data. There is no public contact email yet. A later phase
needs a confirmed receiving channel, server-side validation, spam protection,
rate limits, and a privacy notice before activating submission. The editorial
source and publication limits are recorded in `docs/INTEGRACION_PROYECTOS.md`.

## Deployment

The canonical production URL is `https://solervia-website.vercel.app` on Vercel.
The website is informational. A public contact channel, privacy notice, and
server-side form processing remain prerequisites for receiving requests. The
product pages describe current project status, not commercial availability.
