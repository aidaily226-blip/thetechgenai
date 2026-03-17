import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.(mdx|md)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)
      return { slug, readingTime: stats.text, ...data, content }
    })
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const altPath = path.join(postsDirectory, `${slug}.md`)
  const filePath = fs.existsSync(fullPath) ? fullPath : altPath
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)
  return { slug, readingTime: stats.text, ...data, content }
}

export function getPostsByCategory(category) {
  return getAllPosts().filter(p => p.category?.toLowerCase() === category.toLowerCase())
}

export function getAllCategories() {
  const posts = getAllPosts()
  const cats = [...new Set(posts.map(p => p.category).filter(Boolean))]
  return cats
}
