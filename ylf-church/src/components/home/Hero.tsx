'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 3 + 1

      p.style.cssText = `
        position:absolute;
        border-radius:50%;
        width:${size}px;
        height:${size}px;
        background: var(--spirit-blue);
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation:particleDrift ${Math.random() * 18 + 12}s linear infinite;
        animation-delay:${Math.random() * 10}s;
        opacity:${Math.random() * 0.5 + 0.15};
      `
      container.appendChild(p)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg,#5a0f1a 0%,#9b2335 35%,#5a0f1a 70%,#3a0b12 100%)',
      }}
    >
      {/* Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      />

      {/* Cross watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <svg width="min(65vw,560px)" height="min(65vw,560px)" viewBox="0 0 400 400" fill="none">
          <path d="M200 20L200 380M60 140L340 140" stroke="white" strokeWidth="18" strokeLinecap="round"/>
          <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="5" strokeDasharray="8 14"/>
          <circle cx="200" cy="200" r="110" stroke="white" strokeWidth="2.5" strokeDasharray="4 18"/>
        </svg>
      </div>

      {/* Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle,rgba(224,123,42,.25) 0%,transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl w-full"
        style={{ animation: 'fadeUp .9s ease .2s both' }}
      >
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2.5 border rounded-full px-5 py-2 mb-6"
          style={{
            background: 'rgba(224,123,42,.12)',
            borderColor: 'rgba(224,123,42,.28)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: 'var(--spirit-blue)',
              animation: 'shimmer 2s ease-in-out infinite',
            }}
          />
          <span
            className="text-xs font-medium tracking-[.18em] uppercase"
            style={{ color: 'var(--spirit-blue)' }}
          >
            A Spirit Filled Community in Jamshedpur
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-serif font-black leading-[1.06] mb-3 tracking-tight text-white"
          style={{ fontSize: 'clamp(2.4rem,6.5vw,4.8rem)' }}
        >
          Yeshua&apos;s<br />
          <em style={{ color: 'var(--spirit-blue)' }}>Love Family</em>
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic text-white/80 mb-3"
          style={{ fontSize: 'clamp(1.2rem,2.8vw,1.7rem)' }}
        >
          Loving God · Loving People
        </p>

        <p
          className="font-display italic mb-10"
          style={{
            fontSize: 'clamp(1rem,2vw,1.25rem)',
            color: 'rgba(224,123,42,.85)',
          }}
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">

          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,var(--spirit-blue),#c25f12)',
              color: 'var(--deep-indigo)',
            }}
          >
            Connect With Us
          </Link>

          <Link
            href="/activity-groups/broadcasting"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm border"
            style={{
              background: 'rgba(255,255,255,.08)',
              color: '#fff',
              borderColor: 'rgba(255,255,255,.25)',
            }}
          >
            Watch Broadcast
          </Link>

          <Link
            href="/bible-study"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm border"
            style={{
              background: 'rgba(255,255,255,.08)',
              color: '#fff',
              borderColor: 'rgba(255,255,255,.25)',
            }}
          >
            Bible Study
          </Link>

          <Link
            href="/five-fold"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm border"
            style={{
              background: 'rgba(255,255,255,.08)',
              color: '#fff',
              borderColor: 'rgba(255,255,255,.25)',
            }}
          >
            Five Fold Ministry
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-8 justify-center flex-wrap">
          {[
            { num: '9+', label: 'Activities', href: '/activity-groups' },
            {
              num: <span className="text-2xl">🌱</span>,
              label: 'Growing in Faith',
              href: '/connect',
            },
          ].map(({ num, label, href }) => (
            <Link key={label} href={href} className="text-center group">
              <div
                className="font-serif font-bold text-3xl"
                style={{ color: 'var(--spirit-blue)' }}
              >
                {num}
              </div>
              <div className="text-xs tracking-widest uppercase text-white/50 mt-1 group-hover:text-white/70">
                {label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: 'rgba(255,255,255,.35)' }}
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <div
          className="w-px h-9"
          style={{
            background:
              'linear-gradient(to bottom,transparent,rgba(224,123,42,.6))',
          }}
        />
        <span className="text-[0.6rem] tracking-[.14em] uppercase">Scroll</span>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(32px) }
          to { opacity:1; transform:translateY(0) }
        }
        @keyframes shimmer {
          0%,100% { opacity:.4 }
          50% { opacity:.9 }
        }
        @keyframes particleDrift {
          0% { transform:translateY(0); opacity:0 }
          10% { opacity:1 }
          90% { opacity:.5 }
          100% { transform:translateY(-120vh); opacity:0 }
        }
      `}</style>
    </section>
  )
}