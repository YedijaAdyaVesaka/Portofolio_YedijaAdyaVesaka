"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "id" | "en";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    id: {
        // Navbar
        "nav.home": "Beranda",
        "nav.about": "Tentang",
        "nav.experience": "Pengalaman",
        "nav.projects": "Proyek",
        "nav.contact": "Kontak",
        "nav.hire": "Hubungi Saya",

        // Hero
        "hero.badge": "Halo, Saya 👋",
        "hero.role": "Teknik Informatika & Creative Developer",
        "hero.bio": "Lulusan Teknik Informatika yang berfokus pada Web Development, Desain Grafis, Game Development, dan solusi IoT. Suka membangun produk digital yang indah dan solutif.",
        "hero.cta_projects": "Lihat Proyek",
        "hero.cta_contact": "Hubungi Saya",

        // About
        "about.title": "Tentang Saya",
        "about.subtitle": "Menggabungkan logika pemrograman dan kreativitas visual.",
        "about.degree": "Sarjana Komputer / Teknik Informatika",

        // Experience
        "exp.title": "Pengalaman Kerja & Organisasi",

        // Projects
        "projects.title": "Proyek Unggulan",
        "projects.subtitle": "Kumpulan karya dalam Web, Game, Desain Grafis, dan IoT.",

        // CTA
        "cta.title": "Tertarik Bekerja Sama?",
        "cta.subtitle": "Mari diskusikan proyek atau peluang kolaborasi menarik lainnya.",
        "cta.button": "Kirim Pesan WhatsApp",
    },
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.hire": "Hire Me",

        // Hero
        "hero.badge": "Hi, I'm 👋",
        "hero.role": "Informatics Engineering & Creative Developer",
        "hero.bio": "Informatics Engineering graduate specializing in Web Development, Graphic Design, Game Development, and IoT solutions. Passionate about crafting beautiful and impactful digital products.",
        "hero.cta_projects": "View Projects",
        "hero.cta_contact": "Contact Me",

        // About
        "about.title": "About Me",
        "about.subtitle": "Combining software engineering logic with visual creativity.",
        "about.degree": "Bachelor of Computer Science / Informatics",

        // Experience
        "exp.title": "Work & Experience",

        // Projects
        "projects.title": "Featured Projects",
        "projects.subtitle": "A collection of work across Web, Games, Graphic Design, and IoT.",

        // CTA
        "cta.title": "Interested in Working Together?",
        "cta.subtitle": "Let's discuss your project or any exciting collaboration opportunities.",
        "cta.button": "Send WhatsApp Message",
    },
};

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