// Builds public/search-index.json from /posts. Runs automatically before `npm run build`.
const fs = require('fs')
const path = require('path')
const root = path.join(__dirname, '..')
const dir = path.join(root, 'posts')
const out = []
for (const file of fs.readdirSync(dir).filter(f => /\.(mdx|md)$/i.test(f))) {
  let text = fs.readFileSync(path.join(dir, file), 'utf8').replace(/^﻿/, '').replace(/^\s+/, '')
  const lines = text.split(/\r?\n/)
  if (lines[0].trim() !== '---') continue
  const end = lines.findIndex((l, i) => i > 0 && l.trim() === '---')
  if (end === -1) continue
  const d = {}
  for (const l of lines.slice(1, end)) {
    const m = l.match(/^([A-Za-z_]+):\s*(.*)$/)
    if (m) d[m[1]] = m[2].trim().replace(/^["']|["']$/g, '')
  }
  let tags = []
  try { tags = JSON.parse((lines.slice(1, end).find(l => l.startsWith('tags:')) || 'tags: []').replace(/^tags:\s*/, '')) } catch (e) {}
  if (!d.title) continue
  out.push({ slug: file.replace(/\.(mdx|md)$/i, ''), title: d.title, excerpt: d.excerpt || '', category: d.category || '', date: d.date || '', tags })
}
out.sort((a, b) => new Date(b.date) - new Date(a.date))
fs.writeFileSync(path.join(root, 'public', 'search-index.json'), JSON.stringify(out))
console.log(`Search index built: ${out.length} posts`)
