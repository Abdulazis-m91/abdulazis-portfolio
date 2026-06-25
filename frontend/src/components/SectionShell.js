import { motion } from "framer-motion";

export const SectionShell = ({ id, eyebrow, title, children, testId, className = "" }) => {
  return (
    <section
      id={id}
      data-testid={testId}
      className={`scroll-mt-20 pb-12 pt-10 md:pb-16 md:pt-[60px] ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 md:mb-10"
          >
            {eyebrow && (
              <span className="font-mono-accent text-xs uppercase tracking-[0.2em] text-[var(--primary-hex)]">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
                {title}
              </h2>
            )}
            <div className="mt-4 h-[2px] w-16 rounded-full bg-[var(--primary-hex)]" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
