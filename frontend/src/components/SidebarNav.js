import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PROFILE, NAV_ITEMS, SOCIALS } from "../data/content";
import { navIcons, socialIcons } from "./iconMap";

export const SidebarNav = ({ active, onNavigate }) => {
  return (
    <motion.aside
      initial={{ x: -28, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -28, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      data-testid="sidebar-nav"
      className="fixed left-0 top-0 z-40 hidden h-[100svh] w-[var(--sidebar-w)] flex-col border-r border-[var(--border-hex)] bg-[var(--surface)] p-5 backdrop-blur-md lg:flex"
    >
      {/* Identity */}
      <button
        onClick={() => onNavigate("home")}
        className="flex items-center gap-3 rounded-xl p-1 text-left"
        data-testid="sidebar-identity"
      >
        <span className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-[rgba(37,99,235,0.55)]">
          <img src={PROFILE.photo} alt={PROFILE.name} className="h-full w-full object-cover" />
        </span>
        <span>
          <span className="font-display block text-sm font-semibold text-[var(--fg)]">
            {PROFILE.name}
          </span>
          <span className="block text-xs text-muted-foreground">{PROFILE.title}</span>
        </span>
      </button>

      <div className="my-5 h-px w-full bg-[var(--border-hex)]" />

      {/* Nav */}
      <nav className="no-scrollbar flex-1 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = navIcons[item.icon];
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              data-testid={`nav-${item.id}-link`}
              className={`group relative flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-sm transition-colors ${
                isActive
                  ? "bg-[rgba(37,99,235,0.14)] text-[var(--fg)] ring-1 ring-[rgba(37,99,235,0.35)]"
                  : "text-muted-foreground hover:bg-[rgba(37,99,235,0.10)] hover:text-[var(--fg)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active-bar"
                  className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-[var(--primary-hex)]"
                />
              )}
              <Icon className="h-[18px] w-[18px]" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom: CV + socials */}
      <div className="mt-4 space-y-4">
        <a
          href={PROFILE.cv}
          download
          data-testid="sidebar-download-cv-button"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary-hex)] text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition-transform hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
        >
          <Download className="h-4 w-4" /> Download CV
        </a>
        <div className="flex items-center justify-center gap-2">
          {SOCIALS.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith("#") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.name}
                data-testid={`sidebar-social-${s.name.toLowerCase()}`}
                className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border-hex)] text-muted-foreground transition-colors hover:bg-[rgba(37,99,235,0.10)] hover:text-[var(--primary-hex)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};
