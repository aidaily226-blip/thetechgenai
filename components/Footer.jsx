import Link from 'next/link'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/the_tech_gen_ai/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: '#E1306C',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61574284589357',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: '#1877F2',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/piyush-g-6b9355400/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0A66C2',
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#080d14', borderTop: '1px solid #1e2a38', marginTop: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img src="/pixel.png" alt="TheTechGenAI" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover' }} />
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#f1f5f9' }}>
                The<span style={{ color: '#0ea5e9' }}>Tech</span><span style={{ color: '#00ff88' }}>GenAI</span>
              </span>
            </div>
            <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.7, maxWidth: '220px', marginBottom: '1.25rem' }}>
              AI-powered digital agency and tech blog based in Delhi. Building websites and covering AI news for India.
            </p>

            {/* Social Links */}
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ color: '#334155', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {socialLinks.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.name}
                    style={{ width: '36px', height: '36px', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '40'; e.currentTarget.style.background = s.color + '10' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = '#1e2a38'; e.currentTarget.style.background = '#0d1117' }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="mailto:info@thetechgenai.com" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#475569', textDecoration: 'none', fontSize: '0.8rem' }}>
                <span>📧</span> info@thetechgenai.com
              </a>
              <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#22c55e', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600 }}>
                <span>💬</span> +91 98704 05692
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#475569', fontSize: '0.8rem' }}>
                <span>📍</span> Pitam Pura, Delhi — India
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Services</h4>
            {[
              { href: '/services', label: 'AI Websites' },
              { href: '/services', label: 'Digital Marketing' },
              { href: '/services', label: 'Restaurant Sites' },
              { href: '/services', label: 'Hotel Websites' },
              { href: '/services', label: 'E-Commerce' },
              { href: '/services', label: 'Brand Identity' },
              { href: '/portfolio', label: 'Our Portfolio' },
            ].map((l, i) => (
              <Link key={i} href={l.href}
                style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.82rem', padding: '0.22rem 0' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Blog */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Blog</h4>
            {[
              { href: '/blog', label: 'All Posts' },
              { href: '/category/ai-news', label: 'AI News' },
              { href: '/category/tech', label: 'Tech' },
              { href: '/category/gadgets', label: 'Gadgets' },
              { href: '/category/ai-tools', label: 'AI Tools' },
              { href: '/category/make-money', label: 'Make Money' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.82rem', padding: '0.22rem 0' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Company</h4>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms & Conditions' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.82rem', padding: '0.22rem 0' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact"
              style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '6px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '0.78rem', fontFamily: 'Syne, sans-serif' }}>
              Get Free Quote →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1e2a38', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#334155', fontSize: '0.78rem', marginBottom: '0.15rem' }}>
              © 2026 TheTechGenAI Studios. All rights reserved. Founded by <span style={{ color: '#0ea5e9' }}>Piyush Goel</span>.
            </p>
            <p style={{ color: '#1e2a38', fontSize: '0.72rem' }}>
              AI-Powered Digital Agency & Tech Blog — Pitam Pura, New Delhi, India
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {socialLinks.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.name}
                style={{ width: '30px', height: '30px', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '40' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = '#1e2a38' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
