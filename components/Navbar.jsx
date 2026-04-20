import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/category/ai-news', label: 'AI News' },
    { href: '/category/tech', label: 'Tech' },
    { href: '/category/gadgets', label: 'Gadgets' },
    { href: '/category/make-money', label: 'Make Money' },
  ]

  return (
    <nav style={{ background: '#080d14', borderBottom: '1px solid #1e2a38', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, color: '#080d14' }}>TC</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#f1f5f9' }}>
            The<span style={{ color: '#0ea5e9' }}>Tech</span><span style={{ color: '#00ff88' }}>GenAI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, padding: '0.4rem 0.75rem', borderRadius: '6px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f1f5f9'}
              onMouseLeave={e => e.target.style.color = '#64748b'}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{ marginLeft: '0.5rem', padding: '0.45rem 1rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '6px', color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem' }}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.4rem', cursor: 'pointer', padding: '0.25rem' }}
          className="mobile-menu-btn">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#080d14', borderTop: '1px solid #1e2a38', padding: '1rem 1.5rem' }} className="mobile-menu">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', padding: '0.6rem 0', borderBottom: '1px solid #1e2a38' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}
            style={{ display: 'block', marginTop: '0.75rem', padding: '0.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
