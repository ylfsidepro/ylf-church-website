import type { Metadata } from 'next'
import type { FiveFoldMinistry } from '@/types'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FiveFoldCard } from '@/components/ui/FiveFoldCard'

export const metadata: Metadata = {
  title: 'Five Fold Ministry',
  description:
    "Discover the Five Fold Ministry of Yeshua's Love Family — Apostle, Prophet, Evangelist, Pastor, and Teacher.",
}

export default function FiveFoldPage() {
  const data: FiveFoldMinistry[] = [
    {
      _id: '1',
      role: 'apostle',
      title: 'Apostolic Leadership',
      icon: 'star',
      scripture: '1 Corinthians 12:28',
      description:
        'Foundation builders who align the church with God’s heavenly blueprint.',
    },
    {
      _id: '2',
      role: 'prophet',
      title: 'Prophecy',
      icon: 'flame',
      scripture: '1 Corinthians 14:3',
      description:
        'Hearing from God for the church and individuals — speaking His heart to edify, exhort, and comfort His people.',
    },
    {
      _id: '3',
      role: 'evangelist',
      title: 'Evangelism',
      icon: 'globe',
      scripture: 'Romans 10:14–15',
      description:
        'Reaching out to people with the Good News of Yeshua with passion and compassion.',
    },
    {
      _id: '4',
      role: 'pastor',
      title: 'Pastoral Care',
      icon: 'heart',
      scripture: 'John 10:11',
      description:
        'Learning to care for people — shepherding, nurturing, and protecting the flock with the heart of the Good Shepherd.',
    },
    {
      _id: '5',
      role: 'teacher',
      title: 'Teaching',
      icon: 'book',
      scripture: '2 Timothy 2:15',
      description:
        'Unpacking the Word of God with clarity and depth — equipping every believer to walk in truth and spiritual maturity.',
    },
  ]

  return (
    <section
      className="min-h-screen pt-28 pb-20 px-6"
      style={{ background: 'var(--deep-indigo)' }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Ephesians 4:11"
          title="The Five Fold Ministry"
          light
          centered
        />

        <div
          className="mt-10 mb-14 text-center border border-white/10 rounded-2xl p-10"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <p className="font-display italic text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            "So Christ himself gave the apostles, the prophets, the
            evangelists, the pastors and teachers, to equip his people for
            works of service..."
          </p>

          <span
            className="block mt-4 text-sm tracking-widest uppercase"
            style={{ color: 'var(--holy-gold)' }}
          >
            — Ephesians 4:11–12
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {data.map((ministry, i) => (
            <FiveFoldCard key={ministry._id} ministry={ministry} index={i} />
          ))}
        </div>

        <p className="mt-14 text-center text-lg text-white/70 max-w-6xl mx-auto leading-relaxed">
          God's design for equipping the saints and building His Church —
          through five distinct and powerful gifts.
        </p>
      </div>
    </section>
  )
}