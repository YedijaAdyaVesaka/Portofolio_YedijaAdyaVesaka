import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee (pure CSS). Children are duplicated for a
 * seamless loop; the copy is aria-hidden. Pauses on hover.
 */
export function Marquee({
  children,
  className,
  duration = "34s",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-14 pr-14 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        {children}
        <div aria-hidden className="contents">
          {children}
        </div>
      </div>
    </div>
  );
}
