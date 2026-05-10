export function MissionVision() {
  return (
    <section className="py-24 px-6" style={{ background:'var(--lavender-light,#f0eaf8)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 rounded" style={{ background:'var(--holy-gold)' }}/>
            <span className="text-xs font-semibold tracking-[.18em] uppercase"
              style={{ color:'var(--holy-gold)' }}>Purpose & Direction</span>
            <div className="w-8 h-0.5 rounded" style={{ background:'var(--holy-gold)' }}/>
          </div>
          <h2 className="font-serif font-bold leading-tight"
            style={{ fontSize:'clamp(2rem,4vw,3rem)', color:'var(--deep-indigo)' }}>
            Our Mission &amp; Vision
          </h2>
          <div className="w-14 h-[3px] rounded mx-auto mt-4"
            style={{ background:'linear-gradient(to right,var(--holy-gold),#c47e15)' }}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            style={{ boxShadow:'0 4px 30px rgba(107,75,161,0.1)', borderTop:`4px solid var(--divine-purple)` }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-5"
              style={{ background:'var(--divine-purple)' }}/>
            <div className="rounded-xl flex items-center justify-center mb-6 p-3 w-fit"
              style={{ background:'rgba(107,75,161,0.1)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--divine-purple)"
                strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="var(--divine-purple)"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color:'var(--deep-indigo)' }}>
              Our Mission
            </h3>
            <p className="leading-[1.8] text-lg" style={{ color:'var(--muted,#6b5e7e)' }}>
              Stage based growth and equipping lay people to become disciple makers.
            </p>
            <div className="w-12 h-[3px] rounded mt-8" style={{ background:'var(--divine-purple)' }}/>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            style={{ boxShadow:'0 4px 30px rgba(107,75,161,0.1)', borderTop:`4px solid var(--holy-gold)` }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-5"
              style={{ background:'var(--holy-gold)' }}/>
            <div className="rounded-xl flex items-center justify-center mb-6 p-3 w-fit"
              style={{ background:'rgba(244,165,53,0.12)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--holy-gold)"
                strokeWidth="2" strokeLinecap="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color:'var(--deep-indigo)' }}>
              Our Vision
            </h3>
            <p className="leading-[1.8] text-lg" style={{ color:'var(--muted,#6b5e7e)' }}>
              Connecting a million hearts <strong>globally</strong> and growing 10,000 disciples by 2030.
            </p>
            <div className="w-12 h-[3px] rounded mt-6"
              style={{ background:'linear-gradient(to right,var(--holy-gold),rgba(244,165,53,.3))' }}/>
          </div>
        </div>
      </div>
    </section>
  )
}
