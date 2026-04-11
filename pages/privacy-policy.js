import Layout from '../components/Layout'

const sections = [
  {
    title: 'Information We Collect',
    color: '#00ff88',
    content: (
      <>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          <span style={{ color: '#94a3b8', fontWeight: 600 }}>Information You Provide:</span> When you contact us via email or our contact form, we may collect your name, email address, and the content of your message.
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
          <span style={{ color: '#94a3b8', fontWeight: 600 }}>Information Collected Automatically:</span> When you visit our site, we automatically collect your IP address, browser type, device type, pages visited, time on site, and general geographic location through cookies and similar technologies.
        </p>
      </>
    ),
  },
  {
    title: 'Cookies and Tracking',
    color: '#0ea5e9',
    content: (
      <>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          We use three types of cookies on our site:
        </p>
        {[
          { label: 'Essential Cookies', desc: 'Required for the website to function correctly. These cannot be disabled.' },
          { label: 'Analytics Cookies', desc: 'We use Google Analytics to understand how visitors use our site. Data is anonymous and aggregated.' },
          { label: 'Advertising Cookies', desc: 'We use Google AdSense to display ads. Google uses cookies to serve ads based on your prior visits to our and other websites.' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ color: '#0ea5e9', marginTop: '0.1rem' }}>→</span>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
              <span style={{ color: '#94a3b8', fontWeight: 600 }}>{item.label}:</span> {item.desc}
            </p>
          </div>
        ))}
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8, marginTop: '0.5rem' }}>
          You may opt out of personalised advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Google's Ads Settings</a>.
          You can also manage or disable cookies through your browser settings.
        </p>
      </>
    ),
  },
  {
    title: 'Google AdSense & Advertising',
    color: '#fbbf24',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        TheTechGenAI participates in the Google AdSense programme. Google, as a third-party vendor, uses cookies to serve ads on our site based on your visits to our site and other sites on the internet. You may opt out of personalised ads by visiting the{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Google Privacy Policy</a>.
        We do not control the content of advertisements and are not responsible for the privacy practices of third-party advertisers.
      </p>
    ),
  },
  {
    title: 'How We Use Your Information',
    color: '#c084fc',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {[
          'Operate and maintain our website',
          'Improve and personalise your experience',
          'Analyse how visitors use our site via Google Analytics',
          'Display relevant advertisements via Google AdSense',
          'Respond to your inquiries and messages',
          'Comply with legal obligations',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: '#00ff88' }}>✓</span>
            <span style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Children's Privacy",
    color: '#fb923c',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        TheTechGenAI is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately at{' '}
        <a href="mailto:contact@thetechgenai.com" style={{ color: '#0ea5e9' }}>contact@thetechgenai.com</a>{' '}
        and we will delete it promptly.
      </p>
    ),
  },
  {
    title: 'Your Rights',
    color: '#38bdf8',
    content: (
      <>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
          Depending on your location, you may have the right to access, correct, or delete your personal data, object to how we process it, or opt out of personalised ads.
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:contact@thetechgenai.com" style={{ color: '#0ea5e9' }}>contact@thetechgenai.com</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Changes to This Policy',
    color: '#00ff88',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. Continued use of our website after any changes constitutes your acceptance of the updated policy.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* Hero */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem 2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '0.3rem 1rem', marginBottom: '1.25rem' }}>
          <span style={{ width: '6px', height: '6px', background: '#00ff88', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ color: '#00ff88', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Last Updated: April 10, 2026</span>
        </div>

        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: 1.1, color: '#f1f5f9', marginBottom: '1rem' }}>
          Privacy{' '}
          <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Policy
          </span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
          This Privacy Policy explains how TheTechGenAI collects, uses, and protects your information when you visit thetechgenai.com.
        </p>
      </section>

      {/* Sections */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem 4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {sections.map((section, i) => (
          <div key={i} style={{ background: '#0d1117', borderRadius: '16px', padding: '1.75rem 2rem', border: '1px solid #1e2a38' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: section.color, marginBottom: '1rem' }}>
              {i + 1}. {section.title}
            </h2>
            {section.content}
          </div>
        ))}

        {/* Contact box */}
        <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(0,255,136,0.05))', borderRadius: '16px', padding: '1.75rem 2rem', border: '1px solid rgba(14,165,233,0.15)' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>Contact Us</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
            If you have any questions about this Privacy Policy, contact us at{' '}
            <a href="mailto:contact@thetechgenai.com" style={{ color: '#0ea5e9' }}>contact@thetechgenai.com</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
