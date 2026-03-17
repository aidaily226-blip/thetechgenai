import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'
import AdSlot from '../../components/AdSlot'
import { getAllPosts, getPostsByCategory } from '../../lib/posts'
import Link from 'next/link'

const categoryMeta = {
  'ai-news': { label: 'AI News', badge: 'badge-ai', icon: '🤖', desc: 'Latest AI breakthroughs, model releases, and company news.' },
  'tech': { label: 'Tech', badge: 'badge-tech', icon: '💻', desc: 'Apple, Google, Microsoft, and the tech industry.' },
  'gadgets': { label: 'Gadgets', badge: 'badge-gadgets', icon: '📱', desc: 'Reviews, buying guides, and new gadget launches.' },
  'ai-tools': { label: 'AI Tools', badge: 'badge-tools', icon: '🛠️', desc: 'Best AI tools, reviews, and how-to guides.' },
  'make-money': { label: 'Make Money', badge: 'badge-money', icon: '💰', desc: 'How to earn with AI, tech skills, and online strategies.' },
}

export default function CategoryPage({ posts, category }) {
  const meta = categoryMeta[category] || { label: category, badge: 'badge-tech', icon: '📄', desc: '' }

  return (
    <Layout title={`${meta.label} News & Articles`} description={meta.desc}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-block', marginBottom: '2rem' }}>
          ← Home
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '2.5rem' }}>{meta.icon}</span>
          <div>
            <span className={meta.badge} style={{ padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
              {meta.label}
            </span>
          </div>
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
          {meta.label} Articles
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>{meta.desc} · {posts.length} articles</p>

        <AdSlot slot="horizontal" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {posts.map(post => <PostCard key={post.slug} post={post} featured />)}
        </div>

        {posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem', color: '#475569' }}>
            <p>No posts in this category yet. Coming soon!</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const posts = getPostsByCategory(params.category.replace('-', ' '))
    .concat(getPostsByCategory(params.category))
  const unique = [...new Map(posts.map(p => [p.slug, p])).values()]
  return { props: { posts: unique, category: params.category } }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys({ 'ai-news': 1, 'tech': 1, 'gadgets': 1, 'ai-tools': 1, 'make-money': 1 }).map(c => ({ params: { category: c } })),
    fallback: false,
  }
}
