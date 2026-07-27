"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUpInView = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, delay, ease: easing },
});

const words = [
  "Informatics Engineering",
  "Web Developer",
  "Game Developer",
  "Graphic Design",
];

export function PortofolioHeader() {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden px-4 pt-24 pb-8 md:min-h-[65vh] md:pt-28">
      {/* ---------- Backdrop & Grid ---------- */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-80"
      />

      {/* Soft Aurora Glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px] dark:bg-blue-600/25"
      />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Graphic Title: PORTO / FOLIO */}
        <motion.div
          {...fadeUpInView(0.05)}
          className="relative select-none font-[family-name:var(--font-plus-jakarta)] font-black tracking-tight"
        >
          {/* Top Line: PORTO with tilted background badge */}
          <div className="relative inline-block -rotate-3 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="relative z-10 block rounded-3xl bg-[#2B66FF] px-7 py-2 text-white shadow-2xl">
              PORTO
            </span>
            {/* Code Icon on top right */}
            <span className="absolute -right-8 -top-3 z-20 flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-[#4BBBEB] text-white shadow-lg sm:-right-12 sm:-top-4 sm:h-14 sm:w-14">
              <svg className="h-6 w-6 stroke-[2.5] sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
          </div>

          {/* Bottom Line: FOLIO with pen icon */}
          <div className="relative mt-3 flex items-center justify-center gap-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl sm:mt-5">
            {/* Pen Tool Icon */}
            <span className="flex h-12 w-12 -rotate-12 items-center justify-center rounded-2xl bg-[#2B66FF] text-white shadow-lg sm:h-16 sm:w-16">
              <svg className="h-7 w-7 stroke-[2] sm:h-9 sm:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </span>
            {/* FOLIO badge/text */}
            <span className="rounded-3xl bg-[#0092E0] px-8 py-2 text-white shadow-2xl">
              FOLIO
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden px-4 pt-24 pb-20 md:pt-36 md:pb-28">
      {/* ---------- Backdrop & Grid ---------- */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-80"
      />

      {/* Soft Aurora Glows */}
      <div
        aria-hidden
        className="absolute left-[15%] top-[20%] h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-600/35 md:h-[550px] md:w-[550px]"
      />
      <div
        aria-hidden
        className="absolute right-[10%] bottom-[10%] h-[400px] w-[400px] translate-y-1/3 rounded-full bg-blue-500/25 blur-[130px] dark:bg-blue-500/40 md:h-[600px] md:w-[600px]"
      />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Greeting Pill: Hi, I'm 👋 */}
        <motion.div
          {...fadeUpInView(0.1)}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60"
        >
          <span>{"Hi, I'm"}</span>
          <span className="inline-block animate-bounce">👋</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUpInView(0.2)}
          className="text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 text-foreground"
        >
          <span className="block text-foreground">Yedija Adya</span>
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-blue-300 dark:via-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
            Vesaka
          </span>
        </motion.h1>

        {/* Subtitle / Animated Text (Fade & Slide) */}
        <motion.div {...fadeUpInView(0.3)} className="mt-4 flex items-center justify-center min-h-[40px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="inline-block text-xl md:text-2xl font-semibold tracking-wide text-sky-600 dark:text-sky-400"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Buttons */}
        <motion.div
          {...fadeUpInView(0.45)}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "gradient", size: "lg" }),
              "group rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-indigo-500/20"
            )}
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-8 py-6 text-base font-semibold border-border bg-background/80 hover:bg-accent text-foreground dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:bg-zinc-900/60 dark:text-white"
            )}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          {...fadeUpInView(0.6)}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/YedijaAdyaVesaka", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/yedijaadyavesaka/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:yedijaadyavesaka@gmail.com", label: "Email" },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card/80 text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-foreground/20 hover:text-foreground dark:border-zinc-800/80 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
