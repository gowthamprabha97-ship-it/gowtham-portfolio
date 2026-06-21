# Gowtham Reddy Addula — AI Engineer Portfolio

> Cinematic storytelling portfolio · Next.js 15 · Framer Motion · Tailwind CSS

---

## 🚀 Quick Start

```bash
# 1. Install
npm install

# 2. Dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm start
```

---

## 📁 Asset Setup

Place these files before building:

| File | Location | Notes |
|------|----------|-------|
| Introduction video | `/public/videos/introduction.mp4` | Hero autoplay video |
| Resume PDF | `/public/resume.pdf` | Download link |
| Hero poster | `/public/images/hero-poster.jpg` | Video fallback image |
| OG image | `/public/og-image.png` | 1200×630px for SEO |
| Favicon | `/public/favicon.ico` | Browser tab icon |

```bash
# Copy uploaded video
cp /path/to/introduction.mp4 public/videos/introduction.mp4
```

---

## ☁️ Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

Or connect GitHub repo on vercel.com → auto-deploys on push.

---

## 🗂 Project Structure

```
gowtham-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page assembly
│   ├── components/
│   │   ├── Navigation.tsx  # Fixed nav with scroll behavior
│   │   └── Footer.tsx      # Stars animation footer
│   └── sections/
│       ├── HeroSection.tsx         # Fullscreen video hero
│       ├── JourneySection.tsx      # Timeline: TV → AI
│       ├── ExpertiseSection.tsx    # Skills cards
│       ├── ProjectsSection.tsx     # Projects with modals
│       ├── EcosystemSection.tsx    # Animated network graph
│       ├── ExperienceSection.tsx   # Work history
│       ├── CertificationsSection.tsx
│       └── ContactSection.tsx      # Contact form
├── public/
│   ├── videos/introduction.mp4     ← YOUR VIDEO HERE
│   ├── resume.pdf                  ← YOUR RESUME HERE
│   └── images/hero-poster.jpg      ← VIDEO POSTER
├── styles/globals.css
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| `obsidian` | `#080B12` | Background |
| `deep-space` | `#0D1117` | Section backgrounds |
| `neural-blue` | `#0EA5E9` | Primary accent |
| `plasma-violet` | `#8B5CF6` | Secondary accent |
| `signal-cyan` | `#06B6D4` | Highlights |
| `gold-spark` | `#F59E0B` | Timeline, media era |
| `ghost-white` | `#F8FAFC` | Body text |
| `muted-silver` | `#94A3B8` | Secondary text |

Fonts: **Playfair Display** (display) · **Inter** (body) · **JetBrains Mono** (code)

---

## ✏️ Customization

Update personal info in these files:

- `app/layout.tsx` — SEO metadata, title, description
- `app/sections/ContactSection.tsx` — phone, email, social links
- `app/sections/ProjectsSection.tsx` — project details
- `app/sections/ExperienceSection.tsx` — work history
- `app/sections/CertificationsSection.tsx` — certifications

---

## 📦 Tech Stack

- **Next.js 15** App Router
- **TypeScript** strict mode
- **Tailwind CSS** v3
- **Framer Motion** v11 — page animations, scroll reveals
- **Lucide React** icons
- **Canvas API** — footer star field
- **SVG** — ecosystem network graph

---

Built with ❤️ by Gowtham Reddy Addula
