# williampeytz.com

Personal site built with [Astro](https://astro.build) + Tailwind CSS.

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  content/     blog + projects (markdown/MDX)
  components/  reusable UI pieces
  layouts/     page shells
  pages/       routes
  styles/      global.css (Tailwind entry)
  consts.ts    site metadata + social links
public/        static assets (favicon, resume.pdf, og image)
```

## Adding content

**Blog post** — create `src/content/blog/my-post.md`:

```md
---
title: "My post"
description: "Short summary for previews and RSS"
pubDate: 2026-04-23
---

Write your post here.
```

**Project** — create `src/content/projects/my-project.md`:

```md
---
title: "My project"
summary: "One-line pitch"
year: 2026
role: "Design & engineering"
stack: ["Astro", "TypeScript"]
link: "https://example.com"
repo: "https://github.com/you/repo"
order: 1
---

The case study goes here.
```

## Deploy

Push to GitHub, import the repo on [Vercel](https://vercel.com). No config needed — Astro's static output works out of the box.

## Replacing placeholders

Search the repo for `TODO` to find every spot that needs your content. Key files:

- `src/consts.ts` — site title, description, social links
- `src/pages/index.astro` — hero copy
- `src/pages/about.astro` — bio
- `src/pages/resume.astro` — CV content
- `public/resume.pdf` — replace with your actual CV
- `public/og-default.png` — replace with your OG image
