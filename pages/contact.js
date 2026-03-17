import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="Contact Us" description="Get in touch with TheTechGenAI team.">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
          Contact <span style={{ color: '#00ff88' }}>Us</span>
        </h1>
        <p style={{ color: '#64748b', marginBottom: '3rem' }}>Have a tip, question or want to collaborate? We'd love to hear from you.</p>

        <div style={{ background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '16px', padding: '2rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>Your Name</label>
            <input type="text" placeholder="John Doe" style={{ width: '100%', background: '#080c10', border: '1px solid #1e2a38', borderRadius: '8px', padding: '0.75rem 1rem', color: '#e2e8f0', fontSize: '0.95rem', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
            <input type="email" placeholder="john@example.com" style={{ width: '100%', background: '#080c10', border: '1px solid #1e2a38', borderRadius: '8px', padding: '0.75rem 1rem', color: '#e2e8f0', fontSize: '0.95rem', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
            <textarea rows={5} placeholder="Your message..." style={{ width: '100%', background: '#080c10', border: '1px solid #1e2a38', borderRadius: '8px', padding: '0.75rem 1rem', color: '#e2e8f0', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }} />
          </div>
          <button style={{ width: '100%', padding: '0.875rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
            Send Message
          </button>
          <p style={{ color: '#475569', fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem' }}>
            Or email us directly at: <span style={{ color: '#0ea5e9' }}>hello@thetechgenai.com</span>
          </p>
        </div>
      </div>
    </Layout>
  )
}
