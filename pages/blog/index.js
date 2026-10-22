import { useState } from 'react'
import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'

import { getAllPosts } from '../../lib/posts'

export default function Blog({ posts }) {
  const [q, setQ] = useState('')
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
  const shown = terms.length
    ? posts.filter(p => {
        const text = `${p.title} ${p.excerpt || ''} ${p.category || ''} ${(p.tags || []).join(' ')}`.toLowerCase()
        return terms.every(t => text.includes(t))
      })
    : posts

  return (
    <Layout title="All Posts" description="Browse all AI news, tech updates, gadget reviews and money-making guides.">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
            All <span style={{ color: '#00ff88' }}>Posts</span>
          </h1>
          <p style={{ color: '#64748b' }}>{posts.length} articles on AI, Tech, Gadgets & more</p>
          <input
            type="search"
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search all articles..."
            aria-label="Search articles"
            style={{ marginTop: '1.25rem', width: '100%', maxWidth: '520px', padding: '0.75rem 1.25rem', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '100px', color: '#e2e8f0', fontSize: '1rem', outline: 'none' }}
          />
          {terms.length > 0 && (
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.75rem' }}>{shown.length} result{shown.length === 1 ? '' : 's'} for "{q}"</p>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {shown.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
        {shown.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem', color: '#475569' }}>
            <p>{posts.length === 0 ? 'No posts yet. Add .mdx files to the /posts folder!' : 'No articles match your search.'}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
