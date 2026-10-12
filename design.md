# Mangalathu Glass House — Design

Single-page website (web only) for a glass, plywood, paint, PVC door and accessories dealer in
Vellaramkunnu, Kerala. Visual direction: **quiet and crafted** — warm paper-cream background,
deep forest green accent, large photographs, generous whitespace, no illustrations, no animations.
Core job: a customer or contractor landing from Google decides in under a minute whether to
**visit the store / buy** — with quote request and call as the secondary paths.

## Brand & Colors

CSS variables in `packages/web/src/web/styles.css`. Light only (no dark mode toggle).

| Token | Value | Use |
|-------|-------|-----|
| background | #F7F4EE | Page background (warm paper cream) |
| surface | #FFFFFF | Cards, form panel |
| foreground | #1A1C19 | Primary text (near-black, green-shifted) |
| muted | #5E635C | Secondary text |
| accent (primary) | #1F4436 | Deep forest green — buttons, rules, labels |
| accent-hover | #163227 | Button hover |
| accent-soft | #E7EDE7 | Tinted section bands, chips |
| border | #DFD9CD | Hairlines |
| gold | #A8823C | Star ratings only |

Accent is used for action and emphasis only — never as large decorative fills except the
`accent-soft` band and the footer.

## Typography

- **Display**: Fraunces (variable serif, optical size) — hero headline, section headings, numbers.
  Weight 400–600, tight tracking, generous line height.
- **Body / UI**: Inter Tight is avoided; body is **Karla** — humanist, quiet, excellent at small sizes.
- Eyebrow labels: Karla, 12px, uppercase, letter-spacing 0.18em, accent color.
- Self-hosted-by-CDN via Google Fonts `<link>` in `index.html` with `display=swap`.
- Scale: hero 44/56/72px clamp, section heading 30/38px, body 16/17px, small 14px.

## Layout

- Max content width 1120px, side padding 24px mobile / 40px desktop.
- Section rhythm: 88px mobile / 140px desktop vertical padding. Hairline rules separate sections.
- Asymmetric: hero is text-left over a full-bleed photo; product cards alternate image ratios;
  proof section is a 3-up quote grid on desktop, stacked on mobile.
- Photos: full-bleed hero, 4:5 and 3:2 product images, real storefront photo in the visit block.
- No motion. Images `loading="lazy"` except the hero. Sticky mobile CTA bar at the bottom.

## Sections (single page, `packages/web/src/web/pages/index.tsx`)

1. **Hero** — "Crafting your dream home starts with the right materials." + primary CTA
   (Visit the store / directions) and secondary (Request a free quote).
2. **The problem we solve** — three short points.
3. **What we stock** — 6 product cards (glass, plywood & MDF, paint, PVC/UPVC doors, mirrors,
   accessories), each a name + one line.
4. **Proof** — 3 real Google reviews, 4.6 average, 9 reviews, link to the listing.
5. **How it works** — 4 steps.
6. **Quote form** — name, email, phone, requirement; submit = "Request a free Quote".
   Posts to oRPC `leads.create`, stored in Turso and emailed to the owners.
7. **Footer** — phone, WhatsApp, address, hours, service area, map link.

## Key User Flow

Land → read hero → scan products → see reviews → tap "Get directions"/"Call" (primary) or fill the
quote form (secondary) → owner receives email with the lead and can reply directly.

## Architecture

- `packages/web/src/api/routes/leads.ts` — oRPC `leads.create`, zod-validated, writes the `leads`
  table (Drizzle/Turso) then sends email via Resend to both owner addresses with `replyTo` the lead.
- `packages/web/src/web/queries/leads.ts` — `useCreateLead()` mutation hook.
- Section components in `packages/web/src/web/components/sections/`.
- Business facts (phone, address, hours, reviews) in `packages/web/src/web/lib/business.ts`.
