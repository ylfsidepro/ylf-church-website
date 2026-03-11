export function MissionVision() {
  return (
    <section className="py-24 px-6" style={{ background:'var(--lavender-light,#f0eaf8)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 rounded" style={{ background:'var(--holy-gold)' }}/>
            <span className="text-xs font-semibold tracking-[.18em] uppercase" style={{ color:'var(--holy-gold)' }}>Purpose & Direction</span>
            <div className="w-8 h-0.5 rounded" style={{ background:'var(--holy-gold)' }}/>
          </div>
          <h2 className="font-serif font-bold leading-tight" style={{ fontSize:'clamp(2rem,4vw,3rem)', color:'var(--deep-indigo)' }}>
            Our Mission &amp; Vision
          </h2>
          <div className="w-14 h-[3px] rounded mx-auto mt-4" style={{ background:'linear-gradient(to right,var(--holy-gold),#c47e15)' }}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              type: 'mission', accent: 'var(--divine-purple)',
              iconColor: 'var(--divine-purple)', iconBg: 'rgba(107,75,161,0.1)',
              icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--divine-purple)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="var(--divine-purple)"/></svg>,
              title: 'Our Mission',
              body: "To make disciples of Yeshua HaMashiach by building authentic Spirit-filled community, equipping believers through the Five Fold ministry, and reaching our city and nation with the love and power of God.",
            },
            {
              type: 'vision', accent: 'var(--holy-gold)',
              iconColor: 'var(--holy-gold)', iconBg: 'rgba(244,165,53,0.12)',
              icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--holy-gold)" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
              title: 'Our Vision',
              body: "To see a generation arise in Jamshedpur and beyond — fully surrendered, Holy Spirit-empowered, and walking in the fullness of every gift and calling — transforming families, communities, and nations for His Kingdom.",
            },
          ].map(({ type, accent, iconBg, icon, title, body }) => (
            <div key={type}
              className="bg-white rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ boxShadow:'0 4px 30px rgba(107,75,161,0.1)', borderTop:`4px solid ${accent}` }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-5"
                style={{ background: accent }}/>
              <div className="w-13 h-13 rounded-xl flex items-center justify-center mb-6 p-3 w-fit"
                style={{ background: iconBg }}>
                {icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color:'var(--deep-indigo)' }}>{title}</h3>
              <p className="leading-[1.8] text-sm" style={{ color:'var(--muted,#6b5e7e)' }}>{body}</p>
              <div className="w-12 h-[3px] rounded mt-6" style={{ background: accent }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
