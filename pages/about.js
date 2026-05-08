import Layout from '../components/Layout'
import Link from 'next/link'

const values = [
  { icon: '🎯', title: 'Results First', desc: 'Every project we take has one goal — delivering real, measurable results for your business.' },
  { icon: '🤖', title: 'AI Powered', desc: 'We use the latest AI tools in every project — from website development to content creation.' },
  { icon: '🤝', title: 'Long Term Partnership', desc: 'We do not just build and disappear. We stay with you and grow with your business.' },
  { icon: '💰', title: 'Honest Pricing', desc: 'No hidden charges. No surprises. Clear pricing agreed upfront before any work begins.' },
]

const skills = [
  { label: 'Next.js / React', percent: 95 },
  { label: 'SEO & Content', percent: 90 },
  { label: 'AI Integration', percent: 92 },
  { label: 'Digital Marketing', percent: 85 },
  { label: 'UI/UX Design', percent: 88 },
  { label: 'E-Commerce', percent: 87 },
]

const services = [
  { icon: '🌐', label: 'AI Websites' },
  { icon: '📈', label: 'Digital Marketing' },
  { icon: '🍽️', label: 'Restaurant Sites' },
  { icon: '🏨', label: 'Hotel Websites' },
  { icon: '🛒', label: 'E-Commerce' },
  { icon: '🎨', label: 'Brand Identity' },
  { icon: '🤖', label: 'AI Automation' },
  { icon: '📰', label: 'Tech Blog' },
]

export default function About() {
  return (
    <Layout
      title="About Us — TheTechGenAI | AI Agency & Tech Blog India"
      description="TheTechGenAI is founded by Piyush Goel. We build AI-powered websites and handle digital marketing for businesses across India — and publish daily AI and tech news."
      canonical="https://thetechgenai.com/about"
    >

      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 3rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(0,255,136,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* LEFT */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ color: '#00ff88', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>About TheTechGenAI</span>
            </div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              AI Agency.<br />
              <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech Blog.</span><br />
              <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#475569' }}>One Platform.</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              TheTechGenAI is a digital agency and technology media platform founded by <strong style={{ color: '#94a3b8' }}>Piyush Goel</strong>. We build AI-powered websites for restaurants, hotels and businesses across India — and publish daily news on AI, gadgets, and how to earn online with technology.
            </p>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Our goal is simple — use the latest AI and web technology to help Indian businesses compete in the digital world, while keeping the general public informed about where technology is heading.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact"
                style={{ padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Syne, sans-serif' }}>
                Work With Us →
              </Link>
              <Link href="/blog"
                style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
                Read Our Blog
              </Link>
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { number: '30+', label: 'Projects Completed', color: '#0ea5e9' },
              { number: '6+', label: 'Months in Operation', color: '#00ff88' },
              { number: '35+', label: 'Blog Posts Published', color: '#c084fc' },
              { number: '100%', label: 'Client Satisfaction', color: '#f97316' },
            ].map(s => (
              <div key={s.label} style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: s.color, marginBottom: '0.25rem' }}>{s.number}</p>
                <p style={{ color: '#475569', fontSize: '0.78rem', lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', borderBottom: '1px solid #1e2a38', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'center' }}>

            {/* Founder Card */}
            <div style={{ background: '#080d14', border: '1px solid #1e2a38', borderRadius: '20px', padding: '2rem', textAlign: 'center' }}>
              {/* Avatar */}
              <div style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#080d14' }}>
                PG
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Piyush Goel</h2>
              <p style={{ color: '#0ea5e9', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.25rem' }}>Founder — TheTechGenAI</p>

              {/* Contact links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.6rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', color: '#22c55e', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600 }}>
                  💬 +91 98704 05692
                </a>
                <a href="mailto:info@thetechgenai.com"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.6rem', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '8px', color: '#0ea5e9', textDecoration: 'none', fontSize: '0.82rem' }}>
                  📧 info@thetechgenai.com
                </a>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.6rem', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '8px', color: '#475569', fontSize: '0.82rem' }}>
                  📍 India (Global)
                </span>
              </div>
            </div>

            {/* Founder Story */}
            <div>
              <p style={{ color: '#0ea5e9', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace', marginBottom: '0.5rem' }}>Meet the Founder</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '1.25rem' }}>
                The Person Behind <span style={{ color: '#00ff88' }}>TheTechGenAI</span>
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Piyush Goel is the founder of TheTechGenAI — a platform built on one belief: that AI and technology should be accessible and understandable for every business and every person in India.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                With a deep passion for AI, web technology, and digital business, Piyush built TheTechGenAI to serve two purposes — help Indian businesses build their online presence using AI-driven websites and digital marketing, and keep the general public informed about where technology is heading through honest, simple articles.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Every project at TheTechGenAI is personally overseen by Piyush to ensure quality, timely delivery, and results that actually matter for clients' businesses.
              </p>

              {/* Skills */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {skills.map(s => (
                  <div key={s.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                      <span style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600 }}>{s.label}</span>
                      <span style={{ color: '#475569', fontSize: '0.72rem' }}>{s.percent}%</span>
                    </div>
                    <div style={{ height: '4px', background: '#1e2a38', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.percent}%`, background: 'linear-gradient(90deg, #0ea5e9, #00ff88)', borderRadius: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
            What We <span style={{ color: '#0ea5e9' }}>Do</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Two businesses. One platform. Built to grow your business and keep you informed.</p>
        </div>

        {/* Two cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ background: '#0d1117', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏢</div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#0ea5e9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Digital Agency</h3>
            <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              We build AI-powered websites, handle digital marketing, design brand identities, and create e-commerce stores for businesses across India. Our clients are restaurants, hotels, retailers, and service businesses who want a professional online presence.
            </p>
            <Link href="/services" style={{ color: '#0ea5e9', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>
              View Services →
            </Link>
          </div>
          <div style={{ background: '#0d1117', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📰</div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#00ff88', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Tech Blog</h3>
            <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              We publish daily articles on artificial intelligence, technology news, gadget reviews and strategies for earning money online. All explained in simple words that anyone can understand — not just technical experts.
            </p>
            <Link href="/blog" style={{ color: '#00ff88', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>
              Read Blog →
            </Link>
          </div>
        </div>

        {/* Services pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {services.map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '100px', padding: '0.4rem 1rem', color: '#64748b', fontSize: '0.82rem' }}>
              <span>{s.icon}</span> {s.label}
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', borderBottom: '1px solid #1e2a38', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
              Our <span style={{ color: '#00ff88' }}>Values</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {values.map(v => (
              <div key={v.title} style={{ background: '#080d14', border: '1px solid #1e2a38', borderRadius: '14px', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{v.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '650px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#f1f5f9', marginBottom: '1rem' }}>
          Ready to Work Together?
        </h2>
        <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.7 }}>
          Whether you need a website, digital marketing, or just want to talk about your project — we are here. Free consultation, no commitment.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
            style={{ padding: '0.85rem 1.75rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', color: '#22c55e', fontWeight: 700, textDecoration: 'none' }}>
            💬 WhatsApp Now
          </a>
          <Link href="/contact"
            style={{ padding: '0.85rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontFamily: 'Syne, sans-serif' }}>
            Get Free Quote →
          </Link>
        </div>
        <p style={{ color: '#334155', fontSize: '0.78rem', marginTop: '1.25rem' }}>
          📧 info@thetechgenai.com · 📱 +91 98704 05692
        </p>
      </section>

    </Layout>
  )
}
