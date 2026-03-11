export function WhoWeAre() {
  return (
    <section id="about" className="py-24 px-6" style={{ background:'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 rounded" style={{ background:'var(--holy-gold)' }}/>
            <span className="text-xs font-semibold tracking-[.18em] uppercase" style={{ color:'var(--holy-gold)' }}>Who We Are</span>
          </div>
          <h2 className="font-serif font-bold leading-tight mb-4" style={{ fontSize:'clamp(2rem,4vw,3rem)', color:'var(--deep-indigo)' }}>
            A Family Rooted<br/>in His Presence
          </h2>
          <div className="w-14 h-[3px] rounded mb-6" style={{ background:'linear-gradient(to right,var(--holy-gold),#c47e15)' }}/>

          {[
            'Yeshua\'s Love Family (YLF) is a vibrant, Spirit-filled church community nestled in the heart of Jamshedpur. We are a people gathered not by tradition alone, but by a shared passion for encountering the living God.',
            'Our community is built on authentic relationships, deep worship, and a commitment to see every life transformed by the love of Yeshua. From our weekly Zoom gatherings to our open homes and activity groups, we believe church is not a building — it\'s a family.',
            'Whether you are searching, growing, or simply hungry for more of God — you belong here.',
          ].map((para, i) => (
            <p key={i} className="text-[1rem] leading-[1.85] mb-4" style={{ color:'var(--muted,#6b5e7e)' }}>
              {para}
            </p>
          ))}

          {/* Value chips */}
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              { label:'Spirit-Led' },
              { label:'Love-Centered' },
              { label:'Community' },
              { label:'Apostolic' },
            ].map(({ label }) => (
              <span key={label}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium"
                style={{ background:'var(--lavender-light,#f0eaf8)', color:'var(--divine-purple)' }}>
                ✦ {label}
              </span>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="relative h-[400px]">
          {/* Main card */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden flex items-center justify-center"
            style={{ background:'linear-gradient(145deg,var(--deep-indigo),var(--divine-purple))', boxShadow:'0 8px 40px rgba(107,75,161,0.22)' }}>
            <div className="text-center p-12">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-5 opacity-15">
                <path d="M40 8L40 72M12 30L68 30" stroke="white" strokeWidth="6" strokeLinecap="round"/>
              </svg>
              <blockquote className="font-display italic text-xl text-white/90 leading-relaxed">
                "For where two or three gather in my name, there am I with them."
              </blockquote>
              <cite className="block mt-3 text-xs tracking-widest uppercase not-italic" style={{ color:'var(--holy-gold)' }}>
                — Matthew 18:20
              </cite>
            </div>
          </div>
          {/* Accent badge */}
          <div className="absolute -bottom-4 -right-4 rounded-2xl px-5 py-4 shadow-xl min-w-[140px]"
            style={{ background:'var(--holy-gold)' }}>
            <p className="font-serif text-3xl font-black leading-none" style={{ color:'var(--deep-indigo)' }}>Zoom</p>
            <p className="text-xs tracking-widest uppercase opacity-70 mt-1" style={{ color:'var(--deep-indigo)' }}>Weekly Gatherings</p>
          </div>
        </div>
      </div>
    </section>
  )
}
