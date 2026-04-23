import Layout from '../components/Layout'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy | TheTechGenAI"
      description="Privacy Policy for TheTechGenAI — how we collect, use and protect your data."
      canonical="https://thetechgenai.com/privacy-policy"
    >
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ color: '#0ea5e9', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Legal</span>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f1f5f9', lineHeight: 1.2, margin: '0.5rem 0 0.5rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Last updated: April 2026</p>
        </div>

        <div className="article-content" style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem' }}>

          <p>Welcome to <strong style={{ color: '#f1f5f9' }}>TheTechGenAI</strong> ("we", "our", or "us"), operated by <strong style={{ color: '#f1f5f9' }}>Piyush Goel</strong>, based in India. We operate the website <strong style={{ color: '#f1f5f9' }}>thetechgenai.com</strong>.</p>

          <p>This Privacy Policy explains how we collect, use, and protect information when you visit our website or use our digital services. By using our website, you agree to the terms of this policy.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#f1f5f9' }}>Contact Information:</strong> When you fill out our contact form, we collect your name, email address, phone number, and project details. This information is used solely to respond to your enquiry.</li>
            <li><strong style={{ color: '#f1f5f9' }}>Usage Data:</strong> We collect anonymous data about how visitors use our website, including pages visited, time on site, and device information, through Google Analytics.</li>
            <li><strong style={{ color: '#f1f5f9' }}>Cookies:</strong> Our website uses cookies to improve your experience and serve relevant advertisements through Google AdSense.</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Respond to your enquiries and provide digital services</li>
            <li>Improve our website content and user experience</li>
            <li>Analyse website traffic and performance via Google Analytics</li>
            <li>Display relevant advertisements via Google AdSense</li>
            <li>Contact you regarding your project or service request</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Google AdSense and Advertising</h2>
          <p>We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet.</p>
          <p>You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Google Ads Settings</a> or <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>aboutads.info</a>.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Google Analytics</h2>
          <p>We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as your IP address, browser type, pages visited, and time spent on our site. This data is anonymised and used only for improving our website. You can opt out by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Google Analytics Opt-out Browser Add-on</a>.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#f1f5f9' }}>Essential Cookies:</strong> Required for the website to function properly.</li>
            <li><strong style={{ color: '#f1f5f9' }}>Analytics Cookies:</strong> Used by Google Analytics to track anonymous usage data.</li>
            <li><strong style={{ color: '#f1f5f9' }}>Advertising Cookies:</strong> Used by Google AdSense to show relevant advertisements.</li>
          </ul>
          <p>You can control cookies through your browser settings. Disabling cookies may affect the functionality of some parts of our website.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>6. Third-Party Services</h2>
          <p>We use the following third-party services that may collect data:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#f1f5f9' }}>Google Analytics</strong> — Website analytics</li>
            <li><strong style={{ color: '#f1f5f9' }}>Google AdSense</strong> — Advertising</li>
            <li><strong style={{ color: '#f1f5f9' }}>Formspree</strong> — Contact form processing</li>
            <li><strong style={{ color: '#f1f5f9' }}>Cloudflare</strong> — Website hosting and security</li>
            <li><strong style={{ color: '#f1f5f9' }}>Unsplash</strong> — Stock photography</li>
          </ul>
          <p>Each of these services has its own privacy policy governing how they use data.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>7. Data Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information only:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>With service providers who assist us in operating our website</li>
            <li>When required by law or to protect our legal rights</li>
            <li>With your explicit consent</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>8. Data Security</h2>
          <p>We take reasonable precautions to protect your personal information. Our website is hosted on Cloudflare with SSL encryption. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>9. Your Rights</h2>
          <p>You have the right to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p>To exercise these rights, contact us via WhatsApp at <strong style={{ color: '#f1f5f9' }}>+91 98704 05692</strong> or through our <Link href="/contact" style={{ color: '#0ea5e9' }}>contact page</Link>.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>10. Children's Privacy</h2>
          <p>Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the "Last updated" date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#f1f5f9' }}>Website:</strong> thetechgenai.com</li>
            <li><strong style={{ color: '#f1f5f9' }}>WhatsApp:</strong> +91 98704 05692</li>
            <li><strong style={{ color: '#f1f5f9' }}>Founder:</strong> Piyush Goel</li>
            <li><strong style={{ color: '#f1f5f9' }}>Location:</strong> India</li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}
