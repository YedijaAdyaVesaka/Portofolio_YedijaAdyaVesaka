"use client";

import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button-variants";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  /** Disable the ripple for dense UI (e.g. pagination). */
  withRipple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, withRipple = true, onPointerDown, children, ...props },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([]);

    const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (withRipple) {
        const rect = e.currentTarget.getBoundingClientRect();
        const id = Date.now();
        setRipples((r) => [
          ...r,
          { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
        ]);
        window.setTimeout(
          () => setRipples((r) => r.filter((x) => x.id !== id)),
          650
        );
      }
      onPointerDown?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        onPointerDown={handlePointerDown}
        {...props}
      >
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            aria-hidden
            className="animate-ripple pointer-events-none absolute h-5 w-5 rounded-full bg-white/40"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
