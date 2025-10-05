import Image from "next/image";
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
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/sections/section-header";
import { sideProjects } from "@/data/side-projects";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

export function SideProjectsSection() {
  return (
    <section id="side-projects" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Side Projects/Products"
          title="Things I hack on nights & weekends"
          description="Experiments that sharpen my instincts and bring delightful tools to life."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {sideProjects.map((project) => (
            <Card
              key={project.title}
              className="group flex h-full flex-col overflow-hidden border-dashed"
            >
              <div className="relative h-52 w-full overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                ) : null}
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
                {project.badges?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge) => {
                      if (typeof badge === "string") {
                        const variant =
                          badge === "Live"
                            ? "success"
                            : badge === "Slack App"
                              ? "outline"
                              : "muted";
                        return (
                          <Badge key={badge} variant={variant}>
                            {badge}
                          </Badge>
                        );
                      }
                      return (
                        <HoverCard key={badge.tooltip}>
                          <HoverCardTrigger asChild>
                            <Badge
                              variant="danger"
                              className="inline-flex items-center gap-1"
                            >
                              <span>Down</span>
                              <Info className="h-3.5 w-3.5" aria-hidden />
                            </Badge>
                          </HoverCardTrigger>
                          <HoverCardContent className="text-xs leading-relaxed">
                            {badge.tooltip}
                          </HoverCardContent>
                        </HoverCard>
                      );
                    })}
                  </div>
                ) : null}
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-sm font-semibold"
                >
                  <Link href={project.href} target="_blank" rel="noreferrer">
                    Explore →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
