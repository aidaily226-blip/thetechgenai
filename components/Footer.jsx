import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#080d14', borderTop: '1px solid #1e2a38', marginTop: '4rem', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <img src="/pixel.png" alt="TheTechGenAI" style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover' }} />
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#f1f5f9' }}>
                The<span style={{ color: '#0ea5e9' }}>Tech</span><span style={{ color: '#00ff88' }}>GenAI</span>
              </span>
            </div>
            <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.6, maxWidth: '200px' }}>
              Daily AI news, tech updates and making money with technology.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Categories</h4>
            {[
              { href: '/category/ai-news', label: 'AI News' },
              { href: '/category/tech', label: 'Tech' },
              { href: '/category/gadgets', label: 'Gadgets' },
              { href: '/category/ai-tools', label: 'AI Tools' },
              { href: '/category/make-money', label: 'Make Money' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.83rem', padding: '0.2rem 0' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Services</h4>
            {[
              { href: '/services', label: 'AI Websites' },
              { href: '/services', label: 'Digital Marketing' },
              { href: '/services', label: 'Restaurant Sites' },
              { href: '/services', label: 'E-Commerce' },
              { href: '/portfolio', label: 'Our Portfolio' },
            ].map((l, i) => (
              <Link key={i} href={l.href} style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.83rem', padding: '0.2rem 0' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contact</h4>
            <p style={{ color: '#475569', fontSize: '0.83rem', marginBottom: '0.4rem' }}>Piyush Goel — Founder</p>
            <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#22c55e', textDecoration: 'none', fontSize: '0.83rem', marginBottom: '0.75rem' }}>
              💬 WhatsApp Us
            </a>
            <br />
            <Link href="/contact"
              style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '6px', color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '0.8rem', marginTop: '0.25rem' }}>
              Get Free Quote →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1e2a38', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#334155', fontSize: '0.78rem' }}>
            © 2026 TheTechGenAI. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ color: '#334155', textDecoration: 'none', fontSize: '0.78rem' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
