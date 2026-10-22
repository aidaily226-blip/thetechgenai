import Link from 'next/link'

export default function PostSidebar({ currentSlug, currentCategory, allPosts }) {
  const others = allPosts.filter(p => p.slug !== currentSlug)
  const same = others.filter(p => p.category === currentCategory)
  const rest = others.filter(p => p.category !== currentCategory)
  const list = [...same, ...rest].slice(0, 6)

  return (
    <aside className="post-sidebar">
      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#f1f5f9', marginBottom: '1rem' }}>
        <span style={{ color: '#00ff88' }}>Related</span> Articles
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {list.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'flex', gap: '0.7rem' }}>
            {p.image && <img src={p.image} alt="" style={{ width: '72px', height: '56px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }} />}
            <div style={{ minWidth: 0 }}>
              <div style={{ color: '#e2e8f0', fontSize: '0.82rem', fontWeight: 600, lineHeight: 1.35, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{p.title}</div>
              <div style={{ color: '#475569', fontSize: '0.7rem', marginTop: '0.2rem' }}>{p.category}</div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
