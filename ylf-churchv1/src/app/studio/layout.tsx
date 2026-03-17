import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YLF Sanity Studio',
}

// Clean full-screen layout — no Navbar or Footer
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
