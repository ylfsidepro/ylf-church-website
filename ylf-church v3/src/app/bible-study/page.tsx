import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Bible Study',
  description: 'Join our weekly Spirit-led Bible study sessions on Zoom.',
}

export default function BibleStudyPage() {
  const details = {
    title: 'Weekly Bible Study',
    description:
      'Join us every week as we dig deep into the living Word of God. Our sessions are interactive, Spirit-led, and open to everyone — new believers and seasoned disciples alike.',
    schedule:
      'Every week — check the Events page for exact days and timings',
    scripture:
      '"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." — 2 Timothy 3:16',
  }

  return (
    <section
      className="min-h-screen pt-28 pb-20 px-6"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Weekly Gatherings"
          title="Bible Study"
          subtitle="Every week, the Word comes alive. Come ready to encounter God."
          variant="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">

          {/* Info Cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: '📅',
                label: 'Schedule',
                text: details.schedule,
                accent: 'var(--divine-purple)',
              },
              {
                icon: '💻',
                label: 'Platform',
                text: 'All sessions hosted live on Zoom. Link shared with registered members.',
                accent: 'var(--divine-purple)',
              },
              {
                icon: '🙏',
                label: 'Open to All',
                text: "Whether you're exploring faith or walking deep — everyone is welcome.",
                accent: 'var(--holy-gold)',
              },
            ].map(({ icon, label, text, accent }) => (
              <div
                key={label}
                className="flex gap-4 items-start p-5 bg-white rounded-2xl shadow-sm border-l-4"
                style={{ borderLeftColor: accent }}
              >
                <div className="text-2xl w-10 flex-shrink-0 mt-0.5">
                  {icon}
                </div>

                <div>
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: 'var(--deep-indigo)' }}
                  >
                    {label}
                  </h4>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--muted,#6b5e7e)' }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}

           <a
  href="/connect"
  className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 no-underline mx-auto"
  style={{
    background:
      'linear-gradient(135deg,var(--holy-gold),#c47e15)',
    color: 'var(--deep-indigo)',
  }}
>
  🎥 Register to Join
</a>
          </div>

          {/* Visual Card */}
          <div
            className="rounded-3xl text-white shadow-xl relative overflow-hidden"
            style={{
              background:
                'linear-gradient(145deg,var(--divine-purple),var(--deep-indigo))',
            }}
          >
            {/* Scripture */}
            <div
              className="p-7 border-b"
              style={{ borderColor: 'rgba(255,255,255,.12)' }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: 'var(--holy-gold)' }}
              >
                ✦ Scripture of the Week
              </p>

              <blockquote
                className="font-display italic text-base text-white/90 leading-relaxed border-l-4 pl-4"
                style={{ borderColor: 'var(--holy-gold)' }}
              >
                {details.scripture}
              </blockquote>
            </div>

            {/* Content */}
            <div className="p-7">
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                style={{ background: 'var(--holy-gold)' }}
              />

              <h3 className="font-serif text-2xl font-bold mb-3">
                {details.title}
              </h3>

              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5 border border-white/20"
                style={{ background: 'rgba(255,255,255,.1)' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live · Every Week
              </div>

              <p className="text-sm leading-relaxed text-white/80 mb-6">
                {details.description}
              </p>

              <a
                href="/connect"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 no-underline"
                style={{
                  background:
                    'linear-gradient(135deg,var(--holy-gold),#c47e15)',
                  color: 'var(--deep-indigo)',
                }}
              >
                ▶ Register &amp; Get Zoom Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}