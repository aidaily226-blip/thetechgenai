import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem 2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#00ff88', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Get In Touch</span>
        </div>

        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: 1.1, color: '#f1f5f9', marginBottom: '1rem' }}>
          Contact{' '}
          <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Us
          </span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
          Have a story tip, question, or partnership idea? We read every message and get back to you within 2–3 business days.
        </p>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>

        {/* Email Cards */}
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginBottom: '1.5rem' }}>
          {[
            { icon: '✉️', label: 'General Inquiries', email: 'aidaily226@gmail.com', color: '#00ff88' },
            { icon: '💡', label: 'Story Tips', email: 'aidaily226@gmail.com', color: '#0ea5e9' },
            { icon: '🤝', label: 'Partnerships', email: 'aidaily226@gmail.com', color: '#fbbf24' },
          ].map(item => (
            <div key={item.label} style={{ background: '#0d1117', borderRadius: '16px', padding: '1.5rem', border: '1px solid #1e2a38', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: item.color, marginBottom: '0.5rem' }}>{item.label}</p>
              <a href={`mailto:${item.email}`} style={{ color: '#64748b', fontSize: '0.8rem', textDecoration: 'none', wordBreak: 'break-all' }}>
                {item.email}
              </a>
            </div>
          ))}
        </div>

        {/* What to reach us about */}
        <div style={{ background: '#0d1117', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #1e2a38' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1.25rem' }}>
            <span style={{ color: '#0ea5e9' }}>What</span> You Can Reach Us About
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { icon: '📰', text: 'Story tips — Did you spot something big in AI or tech we should cover?' },
              { icon: '✏️', text: 'Corrections — Did we get something wrong? We take accuracy seriously and will fix it fast.' },
              { icon: '💬', text: 'Feedback — Tell us what you love, what you want more of, or what we can do better.' },
              { icon: '📢', text: 'Partnerships — Interested in advertising, sponsorships, or collaborating with us?' },
              { icon: '❓', text: 'General questions — Anything else on your mind.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ fontSize: '1rem', marginTop: '0.05rem' }}>{item.icon}</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Response time */}
        <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(0,255,136,0.05))', borderRadius: '16px', padding: '1.5rem 2rem', border: '1px solid rgba(14,165,233,0.15)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>⚡</span>
          <div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#f1f5f9', marginBottom: '0.25rem' }}>Response Time</p>
            <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6 }}>
              We read every message. General inquiries are answered within <span style={{ color: '#00ff88', fontWeight: 600 }}>2–3 business days</span>. Urgent tips or corrections get a faster response.
            </p>
          </div>
        </div>

      </section>
    </Layout>
  )
}
