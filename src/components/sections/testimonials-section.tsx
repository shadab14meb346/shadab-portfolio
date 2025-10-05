import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/sections/section-header";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container space-y-12">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by founders, PMs, and engineering leads"
          description="A few words from collaborators I've partnered with across products and teams."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex h-full flex-col gap-6 p-6"
            >
              <CardHeader className="flex flex-row items-center gap-4 p-0">
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold">
                    <Link
                      href={testimonial.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {testimonial.name}
                    </Link>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-base leading-relaxed text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
