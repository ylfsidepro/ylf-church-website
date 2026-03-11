import Link from 'next/link'
import type { ChurchEvent } from '@/types'

interface Props {
  event: ChurchEvent
  index: number
}

const DATE_BAND_COLORS = [
  'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))',
  'linear-gradient(135deg,#c47e15,var(--holy-gold))',
  'linear-gradient(135deg,#1a5276,var(--spirit-blue))',
]

export function EventCard({ event, index }: Props) {
  const date   = new Date(event.date)
  const day    = date.getDate()
  const month  = date.toLocaleString('en-IN', { month: 'short' })
  const year   = date.getFullYear()

  return (
    <div
      className="bg-white rounded-[18px] overflow-hidden border border-[rgba(107,75,161,0.1)] transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow:'0 2px 20px rgba(107,75,161,0.08)' }}>

      {/* Date band */}
      <div className="px-6 py-4 flex items-center gap-4 text-white"
        style={{ background: DATE_BAND_COLORS[index % DATE_BAND_COLORS.length] }}>
        <span className="font-serif text-4xl font-black leading-none"
          style={{ color: index === 1 ? '#fff' : 'var(--holy-gold)' }}>
          {day}
        </span>
        <div className="text-xs tracking-wider uppercase opacity-80 leading-relaxed">
          {month}<br/>{year}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {event.tag && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3"
            style={{ background:'var(--lavender-light,#f0eaf8)', color:'var(--divine-purple)' }}>
            {event.tag}
          </span>
        )}
        <h4 className="font-serif text-base font-bold mb-2 leading-snug" style={{ color:'var(--deep-indigo)' }}>
          {event.title}
        </h4>
        <p className="text-sm leading-relaxed mb-4" style={{ color:'var(--muted,#6b5e7e)' }}>
          {event.description}
        </p>
        {event.registrationLink && (
          <Link href={event.registrationLink}
            className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-colors hover:opacity-70"
            style={{ color:'var(--divine-purple)' }}>
            Register Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
