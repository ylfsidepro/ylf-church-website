interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionHeaderProps) {
  const align = centered ? 'text-center' : ''

  const titleC = light ? '#fff' : 'var(--deep-indigo)'
  const tagC = light ? 'rgba(244,165,53,0.9)' : 'var(--holy-gold)'
  const subC = light ? 'rgba(255,255,255,0.6)' : 'var(--muted, #6b5e7e)'
  const lineC = light ? 'rgba(244,165,53,0.4)' : 'var(--holy-gold)'

  const dividerStyle = light
    ? {
        background: 'var(--holy-gold)',
        opacity: 0.6,
      }
    : {
        background:
          'linear-gradient(to right, var(--holy-gold), #c47e15)',
      }

  return (
    <div className={`mb-2 ${align}`}>
      {/* Tag line */}
      <div
        className={`flex items-center gap-3 mb-3 ${
          centered ? 'justify-center' : ''
        }`}
      >
        {centered && (
          <div
            className="w-8 h-0.5 rounded"
            style={{ background: lineC }}
          />
        )}

        <span
          className="text-xs font-semibold tracking-[.18em] uppercase"
          style={{ color: tagC }}
        >
          {tag}
        </span>

        <div
          className="w-8 h-0.5 rounded"
          style={{ background: lineC }}
        />
      </div>

      {/* Title */}
      <h2
        className="font-serif font-bold leading-tight"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: titleC,
        }}
      >
        {title}
      </h2>

      {/* Divider */}
      <div
        className={`w-14 h-[3px] rounded mt-4 mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
        style={dividerStyle}
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`font-display italic leading-relaxed max-w-4xl ${
            centered ? 'mx-auto' : ''
          }`}
          style={{
            fontSize: '1.15rem',
            color: subC,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
