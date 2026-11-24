import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/home/about-section";
import { Hero, PortofolioHeader } from "@/components/sections/home/hero";
import { PortfolioPreview } from "@/components/sections/home/portfolio-preview";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <PortofolioHeader />
      <Hero />
      <AboutSection />
      <PortfolioPreview />
    </>
  );
}
