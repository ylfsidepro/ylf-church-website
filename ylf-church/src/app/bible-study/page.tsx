import type { Metadata } from 'next'
import { sanityFetch }      from '@/lib/sanity'
import { bibleStudyQuery }  from '@/lib/sanity-queries'
import type { BibleStudy }  from '@/types'
import { SectionHeader }    from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title:       'Bible Study',
  description: 'Join our weekly Spirit-led Bible study sessions on Zoom.',
}

export default async function BibleStudyPage() {
  const study = await sanityFetch<BibleStudy>(bibleStudyQuery, {}, ['bibleStudy'])

  const details = study ?? {
    title:       'Weekly Bible Study',
    description: 'Join us every week as we dig deep into the living Word of God. Our sessions are interactive, Spirit-led, and open to everyone — new believers and seasoned disciples alike.',
    zoomLink:    '#connect',
    schedule:    'Every week — check the Events page for exact days and timings',
    scripture:   '"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." — 2 Timothy 3:16',
  }

  return (
    <section className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Weekly Gatherings"
          title="Bible Study"
          subtitle="Every week, the Word comes alive. Come ready to encounter God."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
          {/* Info Cards */}
          <div className="flex flex-col gap-5">
            {[
              { icon: '📅', label: 'Schedule',   text: details.schedule },
              { icon: '💻', label: 'Platform',   text: 'All sessions hosted live on Zoom. Link shared with registered members.' },
              { icon: '🙏', label: 'Open to All',text: 'Whether you\'re exploring faith or walking deep — everyone is welcome.' },
            ].map(({ icon, label, text }) => (
              <div key={label}
                className="flex gap-4 items-start p-5 bg-white rounded-2xl shadow-sm border-l-4"
                style={{ borderLeftColor: 'var(--divine-purple)' }}>
                <div className="text-2xl w-10 flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--deep-indigo)' }}>{label}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted, #6b5e7e)' }}>{text}</p>
                </div>
              </div>
            ))}
            <a href={details.zoomLink}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,var(--holy-gold),var(--gold-dark,#c47e15))', color: 'var(--deep-indigo)' }}>
              🎥 Join This Week's Bible Study
            </a>
          </div>

          {/* Visual Card */}
          <div className="rounded-3xl p-10 text-white shadow-xl relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg,var(--divine-purple),var(--deep-indigo))' }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
              style={{ background: 'var(--holy-gold)' }} />
            <h3 className="font-serif text-2xl font-bold mb-3">{details.title}</h3>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/20"
              style={{ background: 'rgba(255,255,255,0.1)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live on Zoom · Every Week
            </div>
            <p className="text-sm leading-relaxed text-white/80 mb-8">{details.description}</p>
            <a href={details.zoomLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,var(--holy-gold),var(--gold-dark,#c47e15))', color: 'var(--deep-indigo)' }}>
              ▶ Join Study
            </a>
            {/* Scripture */}
            <blockquote className="mt-6 border-l-4 pl-4 italic text-sm text-white/75 leading-relaxed font-display"
              style={{ borderLeftColor: 'var(--holy-gold)' }}>
              {details.scripture}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
