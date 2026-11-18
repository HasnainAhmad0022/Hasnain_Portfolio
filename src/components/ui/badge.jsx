import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-ink-800 text-white",
        outline: "border-border bg-card text-ink-600",
        muted: "border-transparent bg-secondary text-ink-600",
        jade: "border-transparent bg-jade-50 text-jade-800",
        glass: "border-white/15 bg-white/[.06] text-ink-100",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
