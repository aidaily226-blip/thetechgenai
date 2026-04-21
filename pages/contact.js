import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      // ⚠️ Replace YOUR_FORM_ID below with ID from formspree.io
      const res = await fetch('https://formspree.io/f/xlgawabl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `🚀 New Enquiry: ${form.service} from ${form.name}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Service: form.service,
          Budget: form.budget,
          Message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const input = {
    width: '100%', background: '#080d14', border: '1px solid #1e2a38',
    borderRadius: '8px', padding: '0.75rem 1rem', color: '#f1f5f9',
    fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
  }
  const label = {
    color: '#475569', fontSize: '0.74rem', fontWeight: 700, display: 'block',
    marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em',
  }

  return (
    <Layout
      title="Contact Us — Get a Free Quote | TheTechGenAI"
      description="Contact Piyush Goel at TheTechGenAI for AI websites, digital marketing, restaurant sites and business solutions. Free consultation."
      canonical="https://thetechgenai.com/contact"
    >
      <section style={{ maxWidth: '980px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: '#0ea5e9', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Free Consultation</span>
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem' }}>
            Let's Build Something<br />
            <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Great Together</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Fill the form below or WhatsApp us directly. We reply within 24 hours with a free quote.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* Left — Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Founder */}
            <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem', paddingBottom: '1.1rem', borderBottom: '1px solid #1e2a38' }}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#080d14', flexShrink: 0 }}>PG</div>
                <div>
                  <p style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>Piyush Goel</p>
                  <p style={{ color: '#0ea5e9', fontSize: '0.75rem', fontWeight: 600 }}>Founder, TheTechGenAI</p>
                </div>
              </div>

              {/* WhatsApp button */}
              <a href="https://wa.me/919870405692?text=Hi%20Piyush!%20I%20visited%20TheTechGenAI%20and%20want%20to%20discuss%20a%20project."
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '10px', padding: '0.85rem 1rem', textDecoration: 'none', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '1.3rem' }}>💬</span>
                <div>
                  <p style={{ color: '#22c55e', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.1rem' }}>WHATSAPP — FASTEST REPLY</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>+91 98704 05692</p>
                </div>
              </a>

              {[
                { icon: '📍', label: 'Location', val: 'India (Global)' },
                { icon: '⏰', label: 'Response', val: 'Within 24 hours' },
                { icon: '🌐', label: 'Website', val: 'thetechgenai.com' },
              ].map(i => (
                <div key={i.label} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.95rem', marginTop: '2px' }}>{i.icon}</span>
                  <div>
                    <p style={{ color: '#334155', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{i.label}</p>
                    <p style={{ color: '#64748b', fontSize: '0.82rem' }}>{i.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services we offer */}
            <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.5rem' }}>
              <p style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.85rem' }}>What We Offer</p>
              {[
                '🌐  AI-Driven Websites',
                '📈  Digital Marketing & SEO',
                '🍽️  Restaurant & Hotel Sites',
                '🛒  E-Commerce Stores',
                '🎨  Brand Identity & Design',
                '🤖  AI Automation',
              ].map(s => (
                <p key={s} style={{ color: '#475569', fontSize: '0.82rem', padding: '0.25rem 0' }}>{s}</p>
              ))}
              <Link href="/services" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#0ea5e9', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>
                View all services →
              </Link>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '2rem' }}>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#00ff88', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.75rem' }}>Message Received!</h2>
                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you for reaching out! Piyush will personally review your message and reply within 24 hours. For faster response, WhatsApp us directly.
                </p>
                <a href="https://wa.me/919870405692" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', color: '#22c55e', fontWeight: 600, textDecoration: 'none' }}>
                  💬 Chat on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                  Send Us Your Project Details
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={label}>Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Rahul Sharma" style={input} />
                    </div>
                    <div>
                      <label style={label}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="rahul@gmail.com" style={input} />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={label}>WhatsApp / Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={input} />
                    </div>
                    <div>
                      <label style={label}>Service Needed *</label>
                      <select name="service" value={form.service} onChange={handleChange} required style={{ ...input, color: form.service ? '#f1f5f9' : '#475569' }}>
                        <option value="">Choose a service...</option>
                        <option>AI-Driven Website</option>
                        <option>Digital Marketing & SEO</option>
                        <option>Restaurant Website</option>
                        <option>Hotel Website</option>
                        <option>E-Commerce Store</option>
                        <option>Brand Identity & Logo</option>
                        <option>AI Automation</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={label}>Approximate Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange} style={{ ...input, color: form.budget ? '#f1f5f9' : '#475569' }}>
                      <option value="">Select budget range...</option>
                      <option>Under ₹15,000</option>
                      <option>₹15,000 – ₹30,000</option>
                      <option>₹30,000 – ₹60,000</option>
                      <option>₹60,000 – ₹1,00,000</option>
                      <option>Above ₹1,00,000</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={label}>Tell Us About Your Business & Project *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Describe your business, what kind of website you need, your target customers, any specific features, and your timeline..."
                      style={{ ...input, resize: 'vertical' }} />
                  </div>

                  {status === 'error' && (
                    <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
                      <p style={{ color: '#f87171', fontSize: '0.85rem' }}>
                        Something went wrong. Please try WhatsApp: <a href="https://wa.me/919870405692" style={{ color: '#22c55e' }}>+91 98704 05692</a>
                      </p>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    style={{ width: '100%', padding: '0.95rem', background: status === 'sending' ? '#1e2a38' : 'linear-gradient(135deg, #0ea5e9, #0284c7)', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 700, fontSize: '1rem', cursor: status === 'sending' ? 'wait' : 'pointer', fontFamily: 'Syne, sans-serif', letterSpacing: '0.02em' }}>
                    {status === 'sending' ? '⏳ Sending...' : 'Send Message & Get Free Quote →'}
                  </button>

                  <p style={{ color: '#334155', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.85rem' }}>
                    🔒 Your information is private and secure. Or WhatsApp us at +91 98704 05692
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
