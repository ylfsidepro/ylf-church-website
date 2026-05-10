'use client'

/**
 * Sanity Studio page — no [[...tool]] folder needed.
 * Place this file at: src/app/studio/page.tsx
 *
 * Access at: http://localhost:3000/studio
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity/sanity.config'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <NextStudio config={config} />
}
