import Link from 'next/link'

export function CtaStrip() {
  return (
    <section
      className="py-16 px-6 text-center"
      style={{ background:'linear-gradient(135deg,var(--holy-gold),#c47e15)' }}>
      <h2 className="font-serif text-3xl font-black mb-3" style={{ color:'var(--deep-indigo)' }}>
        Ready to Be Part of the Family?
      </h2>
      <p className="mb-7 text-base" style={{ color:'rgba(61,44,92,0.75)' }}>
        Join a Spirit-filled community that loves deeply, prays fervently, and reaches boldly.
      </p>
      <Link href="/connect"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 no-underline"
        style={{ background:'var(--deep-indigo)', color:'#fff' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        Connect With Us Today
      </Link>
    </section>
  )
}
