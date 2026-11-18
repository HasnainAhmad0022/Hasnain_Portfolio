import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Reveal({ as: Tag = "div", delay = 0, className, style, children, ...props }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={className} style={{ "--reveal-delay": `${delay}ms`, ...style }} {...props}>
      {children}
    </Tag>
  );
}

export function Section({ id, className, children, ...props }) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)} {...props}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, className }) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}

// External link: always a new tab, never leaks the referrer's window.
export function ExternalLink({ href, className, children, icon = true, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn("group/link inline-flex items-center gap-1", className)} {...props}>
      {children}
      {icon && <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export const shortUrl = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
