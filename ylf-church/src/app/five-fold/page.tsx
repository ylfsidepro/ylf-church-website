import type { Metadata } from 'next'
import { sanityFetch }    from '@/lib/sanity'
import { fiveFoldQuery }  from '@/lib/sanity-queries'
import type { FiveFoldMinistry } from '@/types'
import { SectionHeader }  from '@/components/ui/SectionHeader'
import { FiveFoldCard }   from '@/components/ui/FiveFoldCard'

export const metadata: Metadata = {
  title:       'Five Fold Ministry',
  description: "Discover the Five Fold Ministry of Yeshua's Love Family — Apostle, Prophet, Evangelist, Pastor, and Teacher.",
}

export default async function FiveFoldPage() {
  const ministries = await sanityFetch<FiveFoldMinistry[]>(
    fiveFoldQuery,
    {},
    ['fiveFold']
  )

  // Fallback data while CMS is not yet connected
  const data: FiveFoldMinistry[] = ministries?.length
    ? ministries
    : [
        { _id: '1', role: 'apostle',   title: 'Apostolic Leadership', icon: 'star',  scripture: '1 Corinthians 12:28', description: 'Foundation-builders who establish churches and align the body with God\'s heavenly blueprint and apostolic order.' },
        { _id: '2', role: 'prophet',   title: 'Prophecy',             icon: 'flame', scripture: '1 Corinthians 14:3',  description: 'Hearing from God for the church and individuals — speaking His heart to edify, exhort, and comfort His people.' },
        { _id: '3', role: 'evangelist',title: 'Evangelism',           icon: 'globe', scripture: 'Romans 10:14–15',     description: 'Reaching out to people with the Good News of Yeshua — with passion, compassion, and Spirit-empowered proclamation.' },
        { _id: '4', role: 'pastor',    title: 'Pastoral Care',        icon: 'heart', scripture: 'John 10:11',          description: 'Learning to care for people — shepherding, nurturing, and protecting the flock with the heart of the Good Shepherd.' },
        { _id: '5', role: 'teacher',   title: 'Teaching',             icon: 'book',  scripture: '2 Timothy 2:15',      description: 'Unpacking the Word of God with clarity and depth — equipping every believer to walk in truth and spiritual maturity.' },
      ]

  return (
    <section className="min-h-screen pt-28 pb-20 px-6"
      style={{ background: 'var(--deep-indigo)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Ephesians 4:11"
          title="The Five Fold Ministry"
          subtitle="God's design for equipping the saints and building His Church — through five distinct and powerful gifts."
          light
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-12">
          {data.map((ministry, i) => (
            <FiveFoldCard key={ministry._id} ministry={ministry} index={i} />
          ))}
        </div>
        {/* Scripture Banner */}
        <div className="mt-16 text-center border border-white/10 rounded-2xl p-10"
          style={{ background: 'rgba(255,255,255,0.04)' }}>
          <p className="font-display italic text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            "So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up."
          </p>
          <span className="block mt-4 text-sm tracking-widest uppercase"
            style={{ color: 'var(--holy-gold)' }}>
            — Ephesians 4:11–12
          </span>
        </div>
      </div>
    </section>
  )
}
