# SCUBA — AI Growth & Engineering Agency

Official flagship website for **SCUBA**, an AI Growth & Engineering Agency.

> **"We turn ideas into reality."**  
> *Dive Deeper. Build Smarter.*  
> *Understand the idea. Engineer the solution. Create the impact.*

---

## 🚀 Overview & Architecture

Built strictly in accordance with the **SCUBA Product Requirements Document (PRD v1.0)**:
- **Framework:** React 18 + Vite 6 + TypeScript (Strict)
- **Styling:** Tailwind CSS with custom SCUBA theme tokens
- **Typography:** **Sora** only (weights 300, 400, 500, 600, 700, 800)
- **Motion:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Routing:** React Router v6 with scroll restoration and skip links

---

## 🎨 Design Tokens & Palette

| Token | Hex Value | Application |
|---|---|---|
| Pure Black | `#000000` | Primary page canvas |
| Charcoal | `#1A1A1A` | Borders & subtle structural dividers |
| Violet | `#710193` | Brand accent & primary CTA fill |
| Orchid | `#AF69EF` | Interactive hover glow, text highlights, active routes |
| Deep Tint | `#210D2B` | Subtle radial ambient lighting |
| White | `#FFFFFF` | Primary headers & key wordmarks |
| Light Gray | `#DCDCDC` | Body typography |
| Muted Gray | `#A6A6A6` | Captions, secondary labels & metadata |

---

## 📂 Project Structure

```
d:\SCUBA_website\
├── public/
│   ├── scuba-hero-portrait.jpg    # Exact supplied portrait asset
│   ├── scuba-penguin.png          # Exact supplied mascot asset
│   ├── scuba-icon.svg             # Official SCUBA brand favicon & icon
│   ├── robots.txt                 # Search & crawler permissions
│   └── sitemap.xml                # Canonical URL directory
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ScrollToTop.tsx    # Instant scroll restoration on navigation
│   │   ├── home/
│   │   │   ├── Hero.tsx               # Signature portrait + 6 floating pills + dual CTAs
│   │   │   ├── BrandIntro.tsx         # Philosophy & "One partner" value prop
│   │   │   ├── ServicesCarousel.tsx   # 4 divisions horizontal scroll-snap track
│   │   │   ├── WhyScuba.tsx           # 4 core agency pillars
│   │   │   ├── ProcessTimeline.tsx    # 6-step lifecycle timeline with step switcher
│   │   │   ├── SelectedWork.tsx       # Verified case study architectures
│   │   │   ├── FaqAccordion.tsx       # Accessible FAQ with transparent qualifications
│   │   │   └── CtaBanner.tsx          # High-converting closing band
│   │   └── layout/
│   │       ├── Navbar.tsx             # 3-col CSS Grid with mathematically centred wordmark
│   │       ├── Footer.tsx             # Socials (IG, FB, WA), nav, legal, copyright
│   │       └── FloatingPenguin.tsx    # Fixed bottom-right mascot with WhatsApp link
│   ├── data/
│   │   ├── services.ts            # Typed data for 4 divisions
│   │   ├── process.ts             # 6-step delivery lifecycle
│   │   ├── faqs.ts                # Real questions & commercial qualifications
│   │   ├── projects.ts            # Representative production case studies
│   │   └── blog.ts                # 6 categories + technical research papers
│   ├── pages/
│   │   ├── HomePage.tsx           # Complete landing experience
│   │   ├── AboutPage.tsx          # Mission, Vision, Philosophy & Approach
│   │   ├── ServicesPage.tsx       # Full deliverables breakdown per division
│   │   ├── ProcessPage.tsx        # 6-stage engineering methodology
│   │   ├── WorkPage.tsx           # Portfolio grid with category filter
│   │   ├── ProjectDetailPage.tsx  # Dedicated case study detail view
│   │   ├── BlogPage.tsx           # 6-category blog index with search & empty state
│   │   ├── BlogPostPage.tsx       # Reusable markdown article template
│   │   ├── ContactPage.tsx        # Enquiry form with validation & WhatsApp fallback
│   │   ├── PrivacyPolicyPage.tsx  # GDPR & data handling policy
│   │   ├── TermsPage.tsx          # Agency terms & algorithmic disclaimers
│   │   └── NotFoundPage.tsx       # Styled 404 handler
│   ├── styles/
│   │   └── index.css              # Tailwind layer definitions & custom utilities
│   ├── types/
│   │   └── index.ts               # Shared TypeScript schemas
│   ├── App.tsx                    # Route registration & global wrappers
│   ├── main.tsx                   # React root mount
│   └── vite-env.d.ts              # Environment variable declarations
├── index.html                     # Preloaded portrait, Sora font & JSON-LD
├── tailwind.config.js             # Theme tokens & keyframe animations
├── tsconfig.json                  # Strict TypeScript configuration
└── package.json
```

---

## ⚡ Key Functional Implementations

1. **Mathematically Centered Header (NAV-1, NAV-2):**
   Uses `grid-template-columns: 1fr auto 1fr` so the SCUBA wordmark is guaranteed dead-center regardless of asymmetric link counts on desktop.
2. **Signature Hero Portrait (HERO-1 to HERO-5):**
   Supplied portrait rendered with soft vignette edges, subtle violet ambient glow, and 6 floating badge pills flanking the subject (`Web Development`, `App Development`, `SEO · AEO · GEO`, `AI Automation`, `Growth Strategy`, `Digital Experience`) keeping the face unobstructed.
3. **Floating Mascot (WA-1 to WA-3):**
   Fixed bottom-right WhatsApp mascot running with gentle float animation, pulse indicator, and instant click-to-chat with pre-filled message to `+917205325430`.
4. **Services Carousel (SVC-1 to SVC-5):**
   Drag/touch snap track with prev/next controls, progress dots, keyboard navigation, unique SVG motifs, and hover lift.
5. **Enquiry Form (CON-1 to CON-6):**
   Client-side validation, honeypot spam guard, integration with `VITE_FORM_ENDPOINT`. If unconfigured, gracefully displays a fallback with a 1-click button that pre-fills all user input directly into WhatsApp!

---

## 🛠️ Local Development & Build

### Install Dependencies:
```bash
npm install
```

### Run Local Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

---

## 🌐 Environment Variables

Create a `.env` file in the project root:

```env
# Optional: Form submission API endpoint (e.g. Formspree, Formkeep, or custom webhook)
VITE_FORM_ENDPOINT=https://formspree.io/f/your_form_id
```

If left blank, the contact form will automatically prompt the user with a 1-click WhatsApp transmission button containing all their structured answers.
