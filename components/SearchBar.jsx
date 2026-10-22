import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function SearchBar({ placeholder = 'Search articles...' }) {
  const [q, setQ] = useState('')
  const [index, setIndex] = useState(null)
  const [open, setOpen] = useState(false)
  const box = useRef(null)

  const load = () => {
    if (index) return
    fetch('/search-index.json').then(r => r.json()).then(setIndex).catch(() => setIndex([]))
  }

  useEffect(() => {
    const close = e => { if (box.current && !box.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
  const results = !index || !terms.length ? [] : index
    .map(p => {
      const title = p.title.toLowerCase()
      const rest = `${p.excerpt} ${p.category} ${(p.tags || []).join(' ')}`.toLowerCase()
      let score = 0
      for (const t of terms) {
        if (title.includes(t)) score += 3
        else if (rest.includes(t)) score += 1
        else return null
      }
      return { p, score }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(r => r.p)

  return (
    <div ref={box} style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
      <input
        type="search"
        value={q}
        placeholder={placeholder}
        aria-label="Search articles"
        onFocus={() => { load(); setOpen(true) }}
        onChange={e => { setQ(e.target.value); setOpen(true) }}
        onKeyDown={e => e.key === 'Escape' && setOpen(false)}
        style={{ width: '100%', padding: '0.55rem 1rem', background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '100px', color: '#e2e8f0', fontSize: '0.9rem', outline: 'none' }}
      />
      {open && terms.length > 0 && (
        <div style={{ position: 'absolute', top: '110%', left: 0, right: 0, background: '#0d1117', border: '1px solid #1e2a38', borderRadius: '12px', overflow: 'hidden', zIndex: 1000, boxShadow: '0 12px 30px rgba(0,0,0,0.5)', minWidth: '280px' }}>
          {results.length === 0 ? (
            <div style={{ padding: '0.9rem 1rem', color: '#64748b', fontSize: '0.85rem' }}>{index ? 'No articles found' : 'Loading...'}</div>
          ) : results.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} onClick={() => { setOpen(false); setQ('') }} style={{ display: 'block', padding: '0.7rem 1rem', textDecoration: 'none', borderBottom: '1px solid #1e2a38' }}>
              <div style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.35 }}>{p.title}</div>
              <div style={{ color: '#64748b', fontSize: '0.72rem', marginTop: '0.2rem' }}>{p.category} · {p.date}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
