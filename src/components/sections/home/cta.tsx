import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Reusable closing call-to-action panel (used on most pages). */
export function CTASection({
  title = "Have an idea? Let's build something custom.",
  description = "Reach out to discuss web engineering, graphic design, game development, or IoT systems projects.",
  primaryLabel = "Get in touch",
  primaryHref = `https://wa.me/${siteConfig.whatsapp}`,
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-primary via-secondary to-accent px-6 py-16 text-center text-white md:px-16 md:py-24">
            <div aria-hidden className="noise absolute inset-0 opacity-30 mix-blend-overlay" />
            <div
              aria-hidden
              className="animate-drift absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-black/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {primaryHref.startsWith("http") ? (
                  <a
                    href={primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "white", size: "lg" }), "group")}
                  >
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link
                    href={primaryHref}
                    className={cn(buttonVariants({ variant: "white", size: "lg" }), "group")}
                  >
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                {secondaryLabel && secondaryHref && (
                  <Link
                    href={secondaryHref}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "border-white/40 bg-white/10 text-white backdrop-blur hover:border-white/70 hover:bg-white/20"
                    )}
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
