import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/home/about-section";
import { CTASection } from "@/components/sections/home/cta";
import { Hero, PortofolioHeader } from "@/components/sections/home/hero";
import { PortfolioPreview } from "@/components/sections/home/portfolio-preview";
import { Stats } from "@/components/sections/home/stats";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <PortofolioHeader />
      <Hero />
      <AboutSection />
      <Stats />
      <PortfolioPreview />
      <CTASection />
    </>
  );
}
