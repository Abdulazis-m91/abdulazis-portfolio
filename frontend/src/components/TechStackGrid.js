import { useState } from "react";
import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { TECH_GROUPS } from "../data/content";
import { lucideMap } from "./iconMap";

const TechTile = ({ item, index }) => {
  const [imgError, setImgError] = useState(false);
  const Fallback = item.lucide ? lucideMap[item.lucide] : null;
  const showFallback = !item.logo || imgError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ scale: 1.06 }}
      className="group flex flex-col items-center gap-2.5 rounded-xl border border-[var(--border-hex)] bg-[var(--surface)] p-4 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-glow)]"
    >
      <div className="grid h-11 w-11 place-items-center">
        {showFallback ? (
          Fallback ? (
            <Fallback className="h-8 w-8 text-[var(--primary-hex)]" />
          ) : (
            <span className="font-display text-lg font-bold text-[var(--primary-hex)]">
              {item.name.charAt(0)}
            </span>
          )
        ) : (
          <img
            src={item.logo}
            alt={item.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </div>
      <span className="text-center text-xs font-medium text-[var(--fg)]">{item.name}</span>
    </motion.div>
  );
};

export const TechStackGrid = () => {
  return (
    <SectionShell
      id="tech-stack"
      testId="tech-stack-section"
      eyebrow="Toolbox"
      title="Tech Stack"
    >
      <div className="space-y-10">
        {TECH_GROUPS.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono-accent mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {group.category}
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
              {group.items.map((item, i) => (
                <TechTile key={item.name} item={item} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};
