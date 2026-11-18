import { useMemo, useState } from "react";
import { ArrowUpRight, Globe, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Reveal, Section, SectionHeading, shortUrl } from "@/components/shared";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "All platforms", test: () => true },
  { key: "full", label: "Full stack", test: (p) => p.role.startsWith("Full Stack") },
  { key: "frontend", label: "Frontend & mobile", test: (p) => !p.role.startsWith("Full Stack") },
];

function ProjectCard({ project, index, wide }) {
  const links = project.links ?? (project.url ? [{ label: "Live project", url: project.url }] : []);
  const [roleTitle, roleNote] = project.role.split(" · ");
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 70}
      className={cn(wide && "lg:col-span-2", "group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/[.07]")}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400">{project.category}</p>
        {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} in a new tab`}
          className="grid size-9 shrink-0 place-items-center rounded-full border text-ink-500 transition-all duration-300 group-hover:border-jade-600 group-hover:bg-jade-600 group-hover:text-white"
        >
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
        )}
      </div>

      <h3 className="mt-3 text-xl font-bold text-ink-900">{project.name}</h3>
      <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-500">
        {project.url ? (
          <>
            <Globe className="size-3.5" aria-hidden /> {shortUrl(project.url)}
          </>
        ) : (
          <>
            <Smartphone className="size-3.5" aria-hidden /> {project.platformNote}
          </>
        )}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <Badge variant="jade">{roleTitle}</Badge>
        {roleNote && <Badge variant="muted">{roleNote}</Badge>}
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{project.description}</p>

      <div className="mt-4 rounded-xl bg-secondary/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">My contribution</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{project.contribution}</p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t} className="rounded-md border px-2 py-0.5 text-xs font-medium text-ink-600">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6">
        {links.map((l) => (
          <ExternalLink key={l.url} href={l.url} className="text-sm font-semibold text-jade-700 hover:text-jade-900">
            {l.label}
          </ExternalLink>
        ))}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = useMemo(() => projects.filter(filters.find((f) => f.key === filter).test), [filter]);

  return (
    <Section id="projects" className="bg-white" aria-labelledby="projects-title">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured projects"
          title={<span id="projects-title">Enterprise platforms in production</span>}
          intro="Live GS1 and GST platforms I have built or contributed to. Each card states my actual role: most of these are team projects."
          className="mb-0 sm:mb-0"
        />
        <div role="group" aria-label="Filter projects" className="flex shrink-0 gap-1 rounded-xl border bg-background p-1">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm font-medium transition-all",
                filter === f.key ? "bg-ink-800 text-white shadow-sm" : "text-ink-500 hover:text-ink-900"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={`${filter}-${p.name}`} project={p} index={i} wide={filter === "all" && p.wide} />
        ))}
      </div>
    </Section>
  );
}
