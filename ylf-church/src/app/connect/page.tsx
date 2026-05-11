import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ConnectForm }   from '@/components/connect/ConnectForm'

export const metadata: Metadata = {
  title:       'Connect',
  description: "Reach out to Yeshua's Love Family — prayer requests, joining a group, or simply saying hello.",
}

export default function ConnectPage() {
  return (
    <section
      className="min-h-screen pt-28 pb-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, var(--deep-indigo) 0%, #4a2a7a 50%, var(--divine-purple) 100%)' }}>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="w-8 h-0.5 opacity-50" style={{ background:'var(--holy-gold)' }}/>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Get In Touch</span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-white leading-tight mb-4">
              Connect With<br/>Your Family
            </h1>
            <div className="w-14 h-1 rounded mb-6"
              style={{ background:'linear-gradient(to right, var(--holy-gold), rgba(244,165,53,0.3))' }}/>
            <p className="text-white/70 leading-relaxed mb-8">
              Whether you have a prayer request, want to join an activity group, or simply want to
              know more about Yeshua's Love Family — we'd love to hear from you. Fill in the form
              and one of our team will be in touch.
            </p>

            {[
              { icon:'📍', label:'Location',          value:'Jamshedpur, Jharkhand, India' },
              { icon:'📞', label:'Phone / WhatsApp',  value:'+91 9955911759' },
              { icon:'📺', label:'Online Gatherings', value:'Bible Study & Activities on Zoom' },
              { icon:'✉️', label:'Email',             value:'yeshualovejsr@gmail.com' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background:'rgba(255,255,255,0.1)' }}>{icon}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-white/55 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Form */}
          <ConnectForm />
        </div>
      </div>
    </section>
  )
}
