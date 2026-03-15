import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
// Rate limiting store (in-memory)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
  return ip
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // max 5 submissions per 15 min per IP

  const record = rateLimitMap.get(key)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (record.count >= maxRequests) return true

  record.count++
  return false
}

function sanitize(str: string): string {
  // Remove HTML tags, trim whitespace, limit length
  return str
    .replace(/<[^>]*>/g, '')       // strip HTML tags
    .replace(/[<>"'`]/g, '')       // remove dangerous chars
    .trim()
    .slice(0, 500)                 // max 500 chars
}

function isValidPhone(phone: string): boolean {
  // Accepts Indian phone numbers: 10 digits, optionally starting with +91
  return /^(\+91)?[6-9]\d{9}$/.test(phone.replace(/\s/g, ''))
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const allowedPlans = [
  'Term Life Insurance',
  'Endowment Plan',
  'Child Plan',
  'Pension / Retirement',
  'Money Back Plan',
  'Not Sure — Need Guidance',
  '',
]

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting
    const rateLimitKey = getRateLimitKey(req)
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again after 15 minutes.' },
        { status: 429 }
      )
    }

    // 2. Content-Type check
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type.' },
        { status: 415 }
      )
    }

    // 3. Parse body
    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body.' },
        { status: 400 }
      )
    }

    const { name, phone, email, plan, message } = body as Record<string, string>

    // 4. Required field validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required.' },
        { status: 400 }
      )
    }

    // 5. Type checks
    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      (email && typeof email !== 'string') ||
      (plan && typeof plan !== 'string') ||
      (message && typeof message !== 'string')
    ) {
      return NextResponse.json(
        { error: 'Invalid field types.' },
        { status: 400 }
      )
    }

    // 6. Sanitize all inputs
    const cleanName = sanitize(name)
    const cleanPhone = sanitize(phone)
    const cleanEmail = email ? sanitize(email) : ''
    const cleanPlan = plan ? sanitize(plan) : ''
    const cleanMessage = message ? sanitize(message) : ''

    // 7. Validate name length
    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      )
    }

    // 8. Validate phone
    if (!isValidPhone(cleanPhone)) {
      return NextResponse.json(
        { error: 'Please enter a valid Indian phone number.' },
        { status: 400 }
      )
    }

    // 9. Validate email if provided
    if (cleanEmail && !isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // 10. Validate plan against allowed values
    if (cleanPlan && !allowedPlans.includes(cleanPlan)) {
      return NextResponse.json(
        { error: 'Invalid plan selected.' },
        { status: 400 }
      )
    }

    // 11. Save to MongoDB
    const client = await clientPromise
    const db = client.db('lic_agent')
    const collection = db.collection('leads')

    const result = await collection.insertOne({
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      plan: cleanPlan,
      message: cleanMessage,
      submittedAt: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }),
      status: 'new',
      ip: rateLimitKey,
    })

    // 12. Secure response — don't expose internal IDs
    return NextResponse.json(
      { success: true },
      {
        status: 201,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
        },
      }
    )

  } catch (error) {
    // Don't expose error details to client
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}