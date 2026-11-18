import * as React from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "flex w-full rounded-xl border border-input bg-card px-3.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-ink-400 hover:border-ink-300 focus-visible:border-jade-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-600/20 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-500";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input type={type} ref={ref} className={cn(fieldClass, "h-11", className)} {...props} />
));
Input.displayName = "Input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldClass, "min-h-[140px] resize-y py-3", className)} {...props} />
));
Textarea.displayName = "Textarea";

function Label({ className, ...props }) {
  return <label className={cn("text-sm font-medium text-ink-700", className)} {...props} />;
}

export { Input, Textarea, Label };
