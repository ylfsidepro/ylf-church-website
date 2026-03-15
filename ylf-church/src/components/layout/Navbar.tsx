'use client'

import { useState, useEffect } from 'react'
import Link                    from 'next/link'
import Image                   from 'next/image'
import { usePathname }         from 'next/navigation'

const NAV_LINKS = [
  { href: '/',                    label: 'Home'        },
  { href: '/five-fold',           label: 'Five Fold'   },
  { href: '/bible-study',         label: 'Bible Study' },
  { href: '/activity-groups',     label: 'Activities'  },
  { href: '/events',              label: 'Events'      },
  { href: '/blogs',               label: 'Blogs'       },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? 'rgba(61,44,92,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)'          : 'none',
        boxShadow:      scrolled ? '0 4px 30px rgba(61,44,92,0.3)' : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[74px]">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div
            className="relative flex-shrink-0"
            style={{
              width:        '52px',
              height:       '52px',
              borderRadius: '12px',
              overflow:     'hidden',
              boxShadow:    '0 4px 16px rgba(107,75,161,0.55)',
            }}
          >
            <Image
              src="/logo/YLF Logo.png"
              alt="Yeshua's Love Family Logo"
              fill
              sizes="52px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-bold text-[1.05rem] text-white">
              Yeshua&apos;s Love Family
            </span>
            <span
              className="text-[0.6rem] tracking-[0.15em] uppercase mt-0.5"
              style={{ color: 'var(--holy-gold)' }}
            >
              YLF · Jamshedpur
            </span>
          </div>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-3.5 py-2 text-[0.75rem] font-medium tracking-wider uppercase rounded-lg transition-colors duration-200 no-underline"
                  style={{ color: active ? 'var(--holy-gold)' : 'rgba(255,255,255,0.82)' }}
                >
                  {label}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-sm transition-transform duration-300"
                    style={{
                      background:      'var(--holy-gold)',
                      transform:       active ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                    }}
                  />
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              href="/connect"
              className="ml-2 px-4 py-2 rounded-xl text-[0.75rem] font-bold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 no-underline"
              style={{
                background: 'linear-gradient(135deg,var(--holy-gold),#c47e15)',
                color:      'var(--deep-indigo)',
              }}
            >
              Connect
            </Link>
          </li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-6 h-[2px] rounded-sm bg-white transition-all duration-300"
              style={{
                transform: mobileOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          className="lg:hidden flex flex-col px-6 pb-5 gap-1"
          style={{ background: 'rgba(61,44,92,0.98)' }}
        >
          {[...NAV_LINKS, { href: '/connect', label: 'Connect' }].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-3 px-4 rounded-lg text-sm tracking-wider uppercase transition-colors no-underline"
              style={{ color: 'rgba(255,255,255,0.85)' }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
