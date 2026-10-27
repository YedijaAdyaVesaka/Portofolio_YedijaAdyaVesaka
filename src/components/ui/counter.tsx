"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Animated number that counts up (ease-out) when scrolled into view. Fallback is `to`. */
export function Counter({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(to);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!inView || animatedRef.current) return;
    animatedRef.current = true;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
