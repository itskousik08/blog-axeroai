# AXEROAI Website

A premium, production-ready AI company website built with **Astro**, **React**, and **Tailwind CSS**. Inspired by Anthropic/Linear design aesthetics — clean, dark, fast, and fully SEO-optimized.

---

## ✨ Features

- **Astro 4** — Static site generation, zero JS by default
- **React** — Interactive components (Header, CookieBanner, FAQ)
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Markdown content** — Blog & news managed via `.md` files, no CMS needed
- **Full SEO** — Meta tags, Open Graph, Twitter cards, JSON-LD schema
- **Dark theme only** — Consistent, opinionated dark UI
- **Accessible** — Skip links, ARIA labels, semantic HTML throughout
- **Cookie banner** — GDPR-friendly, localStorage persistence, manage preferences
- **FAQ accordion** — Smooth expand/collapse, keyboard accessible

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
axeroai/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── blog/          # Blog post images go here
│
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro   # Global layout (SEO, Header, Footer)
│   │
│   ├── components/
│   │   ├── Header.jsx         # Sticky nav, mobile hamburger
│   │   ├── Footer.jsx         # Multi-column footer
│   │   ├── CookieBanner.jsx   # GDPR cookie consent
│   │   └── FAQ.jsx            # Accordion component
│   │
│   ├── content/
│   │   ├── config.ts          # Content collection schemas
│   │   ├── blog/
│   │   │   ├── post-1.md
│   │   │   ├── post-2.md
│   │   │   └── post-3.md
│   │   └── news/
│   │       ├── news-1.md
│   │       ├── news-2.md
│   │       └── news-3.md
│   │
│   ├── pages/
│   │   ├── index.astro        # Landing page
│   │   ├── 404.astro          # Error page
│   │   ├── blocks.astro       # Docs / blocks page
│   │   ├── blog/
│   │   │   ├── index.astro    # Blog listing
│   │   │   └── [slug].astro   # Blog post
│   │   └── news/
│   │       ├── index.astro    # News listing
│   │       └── [slug].astro   # News article
│   │
│   └── styles/
│       └── global.css         # Tailwind + typography + scroll styles
│
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

---

## ✍️ Adding Content

### New Blog Post

Create `src/content/blog/your-post-slug.md`:

```markdown
---
title: "Your Post Title"
description: "A short description for SEO and cards."
date: "2025-04-01"
category: "Research"
author: "Your Name"
image: "/images/blog/your-image.jpg"  # optional
---

Your markdown content here...
```

### New News Article

Create `src/content/news/your-news-slug.md`:

```markdown
---
title: "Announcement Title"
description: "Short description."
date: "2025-04-01"
category: "Platform"
author: "AXEROAI Team"
---

Your markdown content here...
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#0B0F14` | Page background |
| `card` | `#111827` | Card backgrounds |
| `card-border` | `#1F2937` | Borders |
| `text-primary` | `#F9FAFB` | Headlines, key text |
| `text-secondary` | `#9CA3AF` | Body text |
| `text-muted` | `#6B7280` | Captions, metadata |
| `brand` | `#4F46E5` | Primary actions, accents |
| `brand-hover` | `#4338CA` | Hover states |

**Fonts**: Syne (display/headings) + DM Sans (body)

---

## 📦 Deployment

This is a fully static site. Build output goes to `./dist/`.

**Netlify / Vercel**: Connect your repo and set build command to `npm run build`, output directory to `dist`.

**Manual**: Upload the `dist/` folder to any static host (S3, Cloudflare Pages, etc.).

---

## 📄 License

MIT — use freely for personal and commercial projects.
