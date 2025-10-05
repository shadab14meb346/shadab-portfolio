import Image from "next/image";

import { SectionHeader } from "@/components/sections/section-header";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Skills"
          title="What I bring to a squad"
          description="A product-minded engineer comfortable owning the entire web stack."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {skill.iconImage ? (
                    <Image
                      src={skill.iconImage}
                      alt={skill.name}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : skill.icon ? (
                    <skill.icon className="h-6 w-6" aria-hidden />
                  ) : null}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.name}
                </h3>
              </div>
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
