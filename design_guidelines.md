{
  "brand": {
    "name": "Abdul Azis — Full Stack Web Developer & IoT Engineer",
    "attributes": [
      "premium",
      "precise",
      "trustworthy",
      "quietly bold",
      "engineering-forward",
      "Indonesia-local (Lampung)"
    ],
    "north_star": "A single-page portfolio that feels like a product dashboard: calm dark space, electric-blue precision, and motion that communicates competence (not gimmicks)."
  },
  "hard_requirements": {
    "fixed_palette_from_user": {
      "dark": {
        "background_hex": "#0A0F1E",
        "primary_hex": "#2563EB",
        "accent_hex": "#60A5FA",
        "text_hex": "#E2E8F0"
      },
      "light": {
        "background_hex": "#F8FAFC",
        "primary_hex": "#2563EB",
        "accent_hex": "#1D4ED8",
        "text_hex": "#0F172A"
      }
    },
    "effects": [
      "custom cursor: blue glowing orb/shadow following mouse with smooth lerp animation; shadow color #2563EB, opacity 0.3, blur 20px",
      "dark/light mode toggle top-right with animated sun/moon",
      "Framer Motion animations throughout",
      "smooth scroll behavior",
      "prefers-reduced-motion support",
      "mobile: sidebar becomes bottom navigation"
    ],
    "layout_states": {
      "state_1_hero": "Full-screen hero, no navbar/sidebar. Left: circular photo with blue glow border + floating badges. Right: availability badge, greeting, typing animation, description, CTAs, social icons, scroll indicator bottom-right.",
      "state_2_after_scroll": "Fixed left sidebar with mini avatar + name/title + icon nav + download CV + socials; top thin header showing 'ABDUL AZIS' only."
    },
    "testing": {
      "data_testid_rule": "All interactive and key informational elements MUST include data-testid in kebab-case describing role (not appearance)."
    },
    "file_type_note": "Project uses .js (not .tsx). Guidelines and snippets must be JS-first."
  },
  "design_tokens": {
    "css_custom_properties": {
      "where": "/app/frontend/src/index.css @layer base",
      "notes": "Replace current shadcn defaults with these tokens. Keep HSL variables for shadcn compatibility; also define hex helpers for custom CSS effects (cursor glow).",
      "tokens": {
        ":root": {
          "--bg": "#F8FAFC",
          "--fg": "#0F172A",
          "--primary-hex": "#2563EB",
          "--accent-hex": "#1D4ED8",
          "--text-hex": "#0F172A",
          "--surface": "#FFFFFF",
          "--surface-2": "#F1F5F9",
          "--border-hex": "#E2E8F0",
          "--ring-hex": "#2563EB",
          "--shadow-color": "37 99 235",
          "--radius": "14px",
          "--radius-sm": "10px",
          "--radius-lg": "18px",
          "--shadow-sm": "0 1px 2px rgba(2, 6, 23, 0.06)",
          "--shadow-md": "0 10px 30px rgba(2, 6, 23, 0.10)",
          "--shadow-glow": "0 0 0 1px rgba(37, 99, 235, 0.25), 0 18px 60px rgba(37, 99, 235, 0.18)",
          "--focus-ring": "0 0 0 4px rgba(37, 99, 235, 0.22)",
          "--grid-max": "1120px",
          "--sidebar-w": "280px",
          "--header-h": "44px",
          "--bottom-nav-h": "64px"
        },
        ".dark": {
          "--bg": "#0A0F1E",
          "--fg": "#E2E8F0",
          "--primary-hex": "#2563EB",
          "--accent-hex": "#60A5FA",
          "--text-hex": "#E2E8F0",
          "--surface": "rgba(255,255,255,0.04)",
          "--surface-2": "rgba(255,255,255,0.06)",
          "--border-hex": "rgba(148,163,184,0.18)",
          "--ring-hex": "#60A5FA",
          "--shadow-sm": "0 1px 2px rgba(0,0,0,0.35)",
          "--shadow-md": "0 18px 60px rgba(0,0,0,0.45)",
          "--shadow-glow": "0 0 0 1px rgba(96, 165, 250, 0.22), 0 22px 70px rgba(37, 99, 235, 0.22)",
          "--focus-ring": "0 0 0 4px rgba(96, 165, 250, 0.22)"
        }
      }
    },
    "tailwind_usage": {
      "background": "bg-[var(--bg)]",
      "foreground": "text-[var(--fg)]",
      "surface_card": "bg-[var(--surface)] border border-[var(--border-hex)]",
      "glow_border": "ring-1 ring-[rgba(37,99,235,0.35)]",
      "glow_shadow": "shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_18px_60px_rgba(37,99,235,0.18)]",
      "focus": "focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
    },
    "spacing_system": {
      "rule": "Use 2–3x more spacing than default. Prefer 8px grid.",
      "scale_px": {
        "2": 8,
        "3": 12,
        "4": 16,
        "5": 20,
        "6": 24,
        "8": 32,
        "10": 40,
        "12": 48,
        "16": 64,
        "20": 80
      },
      "section_padding": "py-16 md:py-20",
      "container_padding": "px-4 sm:px-6 lg:px-8"
    },
    "radius": {
      "cards": "rounded-[var(--radius)]",
      "buttons": "rounded-xl",
      "chips_badges": "rounded-full"
    },
    "shadows": {
      "card_default": "shadow-[var(--shadow-sm)]",
      "card_hover": "hover:shadow-[var(--shadow-glow)]",
      "modal": "shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
    }
  },
  "typography": {
    "font_pairing": {
      "headings": {
        "google_font": "Space Grotesk",
        "weights": [500, 600, 700],
        "usage": "Hero name, section titles, sidebar name"
      },
      "body": {
        "google_font": "Inter",
        "weights": [400, 500, 600],
        "usage": "Paragraphs, labels, buttons"
      },
      "mono_accent": {
        "google_font": "Azeret Mono",
        "weights": [400, 500, 600],
        "usage": "Tech tags, small metadata (client/domain/year), code-like accents"
      }
    },
    "implementation": {
      "index_html": "Add <link> tags for Google Fonts (Space Grotesk, Inter, Azeret Mono).",
      "tailwind_classes": {
        "h1": "font-[Space_Grotesk] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl",
        "h2": "font-[Space_Grotesk] font-semibold tracking-tight text-base md:text-lg",
        "body": "font-[Inter] text-sm md:text-base leading-relaxed",
        "meta": "font-[Azeret_Mono] text-xs tracking-tight text-slate-500 dark:text-slate-400"
      }
    },
    "type_scale": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl",
      "h2": "text-base md:text-lg",
      "body": "text-sm md:text-base",
      "small": "text-xs"
    }
  },
  "layout": {
    "grid": {
      "container": "max-w-[var(--grid-max)] mx-auto",
      "desktop_structure": "After scroll: 2 columns (sidebar fixed left + main content with left padding).",
      "main_padding_desktop": "pl-[calc(var(--sidebar-w)+24px)]",
      "main_padding_mobile": "pb-[calc(var(--bottom-nav-h)+16px)]"
    },
    "hero_state_1": {
      "height": "min-h-[100svh]",
      "structure": "Two-column on lg: left photo cluster, right copy/CTAs. Stack on mobile.",
      "left_photo": {
        "size": "w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80",
        "frame": "rounded-full ring-2 ring-[rgba(37,99,235,0.55)] shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_18px_60px_rgba(37,99,235,0.18)]",
        "glow_overlay": "after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_60px_rgba(37,99,235,0.35)]"
      },
      "floating_badges": {
        "component": "Badge (shadcn)",
        "style": "bg-[var(--surface)]/80 dark:bg-[var(--surface)] backdrop-blur border border-[var(--border-hex)] text-[var(--fg)]",
        "positions": "Use absolute positions around avatar; animate with subtle y float (Framer Motion).",
        "examples": [
          "2+ Years Exp",
          "5+ Projects",
          "Full Stack Dev"
        ]
      },
      "right_copy": {
        "available_badge": "Use Badge with green dot (no palette change: use Tailwind emerald-400 for dot only). Badge background stays surface.",
        "typing_line": "Use Azeret Mono for the typed role line to feel technical.",
        "cta_row": "Primary: My Portfolio; Secondary: Download CV (outline/ghost).",
        "social_row": "lucide-react icons in IconButton style"
      },
      "scroll_indicator": {
        "position": "fixed bottom-6 right-6 (only in hero state)",
        "style": "small pill with chevron-down + 'Scroll' label; animate bounce-y (reduced motion safe)"
      }
    },
    "after_scroll_state_2": {
      "sidebar": {
        "width": "w-[var(--sidebar-w)]",
        "position": "fixed left-0 top-0 h-[100svh]",
        "surface": "bg-[var(--surface)] backdrop-blur-md border-r border-[var(--border-hex)]",
        "inner_padding": "p-5",
        "sections": [
          "mini avatar + name/title",
          "Separator",
          "icon nav (scrollspy)",
          "bottom area: Download CV + socials"
        ],
        "nav_item": {
          "hit_area": "min-h-[44px] px-3 rounded-xl",
          "default": "text-slate-600 dark:text-slate-300 hover:bg-[rgba(37,99,235,0.10)]",
          "active": "bg-[rgba(37,99,235,0.14)] text-[var(--fg)] ring-1 ring-[rgba(37,99,235,0.35)]"
        }
      },
      "top_header": {
        "height": "h-[var(--header-h)]",
        "position": "fixed top-0 left-0 right-0",
        "offset": "pl-[var(--sidebar-w)] (desktop only)",
        "style": "bg-[var(--bg)]/70 backdrop-blur border-b border-[var(--border-hex)]",
        "title": "ABDUL AZIS (Azeret Mono, tracking-widest, text-xs)"
      },
      "mobile_bottom_nav": {
        "height": "h-[var(--bottom-nav-h)]",
        "position": "fixed bottom-0 left-0 right-0",
        "style": "bg-[var(--surface)]/90 backdrop-blur border-t border-[var(--border-hex)]",
        "items": "6 icons with labels hidden on xs, shown on sm",
        "active_indicator": "small top bar (2px) in primary"
      }
    }
  },
  "components": {
    "component_path": {
      "shadcn_primary": [
        "/app/frontend/src/components/ui/button.jsx",
        "/app/frontend/src/components/ui/badge.jsx",
        "/app/frontend/src/components/ui/card.jsx",
        "/app/frontend/src/components/ui/dialog.jsx",
        "/app/frontend/src/components/ui/separator.jsx",
        "/app/frontend/src/components/ui/input.jsx",
        "/app/frontend/src/components/ui/textarea.jsx",
        "/app/frontend/src/components/ui/tooltip.jsx",
        "/app/frontend/src/components/ui/sheet.jsx",
        "/app/frontend/src/components/ui/scroll-area.jsx",
        "/app/frontend/src/components/ui/sonner.jsx"
      ],
      "recommended_new_components_to_create": [
        "src/components/CursorGlow.js",
        "src/components/ThemeToggle.js",
        "src/components/HeroState.js",
        "src/components/SidebarNav.js",
        "src/components/BottomNav.js",
        "src/components/SectionShell.js",
        "src/components/ProjectsGrid.js",
        "src/components/ProjectDetailModal.js",
        "src/components/ExperienceTimeline.js",
        "src/components/TechStackGrid.js",
        "src/components/EducationCards.js",
        "src/components/ContactSection.js"
      ]
    },
    "buttons": {
      "variants": {
        "primary": {
          "use": "shadcn Button",
          "className": "rounded-xl bg-[var(--primary-hex)] text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] focus-visible:shadow-[var(--focus-ring)]",
          "micro_interaction": "hover: translateY(-1px) + glow intensifies; active: scale(0.98)"
        },
        "secondary": {
          "use": "Button variant=outline",
          "className": "rounded-xl border-[var(--border-hex)] bg-transparent hover:bg-[rgba(37,99,235,0.08)]",
          "micro_interaction": "hover ring-1 in primary @ 0.25 opacity"
        },
        "ghost_icon": {
          "use": "Button variant=ghost size=icon",
          "className": "rounded-xl hover:bg-[rgba(37,99,235,0.10)]",
          "micro_interaction": "icon rotates 6deg on hover (Framer Motion)"
        }
      },
      "sizes": {
        "md": "h-11 px-5",
        "lg": "h-12 px-6",
        "icon": "h-10 w-10"
      },
      "data_testids": [
        "hero-portfolio-button",
        "hero-download-cv-button",
        "sidebar-download-cv-button",
        "project-card-demo-button",
        "project-card-live-website-button",
        "project-card-detail-button",
        "project-modal-live-demo-button",
        "project-modal-go-website-button",
        "contact-form-send-button"
      ]
    },
    "cards": {
      "base": "rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border-hex)] shadow-[var(--shadow-sm)]",
      "hover": "hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5",
      "project_card": {
        "thumbs": "2 thumbnails in a 2-col grid; if missing, use Skeleton components",
        "more_badge": "Badge '+X more' positioned top-right of thumbs grid",
        "tags": "Badge variant=secondary with mono font",
        "cta_row": "Demo / Live Website / Detail"
      },
      "education_card": "simple icon + degree + school + year; subtle border"
    },
    "modal": {
      "use": "shadcn Dialog",
      "overlay": "bg-black/60 backdrop-blur-sm",
      "content": "max-w-[920px] rounded-[var(--radius-lg)] bg-[var(--bg)] border border-[var(--border-hex)]",
      "gallery": "4 screenshots in 2x2 grid; use AspectRatio for consistent crops",
      "close": "top-right icon button with tooltip"
    },
    "forms": {
      "use": "shadcn Input/Textarea/Label",
      "field_style": "bg-[var(--surface)] border-[var(--border-hex)] rounded-xl focus-visible:shadow-[var(--focus-ring)]",
      "validation": "error text in red-500; keep background unchanged",
      "data_testids": [
        "contact-form-name-input",
        "contact-form-email-input",
        "contact-form-message-textarea"
      ]
    },
    "navigation": {
      "scrollspy": {
        "behavior": "Active section highlights in sidebar/bottom nav; smooth scroll to anchors.",
        "active_indicator": "left vertical 2px bar in primary + subtle glow",
        "data_testids": [
          "nav-home-link",
          "nav-projects-link",
          "nav-experience-link",
          "nav-tech-stack-link",
          "nav-education-link",
          "nav-contact-link"
        ]
      }
    },
    "toasts": {
      "use": "sonner",
      "placement": "top-right",
      "style": "surface background + blue ring; avoid gradients",
      "data_testids": [
        "toast-success",
        "toast-error"
      ]
    }
  },
  "motion": {
    "library": "Framer Motion",
    "principles": [
      "Motion communicates hierarchy: hero first, then sidebar, then sections.",
      "Use spring for UI elements; use tween for scroll-linked transforms.",
      "Respect prefers-reduced-motion: disable parallax/typing/cursor lerp intensity."
    ],
    "durations": {
      "fast": 0.18,
      "base": 0.28,
      "slow": 0.45
    },
    "easings": {
      "standard": "[0.22, 1, 0.36, 1]",
      "in_out": "[0.65, 0, 0.35, 1]"
    },
    "required_animations": {
      "hero_photo_zoom_out_on_scroll": {
        "framer": "useScroll + useTransform scale from 1.08 -> 1.0 over first ~35vh",
        "reduced_motion": "disable scale transform"
      },
      "sidebar_slide_in": {
        "framer": "initial x:-24 opacity:0 -> animate x:0 opacity:1",
        "trigger": "when scroll passes hero threshold"
      },
      "sections_fade_in": {
        "framer": "whileInView y:18 opacity:0 -> y:0 opacity:1; viewport once:true amount:0.25"
      },
      "typing_animation": {
        "implementation": "JS interval cycling strings; caret blink via CSS; pause 900ms between phrases",
        "reduced_motion": "show first phrase static"
      },
      "count_up_stats": {
        "implementation": "requestAnimationFrame count-up when hero in view",
        "reduced_motion": "render final numbers"
      },
      "card_hover": {
        "implementation": "CSS translate + shadow glow; optional Framer for subtle tilt",
        "note": "Do not use transition: all"
      },
      "timeline_draw": {
        "implementation": "motion.div height transform-origin: top; scaleY from 0 -> 1 on scroll"
      }
    }
  },
  "special_effects": {
    "custom_cursor_glow_orb": {
      "spec": {
        "color": "#2563EB",
        "opacity": 0.3,
        "blur_px": 20,
        "size_px": 44,
        "lerp": 0.12
      },
      "implementation_js": {
        "component": "CursorGlow.js",
        "dom": "<div data-testid=\"cursor-glow\" className=\"pointer-events-none fixed left-0 top-0 z-[60]\" />",
        "style": "width/height 44px; border-radius: 9999px; background rgba(37,99,235,0.18); box-shadow 0 0 20px rgba(37,99,235,0.30)",
        "lerp_logic": "Track mouse position; animate current position toward target using requestAnimationFrame; translate3d for perf.",
        "hover_reaction": "On hover of links/buttons/cards: increase blur to 28px and opacity to 0.38 (via CSS class toggle).",
        "reduced_motion": "Disable lerp loop; hide cursor glow on touch devices (pointer: coarse)."
      }
    },
    "theme_toggle": {
      "use": "shadcn Switch OR custom Button with motion",
      "preferred": "Custom button with AnimatePresence swapping Sun/Moon icons (lucide-react)",
      "placement": "top-right in hero state; in top header after scroll",
      "data_testid": "theme-toggle-button"
    },
    "noise_texture": {
      "rule": "No gradients >20% viewport. Use subtle noise overlay instead for richness.",
      "implementation": "Add a fixed pseudo-element overlay with opacity 0.04 (dark) / 0.03 (light) using a tiny noise PNG or CSS noise via repeating-radial-gradient.",
      "tailwind": "pointer-events-none fixed inset-0 z-0 opacity-[0.04] mix-blend-overlay"
    }
  },
  "sections": {
    "projects": {
      "layout": "Grid: 1 col mobile, 2 col md, 3 col xl",
      "card": "Use Card; include title, client+domain meta, short desc, thumbs, tags, CTA row",
      "modal_detail": "Dialog with 2x2 screenshots, long description, tags, buttons",
      "data_testids": {
        "section": "projects-section",
        "card": "project-card",
        "modal": "project-detail-modal"
      }
    },
    "experience": {
      "layout": "Vertical timeline with left line + nodes; content cards on right",
      "animation": "Line draws on scroll; nodes pop in",
      "data_testid": "experience-section"
    },
    "tech_stack": {
      "layout": "Grouped icon grid by category; each icon tile glows on hover",
      "tile": "rounded-xl border + subtle glow; icon + label",
      "data_testid": "tech-stack-section"
    },
    "education": {
      "layout": "Cards grid 1 col mobile, 2 col md",
      "data_testid": "education-section"
    },
    "contact": {
      "headline": "Let's Work Together 🚀 (keep emoji as provided by user in content only)",
      "layout": "2 columns on lg: left info, right form",
      "actions": "Email mailto + WhatsApp wa.me link with prefilled message",
      "data_testid": "contact-section"
    }
  },
  "responsive": {
    "breakpoints": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    },
    "rules": [
      "Mobile-first: hero stacks; CTAs wrap; social icons become 2 rows if needed.",
      "Sidebar hidden on mobile; bottom nav shown.",
      "Top header hidden in hero state; appears after scroll threshold."
    ]
  },
  "accessibility": {
    "contrast": "Text must meet WCAG AA on both themes; avoid low-opacity text below 70% on dark background.",
    "focus": "All interactive elements must have visible focus ring using --focus-ring.",
    "reduced_motion": "Use prefers-reduced-motion to disable scroll-linked transforms, typing animation, and cursor lerp.",
    "keyboard": "Dialog focus trap (shadcn) + ESC close; sidebar nav items reachable and have aria-labels."
  },
  "image_urls": {
    "profile_photo_placeholder": [
      {
        "category": "hero-avatar",
        "description": "Circular hero portrait placeholder (replace with Abdul's real photo).",
        "url": "https://images.unsplash.com/photo-1649044747879-d77b1dbcecf6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHxpbmRvbmVzaWFuJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXQlMjBzdHVkaW8lMjBoZWFkc2hvdHxlbnwwfHx8Ymx1ZXwxNzgyMzYwMzA1fDA&ixlib=rb-4.1.0&q=85"
      }
    ],
    "project_screenshot_placeholders": [
      {
        "category": "project-thumbnails",
        "description": "Generic dashboard-like screenshot placeholder for project cards and modal gallery.",
        "url": "https://images.unsplash.com/photo-1651130535340-e02c63a43a0a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwcHJvamVjdCUyMGRhc2hib2FyZCUyMG1vY2t1cCUyMHNjcmVlbnNob3R8ZW58MHx8fGJsdWV8MTc4MjM2MDMxMXww&ixlib=rb-4.1.0&q=85"
      },
      {
        "category": "project-thumbnails",
        "description": "Secondary placeholder (device + screen).",
        "url": "https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwcHJvamVjdCUyMGRhc2hib2FyZCUyMG1vY2t1cCUyMHNjcmVlbnNob3R8ZW58MHx8fGJsdWV8MTc4MjM2MDMxMXww&ixlib=rb-4.1.0&q=85"
      }
    ]
  },
  "instructions_to_main_agent": {
    "global_css_cleanup": [
      "Remove CRA default centered header styles from /app/frontend/src/App.css (do not keep .App-header centering).",
      "In /app/frontend/src/index.css, replace shadcn default tokens with the tokens in design_tokens.css_custom_properties.tokens.",
      "Add smooth scrolling: html { scroll-behavior: smooth; } but disable for prefers-reduced-motion.",
      "Add selection styling: ::selection { background: rgba(37,99,235,0.28); }"
    ],
    "structure": [
      "Implement two layout states: hero-only (no nav) and after-scroll (sidebar + top header). Use scroll threshold ~0.65 * viewport height.",
      "Use IntersectionObserver for scrollspy; update active section state for sidebar/bottom nav.",
      "Use shadcn Dialog for project detail modal; ensure focus management.",
      "All buttons/links/inputs/nav items must include data-testid attributes listed above (and add more as needed)."
    ],
    "performance": [
      "Lazy-load images (loading=lazy) and use AspectRatio for consistent layout.",
      "Cursor glow: disable on touch devices and reduced motion.",
      "Avoid heavy gradients; use noise overlay for depth."
    ]
  },
  "general_ui_ux_design_guidelines_appendix": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
