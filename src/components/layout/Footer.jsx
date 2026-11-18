import { ArrowUp } from "lucide-react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-bold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-300">{profile.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Building enterprise platforms for traceability, supply chain and business operations, on-site in {profile.location}.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm sm:grid-cols-3">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks itemClassName="border-white/10 text-ink-200 hover:border-jade-400/60 hover:text-white" />
        </div>
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            Back to top <ArrowUp className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
