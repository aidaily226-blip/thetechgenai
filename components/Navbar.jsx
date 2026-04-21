import Link from 'next/link'
import { useState } from 'react'

const categories = [
  { href: '/category/ai-news', label: 'AI News' },
  { href: '/category/tech', label: 'Tech' },
  { href: '/category/gadgets', label: 'Gadgets' },
  { href: '/category/ai-tools', label: 'AI Tools' },
  { href: '/category/make-money', label: 'Make Money' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ background: '#080d14', borderBottom: '1px solid #1e2a38', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img src="/pixel.png" alt="TheTechGenAI" style={{ width: '34px', height: '34px', borderRadius: '8px', objectFit: 'cover' }} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#f1f5f9' }}>
            The<span style={{ color: '#0ea5e9' }}>Tech</span><span style={{ color: '#00ff88' }}>GenAI</span>
          </span>
        </Link>

        {/* Desktop — Category links only */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }} className="desktop-nav">
          {categories.map(c => (
            <Link key={c.href} href={c.href}
              style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, padding: '0.4rem 0.8rem', borderRadius: '6px' }}
              onMouseEnter={e => e.target.style.color = '#f1f5f9'}
              onMouseLeave={e => e.target.style.color = '#64748b'}>
              {c.label}
            </Link>
          ))}
          <Link href="/blog"
            style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, padding: '0.4rem 0.8rem', borderRadius: '6px' }}
            onMouseEnter={e => e.target.style.color = '#f1f5f9'}
            onMouseLeave={e => e.target.style.color = '#64748b'}>
            All Posts
          </Link>
        </div>

        {/* Right side — Get Quote button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
          <Link href="/contact"
            style={{ padding: '0.45rem 1.1rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '6px', color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '0.82rem' }}>
            Get Quote
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-btn"
          style={{ display: 'none', background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.4rem', cursor: 'pointer', padding: '0.25rem' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#080d14', borderTop: '1px solid #1e2a38', padding: '1rem 1.5rem 1.5rem' }}>
          <p style={{ color: '#475569', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Categories</p>
          {categories.map(c => (
            <Link key={c.href} href={c.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', padding: '0.55rem 0', borderBottom: '1px solid #1e2a38' }}>
              {c.label}
            </Link>
          ))}
          <Link href="/blog" onClick={() => setMenuOpen(false)}
            style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', padding: '0.55rem 0', borderBottom: '1px solid #1e2a38' }}>
            All Posts
          </Link>
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <Link href="/services" onClick={() => setMenuOpen(false)}
              style={{ padding: '0.6rem', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem' }}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              style={{ padding: '0.6rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 600, textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem' }}>
              Get Quote
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
