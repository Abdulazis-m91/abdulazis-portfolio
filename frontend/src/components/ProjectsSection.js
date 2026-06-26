import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Play, X } from "lucide-react";
import { Button } from "./ui/button";
import { SectionShell } from "./SectionShell";
import { PROJECTS } from "../data/content";

const TechTag = ({ children }) => (
  <span className="font-mono-accent rounded-full border border-[var(--border-hex)] bg-[var(--surface-2)] px-2.5 py-1 text-[11px] text-[var(--fg)]">
    {children}
  </span>
);

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      data-testid="project-card"
      className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border-hex)] bg-[var(--surface)] shadow-[var(--shadow-sm)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
    >
      {/* Thumbnails */}
      <div className="relative grid grid-cols-2 gap-1 p-1">
        {project.images.slice(0, 2).map((src, i) => (
          <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[var(--surface-2)]">
            <img
              src={src}
              alt={`${project.title} preview ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
        {project.images.length > 2 && (
          <span className="absolute right-2 top-2 rounded-full bg-black/65 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur">
            +{project.images.length - 2} more
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <button
          type="button"
          onClick={() => onOpen(project)}
          data-testid="project-card-title-button"
          className="cursor-pointer text-left"
        >
          <h3 className="font-display text-lg font-semibold leading-snug text-[var(--fg)] underline-offset-4 transition-colors hover:text-[var(--primary-hex)] hover:underline">
            {project.title}
          </h3>
        </button>
        <p className="font-mono-accent mt-1 text-xs text-[var(--primary-hex)]">
          {project.client}
          {project.domain ? ` · ${project.domain}` : ""} · {project.year}
        </p>
        
        {project.system ? (
          <div className="mt-3 space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary-hex)] mb-1">📋 System</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.system}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary-hex)] mb-1">✅ Benefits</p>
              <ul className="space-y-1">
                {project.benefits.map((b, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.short}</p>
        )}

        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

       <div className="mt-5 flex flex-wrap gap-2">
          <Button
            asChild={!!project.demo && project.demo !== "#"}
            variant="ghost"
            size="sm"
            data-testid="project-card-demo-button"
            className="h-9 rounded-lg border border-[var(--border-hex)] px-3 text-xs hover:bg-[var(--primary-hex)] hover:text-white hover:border-[var(--primary-hex)]"
            onClick={project.demo === "#" ? () => onOpen(project) : undefined}
          >
            {project.demo && project.demo !== "#" ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Play className="mr-1.5 h-3.5 w-3.5" /> Demo
              </a>
            ) : (
              <span><Play className="mr-1.5 inline h-3.5 w-3.5" /> Demo</span>
            )}
          </Button>
          <Button
            asChild={!!project.live}
            disabled={!project.live}
            variant="ghost"
            size="sm"
            data-testid="project-card-live-website-button"
            className="h-9 rounded-lg border border-[var(--border-hex)] px-3 text-xs hover:bg-[var(--primary-hex)] hover:text-white hover:border-[var(--primary-hex)] disabled:opacity-50"
          >
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-1.5 h-3.5 w-3.5" /> Live Website
              </a>
            ) : (
              <span><Globe className="mr-1.5 inline h-3.5 w-3.5" /> Live Website</span>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);
  const open = !!selected;

  return (
    <SectionShell
      id="projects"
      testId="projects-section"
      eyebrow="Selected Work"
      title="Projects"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
        ))}
      </div>

      <ProjectDetailModal project={selected} open={open} onClose={() => setSelected(null)} />
    </SectionShell>
  );
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 10,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const ProjectDetailModal = ({ project, open, onClose }) => {
  // ESC to close + body scroll lock + sidebar blur while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("modal-open");
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {open && project && (
        <motion.div
          key="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          style={{ width: "100vw", height: "100vh" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-[8px]"
          aria-hidden="true"
        >
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            data-testid="project-detail-modal"
            className="relative z-[10000] mx-auto max-h-[85vh] w-full max-w-[680px] overflow-y-auto rounded-[var(--radius-lg)] border border-[var(--border-hex)] bg-[var(--bg)] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
          >
            <button
              type="button"
              onClick={onClose}
              data-testid="project-modal-close-button"
              aria-label="Close"
              className="absolute right-4 top-4 z-[10001] grid h-9 w-9 place-items-center rounded-lg border border-[var(--border-hex)] bg-[var(--surface)] text-[var(--fg)] transition-colors hover:bg-[rgba(37,99,235,0.10)]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-2 p-6 pb-0 pr-16">
              <h3 className="font-display text-2xl font-semibold text-[var(--fg)]">
                {project.title}
              </h3>
              <p className="font-mono-accent text-xs text-[var(--primary-hex)]">
                {project.client}
                {project.domain ? ` · ${project.domain}` : ""} · {project.year}
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3">
                {project.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border-hex)] bg-[var(--surface-2)]"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {project.system && (
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary-hex)] mb-1">📋 System</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.system}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary-hex)] mb-1">✅ Benefits</p>
                    <ul className="space-y-1">
                      {project.benefits.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-green-400 mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary-hex)] mb-1">📝 Description</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              )}
              {!project.system && (
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  asChild={!!project.demo && project.demo !== "#"}
                  disabled={!project.demo || project.demo === "#"}
                  data-testid="project-modal-live-demo-button"
                  className="h-11 rounded-xl bg-[var(--primary-hex)] px-5 text-white hover:bg-[#1D4ED8] disabled:opacity-50"
                >
                  {project.demo && project.demo !== "#" ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  ) : (
                    <span><Play className="mr-2 inline h-4 w-4" /> Live Demo</span>
                  )}
                </Button>
                <Button
                  asChild={!!project.live}
                  disabled={!project.live}
                  variant="outline"
                  data-testid="project-modal-go-website-button"
                  className="h-11 rounded-xl border-[var(--border-hex)] px-5 hover:bg-[rgba(37,99,235,0.08)] disabled:opacity-50"
                >
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Go to Website
                    </a>
                  ) : (
                    <span><ExternalLink className="mr-2 inline h-4 w-4" /> Go to Website</span>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
// force
// redeploy
