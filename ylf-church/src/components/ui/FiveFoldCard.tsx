import type { FiveFoldMinistry } from '@/types'

const ICONS: Record<string, React.ReactNode> = {
  star: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f4a535" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>,
  flame:<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f4a535" strokeWidth="1.8" strokeLinecap="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>,
  globe:<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f4a535" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  heart:<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f4a535" strokeWidth="1.8" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  book: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f4a535" strokeWidth="1.8" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
}

interface Props {
  ministry: FiveFoldMinistry
  index:    number
}

export function FiveFoldCard({ ministry, index }: Props) {
  return (
    <div
      className="rounded-[18px] p-6 text-center border border-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default relative overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.05)',
        animationDelay: `${index * 0.1}s`,
      }}>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300"
        style={{ background:'rgba(255,255,255,0.08)' }}>
        {ICONS[ministry.icon] ?? ICONS['star']}
      </div>

      {/* Role label */}
      <p className="text-xs font-bold tracking-[.12em] uppercase mb-2"
        style={{ color:'var(--holy-gold)' }}>
        {ministry.role.charAt(0).toUpperCase() + ministry.role.slice(1)}
      </p>

      {/* Title */}
      <h3 className="font-serif font-bold text-white mb-3 text-base">{ministry.title}</h3>

      {/* Description */}
      <p className="text-[0.82rem] leading-relaxed text-white/55">{ministry.description}</p>

      {/* Scripture */}
      {ministry.scripture && (
        <p className="mt-4 text-[0.72rem] italic" style={{ color:'rgba(244,165,53,0.6)' }}>
          {ministry.scripture}
        </p>
      )}
    </div>
  )
}
