# TheTechGenAI — thetechgenai.com

AI & Tech News blog built with Next.js + Tailwind CSS, hosted on Cloudflare Pages.

## Tech Stack
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Content:** MDX (Markdown + JSX)
- **Hosting:** Cloudflare Pages (Free)
- **Domain:** thetechgenai.com

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding a New Blog Post

1. Create a new file in `/posts/your-post-title.mdx`
2. Add frontmatter at the top:

```mdx
---
title: "Your Post Title"
excerpt: "Brief description of your post"
date: "2026-03-17"
category: "AI News"
tags: ["tag1", "tag2"]
image: "https://images.unsplash.com/photo-xxx?w=800"
---

Your content here...
```

3. Categories: `AI News`, `Tech`, `Gadgets`, `AI Tools`, `Make Money`
4. Push to GitHub → Cloudflare Pages auto-deploys ✅

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect your GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
5. Add custom domain: thetechgenai.com
6. Done! ✅

## Adding Google AdSense

After AdSense approval:
1. Get your Publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
2. Add script in `components/Layout.jsx` (see comment in file)
3. Replace placeholder in `components/AdSlot.jsx` with real ad code

## SEO
- Sitemap: thetechgenai.com/sitemap.xml
- Robots: thetechgenai.com/robots.txt
- Submit sitemap to Google Search Console after launch
