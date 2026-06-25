import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = ({ theme, onToggle, className = "" }) => {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      data-testid="theme-toggle-button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative grid h-10 w-10 place-items-center rounded-xl border border-[var(--border-hex)] bg-[var(--surface)] text-[var(--fg)] transition-colors hover:bg-[rgba(37,99,235,0.10)] focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.22 }}
            className="absolute"
          >
            <Moon className="h-[18px] w-[18px] text-[var(--accent-hex)]" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.22 }}
            className="absolute"
          >
            <Sun className="h-[18px] w-[18px] text-[var(--primary-hex)]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
