"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import Carousel from "@/components/ui/carousel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { projectCategories, projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/** Interactive Project Gallery section powered by React Bits Carousel with 3D Tilt */
export function PortfolioPreview() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const projectSlides = filteredProjects.map((project, idx) => (
    <div
      key={project.slug}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/95 to-card/90 dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-black p-6 shadow-xl transition-all duration-500 hover:border-[#2B66FF]/60 hover:shadow-2xl hover:shadow-blue-500/15"
    >
      {/* Background gradient graphics / subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle, ${project.palette?.[0] || "#2B66FF"} 0%, transparent 70%)`,
        }}
      />

      {/* Top Bar: Number badge (e.g. 01) & Tags */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-xs font-bold text-foreground backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white">
          {String(idx + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/80 bg-background/70 px-3 py-1 text-[11px] font-medium text-foreground/80 backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-900/60 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Middle Illustration / Mockup Card Art */}
      <div className="relative z-10 my-auto flex items-center justify-center py-4">
        {project.image ? (
          <div className="relative flex aspect-video w-full max-w-[280px] overflow-hidden rounded-2xl border border-border/70 dark:border-white/15 shadow-md backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 280px, 280px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="relative flex aspect-video w-full max-w-[260px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-background/90 via-muted/60 to-background/90 dark:border-white/10 dark:from-zinc-800/80 dark:via-zinc-900/90 dark:to-zinc-950 p-4 shadow-md backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            {/* Window Header Dots */}
            <div className="absolute left-3 top-3 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
            </div>
            <div className="mt-4 text-center">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: project.palette?.[0] || "#2B66FF" }}
              >
                {project.category}
              </span>
              <p className="mt-1 text-sm font-semibold text-foreground dark:text-white/90 truncate max-w-[200px]">
                {t(`project.${project.slug}.title`)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Area: Title, Description, and Clear Action Buttons */}
      <div className="relative z-10 pt-2">
        <h3 className="text-xl font-bold tracking-tight text-foreground dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-sky-400">
          {t(`project.${project.slug}.title`)}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground dark:text-zinc-400 line-clamp-2 sm:line-clamp-3">
          {t(`project.${project.slug}.desc`)}
        </p>

        {/* Clear Action Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-border/60">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-[#2B66FF] hover:bg-[#2B66FF]/10 hover:text-[#2B66FF] dark:border-zinc-700 dark:bg-zinc-900/80"
            >
              <Github className="h-3.5 w-3.5" />
              <span>{t("projects.btn.github")}</span>
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#2B66FF] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-600 hover:scale-[1.02]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>
                {project.category === "Design"
                  ? project.slug === "naikbus-uiux-design"
                    ? t("projects.btn.figma")
                    : t("projects.btn.docs")
                  : project.category === "Game"
                  ? t("projects.btn.play")
                  : t("projects.btn.demo")}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-sky-500/10 to-indigo-600/10 blur-[130px]"
      />

      <div className="container">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.subtitle")}
        />

        {/* Category Pill Filters */}
        <Reveal delay={0.1} className="mb-8 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "bg-[#2B66FF] text-white shadow-lg shadow-blue-500/25"
                      : "border border-border/80 bg-card/60 text-muted-foreground hover:border-foreground/20 hover:text-foreground dark:border-zinc-800 dark:bg-zinc-950/60"
                  )}
                >
                  {t(`projects.cat.${category}`)}
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterGlow"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* React Bits Carousel Showcase with 3D Tilt */}
        <div className="w-full max-w-4xl mx-auto py-2">
          <Carousel
            key={activeCategory}
            items={projectSlides}
            baseWidth={620}
            aspectRatio={0.72}
            peek={70}
            gap={20}
            effect="tilt"
            indicator="bars"
            arrows={true}
            draggable={true}
            loop={projectSlides.length > 1}
            frame={false}
            className="mx-auto"
          />
        </div>

        {/* View All CTA */}
        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href="https://github.com/YedijaAdyaVesaka"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "gradient", size: "lg" }),
              "group rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-blue-500/20"
            )}
          >
            {t("projects.viewAll")}
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
