"use client";

import { CheckCircle2, Code, Network, Palette } from "lucide-react";
import { LogoLoop } from "@/components/ui/logo-loop";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";
import { skillCategories, techSkills } from "@/lib/data/company";

const categoryMeta = {
    it_support: {
        icon: Network,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        glow: "hover:border-blue-500/40",
    },
    software_web: {
        icon: Code,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        glow: "hover:border-indigo-500/40",
    },
    qa_systems: {
        icon: CheckCircle2,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        glow: "hover:border-emerald-500/40",
    },
    design_multimedia: {
        icon: Palette,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        glow: "hover:border-rose-500/40",
    },
} as const;

export function TechSkills() {
    const { t } = useLanguage();

    return (
        <section className="section py-12" id="skills">
            <div className="container">
                <SectionHeading
                    eyebrow={t("skills.eyebrow")}
                    title={t("skills.title")}
                    description={t("skills.subtitle")}
                />

                {/* 4 Structured Skill Categories */}
                <div className="grid gap-6 md:grid-cols-2">
                    {skillCategories.map((cat, idx) => {
                        const meta =
                            categoryMeta[cat.key as keyof typeof categoryMeta] ??
                            categoryMeta.it_support;
                        const Icon = meta.icon;

                        return (
                            <Reveal key={cat.key} delay={idx * 0.08}>
                                <div
                                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-lg ${meta.glow} md:p-7`}
                                >
                                    <div>
                                        {/* Header */}
                                        <div className="flex items-center gap-3.5 mb-5">
                                            <div
                                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${meta.bg} ${meta.border} ${meta.color} border shadow-sm transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                                                {t(`skills.cat.${cat.key}`)}
                                            </h3>
                                        </div>

                                        {/* Skill Pills */}
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {cat.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="inline-flex items-center rounded-xl border border-border/70 bg-muted/40 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-all duration-200 hover:border-primary/40 hover:bg-card hover:text-foreground"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Animated Logo Loop from React Bits */}
                <div className="mt-12 pt-6 border-t border-border/50">
                    <LogoLoop
                        logos={techSkills}
                        speed={60}
                        direction="left"
                        gap={18}
                        pauseOnHover={true}
                        fadeOut={true}
                        fadeOutWidth={0.15}
                        draggable={true}
                        ariaLabel="Technical skills and tools"
                        renderItem={(skill: (typeof techSkills)[0]) => (
                            <div
                                key={skill.name}
                                className="flex shrink-0 items-center gap-2.5 rounded-2xl border border-border/70 bg-card/70 px-4 py-2 shadow-sm backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card/90"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={skill.iconUrl}
                                    alt={skill.name}
                                    className="h-5 w-5 shrink-0 object-contain pointer-events-none"
                                    loading="lazy"
                                />
                                <span className="whitespace-nowrap text-xs font-semibold text-foreground pointer-events-none">
                                    {skill.name}
                                </span>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    );
}