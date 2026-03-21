import matter from 'gray-matter'
import readingTime from 'reading-time'

// This function only runs at build time (server side)
// so fs works perfectly here

export function getAllPosts() {
  // Only runs on server/build time
  if (typeof window !== 'undefined') return []
  
  const fs = require('fs')
  const path = require('path')
  
  const postsDirectory = path.join(process.cwd(), 'posts')
  
  if (!fs.existsSync(postsDirectory)) return []
  
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts = fileNames
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.(mdx|md)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const stats = readingTime(fileContents)
      return { slug, readingTime: stats.text, ...data }
    })

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const fs = require('fs')
  const path = require('path')
  
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const altPath = path.join(postsDirectory, `${slug}.md`)
  const filePath = fs.existsSync(fullPath) ? fullPath : altPath
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(fileContents)
  return { slug, readingTime: stats.text, ...data, content }
}

export function getPostsByCategory(category) {
  return getAllPosts().filter(p =>
    p.category?.toLowerCase() === category.toLowerCase()
  )
}

export function getAllCategories() {
  return [...new Set(getAllPosts().map(p => p.category).filter(Boolean))]
}
