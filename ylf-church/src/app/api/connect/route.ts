import { NextRequest, NextResponse } from 'next/server'
import { appendToSheet }             from '@/lib/google-sheets'
import type { ConnectFormData, ConnectFormResponse } from '@/types'

// Simple in-memory rate limiter (resets on cold start)
// For production, use Upstash Redis or Vercel KV
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT    = 5    // max requests
const WINDOW_MS     = 60_000 // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now  = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

// Simple sanitizer — strips HTML tags
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 1000)
}

// Validate phone — Indian mobile format
function isValidPhone(phone: string): boolean {
  return /^[+]?[\d\s\-().]{7,20}$/.test(phone)
}

export async function POST(req: NextRequest): Promise<NextResponse<ConnectFormResponse>> {
  // Get client IP for rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    )
  }

  let body: Partial<ConnectFormData>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  // ── Validate required fields ──
  if (!body.name?.trim()) {
    return NextResponse.json({ success: false, error: 'Name is required.' }, { status: 422 })
  }
  if (!body.location?.trim()) {
    return NextResponse.json({ success: false, error: 'Location is required.' }, { status: 422 })
  }
  if (!body.contact?.trim() || !isValidPhone(body.contact)) {
    return NextResponse.json({ success: false, error: 'A valid contact number is required.' }, { status: 422 })
  }

  // ── Sanitize ──
  const data: ConnectFormData = {
    name:           sanitize(body.name),
    location:       sanitize(body.location),
    contact:        sanitize(body.contact),
    prayerRequest:  body.prayerRequest ? sanitize(body.prayerRequest) : undefined,
  }

  try {
    await appendToSheet(data)
    return NextResponse.json({ success: true, message: 'Your message has been received. God bless you!' })
  } catch (err) {
    console.error('[Connect API] Sheet append failed:', err)
    return NextResponse.json(
      { success: false, error: 'Could not save your message. Please try again shortly.' },
      { status: 500 }
    )
  }
}
