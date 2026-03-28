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

const categoryColors = {
  'ai news': { badge: 'badge-ai', dot: '#00ff88' },
  'tech': { badge: 'badge-tech', dot: '#38bdf8' },
  'gadgets': { badge: 'badge-gadgets', dot: '#c084fc' },
  'ai tools': { badge: 'badge-tools', dot: '#fb923c' },
  'make money': { badge: 'badge-money', dot: '#fbbf24' },
}

export default function Home({ posts }) {
  const latestPost = posts[0]
  const otherPosts = posts.slice(1, 4)
  const morePosts = posts.slice(4, 10)

  const getColors = (category) => {
    const key = category?.toLowerCase() || 'tech'
    return categoryColors[key] || categoryColors['tech']
  }

  return (
    <Layout>
      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 2rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#00ff88', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Live AI & Tech Coverage</span>
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 1.1, color: '#f1f5f9', marginBottom: '1rem' }}>
          The Future of Tech,<br />
          <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Explained Simply
          </span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Daily AI news, tech updates, gadget reviews and how to make money with technology.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/blog" style={{ padding: '0.75rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
            Read Latest Posts
          </Link>
          <Link href="/category/ai-news" style={{ padding: '0.75rem 1.75rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
            AI News →
          </Link>
        </div>
      </section>

      {/* Ad Slot */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <AdSlot slot="horizontal" />
      </div>

      {/* Categories */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 2.5rem' }}>
        <div className="home-category-grid">
          {categories.map(cat => (
            <Link key={cat.name} href={cat.href} style={{ textDecoration: 'none' }}>
              <div className="card-hover" style={{ background: '#0d1117', borderRadius: '12px', padding: '1rem', cursor: 'pointer' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{cat.icon}</div>
                <span className={cat.badge} style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  {cat.name}
                </span>
                <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.4rem', lineHeight: 1.4 }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Stories */}
      {posts.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#f1f5f9' }}>
              <span style={{ color: '#00ff88' }}>Latest</span> Stories
            </h2>
            <Link href="/blog" style={{ color: '#0ea5e9', textDecoration: 'none', fontSize: '0.9rem' }}>View all →</Link>
          </div>

          <div className="home-latest-grid">
            {/* LEFT — Big featured post */}
            {latestPost && (
              <Link href={`/blog/${latestPost.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card-hover" style={{ background: '#0d1117', borderRadius: '16px', overflow: 'hidden', height: '100%' }}>
                  <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                    {latestPost.image ? (
                      <img src={latestPost.image} alt={latestPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0c1929, #0ea5e9)' }} />
                    )}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,23,0.9) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                      <span className={getColors(latestPost.category).badge} style={{ padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase' }}>
                        {latestPost.category}
                      </span>
                      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#f1f5f9', lineHeight: 1.3, marginTop: '0.75rem', wordBreak: 'break-word' }}>
                        {latestPost.title}
                      </h2>
                    </div>
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {latestPost.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: '#475569', fontSize: '0.8rem' }}>{latestPost.date} · {latestPost.readingTime}</span>
                      <span style={{ color: getColors(latestPost.category).dot, fontSize: '0.85rem', fontWeight: 600 }}>Read more →</span>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* RIGHT — Small posts */}
            <div className="home-side-posts">
              {otherPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card-hover home-side-card">
                    <div className="home-side-img">
                      {post.image ? (
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0c1929, #0ea5e9)' }} />
                      )}
                    </div>
                    <div style={{ padding: '0.75rem', flex: 1, minWidth: 0 }}>
                      <span className={getColors(post.category).badge} style={{ padding: '0.1rem 0.4rem', borderRadius: '3px', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase' }}>
                        {post.category}
                      </span>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.4, marginTop: '0.3rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {post.title}
                      </p>
                      <span style={{ color: '#475569', fontSize: '0.72rem' }}>{post.date}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ad Slot Middle */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <AdSlot slot="horizontal" />
      </div>

      {/* More Posts */}
      {morePosts.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 3rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#f1f5f9', marginBottom: '1.5rem' }}>
            <span style={{ color: '#0ea5e9' }}>More</span> Posts
          </h2>
          <div className="home-more-grid">
            {morePosts.map(post => <PostCard key={post.slug} post={post} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" style={{ padding: '0.75rem 2rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none' }}>
              View All Posts →
            </Link>
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '5rem 1.5rem', color: '#475569' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#94a3b8', marginBottom: '0.5rem' }}>No posts yet</h2>
          <p>Add your first .mdx file to the /posts folder!</p>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
