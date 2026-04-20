import Layout from '../components/Layout'
import Link from 'next/link'

const services = [
  {
    icon: '🌐',
    title: 'AI-Driven Websites',
    desc: 'We build fast, modern websites powered by artificial intelligence. From smart chatbots to personalised content — your website works for you 24/7.',
    features: ['Next.js & React', 'AI Chatbot Integration', 'SEO Optimised', 'Mobile First'],
    badge: 'badge-ai',
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    desc: 'Grow your business online with AI-powered marketing strategies. We handle SEO, social media, content, and paid ads — all data-driven.',
    features: ['SEO & Content', 'Social Media Management', 'Google Ads', 'Analytics & Reports'],
    badge: 'badge-tech',
  },
  {
    icon: '🎨',
    title: 'Brand Identity & Design',
    desc: 'Your brand is your first impression. We create logos, colour palettes, and brand guidelines that make you look professional and trustworthy.',
    features: ['Logo Design', 'Brand Guidelines', 'UI/UX Design', 'Social Media Kits'],
    badge: 'badge-tools',
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    desc: 'Automate repetitive tasks in your business using AI. From customer replies to inventory management — save hours every week.',
    features: ['WhatsApp Automation', 'Email Automation', 'Inventory Systems', 'Custom AI Tools'],
    badge: 'badge-gadgets',
  },
  {
    icon: '🍽️',
    title: 'Restaurant & Hotel Websites',
    desc: 'Specialised websites for restaurants, hotels, and hospitality businesses. Online menus, booking systems, and beautiful designs that bring customers in.',
    features: ['Online Menu', 'Table Booking', 'Google Maps Integration', 'Food Photography'],
    badge: 'badge-money',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    desc: 'Sell online with a professional store. We build fast, secure online shops with payment gateways, inventory, and order management.',
    features: ['Product Catalogue', 'Payment Gateway', 'Order Management', 'Mobile Optimised'],
    badge: 'badge-ai',
  },
]

export default function Services() {
  return (
    <Layout
      title="Digital Services — AI Websites, Marketing & More | TheTechGenAI"
      description="TheTechGenAI offers AI-driven websites, digital marketing, brand design, and automation services for restaurants, hotels, and businesses."
      canonical="https://thetechgenai.com/services"
    >
      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#0ea5e9', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Digital Services</span>
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem' }}>
          We Build <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered</span><br />Digital Solutions
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          From intelligent websites to full digital marketing — we help restaurants, hotels, and businesses grow online using the latest AI technology.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ padding: '0.85rem 2rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            Get Free Quote →
          </Link>
          <Link href="/portfolio" style={{ padding: '0.85rem 2rem', background: 'transparent', border: '1px solid #1e2a38', borderRadius: '8px', color: '#94a3b8', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '2rem', textAlign: 'center' }}>
          What We <span style={{ color: '#00ff88' }}>Offer</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {services.map((s) => (
            <div key={s.title} className="card-hover" style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.75rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              <span className={s.badge} style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>
                {s.title}
              </span>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, margin: '0.75rem 0 1rem' }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {s.features.map(f => (
                  <li key={f} style={{ color: '#475569', fontSize: '0.82rem', padding: '0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#00ff88', fontSize: '0.7rem' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', borderBottom: '1px solid #1e2a38', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>Why Choose TheTechGenAI?</h2>
          <p style={{ color: '#64748b', marginBottom: '2.5rem' }}>We combine AI technology with human creativity to deliver results that matter.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'Most websites delivered in 7-14 days' },
              { icon: '🔒', title: 'Secure & Reliable', desc: 'Built with best-in-class security standards' },
              { icon: '🌍', title: 'SEO Optimised', desc: 'Built to rank on Google from day one' },
              { icon: '💬', title: '24/7 Support', desc: 'We are always available when you need us' },
            ].map(w => (
              <div key={w.title} style={{ background: '#080d14', border: '1px solid #1e2a38', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{w.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{w.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.5 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#f1f5f9', marginBottom: '1rem' }}>
          Ready to Grow Your Business?
        </h2>
        <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.7 }}>
          Get a free consultation and quote. No commitment needed — just a conversation about your goals.
        </p>
        <Link href="/contact" style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
          Contact Us Today →
        </Link>
      </section>
    </Layout>
  )
}
