import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ background:'var(--deep-indigo)' }} className="text-white/70 pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background:'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))' }}>
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L14 26M5 11L23 11" stroke="#f4a535" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="font-serif font-bold text-white text-[1rem] leading-none">Yeshua's Love Family</p>
                <p className="text-[0.6rem] tracking-widest uppercase mt-0.5" style={{ color:'var(--holy-gold)' }}>YLF · Jamshedpur</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              "Where the Spirit Moves, Lives Are Transformed." A Spirit-filled church community in Jamshedpur, Jharkhand, reaching hearts for the Kingdom of God.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {[
                { label:'YouTube',   path:'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { label:'Facebook',  path:'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label:'Instagram', path:'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background:'rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--holy-gold)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d={path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="font-semibold text-white text-xs tracking-widest uppercase mb-5">Navigate</h5>
            {[
              ['/','Home'],['/five-fold','Five Fold Ministry'],['/bible-study','Bible Study'],
              ['/activity-groups','Activity Groups'],['/events','Events'],['/blogs','Blogs'],
            ].map(([href,label]) => (
              <Link key={href} href={href}
                className="block text-sm text-white/55 mb-2 no-underline transition-colors hover:text-[var(--holy-gold)]">
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-white text-xs tracking-widest uppercase mb-5">Contact</h5>
            <p className="text-sm text-white/55 mb-3 leading-relaxed">Jamshedpur<br/>Jharkhand, India</p>
            <a href="mailto:connect@ylfjamshedpur.com"
              className="block text-sm text-white/55 mb-2 no-underline transition-colors hover:text-[var(--holy-gold)]">
              connect@ylfjamshedpur.com
            </a>
            <Link href="/connect"
              className="block text-sm text-white/55 mb-2 no-underline transition-colors hover:text-[var(--holy-gold)]">
              Prayer Requests
            </Link>
            <Link href="/connect"
              className="block text-sm text-white/55 no-underline transition-colors hover:text-[var(--holy-gold)]">
              Join a Group
            </Link>
          </div>
        </div>

        <hr style={{ border:'none', borderTop:'1px solid rgba(255,255,255,0.08)', margin:'0 0 1.5rem' }}/>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© 2025 Yeshua's Love Family (YLF) · Jamshedpur · All Rights Reserved</span>
          <em className="font-display not-italic" style={{ color:'var(--holy-gold)', fontStyle:'italic', opacity:.7, fontSize:'.9rem' }}>
            "Where the Spirit Moves, Lives Are Transformed."
          </em>
        </div>
      </div>
    </footer>
  )
}
