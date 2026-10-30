# Kerr County A/C & Heating Services — Website

Built from the ElevenChase starter. The preview homepage presents two redesigned directions, **Hill Country Field Notes** (Design 1, editorial and warm) and **Comfort Control** (Design 2, dark and interactive); both use the business facts, logo, photos, and video from kerrcountyac.com (October 2026).

- Content and links: `src/content/site.ts` (phone, address, hours, VIP program, FAQs, service areas, footer links mirroring kerrcountyac.com).
- Media: `public/images` (logo with transparent background, site photos, frames taken from the site's homepage video) and `public/video/kerr-county-hero.mp4` (the site video, trimmed before the end card and muted).
- Chooser previews: `public/previews/design-*-desktop.jpg` are screenshots of the two designs; regenerate them after visual changes.
- npm scripts call `tsc`, `next` and `serve` through `node`, because the `&` in this folder's name breaks npm's Windows command shims.
- The business publishes no email address, so the starter's contact form is not used; calls, texts, and Housecall Pro online booking are the contact paths.

## Redesign notes (October 2026)

The two homepage directions and the chooser page were redesigned from scratch. Business facts, links, booking, and the preview/production build logic are unchanged.

**Design 1 — Hill Country Field Notes** (`src/components/design-one.tsx`, `one-parts.tsx`, `src/app/design-one.css`)
- Editorial, almanac-style page on limestone paper; palette taken from the shop sign (limestone, cedar green, rose granite, gold).
- Archivo (width axis) for headlines, Newsreader for reading text.
- Built around the Kerrville year: a 12-month ruler marks the March reminder, April A/C check, and October to early November heat check, all from the business's own FAQ.
- Services as an index of rows, a VIP "ticket", a typographic service-area wall, and a live open/closed status from the posted hours.

**Design 2 — Comfort Control** (`src/components/design-two.tsx`, `two-parts.tsx`, `src/app/design-two.css`)
- Dark, technical control-room look (charcoal, ice blue, ember orange) with Bricolage Grotesque and IBM Plex Mono.
- Video hero with a working thermostat: the reading points visitors to furnace repair, the VIP program, or AC repair.
- Service selector (keyboard-accessible tabs), town marquee, counting review figure, large-type FAQ, dispatch-style contact panel, and a section dot rail.

**Chooser page** (`src/components/design-chooser.tsx`, `src/app/chooser.css`)
- A neutral gallery wall with two preview panels that expand on hover; previews are `public/previews/design-*-desktop.jpg`.

**Other changes**
- Removed the old shared header, footer, FAQ list, tilt effect, and their styles; `shared.tsx` keeps only the pieces both designs use.
- Added fonts (all SIL OFL, licenses alongside in `public/fonts`): Archivo, Newsreader, Bricolage Grotesque, IBM Plex Mono.
- Design names: Design 1 is now "Hill Country Field Notes" and Design 2 is "Comfort Control". The route ids (`design-1`, `design-2`) and `NEXT_PUBLIC_SELECTED_DESIGN` values are unchanged.

**Update (October 30, 2026) — month hover animation (Design 1)**
- In "The Kerrville year" ruler, hovering a month (J, F, M, A…) now fills the cell with cedar green, shrinks and lifts the letter, and slides in the short month name (Jan, Feb, Mar…) beneath it.
- Files: `src/components/design-one.tsx` (month names added, hidden from screen readers since the ruler already has an `aria-label`) and `src/app/design-one.css` (hover styles; transitions are disabled under `prefers-reduced-motion`).
- Checked: page renders with the new markup in the local dev server. The hover animation, type check, tests and builds were not run for this change.

**Checked:** type check, unit tests, preview and production static exports (both designs), and no horizontal overflow at 390px wide.

A reusable Next.js foundation for presenting two homepage directions, then publishing the client's selected design as a focused business website.

The starter is independent of MEGA and Gomega. It does not require their accounts, packages, review bridges, tracking scripts, or lead-routing services.

## What you get

- A design-selection page at `/` in preview mode.
- **Design 1 — Hill Country Field Notes** (limestone, cedar and granite; Archivo + Newsreader) at `/design-1`.
- **Design 2 — Comfort Control** (charcoal, ice and ember; Bricolage Grotesque + Plex Mono; video hero with a working thermostat) at `/design-2`.
- Shared, typed business content in `src/content/site.ts`.
- Responsive layouts, keyboard-accessible controls, and reduced-motion support.
- An honest contact flow: an email draft by default, or an optional configured external submission service.
- A production mode that publishes the selected design at `/` and excludes the two design-preview routes from the static export.
- Static output in `out/`, suitable for a static host.

This is a website starter. A CMS, customer dashboard, authentication, CRM, payment system, email-delivery service, and analytics service are not bundled.

## Start locally

Use **Node.js 22.13 or newer** and the npm version recorded in `package.json` (**11.9.0** for this release). The project uses Next.js 16.4.2, React 19.3.1, and TypeScript; the lockfile records the installed dependency versions.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open the local URL printed by Next.js. The default mode is a design preview; it shows both directions so a client can compare them.

Before handing off or publishing a change:

```bash
npm run check
npm test
npm run build
npm run test:export
```

These are the project's verification commands, not a claim that a particular clone has passed them. Run them in the environment where you prepare a release.

After building, `npm start` serves `out/` locally so you can inspect the exported website. `npm run check:config` runs the configuration validation on its own.

## Make a new client website

1. Create a separate repository or working copy for the client. Keep a clean copy of this starter for future projects.
2. Edit `src/content/site.ts` with the client's verified name, offer, services, contact details, and approved copy. Both designs consume this source.
3. Replace the brand and media assets referenced by that content. Use assets the client can publish, and write useful alternative text for informative images.
4. Customize the two design directions as needed. They share business facts, but their layouts and visual styles can remain different.
5. Run the checks, review both designs on mobile and desktop, and send the preview to the client.
6. After a direction is selected, configure production mode, the selected design, and the actual website URL. Rebuild and deploy the exported `out/` directory.

Shared business details and collections live in `src/content/site.ts`. Design-specific headlines, section introductions, contact/footer copy, and illustrative workflow labels are in `src/components/design-one.tsx`, `design-two.tsx`, `shared.tsx`, and `system-visual.tsx`. Update those for the client's industry, then keep the mini previews in `design-chooser.tsx` consistent with the full pages. The starter's initial visual story is written for a software agency; changing the service list alone does not rewrite every headline or illustration.

Use [the client setup guide](docs/CLIENT_SETUP.md) for the complete handoff and [the architecture guide](docs/ARCHITECTURE.md) to understand the boundaries.

## Preview and production modes

| Setting | Preview | Production |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_MODE` | `preview` | `production` |
| `/` | Design-selection page | The selected homepage |
| `/design-1` and `/design-2` | Available for comparison | Excluded from the export |
| Search indexing | Disabled for the review | Configured for the actual published website |
| Website URL | Local or preview URL | Verified public HTTPS URL |

`NEXT_PUBLIC_SELECTED_DESIGN` accepts `design-1` or `design-2`. Set it explicitly for production.

`NEXT_PUBLIC_SITE_URL` is the website's public origin, such as the client's verified HTTPS domain. A local, example, or placeholder URL is not a production destination. Invalid production configuration should stop the build instead of silently generating incorrect public metadata.

The settings live in `src/lib/site-settings.ts`. Read `.env.example` before changing them.

**These values are resolved at build time.** Changing a hosting environment variable requires a new build. Uploading an old `out/` folder will not apply new settings.

Preview mode is not password protection. If the preview needs restricted access, configure that on the hosting service.

## Contact behavior

### Email draft — the default

The form helps a visitor prepare an inquiry, then opens their email application with a draft. The action is labelled **Open email draft**.

Opening a draft does not send an email, save a lead, or confirm delivery. The visitor reviews and sends it in their email application. A configured email application is required for this flow, so the visible business email also provides a direct contact option.

Set the destination business email in `src/content/site.ts`.

### Optional external submission service

Set `NEXT_PUBLIC_CONTACT_MODE=external` and configure `NEXT_PUBLIC_CONTACT_ENDPOINT` with the public HTTPS endpoint that receives submissions.

The browser posts JSON directly to that endpoint. It displays submission success only after a successful HTTP response with an explicit JSON body of `{ "ok": true }`. A generic HTTP 200 or an unrelated response is not treated as delivery confirmation.

The receiving service must implement its own validation, spam protection, rate limiting, storage or delivery, and appropriate cross-origin policy. The starter contains no server-side contact API. Configure and verify that service before enabling external mode.

Never put a private API key, service-role token, SMTP password, or CAPTCHA verification secret in a `NEXT_PUBLIC_` variable. Those values are public browser configuration. If your chosen provider requires a secret, keep it in a server-side integration you control.

## Publish

Run `npm run build` with the intended environment settings, then `npm run test:export` to verify that export. The deployable website is `out/`.

For a static host, publish the contents of that directory and enable normal static-directory/index resolution. For a Git-connected host, use `npm ci` to install, `npm run build` to build, and `out` as the published output where the host asks for it. Vercel can also host the exported Next.js project; verify the resulting build settings rather than assuming a pre-existing project's settings match this starter.

Before making the client's domain live, check the actual deployed homepage, contact behavior, page metadata, mobile navigation, and missing-page response. Confirm that the preview chooser and `/design-1` and `/design-2` are absent from the production export.

## Content and claims

Use verified business facts. Do not invent customer counts, reviews, ratings, certifications, partner logos, guarantees, performance results, prices, or legal statements. Omit a section until the client supplies suitable evidence and approval.

Only link to policies that the business has actually approved. This starter does not create a legally reviewed privacy policy or terms of service for a new client.

## Project guidance for coding agents

`AGENTS.md` explains the project boundaries and version-specific Next.js documentation requirement. Keep changes within the requested scope, centralize shared business content, preserve accessibility, and verify both preview and production behavior when changing routing or build configuration.
