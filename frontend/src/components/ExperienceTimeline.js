import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { EXPERIENCE } from "../data/content";

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    className="relative pl-16"
  >
    {/* Node */}
    <span className="absolute left-[18px] top-1.5 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border-2 border-[var(--primary-hex)] bg-[var(--bg)] shadow-[0_0_0_4px_rgba(37,99,235,0.15)]">
      <span className="h-2 w-2 rounded-full bg-[var(--primary-hex)]" />
    </span>

    <div className="rounded-[var(--radius)] border border-[var(--border-hex)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-glow)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono-accent rounded-full bg-[rgba(37,99,235,0.12)] px-2.5 py-0.5 text-xs font-medium text-[var(--primary-hex)]">
          {item.period}
        </span>
        {item.current && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current
          </span>
        )}
      </div>
      <h3 className="font-display mt-3 text-lg font-semibold text-[var(--fg)]">{item.role}</h3>
      <p className="mt-0.5 text-sm font-medium text-[var(--accent-hex)]">{item.org}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
    </div>
  </motion.div>
);

export const ExperienceTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionShell
      id="experience"
      testId="experience-section"
      eyebrow="Career Path"
      title="Experience"
    >
      <div ref={ref} className="relative">
        {/* Track */}
        <div className="absolute left-[18px] top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-[var(--border-hex)]" />
        {/* Drawn line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[18px] top-0 h-full w-[2px] origin-top -translate-x-1/2 rounded-full bg-[var(--primary-hex)]"
        />
        <div className="space-y-6">
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
};
