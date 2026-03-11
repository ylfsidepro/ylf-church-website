import type { Metadata }   from 'next'
import { sanityFetch }      from '@/lib/sanity'
import { upcomingEventsQuery } from '@/lib/sanity-queries'
import type { ChurchEvent } from '@/types'
import { SectionHeader }    from '@/components/ui/SectionHeader'
import { EventCard }        from '@/components/ui/EventCard'

export const metadata: Metadata = {
  title:       'Events',
  description: "Upcoming events at Yeshua's Love Family — worship nights, Bible study, retreats, and more.",
}

const FALLBACK_EVENTS: ChurchEvent[] = [
  { _id:'1', title:'Night of Encounter — Worship & Prophecy', date:'2025-06-15T18:00:00', description:'An evening of deep worship, prophetic ministry, and encountering the presence of Yeshua together as a family.', tag:'Worship Night', registrationLink:'/connect' },
  { _id:'2', title:'Deep Dive — Book of Acts',               date:'2025-06-22T19:00:00', description:'Join our weekly online Bible Study as we journey through the Acts of the Apostles — signs, wonders, and the early church.', tag:'Bible Study',  registrationLink:'/connect' },
  { _id:'3', title:'YLF Annual Retreat 2025',                date:'2025-07-05T10:00:00', description:'Three days of rest, renewal, worship, and deep encounters with God for the whole YLF family.', tag:'Retreat',      registrationLink:'/connect' },
]

export default async function EventsPage() {
  const events = await sanityFetch<ChurchEvent[]>(upcomingEventsQuery, {}, ['events'])
  const data   = events?.length ? events : FALLBACK_EVENTS

  return (
    <section className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Calendar"
          title="Upcoming Events"
          subtitle="Stay connected with what God is doing in and through Yeshua's Love Family."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {data.map((event, i) => (
            <EventCard key={event._id} event={event} index={i} />
          ))}
        </div>
        {data.length === 0 && (
          <p className="text-center mt-16 text-lg" style={{ color: 'var(--muted,#6b5e7e)' }}>
            No upcoming events yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  )
}
