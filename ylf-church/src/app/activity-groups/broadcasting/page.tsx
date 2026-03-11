import type { Metadata }       from 'next'
import { sanityFetch }           from '@/lib/sanity'
import { broadcastVideosQuery, featuredBroadcastQuery } from '@/lib/sanity-queries'
import type { BroadcastVideo }   from '@/types'
import { YouTubeEmbed }          from '@/components/broadcasting/YouTubeEmbed'
import { BroadcastGrid }         from '@/components/broadcasting/BroadcastGrid'
import { SectionHeader }         from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title:       'Digital Broadcasting Ministry',
  description: 'Watch YLF sermons, worship sessions and retreats. Watch, Share, and Grow in the Word.',
}

const FALLBACK_VIDEOS: BroadcastVideo[] = [
  {
    _id: '1', featured: true,
    title: 'YLF Sunday Worship Service',
    description: 'Join us for a powerful time of worship and the Word.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    publishDate: '2025-06-01',
  },
  {
    _id: '2', featured: false,
    title: 'Five Fold Ministry Teaching',
    description: 'Understanding your calling and gift in the body of Christ.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    publishDate: '2025-05-18',
  },
  {
    _id: '3', featured: false,
    title: 'Annual Retreat Highlights 2024',
    description: 'Moments from our Spirit-filled annual retreat.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    publishDate: '2025-04-10',
  },
]

export default async function BroadcastingPage() {
  const [featured, allVideos] = await Promise.all([
    sanityFetch<BroadcastVideo>(featuredBroadcastQuery, {}, ['broadcast']),
    sanityFetch<BroadcastVideo[]>(broadcastVideosQuery, {}, ['broadcast']),
  ])

  const videos       = allVideos?.length ? allVideos : FALLBACK_VIDEOS
  const featuredVideo= featured ?? videos[0]
  const recentVideos = videos.filter(v => v._id !== featuredVideo._id).slice(0, 6)

  return (
    <section className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Digital Ministry"
          title="Digital Broadcasting Ministry"
          subtitle="Watch, Share, and Grow in the Word."
        />

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mt-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: 'var(--holy-gold)' }}>
              ✦ Featured
            </p>
            <YouTubeEmbed
              youtubeUrl={featuredVideo.youtubeUrl}
              title={featuredVideo.title}
              large
            />
            <div className="mt-4">
              <h3 className="font-serif text-xl font-bold" style={{ color: 'var(--deep-indigo)' }}>
                {featuredVideo.title}
              </h3>
              {featuredVideo.description && (
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted,#6b5e7e)' }}>
                  {featuredVideo.description}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Recent Grid */}
        {recentVideos.length > 0 && (
          <div className="mt-14">
            <h3 className="font-serif text-xl font-bold mb-6" style={{ color: 'var(--deep-indigo)' }}>
              Recent Broadcasts
            </h3>
            <BroadcastGrid videos={recentVideos} />
          </div>
        )}

        {/* Subscribe CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://www.youtube.com/@YLFJamshedpur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg"
            style={{ background: '#ff0000' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to YLF on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
