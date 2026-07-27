import { cn } from "@/lib/utils";

/** Clean "YA" monogram logo mark matching the design layout. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-500 font-bold text-white text-sm tracking-wide shadow-md">
        YA
      </span>
    </span>
  );
}