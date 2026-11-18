import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal, Section, SectionHeading } from "@/components/shared";
import { experience } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <SectionHeading
        eyebrow="Professional experience"
        title={<span id="experience-title">Where I have built and shipped</span>}
        intro="Enterprise work across the GS1 ecosystem, now on-site in Riyadh, Saudi Arabia."
      />

      <ol className="relative space-y-8 sm:space-y-10">
        <span className="absolute bottom-4 left-[15px] top-4 w-px bg-border sm:left-[19px]" aria-hidden />
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 100} className="relative pl-12 sm:pl-16">
            <span
              className={cn(
                "absolute left-0 top-6 grid size-8 place-items-center rounded-full border-4 border-background sm:size-10",
                job.onsite ? "bg-jade-600" : "bg-ink-700"
              )}
              aria-hidden
            >
              <span className="size-2 rounded-full bg-white" />
            </span>

            <article
              className={cn(
                "rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-ink-900/[.05] sm:p-8",
                job.onsite && "border-jade-200 ring-1 ring-jade-100"
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">{job.company}</h3>
                    {job.onsite && <Badge variant="jade">Saudi Arabia · On-site</Badge>}
                    {i === 0 && <Badge variant="muted">Current</Badge>}
                  </div>
                  <p className="mt-1 font-display text-base font-semibold text-jade-700">{job.role}</p>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-ink-500 sm:items-end">
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink-700">
                    <CalendarDays className="size-4" aria-hidden /> {job.period}
                  </span>
                  {job.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4" aria-hidden /> {job.location}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-600">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-jade-600" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2 border-t pt-5" aria-label="Technologies">
                {job.tech.map((t) => (
                  <li key={t}>
                    <Badge variant="outline">{t}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
