import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout title="About Us" description="Learn about TheTechGenAI — your daily source for AI news, tech updates and gadget reviews.">
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#f1f5f9', marginBottom: '1rem' }}>
          About <span style={{ color: '#00ff88' }}>TheTechGenAI</span>
        </h1>
        <div className="article-content">
          <p>Welcome to <strong>TheTechGenAI</strong> — your daily destination for the latest in AI news, tech updates, gadget reviews, and practical guides on making money with technology.</p>
          <h2>Our Mission</h2>
          <p>We believe technology should be understandable for everyone — not just engineers and developers. Our mission is to explain the latest AI and tech developments in simple, clear English that anyone can understand and act on.</p>
          <h2>What We Cover</h2>
          <p>We cover five key areas: AI News (latest model launches, company updates), Tech (Apple, Google, Microsoft news), Gadgets (honest reviews and buying guides), AI Tools (best free and paid tools reviewed), and Make Money (practical ways to earn using AI and tech skills).</p>
          <h2>Our Target Audience</h2>
          <p>We write for curious people aged 18-40 who want to stay ahead of the technology curve — whether you're a student, professional, entrepreneur, or just someone who loves tech.</p>
          <h2>Contact Us</h2>
          <p>Have a tip, suggestion, or want to collaborate? <Link href="/contact">Get in touch with us</Link>.</p>
        </div>
      </div>
    </Layout>
  )
}
