import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/posts'

const badgeFor = (c = '') => ({
  'ai news': 'badge-ai', 'tech': 'badge-tech', 'gadgets': 'badge-gadgets',
  'ai tools': 'badge-tools', 'make money': 'badge-money',
}[c.toLowerCase()] || 'badge-tech')

const fmt = d => {
  const t = new Date(d)
  return isNaN(t) ? d : t.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function Badge({ category }) {
  return (
    <span className={badgeFor(category)} style={{ padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
      {category}
    </span>
  )
}

function Card({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="bl-card">
      <article>
        <div className="bl-thumb">
          {post.image
            ? <img src={post.image} alt={post.title} loading="lazy" />
            : <div className="bl-ph" />}
        </div>
        <div className="bl-body">
          <Badge category={post.category} />
          <h2 className="bl-title">{post.title}</h2>
          {post.excerpt && <p className="bl-excerpt">{post.excerpt}</p>}
          <div className="bl-meta">
            <time dateTime={post.date}>{fmt(post.date)}</time>
            {post.readingTime && <><span>·</span><span>{post.readingTime}</span></>}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function Blog({ posts }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))]
  const count = c => (c === 'All' ? posts.length : posts.filter(p => p.category === c).length)

  const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
  const filtered = posts.filter(p => {
    if (cat !== 'All' && p.category !== cat) return false
    if (!terms.length) return true
    const text = `${p.title} ${p.excerpt || ''} ${p.category || ''} ${(p.tags || []).join(' ')}`.toLowerCase()
    return terms.every(t => text.includes(t))
  })

  const browsing = cat === 'All' && !terms.length
  const featured = browsing ? filtered[0] : null
  const grid = featured ? filtered.slice(1) : filtered

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog | TheTechGenAI',
    url: 'https://thetechgenai.com/blog',
    description: 'AI news, tech updates, gadget reviews and guides to make money with technology.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 20).map((p, i) => ({
        '@type': 'ListItem', position: i + 1, url: `https://thetechgenai.com/blog/${p.slug}`, name: p.title,
      })),
    },
  }

  return (
    <Layout
      title="Blog - AI News, Tech Updates & Gadget Reviews"
      description="Read the latest AI news, tech updates, gadget reviews and guides to make money with AI tools. Simple explanations, updated regularly."
      canonical="https://thetechgenai.com/blog/"
    >
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </Head>

      <div className="bl-wrap">
        <header className="bl-head">
          <p className="bl-eyebrow">The Blog</p>
          <h1>AI, Tech & Gadget <span>Insights</span></h1>
          <p className="bl-sub">Clear, practical coverage of AI news, new gadgets and smart ways to earn with technology.</p>
          <input
            type="search"
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="bl-search"
          />
        </header>

        <nav className="bl-cats" aria-label="Categories">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)} className={c === cat ? 'on' : ''}>
              {c} <small>{count(c)}</small>
            </button>
          ))}
        </nav>

        {!browsing && (
          <p className="bl-count">{filtered.length} result{filtered.length === 1 ? '' : 's'}{terms.length ? ` for "${q}"` : ''}{cat !== 'All' ? ` in ${cat}` : ''}</p>
        )}

        {featured && (
          <Link href={`/blog/${featured.slug}`} className="bl-feat">
            <article>
              <div className="bl-feat-img">
                {featured.image ? <img src={featured.image} alt={featured.title} /> : <div className="bl-ph" />}
              </div>
              <div className="bl-feat-body">
                <div className="bl-flag">Latest article</div>
                <Badge category={featured.category} />
                <h2>{featured.title}</h2>
                {featured.excerpt && <p>{featured.excerpt}</p>}
                <div className="bl-meta">
                  <time dateTime={featured.date}>{fmt(featured.date)}</time>
                  {featured.readingTime && <><span>·</span><span>{featured.readingTime}</span></>}
                </div>
                <span className="bl-read">Read article →</span>
              </div>
            </article>
          </Link>
        )}

        <section className="bl-grid" aria-label="Articles">
          {grid.map(p => <Card key={p.slug} post={p} />)}
        </section>

        {filtered.length === 0 && (
          <div className="bl-empty">
            <p>No articles match your search.</p>
            <button onClick={() => { setQ(''); setCat('All') }}>Clear filters</button>
          </div>
        )}
      </div>

      <style jsx global>{`
        .bl-wrap { max-width: 1200px; margin: 0 auto; padding: 3rem 1.25rem 4rem; }
        .bl-head { text-align: center; max-width: 720px; margin: 0 auto 2rem; }
        .bl-eyebrow { color: #00ff88; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; }
        .bl-head h1 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.12; color: #f1f5f9; margin-bottom: 0.9rem; }
        .bl-head h1 span { background: linear-gradient(135deg, #0ea5e9, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .bl-sub { color: #64748b; font-size: 1.02rem; line-height: 1.65; margin-bottom: 1.5rem; }
        .bl-search { width: 100%; max-width: 520px; padding: 0.85rem 1.4rem; background: #0d1117; border: 1px solid #1e2a38; border-radius: 100px; color: #e2e8f0; font-size: 1rem; outline: none; transition: border-color .2s; }
        .bl-search:focus { border-color: #0ea5e9; }

        .bl-cats { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
        .bl-cats button { background: #0d1117; border: 1px solid #1e2a38; color: #94a3b8; padding: 0.45rem 0.95rem; border-radius: 100px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all .15s; }
        .bl-cats button small { color: #475569; margin-left: 0.25rem; font-weight: 500; }
        .bl-cats button:hover { border-color: #0ea5e9; color: #e2e8f0; }
        .bl-cats button.on { background: #0ea5e9; border-color: #0ea5e9; color: #fff; }
        .bl-cats button.on small { color: rgba(255,255,255,0.8); }
        .bl-count { color: #64748b; font-size: 0.88rem; margin-bottom: 1.25rem; }

        .bl-feat, .bl-card { text-decoration: none; display: block; }
        .bl-feat article { display: grid; grid-template-columns: 1fr; background: #0d1117; border: 1px solid #1e2a38; border-radius: 16px; overflow: hidden; margin-bottom: 2rem; transition: transform .2s, border-color .2s; }
        .bl-feat:hover article, .bl-card:hover article { transform: translateY(-3px); border-color: #0ea5e9; }
        .bl-feat-img { aspect-ratio: 16/9; overflow: hidden; }
        .bl-feat-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bl-feat-body { padding: 1.4rem; display: flex; flex-direction: column; justify-content: center; gap: 0.75rem; align-items: flex-start; }
        .bl-flag { color: #00ff88; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
        .bl-feat-body h2 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.3rem, 3vw, 1.9rem); line-height: 1.25; color: #f1f5f9; word-break: break-word; }
        .bl-feat-body p { color: #94a3b8; line-height: 1.65; font-size: 0.98rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .bl-read { color: #0ea5e9; font-weight: 600; font-size: 0.92rem; }

        .bl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.4rem; }
        .bl-card article { height: 100%; display: flex; flex-direction: column; background: #0d1117; border: 1px solid #1e2a38; border-radius: 14px; overflow: hidden; transition: transform .2s, border-color .2s; }
        .bl-thumb { aspect-ratio: 16/9; overflow: hidden; background: #0c1929; }
        .bl-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bl-ph { width: 100%; height: 100%; background: linear-gradient(135deg, #0c1929, #0ea5e9); }
        .bl-body { padding: 1.1rem 1.1rem 1.2rem; display: flex; flex-direction: column; gap: 0.6rem; align-items: flex-start; flex: 1; }
        .bl-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.02rem; line-height: 1.38; color: #e2e8f0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; word-break: break-word; }
        .bl-excerpt { color: #64748b; font-size: 0.87rem; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .bl-meta { margin-top: auto; display: flex; gap: 0.4rem; color: #475569; font-size: 0.78rem; }

        .bl-empty { text-align: center; padding: 4rem 1rem; color: #64748b; }
        .bl-empty button { margin-top: 1rem; background: #0ea5e9; color: #fff; border: 0; padding: 0.6rem 1.4rem; border-radius: 8px; font-weight: 600; cursor: pointer; }

        @media (min-width: 860px) {
          .bl-feat article { grid-template-columns: 1.15fr 1fr; }
          .bl-feat-img { aspect-ratio: auto; min-height: 340px; }
          .bl-feat-body { padding: 2rem; }
        }
        @media (max-width: 520px) {
          .bl-wrap { padding: 2rem 1rem 3rem; }
          .bl-grid { grid-template-columns: 1fr; }
          .bl-cats { justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 0.4rem; -webkit-overflow-scrolling: touch; }
          .bl-cats button { white-space: nowrap; flex-shrink: 0; }
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts().map(p => ({
    slug: p.slug || null,
    title: p.title || null,
    excerpt: p.excerpt || null,
    date: p.date || null,
    category: p.category || null,
    tags: p.tags || [],
    image: p.image || null,
    readingTime: p.readingTime || null,
  }))
  return { props: { posts } }
}
