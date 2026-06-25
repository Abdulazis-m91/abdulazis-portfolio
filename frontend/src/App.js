import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { CursorGlow } from "@/components/CursorGlow";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroState } from "@/components/HeroState";
import { SidebarNav } from "@/components/SidebarNav";
import { BottomNav } from "@/components/BottomNav";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TechStackGrid } from "@/components/TechStackGrid";
import { EducationCards } from "@/components/EducationCards";
import { ContactSection } from "@/components/ContactSection";
import { NAV_ITEMS } from "@/data/content";

function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("aa-theme");
    const initial = stored || "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("aa-theme", next);
      return next;
    });
  }, []);

  return { theme, toggle };
}

function App() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll threshold => switch between hero state and sidebar state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
      // Bottom fallback: ensure the last section highlights at page end
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActive("contact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: a section only becomes active when it dominates the upper-center
  // band of the viewport (rootMargin shrinks the observer to a thin band).
  useEffect(() => {
    const ids = ["home", ...NAV_ITEMS.map((n) => n.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((id) => {
    setActive(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="App relative min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <CursorGlow />

      {/* Noise overlay for depth */}
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.04] mix-blend-overlay" />

      {/* Floating theme toggle (top-right, always visible) */}
      <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>

      {/* After-scroll sidebar */}
      <AnimatePresence>
        {scrolled && (
          <SidebarNav key="sidebar" active={active} onNavigate={handleNavigate} />
        )}
      </AnimatePresence>

      {/* Mobile bottom nav (only after scroll) */}
      <AnimatePresence>
        {scrolled && <BottomNav key="bottomnav" active={active} onNavigate={handleNavigate} />}
      </AnimatePresence>

      {/* Hero (full screen) */}
      <div className="relative z-10">
        <HeroState onNavigate={handleNavigate} />

        {/* Content sections */}
        <main className="relative pb-[calc(var(--bottom-nav-h)+24px)] lg:pb-0 lg:pl-[var(--sidebar-w)]">
          <div>
            <ProjectsSection />
            <ExperienceTimeline />
            <TechStackGrid />
            <EducationCards />
            <ContactSection />
            <footer className="border-t border-[var(--border-hex)] py-8">
              <div className="mx-auto max-w-[1120px] px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
                © {new Date().getFullYear()} Abdul Azis · Lampung, Indonesia
              </div>
            </footer>
          </div>
        </main>
      </div>

      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
