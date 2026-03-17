import Link from 'next/link'

const categoryColors = {
  'ai-news': { badge: 'badge-ai', dot: '#00ff88' },
  'tech': { badge: 'badge-tech', dot: '#38bdf8' },
  'gadgets': { badge: 'badge-gadgets', dot: '#c084fc' },
  'ai-tools': { badge: 'badge-tools', dot: '#fb923c' },
  'make-money': { badge: 'badge-money', dot: '#fbbf24' },
}

export default function PostCard({ post, featured = false }) {
  const cat = post.category?.toLowerCase().replace(' ', '-') || 'tech'
  const colors = categoryColors[cat] || categoryColors['tech']

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
        <article className="card-hover" style={{ background: '#0d1117', borderRadius: '16px', overflow: 'hidden', height: '100%' }}>
          {post.image && (
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,23,0.8) 0%, transparent 60%)' }} />
            </div>
          )}
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span className={colors.badge} style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {post.category}
              </span>
              <span style={{ color: '#475569', fontSize: '0.75rem' }}>{post.readingTime}</span>
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#f1f5f9', lineHeight: 1.4, marginBottom: '0.75rem' }}>
              {post.title}
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              {post.excerpt}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#475569', fontSize: '0.8rem' }}>{post.date}</span>
              <span style={{ color: colors.dot, fontSize: '0.85rem', fontWeight: 600 }}>Read more →</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article className="card-hover" style={{ background: '#0d1117', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{ width: '4px', height: '100%', minHeight: '60px', background: colors.dot, borderRadius: '2px', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className={colors.badge} style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase' }}>
              {post.category}
            </span>
            <span style={{ color: '#475569', fontSize: '0.72rem' }}>{post.date} · {post.readingTime}</span>
          </div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#e2e8f0', lineHeight: 1.4 }}>
            {post.title}
          </h3>
        </div>
      </article>
    </Link>
  )
}
