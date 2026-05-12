export function WhoWeAre() {
  return (
    <section id="about" className="py-24 px-6" style={{ background:'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 rounded" style={{ background:'var(--holy-gold)' }}/>
            <span className="text-xs font-semibold tracking-[.18em] uppercase" style={{ color:'var(--holy-gold)' }}>
              Who We Are
            </span>
          </div>
          <h2 className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize:'clamp(2rem,4vw,3rem)', color:'var(--deep-indigo)' }}>
            A Family Rooted<br/>in His Presence
          </h2>
          <div className="w-14 h-[3px] rounded mb-6"
            style={{ background:'linear-gradient(to right,var(--holy-gold),#c47e15)' }}/>

          {[
            "Yeshua's Love Family (YLF) is a vibrant, Spirit-filled church community nestled in the heart of Jamshedpur. We are a people gathered not by tradition alone, but by a shared passion for encountering the living God.",
            "Our community is built on authentic relationships, deep worship, and a commitment to see every life transformed by the love of Yeshua. From our weekly Zoom gatherings to our open homes and activity groups, we believe church is not a building — it's a family.",
            "Whether you are searching, growing, or simply hungry for more of God — you belong here.",
          ].map((para, i) => (
            <p key={i} className="text-[1rem] leading-[1.85] mb-4" style={{ color:'var(--muted,#6b5e7e)' }}>
              {para}
            </p>
          ))}

          {/* Value chips — Apostolic removed */}
          <div className="flex flex-wrap gap-2 mt-5">
            {['Spirit-Led', 'Love-Centered', 'Community', 'Growing in Faith'].map(label => (
              <span key={label}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium"
                style={{ background:'var(--lavender-light,#f0eaf8)', color:'var(--divine-purple)' }}>
                ✦ {label}
              </span>
            ))}
          </div>
        </div>
             
        {/* Visual — two stacked image panels */}
        <div className="relative h-[280px] w-[580px]">
          {/* Main image card */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{ boxShadow:'0 2px 28px rgba(107,75,161,0.22)' }}>
            {/* Generic community image — replace src with a real photo */}
            <img
              src="/images/Team.jpeg"
              alt="Community gathering"
              className="w-full h-full object-cover"
              loading="lazy"
            />
                {/* Overlay with scripture */}
            <div className="absolute inset-0 flex flex-col justify-start p-1 items-center"
              style={{ background:"linear-gradient(to bottom, rgba(20,15,35,0.88) 0%, rgba(20,15,35,0.45) 35%, transparent 70%)"}}>
              <blockquote className="font-display italic text-1xl text-white leading-relaxed drop-shadow-lg max-w-1xl">
                &quot;For where two or three gather in my name,there am I with them.&quot;
              </blockquote>
              <cite className="block mt-0 text-lg tracking-widest uppercase not-italic"
                style={{ color:'var(--holy-gold)' }}>
                — Matthew 18:20
              </cite>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
