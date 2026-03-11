'use client'

import { useEffect, useRef } from 'react'
import Link                  from 'next/link'

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 3 + 1
      p.style.cssText = `
        position:absolute; border-radius:50%;
        width:${size}px; height:${size}px;
        background:var(--holy-gold);
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation: particleDrift ${Math.random() * 18 + 12}s linear infinite;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${Math.random() * 0.6 + 0.2};
      `
      container.appendChild(p)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background:'linear-gradient(145deg,#1a0f30 0%,#3d2c5c 40%,#5c3a8a 70%,#2a1a4a 100%)' }}>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Watermark cross */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity:.04 }}>
        <svg width="min(70vw,600px)" height="min(70vw,600px)" viewBox="0 0 400 400" fill="none"
          style={{ animation:'rotateSlow 80s linear infinite' }}>
          <path d="M200 20L200 380M60 140L340 140" stroke="white" strokeWidth="18" strokeLinecap="round"/>
          <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="6" strokeDasharray="8 12"/>
          <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="3" strokeDasharray="4 16"/>
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(107,75,161,.35) 0%,transparent 70%)', filter:'blur(40px)' }}/>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl"
        style={{ animation:'fadeUp .9s ease .2s both' }}>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 border rounded-full px-5 py-2 mb-8"
          style={{ background:'rgba(244,165,53,.15)', borderColor:'rgba(244,165,53,.3)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background:'var(--holy-gold)', animation:'shimmer 2s ease-in-out infinite' }}/>
          <span className="text-xs font-medium tracking-[.18em] uppercase" style={{ color:'var(--holy-gold)' }}>
            Jamshedpur, Jharkhand · Spirit-Filled Community
          </span>
        </div>

        <h1 className="font-serif font-black leading-[1.06] mb-5 tracking-tight"
          style={{ fontSize:'clamp(2.6rem,7vw,5.2rem)', color:'#fff' }}>
          Yeshua's<br/>
          <em style={{ color:'var(--holy-gold)' }}>Love Family</em>
        </h1>

        <p className="font-display italic text-white/75 leading-relaxed mb-10"
          style={{ fontSize:'clamp(1.1rem,2.5vw,1.5rem)' }}>
          "Where the Spirit Moves,<br/>Lives Are Transformed."
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/connect"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 no-underline"
            style={{ background:'linear-gradient(135deg,var(--holy-gold),#c47e15)', color:'var(--deep-indigo)' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Join Our Community
          </Link>
          <Link href="/activity-groups/broadcasting"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 no-underline"
            style={{ background:'transparent', color:'#fff', border:'2px solid rgba(255,255,255,0.3)' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Watch Our Sermons
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-10 justify-center mt-12 flex-wrap">
          {[
            { num:'7+',  label:'Activity Groups' },
            { num:'5',   label:'Fold Ministries'  },
            { num:'∞',   label:"God's Love"        },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif font-bold text-3xl" style={{ color:'var(--holy-gold)' }}>{num}</div>
              <div className="text-xs tracking-widest uppercase text-white/45 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color:'rgba(255,255,255,.4)', animation:'fadeIn 1s ease 1.2s both' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}>
        <div className="w-px h-10" style={{ background:'linear-gradient(to bottom,transparent,rgba(244,165,53,.6))' }}/>
        <span className="text-[0.65rem] tracking-[.14em] uppercase">Scroll</span>
      </div>

      {/* Keyframes injected */}
      <style>{`
        @keyframes fadeUp      { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn      { from{opacity:0} to{opacity:1} }
        @keyframes shimmer     { 0%,100%{opacity:.4} 50%{opacity:.9} }
        @keyframes rotateSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes particleDrift{ 0%{transform:translateY(0);opacity:0} 10%{opacity:1} 90%{opacity:.6} 100%{transform:translateY(-120vh);opacity:0} }
      `}</style>
    </section>
  )
}
