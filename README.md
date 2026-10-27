# Drova Labs — website

Marketing site for Drova Labs, an AI-first creative studio. Next.js 16 (App
Router) + React 19 + Tailwind 4, statically prerendered.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Design system

The visual language is codified in `src/app/globals.css` under `@theme`, so
every colour and font is a token rather than a hard-coded value. Change it in
one place and the whole site follows.

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0a0a0a` | Page canvas |
| `--color-ink-raised` | `#121212` | Hovered surfaces |
| `--color-accent` | `#0099ff` | The single accent — links, CTAs, active states |
| `--color-muted` | `#999999` | Secondary text, eyebrow labels |
| `--color-hairline` | `rgba(255,255,255,.1)` | Borders and dividers |
| `--font-sans` | Inter | All editorial type |
| `--font-mono` | Fragment Mono | Numerals and eyebrow labels |

Motion lives in CSS too: `.reveal` (scroll-in), `.marquee__track` (capability
strip), `.grain` (film-grain overlay). The `Reveal` component only flips a
`data-visible` attribute — the animation itself runs on the compositor, not in
React. `prefers-reduced-motion` disables all of it.

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, OG tags
    page.tsx          section composition — reorder the page here
    globals.css       design tokens, motion, base styles
  components/
    ui/Reveal.tsx     scroll-in wrapper
    sections/         Nav, Hero, Marquee, Services, Work, Process, Cta, Footer
  lib/site.ts         contact email + nav items (single source of truth)
```

## Before you publish

Three placeholders need real values:

1. **`src/lib/site.ts`** — `CONTACT_EMAIL` is `hello@drovalabs.com`. This is
   the only contact route on the page; point it at an inbox you actually
   monitor.
2. **`src/components/sections/Work.tsx`** — the six tiles are placeholders
   with gradient backdrops. Replace `title`, `category`, `href` and `tone`
   with real work, and swap `tone` for a `<Image>` once you have stills.
   Only list clients you have permission to name publicly.
3. **`src/app/layout.tsx`** — `metadataBase` points at `drovalabs.com`.
   Update it and the Open Graph copy once the real domain is live.

## Deploy

Push to a Git remote and import on Vercel; the defaults work as-is. The site is
fully static, so it also deploys to Netlify, Cloudflare Pages or any static
host. Set the `next` dependency to a patched release before going live — see
below.

## Security note

`next` is pinned to `^16.4.2`. Earlier 16.x releases carry critical advisories
(unauthenticated RCE on Windows-hosted servers, SSRF in Server Actions, cache
poisoning). Run `npm audit` after any dependency change; the install here
reports zero vulnerabilities.
