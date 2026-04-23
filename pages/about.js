import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout
      title="About Us — TheTechGenAI | AI News & Digital Services"
      description="TheTechGenAI is founded by Piyush Goel. We cover daily AI news, tech updates and build AI-powered websites for businesses."
      canonical="https://thetechgenai.com/about"
    >
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span style={{ color: '#00ff88', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>About</span>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, margin: '0.5rem 0 1rem' }}>
            The Future of Tech,<br />
            <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Explained Simply</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '650px' }}>
            TheTechGenAI is an AI and technology media platform that covers the latest in artificial intelligence, gadgets, and how to make money using technology — explained in simple words that anyone can understand.
          </p>
        </div>

        {/* Two columns — Mission + Company */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.75rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📰</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Our Media Mission</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
              We publish daily articles on AI news, tech updates, gadget reviews, and strategies for earning money online with technology. We believe everyone deserves access to clear, honest tech information — not just technical experts.
            </p>
          </div>
          <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.75rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏢</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Our Digital Services</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Beyond content, we build AI-powered websites, handle digital marketing, and create brand identities for restaurants, hotels, and businesses across India. We help businesses grow online using the latest technology.
            </p>
          </div>
        </div>

        {/* Founder */}
        <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            Meet the Founder
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#080d14', flexShrink: 0 }}>PG</div>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Piyush Goel</h3>
              <p style={{ color: '#0ea5e9', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.75rem' }}>Founder — TheTechGenAI</p>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Piyush Goel is the founder of TheTechGenAI, a platform dedicated to making AI and technology accessible to everyone. With a passion for emerging technology and digital business, he built TheTechGenAI to bridge the gap between complex tech news and everyday readers.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, marginTop: '0.75rem' }}>
                Through the platform's digital services division, Piyush and his team help restaurants, hotels, and businesses across India build their online presence using AI-driven websites, SEO, and digital marketing.
              </p>
              <a href="https://wa.me/919870405692?text=Hi%20Piyush!%20I%20visited%20TheTechGenAI%20and%20would%20like%20to%20connect."
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '0.55rem 1.1rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '8px', color: '#22c55e', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
                💬 Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* What we cover */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>What We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🤖', cat: 'AI News', desc: 'Latest AI breakthroughs, company updates, and what it means for you' },
              { icon: '💻', cat: 'Tech', desc: 'Apple, Google, Microsoft and the biggest tech stories explained simply' },
              { icon: '📱', cat: 'Gadgets', desc: 'Reviews, comparisons, and buying guides for the latest devices' },
              { icon: '🛠️', cat: 'AI Tools', desc: 'Best free and paid AI tools to improve your productivity' },
              { icon: '💰', cat: 'Make Money', desc: 'How to earn online using AI, digital skills, and technology' },
            ].map(c => (
              <div key={c.cat} style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{c.icon}</div>
                <p style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.3rem' }}>{c.cat}</p>
                <p style={{ color: '#475569', fontSize: '0.78rem', lineHeight: 1.5 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(0,255,136,0.05))', border: '1px solid #1e2a38', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.75rem' }}>Need a Website or Digital Marketing?</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            We build AI-powered websites for restaurants, hotels, and businesses across India. Free consultation — no commitment needed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" style={{ padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
              View Services →
            </Link>
            <Link href="/contact" style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
              Get Free Quote
            </Link>
          </div>
        </div>

      </section>
    </Layout>
  )
}
