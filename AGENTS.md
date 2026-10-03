<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Solervia Website Rules

- This repository is the independent public website for Solervia, not PedidoFlow.
- Preserve the approved teal, cream, white, charcoal, and amber design system.
- Do not add fake clients, testimonials, logos, metrics, products, history, awards, partners, or case studies.
- Keep public copy concrete, honest, and understandable to Mexican PyMEs.
- Keep product records centralized in `src/content/products.ts`.
- Prefer Server Components. Use Client Components only for real interaction.
- Keep the quote submission behind the `submitQuote()` adapter and validate again server-side when a backend is connected.
- Never expose secrets, trust client authorization, use `dangerouslySetInnerHTML`, or add dependencies without a concrete need.
- Preserve keyboard access, visible focus, contrast, semantic headings, labels, clear errors, and reduced-motion support.
- Run lint, typecheck, build, and desktop/mobile browser review before marking work complete.
