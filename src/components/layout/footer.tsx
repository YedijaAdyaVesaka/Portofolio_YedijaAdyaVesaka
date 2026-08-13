"use client";

import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { useLanguage } from "@/context/language-context";
import { siteConfig } from "@/lib/site";

/** Global footer: clean brand info, sitemap, socials and copyright bar. */
export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const companyLinks = [
    { label: t("nav.home"), href: "/#top" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.experience"), href: "/#experience" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.contact"), href: `https://wa.me/${siteConfig.whatsapp}` },
  ];

  return (
    <footer className="relative mt-8 overflow-hidden border-t border-border/60">
      {/* Hairline brand glow along the top edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-80 w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative">
        {/* Main Content */}
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {siteConfig.socials.map((social) => {
                let Icon = Github;
                const labelLower = social.label.toLowerCase();
                if (labelLower.includes("github")) Icon = Github;
                else if (labelLower.includes("linkedin")) Icon = Linkedin;
                else if (labelLower.includes("instagram")) Icon = Instagram;
                else if (labelLower.includes("twitter")) Icon = Twitter;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Sitemap">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.nav")}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 py-7 text-sm text-muted-foreground md:flex-row">
          <p>
            © {year} {siteConfig.name}. {t("footer.copyright")}
          </p>
          <p className="flex items-center gap-1.5">
            {t("footer.crafted")}
            <span aria-hidden className="text-primary">
              ◆
            </span>
            {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  );
}
