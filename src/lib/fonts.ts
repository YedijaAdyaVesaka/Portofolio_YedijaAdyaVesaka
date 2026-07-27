import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/** Self-hosted via next/font: zero layout shift, preloaded, subset. */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});
