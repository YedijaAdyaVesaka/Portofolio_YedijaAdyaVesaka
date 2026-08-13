"use client";

import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

/** 404 — keeps the brand voice and offers useful exits. */
export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
      />
      <div
        aria-hidden
        className="animate-drift absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="container relative text-center">
        <Reveal>
          <p className="gradient-text text-[7rem] font-bold leading-none tracking-tight md:text-[11rem]">
            404
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-4xl">
            {t("notfound.title")}
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {t("notfound.desc")}
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "gradient", size: "lg" }), "group")}
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t("notfound.home")}
            </Link>
            <Link
              href="/portfolio"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Compass className="h-4 w-4 text-primary" />
              {t("notfound.work")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
