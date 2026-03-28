import Link from 'next/link'

const categoryColors = {
  'ai news': { badge: 'badge-ai', dot: '#00ff88' },
  'tech': { badge: 'badge-tech', dot: '#38bdf8' },
  'gadgets': { badge: 'badge-gadgets', dot: '#c084fc' },
  'ai tools': { badge: 'badge-tools', dot: '#fb923c' },
  'make money': { badge: 'badge-money', dot: '#fbbf24' },
}

export default function PostCard({ post, featured = false }) {
  const key = post.category?.toLowerCase() || 'tech'
  const colors = categoryColors[key] || categoryColors['tech']

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <article style={{
          background: '#0d1117',
          borderRadius: '14px',
          overflow: 'hidden',
          height: '100%',
          border: '1px solid #1e2a38',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(14,165,233,0.4)'
            e.currentTarget.style.transform = 'translateY(-3px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1e2a38'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {/* Image */}
          <div style={{ height: '200px', overflow: 'hidden', position: 'relative', background: '#0d1117' }}>
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0c1929, #0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem' }}>📱</span>
              </div>
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,23,0.6) 0%, transparent 60%)' }} />
          </div>

          {/* Content */}
          <div style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              <span className={colors.badge} style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase' }}>
                {post.category}
              </span>
              <span style={{ color: '#475569', fontSize: '0.75rem' }}>{post.readingTime}</span>
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9', lineHeight: 1.4, marginBottom: '0.6rem' }}>
              {post.title}
            </h2>
            {post.excerpt && (
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.75rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                {post.excerpt}
              </p>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#475569', fontSize: '0.78rem' }}>{post.date}</span>
              <span style={{ color: colors.dot, fontSize: '0.82rem', fontWeight: 600 }}>Read →</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  // Small card (list view)
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article style={{
        background: '#0d1117',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        gap: '0',
        border: '1px solid #1e2a38',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(14,165,233,0.4)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#1e2a38'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Image */}
        <div style={{ width: '110px', height: '90px', flexShrink: 0, overflow: 'hidden' }}>
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0c1929, #0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>📰</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '0.75rem 1rem', flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span className={colors.badge} style={{ padding: '0.12rem 0.45rem', borderRadius: '4px', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase' }}>
              {post.category}
            </span>
            <span style={{ color: '#475569', fontSize: '0.7rem' }}>{post.date}</span>
          </div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {post.title}
          </h3>
          <span style={{ color: '#475569', fontSize: '0.72rem', marginTop: '0.25rem', display: 'block' }}>{post.readingTime}</span>
        </div>
      </article>
    </Link>
  )
}
