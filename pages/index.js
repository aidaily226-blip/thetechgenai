import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import AdSlot from '../components/AdSlot'
import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

const categories = [
  { name: 'AI News', href: '/category/ai-news', badge: 'badge-ai', icon: '🤖', desc: 'Latest AI breakthroughs & company updates' },
  { name: 'Tech', href: '/category/tech', badge: 'badge-tech', icon: '💻', desc: 'Apple, Google, Microsoft & more' },
  { name: 'Gadgets', href: '/category/gadgets', badge: 'badge-gadgets', icon: '📱', desc: 'Reviews & buying guides' },
  { name: 'AI Tools', href: '/category/ai-tools', badge: 'badge-tools', icon: '🛠️', desc: 'Best free & paid AI tools' },
  { name: 'Make Money', href: '/category/make-money', badge: 'badge-money', icon: '💰', desc: 'Earn with AI & tech skills' },
]

export default function Home({ posts }) {
  const featured = posts.slice(0, 3)
  const latest = posts.slice(3, 10)

  return (
    <Layout>
      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 3rem', position: 'relative' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.5rem' }}>
            <span className="animate-pulse-glow" style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: '#00ff88', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Live AI & Tech Coverage</span>
          </div>
          
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, color: '#f1f5f9', marginBottom: '1.25rem' }}>
            The Future of Tech,<br />
            <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Explained Simply
            </span>
          </h1>
          
          <p className="animate-fade-up-delay-1" style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Daily AI news, tech updates, gadget reviews and how to make money with technology. Written for everyone.
          </p>

          <div className="animate-fade-up-delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{ padding: '0.75rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
              Read Latest Posts
            </Link>
            <Link href="/category/ai-news" style={{ padding: '0.75rem 1.75rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
              AI News →
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Slot - Top */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <AdSlot slot="horizontal" />
      </div>

      {/* Categories */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {categories.map((cat, i) => (
            <Link key={cat.name} href={cat.href} style={{ textDecoration: 'none' }}>
              <div className="card-hover" style={{ background: '#0d1117', borderRadius: '12px', padding: '1.25rem', cursor: 'pointer' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                <span className={cat.badge} style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  {cat.name}
                </span>
                <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: 1.4 }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#f1f5f9' }}>
              <span style={{ color: '#00ff88' }}>Featured</span> Stories
            </h2>
            <Link href="/blog" style={{ color: '#0ea5e9', textDecoration: 'none', fontSize: '0.9rem' }}>View all →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {featured.map(post => <PostCard key={post.slug} post={post} featured />)}
          </div>
        </section>
      )}

      {/* Ad Slot - Middle */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <AdSlot slot="horizontal" />
      </div>

      {/* Latest Posts */}
      {latest.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#f1f5f9', marginBottom: '1.5rem' }}>
            <span style={{ color: '#0ea5e9' }}>Latest</span> Posts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem' }}>
            {latest.map(post => <PostCard key={post.slug} post={post} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" style={{ padding: '0.75rem 2rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none' }}>
              Load More Posts
            </Link>
          </div>
        </section>
      )}

      {/* Empty state */}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '5rem 1.5rem', color: '#475569' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#94a3b8', marginBottom: '0.5rem' }}>No posts yet</h2>
          <p>Add your first .mdx file to the /posts folder to get started!</p>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
