"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Page transition: templates remount on every navigation, so this fade/slide
 * plays between routes. Fixed/portal UI (navbar, modals) lives outside it.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
