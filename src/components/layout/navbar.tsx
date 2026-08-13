"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { LanguageToggle } from "@/components/layout/language-toggle";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button-variants";
import { useLanguage } from "@/context/language-context";
import { useScrolled } from "@/hooks/use-scrolled";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItem =
  "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors";

/**
 * Site navigation: floating glass pill that gains blur + elevation on scroll.
 * Uses single-page anchor highlights when on home route.
 */
export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");

  const navLinks = [
    { label: t("nav.home"), href: "/#top", targetId: "top" },
    { label: t("nav.about"), href: "/#about", targetId: "about" },
    { label: t("nav.experience"), href: "/#experience", targetId: "experience" },
    { label: t("nav.projects"), href: "/#projects", targetId: "projects" },
    { label: t("nav.contact"), href: `https://wa.me/${siteConfig.whatsapp}`, targetId: "contact" },
  ];

  // Track active section when on home page
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navLinks.map((link) => link.targetId);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        if (id === "top" && window.scrollY < 300) {
          setActiveSection("top");
          break;
        }
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close overlays on navigation.
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Escape closes whichever overlay is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isLinkActive = (link: { href: string; targetId: string }) => {
    if (pathname === "/") {
      return activeSection === link.targetId;
    }
    return pathname === link.href.split("#")[0];
  };

  const renderLink = (link: { label: string; href: string; targetId: string }) =>
    link.href.startsWith("http") ? (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(navItem, "text-muted-foreground hover:text-foreground")}
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          navItem,
          isLinkActive(link)
            ? "bg-muted text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {link.label}
      </Link>
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "container transition-all duration-300",
          scrolled ? "pt-3" : "pt-5"
        )}
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "flex h-14 items-center justify-between rounded-2xl border px-4 transition-all duration-300 lg:px-5",
            scrolled
              ? "border-border/70 bg-background/70 shadow-lg shadow-black/[0.05] backdrop-blur-xl dark:shadow-black/30"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" aria-label="Yedija — home" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map(renderLink)}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "gradient", size: "sm" }),
                "hidden lg:inline-flex"
              )}
            >
              {t("nav.hire")}
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              aria-hidden
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              aria-label="Mobile navigation"
              className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col border-l border-border bg-background lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setDrawerOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-2" data-lenis-prevent>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.35 }}
                  >
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between border-b border-border/60 py-4 text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between border-b border-border/60 py-4 text-lg font-medium transition-colors",
                          isLinkActive(link) ? "text-primary" : "hover:text-primary"
                        )}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border p-6">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "gradient", size: "lg" }),
                    "w-full"
                  )}
                >
                  {t("nav.hire")}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}