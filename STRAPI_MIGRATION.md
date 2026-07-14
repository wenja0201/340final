# Strapi CMS migration — developer notes

The site is currently a static Vite + React SPA with all copy either inline in
page components or exported as constants from `src/content/**` and
`src/data/**`. It is **not yet wired to Strapi** — this doc is the map for
doing that.

## Why `src/content/**` exists

Six modules already follow a CMS-shaped pattern (see the `CMS migration`
comments in the code):

| File | Strapi shape |
|---|---|
| `src/content/sections/nav.ts` | part of a global/shared type |
| `src/content/sections/footer.ts` | part of a global/shared type |
| `src/content/sections/cta.ts` | part of a global/shared type |
| `src/content/collections/testimonials.ts` | **Collection type** `testimonial` |
| `src/content/pages/work.ts` | **Single type** `work-page` |
| `src/content/pages/privacy.ts` | **Single type** `privacy-page` |

Rules that make this migratable without touching components later:
- **Images** are never imported directly in content data — they're a stable
  string key (`AssetKey`, see `src/content/assets.ts`) resolved via `img()`.
  In Strapi this becomes a Media field; `img()` gets replaced by
  `strapiMediaUrl()` from `src/lib/strapi.ts`.
- **Icons** are a string name (`IconName`, see `src/content/icons.tsx`)
  resolved via `<Icon name="..." />`. In Strapi this becomes a
  select/enumeration field with the same option values.
- Everything else is plain strings/numbers/arrays — no JSX, no functions.

## What's NOT migrated yet

Everything else still lives inline in page components or in flat data files
with no CMS-shaped abstraction:

- `src/components/Home.tsx` — hero, "340 Way", founders, how-we-work, etc.
- `src/pages/AboutUs.tsx` — story, founder bios, values
- `src/data/servicesDrawerData.ts` + `src/data/addOnsData.ts` — all 5 services
- `src/data/caseStudiesData.ts` — the 3 case studies
- `src/pages/ContactFAQ.tsx` — form copy + both FAQ lists
- `src/pages/About.tsx` (UP2DATE) — lead magnet + blog teaser copy

These need the same treatment as the six files above before they can be
Strapi-backed: pull the copy out into a `src/content/**` module with a typed
interface, swap raw image imports for `AssetKey`s.

## Suggested Strapi content types

Collection types (repeatable entries):
- `testimonial` (already modelled — `quote`, `name`, `role`)
- `case-study` (client, industry, services, headline, intro, challenge,
  approach, resultText, stats[], gallery[], cardTag, cardStat, cardHeadline)
- `service` (the 5 services — label, eyebrow, tagline, price, body, facts[],
  includes[], addOns[])
- `blog-post`

Single types (one fixed entry each):
- `home-page`, `about-page`, `services-page`, `work-page` (exists),
  `up2date-page`, `contact-page`, `privacy-page` (exists)
- `global` / `layout` for nav + footer + the closing CTA (shared across pages)

## Wiring a module to Strapi (once the content type exists)

```ts
// src/content/collections/testimonials.ts — before
export const testimonials: Testimonial[] = [ /* hardcoded */ ];

// after
import { strapiFind } from '@/lib/strapi';

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const { data } = await strapiFind<Testimonial>('testimonials');
  return data;
}
```

Then in the component, replace the direct import with a `useEffect` +
`useState` (or a React Query hook, since `@tanstack/react-query` is already a
dependency) that calls `fetchTestimonials()` on mount.

## Env vars

See `.env.example`. `VITE_STRAPI_URL` must be set in the Vercel project
(Preview **and** Production) for any of this to work once wired up.

## Not decided yet / needs a call with New Edge

- SSR/SSG vs. current client-side-only fetch (client fetch means content
  flashes in after load and isn't in the initial HTML — fine for an internal
  demo, worth revisiting for SEO before the real launch).
- Whether Strapi stays fully public-read or needs the token/preview flow.
