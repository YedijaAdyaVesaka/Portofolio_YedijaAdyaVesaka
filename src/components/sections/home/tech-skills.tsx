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
            <Marquee duration="30s">
                {techSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 px-5 py-3 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-card/80"
                    >
                        <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="h-6 w-6 object-contain"
                        />
                        <span className="text-sm font-semibold text-foreground">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}