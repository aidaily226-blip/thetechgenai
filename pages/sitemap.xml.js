import { getAllPosts } from '../lib/posts'

const SITE_URL = 'https://thetechgenai.com'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>${SITE_URL}/blog</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>${SITE_URL}/about</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>${SITE_URL}/contact</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  ${['ai-news','tech','gadgets','ai-tools','make-money'].map(cat => `
  <url><loc>${SITE_URL}/category/${cat}</loc><changefreq>daily</changefreq><priority>0.8</priority></url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`
}

export default function SiteMap() {}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts()
  const sitemap = generateSiteMap(posts)
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}
