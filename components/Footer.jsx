import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#080d14', borderTop: '1px solid #1e2a38', marginTop: '2rem' }}>

      {/* Main Footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img src="/pixel.png" alt="TheTechGenAI" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover' }} />
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#f1f5f9' }}>
                The<span style={{ color: '#0ea5e9' }}>Tech</span><span style={{ color: '#00ff88' }}>GenAI</span>
              </span>
            </div>
            <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '260px', marginBottom: '1.25rem' }}>
              AI-powered digital agency building websites and handling digital marketing for businesses across India — plus daily AI and tech news.
            </p>
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:info@thetechgenai.com"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', textDecoration: 'none', fontSize: '0.82rem' }}>
                <span>📧</span> info@thetechgenai.com
              </a>
              <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22c55e', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600 }}>
                <span>💬</span> +91 98704 05692
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.82rem' }}>
                <span>📍</span> India (Serving Globally)
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Services
            </h4>
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
                style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.83rem', padding: '0.22rem 0', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Blog Column */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Blog
            </h4>
            {[
              { href: '/blog', label: 'All Posts' },
              { href: '/category/ai-news', label: 'AI News' },
              { href: '/category/tech', label: 'Tech' },
              { href: '/category/gadgets', label: 'Gadgets' },
              { href: '/category/ai-tools', label: 'AI Tools' },
              { href: '/category/make-money', label: 'Make Money' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.83rem', padding: '0.22rem 0', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Company
            </h4>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms & Conditions' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', color: '#475569', textDecoration: 'none', fontSize: '0.83rem', padding: '0.22rem 0', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </Link>
            ))}

            {/* CTA */}
            <Link href="/contact"
              style={{ display: 'inline-block', marginTop: '1rem', padding: '0.55rem 1.1rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '6px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'Syne, sans-serif' }}>
              Get Free Quote →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1e2a38', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#334155', fontSize: '0.78rem', marginBottom: '0.2rem' }}>
              © 2026 TheTechGenAI. All rights reserved. Built by <span style={{ color: '#0ea5e9' }}>Piyush Goel</span>.
            </p>
            <p style={{ color: '#1e2a38', fontSize: '0.72rem' }}>
              AI-Powered Digital Agency & Tech Blog — India
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
              style={{ color: '#22c55e', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 600 }}>
              💬 WhatsApp
            </a>
            <a href="mailto:info@thetechgenai.com"
              style={{ color: '#475569', textDecoration: 'none', fontSize: '0.78rem' }}>
              📧 Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
