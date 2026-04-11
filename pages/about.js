import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem 2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#00ff88', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>About Us</span>
        </div>

        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: 1.1, color: '#f1f5f9', marginBottom: '1rem' }}>
          About{' '}
          <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            TheTechGenAI
          </span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
          Your daily source for AI news, tech updates, gadget reviews and making money with technology — explained in simple words.
        </p>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>

        {/* Who We Are */}
        <div style={{ background: '#0d1117', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #1e2a38' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1rem' }}>
            <span style={{ color: '#00ff88' }}>Who</span> We Are
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            TheTechGenAI is an independent technology publication focused on one thing — making the world of AI and technology easy to understand for everyone.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8 }}>
            We do not write for engineers. We write for real people — students, business owners, creators, and curious minds who want to understand what is happening in tech without needing a computer science degree.
          </p>
        </div>

        {/* What We Cover */}
        <div style={{ background: '#0d1117', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #1e2a38' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1.25rem' }}>
            <span style={{ color: '#0ea5e9' }}>What</span> We Cover
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '🤖', label: 'AI News', color: '#00ff88', desc: 'The latest from OpenAI, Google, Meta, Anthropic and every major AI company — explained simply and published fast.' },
              { icon: '💻', label: 'Tech', color: '#38bdf8', desc: 'The biggest stories in technology — from chips to startups to global tech policy.' },
              { icon: '📱', label: 'Gadgets', color: '#c084fc', desc: 'Honest reviews and breakdowns of the devices worth knowing about.' },
              { icon: '🛠️', label: 'AI Tools', color: '#fb923c', desc: 'Practical guides on the best AI tools available and how to actually use them.' },
              { icon: '💰', label: 'Make Money', color: '#fbbf24', desc: 'Real, actionable ways to use AI and technology to earn online — freelancing, content creation, automation, and more.' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.3rem', marginTop: '0.1rem' }}>{item.icon}</div>
                <div>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: item.color }}>{item.label}</span>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, marginTop: '0.2rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission */}
        <div style={{ background: '#0d1117', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #1e2a38' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1rem' }}>
            <span style={{ color: '#00ff88' }}>Our</span> Mission
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            The AI revolution is moving faster than any technology shift in history. Every week brings new models, new products, and new breakthroughs that change what is possible. Most coverage of this is either too technical or too shallow.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8 }}>
            We exist to close that gap. Our mission is simple — explain what is happening in AI and technology, why it matters, and what it means for your life. In plain English. Every day.
          </p>
        </div>

        {/* Our Promise */}
        <div style={{ background: '#0d1117', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #1e2a38' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1.25rem' }}>
            <span style={{ color: '#0ea5e9' }}>Our</span> Promise to Readers
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'We write in simple, clear language — no unnecessary jargon',
              'We cover news fast — when something big happens, we cover it',
              'We are independent — we are not paid to promote any company or product',
              'We are honest — if something has a downside, we say so',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#00ff88', fontSize: '1rem', marginTop: '0.05rem' }}>✓</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(0,255,136,0.05))', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(14,165,233,0.15)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>Have a story tip or question?</p>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>We would love to hear from you.</p>
          <Link href="/contact" style={{ padding: '0.75rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
            Contact Us →
          </Link>
        </div>

      </section>
    </Layout>
  )
}
