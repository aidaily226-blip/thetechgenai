import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const blogCategories = [
  { href: '/category/ai-news', label: 'AI News', icon: '🤖', desc: 'Latest AI breakthroughs' },
  { href: '/category/tech', label: 'Tech', icon: '💻', desc: 'Apple, Google, Microsoft' },
  { href: '/category/gadgets', label: 'Gadgets', icon: '📱', desc: 'Reviews & buying guides' },
  { href: '/category/ai-tools', label: 'AI Tools', icon: '🛠️', desc: 'Best free & paid AI tools' },
  { href: '/category/make-money', label: 'Make Money', icon: '💰', desc: 'Earn with technology' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setBlogOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <nav style={{
        background: 'rgba(8,13,20,0.97)',
        borderBottom: '1px solid #1e2a38',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src="/pixel.png" alt="TheTechGenAI" style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'cover' }} />
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#f1f5f9', letterSpacing: '-0.02em' }}>
              The<span style={{ color: '#0ea5e9' }}>Tech</span><span style={{ color: '#00ff88' }}>GenAI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>

            {/* Home */}
            <Link href="/" style={navLinkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
              Home
            </Link>

            {/* Services */}
            <Link href="/services" style={navLinkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
              Services
            </Link>

            {/* Blog with dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setBlogOpen(!blogOpen)}
                style={{
                  ...navLinkStyle,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: blogOpen ? '#f1f5f9' : '#94a3b8',
                }}>
                Blog
                <span style={{
                  fontSize: '0.6rem',
                  transform: blogOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  display: 'inline-block',
                }}>▼</span>
              </button>

              {/* Dropdown */}
              {blogOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#0d1117',
                  border: '1px solid #1e2a38',
                  borderRadius: '16px',
                  padding: '0.75rem',
                  width: '320px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  zIndex: 200,
                }}>
                  {/* All Posts link */}
                  <Link href="/blog" onClick={() => setBlogOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(0,255,136,0.05))',
                      border: '1px solid rgba(14,165,233,0.15)',
                      textDecoration: 'none',
                      marginBottom: '0.5rem',
                    }}>
                    <span style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
                      📰 All Posts
                    </span>
                    <span style={{ color: '#0ea5e9', fontSize: '0.75rem' }}>View all →</span>
                  </Link>

                  {/* Category divider */}
                  <p style={{ color: '#334155', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.25rem 0.75rem', marginBottom: '0.25rem' }}>
                    Categories
                  </p>

                  {/* Categories */}
                  {blogCategories.map(cat => (
                    <Link key={cat.href} href={cat.href} onClick={() => setBlogOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.6rem 0.75rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#1e2a38'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <span style={{ fontSize: '1.1rem', width: '24px', textAlign: 'center', flexShrink: 0 }}>{cat.icon}</span>
                      <div>
                        <p style={{ color: '#e2e8f0', fontSize: '0.83rem', fontWeight: 600, fontFamily: 'Syne, sans-serif', marginBottom: '0.1rem' }}>{cat.label}</p>
                        <p style={{ color: '#475569', fontSize: '0.72rem' }}>{cat.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link href="/about" style={navLinkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
              About
            </Link>

            {/* Contact */}
            <Link href="/contact" style={navLinkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.25)',
                borderRadius: '6px',
                color: '#22c55e',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.82rem',
              }}>
              💬 WhatsApp
            </a>
            <Link href="/contact"
              style={{
                padding: '0.5rem 1.2rem',
                background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                borderRadius: '6px',
                color: 'white',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontFamily: 'Syne, sans-serif',
              }}>
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

            {/* Main links */}
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', padding: '0.65rem 0', borderBottom: '1px solid #1e2a38', fontWeight: 500 }}>
                {l.label}
              </Link>
            ))}

            {/* Blog dropdown mobile */}
            <div>
              <button onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #1e2a38',
                  color: '#94a3b8',
                  fontSize: '0.95rem',
                  padding: '0.65rem 0',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}>
                Blog
                <span style={{ fontSize: '0.65rem', transform: mobileBlogOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
              </button>

              {mobileBlogOpen && (
                <div style={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
                  <Link href="/blog" onClick={() => setMenuOpen(false)}
                    style={{ display: 'block', color: '#0ea5e9', textDecoration: 'none', fontSize: '0.88rem', padding: '0.4rem 0', fontWeight: 600 }}>
                    📰 All Posts
                  </Link>
                  {blogCategories.map(cat => (
                    <Link key={cat.href} href={cat.href} onClick={() => setMenuOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', textDecoration: 'none', fontSize: '0.88rem', padding: '0.4rem 0' }}>
                      <span>{cat.icon}</span> {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTAs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
              <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
                style={{ padding: '0.65rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', color: '#22c55e', fontWeight: 600, textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem' }}>
                💬 WhatsApp
              </a>
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                style={{ padding: '0.65rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem' }}>
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

const navLinkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.88rem',
  fontWeight: 500,
  padding: '0.5rem 0.85rem',
  borderRadius: '6px',
  transition: 'color 0.15s',
  fontFamily: 'inherit',
}
