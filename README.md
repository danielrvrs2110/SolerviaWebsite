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
- `/products` — product catalog state
- `/products/[slug]` — reusable product detail template
- `/custom` — custom software service
- `/about` — company purpose and working principles
- `/quote` — validated quote form frontend
- `/privacy` — transparent legal placeholder

## Structure

- `src/app` — App Router pages, metadata, sitemap, and robots
- `src/components` — shared layout, marketing, and UI components
- `src/features/quote` — quote form and replaceable submission adapter
- `src/content` — central product configuration
- `src/config` — site-wide configuration
- `docs/DESIGN_SYSTEM.md` — visual tokens and usage rules

## Backend pending

`submitQuote()` currently validates and simulates the interface only. It does
not transmit or persist data. A later phase should replace the development
adapter with a server-side endpoint, spam protection, rate limits, secure input
validation, storage or CRM integration, and transactional email if required.

## Deployment pending

Before public deployment, confirm the production domain, contact details, real
product content, privacy notice, form backend, analytics decision, and hosting
environment. Then update `src/config/site.ts` with the confirmed canonical URL.
