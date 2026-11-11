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

- `app/layout.tsx` loads fonts via `next/font/local` from `app/fonts/` (Inter + Plus Jakarta Sans, no network needed at build time). Each family is two files: Google's `latin` subset (wght axis clamped to 400–800) plus a tiny `-tr` file with only Ğ ğ İ Ş ş ₺ (the full `latin-ext` files were 85KB + 22KB and slowed mobile PageSpeed). The stack order lives in `globals.css` (`--font-sans` / `--font-heading`: `-tr` family first, then latin). A character outside those sets (e.g. `ă`) falls back to a system font; see `app/fonts/README.md` for how to regenerate the files. Don't add `font-light`/`font-thin` (outside 400–800).
- Mobile PageSpeed is driven by bytes requested before LCP (Lighthouse simulates 1.6 Mbps and counts every early request): keep fonts, images and JS small. Hero/above-the-fold content uses `<Reveal immediate>` (visible in the server HTML, no hydration wait) and a plain `<img srcSet fetchPriority="high">` because `images.unoptimized` disables next/image resizing; top-of-page links use `prefetch={false}`.
- If `next dev` becomes extremely slow (minutes instead of seconds) with no visible error, check for competing disk I/O on the machine (Time Machine backups, Spotlight/mdworker reindexing). This project lives under `~/Desktop`, which is a common Time Machine/Spotlight target.
- A corrupted Turbopack cache surfaces as `Error: Failed to open database ... invalid digit found in string` on startup. Fix: `rm -rf .next` and restart.

## Architecture

This is a **single-page Turkish-language marketing/landing site** for "Omnitek H3S" (Hotspot Security Systems), a hotspot network security & 5651/KVKK compliance product for cafes, restaurants, hotels, etc. It is not a multi-route app — everything lives on `/`.

- **`app/page.tsx`** composes the entire homepage by stacking section components in order: `Navbar → HeroSection (+ TrustStrip) → MarketingSection → ChainsSection → BenefitsSection → SecuritySection → OperationsSection → LegalSection → PilotSection → ProcessSection → SectorsSection → FaqSection → ContactSection → Footer`. Each section is a self-contained component in `components/*.tsx`.
- **In-page navigation, not routing**: `Navbar` and `Footer` link to in-page anchors (`#pazarlama`, `#zincirler`, `#guvenlik`, `#operasyon`, `#pilot`, `#sektorler`, `#iletisim`) matching `id` attributes on the corresponding sections, rather than Next.js routes. When adding a new section, give it a matching anchor `id` and wire it into both `Navbar`'s `navLinks` and `Footer`'s links if it should be reachable from navigation.
- **`components/ui/`** is the shadcn/ui component library (`new-york` style, see `components.json`), generated via the shadcn CLI. Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks` (all map into repo root per `tsconfig.json`).
- **Styling**: Tailwind CSS v4, CSS-first config — there is no `tailwind.config.*` file; theme tokens (`--primary`, `--background`, `--destructive`, etc.) are defined as CSS custom properties in `:root` inside `app/globals.css` and mapped via `@theme inline`. Headings use the `--font-heading` variable (Plus Jakarta Sans), body text uses `--font-sans` (Inter); both are self-hosted (see Environment gotchas). Page sections get their backgrounds from `.flow-*` classes in `globals.css` (each section starts in its own color and fades into the next one's; `.flow-benefits` is the one dark section with arched edges that overlap its neighbors via negative margin, so `.flow-chains` (before it) and `.flow-security` (after it) add matching extra padding. Sector pages reuse `.flow-compare`/`.flow-process`/`.flow-faq` after the packages section, so `.flow-process` must end in the FAQ's start color). When adding or reordering sections, keep each section's end color equal to the next section's start color. `text-warning-ink`/`text-success-ink` are the dark, AA-contrast text variants of the warning/success colors.
- **Contact form** (`components/contact-section.tsx`) submits client-side directly to a third-party Formspree endpoint (`https://formspree.io/f/xeewjyra`) — there is no local API route handling submissions. `EMAIL_SETUP.md` and the `SMTP_*` / `NOTIFICATION_EMAIL` variables in `.env.local` describe a self-hosted SMTP email-notification flow that is **not currently wired up in any code** — treat that doc as aspirational/stale rather than reflecting current behavior.
- **`next.config.mjs`** sets `typescript.ignoreBuildErrors: true` (type errors won't fail `next build`) and `images.unoptimized: true` (next/image optimization is disabled).
- **WhatsApp button** (`app/WhatsAppButton.tsx`) is rendered globally from `app/layout.tsx` (outside the page content) and links to `wa.me` with a hardcoded phone number and prefilled message.
- **`@vercel/analytics`** is only mounted when `NODE_ENV === 'production'`.
- **SEO**: `app/sitemap.ts` and `public/robots.txt`. The sitemap lists the root URL and the sector pages, except `ofis-koworking` and `dis-mekan-etkinlik` (pages stay live but are off the homepage list and sitemap).
- **Known dead code**: `components/benefits.tsx` is an older, unused duplicate of `components/benefits-section.tsx` — `app/page.tsx` imports the `-section` version. Also unused on purpose (kept for later): `components/quote-request-dialog.tsx` (pilot quiz), `components/compliance-check-dialog.tsx` (5651 self-test), `components/operations-block.tsx` + `operations-illustrations.tsx` (older illustrated QR menü / PDKS / Görevlendirme block, to be reused on a package-detail page; the live `#operasyon` section is `components/operations-section.tsx`, plain cards without illustrations or sample data).

User-facing copy is Turkish by default with an English version: every component that shows text reads `useLanguage()` from `lib/i18n/language-context.tsx` (TR/EN toggle in the navbar, choice stored in localStorage) and keeps its own `content[locale]` dictionary. New copy needs both languages. SEO metadata and JSON-LD stay Turkish on purpose, and KVKK / gizlilik pages are Turkish-only. Partner logos live in `components/partners-marquee.tsx` + `public/images/partners/`; each partner has a `visible` flag. All six partners are visible (logo permissions confirmed), so the "İş Ortaklarımız" marquee runs; if only one logo is ever visible it falls back to a static "Teknoloji ortağımız" row, and a partner without permission can be hidden with `visible: false` (logo files stay).

Positioning and conventions (chain/marketing-first revision): the hero opens with the chain + Wi-Fi marketing message and a single primary CTA "Pilot planlayın" to `#pilot` (the pilot section's own button scrolls to the contact form `#iletisim`); the only other CTA type is WhatsApp (the form submit button and `/isletmeler`'s "Görüşme planlayın" are the exceptions). The contact form carries branch count + role for lead scoring. Content that is not yet verified is marked `TODO: TEYİT` in the source and, for cards/list items, kept out of the page with a `published: false` flag (see `components/trust-strip.tsx`, `marketing-section.tsx`, `pilot-section.tsx`) — don't flip a flag without confirmation. Write "Wi-Fi" and "POS" exactly like that, and prefer soft phrasing over imperatives in copy.
