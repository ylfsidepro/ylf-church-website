# Yeshua's Love Family (YLF) — Church Website

> "Where the Spirit Moves, Lives Are Transformed."

A production-ready, full-stack church website built with **Next.js 14**, **Sanity CMS**, and **Google Sheets API**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in values
cp .env.local.example .env.local

# 3. Run dev server
npm run dev
```

Open [](http://localhost:3000)

---

## 📁 Project Structure    

```
ylf-church/
├── public/
│   ├── logo/
│   │   └── YLF Logo.png          ← Place official logo here
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx             ← Root layout (Navbar, Footer, Chat)
│   │   ├── page.tsx               ← Home page
│   │   ├── five-fold/page.tsx
│   │   ├── bible-study/page.tsx
│   │   ├── activity-groups/
│   │   │   ├── page.tsx
│   │   │   └── broadcasting/page.tsx
│   │   ├── events/page.tsx
│   │   ├── blogs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── connect/page.tsx
│   │   └── api/
│   │       ├── connect/route.ts   ← Google Sheets API handler
│   │       └── revalidate/route.ts
│   ├── components/
│   │   ├── layout/   (Navbar, Footer)
│   │   ├── ui/       (Button, Card, SectionHeader, EventCard, BlogCard…)
│   │   ├── home/     (Hero, WhoWeAre, MissionVision, Beliefs)
│   │   ├── broadcasting/ (YouTubeEmbed, BroadcastGrid)
│   │   ├── connect/  (ConnectForm)
│   │   └── chat/     (ChatWidget)
│   ├── lib/
│   │   ├── sanity.ts
│   │   ├── sanity-queries.ts
│   │   └── google-sheets.ts
│   └── types/index.ts
├── sanity/
│   ├── sanity.config.ts
│   └── schemas/
│       ├── home.ts
│       ├── fiveFold.ts
│       ├── bibleStudy.ts
│       ├── activityGroup.ts
│       ├── broadcastVideo.ts
│       ├── event.ts
│       └── blog.ts
└── .env.local
```

---

## 🔑 Environment Variables

Create `.env.local` (never commit this file):

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token

# Google Sheets
GOOGLE_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_sheet_id

# App
NEXT_PUBLIC_SITE_URL=https://ylf.church
SANITY_REVALIDATE_SECRET=random_secret_string
```

---

## 🗂️ Sanity CMS Setup

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Note your **Project ID**
3. Add it to `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`
4. Add CORS origins in Sanity dashboard:
   - `http://localhost:3000`
   - `https://your-vercel-url.vercel.app`
   - `https://ylf.church`
5. Access Studio at `/studio` after deployment

---

## 📊 Google Sheets Setup

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create project → Enable **Google Sheets API**
3. **IAM & Admin → Service Accounts** → Create `ylf-sheets-writer`
4. Create JSON key → save securely
5. Create Google Sheet with headers:
   `Name | Location | Contact Number | Prayer Request | Date & Time`
6. Share sheet with service account email (Editor)
7. Copy Sheet ID from URL into `GOOGLE_SHEET_ID`

---

## 🎥 Broadcasting (YouTube)

- No YouTube API key needed
- Add YouTube URLs in Sanity CMS under **Broadcast Videos**
- Full URLs: `https://www.youtube.com/watch?v=VIDEO_ID`
- The embed component automatically extracts the video ID

---

## 🚢 Vercel Deployment

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Add all environment variables in Vercel Dashboard → Settings → Environment Variables
4. Deploy → Done!

**Sanity Webhook for ISR:**
- URL: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
- Trigger: On Publish

---

## 🎨 Brand Colors

| Variable          | Hex       | Usage                    |
|-------------------|-----------|--------------------------|
| `--divine-purple` | `#6b4ba1` | Primary, buttons, borders|
| `--holy-gold`     | `#f4a535` | Highlights, CTAs          |
| `--spirit-blue`   | `#4a90e2` | Links, secondary accents  |
| `--deep-indigo`   | `#3d2c5c` | Headings, hero, footer    |
| `--soft-lavender` | `#d6c7e3` | Section backgrounds       |

---

## ✅ Pre-Launch Checklist

- [ ] Logo placed at `/public/logo/YLF Logo.png`
- [ ] All env vars set in Vercel
- [ ] Sanity CORS configured
- [ ] Google Sheet shared with service account
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] YouTube embeds playing on Broadcasting page
- [ ] Connect form saving to Google Sheet
- [ ] Chat widget responding to keywords
- [ ] Mobile responsive on all pages
- [ ] `npm run type-check` passes (no TS errors)
- [ ] `npm run lint` passes (no ESLint errors)

---

*Built for the Kingdom — Yeshua's Love Family, Jamshedpur*
