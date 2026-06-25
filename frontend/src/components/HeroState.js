import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import { Button } from "./ui/button";
import { PROFILE, SOCIALS } from "../data/content";
import { socialIcons } from "./iconMap";
import { TypingText } from "./TypingText";
import { CountUp } from "./CountUp";

const floatTransition = (delay) => ({
  duration: 3.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
  delay,
});

export const HeroState = ({ onNavigate }) => {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 320], [1.06, 1]);
  const photoScale = reduceMotion ? 1 : scale;

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: photo cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 flex justify-center lg:order-none"
        >
          <div className="relative">
            <motion.div
              style={{ scale: photoScale }}
              className="relative h-56 w-56 overflow-hidden rounded-full ring-2 ring-[rgba(37,99,235,0.55)] shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_18px_60px_rgba(37,99,235,0.30)] sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            >
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                loading="eager"
                className="h-full w-full object-cover" style={{ objectPosition: 'center 10%' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(37,99,235,0.25)]" />
            </motion.div>
            {/* decorative glow ring */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.25),transparent)]" />

            {/* Floating badges */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={floatTransition(0)}
              className="absolute -left-6 top-6 rounded-full border border-[var(--border-hex)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--fg)] shadow-[var(--shadow-md)] backdrop-blur sm:-left-10"
            >
              <CountUp value={2} suffix="+" /> Years Exp
            </motion.div>
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 10, 0] }}
              transition={floatTransition(0.6)}
              className="absolute -right-4 top-1/3 rounded-full border border-[var(--border-hex)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--fg)] shadow-[var(--shadow-md)] backdrop-blur sm:-right-8"
            >
              <CountUp value={5} suffix="+" /> Projects
            </motion.div>
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -8, 0] }}
              transition={floatTransition(1.1)}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--border-hex)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--fg)] shadow-[var(--shadow-md)] backdrop-blur"
            >
              Full Stack Dev
            </motion.div>
          </div>
        </motion.div>

        {/* Right: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 text-center lg:order-none lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hex)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--fg)] shadow-[var(--shadow-sm)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </div>

          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-[var(--primary-hex)]">Abdul Azis</span>
          </h1>

          <div className="font-mono-accent mt-4 min-h-[2em] text-lg text-[var(--accent-hex)] sm:text-xl">
            <TypingText phrases={PROFILE.typingPhrases} />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
            {PROFILE.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              data-testid="hero-portfolio-button"
              onClick={() => onNavigate("projects")}
              className="h-12 rounded-xl bg-[var(--primary-hex)] px-6 text-white shadow-[0_10px_30px_rgba(37,99,235,0.30)] transition-transform hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              <FolderGit2 className="mr-2 h-4 w-4" /> My Portfolio
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-xl border-[var(--border-hex)] bg-transparent px-6 text-[var(--fg)] hover:bg-[rgba(37,99,235,0.08)]"
            >
              <a href={PROFILE.cv} download data-testid="hero-download-cv-button">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {SOCIALS.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("#") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  data-testid={`hero-social-${s.name.toLowerCase()}`}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border-hex)] bg-[var(--surface)] text-[var(--fg)] transition-colors hover:bg-[rgba(37,99,235,0.10)] hover:text-[var(--primary-hex)]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => onNavigate("projects")}
        data-testid="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-[var(--border-hex)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--fg)] shadow-[var(--shadow-md)] backdrop-blur sm:flex"
      >
        Scroll
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-[var(--primary-hex)]" />
        </motion.span>
      </motion.button>
    </section>
  );
};
