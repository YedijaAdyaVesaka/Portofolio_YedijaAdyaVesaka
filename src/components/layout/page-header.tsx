import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

/** Hero block shared by all inner pages — keeps the site rhythm consistent. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
      {/* Backdrop: blueprint grid + soft brand bloom */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="container relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
