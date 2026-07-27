"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/** Text input with focus ring + aria-invalid error styling built in. */
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/20",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
