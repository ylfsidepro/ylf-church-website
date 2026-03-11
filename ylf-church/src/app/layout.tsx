import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ChatWidget } from '@/components/chat/ChatWidget'

export const metadata: Metadata = {
  title: {
    default:  "Yeshua's Love Family — YLF Jamshedpur",
    template: '%s | YLF Church',
  },
  description:
    "A Spirit-filled church community in Jamshedpur — worship, Bible study, and community. Where the Spirit Moves, Lives Are Transformed.",
  keywords: ['YLF', 'Yeshua Love Family', 'church Jamshedpur', 'Spirit-filled church', 'Bible study Jamshedpur'],
  authors:  [{ name: "Yeshua's Love Family" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ylf.church'),
  openGraph: {
    type:      'website',
    locale:    'en_IN',
    url:       'https://ylf.church',
    siteName:  "Yeshua's Love Family",
    title:     "Yeshua's Love Family — YLF Jamshedpur",
    description: 'Where the Spirit Moves, Lives Are Transformed.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'YLF Church' }],
  },
  twitter: { card: 'summary_large_image' },
  icons:   { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
