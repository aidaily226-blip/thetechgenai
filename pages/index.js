import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

const categoryColors = {
  'ai news': { badge: 'badge-ai', dot: '#00ff88' },
  'tech': { badge: 'badge-tech', dot: '#38bdf8' },
  'gadgets': { badge: 'badge-gadgets', dot: '#c084fc' },
  'ai tools': { badge: 'badge-tools', dot: '#fb923c' },
  'make money': { badge: 'badge-money', dot: '#fbbf24' },
}

const services = [
  { icon: '🌐', title: 'AI-Powered Websites', desc: 'Fast, modern websites built with AI for businesses across India.' },
  { icon: '📈', title: 'Digital Marketing', desc: 'SEO, social media and content strategies that drive real growth.' },
  { icon: '🍽️', title: 'Restaurant & Hotel Sites', desc: 'Online menus, booking systems and stunning designs.' },
  { icon: '🤖', title: 'AI Automation', desc: 'Automate your business tasks using the latest AI tools.' },
]

const stats = [
  { number: '30+', label: 'Projects Done' },
  { number: '6+', label: 'Months Active' },
  { number: '100%', label: 'Client Focus' },
  { number: '24/7', label: 'Support' },
]

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

      {/* ── HERO ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 3rem', position: 'relative' }}>
        {/* Glow */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

          {/* LEFT — Text */}
          <div>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ color: '#0ea5e9', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>AI Agency + Tech Blog</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, color: '#f1f5f9', marginBottom: '1.25rem' }}>
              We Build AI-Powered<br />
              <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Digital Solutions
              </span>
              <br />
              <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#475569', fontWeight: 600 }}>
                & Cover Daily Tech News
              </span>
            </h1>

            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '480px' }}>
              TheTechGenAI is a digital agency building AI-driven websites for restaurants, hotels and businesses — and a daily tech blog covering AI news, gadgets and ways to earn online.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link href="/contact" style={{ padding: '0.85rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Syne, sans-serif' }}>
                Get Free Quote →
              </Link>
              <Link href="/blog" style={{ padding: '0.85rem 1.75rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                Read Our Blog
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {stats.map(s => (
                <div key={s.label} style={{ textAlign: 'center', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '10px', padding: '0.75rem 0.5rem' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#0ea5e9', marginBottom: '0.1rem' }}>{s.number}</p>
                  <p style={{ color: '#475569', fontSize: '0.7rem', fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Services cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {services.map((s, i) => (
              <Link key={s.title} href="/services" style={{ textDecoration: 'none' }}>
                <div className="card-hover" style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '14px', padding: '1.25rem', height: '100%' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{s.icon}</div>
                  <p style={{ fontFamily: 'Syne, sans-serif', color: '#e2e8f0', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.4rem', lineHeight: 1.3 }}>{s.title}</p>
                  <p style={{ color: '#475569', fontSize: '0.75rem', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BAR ── */}
      <div style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', borderBottom: '1px solid #1e2a38', padding: '0.85rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#475569', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>📧</span> info@thetechgenai.com
            </span>
            <span style={{ color: '#475569', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>💬</span> +91 98704 05692
            </span>
            <span style={{ color: '#475569', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>📍</span> India (Serving Globally)
            </span>
          </div>
          <a href="https://wa.me/919870405692?text=Hi%20Piyush!%20I%20want%20a%20free%20quote%20for%20my%20project."
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 1rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '6px', color: '#22c55e', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600 }}>
            💬 WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* ── BLOG SECTION HEADER ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <div>
            <p style={{ color: '#0ea5e9', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace', marginBottom: '0.3rem' }}>Our Tech Blog</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#f1f5f9' }}>
              <span style={{ color: '#00ff88' }}>Latest</span> Stories
            </h2>
          </div>
          <Link href="/blog" style={{ color: '#0ea5e9', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, border: '1px solid #1e2a38', padding: '0.4rem 1rem', borderRadius: '6px' }}>
            View All Posts →
          </Link>
        </div>
      </section>

      {/* ── CATEGORY PILLS ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {[
            { href: '/blog', label: 'All', active: true },
            { href: '/category/ai-news', label: '🤖 AI News' },
            { href: '/category/tech', label: '💻 Tech' },
            { href: '/category/gadgets', label: '📱 Gadgets' },
            { href: '/category/ai-tools', label: '🛠️ AI Tools' },
            { href: '/category/make-money', label: '💰 Make Money' },
          ].map(c => (
            <Link key={c.href} href={c.href}
              style={{ padding: '0.35rem 0.9rem', background: c.active ? 'linear-gradient(135deg, #0ea5e9, #0284c7)' : '#0d1117', border: c.active ? 'none' : '1px solid #1e2a38', borderRadius: '100px', color: c.active ? 'white' : '#64748b', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600 }}>
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED + SIDE POSTS ── */}
      {posts.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <div className="home-latest-grid">
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
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                      <span style={{ background: '#0ea5e9', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' }}>Featured</span>
                    </div>
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

      {/* ── MORE POSTS ── */}
      {morePosts.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1.5rem' }}>
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

      {/* ── AGENCY CTA BANNER ── */}
      <section style={{ background: 'linear-gradient(135deg, #0d1117, #080d14)', borderTop: '1px solid #1e2a38', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#0ea5e9', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace', marginBottom: '0.75rem' }}>Digital Agency Services</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#f1f5f9', marginBottom: '1rem', lineHeight: 1.2 }}>
            Need a Website or Digital Marketing<br />for Your Business?
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            TheTechGenAI builds AI-powered websites for restaurants, hotels, and businesses across India. Fast delivery. Affordable pricing. Free consultation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919870405692?text=Hi%20Piyush!%20I%20need%20a%20website%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              style={{ padding: '0.85rem 1.75rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', color: '#22c55e', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              💬 WhatsApp — Fast Reply
            </a>
            <Link href="/services"
              style={{ padding: '0.85rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Syne, sans-serif' }}>
              View Our Services →
            </Link>
          </div>
          <p style={{ color: '#334155', fontSize: '0.78rem', marginTop: '1.25rem' }}>
            📧 info@thetechgenai.com &nbsp;·&nbsp; 📱 +91 98704 05692 &nbsp;·&nbsp; 📍 India
          </p>
        </div>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
