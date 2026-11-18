import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((n) => n.id);

export default function Header() {
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-white/10 bg-ink-900/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-ink-900"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-white" aria-label={`${profile.name}, back to top`}>
          <span className="grid size-9 place-items-center rounded-xl bg-white font-display text-sm font-extrabold text-ink-900">HA</span>
          <span className="hidden font-display text-[15px] font-semibold sm:block">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active === item.id ? "text-white" : "text-ink-300 hover:text-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-jade-400 transition-transform duration-300",
                      active === item.id ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="light" size="sm" className="hidden h-9 px-3.5 sm:inline-flex">
            <a href={profile.cvFile} download>
              <Download /> Download CV
            </a>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 duration-200 animate-in fade-in slide-in-from-top-2 lg:hidden">
          <ul className="container grid gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-base font-medium",
                    active === item.id ? "bg-white/10 text-white" : "text-ink-200 hover:bg-white/5"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <Button asChild variant="light" className="w-full">
                <a href={profile.cvFile} download>
                  <Download /> Download CV
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
