import Link from 'next/link'

const categoryColors = {
  'ai news': { badge: 'badge-ai', dot: '#00ff88' },
  'tech': { badge: 'badge-tech', dot: '#38bdf8' },
  'gadgets': { badge: 'badge-gadgets', dot: '#c084fc' },
  'ai tools': { badge: 'badge-tools', dot: '#fb923c' },
  'make money': { badge: 'badge-money', dot: '#fbbf24' },
}

export default function RelatedPosts({ currentSlug, currentCategory, allPosts }) {
  // Get related posts - same category first, then others
  const related = allPosts
    .filter(p => p.slug !== currentSlug)
    .sort((a, b) => {
      // Same category gets priority
      if (a.category?.toLowerCase() === currentCategory?.toLowerCase()) return -1
      if (b.category?.toLowerCase() === currentCategory?.toLowerCase()) return 1
      return 0
    })
    .slice(0, 3)

  if (related.length === 0) return null

  const getColors = (category) => {
    const key = category?.toLowerCase() || 'tech'
    return categoryColors[key] || categoryColors['tech']
  }

  return (
    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #1e2a38' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '4px', height: '24px', background: 'linear-gradient(to bottom, #0ea5e9, #00ff88)', borderRadius: '2px' }} />
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#f1f5f9', margin: 0 }}>
          Related Posts
        </h3>
      </div>

      {/* Related Posts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {related.map(post => {
          const colors = getColors(post.category)
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article className="card-hover" style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', height: '100%' }}>
                {post.image && (
                  <div style={{ height: '120px', overflow: 'hidden' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                )}
                <div style={{ padding: '1rem' }}>
                  <span className={colors.badge} style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase' }}>
                    {post.category}
                  </span>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.4, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                    {post.title}
                  </h4>
                  <span style={{ color: '#475569', fontSize: '0.75rem' }}>{post.date}</span>
                </div>
              </article>
            </Link>
          )
        })}
      </div>

      {/* View All Posts Button */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Link href="/blog" style={{ display: 'inline-block', padding: '0.6rem 1.5rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.target.style.borderColor = '#0ea5e9'; e.target.style.color = '#0ea5e9' }}
          onMouseLeave={e => { e.target.style.borderColor = '#1e2a38'; e.target.style.color = '#94a3b8' }}>
          View All Posts →
        </Link>
      </div>
    </div>
  )
}
