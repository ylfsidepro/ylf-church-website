import Link from 'next/link'

export function Footer() {
  const SOCIALS = [
    {
      label: 'YouTube',
      href: 'https://youtube.com/@yeshuaslovefamily?si=PcrwN2Y1iEClgQ5e',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="#FF0000"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1Bi1JpvF9D/',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="#1877F2"
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/yeshuaslovefamily?igsh=cmNkZW9oOW9hcWgy',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <defs>
            <radialGradient id="ig" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <path
            fill="url(#ig)"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"
          />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://whatsapp.com/channel/XXXXXXXXXXXX',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="#25D366"
            d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .24 5.29.24 11.82c0 2.09.55 4.14 1.59 5.95L0 24l6.41-1.68a11.8 11.8 0 0 0 5.65 1.44h.01c6.53 0 11.82-5.29 11.82-11.82 0-3.16-1.23-6.13-3.47-8.46zM12.07 21.5h-.01c-2.6 0-5.04-.7-7.16-2.02L0 24l4.6-1.2a11.8 11.8 0 0 0 7.47 2.2c6.53 0 11.82-5.29 11.82-11.82 0-6.53-5.29-11.82-11.82-11.82z"
          />
        </svg>
      ),
    },
  ]

  return (
    <footer
      style={{ background: 'var(--deep-indigo)' }}
      className="text-white/70 pt-16 pb-8 px-6"
    >
      <style>{`
        .footer-social-link {
          background: rgba(255,255,255,0.06);
          transition: all .25s ease;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .footer-social-link:hover {
          background: var(--spirit-blue);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(224,123,42,0.25);
        }

        .footer-nav-link {
          color: rgba(255,255,255,.55);
          text-decoration: none;
          font-size: .875rem;
          display: block;
          margin-bottom: .5rem;
          transition: color .2s;
        }

        .footer-nav-link:hover {
          color: var(--spirit-blue);
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Social */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest mb-5">
              Follow Us
            </h5>

            <div className="flex gap-2">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-link w-9 h-9 rounded-lg flex items-center justify-center text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest mb-5">
              Navigate
            </h5>

            <Link href="/" className="footer-nav-link">Home</Link>
            <Link href="/five-fold" className="footer-nav-link">Five Fold Ministry</Link>
            <Link href="/bible-study" className="footer-nav-link">Bible Study</Link>
            <Link href="/activity-groups" className="footer-nav-link">Activity Groups</Link>
            <Link href="/events" className="footer-nav-link">Events</Link>
            <Link href="/blogs" className="footer-nav-link">Blogs</Link>
            <Link href="/connect" className="footer-nav-link">Connect</Link>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest mb-5">
              Contact
            </h5>

            <p className="text-sm text-white/55 mb-3">
              Jamshedpur<br />Jharkhand, India
            </p>

            <a href="mailto:yeshuaslovejsr@gmail.com" className="footer-nav-link">
              yeshuaslovejsr@gmail.com
            </a>

            <Link href="/connect" className="footer-nav-link">Prayer Requests</Link>
            <Link href="/activity-groups/broadcasting" className="footer-nav-link">Watch Sermons</Link>
          </div>
        </div>

        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-white/30">
          <span>© 2026 Yeshua&apos;s Love Family · Jamshedpur</span>
          <em style={{ color: 'var(--spirit-blue)' }}>
            "Loving God · Loving People"
          </em>
        </div>
      </div>
    </footer>
  )
}
