import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[.98]",
  {
    variants: {
      variant: {
        default: "bg-ink-800 text-white shadow-sm hover:bg-ink-700",
        accent: "bg-jade-600 text-white shadow-lg shadow-jade-900/20 hover:bg-jade-700 hover:-translate-y-0.5",
        outline: "border border-input bg-card text-foreground shadow-sm hover:border-ink-300 hover:bg-secondary",
        ghost: "text-foreground hover:bg-secondary",
        light: "bg-white text-ink-800 shadow-sm hover:bg-ink-50 hover:-translate-y-0.5",
        glass: "border border-white/15 bg-white/[.06] text-white backdrop-blur hover:border-white/30 hover:bg-white/[.12] hover:-translate-y-0.5",
        link: "text-jade-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
