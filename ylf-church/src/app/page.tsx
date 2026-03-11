import type { Metadata } from 'next'
import { Hero }          from '@/components/home/Hero'
import { WhoWeAre }      from '@/components/home/WhoWeAre'
import { MissionVision } from '@/components/home/MissionVision'
import { Beliefs }       from '@/components/home/Beliefs'
import { CtaStrip }      from '@/components/ui/CtaStrip'

export const metadata: Metadata = {
  title: "Home — Yeshua's Love Family",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MissionVision />
      <Beliefs />
      <CtaStrip />
    </>
  )
}
