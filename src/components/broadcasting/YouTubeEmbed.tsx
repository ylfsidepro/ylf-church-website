/**
 * YouTubeEmbed — Simple iframe-based embed.
 * NO YouTube Data API. Videos stream directly from YouTube servers.
 * Supports full YouTube URLs, short URLs, and embed URLs.
 */

interface YouTubeEmbedProps {
  youtubeUrl: string
  title:      string
  large?:     boolean
}

function extractVideoId(url: string): string | null {
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,           // youtube.com/watch?v=ID
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,       // youtu.be/ID
    /embed\/([a-zA-Z0-9_-]{11})/,           // youtube.com/embed/ID
    /shorts\/([a-zA-Z0-9_-]{11})/,          // youtube.com/shorts/ID
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export function YouTubeEmbed({ youtubeUrl, title, large = false }: YouTubeEmbedProps) {
  const videoId = extractVideoId(youtubeUrl)

  if (!videoId) {
    return (
      <div className="w-full aspect-video rounded-xl flex items-center justify-center text-white/40 text-sm"
        style={{ background:'var(--deep-indigo)' }}>
        Invalid YouTube URL
      </div>
    )
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`

  return (
    <div className={`w-full ${large ? 'rounded-2xl' : 'rounded-xl'} overflow-hidden`}
      style={{ boxShadow:'0 8px 40px rgba(107,75,161,0.22)', aspectRatio:'16/9' }}>
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        style={{ border:'none', display:'block' }}
      />
    </div>
  )
}
