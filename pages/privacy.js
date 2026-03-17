import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout title="Privacy Policy" description="TheTechGenAI Privacy Policy">
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: '#475569', marginBottom: '2rem' }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <div className="article-content">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly (such as through contact forms) and information collected automatically (such as through cookies and analytics tools).</p>
          <h2>How We Use Information</h2>
          <p>We use the information we collect to operate and improve our website, respond to your messages, and understand how visitors use our site.</p>
          <h2>Google AdSense</h2>
          <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to this and other websites. You may opt out of personalized advertising by visiting Google's Ads Settings.</p>
          <h2>Google Analytics</h2>
          <p>We use Google Analytics to understand site traffic. This service may collect information such as your IP address and browser type.</p>
          <h2>Cookies</h2>
          <p>We use cookies to improve your experience. You can disable cookies in your browser settings, though this may affect site functionality.</p>
          <h2>Third-Party Links</h2>
          <p>Our site may contain links to third-party websites. We are not responsible for their privacy practices.</p>
          <h2>Contact</h2>
          <p>If you have questions about this privacy policy, please contact us at hello@thetechgenai.com.</p>
        </div>
      </div>
    </Layout>
  )
}
