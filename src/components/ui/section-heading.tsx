import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Eyebrow + title + description block used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const center = align === "center";

  return (
    <div className={cn("mb-12 md:mb-16", center && "text-center", className)}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 text-balance text-3xl font-bold tracking-tight md:text-5xl",
            center && "mx-auto max-w-3xl"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
              center && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
