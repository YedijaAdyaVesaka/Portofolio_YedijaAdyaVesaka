"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

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
                    "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all",
                    lang === "id"
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <span className="text-sm leading-none">🇮🇩</span>
                <span>ID</span>
            </button>
            <button
                type="button"
                onClick={() => setLang("en")}
                aria-label="English"
                title="English"
                className={cn(
                    "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all",
                    lang === "en"
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                <span className="text-sm leading-none">🇬🇧</span>
                <span>EN</span>
            </button>
        </div>
    );
}