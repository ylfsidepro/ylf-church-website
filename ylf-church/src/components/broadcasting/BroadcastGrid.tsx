import type { BroadcastVideo } from '@/types'
import { YouTubeEmbed }        from './YouTubeEmbed'

interface Props {
  videos: BroadcastVideo[]
}

export function BroadcastGrid({ videos }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map(video => (
        <div key={video._id}
          className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{ boxShadow:'0 4px 24px rgba(107,75,161,0.1)' }}>
          <YouTubeEmbed youtubeUrl={video.youtubeUrl} title={video.title} />
          <div className="p-4 bg-white border border-t-0 border-[rgba(107,75,161,0.1)] rounded-b-2xl">
            <h4 className="font-serif font-bold text-sm leading-snug mb-1"
              style={{ color:'var(--deep-indigo)' }}>
              {video.title}
            </h4>
            {video.description && (
              <p className="text-xs leading-relaxed mb-2" style={{ color:'var(--muted,#6b5e7e)' }}>
                {video.description}
              </p>
            )}
            <time className="text-xs" style={{ color:'var(--soft-lavender)' }}>
              {new Date(video.publishDate).toLocaleDateString('en-IN', { month:'short', year:'numeric', day:'numeric' })}
            </time>
          </div>
        </div>
      ))}
    </div>
  )
}
