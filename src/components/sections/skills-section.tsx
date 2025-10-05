import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/sections/section-header";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I bring to a squad"
          description="A product-minded engineer comfortable owning the entire web stack."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40"
            >
              <Badge
                variant="outline"
                className="mb-3 border-primary/40 text-primary"
              >
                {skill.name}
              </Badge>
              {skill.description ? (
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
