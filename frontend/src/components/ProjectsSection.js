import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Eye, Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
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
        <h3 className="font-display text-lg font-semibold leading-snug text-[var(--fg)]">
          {project.title}
        </h3>
        <p className="font-mono-accent mt-1 text-xs text-[var(--primary-hex)]">
          {project.client}
          {project.domain ? ` · ${project.domain}` : ""} · {project.year}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.short}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          <Button
            asChild={!!project.demo && project.demo !== "#"}
            variant="ghost"
            size="sm"
            data-testid="project-card-demo-button"
            className="h-9 rounded-lg border border-[var(--border-hex)] px-3 text-xs hover:bg-[rgba(37,99,235,0.10)]"
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
            className="h-9 rounded-lg border border-[var(--border-hex)] px-3 text-xs hover:bg-[rgba(37,99,235,0.10)] disabled:opacity-50"
          >
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-1.5 h-3.5 w-3.5" /> Live Website
              </a>
            ) : (
              <span><Globe className="mr-1.5 inline h-3.5 w-3.5" /> Live Website</span>
            )}
          </Button>
          <Button
            size="sm"
            data-testid="project-card-detail-button"
            onClick={() => onOpen(project)}
            className="h-9 rounded-lg bg-[var(--primary-hex)] px-3 text-xs text-white hover:bg-[#1D4ED8]"
          >
            <Eye className="mr-1.5 h-3.5 w-3.5" /> Detail
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
        ))}
      </div>

      <Dialog open={open} onOpenChange={(v) => !v && setSelected(null)}>
        <DialogContent
          data-testid="project-detail-modal"
          className="max-h-[90vh] max-w-[920px] overflow-y-auto rounded-[var(--radius-lg)] border border-[var(--border-hex)] bg-[var(--bg)] p-0"
        >
          {selected && (
            <div>
              <DialogHeader className="space-y-2 p-6 pb-0">
                <DialogTitle className="font-display text-2xl font-semibold text-[var(--fg)]">
                  {selected.title}
                </DialogTitle>
                <p className="font-mono-accent text-xs text-[var(--primary-hex)]">
                  {selected.client}
                  {selected.domain ? ` · ${selected.domain}` : ""} · {selected.year}
                </p>
              </DialogHeader>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {selected.images.map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border-hex)] bg-[var(--surface-2)]"
                    >
                      <img
                        src={src}
                        alt={`${selected.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {selected.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {selected.tech.map((t) => (
                    <TechTag key={t}>{t}</TechTag>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    asChild={!!selected.demo && selected.demo !== "#"}
                    disabled={!selected.demo || selected.demo === "#"}
                    data-testid="project-modal-live-demo-button"
                    className="h-11 rounded-xl bg-[var(--primary-hex)] px-5 text-white hover:bg-[#1D4ED8] disabled:opacity-50"
                  >
                    {selected.demo && selected.demo !== "#" ? (
                      <a href={selected.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    ) : (
                      <span><Play className="mr-2 inline h-4 w-4" /> Live Demo</span>
                    )}
                  </Button>
                  <Button
                    asChild={!!selected.live}
                    disabled={!selected.live}
                    variant="outline"
                    data-testid="project-modal-go-website-button"
                    className="h-11 rounded-xl border-[var(--border-hex)] px-5 hover:bg-[rgba(37,99,235,0.08)] disabled:opacity-50"
                  >
                    {selected.live ? (
                      <a href={selected.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Go to Website
                      </a>
                    ) : (
                      <span><ExternalLink className="mr-2 inline h-4 w-4" /> Go to Website</span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionShell>
  );
};
