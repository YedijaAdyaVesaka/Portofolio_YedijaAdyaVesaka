"use client";

import { useEffect, useState } from "react";

/** True only after hydration — avoids SSR/client mismatches (theme, portals). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
