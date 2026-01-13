# Transcend Documentary Website Specification

> **"Bringing the Lost Traveler Back Home"**

A cinematic one-pager experience that tells the story of human transformation, designed to captivate potential partners and investors with an emotionally resonant narrative journey.

---

## Vision Statement

This website is not a brochure. It's an **experience**—a 3-minute scroll that mirrors the documentary's promise: guiding the visitor from darkness into light, from lost to found, from fragmentation to wholeness.

Every element serves the story. Every scroll reveals another layer. By the end, visitors don't just understand what Transcend Documentary is—they *feel* why it matters.

---

## Design Philosophy

### Core Principles

1. **Cinematic Over Commercial** — Every section feels like a frame from the documentary
2. **Stillness Creates Impact** — White space is sacred; restraint builds tension
3. **Words as Poetry** — Copy is minimal but resonant; every sentence earns its place
4. **The Scroll is the Journey** — Progression mirrors the transformation arc
5. **Mystery Invites Engagement** — Reveal, don't explain

### Emotional Arc

```
OPENING     →    DESCENT    →    THE CONTAINER    →    EMERGENCE    →    INVITATION
(Wonder)         (Truth)         (Safety)              (Hope)            (Partnership)
```

---

## Visual Identity

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Void Black** | `#0A0A0A` | Primary backgrounds, depth |
| **Ash** | `#1A1A1A` | Secondary backgrounds, cards |
| **Smoke** | `#2D2D2D` | Subtle separations |
| **Mist** | `#8A8A8A` | Body text, secondary copy |
| **Cloud** | `#C9C9C9` | Emphasized body text |
| **Light** | `#F5F5F5` | Headlines, primary text |
| **Sacred Gold** | `#C9A962` | Accents, CTAs, sacred moments |
| **Ember** | `#D4A574` | Warm highlights, hope |

### Typography

| Element | Font | Weight | Size (Desktop) | Notes |
|---------|------|--------|----------------|-------|
| **Display Headlines** | Cormorant Garamond | 300 (Light) | 72-96px | Cinematic impact, letter-spacing: -0.02em |
| **Section Headlines** | Cormorant Garamond | 400 (Regular) | 48-64px | Elegance with weight |
| **Pull Quotes** | Cormorant | 400 Italic | 32-40px | Emotional resonance |
| **Body Copy** | Source Sans 3 | 300 (Light) | 18-20px | Readable, modern |
| **Captions/Labels** | Source Sans 3 | 400 | 12-14px | Uppercase, tracked |

### Photography & Video Direction

- **Aspect Ratios:** 21:9 (cinematic) for hero, 3:2 for portraits
- **Color Grading:** Desaturated, lifted blacks, warm shadows
- **Lighting:** Natural, golden hour, candlelit interiors
- **Subjects:** Faces in contemplation, hands in gesture, silhouettes against light
- **Texture:** Film grain overlay at 3-5% opacity throughout

### Motion Principles

- **Scroll-triggered reveals:** Elements fade up (20px) with 0.8s ease-out
- **Parallax depth:** Subtle (10-20% differential) on key imagery
- **Text animations:** Word-by-word reveals on key statements
- **Video:** Ambient loops (8-12s), muted, slow motion (50% speed)
- **Transitions:** Cross-dissolves between sections (0.5s)

---

## Page Structure

### Section 1: THE THRESHOLD
*Duration: Full viewport | Mood: Awe, anticipation*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              [Full-screen cinematic video loop]             │
│                  Silhouette walking toward light            │
│                                                             │
│                                                             │
│                    TRANSCEND                                │
│                                                             │
│           "Bringing the Lost Traveler Back Home"            │
│                                                             │
│                                                             │
│                        ↓                                    │
│                   [Scroll indicator]                        │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Ambient video: figure walking through darkness toward distant warm light
- Logo mark: "TRANSCEND" in Cormorant Garamond Light, tracked wide
- Tagline fades in 2s after load
- Subtle scroll indicator pulses

---

### Section 2: THE TRUTH
*Duration: 100vh | Mood: Confrontation, recognition*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│     "The darkest parts of us—                               │
│      addiction, fear, shame, trauma—                        │
│      are not defects.                                       │
│                                                             │
│      They are maps."                                        │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Single statement, word-by-word reveal on scroll
- Text in Sacred Gold against Void Black
- Pause after "defects." — then "They are maps." lands with weight
- Subtle grain texture throughout

---

### Section 3: THE TURNING
*Duration: 100vh | Mood: Shift, possibility*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│     "When we stop running from them,                        │
│      we don't just heal.                                    │
│                                                             │
│      We remember who we are."                               │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Continuation of the thesis
- Background subtly lightens (Ash → Smoke) as user scrolls
- Final line in Light (#F5F5F5) for emphasis

---

### Section 4: THE CATALYST
*Duration: 150vh | Mood: Intimacy, origin*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Portrait photograph]          "For most of my life,       │
│  Nicholas in contemplation      I was imprisoned.           │
│  Side-lit, cinematic                                        │
│                                 Addiction. Mental illness.  │
│                                 Despair.                    │
│                                                             │
│                                 Then something happened     │
│                                 that changed everything."   │
│                                                             │
│                                          — Nicholas         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Large portrait (40% width) with ambient video loop (subtle breathing/movement)
- Quote reveals line by line
- Attribution in Sacred Gold
- Scroll continues to reveal more of his story

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     "Six months after my own transformation,                │
│      I understood my calling:                               │
│                                                             │
│      To walk with others                                    │
│      into the places where they can come home."             │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### Section 5: THE CONTAINER
*Duration: 100vh | Mood: Safety, trust*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     TRANSCEND CLINIC                        │
│                                                             │
│     "A place where people are received with seriousness.    │
│      Where ancient intelligence meets modern care.          │
│      Where healing is not rushed, promised,                 │
│      or commodified."                                       │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │     [Cinematic interior video - clinic spaces]      │   │
│  │     Warm lighting, careful hands, quiet spaces      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- "TRANSCEND CLINIC" as section header (small, tracked, Mist color)
- Poetic description of the container
- Wide cinematic video (21:9) showing clinic spaces
- No explanation of treatment—only atmosphere of care

---

### Section 6: THE JOURNEYS
*Duration: 200vh | Mood: Recognition, diversity*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    A DOCUMENTARY SERIES                     │
│                                                             │
│     "This is not a story about substances.                  │
│      This is a story about people—                          │
│      and the places that help them come home."              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │          │  │          │  │          │  │          │    │
│  │  THE     │  │  THE     │  │  THE     │  │  THE     │    │
│  │  FIGHTER │  │  PASTOR  │  │  BUSINESS│  │  WIFE    │    │
│  │          │  │          │  │          │  │          │    │
│  │ Identity │  │ Faith    │  │ Success  │  │ Sacrifice│    │
│  │    &     │  │    &     │  │    &     │  │    &     │    │
│  │Performance│ │ Trauma   │  │ Armor    │  │ Survival │    │
│  │          │  │          │  │          │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Section header establishes context
- Episode cards appear on scroll (staggered, 0.2s delay each)
- Each card: silhouette/abstract portrait + title + theme
- Hover reveals brief story hook (optional on mobile: tap to reveal)
- No names—only archetypes (respects privacy while building intrigue)

**Episode Cards (Horizontal scroll on mobile):**

| Episode | Title | Theme | Story Hook |
|---------|-------|-------|------------|
| Pilot | THE CATALYST | Resurrection & Calling | "The man who walks with others because he was once lost himself." |
| 1 | THE FIGHTER | Performance & Identity | "Brain injuries. Championship belts. A father afraid of who he's becoming." |
| 2 | THE PASTOR | Faith & Trauma | "Decades preaching salvation. Still wrestling with his own." |
| 3 | THE BUSINESSMAN | Success & Armor | "Built an empire. Couldn't quiet the noise in his head." |
| 4 | THE WIFE | Sacrifice & Survival | "She saved everyone else. Almost lost herself." |
| 5 | THE CARRIER | Integrity & Preservation | "Protecting the medicine's sacred relationship with humanity." |

---

### Section 7: THE PROMISE
*Duration: 100vh | Mood: Resolution, hope*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│     "Every journey in this series asks the same question:   │
│                                                             │
│      What happens when we stop running                      │
│      and finally turn toward ourselves?"                    │
│                                                             │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │     [Cinematic video - figure turning toward        │   │
│  │      camera, light washing over their face]         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Central question that unifies all episodes
- Cinematic video: moment of turning, light reveals face
- Emotional crescendo of the page

---

### Section 8: THE INVITATION
*Duration: 100vh | Mood: Partnership, possibility*

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     PARTNERSHIP                             │
│                                                             │
│     "We're not looking for approval.                        │
│      We're looking for partners willing to steward          │
│      something meaningful."                                 │
│                                                             │
│                                                             │
│                  ┌─────────────────────┐                    │
│                  │   BEGIN THE         │                    │
│                  │   CONVERSATION      │                    │
│                  └─────────────────────┘                    │
│                                                             │
│                                                             │
│              Presented by TRANSCEND CLINIC                  │
│           A Light Brands Collective Production              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- "PARTNERSHIP" header (Sacred Gold, tracked)
- Clear statement of intent—this is about collaboration, not pitch
- Single CTA button: "BEGIN THE CONVERSATION"
- Button links to: contact form / calendly / email (TBD)
- Footer credits: Transcend Clinic + Light Brands Collective logos

---

## Technical Specifications

### Framework & Build

| Aspect | Choice | Rationale |
|--------|--------|-----------|
| **Framework** | Next.js 14 (App Router) | SSG for performance, easy deployment |
| **Styling** | Tailwind CSS + CSS Modules | Utility-first with scoped animations |
| **Animations** | Framer Motion | Scroll-triggered, performant |
| **Video** | HTML5 + lazy loading | Optimized for bandwidth |
| **Fonts** | Google Fonts (Cormorant, Source Sans 3) | Free, fast CDN |
| **Deployment** | Vercel | Zero-config, edge network |

### Performance Targets

- **Lighthouse Score:** 90+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Total Page Weight:** < 5MB (video optimized)
- **Time to Interactive:** < 3s

### Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| **Mobile** | < 640px | Single column, stacked layouts, tap interactions |
| **Tablet** | 640-1024px | Two-column where appropriate, adjusted typography |
| **Desktop** | 1024-1440px | Full experience, three/four column grids |
| **Large** | > 1440px | Max-width container (1440px), centered |

### Accessibility

- **WCAG 2.1 AA** compliance minimum
- Reduced motion media query support
- High contrast text (minimum 4.5:1 ratio)
- Keyboard navigation for all interactive elements
- Alt text for all imagery
- Semantic HTML structure

---

## Content Requirements

### Assets Needed

| Asset | Type | Specification | Status |
|-------|------|---------------|--------|
| Hero video | MP4/WebM | 1920x820 (21:9), 8-12s loop, < 8MB | Placeholder needed |
| Nicholas portrait | JPG/WebP | 1200x1600 min, cinematic lighting | Placeholder needed |
| Clinic interior video | MP4/WebM | 1920x820 (21:9), 8-12s loop | Placeholder needed |
| Episode silhouettes | SVG/PNG | 6 abstract figures, 800x1000 | Can generate |
| Turning video | MP4/WebM | 1920x1080, 6-8s loop | Placeholder needed |
| Transcend logo | SVG | Light + Dark versions | Text treatment for now |
| Light Brands logo | SVG | Footer usage | Existing or text |

### Copy Status

| Section | Status | Notes |
|---------|--------|-------|
| Hero | Complete | From brand docs |
| The Truth | Complete | Central thesis |
| The Turning | Complete | Thesis continuation |
| The Catalyst | Complete | Nicholas story |
| The Container | Complete | Clinic description |
| The Journeys | Complete | Episode framework |
| The Promise | Complete | Unifying question |
| The Invitation | Complete | Partnership stance |

---

## Success Metrics

### Engagement Goals

1. **Average scroll depth:** 80%+ reach "The Invitation" section
2. **Time on page:** 2-4 minutes average (narrative engagement)
3. **CTA conversion:** Track "Begin the Conversation" clicks
4. **Return visits:** Measure returning visitors (indicates sharing)

### Qualitative Goals

1. Visitors *feel* the story before understanding it
2. The page answers "why this matters" without explaining "how it works"
3. Partners reach out saying "I need to be part of this"
4. The page itself becomes a proof of concept for production quality

---

## Implementation Phases

### Phase 1: Foundation (Current)
- [x] Specification document
- [ ] Project scaffolding (Next.js + Tailwind)
- [ ] Typography and color system
- [ ] Basic section structure with placeholder content

### Phase 2: Core Experience
- [ ] Scroll-triggered animations
- [ ] Section content implementation
- [ ] Responsive layouts
- [ ] Episode cards component

### Phase 3: Polish
- [ ] Video integration (placeholders → real assets)
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Final copy review

### Phase 4: Launch
- [ ] Deploy to Vercel
- [ ] Custom domain setup
- [ ] Analytics integration
- [ ] Handoff to stakeholders

---

## File Structure

```
brands/transcend-documentary/
├── spec/
│   ├── MASTER-PLAN.md          # Documentary narrative spec
│   ├── WEBSITE-SPEC.md         # This document
│   └── README.md               # Spec index
└── website/
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx      # Root layout, fonts, metadata
    │   │   ├── page.tsx        # Main one-pager
    │   │   └── globals.css     # Global styles, CSS variables
    │   ├── components/
    │   │   ├── sections/
    │   │   │   ├── Hero.tsx
    │   │   │   ├── Truth.tsx
    │   │   │   ├── Turning.tsx
    │   │   │   ├── Catalyst.tsx
    │   │   │   ├── Container.tsx
    │   │   │   ├── Journeys.tsx
    │   │   │   ├── Promise.tsx
    │   │   │   └── Invitation.tsx
    │   │   ├── ui/
    │   │   │   ├── Button.tsx
    │   │   │   ├── VideoLoop.tsx
    │   │   │   ├── ScrollReveal.tsx
    │   │   │   └── EpisodeCard.tsx
    │   │   └── layout/
    │   │       ├── Section.tsx
    │   │       └── Footer.tsx
    │   └── lib/
    │       ├── animations.ts    # Framer Motion variants
    │       └── constants.ts     # Episode data, colors
    ├── public/
    │   ├── videos/
    │   ├── images/
    │   └── fonts/
    ├── tailwind.config.ts
    ├── next.config.js
    └── package.json
```

---

## Appendix: Episode Story Hooks (Extended)

For use in hover states or expanded views:

### THE CATALYST (Pilot)
> Nicholas spent most of his life imprisoned by addiction and despair. A single transformative experience didn't just change his life—it revealed his calling. Now he walks with others into the places where truth becomes possible.

### THE FIGHTER (Episode 1)
> Championship belts. Neurological damage. A father watching his hands shake while holding his daughter. The MMA fighter must decide: who is he without the fight?

### THE PASTOR (Episode 2)
> For thirty years, he told others how to be saved. Beneath the pulpit, his own trauma remained unspoken. What happens when the shepherd finally admits he's lost?

### THE BUSINESSMAN (Episode 3)
> He built companies, accumulated wealth, achieved everything society promised would bring peace. The noise in his head only grew louder. Success, he discovered, makes excellent armor—and a terrible prison.

### THE WIFE (Episode 4)
> She held the family together through every crisis. She saved her husband, her children, her marriage. In the process, she almost disappeared entirely. This is the story of a woman who finally chose herself.

### THE CARRIER (Episode 5)
> Some medicines are not products—they're relationships. This is the story of someone who dedicated their life to protecting that relationship, ensuring the ancient intelligence reaches those who need it with integrity intact.

---

*Document Version: 1.0*
*Created: January 2026*
*Status: Ready for Implementation*
