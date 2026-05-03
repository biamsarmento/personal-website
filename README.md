# Beatriz Sarmento — Portfolio

A modern, multilingual personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, and **next-intl**.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **i18n**: next-intl (EN / PT / FR)
- **Fonts**: Cormorant Garamond (display) + Jost (body) via Google Fonts
- **Deployment**: Vercel (ready)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout (fonts, metadata)
│   │   └── page.tsx            # Main page (all sections)
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Root redirect → /en
│   └── globals.css             # Global styles & tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky glass navbar + language switcher
│   │   └── Footer.tsx          # Footer
│   ├── sections/
│   │   ├── HeroSection.tsx     # Full-screen hero
│   │   ├── AboutSection.tsx    # About + stats
│   │   ├── EducationSection.tsx # Timeline layout
│   │   ├── ExperienceSection.tsx # Experience + project slots
│   │   ├── SkillsSection.tsx   # Skill pill tags
│   │   └── ContactSection.tsx  # Contact cards
│   └── ui/
│       └── SectionWrapper.tsx  # Reusable section shell
├── i18n/
│   ├── request.ts              # next-intl server config
│   ├── routing.ts              # Locale routing definition
│   └── navigation.ts           # Typed navigation helpers
└── lib/
    └── useScrollReveal.ts      # Intersection Observer hook
messages/
├── en.json                     # English
├── pt.json                     # Portuguese
└── fr.json                     # French
```

---

## Customization

### Adding Your Photos

Replace image placeholders in these files:

**Hero background** (`src/components/sections/HeroSection.tsx`):
```tsx
// Find this line and replace with your image:
backgroundImage: `url('https://images.unsplash.com/...')`
// Or use a local file:
backgroundImage: `url('/images/hero.jpg')`
```

**About section photo** (`src/components/sections/AboutSection.tsx`):
```tsx
// Replace the placeholder div with:
import Image from "next/image";
<Image src="/images/about.jpg" alt="Beatriz Sarmento" fill className="object-cover" />
```

Place your images in `public/images/`.

### Adding Project Links

In `src/components/sections/ExperienceSection.tsx`, find the projects placeholder in each experience card and replace with:

```tsx
<div className="flex flex-wrap gap-3">
  <a
    href="https://your-project-url.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-body text-xs tracking-wide text-[#6b403b] border border-[#d8a4af]/50 rounded-full px-4 py-1.5 hover:bg-[#f7ddd5] transition-all duration-200"
  >
    Project Name →
  </a>
</div>
```

### Updating Social Links

Update your real URLs in:
- `src/components/sections/ContactSection.tsx` — LinkedIn & GitHub hrefs
- `src/components/layout/Footer.tsx` — LinkedIn & GitHub hrefs

### Updating Translations

All text content lives in `messages/en.json`, `messages/pt.json`, and `messages/fr.json`. Edit these to update any copy.

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — click **Deploy**

No additional environment variables needed.

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `#f7ddd5` | Blush | Background accents, CTAs |
| `#d8a4af` | Rose | Accents, labels, borders |
| `#6b403b` | Dark Rose | Text, headings |
| `#faf8f7` | Warm White | Page background |
| `#ffffff` | White | Card backgrounds |

---

## Color Customization

Update `tailwind.config.ts` to adjust the palette, and `src/app/globals.css` for CSS variables.

---

## Fonts

- **Cormorant Garamond** — Display/Headings (class: `font-display`)
- **Jost** — Body/UI (class: `font-body`)

Both loaded via `next/font/google` for optimal performance.
