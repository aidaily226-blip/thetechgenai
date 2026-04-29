import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'

import { getAllPosts } from '../../lib/posts'

export default function Blog({ posts }) {
  return (
    <Layout title="All Posts" description="Browse all AI news, tech updates, gadget reviews and money-making guides.">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>
            All <span style={{ color: '#00ff88' }}>Posts</span>
          </h1>
          <p style={{ color: '#64748b' }}>{posts.length} articles on AI, Tech, Gadgets & more</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {posts.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
        {posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem', color: '#475569' }}>
            <p>No posts yet. Add .mdx files to the /posts folder!</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
