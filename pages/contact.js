import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Replace xpwzgkqr with YOUR Formspree form ID
      const res = await fetch('https://formspree.io/f/xpwzgkqr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          _subject: `New Enquiry from ${form.name} — ${form.service}`,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: '#080d14',
    border: '1px solid #1e2a38',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: '#f1f5f9',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  }
  const labelStyle = {
    color: '#475569',
    fontSize: '0.78rem',
    fontWeight: 600,
    display: 'block',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  }

  return (
    <Layout
      title="Contact Us — TheTechGenAI Digital Services"
      description="Contact Piyush Goel at TheTechGenAI for AI websites, digital marketing, and business solutions. Free consultation available."
      canonical="https://thetechgenai.com/contact"
    >
      <section style={{ maxWidth: '950px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: '#0ea5e9', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem' }}>
            Let's Build Something<br />
            <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Together
            </span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Tell us about your project and we will get back to you within 24 hours with a free consultation and quote.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '2rem', alignItems: 'start' }}>

          {/* Left — Founder Info + Contact */}
          <div>
            {/* Founder Card */}
            <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.75rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid #1e2a38' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#080d14', flexShrink: 0 }}>
                  PG
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>Piyush Goel</h3>
                  <p style={{ color: '#0ea5e9', fontSize: '0.78rem', fontWeight: 600 }}>Founder — TheTechGenAI</p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919870405692?text=Hi%20Piyush!%20I%20found%20TheTechGenAI%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#0a1a0a', border: '1px solid #166534', borderRadius: '10px', padding: '0.9rem 1rem', textDecoration: 'none', marginBottom: '0.75rem' }}
              >
                <span style={{ fontSize: '1.4rem' }}>💬</span>
                <div>
                  <p style={{ color: '#22c55e', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.1rem' }}>WHATSAPP</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>+91 98704 05692</p>
                </div>
              </a>

              {[
                { icon: '🌐', label: 'Website', value: 'thetechgenai.com' },
                { icon: '📍', label: 'Location', value: 'India (Serving Globally)' },
                { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '1rem', marginTop: '2px' }}>{c.icon}</span>
                  <div>
                    <p style={{ color: '#475569', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.1rem' }}>{c.label}</p>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>What We Offer</h3>
              {[
                'AI-Driven Websites',
                'Digital Marketing & SEO',
                'Restaurant & Hotel Sites',
                'E-Commerce Stores',
                'Brand Identity & Design',
                'AI Automation',
              ].map(s => (
                <p key={s} style={{ color: '#64748b', fontSize: '0.83rem', padding: '0.3rem 0', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#00ff88', fontSize: '0.7rem', flexShrink: 0 }}>✓</span> {s}
                </p>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '2rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#00ff88', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  Message Sent!
                </h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>
                  Thank you! Piyush will get back to you within 24 hours. You can also reach us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919870405692"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: '#166534', border: '1px solid #22c55e', borderRadius: '8px', color: '#22c55e', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Send Us a Message
                </h3>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>

                {/* Phone + Service */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>WhatsApp / Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Service Needed *</label>
                    <select name="service" value={form.service} onChange={handleChange} required
                      style={{ ...inputStyle, color: form.service ? '#f1f5f9' : '#475569' }}>
                      <option value="">Select service...</option>
                      <option>AI-Driven Website</option>
                      <option>Digital Marketing</option>
                      <option>Restaurant Website</option>
                      <option>Hotel Website</option>
                      <option>E-Commerce Store</option>
                      <option>Brand Identity</option>
                      <option>AI Automation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Tell Us About Your Project *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Describe your business, what you need, your budget, and any specific requirements..."
                    style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '1rem', background: '#1a0a0a', padding: '0.75rem', borderRadius: '8px' }}>
                    Something went wrong. Please try WhatsApp instead.
                  </p>
                )}

                <button type="submit" disabled={status === 'sending'}
                  style={{ width: '100%', padding: '0.9rem', background: status === 'sending' ? '#1e2a38' : 'linear-gradient(135deg, #0ea5e9, #0284c7)', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 700, fontSize: '1rem', cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontFamily: 'Syne, sans-serif' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>

                <p style={{ color: '#475569', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.75rem' }}>
                  Or reach us directly on WhatsApp — +91 98704 05692
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
