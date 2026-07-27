"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { useMounted } from "@/hooks/use-mounted";

/** Light/dark switcher — renders a stable placeholder until hydrated. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className="h-[18px] w-[18px]" />
        ) : (
          <Moon className="h-[18px] w-[18px]" />
        )
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
