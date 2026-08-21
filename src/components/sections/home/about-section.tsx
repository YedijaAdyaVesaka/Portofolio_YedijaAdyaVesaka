"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Briefcase, Calendar, ChevronLeft, ChevronRight, GraduationCap, ImageIcon, MapPin, Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Modal } from "@/components/ui/modal";
import { experiences, educationList } from "@/lib/data/company";
import { Marquee } from "@/components/ui/marquee";
import { useLanguage } from "@/context/language-context";
import { TechSkills } from "./tech-skills";

type GalleryModal = { type: "certificates" | "documentation"; expIndex: number } | null;

export function AboutSection() {
    const { t } = useLanguage();
    const [galleryModal, setGalleryModal] = useState<GalleryModal>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const closeAll = useCallback(() => {
        setGalleryModal(null);
        setLightboxIndex(null);
    }, []);

    /* images for current modal */
    const modalImages = galleryModal
        ? (galleryModal.type === "documentation"
            ? experiences[galleryModal.expIndex]?.documentation
            : experiences[galleryModal.expIndex]?.certificates) ?? []
        : [];

    return (
        <div id="about" className="space-y-16 py-12 md:py-20">
            {/* ----------------------------- profile ----------------------------- */}
            <section className="section pb-0">
                <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal direction="left">
                        <div>
                            <SectionHeading
                                eyebrow={t("about.eyebrow")}
                                title="Yedija Adya Vesaka"
                                align="left"
                                className="mb-2"
                            />
                            <div className="space-y-4">
                                <p
                                    className="text-muted-foreground leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: t("about.bio1") }}
                                />
                                <p className="text-muted-foreground leading-relaxed">
                                    {t("about.bio2")}
                                </p>
                            </div>

                        </div>
                    </Reveal>

                    <Reveal direction="right" delay={0.1}>
                        <div className="relative flex flex-col items-center pt-8">
                            {/* Lanyard Ribbon / Strap */}
                            <div className="absolute top-0 z-20 flex flex-col items-center">
                                {/* Ribbon */}
                                <div className="h-10 w-10 bg-gradient-to-b from-cyan-600 via-blue-600 to-indigo-600 rounded-t-sm shadow-md border-x border-white/20 flex justify-around px-1">
                                    <div className="w-1 h-full bg-white/20" />
                                    <div className="w-1 h-full bg-white/20" />
                                </div>
                                {/* Metal Clip */}
                                <div className="-mt-0.5 flex h-4 w-7 items-center justify-center rounded-sm bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-lg border border-zinc-200">
                                    <div className="h-1.5 w-3 rounded-full bg-zinc-800" />
                                </div>
                            </div>

                            {/* Lanyard ID Badge Card */}
                            <div className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-3xl border-4 border-cyan-500/60 bg-card p-2 shadow-[0_0_30px_rgba(6,182,212,0.35)] backdrop-blur-xl transition-all duration-500 hover:rotate-1 hover:scale-[1.02] hover:border-cyan-400">
                                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20">
                                    {/* Slot Hole */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 h-3 w-10 rounded-full bg-zinc-950/80 border border-white/20 shadow-inner" />

                                    {/* Photo */}
                                    <Image
                                        src="/images/1000335722.webp"
                                        alt="Yedija Adya Vesaka"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 300px, 340px"
                                        className="object-cover object-[center_0%] scale-110 origin-top"
                                    />

                                    {/* Bottom Badge Info Bar */}
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-5 pt-12 text-white">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                                                    {t("about.badge.title").toUpperCase()}
                                                </p>
                                                <p className="text-base font-bold text-white">
                                                    {t("about.badge.name")}
                                                </p>
                                            </div>
                                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                                <Sparkles className="h-4 w-4 animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Technical Skills Marquee */}
            <TechSkills />

            {/* ----------------------------- education ---------------------------- */}
            <section className="section" id="education">
                <div className="container">
                    <SectionHeading
                        eyebrow={t("edu.title")}
                        title={t("edu.title")}
                        description={t("edu.subtitle")}
                    />

                    <Marquee duration="40s">
                        {educationList.map((item, idx) => (
                            <div
                                key={item.title + item.company + item.year}
                                className="h-[210px] w-[440px] shrink-0 rounded-3xl border border-border/80 bg-card/90 p-6 backdrop-blur shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-lg flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    {/* Header with Graduation Icon / Institution Logo, Title, Location & Date */}
                                    <div className="flex items-start gap-4">
                                        {item.logoUrl ? (
                                            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-md border border-border/40 dark:bg-zinc-900">
                                                <Image
                                                    src={item.logoUrl}
                                                    alt={item.company || item.title}
                                                    fill
                                                    sizes="48px"
                                                    className="object-contain p-1.5"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-md">
                                                <GraduationCap className="h-6 w-6" />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-2">
                                                <h3 className="text-lg font-bold tracking-tight text-foreground truncate">
                                                    {t(`edu.${idx}.title`)}
                                                </h3>
                                                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-muted-foreground">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {item.year}
                                                </span>
                                            </div>
                                            {item.company && (
                                                <p className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 truncate">
                                                    {item.company}
                                                </p>
                                            )}
                                            {item.location && (
                                                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground truncate">
                                                    <MapPin className="h-3 w-3 shrink-0" />
                                                    {item.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Key Highlights bullet list */}
                                    {item.highlights && item.highlights.length > 0 && (
                                        <div className="space-y-1 pt-2 border-t border-border/60">
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/90">
                                                {t("edu.highlights.label")}
                                            </p>
                                            <ul className="space-y-1 text-xs text-muted-foreground">
                                                {item.highlights.slice(0, 2).map((point, hIdx) => (
                                                    <li key={point} className="flex items-start gap-2 leading-tight line-clamp-1">
                                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                        <span className="truncate">{t(`edu.${idx}.h.${hIdx}`)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>

            {/* ----------------------------- experience ---------------------------- */}
            <section className="section" id="experience">
                <div className="container">
                    <SectionHeading
                        eyebrow={t("exp.title")}
                        title={t("exp.title")}
                        description={t("exp.subtitle")}
                    />

                    <div className="mx-auto max-w-4xl space-y-8">
                        {experiences.map((item, i) => (
                            <Reveal key={item.title + item.company + item.year} delay={i * 0.08}>
                                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 p-6 backdrop-blur md:p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                        <div className="space-y-2">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {item.year}
                                                </span>
                                                {item.company && (
                                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                                        <Briefcase className="h-3.5 w-3.5" />
                                                        {item.company}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                                                {t(`exp.${i}.title`)}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                        {t(`exp.${i}.desc`)}
                                    </p>

                                    {/* Key Highlights */}
                                    {item.highlights && item.highlights.length > 0 && (
                                        <div className="mt-4 space-y-2">
                                            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                                                {t("exp.highlights.label")}
                                            </p>
                                            <ul className="space-y-1.5 text-xs text-muted-foreground md:text-sm">
                                                {item.highlights.map((highlight, hIdx) => (
                                                    <li key={highlight} className="flex items-start gap-2.5">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                        <span>{t(`exp.${i}.h.${hIdx}`)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Tech Tags */}
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground/80"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Gallery Buttons */}
                                    {((item.certificates && item.certificates.length > 0) || (item.documentation && item.documentation.length > 0)) && (
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {item.certificates && item.certificates.length > 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => setGalleryModal({ type: "certificates", expIndex: i })}
                                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur transition-colors hover:bg-white/10 hover:border-white/20"
                                                >
                                                    <ImageIcon className="h-3.5 w-3.5" />
                                                    {t("exp.btn.certificates")}
                                                </button>
                                            )}
                                            {item.documentation && item.documentation.length > 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => setGalleryModal({ type: "documentation", expIndex: i })}
                                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur transition-colors hover:bg-white/10 hover:border-white/20"
                                                >
                                                    <ImageIcon className="h-3.5 w-3.5" />
                                                    {t("exp.btn.documentation")}
                                                </button>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================= Gallery Modal (certificates / documentation) ========================= */}
            <Modal
                open={galleryModal !== null}
                onClose={closeAll}
                label={galleryModal?.type === "documentation" ? t("exp.btn.documentation") : t("exp.btn.certificates")}
                className="max-w-4xl rounded-2xl"
            >
                <div className="p-6 md:p-8">
                    <h2 className="mb-6 text-lg font-bold text-foreground">
                        {galleryModal?.type === "documentation" ? t("exp.btn.documentation") : t("exp.btn.certificates")}
                        {modalImages.length > 1 && (
                            <span className="ml-2 text-sm font-normal text-muted-foreground">({modalImages.length})</span>
                        )}
                    </h2>

                    {modalImages.length <= 1 ? (
                        /* Single image — simple grid */
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {modalImages.map((src, idx) =>
                                src.endsWith(".pdf") ? (
                                    <div key={src} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-muted/30">
                                        <iframe src={src} title={`Certificate ${idx + 1}`} className="h-full w-full" loading="lazy" />
                                    </div>
                                ) : (
                                    <button key={src} type="button" onClick={() => setLightboxIndex(idx)} className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-muted/30">
                                        <Image src={src} alt={`Photo ${idx + 1}`} fill sizes="(max-width: 640px) 90vw, 45vw" className="object-contain transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                                    </button>
                                )
                            )}
                        </div>
                    ) : (
                        /* Multiple images — horizontal scroll carousel */
                        <div className="relative group/carousel">
                            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
                                {modalImages.map((src, idx) => (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => setLightboxIndex(idx)}
                                        className="group relative aspect-[4/3] w-[80%] flex-shrink-0 snap-center overflow-hidden rounded-xl border border-white/10 bg-muted/30 sm:w-[60%] md:w-[48%]"
                                    >
                                        <Image src={src} alt={`Photo ${idx + 1}`} fill sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                                        <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur">
                                            {idx + 1}/{modalImages.length}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            {/* Scroll hint gradients */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
                        </div>
                    )}
                </div>
            </Modal>

            {/* ========================= Certificate Lightbox ========================= */}
            <Modal
                open={lightboxIndex !== null}
                onClose={() => setLightboxIndex(null)}
                label="Lightbox"
                className="max-w-5xl rounded-2xl bg-black/90 p-0"
            >
                {lightboxIndex !== null && modalImages[lightboxIndex] && (
                    <div className="relative flex items-center justify-center p-4 md:p-8">
                        {modalImages.length > 1 && (
                            <button type="button" onClick={() => setLightboxIndex((lightboxIndex - 1 + modalImages.length) % modalImages.length)} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20">
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                        )}
                        <div className="relative aspect-[4/3] w-full max-h-[75vh]">
                            {modalImages[lightboxIndex].endsWith(".pdf") ? (
                                <iframe src={modalImages[lightboxIndex]} title="Certificate" className="h-full w-full rounded-lg" />
                            ) : (
                                <Image src={modalImages[lightboxIndex]} alt={`Full ${lightboxIndex + 1}`} fill sizes="90vw" className="object-contain" priority />
                            )}
                        </div>
                        {modalImages.length > 1 && (
                            <button type="button" onClick={() => setLightboxIndex((lightboxIndex + 1) % modalImages.length)} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20">
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        )}
                        {modalImages.length > 1 && (
                            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                                {lightboxIndex + 1} {t("exp.lightbox.of")} {modalImages.length}
                            </span>
                        )}
                    </div>
                )}
            </Modal>

        </div>
    );
}