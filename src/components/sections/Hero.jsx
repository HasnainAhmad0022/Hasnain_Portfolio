import { ArrowRight, Download, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/layout/SocialLinks";
import { experience, profile, skills } from "@/data/profile";

const current = experience[0];
const stack = ["React.js", "Node.js", "Express.js", "SQL Server", "Tailwind CSS"];

// A small "code card" — a developer's way of saying hello.
function ProfileCard() {
  const rows = [
    ["role", `"${current.role}"`],
    ["company", `"${current.company}"`],
    ["location", `"${current.location}"`],
    ["focus", `["traceability", "supply chain"]`],
    ["stack", `[${stack.slice(0, 3).map((s) => `"${s}"`).join(", ")}]`],
  ];
  return (
    <div className="relative rounded-2xl border border-white/10 bg-ink-800/70 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[11px] text-ink-400">hasnain.js</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 text-ink-200" aria-label="Profile summary as code">
        <code>
          <span className="text-jade-300">const</span> <span className="text-white">developer</span> = {"{"}
          {"\n"}
          {rows.map(([k, v]) => (
            <span key={k}>
              {"  "}
              <span className="text-ink-300">{k}</span>: <span className="text-jade-200">{v}</span>,{"\n"}
            </span>
          ))}
          {"}"};
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pb-20 pt-32 text-white sm:pb-28 sm:pt-40" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-jade-500/10 blur-3xl" aria-hidden />

      <div className="container grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-medium text-ink-200 animate-fade-up">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-[ping_1.6s_cubic-bezier(0,0,.2,1)_infinite] rounded-full bg-jade-400" />
              <span className="relative inline-flex size-2 rounded-full bg-jade-400" />
            </span>
            On-site in {profile.location} · {current.company}
          </p>

          <h1 id="hero-title" className="mt-6 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:80ms]">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-jade-300 sm:text-2xl animate-fade-up [animation-delay:140ms]">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg animate-fade-up [animation-delay:200ms]">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up [animation-delay:260ms]">
            <Button asChild variant="accent" size="lg">
              <a href="#projects">
                View My Projects <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="light" size="lg">
              <a href={profile.cvFile} download>
                <Download /> Download CV
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">
                <Send /> Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up [animation-delay:320ms]">
            <SocialLinks itemClassName="border-white/10 bg-white/[.03] text-ink-200 hover:border-jade-400/60 hover:text-white" />
            <span className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden />
            <span className="inline-flex items-center gap-1.5 text-sm text-ink-400">
              <MapPin className="size-4" aria-hidden /> {profile.location}
            </span>
          </div>
        </div>

        <div className="hidden animate-fade-up [animation-delay:300ms] md:block">
          <ProfileCard />
        </div>
      </div>

      <div className="container mt-16 sm:mt-20">
        <dl className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[.03]">
          {[...profile.highlights].map((h) => (
            <div key={h.label} className="flex flex-col px-4 py-5 text-center sm:px-8 sm:py-6">
              <dt className="order-2 mt-1 text-xs text-ink-400 sm:text-sm">{h.label}</dt>
              <dd className="num order-1 font-display text-2xl font-bold text-white sm:text-4xl">{h.value}</dd>
            </div>
          ))}
        </dl>
        <p className="sr-only">Skill areas: {skills.map((s) => s.title).join(", ")}.</p>
      </div>
    </section>
  );
}
