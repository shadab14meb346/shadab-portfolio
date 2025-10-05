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
import { SectionHeader } from "@/components/sections/section-header";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Featured Work"
          title="A few products I loved building"
          description="Blending product thinking with reliable engineering."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="group flex h-full flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              {project.href ? (
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="px-0 text-sm font-semibold"
                  >
                    <Link href={project.href} target="_blank" rel="noreferrer">
                      View project →
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
