// ─── Sanity Image ─────────────────────────────────────────────────
export interface SanityImage {
  asset: { _ref: string; _type: 'reference' }
  alt?: string
}

// ─── Broadcast Video ──────────────────────────────────────────────
export interface BroadcastVideo {
  _id: string
  title: string
  description?: string
  youtubeUrl: string
  featured: boolean
  publishDate: string
}

// ─── Event ────────────────────────────────────────────────────────
export interface ChurchEvent {
  _id: string
  title: string
  date: string
  description: string
  location?: string
  tag?: string
  registrationLink?: string
}

// ─── Blog Post ────────────────────────────────────────────────────
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: unknown          // Portable Text
  author: string
  publishedAt: string
  category?: string
  mainImage?: SanityImage
}

// ─── Bible Study ──────────────────────────────────────────────────
export interface BibleStudy {
  _id: string
  title: string
  description: string
  zoomLink: string
  schedule: string
  scripture: string
}

// ─── Five Fold Ministry ──────────────────────────────────────────
export interface FiveFoldMinistry {
  _id: string
  title: string
  role: 'apostle' | 'prophet' | 'evangelist' | 'pastor' | 'teacher'
  description: string
  scripture: string
  icon: string
}

// ─── Activity Group ───────────────────────────────────────────────
export interface ActivityGroup {
  _id: string
  name: string
  description: string
  schedule?: string
  zoomLink?: string
  icon?: string
}

// ─── Connect Form ─────────────────────────────────────────────────
export interface ConnectFormData {
  name: string
  location: string
  contact: string
  prayerRequest?: string
}

export interface ConnectFormResponse {
  success: boolean
  message?: string
  error?: string
}
