"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { translations, type Language } from "@/lib/data/translations";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>("id");

    useEffect(() => {
        const saved = localStorage.getItem("app_lang") as Language;
        if (saved && (saved === "id" || saved === "en")) {
            setLangState(saved);
        }
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem("app_lang", newLang);
    };

    const toggleLang = () => {
        setLang(lang === "id" ? "en" : "id");
    };

    const t = (key: string): string => {
        return translations[lang][key] || translations["en"][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}