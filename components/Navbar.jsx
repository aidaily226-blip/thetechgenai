import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { name: 'AI News', href: '/category/ai-news', badge: 'badge-ai' },
  { name: 'Tech', href: '/category/tech', badge: 'badge-tech' },
  { name: 'Gadgets', href: '/category/gadgets', badge: 'badge-gadgets' },
  { name: 'AI Tools', href: '/category/ai-tools', badge: 'badge-tools' },
  { name: 'Make Money', href: '/category/make-money', badge: 'badge-money' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{ background: 'rgba(8,12,16,0.9)', borderBottom: '1px solid #1e2a38', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '14px', color: '#080c10' }}>TG</span>
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#f1f5f9' }}>
            The<span style={{ color: '#00ff88' }}>TechGenAI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="hidden-mobile">
          {categories.map(cat => (
            <Link key={cat.name} href={cat.href} style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', color: '#94a3b8', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.color = '#f1f5f9'; e.target.style.background = '#1e2a38' }}
              onMouseLeave={e => { e.target.style.color = '#94a3b8'; e.target.style.background = 'transparent' }}>
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Search + Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/blog" style={{ padding: '0.4rem 1rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', color: 'white' }}>
            All Posts
          </Link>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.3rem', display: 'none' }} className="mobile-menu-btn">☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', padding: '1rem 1.5rem' }}>
          {categories.map(cat => (
            <Link key={cat.name} href={cat.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '0.6rem 0', color: '#94a3b8', textDecoration: 'none', borderBottom: '1px solid #1e2a38', fontSize: '0.9rem' }}>
              {cat.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
