const BELIEFS = [
  {
    title: 'The Holy Bible',
    scripture: '2 Timothy 3:16–17',
    body: 'We believe the Bible is the inspired, infallible, and authoritative Word of God — our final guide for faith and life.',
  },
  {
    title: 'The Trinity',
    scripture: 'Matthew 28:19',
    body: 'We believe in one God eternally existing in three persons — Father, Son (Yeshua), and Holy Spirit.',
  },
  {
    title: 'Salvation by Grace',
    scripture: 'Ephesians 2:8–9',
    body: "We believe salvation is by grace through faith in Yeshua alone — not by works, but by His death and resurrection.",
  },
  {
    title: 'Holy Spirit Baptism',
    scripture: 'Acts 2:4',
    body: 'We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues and the manifestation of spiritual gifts.',
  },
  {
    title: 'The Second Coming',
    scripture: 'Revelation 22:20',
    body: 'We believe in the imminent, glorious return of our Lord Yeshua HaMashiach to receive His bride and establish His eternal Kingdom.',
  },
  {
    // Replaced from Divine Healing
    title: 'Discipleship',
    scripture: 'Matthew 28:19–20',
    body: 'Discipleship is a lifelong journey involving learning, accountability, spiritual growth and helping others to grow in faith through love, truth and service.',
  },
]

export function Beliefs() {
  return (
    <section className="py-24 px-6" style={{ background:'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-lg mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 rounded" style={{ background:'var(--holy-gold)' }}/>
            <span className="text-xs font-semibold tracking-[.18em] uppercase"
              style={{ color:'var(--holy-gold)' }}>What We Believe</span>
          </div>
          <h2 className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize:'clamp(2rem,4vw,3rem)', color:'var(--deep-indigo)' }}>
            Our Core Beliefs
          </h2>
          <div className="w-14 h-[3px] rounded mb-4"
            style={{ background:'linear-gradient(to right,var(--holy-gold),#c47e15)' }}/>
          <p className="font-display italic text-lg" style={{ color:'var(--muted,#6b5e7e)' }}>
            Anchored in the eternal truth of God&apos;s Word.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BELIEFS.map(({ title, scripture, body }) => (
            <div key={title}
              className="bg-white rounded-2xl p-6 border border-[rgba(107,75,161,0.1)] transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group"
              style={{ boxShadow:'0 2px 20px rgba(107,75,161,0.07)' }}>
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ background:'linear-gradient(to right,var(--divine-purple),var(--holy-gold))' }}/>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background:'var(--lavender-light,#f0eaf8)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="var(--divine-purple)" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                </svg>
              </div>
              <h4 className="font-serif font-bold mb-2"
                style={{ color:'var(--deep-indigo)', fontSize:'1.05rem' }}>{title}</h4>
              <p className="text-sm leading-[1.65]" style={{ color:'var(--muted,#6b5e7e)' }}>{body}</p>
              <em className="block mt-4 text-xs font-medium not-italic"
                style={{ color:'var(--gold-dark,#c47e15)' }}>{scripture}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
