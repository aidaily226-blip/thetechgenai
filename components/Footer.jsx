import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', marginTop: '5rem', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '12px', color: '#080c10' }}>TG</span>
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: '#f1f5f9' }}>TheTechGenAI</span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Your daily source for AI news, tech updates, gadget reviews and making money with technology.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Categories</h4>
            {['AI News', 'Tech', 'Gadgets', 'AI Tools', 'Make Money'].map(cat => (
              <Link key={cat} href={`/category/${cat.toLowerCase().replace(' ', '-')}`}
                style={{ display: 'block', color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#00ff88'}
                onMouseLeave={e => e.target.style.color = '#64748b'}>
                {cat}
              </Link>
            ))}
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pages</h4>
            {[['Home', '/'], ['Blog', '/blog'], ['About', '/about'], ['Contact', '/contact'], ['Privacy Policy', '/privacy']].map(([name, href]) => (
              <Link key={name} href={href}
                style={{ display: 'block', color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#00ff88'}
                onMouseLeave={e => e.target.style.color = '#64748b'}>
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e2a38', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} TheTechGenAI. All rights reserved.
          </p>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>
            Built with <span style={{ color: '#0ea5e9' }}>Next.js</span> · Hosted on <span style={{ color: '#00ff88' }}>Cloudflare</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
