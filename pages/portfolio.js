import Layout from '../components/Layout'
import Link from 'next/link'

const projects = [
  {
    title: 'The Grand Spice — Restaurant Website',
    category: 'Restaurant',
    badge: 'badge-money',
    desc: 'A fully responsive restaurant website with online menu, table booking system, and Google Maps integration. Built with Next.js and AI-powered chatbot for reservations.',
    tags: ['Next.js', 'Booking System', 'AI Chatbot', 'SEO'],
    color: '#f97316',
    emoji: '🍽️',
    results: ['300% increase in online bookings', 'Page 1 Google ranking in 3 months', 'Mobile conversion rate up 180%'],
  },
  {
    title: 'Azure Stays — Hotel Booking Platform',
    category: 'Hotel',
    badge: 'badge-ai',
    desc: 'Premium hotel website with real-time room availability, online payment integration, and multi-language support. AI-driven pricing recommendations built in.',
    tags: ['Hotel Booking', 'Payment Gateway', 'Multi-language', 'AI Pricing'],
    color: '#0ea5e9',
    emoji: '🏨',
    results: ['Direct bookings up 250%', 'OTA commission saved ₹8L/year', 'TripAdvisor score improved to 4.8'],
  },
  {
    title: 'FreshMart — E-Commerce Store',
    category: 'E-Commerce',
    badge: 'badge-tech',
    desc: 'Online grocery store with smart product recommendations, inventory management, and WhatsApp order notifications. Handles 500+ orders daily.',
    tags: ['E-Commerce', 'WhatsApp API', 'Inventory', 'AI Recommendations'],
    color: '#00ff88',
    emoji: '🛒',
    results: ['₹2.5L monthly revenue in 60 days', 'Cart abandonment down 40%', '500+ daily orders automated'],
  },
  {
    title: 'DriveKing — Auto Dealership Site',
    category: 'Automotive',
    badge: 'badge-gadgets',
    desc: 'Car dealership website with AI-powered search, EMI calculator, test drive booking, and inventory management synced in real time.',
    tags: ['Next.js', 'AI Search', 'EMI Calculator', 'CRM Integration'],
    color: '#c084fc',
    emoji: '🚗',
    results: ['Test drive bookings up 400%', 'Lead conversion improved 3x', 'SEO traffic grew 600% in 4 months'],
  },
  {
    title: 'MindSpace — Wellness Brand',
    category: 'Health & Wellness',
    badge: 'badge-tools',
    desc: 'Complete digital brand identity and website for a yoga and wellness studio. Includes class booking, instructor profiles, and AI-powered wellness chatbot.',
    tags: ['Brand Identity', 'Booking System', 'SEO', 'AI Chatbot'],
    color: '#fb923c',
    emoji: '🧘',
    results: ['Class bookings fully automated', 'Instagram following grew 800%', 'Monthly revenue doubled in 3 months'],
  },
  {
    title: 'TechCraft Academy — Ed-Tech Platform',
    category: 'Education',
    badge: 'badge-ai',
    desc: 'Online learning platform with video courses, progress tracking, certificates, and AI-powered doubt resolution system for students.',
    tags: ['LMS Platform', 'Video Hosting', 'AI Tutor', 'Certificate System'],
    color: '#0ea5e9',
    emoji: '🎓',
    results: ['500 students enrolled in first month', 'Course completion rate 78%', 'Revenue ₹12L in first quarter'],
  },
]

export default function Portfolio() {
  return (
    <Layout
      title="Portfolio — AI Websites & Digital Projects | TheTechGenAI"
      description="See our work — AI-powered websites for restaurants, hotels, e-commerce stores, and more. Real projects, real results."
      canonical="https://thetechgenai.com/portfolio"
    >
      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#00ff88', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Our Work</span>
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem' }}>
          Real Projects.<br />
          <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Real Results.</span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          From restaurants to hotels, e-commerce to education — here is a look at what we have built for our clients using AI and modern web technology.
        </p>
        <Link href="/contact" style={{ padding: '0.85rem 2rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
          Start Your Project →
        </Link>
      </section>

      {/* Projects */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p) => (
            <div key={p.title} className="card-hover" style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', overflow: 'hidden' }}>
              {/* Card Header */}
              <div style={{ background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)`, borderBottom: '1px solid #1e2a38', padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '2.5rem', lineHeight: 1 }}>{p.emoji}</div>
                <div>
                  <span className={p.badge} style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    {p.category}
                  </span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.3, marginTop: '0.4rem' }}>{p.title}</h3>
                </div>
              </div>
              {/* Card Body */}
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{p.desc}</p>
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
                  <p style={{ color: '#00ff88', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontFamily: 'JetBrains Mono, monospace' }}>Results</p>
                  {p.results.map(r => (
                    <p key={r} style={{ color: '#94a3b8', fontSize: '0.82rem', padding: '0.2rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: p.color, marginTop: '2px', flexShrink: 0 }}>→</span> {r}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #1e2a38', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#f1f5f9', marginBottom: '1rem' }}>
            Want Results Like These?
          </h2>
          <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.7 }}>
            Tell us about your business and we will show you exactly how we can help. Free consultation — no strings attached.
          </p>
          <Link href="/contact" style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
            Get Free Consultation →
          </Link>
        </div>
      </section>
    </Layout>
  )
}
