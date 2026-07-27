import { cn } from "@/lib/utils";

/** Loading placeholder with a shimmer sweep (see globals.css). */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("shimmer rounded-2xl bg-muted", className)} />;
}
