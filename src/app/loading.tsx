import { Skeleton } from "@/components/ui/skeleton";

/** Route-level skeleton shown while a page's server payload streams in. */
export default function Loading() {
  return (
    <div className="container pb-24 pt-40">
      <Skeleton className="h-8 w-44 rounded-full" />
      <Skeleton className="mt-7 h-14 w-full max-w-2xl" />
      <Skeleton className="mt-4 h-14 w-2/3 max-w-xl" />
      <Skeleton className="mt-6 h-5 w-full max-w-lg" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-64 rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
