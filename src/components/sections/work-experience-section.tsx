import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
            <Card key={engagement.company} className="group relative h-full overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-10"
                style={{ background: engagement.color }}
                aria-hidden
              />
              <CardHeader className="relative space-y-4">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl font-semibold">
                    {engagement.website ? (
                      <Link
                        href={engagement.website}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        {engagement.company}
                      </Link>
                    ) : (
                      engagement.company
                    )}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full border border-border px-3 py-1 font-medium uppercase tracking-[0.2em]">
                      {engagement.employmentType}
                    </span>
                    <span>{engagement.role}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{engagement.period}</span>
                  <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:inline-block" aria-hidden />
                  <span>{engagement.location}</span>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {engagement.summary}
                </CardDescription>
                {engagement.highlights.length ? (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {engagement.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
              {engagement.readMore ? (
                <CardFooter className="relative">
                  <Button
                    asChild
                    variant="ghost"
                    className="px-0 text-sm font-semibold text-primary hover:text-primary"
                  >
                    <Link href={engagement.readMore.href} target="_blank" rel="noreferrer">
                      {engagement.readMore.label} →
                    </Link>
                  </Button>
                </CardFooter>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
