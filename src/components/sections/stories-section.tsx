import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import { stories } from "@/data/stories";

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Stories"
          title="Lessons I've written down"
          description="I enjoy sharing the journey—these essays capture the wins, misses, and frameworks that matter to me."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <Card
              key={story.title}
              className="group flex h-full flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {story.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {story.description}
                </CardDescription>
              </CardContent>
              <div className="px-6 pb-6">
                <Button
                  asChild
                  variant="ghost"
                  className="px-0 text-sm font-semibold"
                >
                  <Link href={story.href} target="_blank" rel="noreferrer">
                    Read story →
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
