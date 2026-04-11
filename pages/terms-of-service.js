import Layout from '../components/Layout'
import Link from 'next/link'

const sections = [
  {
    title: 'Acceptance of Terms',
    color: '#00ff88',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        By visiting thetechgenai.com, reading our articles, or interacting with our content in any way, you confirm that you have read, understood, and agree to these Terms of Service. We reserve the right to update or modify these Terms at any time. Continued use of the website after changes constitutes your acceptance of the updated Terms.
      </p>
    ),
  },
  {
    title: 'Use of the Website',
    color: '#0ea5e9',
    content: (
      <>
        <p style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Permitted Use</p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          You may use TheTechGenAI for personal, non-commercial purposes. You may read, share, and reference our content provided you give appropriate credit and link back to the original article on thetechgenai.com.
        </p>
        <p style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>You agree NOT to:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            'Copy or republish our articles in full without written permission',
            'Use our content for commercial purposes without prior written consent',
            'Use bots or scrapers to extract content from our website',
            'Attempt to hack, disrupt, or interfere with our website or servers',
            'Impersonate TheTechGenAI or any of its team members',
            'Use our website in any way that violates applicable law',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.1rem' }}>✕</span>
              <span style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Intellectual Property',
    color: '#c084fc',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        All content on TheTechGenAI — including articles, blog posts, graphics, logos, and the overall website design — is the property of TheTechGenAI and is protected by applicable copyright laws. You may share our articles on social media or quote short excerpts (up to 50 words) with credit and a link back. Full reproduction without written permission is strictly prohibited.
      </p>
    ),
  },
  {
    title: 'Disclaimer of Warranties',
    color: '#fb923c',
    content: (
      <>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          TheTechGenAI provides content for informational and educational purposes only. We make no warranties regarding the accuracy, completeness, or reliability of any information published on our website. Technology and AI move quickly — information accurate at publishing may become outdated.
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
          All content is provided <span style={{ color: '#94a3b8', fontWeight: 600 }}>"as is"</span> without warranty of any kind, express or implied.
        </p>
      </>
    ),
  },
  {
    title: 'Limitation of Liability',
    color: '#fbbf24',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        To the fullest extent permitted by law, TheTechGenAI and its owners, contributors, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website, any errors or omissions in our content, any decisions you make based on our content, or any third-party content linked from our site. You use our website entirely at your own risk.
      </p>
    ),
  },
  {
    title: 'Advertising Disclosure',
    color: '#38bdf8',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        TheTechGenAI participates in advertising programmes including Google AdSense. We may earn revenue when advertisements are displayed on our website. We are committed to editorial independence — advertising relationships do not influence the topics we cover or the opinions we express. Sponsored content, if any, will be clearly labelled as such.
      </p>
    ),
  },
  {
    title: 'Third-Party Links',
    color: '#00ff88',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        Our website may contain links to third-party websites. We do not endorse, control, or take responsibility for the content or privacy practices of any external websites. Clicking on third-party links is entirely at your own risk.
      </p>
    ),
  },
  {
    title: 'Privacy',
    color: '#0ea5e9',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        Your use of TheTechGenAI is also governed by our{' '}
        <Link href="/privacy-policy" style={{ color: '#0ea5e9' }}>Privacy Policy</Link>,
        which is incorporated into these Terms by reference. Please read it to understand how we collect, use, and protect your information.
      </p>
    ),
  },
  {
    title: 'Changes to These Terms',
    color: '#c084fc',
    content: (
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>
        We reserve the right to modify these Terms of Service at any time. Updated Terms will be posted on this page with a new "Last Updated" date. Your continued use of our website after any changes constitutes acceptance of the new Terms.
      </p>
    ),
  },
]

export default function TermsOfService() {
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
          Terms of{' '}
          <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Service
          </span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
          Please read these terms carefully before using thetechgenai.com. By accessing our website, you agree to be bound by these Terms of Service.
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
            If you have any questions about these Terms of Service, contact us at{' '}
            <a href="mailto:contact@thetechgenai.com" style={{ color: '#0ea5e9' }}>contact@thetechgenai.com</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
