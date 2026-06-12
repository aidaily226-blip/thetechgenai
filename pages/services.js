import Layout from '../components/Layout'
import Link from 'next/link'

const services = [
  {
    icon: '🌐',
    title: 'AI-Driven Websites',
    badge: 'badge-ai',
    price: '₹15,000',
    desc: 'Fast, modern websites powered by AI technology. Smart chatbots, personalised content, and SEO built in from day one.',
    features: ['Next.js & React', 'AI Chatbot Integration', 'SEO Optimised', 'Mobile First Design', 'Fast Loading Speed', 'SSL Secured'],
    color: '#0ea5e9',
  },
  {
    icon: '📈',
    title: 'Digital Marketing & SEO',
    badge: 'badge-tech',
    price: '₹8,000/mo',
    desc: 'Data-driven marketing strategies that bring real customers to your business. We handle SEO, social media, content and more.',
    features: ['Google SEO', 'Social Media Management', 'Content Strategy', 'Google Ads', 'Analytics & Reporting', 'Keyword Research'],
    color: '#38bdf8',
  },
  {
    icon: '🍽️',
    title: 'Restaurant & Hotel Websites',
    badge: 'badge-money',
    price: '₹20,000',
    desc: 'Specialised websites for restaurants, hotels and hospitality businesses with online menus, booking systems and beautiful designs.',
    features: ['Online Menu System', 'Table Booking', 'Google Maps Integration', 'Food Photo Gallery', 'WhatsApp Integration', 'Review Management'],
    color: '#f97316',
  },
  {
    icon: '🎨',
    title: 'Brand Identity & Design',
    badge: 'badge-gadgets',
    price: '₹5,000',
    desc: 'Professional logos, colour palettes and brand guidelines that make your business look credible and trustworthy from day one.',
    features: ['Logo Design', 'Brand Guidelines', 'Business Card Design', 'Social Media Kit', 'Letterhead & Stationery', 'Brand Strategy'],
    color: '#c084fc',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Stores',
    badge: 'badge-tools',
    price: '₹25,000',
    desc: 'Sell online with a professional store. We build fast, secure online shops with payment gateways and inventory management.',
    features: ['Product Catalogue', 'UPI & Card Payments', 'Order Management', 'WhatsApp Notifications', 'Inventory Tracking', 'Mobile Optimised'],
    color: '#fb923c',
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    badge: 'badge-ai',
    price: '₹10,000',
    desc: 'Automate repetitive tasks in your business using AI. Save hours every week and let technology work for you 24/7.',
    features: ['WhatsApp Automation', 'Email Automation', 'Customer Support Bot', 'Inventory Systems', 'Report Generation', 'Custom AI Tools'],
    color: '#00ff88',
  },
]

const process = [
  { step: '01', title: 'Free Consultation', desc: 'We understand your business goals and requirements. No commitment needed.' },
  { step: '02', title: 'Custom Proposal', desc: 'You receive a detailed proposal with timeline, cost and deliverables.' },
  { step: '03', title: 'Development', desc: 'We build your project with regular updates and your feedback throughout.' },
  { step: '04', title: 'Launch & Support', desc: 'Your project goes live. We provide ongoing support and maintenance.' },
]

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Most websites are delivered in 7-14 days. Complex projects with custom features may take 3-4 weeks.' },
  { q: 'Do you work with businesses outside India?', a: 'Yes! We serve clients globally. Communication happens via WhatsApp, email and video calls.' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfer, Google Pay, and all major payment methods. 50% advance, 50% on delivery.' },
  { q: 'Will I own the website after it is built?', a: 'Yes — 100%. Upon final payment, you own all code, design files and content completely.' },
  { q: 'Do you provide ongoing maintenance?', a: 'Yes. We offer monthly maintenance packages starting at ₹2,000 per month for updates and support.' },
]

export default function Services() {
  return (
    <Layout
      title="Digital Services — AI Websites, Marketing & More | TheTechGenAI Studios"
      description="TheTechGenAI Studios offers AI-driven websites, digital marketing, restaurant and hotel sites, e-commerce stores and brand identity for businesses across India."
      canonical="https://thetechgenai.com/services"
    >

      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#0ea5e9', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Digital Agency Services</span>
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem' }}>
          We Build <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered</span><br />Digital Solutions
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '550px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          From intelligent websites to complete digital marketing — we help restaurants, hotels and businesses across India grow online using the latest AI technology.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919870405692?text=Hi%20Piyush!%20I%20want%20to%20discuss%20a%20project."
            target="_blank" rel="noopener noreferrer"
            style={{ padding: '0.85rem 1.75rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', color: '#22c55e', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
            💬 WhatsApp — Fast Reply
          </a>
          <Link href="/contact"
            style={{ padding: '0.85rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Syne, sans-serif' }}>
            Get Free Quote →
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 1.5rem 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
            What We <span style={{ color: '#00ff88' }}>Offer</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Choose the service that fits your business needs</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.5rem' }}>
          {services.map(s => (
            <div key={s.title} className="card-hover"
              style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', overflow: 'hidden' }}>
              {/* Card top color bar */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2rem' }}>{s.icon}</div>
                  <span style={{ background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color, fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: '6px', fontFamily: 'JetBrains Mono, monospace' }}>
                    From {s.price}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
                <div style={{ borderTop: '1px solid #1e2a38', paddingTop: '1rem' }}>
                  {s.features.map(f => (
                    <p key={f} style={{ color: '#475569', fontSize: '0.8rem', padding: '0.2rem 0', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: s.color, fontSize: '0.65rem', flexShrink: 0 }}>✓</span> {f}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', borderBottom: '1px solid #1e2a38', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
              How We <span style={{ color: '#0ea5e9' }}>Work</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.9rem' }}>Simple 4-step process from idea to launch</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {process.map(p => (
              <div key={p.step} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: 'white' }}>
                  {p.step}
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{p.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: '750px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
            Frequently Asked <span style={{ color: '#00ff88' }}>Questions</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map(f => (
            <div key={f.q} style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
              <p style={{ color: '#e2e8f0', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{f.q}</p>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#f1f5f9', marginBottom: '1rem' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.7 }}>
            Get a free consultation and quote. We reply within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
              style={{ padding: '0.85rem 1.75rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', color: '#22c55e', fontWeight: 700, textDecoration: 'none' }}>
              💬 WhatsApp Now
            </a>
            <Link href="/contact"
              style={{ padding: '0.85rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontFamily: 'Syne, sans-serif' }}>
              Contact Form →
            </Link>
          </div>
          <p style={{ color: '#334155', fontSize: '0.78rem', marginTop: '1.25rem' }}>
            📧 info@thetechgenai.com · 📱 +91 98704 05692 · 📍 India
          </p>
        </div>
      </section>

    </Layout>
  )
}