import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { EDUCATION } from "../data/content";

export const EducationCards = () => {
  return (
    <SectionShell
      id="education"
      testId="education-section"
      eyebrow="Background"
      title="Education"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {EDUCATION.map((item, i) => {
          const Icon = item.type === "degree" ? GraduationCap : BookOpen;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 rounded-[var(--radius)] border border-[var(--border-hex)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[rgba(37,99,235,0.12)] text-[var(--primary-hex)]">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>
                  <span className="font-mono-accent rounded-full bg-[var(--surface-2)] px-2 py-0.5 text-[11px] text-muted-foreground">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--accent-hex)]">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
};
