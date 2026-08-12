"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
    const { lang, toggleLang } = useLanguage();

    return (
        <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch Language"
            className={cn(
                "flex h-9 items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 text-xs font-semibold backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground",
                className
            )}
        >
            <span className="text-sm">{lang === "id" ? "🇮🇩" : "🇬🇧"}</span>
            <span>{lang.toUpperCase()}</span>
        </button>
    );
}