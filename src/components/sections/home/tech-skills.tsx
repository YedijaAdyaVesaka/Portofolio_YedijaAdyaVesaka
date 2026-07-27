import { Marquee } from "@/components/ui/marquee";
import { techSkills } from "@/lib/data/company";

export function TechSkills() {
    return (
        <section className="py-8">
            <div className="container mb-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Technical Skills & Tools
                </p>
            </div>
            <Marquee duration="30s" reverse>
                {techSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex shrink-0 items-center gap-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card/90"
                    >
                        <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="h-6 w-6 shrink-0 object-contain"
                        />
                        <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}