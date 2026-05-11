import { NextRequest, NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/google-sheets'
import type {
  ConnectFormData,
  ConnectFormResponse,
} from '@/types'

// ─────────────────────────────────────────────────────────────
// Simple in-memory rate limiter
// ─────────────────────────────────────────────────────────────
const rateLimitMap = new Map<
  string,
  { count: number; resetAt: number }
>()

const RATE_LIMIT = 5
const WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()

  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    })

    return false
  }

  if (entry.count >= RATE_LIMIT) {
    return true
  }

  entry.count++

  return false
}

// ─────────────────────────────────────────────────────────────
// Sanitizer
// ─────────────────────────────────────────────────────────────
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 1000)
}

// ─────────────────────────────────────────────────────────────
// Phone validation
// ─────────────────────────────────────────────────────────────
function isValidPhone(phone: string): boolean {
  return /^[+]?[\d\s\-().]{7,20}$/.test(phone)
}

// ─────────────────────────────────────────────────────────────
// POST API Route
// ─────────────────────────────────────────────────────────────
export async function POST(
  req: NextRequest
): Promise<NextResponse<ConnectFormResponse>> {
  try {
    // Get IP
    const ip =
      req.headers
        .get('x-forwarded-for')
        ?.split(',')[0]
        ?.trim() ?? 'unknown'

    // Rate limit check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Too many requests. Please try again in a minute.',
        },
        { status: 429 }
      )
    }

    // Parse request body
    let body: Partial<ConnectFormData>

    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request body.',
        },
        { status: 400 }
      )
    }

    // Validation
    if (!body.name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name is required.',
        },
        { status: 422 }
      )
    }

    if (!body.location?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Location is required.',
        },
        { status: 422 }
      )
    }

    if (
      !body.contact?.trim() ||
      !isValidPhone(body.contact)
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            'A valid contact number is required.',
        },
        { status: 422 }
      )
    }

    // Sanitize data
    const data: ConnectFormData = {
      name: sanitize(body.name),
      location: sanitize(body.location),
      contact: sanitize(body.contact),
      prayerRequest: body.prayerRequest
        ? sanitize(body.prayerRequest)
        : undefined,
    }

    // Debug env vars
    console.log(
      'GOOGLE_CLIENT_EMAIL:',
      !!process.env.GOOGLE_CLIENT_EMAIL
    )

    console.log(
      'GOOGLE_PRIVATE_KEY:',
      !!process.env.GOOGLE_PRIVATE_KEY
    )

    console.log(
      'GOOGLE_SHEET_ID:',
      !!process.env.GOOGLE_SHEET_ID
    )

    // Save to Google Sheets
    await appendToSheet(data)

    return NextResponse.json({
      success: true,
      message:
        'Your message has been received. God bless you!',
    })
  } catch (err: any) {
    console.error('──────── GOOGLE SHEETS ERROR ────────')
    console.error(err)
    console.error('─────────────────────────────────────')

    return NextResponse.json(
      {
        success: false,
        error:
          err?.message ||
          'Could not save your message. Please try again shortly.',
      },
      { status: 500 }
    )
  }
}