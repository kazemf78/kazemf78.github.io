# kazemf78.github.io

Personal academic website of Kazem Faghih, built with [Astro](https://astro.build) as a fully static site and deployed to GitHub Pages.

## Editing content

Everything on the page comes from a few small files in `src/data/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, position, links, photo, CV path, bio, research interests |
| `publications.ts` | Papers (title, authors, venue, status, links, `selected`) |
| `experience.ts` | Research and industry roles |
| `misc.ts` | Education, news, honors, service |

- **Photo:** put a square image at `public/images/profile.jpg` and set `photo: '/images/profile.jpg'` in `profile.ts`.
- **CV:** put the PDF at `public/cv.pdf` (or point `cv` at a URL).
- **Social preview image:** `public/og.png` (1200×630).

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
