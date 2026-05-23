import type { BroadcastVideo } from '@/types'
import { YouTubeEmbed } from './YouTubeEmbed'
import { CalendarDays } from 'lucide-react'

interface Props {
  videos: BroadcastVideo[]
}

export function BroadcastGrid({ videos }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {videos.map((video) => (
        <article
          key={video._id}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1"
          style={{
            borderColor: 'rgba(155,35,53,0.12)',
            boxShadow: '0 18px 50px rgba(90,15,26,0.08)',
          }}
        >
          <div
            className="p-2"
            style={{ background: 'linear-gradient(135deg, rgba(155,35,53,0.08), rgba(224,123,42,0.12))' }}
          >
            <YouTubeEmbed
              youtubeUrl={video.youtubeUrl}
              title={video.title}
              className="shadow-sm ring-1 ring-black/5"
            />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h4
              className="font-serif text-lg font-bold leading-snug"
              style={{ color: 'var(--deep-indigo)' }}
            >
              {video.title}
            </h4>

            {video.description && (
              <p
                className="mt-2 line-clamp-3 text-sm leading-relaxed"
                style={{ color: 'rgba(90,15,26,0.68)' }}
              >
                {video.description}
              </p>
            )}

            <time
              className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-[0.14em]"
              style={{ color: 'var(--gold-dark)' }}
            >
              <CalendarDays size={14} strokeWidth={1.8} />
              {video.publishDate
                ? new Date(video.publishDate).toLocaleDateString('en-IN', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })
                : 'Date unavailable'}
            </time>
          </div>
        </article>
      ))}
    </div>
  )
}
