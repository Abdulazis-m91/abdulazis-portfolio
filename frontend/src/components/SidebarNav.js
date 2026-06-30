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
        className="flex w-full flex-col items-center gap-2 rounded-xl p-1 text-center"
        data-testid="sidebar-identity"
      >
        <span className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-[rgba(37,99,235,0.55)] shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_10px_30px_rgba(37,99,235,0.25)]">
          <img src={PROFILE.photo} alt={PROFILE.name} className="h-full w-full object-cover" />
        </span>
        <span className="mt-1">
          <span className="font-display block text-base font-semibold text-[var(--fg)]">
            {PROFILE.name}
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">{PROFILE.title}</span>
        </span>
      </button>

      <div className="my-5 h-px w-full bg-[var(--border-hex)]" />

      {/* Nav (breaks out to the sidebar edges so the active bar is flush) */}
      <nav className="no-scrollbar -mx-5 flex-1 space-y-1 overflow-y-auto py-1">
        {NAV_ITEMS.map((item) => {
          const Icon = navIcons[item.icon];
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              data-testid={`nav-${item.id}-link`}
              aria-current={isActive ? "true" : undefined}
              className={`flex h-12 w-full items-center gap-3 border-l-[3px] pl-[17px] pr-4 text-sm transition-colors ${
                isActive
                  ? "border-[#2563EB] bg-[rgba(37,99,235,0.15)] text-[var(--fg)]"
                  : "border-transparent text-muted-foreground hover:bg-[rgba(37,99,235,0.10)] hover:text-[var(--fg)]"
              }`}
            >
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
          <Download className="h-4 w-4" /> Download RESUME
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
                className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border-hex)] text-muted-foreground transition-colors hover:bg-[var(--primary-hex)] hover:text-white hover:border-[var(--primary-hex)]"
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
