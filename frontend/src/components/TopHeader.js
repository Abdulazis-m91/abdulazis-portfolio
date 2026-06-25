import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const TopHeader = ({ theme, onToggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      data-testid="top-header"
      className="fixed left-0 right-0 top-0 z-30 flex h-[var(--header-h)] items-center justify-between border-b border-[var(--border-hex)] bg-[var(--bg)]/80 px-4 backdrop-blur lg:pl-[calc(var(--sidebar-w)+24px)]"
    >
      <span className="font-mono-accent text-xs font-semibold uppercase tracking-[0.3em] text-[var(--fg)]">
        ABDUL AZIS
      </span>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} className="h-9 w-9" />
    </motion.header>
  );
};
