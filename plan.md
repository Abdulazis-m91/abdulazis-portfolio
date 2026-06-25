# plan.md

## 1. Objectives
- Deliver a polished, responsive portfolio for **Abdul Azis** matching the specified 2-state layout, color schemes, and special effects.
- Implement Framer Motion-driven interactions (hero→sidebar transition, section reveals, timeline draw, modal project details, hover glows).
- Provide a contact flow that **opens WhatsApp/mailto with prefilled message** and **also persists submissions** to FastAPI + MongoDB.
- Use placeholder assets (profile, screenshots, social links, CV PDF) that are easy to swap later.
- Ensure performance, accessibility basics (keyboard, focus, reduced motion), and smooth scroll behavior.

## 2. Implementation Steps

### Phase 1: Core Flow POC (skip heavy POC; validate core flows quickly)
Core workflow = **Contact submit → prefilled WhatsApp/mailto + backend persistence** (only part with cross-system data flow).
- User stories:
  1. As a visitor, I can submit the contact form and immediately be taken to WhatsApp with my message prefilled.
  2. As a visitor, I can choose email as a fallback and open my mail client with subject/body prefilled.
  3. As the site owner, I can confirm the message is saved server-side even if WhatsApp/email is used.
  4. As a visitor, I see clear validation errors when fields are missing/invalid.
  5. As a visitor, I see a success state and can submit again without refreshing.
- Backend (FastAPI): add `/api/contact` POST that validates payload and writes to MongoDB.
- Frontend: minimal Contact form page that:
  - validates fields
  - POSTs to `/api/contact`
  - on success, triggers `window.open(wa.me...)` and/or `mailto:` link
- Quick verification: run locally, submit once, confirm MongoDB record exists, confirm WhatsApp/mailto opens correctly.

### Phase 2: V1 App Development (frontend + minimal backend)
- User stories:
  1. As a visitor, I land on a full-screen hero with typing animation and clear CTAs.
  2. As a visitor, when I scroll, the sidebar layout appears and navigation highlights sections.
  3. As a visitor, I can browse projects and open a modal with screenshots, details, and links.
  4. As a visitor, I can view experience as an animated timeline that draws on scroll.
  5. As a mobile user, I can navigate using a bottom nav and all sections remain readable.
- Frontend structure (React + Tailwind + Framer Motion):
  - App shell with theme provider (dark/light) and smooth scroll.
  - Custom cursor blue orb (lerp) with reduced-motion fallback.
  - Hero (State 1) with badges, typing animation, buttons, social icons, scroll indicator.
  - Scroll detection to switch into State 2:
    - Fixed left sidebar with avatar, name/title, icon nav, CV button, social icons.
    - Thin top header text “ABDUL AZIS”.
  - Sections: Projects, Experience, Tech Stack, Education, Contact.
  - Projects: cards with placeholders, tags, CTA buttons; Detail opens modal (2x2 image grid).
  - Experience: vertical timeline with animated line drawing.
  - Tech Stack: grouped icon grid with hover glow.
  - Education: cards with placeholders.
  - Contact: left info + right form (wired to Phase 1 endpoints).
- Assets:
  - Placeholder profile image + project images (static URLs) and placeholder `public/cv.pdf`.
  - Placeholder social links.
- Backend:
  - Keep `/api/contact` from Phase 1.
  - Optional: `/api/contact/recent` for quick verification in dev.
- Conclude Phase 2 with 1 round E2E testing (navigation, state switch, modals, contact submission, mobile layout).

### Phase 3: Refinement + Production Polish
- User stories:
  1. As a visitor, animations feel smooth and not distracting, and respect reduced-motion.
  2. As a visitor, the site loads fast with images lazy-loaded.
  3. As a visitor, I can use keyboard to navigate sidebar and close modals.
  4. As the owner, I can update projects/social links/CV without touching many files.
  5. As a visitor, dark/light mode persists across reloads.
- Improve accessibility: focus traps in modal, ESC close, aria labels.
- Performance: lazy loading, code splitting for modal, optimize Framer Motion usage.
- Data model: centralize content in a `content.ts` (projects/experience/skills).
- Visual QA: ensure exact colors, glow effects, hover states, responsive breakpoints.
- Conclude Phase 3 with 1 round E2E testing (desktop + mobile + reduced motion).

### Phase 4: Optional Enhancements (only after approval)
- User stories:
  1. As the owner, I can view saved contact messages in a simple admin page.
  2. As a visitor, I can filter projects by tech tags.
  3. As a visitor, I can switch language (ID/EN).
  4. As a visitor, I can copy email/WhatsApp quickly.
  5. As the owner, I can swap placeholders with real assets via a documented checklist.
- Add minimal admin viewer (no auth) or add auth if requested (with user approval).

## 3. Next Actions
- Implement Phase 1 core flow (FastAPI `/api/contact` + minimal contact form + WhatsApp/mailto prefill + Mongo persistence).
- Build Phase 2 UI skeleton and section components; wire navigation and state transition.
- Add animations + custom cursor + theme toggle; integrate project modal.
- Run E2E test pass and fix issues.

## 4. Success Criteria
- Visual parity with specified design: 2-state layout, colors, cursor glow, dark/light mode, Framer Motion animations.
- Projects section includes cards + working modal with correct content and placeholder images.
- Contact form reliably:
  - validates inputs
  - persists to MongoDB
  - opens WhatsApp/mailto with correct prefilled text
- Fully responsive: sidebar → bottom nav on mobile; no broken layouts.
- Performance/accessibility: smooth interactions, reduced-motion support, keyboard-usable modal/nav.
