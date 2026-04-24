import Layout from '../components/Layout'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <Layout
      title="Terms and Conditions | TheTechGenAI"
      description="Terms and Conditions for using TheTechGenAI website and digital services — operated by Piyush Goel, India."
      canonical="https://thetechgenai.com/terms"
    >
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ color: '#0ea5e9', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Legal</span>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f1f5f9', lineHeight: 1.2, margin: '0.5rem 0 0.5rem' }}>
            Terms and Conditions
          </h1>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Last updated: April 2026</p>
        </div>

        <div className="article-content" style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem' }}>

          <p>These Terms and Conditions govern your use of <strong style={{ color: '#f1f5f9' }}>TheTechGenAI</strong> ("we", "our", "us"), operated by <strong style={{ color: '#f1f5f9' }}>Piyush Goel</strong>, based in India. Our website is located at <strong style={{ color: '#f1f5f9' }}>thetechgenai.com</strong>.</p>

          <p>By accessing or using our website or digital services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. About TheTechGenAI</h2>
          <p>TheTechGenAI operates as both a technology media platform and a digital services company:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#f1f5f9' }}>Media Platform:</strong> We publish articles, news, reviews, and guides covering artificial intelligence, technology, gadgets, and online earning strategies. All content is for informational and educational purposes only.</li>
            <li><strong style={{ color: '#f1f5f9' }}>Digital Services:</strong> We offer services including AI-driven website development, digital marketing, brand design, restaurant and hotel website development, e-commerce solutions, and AI automation for businesses.</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Use of Website Content</h2>
          <p>All content published on TheTechGenAI — including articles, images, graphics, and code — is the intellectual property of TheTechGenAI and Piyush Goel unless otherwise stated.</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>You may read, share, and link to our content for personal, non-commercial purposes</li>
            <li>You may not copy, reproduce, or republish our articles in full without written permission</li>
            <li>Quoting short excerpts with proper attribution and a link back to our website is permitted</li>
            <li>Commercial use of our content without permission is strictly prohibited</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Digital Services Terms</h2>
          <p>When you engage TheTechGenAI for digital services, the following terms apply:</p>

          <h3 style={{ color: '#e2e8f0', fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3.1 Project Agreement</h3>
          <p>All service engagements begin with a written agreement via email or WhatsApp confirming the scope of work, timeline, deliverables, and payment terms. No work begins without mutual agreement on these terms.</p>

          <h3 style={{ color: '#e2e8f0', fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3.2 Payment Terms</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>A deposit of 50% is required before work begins on any project</li>
            <li>The remaining balance is due upon project completion before final delivery</li>
            <li>All payments are in Indian Rupees (INR) unless otherwise agreed</li>
            <li>Accepted payment methods include UPI, bank transfer, and other agreed methods</li>
            <li>Late payments may result in paused work until payment is received</li>
          </ul>

          <h3 style={{ color: '#e2e8f0', fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3.3 Revisions and Changes</h3>
          <p>Each project includes a reasonable number of revisions as agreed upfront. Additional revisions or changes to project scope beyond the agreed terms may incur additional charges. Any major change in project scope will require a revised agreement.</p>

          <h3 style={{ color: '#e2e8f0', fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3.4 Client Responsibilities</h3>
          <p>Clients are responsible for:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Providing accurate and complete information required for the project</li>
            <li>Supplying content, images, and materials in a timely manner</li>
            <li>Providing timely feedback during the review stages</li>
            <li>Ensuring they have rights to any content, logos, or materials they provide to us</li>
            <li>Domain registration and hosting fees unless otherwise agreed</li>
          </ul>

          <h3 style={{ color: '#e2e8f0', fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3.5 Delivery and Ownership</h3>
          <p>Upon receipt of final payment, the client receives full ownership of the completed website or deliverable. TheTechGenAI retains the right to display completed work in our portfolio unless the client requests otherwise in writing.</p>

          <h3 style={{ color: '#e2e8f0', fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3.6 Cancellation Policy</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>If the client cancels after work has begun, the deposit is non-refundable</li>
            <li>If TheTechGenAI cancels a project, any deposit paid will be fully refunded</li>
            <li>Cancellation must be communicated in writing via email or WhatsApp</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Disclaimer of Information</h2>
          <p>The articles and content published on TheTechGenAI are for <strong style={{ color: '#f1f5f9' }}>informational and educational purposes only</strong>. While we strive for accuracy:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>We do not guarantee that all information is complete, accurate, or up to date</li>
            <li>Technology news and AI developments change rapidly — some information may become outdated</li>
            <li>Nothing on this website constitutes financial, legal, medical, or professional advice</li>
            <li>Earnings figures and estimates mentioned in Make Money articles are examples only — results vary and are not guaranteed</li>
            <li>Always do your own research before making financial or business decisions</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Affiliate Links and Advertising</h2>
          <p>TheTechGenAI may contain:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#f1f5f9' }}>Google AdSense Advertisements:</strong> We display ads through Google AdSense. We do not control which ads appear and are not responsible for third-party advertiser content.</li>
            <li><strong style={{ color: '#f1f5f9' }}>Affiliate Links:</strong> Some articles may contain affiliate links. If you click and make a purchase, we may earn a small commission at no extra cost to you. We only recommend products we believe are genuinely useful.</li>
            <li><strong style={{ color: '#f1f5f9' }}>Sponsored Content:</strong> Any sponsored or paid content will be clearly disclosed.</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>6. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. These links are provided for your convenience. TheTechGenAI is not responsible for the content, accuracy, or privacy practices of any third-party websites. Visiting external links is at your own risk.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, TheTechGenAI and Piyush Goel shall not be liable for:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Any loss or damage resulting from use of our website content</li>
            <li>Business decisions made based on information published on our platform</li>
            <li>Technical issues, downtime, or interruption of our website</li>
            <li>Any indirect, incidental, or consequential damages arising from use of our services</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>8. User Conduct</h2>
          <p>When using our website or contacting us for services, you agree not to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Provide false or misleading information in any communication with us</li>
            <li>Attempt to hack, disrupt, or damage our website</li>
            <li>Use our content for any illegal or unauthorised purpose</li>
            <li>Spam or abuse our contact form</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>9. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of <strong style={{ color: '#f1f5f9' }}>India</strong>. Any disputes arising from these terms or your use of our website shall be subject to the jurisdiction of Indian courts.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>10. Changes to These Terms</h2>
          <p>We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. The "Last updated" date will be revised accordingly. Continued use of our website after changes means you accept the updated terms.</p>

          <h2 style={{ color: '#f1f5f9', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>11. Contact Us</h2>
          <p>For any questions regarding these Terms and Conditions or our services:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#f1f5f9' }}>Founder:</strong> Piyush Goel</li>
            <li><strong style={{ color: '#f1f5f9' }}>Website:</strong> thetechgenai.com</li>
            <li><strong style={{ color: '#f1f5f9' }}>WhatsApp:</strong> +91 98704 05692</li>
            <li><strong style={{ color: '#f1f5f9' }}>Location:</strong> India</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            You can also reach us through our <Link href="/contact" style={{ color: '#0ea5e9' }}>contact page</Link>.
          </p>

        </div>
      </article>
    </Layout>
  )
}
