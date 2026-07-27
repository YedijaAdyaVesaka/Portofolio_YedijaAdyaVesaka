import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Small status/label pill. Server-safe. */
export function Badge({
  children,
  className,
  variant = "soft",
}: {
  children: ReactNode;
  className?: string;
  variant?: "soft" | "outline" | "glass";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variant === "soft" && "bg-primary/10 text-primary",
        variant === "outline" && "border border-border text-muted-foreground",
        variant === "glass" && "glass text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
