# CodeSentinel AI

AI-powered code review & vulnerability detection platform — a production-quality Next.js 15 (App Router) + TypeScript marketing site with a static dashboard preview.

## Brand name

The brand name lives in **one central place**: `lib/site.ts` (`SITE_NAME`, `SITE_TAGLINE`, `SITE_DESCRIPTION`). Change it there and it updates across the navbar, footer, metadata, and pages.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3 + hand-rolled shadcn-style components (`components/ui.tsx`: Button variants, Badge, Card)
- framer-motion (hero animations), lucide-react (icons), recharts (dashboard chart)
- Dark mode by default, with a light/dark toggle in the navbar

## Routes

| Route | Page |
|---|---|
| `/` | Landing page |
| `/features` | Feature breakdown + language matrix |
| `/how-it-works` | Step-by-step + architecture + workflows |
| `/pricing` | Plans, monthly/annual toggle, comparison, FAQ |
| `/docs` | Docs / API landing structure |
| `/blog` | Blog index (6 posts) |
| `/login`, `/signup` | UI-only auth pages (no real OAuth) |
| `/dashboard` | Static mock dashboard |

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

No environment variables are required — all data is static/mock data in `lib/data.ts`.

1. Push this folder to a GitHub repository.
2. Import it in Vercel (Framework preset: Next.js).
3. Deploy. No build settings need changing.

## Notes

- All dashboard, testimonial, and social-proof names are mock/demo data; no real company is claimed as a customer.
- Auth pages are demo only: no real OAuth flow runs and no account is created, but signing in or signing up (including via the GitHub/Google buttons) shows a confirmation and takes you to the dashboard preview, with a demo session flag stored in localStorage.
- Accuracy claims on the Features page are framed as internal platform benchmarks, not third-party certification.
