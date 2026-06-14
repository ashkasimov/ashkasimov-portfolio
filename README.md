# ashkasimov.com — Photography Portfolio

A fast, elegant photography portfolio built with [Astro](https://astro.build).
Static site, no database, deploys for free on Cloudflare Pages.

## Quick start

```bash
npm install      # install dependencies (first time only)
npm run dev      # start a local preview at http://localhost:4321
```

Then open <http://localhost:4321> in your browser. The site reloads as you edit.

To make a production build locally:

```bash
npm run build    # output goes to ./dist
npm run preview  # preview the production build
```

## Where to edit things

All the content lives in plain text files under `src/data/` — you rarely need to
touch the layout or styling:

| What you want to change            | File                          |
| ---------------------------------- | ----------------------------- |
| Your name, tagline, intro, socials | `src/data/site.ts`            |
| About-page bio paragraphs          | `src/data/site.ts` (`about`)  |
| Projects / photo galleries         | `src/data/projects.ts`        |
| Experience timeline                | `src/data/experience.ts`      |
| Colors & fonts                     | `src/styles/global.css` (top) |

### Adding your own photos

1. Drop your image files into `public/photos/<project-name>/`.
2. In `src/data/projects.ts`, set each `src` to `/photos/<project-name>/your-file.jpg`.

The placeholder images currently use picsum.photos so the site looks complete
before you add real work — replace them whenever you're ready.

## Pages

- `/` — home / hero + featured work
- `/projects` — all projects, and `/projects/<slug>` for each gallery
- `/about` — biography
- `/experience` — timeline

## Deploying

This repo is set up to deploy on **Cloudflare Pages**:

- Build command: `npm run build`
- Output directory: `dist`

Every push to the `main` branch triggers an automatic deploy.
