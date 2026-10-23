# sanketkul-website

Source for [sanketkul.in](https://www.sanketkul.in/), the personal website of Sanket Kulshrestha (Founder, Smarkitals Group).

A single-page React 19 + Vite 6 site styled with Tailwind CSS 4, with `motion` for animation and `lucide-react` for icons. There is no server or database; everything is static.

## Requirements

- Node.js 20 or later
- npm

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run typecheck` | Type-check with `tsc --noEmit` (no emit, no linting rules). `npm run lint` is kept as an alias. |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run clean` | Delete `dist/` |

## Editing content

Almost all text lives in `src/data.ts`: positioning, biography, timeline, services, ventures, essays, writing projects, testimonials and contact details. Types are in `src/types.ts`.

Content rules this site follows:

- **Ventures** carry a `status` (`Operating` or `In development`). Items under `inDevelopment` are shown as planned, never as live. Only set `verifiedLink` after checking that the URL works.
- **Testimonials** are only shown when they have an author, a company and a `source` (for example a LinkedIn recommendation URL). The section is hidden while none qualify.
- **Essays** without `content` are shown as previews with no "read" action.

Section components are in `src/components/`. Page order is set in `src/App.tsx`.

## Contact form

The form never reports success unless a message was actually delivered.

- **Without configuration** (default), submitting opens the visitor's email app with a pre-filled draft to `sanket@smarkitalstech.com`, and the page says clearly that nothing has been sent yet.
- **With a form backend**, set `VITE_CONTACT_ENDPOINT` to an endpoint that accepts a JSON `POST` (for example a [Formspree](https://formspree.io/) form URL). The form then sends directly and shows loading, success and error states. On error, the visitor's input is kept.

Copy `.env.example` to `.env.local` for local use. `VITE_` variables are bundled into the public site, so never put API keys or other secrets in them.

## Images

Optimised images used by the site are in `public/images/` (WebP, plus a 1200×630 `og-image.jpg` for social sharing). Favicons are `public/favicon-32x32.png` and `public/apple-touch-icon.png`. The original PNG uploads (`public/input_file_*.png`, `public/hero-pic.png`) are kept as source files.

## SEO

`index.html` holds the title, description, canonical URL, Open Graph/Twitter tags and `Person` structured data. `public/robots.txt` and `public/sitemap.xml` list the single route `/`. Update `lastmod` in the sitemap when content changes.

## Deployment

The site is hosted on Vercel. Vercel detects Vite automatically:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable (optional): `VITE_CONTACT_ENDPOINT`

Pushing to the connected branch triggers a deployment. To check a build locally first, run `npm run typecheck && npm run build && npm run preview`.
