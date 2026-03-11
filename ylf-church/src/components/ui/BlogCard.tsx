import Link     from 'next/link'
import type { BlogPost } from '@/types'

interface Props {
  post:  BlogPost
  index: number
}

const CARD_GRADIENTS = [
  'linear-gradient(145deg,var(--deep-indigo),var(--divine-purple))',
  'linear-gradient(145deg,#7a4a1a,var(--holy-gold))',
  'linear-gradient(145deg,#1a4a3a,#2a7a5a)',
]

export function BlogCard({ post, index }: Props) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    month: 'short', year: 'numeric',
  })
  const initials = post.author?.split(' ').map(w => w[0]).join('').slice(0, 3) ?? 'YLF'

  return (
    <article
      className="bg-white rounded-[18px] overflow-hidden border border-[rgba(107,75,161,0.1)] flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow:'0 2px 20px rgba(107,75,161,0.08)' }}>

      {/* Header image */}
      <div className="h-44 relative flex items-center justify-center"
        style={{ background: CARD_GRADIENTS[index % CARD_GRADIENTS.length] }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity={0.3}>
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </svg>
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background:'linear-gradient(to bottom,transparent 40%,rgba(61,44,92,0.6))' }}/>
        {post.category && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase"
            style={{ background:'var(--holy-gold)', color:'var(--deep-indigo)' }}>
            {post.category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[0.55rem] font-bold flex-shrink-0"
            style={{ background:'var(--divine-purple)' }}>
            {initials}
          </div>
          <span className="text-xs" style={{ color:'var(--muted,#6b5e7e)' }}>{post.author}</span>
          <span className="text-xs ml-auto" style={{ color:'var(--soft-lavender,#d6c7e3)' }}>{date}</span>
        </div>

        <h3 className="font-serif font-bold text-base leading-snug mb-2 flex-1"
          style={{ color:'var(--deep-indigo)' }}>
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color:'var(--muted,#6b5e7e)' }}>
          {post.excerpt}
        </p>

        <Link href={`/blogs/${post.slug.current}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all group"
          style={{ color:'var(--divine-purple)' }}>
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            className="transition-transform duration-200 group-hover:translate-x-1">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </article>
  )
}
