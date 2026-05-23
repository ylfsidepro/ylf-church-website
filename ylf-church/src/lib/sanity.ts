import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '@/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const client = projectId ? createClient({
  projectId,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn:    process.env.NODE_ENV === 'production',
  // Server-side token for draft/authenticated fetches
  token: process.env.SANITY_API_TOKEN,
}) : null

// Image URL builder
const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImage) {
  if (!builder) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
  }
  return builder.image(source)
}

// Fetch helper with optional tags for ISR revalidation
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = []
): Promise<T> {
  if (!client) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
  }

  return client.fetch<T>(query, params, {
    next: {
      revalidate: 60, // ISR: rebuild at most once per minute
      tags,
    },
  })
}
