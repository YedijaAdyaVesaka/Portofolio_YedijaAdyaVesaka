"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

function FlagID({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 640 480" className={cn("h-3.5 w-3.5 shrink-0 rounded-full object-cover", className)}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#e70011" d="M0 0h640v240H0z" />
                <path fill="#fff" d="M0 240h640v240H0z" />
            </g>
        </svg>
    );
}

function FlagGB({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 640 480" className={cn("h-3.5 w-3.5 shrink-0 rounded-full object-cover", className)}>
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path fill="#FFF" d="m75 0 245 180L565 0h75v55L400 240l240 185v55h-75L320 300 75 480H0v-55l240-185L0 55V0h75z" />
            <path fill="#C8102E" d="m424 281 216 164v35h-46L369 313l55-32zm-208 0-55 32L0 480h46l170-135 20 28zM0 0l216 167-20 28L0 35V0zm424 167L640 0v35L470 167l-46-28z" />
            <path fill="#FFF" d="M240 0v480h160V0H240zM0 160v160h640V160H0z" />
            <path fill="#C8102E" d="M267 0v480h106V0H267zM0 187v106h640V187H0z" />
        </svg>
    );
}

export function LanguageToggle({ className }: { className?: string }) {
    const { lang, setLang } = useLanguage();

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border border-border/80 bg-background/60 p-0.5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60",
                className
            )}
        >
            <button
                type="button"
                onClick={() => setLang("id")}
                aria-label="Bahasa Indonesia"
                title="Bahasa Indonesia"
                className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all",
                    lang === "id"
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <FlagID />
                <span>ID</span>
            </button>
            <button
                type="button"
                onClick={() => setLang("en")}
                aria-label="English"
                title="English"
                className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all",
                    lang === "en"
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <FlagGB />
                <span>EN</span>
            </button>
        </div>
    );
}