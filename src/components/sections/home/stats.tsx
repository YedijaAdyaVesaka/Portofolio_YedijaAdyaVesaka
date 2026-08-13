"use client";

import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";
import { stats } from "@/lib/data/company";

const statKeys = ["stats.projects", "stats.years", "stats.designs", "stats.dedication"];

/** Animated headline numbers — counts up on scroll into view. */
export function Stats() {
  const { t } = useLanguage();
  return (
    <section className="section">
      <div className="container">
        <div className="glass grid grid-cols-2 gap-x-6 gap-y-10 rounded-4xl px-6 py-12 md:px-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={statKeys[i]} delay={i * 0.08} className="text-center">
              <p className="gradient-text text-4xl font-bold tracking-tight md:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t(statKeys[i])}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
