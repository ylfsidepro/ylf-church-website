import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { activityGroupsQuery } from '@/lib/sanity-queries'
import type { ActivityGroup } from '@/types'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ActivityGroupCard } from '@/components/ui/ActivityGroupCard'

export const metadata: Metadata = {
  title: 'Activity Groups',
  description:
    'Discover a variety of activities hosted live on Zoom throughout the week.',
}

const DEFAULT_GROUPS = [
  { _id: '1',  name: 'Skit',              description: 'Creative drama ministry to communicate the Gospel through storytelling.',                           icon: '🎭' },
  { _id: '2',  name: 'Promotion',         description: 'Spreading the message of YLF through creative outreach and communication.',                        icon: '📢' },
  { _id: '3',  name: 'Open Home',         description: 'Intimate gatherings where connections thrive and relationships flourish.',                          icon: '🏠' },
  { _id: '4',  name: 'Broadcasting',      description: 'Digital ministry — streams, records and distributes sermons and worship.',                         icon: '📺' },
  { _id: '5',  name: 'Content Creation',  description: 'Crafting compelling media — graphics, videos, and written content.',                               icon: '🎨' },
  { _id: '6',  name: 'Music Composition', description: "Writing original worship music and hymns to usher in God's presence.",                             icon: '🎵' },
  { _id: '7',  name: 'Retreat Planning',  description: 'Organising Spirit-filled retreats for deep encounters and renewal.',                               icon: '⛺' },
  { _id: '8',  name: 'Video Editing',     description: 'Post-production team crafting powerful video testimonies and content.',                             icon: '🎬' },
  { _id: '9',  name: 'Intercession',      description: 'The prayer engine of YLF — standing in the gap for church, city and nations.',                    icon: '🙏' },
  { _id: '10', name: 'Teaching',          description: 'Preparing and delivering edifying lessons grounded in the Word of God.',                           icon: '📖' },
  { _id: '11', name: 'Worship',           description: 'Leading the community in Spirit-filled praise and worship to Yeshua.',                             icon: '🎤' },
]

export default async function ActivityGroupsPage() {
  let groups: ActivityGroup[] = []
  try {
    const result = await sanityFetch<ActivityGroup[]>(
      activityGroupsQuery,
      {},
      ['activityGroups']
    )
    groups = result ?? []
  } catch {
    groups = []
  }

  const data = groups.length ? groups : DEFAULT_GROUPS

  return (
    <section
      className="min-h-screen pt-28 pb-20 px-8"
      style={{ background: 'var(--lavender-light,#f0eaf8)' }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Community Life"
          title="Activity Groups"
          subtitle="Discover a variety of activities hosted live on Zoom throughout the week — find your place and grow with family."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {data.map((group, i) => (
            <ActivityGroupCard key={group._id} group={group} index={i} />
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-white shadow-xl"
          style={{ background: 'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))' }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
            style={{ background: 'rgba(244,165,53,0.2)' }}
          >
            🏠
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-2">Open Homes</h3>
            <p className="text-white/80 leading-relaxed">
              Come and be a part of our Open-Homes where connections thrive and relations flourish.
              These intimate Zoom gatherings are the heartbeat of our community — real conversations,
              real faith, real family.
            </p>
          </div>
          <Link
            href="/connect"
            className="flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,var(--holy-gold),#c47e15)', color: 'var(--deep-indigo)' }}
          >
            Join an Open Home
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/broadcasting"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg"
            style={{ background: 'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))', color: '#fff' }}
          >
            📺 Visit Our Digital Broadcasting Ministry →
          </Link>
        </div>
      </div>
    </section>
  )
}
