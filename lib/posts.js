const posts = [
  {
    slug: 'best-free-ai-tools-2026',
    title: 'Best Free AI Tools in 2026',
    excerpt: 'The best free AI tools you can use right now.',
    date: '2026-03-17',
    category: 'AI Tools',
    tags: ['ai tools', 'free tools'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
    content: '',
    readingTime: '3 min read',
  },
  {
    slug: 'chatgpt-vs-claude-2026',
    title: 'ChatGPT vs Claude in 2026',
    excerpt: 'Honest comparison of ChatGPT and Claude.',
    date: '2026-03-16',
    category: 'AI News',
    tags: ['chatgpt', 'claude'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    content: '',
    readingTime: '4 min read',
  },
  {
    slug: 'best-budget-smartphones-2026',
    title: 'Best Budget Smartphones Under $300',
    excerpt: 'Best smartphones under $300 right now.',
    date: '2026-03-15',
    category: 'Gadgets',
    tags: ['smartphones', 'gadgets'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    content: '',
    readingTime: '5 min read',
  },
]

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}

export function getPostsByCategory(category) {
  return posts.filter(p => 
    p.category?.toLowerCase() === category.toLowerCase()
  )
}

export function getAllCategories() {
  return [...new Set(posts.map(p => p.category).filter(Boolean))]
}