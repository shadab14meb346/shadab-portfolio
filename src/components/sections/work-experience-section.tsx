import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/sections/section-header";
import { workExperience } from "@/data/work-experience";

export function WorkExperienceSection() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Experience"
          title="Collaborations that shaped my craft"
          description="From startups to scale-ups, these are the teams where I shipped complex products and mentored teams."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {workExperience.map((engagement) => (
            <Card key={engagement.name} className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{ background: engagement.color }}
                aria-hidden
              />
              <CardHeader className="relative">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl font-semibold">
                    <Link
                      href={engagement.website}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {engagement.name}
                    </Link>
                  </CardTitle>
                  <span className="text-sm font-medium text-muted-foreground">
                    {engagement.role}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {engagement.summary}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
