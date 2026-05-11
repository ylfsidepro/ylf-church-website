import { groq } from 'next-sanity'

// ─── Home / Hero ──────────────────────────────────────────────────
export const homeQuery = groq`
  *[_type == "home"][0] {
    tagline,
    subTagline,
    heroImage,
    missionStatement,
    visionStatement
  }
`

// ─── Five Fold Ministry ──────────────────────────────────────────
export const fiveFoldQuery = groq`
  *[_type == "fiveFoldMinistry"] | order(orderRank) {
    _id, title, role, description, scripture, icon
  }
`

// ─── Bible Study ──────────────────────────────────────────────────
export const bibleStudyQuery = groq`
  *[_type == "bibleStudy"][0] {
    _id, title, description, zoomLink, schedule, scripture
  }
`

// ─── Activity Groups ──────────────────────────────────────────────
export const activityGroupsQuery = groq`
  *[_type == "activityGroup"] | order(name asc) {
    _id, name, description, schedule, zoomLink, icon
  }
`

// ─── Broadcasting Videos ─────────────────────────────────────────
export const broadcastVideosQuery = groq`
  *[_type == "broadcastVideo"] | order(publishDate desc) {
    _id, title, description, youtubeUrl, featured, publishDate
  }
`

export const featuredBroadcastQuery = groq`
  *[_type == "broadcastVideo" && featured == true][0] {
    _id, title, description, youtubeUrl, publishDate
  }
`

// ─── Events ───────────────────────────────────────────────────────
export const eventsQuery = groq`
  *[_type == "event"] | order(date asc) {
    _id, title, date, description, location, tag, registrationLink
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc)[0...6] {
    _id, title, date, description, location, tag, registrationLink
  }
`

// ─── Blogs ────────────────────────────────────────────────────────
export const blogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id, title,
    slug { current },
    excerpt, author, publishedAt, category,
    mainImage { asset, alt }
  }
`

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id, title,
    slug { current },
    excerpt, body, author, publishedAt, category,
    mainImage { asset, alt }
  }
`

export const blogSlugsQuery = groq`
  *[_type == "blog"] { slug { current } }
`
