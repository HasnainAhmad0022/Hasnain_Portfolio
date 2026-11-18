import { Award, GraduationCap, Languages } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/shared";
import { certifications, education, languages } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" aria-labelledby="education-title">
      <SectionHeading
        eyebrow={certifications.length ? "Education & certifications" : "Education"}
        title={<span id="education-title">Academic background</span>}
      />
      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        {education.map((e) => (
          <Reveal key={e.degree} className="flex flex-col gap-5 rounded-2xl border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-ink-800 text-white">
              <GraduationCap className="size-7" aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-ink-900">{e.degree}</h3>
              <p className="mt-1 text-ink-600">
                {e.school}, {e.location}
              </p>
            </div>
            <span className="num rounded-lg bg-secondary px-3 py-1.5 text-sm font-semibold text-ink-700">{e.period}</span>
          </Reveal>
        ))}

        <Reveal delay={100} className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-jade-50 text-jade-700">
              <Languages className="size-5" aria-hidden />
            </span>
            <h3 className="text-lg font-bold text-ink-900">Languages</h3>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l} className="rounded-lg border px-3 py-1.5 text-sm font-medium text-ink-700">
                {l}
              </li>
            ))}
          </ul>
        </Reveal>

        {certifications.length > 0 && (
          <Reveal className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Award className="size-5 text-jade-700" aria-hidden />
              <h3 className="text-lg font-bold text-ink-900">Certifications</h3>
            </div>
            <ul className="mt-4 space-y-2 text-ink-600">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
