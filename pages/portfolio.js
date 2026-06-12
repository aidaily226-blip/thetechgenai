import Layout from '../components/Layout'
import Link from 'next/link'

const projects = [
  {
    emoji: '🍽️',
    title: 'The Grand Spice',
    category: 'Restaurant Website',
    color: '#f97316',
    tags: ['Next.js', 'Online Menu', 'Booking System', 'SEO'],
    desc: 'Complete restaurant website with online menu, table booking system, Google Maps integration and WhatsApp ordering. Built for maximum mobile conversions.',
    results: [
      '300% increase in online bookings',
      'Page 1 Google ranking in 3 months',
      'Mobile conversion rate up 180%',
    ],
  },
  {
    emoji: '🏨',
    title: 'Azure Stays',
    category: 'Hotel Booking Platform',
    color: '#0ea5e9',
    tags: ['Hotel Booking', 'Payment Gateway', 'AI Pricing', 'Multi-language'],
    desc: 'Premium hotel website with real-time room availability, online payment integration, and AI-driven pricing recommendations. Supports 3 languages.',
    results: [
      'Direct bookings up 250%',
      'OTA commission saved ₹8L/year',
      'TripAdvisor score improved to 4.8',
    ],
  },
  {
    emoji: '🛒',
    title: 'FreshMart',
    category: 'E-Commerce Store',
    color: '#00ff88',
    tags: ['E-Commerce', 'WhatsApp API', 'Inventory', 'AI Recommendations'],
    desc: 'Online grocery store with smart product recommendations, automated inventory management, and WhatsApp order notifications. Handles 500+ orders daily.',
    results: [
      '₹2.5L monthly revenue in 60 days',
      'Cart abandonment down 40%',
      '500+ daily orders automated',
    ],
  },
  {
    emoji: '🚗',
    title: 'DriveKing',
    category: 'Auto Dealership',
    color: '#c084fc',
    tags: ['Next.js', 'AI Search', 'EMI Calculator', 'CRM Integration'],
    desc: 'Car dealership website with AI-powered search, EMI calculator, test drive booking and real-time inventory management synced with showroom.',
    results: [
      'Test drive bookings up 400%',
      'Lead conversion improved 3x',
      'SEO traffic grew 600% in 4 months',
    ],
  },
  {
    emoji: '🧘',
    title: 'MindSpace',
    category: 'Wellness Brand',
    color: '#fb923c',
    tags: ['Brand Identity', 'Booking System', 'SEO', 'AI Chatbot'],
    desc: 'Complete digital brand identity and website for a yoga and wellness studio. Includes class booking, instructor profiles and AI-powered wellness chatbot.',
    results: [
      'Class bookings fully automated',
      'Instagram following grew 800%',
      'Monthly revenue doubled in 3 months',
    ],
  },
  {
    emoji: '🎓',
    title: 'TechCraft Academy',
    category: 'Ed-Tech Platform',
    color: '#38bdf8',
    tags: ['LMS', 'Video Hosting', 'AI Tutor', 'Certificates'],
    desc: 'Online learning platform with video courses, progress tracking, certificates and AI-powered doubt resolution system for students.',
    results: [
      '500 students enrolled in first month',
      'Course completion rate 78%',
      'Revenue ₹12L in first quarter',
    ],
  },
]

const techStack = [
  { name: 'Next.js', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Claude AI', icon: '🤖' },
  { name: 'ChatGPT API', icon: '💬' },
  { name: 'Cloudflare', icon: '☁️' },
  { name: 'Razorpay', icon: '💳' },
  { name: 'WhatsApp API', icon: '📱' },
  { name: 'Google SEO', icon: '🔍' },
]

export default function Portfolio() {
  return (
    <Layout
      title="Portfolio — AI Websites & Digital Projects | TheTechGenAI Studios"
      description="See our work — AI-powered websites for restaurants, hotels, e-commerce and more. Real projects with real results from TheTechGenAI Studios."
      canonical="https://thetechgenai.com/portfolio"
    >

      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#00ff88', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Our Work</span>
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem' }}>
          Real Projects.<br />
          <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Real Results.
          </span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '550px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          From restaurants to hotels, e-commerce to education — here is what we have built for our clients using AI and modern web technology.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919870405692?text=Hi%20Piyush!%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20my%20project."
            target="_blank" rel="noopener noreferrer"
            style={{ padding: '0.85rem 1.75rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', color: '#22c55e', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
            💬 Discuss Your Project
          </a>
          <Link href="/contact"
            style={{ padding: '0.85rem 1.75rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Syne, sans-serif' }}>
            Get Free Quote →
          </Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 1.5rem 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {projects.map(p => (
            <div key={p.title} className="card-hover"
              style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', overflow: 'hidden' }}>

              {/* Top color bar */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

              {/* Header */}
              <div style={{ background: `linear-gradient(135deg, ${p.color}10, transparent)`, borderBottom: '1px solid #1e2a38', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>{p.emoji}</div>
                <div>
                  <span style={{ background: `${p.color}20`, border: `1px solid ${p.color}30`, color: p.color, fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                    {p.category}
                  </span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1.05rem', marginTop: '0.35rem', lineHeight: 1.3 }}>{p.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ background: '#080d14', border: '1px solid #1e2a38', color: '#475569', padding: '0.2rem 0.6rem', borderRadius: '100px', fontSize: '0.72rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div style={{ borderTop: '1px solid #1e2a38', paddingTop: '1rem' }}>
                  <p style={{ color: '#00ff88', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    Results Achieved
                  </p>
                  {p.results.map(r => (
                    <p key={r} style={{ color: '#94a3b8', fontSize: '0.82rem', padding: '0.22rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: p.color, flexShrink: 0, marginTop: '1px' }}>→</span> {r}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', borderBottom: '1px solid #1e2a38', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.5rem', fontFamily: 'JetBrains Mono, monospace' }}>
            Technologies We Use
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {techStack.map(t => (
              <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#080d14', border: '1px solid #1e2a38', borderRadius: '100px', padding: '0.5rem 1rem', color: '#64748b', fontSize: '0.82rem', fontWeight: 500 }}>
                <span>{t.icon}</span> {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '650px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#f1f5f9', marginBottom: '1rem' }}>
          Want Results Like These?
        </h2>
        <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.7 }}>
          Tell us about your business and we will show you exactly how we can help. Free consultation — no strings attached.
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