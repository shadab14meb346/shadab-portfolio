"use client";

import { useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/sections/section-header";
import { workExperience } from "@/data/work-experience";
import type { WorkExperienceEngagement } from "@/data/work-experience";
import { Link as LinkIcon } from "lucide-react";

function ExperienceCard({
  engagement,
}: {
  engagement: WorkExperienceEngagement;
}) {
  const [expanded, setExpanded] = useState(false);
  const highlights = expanded
    ? engagement.highlights
    : engagement.highlights.slice(0, 2);

  const primaryLink = engagement.website ?? engagement.links?.[0]?.href;

  const initials = engagement.company
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <Card className="group relative h-full overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-10"
        style={{ background: engagement.color }}
        aria-hidden
      />
      <CardHeader className="relative space-y-6">
        <div className="flex items-start gap-4">
          <Avatar className="flex h-12 w-12 items-center justify-center border border-border bg-background shadow-sm">
            {engagement.logo ? (
              <AvatarImage
                src={engagement.logo}
                alt={engagement.company}
                className="h-6 w-6 object-contain"
              />
            ) : null}
            <AvatarFallback className="text-xs font-semibold uppercase">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-3">
            <CardTitle className="text-2xl font-semibold">
              {primaryLink ? (
                <Link
                  href={primaryLink}
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
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>{engagement.period}</span>
          <span
            className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:inline-block"
            aria-hidden
          />
          <span>{engagement.location}</span>
        </div>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {engagement.summary}
        </CardDescription>
        {highlights.length ? (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                  aria-hidden
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
      <CardFooter className="relative flex flex-wrap gap-3 pt-0">
        {engagement.links?.map((link) => (
          <Button
            key={link.href}
            asChild
            variant="ghost"
            size="sm"
            className="inline-flex items-center gap-2 px-0 text-sm"
          >
            <Link href={link.href} target="_blank" rel="noreferrer">
              <LinkIcon className="h-4 w-4" />
              {link.label}
            </Link>
          </Button>
        ))}
        {engagement.highlights.length > 2 ? (
          <Button
            variant="ghost"
            size="sm"
            className="px-0 text-sm text-primary hover:text-primary"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Show less" : "Read more"}
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export function WorkExperienceSection() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Experience"
          title="Collaborations that shaped my craft"
          description="From startups to MNCs, these are the teams where I shipped complex products and mentored teams."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {workExperience.map((engagement) => (
            <ExperienceCard key={engagement.company} engagement={engagement} />
          ))}
        </div>
      </div>
    </section>
  );
}
