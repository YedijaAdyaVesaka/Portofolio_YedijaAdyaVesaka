import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Deterministic gradient "cover art" with grain + light blooms.
 * Stands in for photography anywhere an image would go — swap for
 * next/image with real assets without changing surrounding layout.
 */
export function GradientArt({
  palette,
  className,
  children,
  icon,
}: {
  palette: [string, string];
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
}) {
  const [from, to] = palette;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div aria-hidden className="noise absolute inset-0 opacity-40 mix-blend-overlay" />
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-black/20 blur-3xl"
      />
      {icon ? (
        <div className="absolute inset-0 flex items-center justify-center text-white/25">
          {icon}
        </div>
      ) : null}
      {children}
    </div>
  );
}
