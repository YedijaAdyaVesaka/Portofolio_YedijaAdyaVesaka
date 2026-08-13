"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { projectCategories, projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/** Interactive Project Gallery section styled like heynesh.com with pointer scroll controls */
export function PortfolioPreview() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

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

        {/* Category Pill Filters & Pointer Navigation Buttons */}
        <Reveal delay={0.1} className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
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

          {/* Pointer Arrows for horizontal scroll */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-white transition-all hover:bg-[#2B66FF] hover:border-[#2B66FF] active:scale-95 shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-white transition-all hover:bg-[#2B66FF] hover:border-[#2B66FF] active:scale-95 shadow-md"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        {/* Project Horizontal Scroll Carousel with Mouse Drag & Scroll Bar */}
        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <motion.div
            ref={scrollRef}
            layout
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 cursor-grab active:cursor-grabbing [scroll-snap-type:x_mandatory] scroll-smooth select-none touch-pan-x"
            data-lenis-prevent
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="group relative flex h-[520px] w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/95 to-card/90 dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-black p-6 shadow-xl transition-all duration-500 hover:border-[#2B66FF]/60 hover:shadow-2xl hover:shadow-blue-500/15 [scroll-snap-align:center] sm:w-[380px]"
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
                  <div className="relative z-10 my-auto flex items-center justify-center py-6">
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

                  {/* Bottom Area: Title, Description, and Blue Accent Button */}
                  <div className="relative z-10">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-sky-400">
                          {t(`project.${project.slug}.title`)}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground dark:text-zinc-400 line-clamp-2">
                          {t(`project.${project.slug}.desc`)}
                        </p>
                      </div>

                      {/* Vibrant Blue Circle Arrow Action Button */}
                      {(project.link || project.github) && (
                        <a
                          href={project.link || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2B66FF] text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110 hover:bg-blue-500"
                        >
                          <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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