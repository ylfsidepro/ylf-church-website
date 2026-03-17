import type { Metadata } from 'next'
import { sanityFetch }   from '@/lib/sanity'
import { blogsQuery }    from '@/lib/sanity-queries'
import type { BlogPost } from '@/types'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BlogCard }      from '@/components/ui/BlogCard'

export const metadata: Metadata = {
  title:       'Blog',
  description: "Devotionals, teachings, and community stories from Yeshua's Love Family.",
}

const FALLBACK_POSTS: BlogPost[] = [
  { _id:'1', title:'Walking in the Spirit: A Daily Guide to Holy Spirit-Led Living', slug:{ current:'walking-in-the-spirit' }, excerpt:'Discover practical principles for cultivating sensitivity to the Holy Spirit in your everyday walk with God.', body:[], author:'YLF Leadership', publishedAt:'2025-06-01', category:'Devotional' },
  { _id:'2', title:'Understanding Your Calling in the Five Fold Ministry',           slug:{ current:'five-fold-calling' },       excerpt:'An exploration of Ephesians 4:11 and how every believer fits into God\'s design for His church.',         body:[], author:'YLF Leadership', publishedAt:'2025-05-15', category:'Ministry'   },
  { _id:'3', title:'The Power of Open Homes: Building Kingdom Community',            slug:{ current:'open-homes-community' },    excerpt:'Why small, intimate gatherings might just be the most powerful form of church.',                        body:[], author:'YLF Leadership', publishedAt:'2025-04-20', category:'Community'  },
]

export default async function BlogsPage() {
  const posts = await sanityFetch<BlogPost[]>(blogsQuery, {}, ['blog'])
  const data  = posts?.length ? posts : FALLBACK_POSTS

  return (
    <section className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--lavender-light,#f0eaf8)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Word & Wisdom"
          title="From the Blog"
          subtitle="Devotionals, teachings, and stories from the YLF community."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {data.map((post, i) => (
            <BlogCard key={post._id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
