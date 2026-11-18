import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
];

export default function SocialLinks({ className, itemClassName }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
              "grid size-10 place-items-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5",
              itemClassName
            )}
          >
            <Icon className="size-[18px]" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
