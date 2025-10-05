import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/hero";
import { socialLinks } from "@/data/social-links";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-20 pt-24 sm:pb-14 sm:pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]" />
      <div className="container grid items-center gap-16 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            Available for new opportunities
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {heroContent.role} · {heroContent.location}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I'm {heroContent.name}.
            </h1>
            <p className="max-w-2xl text-xl font-medium text-foreground/80 sm:text-2xl">
              I craft delightful product experiences end-to-end.
            </p>
            <p className="max-w-2xl text-lg text-muted-foreground">
              {heroContent.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href={heroContent.email}>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={heroContent.resume} target="_blank" rel="noreferrer">
                View Resume
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Connect</span>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative ml-auto flex max-w-md items-center justify-center lg:max-w-xl">
          <div
            className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card/90 p-3 shadow-xl">
            <Image
              src={heroContent.avatar}
              alt={heroContent.name}
              width={480}
              height={640}
              className="h-auto w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
