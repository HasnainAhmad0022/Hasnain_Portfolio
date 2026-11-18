import { Boxes, Database, LayoutTemplate, Plug, Server, Wrench, ScanBarcode } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/shared";
import { domainExpertise, skills } from "@/data/profile";

const icons = {
  frontend: LayoutTemplate,
  backend: Server,
  state: Boxes,
  api: Plug,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  return (
    <Section id="skills" className="bg-white" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Technical skills"
        title={<span id="skills-title">A full-stack toolkit, centred on React</span>}
        intro="The technologies I use in production every day, from interface to database to deployment."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[group.key];
          return (
            <Reveal
              key={group.key}
              delay={(i % 3) * 80}
              className="group rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-jade-200 hover:bg-white hover:shadow-xl hover:shadow-ink-900/[.06]"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-ink-800 text-white transition-colors duration-300 group-hover:bg-jade-600">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-ink-900">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item} className="rounded-lg border bg-white px-2.5 py-1 text-[13px] font-medium text-ink-700">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-6 flex flex-col gap-4 rounded-2xl border border-dashed border-jade-200 bg-jade-50/60 p-6 sm:flex-row sm:items-center">
        <span className="flex items-center gap-3 font-display font-bold text-jade-900">
          <ScanBarcode className="size-5" aria-hidden /> Domain knowledge
        </span>
        <ul className="flex flex-wrap gap-2">
          {domainExpertise.map((d) => (
            <li key={d} className="rounded-lg bg-white px-2.5 py-1 text-[13px] font-medium text-jade-800 shadow-sm">
              {d}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
