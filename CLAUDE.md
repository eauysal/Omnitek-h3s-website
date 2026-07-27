# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js dev server (Turbopack) at localhost:3000
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint
```

There is no test runner configured in this repo (no test script, no test framework in `package.json`).

### Environment gotchas (learned the hard way)

- `app/layout.tsx` loads fonts via `next/font/google` (Plus Jakarta Sans, Inter). This requires network access to `fonts.googleapis.com` / `fonts.gstatic.com` at dev/build time. If that domain is DNS-blocked (ad-blockers, Pi-hole, NextDNS, corporate firewalls commonly block Google Fonts for privacy reasons), `next dev`/`next build` will hang indefinitely with no error. Diagnose with:
  ```bash
  curl -s -o /dev/null -w "%{http_code}\n" "https://fonts.googleapis.com/css2?family=Inter"
  ```
  If it doesn't return `200` quickly, that's the cause — not a code bug.
- If `next dev` becomes extremely slow (minutes instead of seconds) with no visible error, check for competing disk I/O on the machine (Time Machine backups, Spotlight/mdworker reindexing). This project lives under `~/Desktop`, which is a common Time Machine/Spotlight target.
- A corrupted Turbopack cache surfaces as `Error: Failed to open database ... invalid digit found in string` on startup. Fix: `rm -rf .next` and restart.

## Architecture

This is a **single-page Turkish-language marketing/landing site** for "Omnitek H3S" (Hotspot Security Systems), a hotspot network security & 5651/KVKK compliance product for cafes, restaurants, hotels, etc. It is not a multi-route app — everything lives on `/`.

- **`app/page.tsx`** composes the entire homepage by stacking section components in order: `Navbar → HeroSection → ProblemsSection → BenefitsSection → ProcessSection → ComparisonSection → SectorsSection → LegalSection → ContactSection → Footer`. Each section is a self-contained component in `components/*.tsx`.
- **In-page navigation, not routing**: `Navbar` and `Footer` link to in-page anchors (`#teshis`, `#faydalar`, `#sektorler`, `#iletisim`) matching `id` attributes on the corresponding sections, rather than Next.js routes. When adding a new section, give it a matching anchor `id` and wire it into both `Navbar`'s `navLinks` and `Footer`'s links if it should be reachable from navigation.
- **`components/ui/`** is the shadcn/ui component library (`new-york` style, see `components.json`), generated via the shadcn CLI. Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks` (all map into repo root per `tsconfig.json`).
- **Styling**: Tailwind CSS v4, CSS-first config — there is no `tailwind.config.*` file; theme tokens (`--primary`, `--background`, `--destructive`, etc.) are defined as CSS custom properties in `:root` inside `app/globals.css` and mapped via `@theme inline`. Headings use the `--font-heading` variable (Plus Jakarta Sans), body text uses `--font-sans` (Inter).
- **Contact form** (`components/contact-section.tsx`) submits client-side directly to a third-party Formspree endpoint (`https://formspree.io/f/xeewjyra`) — there is no local API route handling submissions. `EMAIL_SETUP.md` and the `SMTP_*` / `NOTIFICATION_EMAIL` variables in `.env.local` describe a self-hosted SMTP email-notification flow that is **not currently wired up in any code** — treat that doc as aspirational/stale rather than reflecting current behavior.
- **`next.config.mjs`** sets `typescript.ignoreBuildErrors: true` (type errors won't fail `next build`) and `images.unoptimized: true` (next/image optimization is disabled).
- **WhatsApp button** (`app/WhatsAppButton.tsx`) is rendered globally from `app/layout.tsx` (outside the page content) and links to `wa.me` with a hardcoded phone number and prefilled message.
- **`@vercel/analytics`** is only mounted when `NODE_ENV === 'production'`.
- **SEO**: `app/sitemap.ts` and `public/robots.txt`. Currently the sitemap only lists the root URL (single-page site).
- **Known dead code**: `components/benefits.tsx` is an older, unused duplicate of `components/benefits-section.tsx` — `app/page.tsx` imports the `-section` version.

All user-facing copy is in Turkish; keep new copy consistent with that.
