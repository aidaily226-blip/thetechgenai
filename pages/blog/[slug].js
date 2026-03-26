import Layout from '../../components/Layout'
import AdSlot from '../../components/AdSlot'
import RelatedPosts from '../../components/RelatedPosts'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '../../lib/posts'

const categoryColors = {
  'ai-news': 'badge-ai',
  'tech': 'badge-tech',
  'gadgets': 'badge-gadgets',
  'ai-tools': 'badge-tools',
  'make-money': 'badge-money',
}

export default function BlogPost({ post, content, allPosts }) {
  const cat = post.category?.toLowerCase().replace(' ', '-') || 'tech'
  const badge = categoryColors[cat] || 'badge-tech'

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      canonical={`https://thetechgenai.com/blog/${post.slug}`}
    >
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Back Button */}
        <Link href="/blog" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          ← Back to all posts
        </Link>

        {/* Post Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className={badge} style={{ padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
              {post.category}
            </span>
            <span style={{ color: '#475569', fontSize: '0.85rem' }}>{post.date}</span>
            <span style={{ color: '#475569', fontSize: '0.85rem' }}>·</span>
            <span style={{ color: '#475569', fontSize: '0.85rem' }}>{post.readingTime}</span>
          </div>

          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f1f5f9', lineHeight: 1.2, marginBottom: '1rem' }}>
            {post.title}
          </h1>

          {post.excerpt && (
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.7, borderLeft: '3px solid #1e2a38', paddingLeft: '1rem' }}>
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Featured Image */}
        {post.image && (
          <div style={{ marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        )}

        {/* Ad before content */}
        <AdSlot slot="horizontal" />

        {/* Article Content */}
        <div
          className="article-content"
          style={{ marginTop: '2rem' }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Ad after content */}
        <AdSlot slot="horizontal" />

        {/* Tags */}
        {post.tags && (
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #1e2a38' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ background: '#0d1117', border: '1px solid #1e2a38', color: '#64748b', padding: '0.3rem 0.75rem', borderRadius: '100px', fontSize: '0.8rem' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts Section */}
        <RelatedPosts
          currentSlug={post.slug}
          currentCategory={post.category}
          allPosts={allPosts}
        />

        {/* Back to Blog */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/blog" style={{ padding: '0.75rem 2rem', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '8px', color: 'white', fontWeight: 600, textDecoration: 'none' }}>
            ← More Posts
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const allPosts = getAllPosts()

const { remark } = await import('remark')
const remarkHtml = await import('remark-html')
const remarkGfm = await import('remark-gfm')
const processedContent = await remark()
  .use(remarkGfm.default)
  .use(remarkHtml.default)
  .process(post.content || '')

  return {
    props: {
      post: {
        slug: post.slug || null,
        title: post.title || null,
        excerpt: post.excerpt || null,
        date: post.date || null,
        category: post.category || null,
        tags: post.tags || null,
        image: post.image || null,
        readingTime: post.readingTime || null,
      },
      content: processedContent.toString(),
      allPosts: allPosts.map(p => ({
        slug: p.slug || null,
        title: p.title || null,
        excerpt: p.excerpt || null,
        date: p.date || null,
        category: p.category || null,
        image: p.image || null,
        readingTime: p.readingTime || null,
      })),
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
