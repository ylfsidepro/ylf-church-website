import type { Metadata } from 'next'
import { sanityFetch } from '@/lib/sanity'
import { upcomingEventsQuery } from '@/lib/sanity-queries'
import type { ChurchEvent } from '@/types'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EventCard } from '@/components/ui/EventCard'

export const metadata: Metadata = {
  title: 'Events',
  description:
    "Upcoming events at Yeshua's Love Family — retreats, courses, celebrations, and more.",
}

const FALLBACK_EVENTS: ChurchEvent[] = [
  {
    _id: '1',
    title: 'Handling Placements & Interviews',
    date: '2026-05-01T00:00:00',
    description:
      'A practical and faith-centered session to equip students and young professionals for placements and interviews.',
    tag: 'May',
    registrationLink: '/connect',
  },
  {
    _id: '2',
    title: 'Parenting Course (Every Saturday, 7 PM – 9 PM)',
    date: '2026-06-01T00:00:00',
    description:
      'A biblical parenting course running weekly to strengthen families through godly wisdom and practical insights.',
    tag: 'June – September',
    registrationLink: '/connect',
  },
  {
    _id: '3',
    title: 'Retreat – The Joy of Serving',
    date: '2026-08-01T00:00:00',
    description:
      'A retreat focused on discovering the beauty and calling of serving joyfully in God\'s kingdom.',
    tag: 'August',
    registrationLink: '/connect',
  },
  {
    _id: '4',
    title: 'Walkathon',
    date: '2026-10-01T00:00:00',
    description:
      'A fellowship walkathon bringing together families and individuals for community, prayer, and outreach.',
    tag: 'October',
    registrationLink: '/connect',
  },
  {
    _id: '5',
    title: 'Retreat – Hurts, Bitterness & Forgiveness',
    date: '2026-11-01T00:00:00',
    description:
      'A healing retreat centered on restoration, freedom, forgiveness, and emotional renewal.',
    tag: 'November',
    registrationLink: '/connect',
  },
  {
    _id: '6',
    title: 'Christmas Programs',
    date: '2026-11-15T00:00:00',
    description:
      'Special worship gatherings, performances, and celebrations as we prepare our hearts for Christmas.',
    tag: 'November',
    registrationLink: '/connect',
  },
  {
    _id: '7',
    title: 'Caroling & Christmas Celebrations',
    date: '2026-12-01T00:00:00',
    description:
      'Join us for joyful caroling, fellowship, and celebrating the birth of Yeshua together.',
    tag: 'December',
    registrationLink: '/connect',
  },
]

export default async function EventsPage() {
  let events: ChurchEvent[] = []
  try {
    const result = await sanityFetch<ChurchEvent[]>(
      upcomingEventsQuery,
      {},
      ['events']
    )
    events = result ?? []
  } catch {
    events = []
  }

  const data = events.length ? events : FALLBACK_EVENTS

  return (
    <section
      className="min-h-screen pt-28 pb-20 px-6"
      style={{ background: 'var(--cream)' }}
    >
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
          <p
            className="text-center mt-16 text-lg"
            style={{ color: 'var(--muted,#6b5e7e)' }}
          >
            No upcoming events yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  )
}
