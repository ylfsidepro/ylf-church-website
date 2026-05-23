import type { Metadata } from 'next'
import { Radio } from 'lucide-react'
import { sanityFetch } from '@/lib/sanity'
import { broadcastVideosQuery } from '@/lib/sanity-queries'
import { YouTubeEmbed } from '@/components/broadcasting/YouTubeEmbed'
import { BroadcastGrid } from '@/components/broadcasting/BroadcastGrid'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Digital Broadcasting Ministry',
  description:
    'Watch YLF sermons, worship sessions and retreats. Watch, Share, and Grow in the Word.',
}

interface BroadcastVideo {
  _id: string
  title: string
  description?: string
  youtubeUrl: string
  featured: boolean
  publishDate?: string
}

const FALLBACK_VIDEOS: BroadcastVideo[] = [
  {
    _id: '1',
    featured: true,
    title: 'YLF Sunday Worship Service',
    description: 'Join us for a powerful time of worship and the Word.',
    youtubeUrl: 'https://www.youtube.com/watch?v=lU58pe5KVCQ',
    publishDate: '2025-06-01',
  },
  {
    _id: '2',
    featured: false,
    title: 'Five Fold Ministry Teaching',
    description: 'Understanding your calling and gift in the body of Christ.',
    youtubeUrl: 'https://www.youtube.com/watch?v=QwcCIdZGY2o',
    publishDate: '2025-05-18',
  },
  {
    _id: '3',
    featured: false,
    title: 'Annual Retreat Highlights 2024',
    description: 'Moments from our Spirit-filled annual retreat.',
    youtubeUrl: 'https://www.youtube.com/watch?v=pUMFkWOEaYo',
    publishDate: '2025-04-10',
  },
]

export default async function BroadcastingPage() {
  let videos: BroadcastVideo[] = []

  try {
    const result = await sanityFetch<BroadcastVideo[]>(
      broadcastVideosQuery,
      {},
      ['broadcastVideo']
    )
    videos = result ?? []
  } catch {
    videos = []
  }

  const data = videos.length ? videos : FALLBACK_VIDEOS

  const featuredVideo = data.find(v => v.featured) ?? data[0]
  const recentVideos = data.filter(v => v._id !== featuredVideo._id).slice(0, 6)

  return (
    <section
      className="min-h-screen px-5 pb-20 pt-28 sm:px-6 lg:px-8"
      style={{
        background:
          'linear-gradient(180deg, var(--cream) 0%, #fff7f0 46%, #fff 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Digital Ministry"
          title="Digital Broadcasting Ministry"
          subtitle="Watch, Share, and Grow in the Word."
          centered
        />

        {featuredVideo && (
          <article
            className="mt-12 overflow-hidden rounded-[1.75rem] border bg-white"
            style={{
              borderColor: 'rgba(155,35,53,0.14)',
              boxShadow: '0 24px 80px rgba(90,15,26,0.12)',
            }}
          >
            <div
              className="grid items-stretch gap-0 lg:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.55fr)]"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #fff7f0 100%)',
              }}
            >
              <div className="p-3 sm:p-4 lg:p-5">
                <YouTubeEmbed
                  youtubeUrl={featuredVideo.youtubeUrl}
                  title={featuredVideo.title}
                  large
                  className="shadow-2xl shadow-[#5a0f1a]/10 ring-1 ring-black/5"
                />
              </div>

              <div className="flex flex-col justify-center border-t px-6 py-7 sm:px-8 lg:border-l lg:border-t-0 lg:px-9">
                <div
                  className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{
                    background: 'rgba(224,123,42,0.12)',
                    color: 'var(--gold-dark)',
                  }}
                >
                  <Radio size={15} strokeWidth={2} />
                  Featured Broadcast
                </div>

                <h3
                  className="font-serif text-2xl font-bold leading-tight sm:text-3xl"
                  style={{ color: 'var(--deep-indigo)' }}
                >
                  {featuredVideo.title}
                </h3>

                {featuredVideo.description && (
                  <p
                    className="mt-4 text-base leading-8"
                    style={{ color: 'rgba(90,15,26,0.72)' }}
                  >
                    {featuredVideo.description}
                  </p>
                )}

                <p
                  className="mt-6 max-w-sm text-sm leading-7"
                  style={{ color: 'rgba(90,15,26,0.58)' }}
                >
                  Latest ministry media prepared for worship, teaching, and
                  spiritual growth wherever you are watching.
                </p>
              </div>
            </div>
          </article>
        )}

        {recentVideos.length > 0 && (
          <div className="mt-16">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: 'var(--holy-gold)' }}
                >
                  Watch Again
                </p>
                <h3
                  className="mt-2 font-serif text-2xl font-bold sm:text-3xl"
                  style={{ color: 'var(--deep-indigo)' }}
                >
                  Recent Broadcasts
                </h3>
              </div>

              <p
                className="max-w-xl text-sm leading-7 sm:text-right"
                style={{ color: 'rgba(90,15,26,0.62)' }}
              >
                Sermons, worship gatherings, teachings, and ministry moments
                from YLF.
              </p>
            </div>

            <BroadcastGrid videos={recentVideos} />
          </div>
        )}

        <div className="mt-14 text-center">
          <a
            href="https://youtube.com/@yeshuaslovefamily?si=PcrwN2Y1iEClgQ5e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #9b2335, #e07b2a)',
              boxShadow: '0 16px 34px rgba(155,35,53,0.24)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe to YLF on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
