import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data/company";

/** Animated headline numbers — counts up on scroll into view. */
export function Stats() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass grid grid-cols-2 gap-x-6 gap-y-10 rounded-4xl px-6 py-12 md:px-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="gradient-text text-4xl font-bold tracking-tight md:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
