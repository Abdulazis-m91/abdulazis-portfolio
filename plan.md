# plan.md

## 1. Objectives
- Deliver a polished, responsive portfolio for **Abdul Azis** matching the specified 2-state layout, fixed color schemes, and special effects.
- Implement Framer Motion-driven interactions (hero→sidebar transition, section reveals, timeline draw, project detail modal, hover glows).
- Provide a contact flow that **opens WhatsApp/mailto with a prefilled message** and **also persists submissions** to FastAPI + MongoDB.
- Use placeholder assets (profile photo, project screenshots, social links, CV PDF) that are easy to swap later.
- Ensure performance + accessibility basics (keyboard focus, reduced motion, lazy images) and smooth scroll behavior.

**Current status:** Phase 2 is complete and verified (full build shipped + backend persistence + 100% E2E test pass). Remaining work is optional refinement and enhancements only if requested.

## 2. Implementation Steps

### Phase 1: Core Flow POC (skip heavy POC; validate core flows quickly) ✅ Completed
Core workflow = **Contact submit → prefilled WhatsApp/mailto + backend persistence**.
- User stories (validated):
  1. Visitor can submit contact form and be taken to WhatsApp with message prefilled.
  2. Visitor can use email fallback with prefilled subject/body.
  3. Owner can confirm message is saved server-side.
  4. Visitor sees validation errors for missing/invalid fields.
  5. Visitor sees success feedback and can submit again.
- Backend (FastAPI): Implemented `/api/contact` (POST) validation + MongoDB persistence.
- Frontend: Implemented contact form validation + POST + WhatsApp/mailto prefill.
- Verification: Confirmed persisted messages via `/api/contact` (GET) and manual submission.

### Phase 2: V1 App Development (frontend + minimal backend) ✅ Completed
- Delivered features (verified working):
  1. Full-screen Hero (State 1) with:
     - Circular photo with blue glow border
     - Floating badges (2+ Years Exp, 5+ Projects, Full Stack Dev)
     - “Available for work” badge
     - Typing animation (3 phrases)
     - CTAs: My Portfolio + Download CV
     - Social icon row
     - Scroll indicator
  2. After-scroll layout (State 2) with:
     - Fixed left sidebar (mini avatar, name/title, icon nav, Download CV button, social icons)
     - Thin top header displaying “ABDUL AZIS” + theme toggle
     - Mobile: bottom navigation bar
  3. Sections implemented:
     - Projects grid (4 projects) with project cards + tags + CTA buttons
     - Project Detail modal (4 screenshots in 2×2 grid, description, tags, Live Demo/Go to Website)
     - Experience timeline with scroll-draw animated line
     - Tech stack grouped icon grid (devicon logos + lucide fallbacks)
     - Education cards
     - Contact section (info + form)
  4. Visual/interaction polish:
     - Custom blue cursor glow orb with smooth lerp (disabled on touch devices and reduced motion)
     - Dark/light theme toggle with animated sun/moon and persistence
     - Noise overlay for depth (no heavy gradients)
     - Smooth scroll and scrollspy highlighting active section
     - Reduced-motion support
- Backend:
  - `/api/contact` POST + GET implemented (GET used as dev verification helper)
- Assets:
  - Placeholder profile image, placeholder project images, placeholder social links, placeholder CV PDF created at `/public/cv.pdf`
- Testing:
  - E2E testing agent run: **100% pass** (backend 5/5 + all frontend features)
  - Minor a11y console warning fixed by adding `DialogDescription` in the project modal.

### Phase 3: Refinement + Production Polish (optional / only if requested)
- User stories (future):
  1. Animations feel smooth and restrained; respect reduced-motion.
  2. Site loads faster via additional performance optimizations.
  3. Keyboard navigation improvements (extra aria-label coverage, focus order checks).
  4. Owner can update content and assets easily (swap placeholders with real photo/screenshots/CV/links).
  5. Final visual QA across breakpoints.
- Proposed refinements (if requested):
  - Add a simple “asset swap checklist” + ensure all content is editable via `src/data/content.js`.
  - Tighten contrast checks and add more explicit aria labels on key icon-only controls.
  - Optional code splitting for heavy sections/modals.

### Phase 4: Optional Enhancements (only after approval)
- User stories (future):
  1. Owner can view saved contact messages in a simple admin page.
  2. Visitors can filter projects by tech tags.
  3. Visitors can switch language (ID/EN).
  4. Visitors can copy email/WhatsApp quickly.
  5. Replace placeholders with real assets and real social links.
- Possible deliverables:
  - Minimal admin viewer (optionally protected)
  - Project filtering UI
  - i18n toggle
  - Copy-to-clipboard utilities

## 3. Next Actions
- ✅ No further required development for V1 (already complete and tested).
- If you want to proceed beyond V1, choose next steps:
  1. Replace placeholders with real assets (photo, screenshots, CV PDF) + real social links.
  2. Approve/implement optional Phase 3 refinements.
  3. Approve/implement Phase 4 enhancements (admin viewer, filters, i18n, etc.).

## 4. Success Criteria
- ✅ Visual parity with specified design: 2-state layout, fixed palette, cursor glow, dark/light mode, Framer Motion animations.
- ✅ Projects section includes cards + working modal with correct content and placeholder images.
- ✅ Contact form reliably:
  - validates inputs
  - persists to MongoDB via FastAPI
  - opens WhatsApp/mailto with correct prefilled text
- ✅ Fully responsive: sidebar → bottom nav on mobile; no broken layouts.
- ✅ Performance/accessibility baseline: smooth interactions, reduced-motion support, keyboard-usable modal/nav.
- ✅ E2E testing: 100% pass; minor a11y warning fixed.
