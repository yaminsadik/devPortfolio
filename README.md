# Dev Portfolio

A modern, full-featured developer portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features MDX-based project case studies, dark mode, animations, and full SEO optimization.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19 Server Components)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4, shadcn/ui, Radix UI
- **Animations:** Framer Motion
- **Content:** MDX via `next-mdx-remote`, gray-matter, remark-gfm
- **Syntax Highlighting:** rehype-pretty-code + Shiki
- **Icons:** Lucide React

## Project Structure

```
devPortfolio/
├── content/
│   └── projects/           # MDX project case studies
├── public/
│   └── images/
│       ├── profile.png
│       └── projects/       # Project cover images
└── src/
    ├── app/                # Next.js App Router pages
    │   ├── page.tsx        # Home
    │   ├── about/          # About page
    │   ├── contact/        # Contact page
    │   └── projects/       # Projects listing + dynamic [slug] detail pages
    ├── components/
    │   ├── ui/             # shadcn/ui primitives (Button, Card, Badge, Separator)
    │   └── mdx/            # MDX rendering components (Callout, Image)
    ├── config/
    │   ├── site.ts         # Site metadata, social links, featured project slugs
    │   └── content.ts      # All page text content
    └── lib/
        ├── projects.ts     # Project file fetching and parsing
        └── utils.ts        # Utility helpers (cn, etc.)
```

## Pages

| Route              | Description                                        |
| ------------------ | -------------------------------------------------- |
| `/`                | Hero section, featured projects, services overview |
| `/projects`        | Full project grid                                  |
| `/projects/[slug]` | Individual project detail with MDX content         |
| `/about`           | Experience timeline, skills, education, research   |
| `/contact`         | Contact links and social media                     |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone <repo-url>
cd devPortfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Configuration

### Site Metadata

Edit `src/config/site.ts` to update your name, URL, email, social links, and which projects appear on the homepage:

```ts
export const siteConfig = {
  name: "Your Name",
  url: "https://yoursite.dev",
  email: "hello@yoursite.dev",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
  featuredProjectSlugs: ["project-slug-1", "project-slug-2"],
};
```

> **Note:** `site.ts` controls SEO meta tags and social sharing previews. It is **not** the visible homepage text. To change visible page copy (hero headline, about bio, etc.), edit `src/config/content.ts`.

### Page Content

All text content is centralized in `src/config/content.ts`. Edit this file to update hero copy, about page descriptions, service cards, experience entries, education, and skills without touching component files.

## Adding a Project

1. Create a new MDX file in `content/projects/`:

```
content/projects/my-project.mdx
```

2. Add YAML frontmatter at the top:

```mdx
---
title: "My Project"
slug: "my-project"
date: "2025-01-01"
summary: "A short description of the project."
tags: ["Next.js", "TypeScript", "PostgreSQL"]
stack: ["React", "TypeScript", "FastAPI", "PostgreSQL"]
role: "Lead Developer"
coverImage: "/images/projects/my-project.png"
coverImageFit: "cover"        # "cover" (default) or "contain" for wide/tall images
repoUrl: "https://github.com/yourhandle/my-project"
# privateRepo: true           # use instead of repoUrl for private repositories
liveUrl: "https://my-project.dev"
outcomes:
  - "Reduced load time by 40%"
  - "Handled 10M+ requests per day"
---

## Overview

Write your project content here using Markdown...
```

**Frontmatter fields:**

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Project display name |
| `slug` | Yes | URL path (`/projects/slug`) |
| `date` | Yes | ISO date string |
| `summary` | Yes | Short description shown in cards |
| `tags` | Yes | Category badges |
| `stack` | Yes | Technology list |
| `role` | Yes | Your role on the project |
| `outcomes` | Yes | Bullet-point results |
| `coverImage` | Yes | Path under `public/` |
| `coverImageFit` | No | `"cover"` (default) or `"contain"` |
| `repoUrl` | No | Public GitHub/repo URL |
| `privateRepo` | No | Set `true` to show "Contact to View Source" instead of a repo link |
| `liveUrl` | No | Live demo URL |

3. Add a cover image to `public/images/projects/`.

4. To feature the project on the home page, add its slug to `featuredProjectSlugs` in `src/config/site.ts`.

### MDX Components

Inside project MDX files you can use:

- **`<Callout>`** — Highlighted info box

```mdx
<Callout>This is an important note about the project architecture.</Callout>
```

## Features

- **Dark Mode** — System preference detection with localStorage persistence
- **Responsive** — Mobile-first layout with Tailwind breakpoints
- **Animations** — Framer Motion with `prefers-reduced-motion` support
- **SEO** — Metadata API, JSON-LD structured data, sitemap, robots.txt
- **Image Optimization** — Next.js Image with WebP/AVIF formats
- **Static Generation** — Project pages are statically generated at build time
- **Syntax Highlighting** — Code blocks in MDX with Shiki themes

## Deployment

### Vercel (Recommended)

Push to GitHub and deploy via [Vercel](https://vercel.com). No additional configuration required.

### Other Platforms

```bash
npm run build
```

The output in `.next/` can be served with `npm start` or exported as static files. Refer to the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific instructions.
