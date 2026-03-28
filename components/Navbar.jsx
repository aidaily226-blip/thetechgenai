import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { name: 'AI News', href: '/category/ai-news' },
  { name: 'Tech', href: '/category/tech' },
  { name: 'Gadgets', href: '/category/gadgets' },
  { name: 'AI Tools', href: '/category/ai-tools' },
  { name: 'Make Money', href: '/category/make-money' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ background: 'rgba(8,12,16,0.95)', borderBottom: '1px solid #1e2a38', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '14px', color: '#080c10' }}>TG</span>
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#f1f5f9' }}>
            The<span style={{ color: '#00ff88' }}>TechGenAI</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="nav-desktop-links">
          {categories.map(cat => (
            <Link key={cat.name} href={cat.href} style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', color: '#94a3b8', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.target.style.color = '#f1f5f9'; e.target.style.background = '#1e2a38' }}
              onMouseLeave={e => { e.target.style.color = '#94a3b8'; e.target.style.background = 'transparent' }}>
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* All Posts — outline style */}
          <Link href="/blog" className="nav-desktop-links" style={{ padding: '0.4rem 1rem', background: 'transparent', border: '1px solid #0ea5e9', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', color: '#0ea5e9', whiteSpace: 'nowrap', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.target.style.background = '#0ea5e9'; e.target.style.color = 'white' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#0ea5e9' }}>
            All Posts
          </Link>

          {/* Hamburger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: '1px solid #1e2a38', color: '#94a3b8', cursor: 'pointer', fontSize: '1rem', padding: '0.4rem 0.6rem', borderRadius: '6px', lineHeight: 1, display: 'none' }}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', padding: '0.5rem 1.5rem 1rem' }}>
          {categories.map(cat => (
            <Link key={cat.name} href={cat.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '0.65rem 0', color: '#94a3b8', textDecoration: 'none', borderBottom: '1px solid #1e2a38', fontSize: '0.9rem' }}>
              {cat.name}
            </Link>
          ))}
          <Link href="/blog" onClick={() => setOpen(false)}
            style={{ display: 'block', padding: '0.65rem 0', color: '#0ea5e9', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            All Posts →
          </Link>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
