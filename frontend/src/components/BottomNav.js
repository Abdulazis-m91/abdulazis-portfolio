import { NAV_ITEMS } from "../data/content";
import { navIcons } from "./iconMap";

export const BottomNav = ({ active, onNavigate }) => {
  return (
    <nav
      data-testid="bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-40 flex h-[var(--bottom-nav-h)] items-stretch justify-around border-t border-[var(--border-hex)] bg-[var(--surface)] backdrop-blur-md lg:hidden"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = navIcons[item.icon];
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            data-testid={`bottomnav-${item.id}-link`}
            className={`relative flex flex-1 flex-col items-center justify-center gap-1 text-[10px] transition-colors ${
              isActive ? "text-[var(--primary-hex)]" : "text-muted-foreground"
            }`}
          >
            {isActive && (
              <span className="absolute top-0 h-[2px] w-8 rounded-full bg-[var(--primary-hex)]" />
            )}
            <Icon className="h-5 w-5" />
            <span className="hidden font-medium sm:block">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
