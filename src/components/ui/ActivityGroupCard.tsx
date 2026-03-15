import type { ActivityGroup } from '@/types'

interface Props {
  group: ActivityGroup & { icon?: string }
  index: number
}

const BG_COLORS = [
  'rgba(107,75,161,0.12)', 'rgba(244,165,53,0.12)', 'rgba(74,144,226,0.12)',
  'rgba(107,75,161,0.12)', 'rgba(244,165,53,0.12)', 'rgba(74,144,226,0.12)',
]

export function ActivityGroupCard({ group, index }: Props) {
  return (
    <div
      className="bg-white rounded-2xl p-5 text-center border border-[rgba(107,75,161,0.1)] transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{ boxShadow:'0 2px 16px rgba(107,75,161,0.07)', animationDelay:`${index * 0.05}s` }}>

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl"
        style={{ background: BG_COLORS[index % BG_COLORS.length] }}>
        {group.icon ?? '✦'}
      </div>

      <h4 className="font-semibold text-sm mb-1.5" style={{ color:'var(--deep-indigo)' }}>
        {group.name}
      </h4>
      <p className="text-xs leading-relaxed" style={{ color:'var(--muted,#6b5e7e)' }}>
        {group.description}
      </p>
    </div>
  )
}
