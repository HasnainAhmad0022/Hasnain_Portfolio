import { Briefcase, GraduationCap, Languages, MapPin } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/shared";
import { education, experience, languages, profile } from "@/data/profile";

const facts = [
  { Icon: MapPin, label: "Based in", value: `${profile.location} (on-site)` },
  { Icon: Briefcase, label: "Currently", value: `${experience[0].role} at ${experience[0].company}` },
  { Icon: GraduationCap, label: "Education", value: `BSc Information Technology, ${education[0].period}` },
  { Icon: Languages, label: "Languages", value: languages.join(", ") },
];

export default function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="About me" title={<span id="about-title">Engineering platforms that businesses run on</span>} className="mb-8 sm:mb-10" />
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-600">
            {profile.about.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 80}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="self-start rounded-2xl border bg-card p-2 shadow-sm lg:mt-24">
          <ul className="divide-y">
            {facts.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-jade-50 text-jade-700">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-400">{label}</p>
                  <p className="mt-0.5 font-medium text-ink-800">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
