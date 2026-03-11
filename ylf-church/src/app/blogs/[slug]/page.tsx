import type { Metadata }   from 'next'
import { notFound }         from 'next/navigation'
import Link                 from 'next/link'
import { PortableText }     from '@portabletext/react'
import { sanityFetch }      from '@/lib/sanity'
import { blogBySlugQuery, blogSlugsQuery } from '@/lib/sanity-queries'
import type { BlogPost }    from '@/types'

interface Props {
  params: { slug: string }
}

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: { current: string } }[]>(blogSlugsQuery)
  return (slugs ?? []).map(s => ({ slug: s.slug.current }))
}

// Generate metadata per post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<BlogPost>(blogBySlugQuery, { slug: params.slug }, ['blog'])
  if (!post) return { title: 'Post Not Found' }
  return {
    title:       post.title,
    description: post.excerpt,
  }
}

// Portable Text components with YLF branding
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) =>
      <p className="mb-4 leading-relaxed" style={{ color:'var(--muted,#6b5e7e)' }}>{children}</p>,
    h2: ({ children }: { children?: React.ReactNode }) =>
      <h2 className="font-serif text-2xl font-bold mt-8 mb-4" style={{ color:'var(--deep-indigo)' }}>{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) =>
      <h3 className="font-serif text-xl font-bold mt-6 mb-3" style={{ color:'var(--divine-purple)' }}>{children}</h3>,
    blockquote: ({ children }: { children?: React.ReactNode }) =>
      <blockquote className="border-l-4 pl-5 py-2 my-6 font-display italic text-lg rounded-r-lg"
        style={{ borderColor:'var(--holy-gold)', background:'var(--lavender-light)', color:'var(--deep-indigo)' }}>
        {children}
      </blockquote>,
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await sanityFetch<BlogPost>(blogBySlugQuery, { slug: params.slug }, ['blog'])

  if (!post) notFound()

  const date = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <article className="min-h-screen pt-28 pb-20 px-6" style={{ background:'var(--cream)' }}>
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:opacity-70"
          style={{ color:'var(--divine-purple)' }}>
          ← Back to Blog
        </Link>

        {/* Category */}
        {post.category && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4"
            style={{ background:'var(--holy-gold)', color:'var(--deep-indigo)' }}>
            {post.category}
          </span>
        )}

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6"
          style={{ color:'var(--deep-indigo)' }}>
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background:'var(--divine-purple)' }}>YLF</div>
          <div>
            <p className="font-semibold text-sm" style={{ color:'var(--deep-indigo)' }}>{post.author}</p>
            <p className="text-xs" style={{ color:'var(--muted,#6b5e7e)' }}>{date}</p>
          </div>
        </div>

        {/* Body */}
        <div className="prose-ylf">
          {post.body
            ? <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} components={ptComponents} />
            : <p className="leading-relaxed" style={{ color:'var(--muted,#6b5e7e)' }}>{post.excerpt}</p>
          }
        </div>

        {/* Back CTA */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <Link href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{ background:'var(--divine-purple)', color:'#fff' }}>
            ← Read More Posts
          </Link>
        </div>
      </div>
    </article>
  )
}
