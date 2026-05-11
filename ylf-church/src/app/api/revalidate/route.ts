import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag }             from 'next/cache'

/**
 * Called by a Sanity webhook on every content publish.
 * Configure the webhook in sanity.io/manage → API → Webhooks:
 *   URL:    https://yourdomain.com/api/revalidate?secret=YOUR_SECRET
 *   Method: POST
 *   Trigger: on publish
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ success: false, error: 'Invalid secret.' }, { status: 401 })
  }

  let body: { _type?: string } = {}
  try {
    body = await req.json()
  } catch {
    // Ignore parse errors — revalidate all tags
  }

  // Map Sanity document types → ISR cache tags
  const tagMap: Record<string, string> = {
    home:              'home',
    fiveFoldMinistry:  'fiveFold',
    bibleStudy:        'bibleStudy',
    activityGroup:     'activityGroups',
    broadcastVideo:    'broadcast',
    event:             'events',
    blog:              'blog',
  }

  const tag = body._type ? tagMap[body._type] : null

  if (tag) {
    revalidateTag(tag)
    console.log(`[Revalidate] Tag "${tag}" cleared.`)
  } else {
    // Revalidate everything
    Object.values(tagMap).forEach(t => revalidateTag(t))
    console.log('[Revalidate] All tags cleared.')
  }

  return NextResponse.json({ success: true, revalidated: tag ?? 'all' })
}
