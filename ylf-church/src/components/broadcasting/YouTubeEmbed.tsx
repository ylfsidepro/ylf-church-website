interface YouTubeEmbedProps {
  youtubeUrl: string
  title: string
  large?: boolean
  className?: string
}

function toEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)

    // youtu.be/VIDEO_ID
    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.replace('/', '')
      return `https://www.youtube.com/embed/${id}`
    }

    // youtube.com/watch?v=VIDEO_ID
    const videoId = parsed.searchParams.get('v')
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }

    // already embed link
    if (url.includes('/embed/')) {
      return url
    }

    // shorts support
    if (url.includes('/shorts/')) {
      const id = url.split('/shorts/')[1]?.split('?')[0]
      return `https://www.youtube.com/embed/${id}`
    }

    return null
  } catch {
    return null
  }
}

export function YouTubeEmbed({
  youtubeUrl,
  title,
  large = false,
  className = '',
}: YouTubeEmbedProps) {
  const embedUrl = toEmbedUrl(youtubeUrl)

  if (!embedUrl) {
    return (
      <div
        className={`w-full aspect-video rounded-xl flex items-center justify-center text-white/60 text-sm ${className}`}
        style={{ background: 'var(--deep-indigo)' }}
      >
        Invalid YouTube URL
      </div>
    )
  }

  return (
    <div
      className={`w-full ${large ? 'rounded-[1.35rem]' : 'rounded-xl'} overflow-hidden bg-black ${className}`}
      style={{
        aspectRatio: '16/9',
      }}
    >
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        style={{ border: 'none', display: 'block' }}
      />
    </div>
  )
}
