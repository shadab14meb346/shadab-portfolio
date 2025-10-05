import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { socialLinks } from "@/data/social-links";
import { CheckCircle2, Languages, ShieldCheck, Sparkles } from "lucide-react";

const seoImage =
  "https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png";

export const metadata: Metadata = {
  title: "Translate G Sheet TM | Overview",
  description: "Overview of the Translate G Sheet TM add-on and how it works.",
  openGraph: {
    title: "Translate G Sheet TM | Overview",
    description:
      "Overview of the Translate G Sheet TM add-on and how it works.",
    type: "website",
    images: [{ url: seoImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translate G Sheet TM | Overview",
    description:
      "Overview of the Translate G Sheet TM add-on and how it works.",
    images: [seoImage],
  },
};

const googleWorkspacePublishedURL = "";

const featureHighlights = [
  {
    title: "Built for launch-ready teams",
    description:
      "Spin up localized spreadsheets faster with consistent, human-readable translations ready for reviewers.",
    icon: CheckCircle2,
  },
  {
    title: "100+ languages",
    description:
      "Leverage Google Translate under the hood to speak to customers across regions in seconds.",
    icon: Languages,
  },
  {
    title: "Secure by design",
    description:
      "No data leaves your sheet—translations run through the Google Workspace infrastructure you already trust.",
    icon: ShieldCheck,
  },
];

const workflowSteps = [
  "Install the Translate G Sheet TM add-on from the Google Workspace Marketplace.",
  "Open the sidebar from any sheet and choose your source plus target languages.",
  "Select the columns you want localized and autofill with translated content instantly.",
];

const faqs = [
  {
    question: "Does the add-on overwrite existing data?",
    answer:
      "Translations are generated in new columns so your original content always stays intact.",
  },
  {
    question: "Can I restrict who can run translations?",
    answer:
      "Yes—administrators can manage permissions from the Google Workspace admin console.",
  },
];

export default function TranslateGSheetTMPage() {
  const primaryCtaHref = googleWorkspacePublishedURL || "#";

  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border/60 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] via-background to-[hsl(var(--hero-gradient-to))]">
        <div className="container grid gap-12 py-16 md:grid-cols-[1.1fr_minmax(0,0.9fr)] md:py-24">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span
                aria-hidden
                className="h-1 w-1 rounded-full bg-muted-foreground/40"
              />
              <Link
                href="/#side-projects"
                className="transition-colors hover:text-primary"
              >
                Side Projects
              </Link>
              <span
                aria-hidden
                className="h-1 w-1 rounded-full bg-muted-foreground/40"
              />
              <Link
                href="/my-products"
                className="transition-colors hover:text-primary"
              >
                Other Products
              </Link>
              <span
                aria-hidden
                className="h-1 w-1 rounded-full bg-muted-foreground/40"
              />
              <Link
                href="/translategsheettm/privacy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <span
                aria-hidden
                className="h-1 w-1 rounded-full bg-muted-foreground/40"
              />
              <Link
                href="/translategsheettm/terms-of-services"
                className="transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
            <Badge variant="outline" className="border-primary/40 text-primary">
              Google Workspace Add-on
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Translate G Sheet TM
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Convert entire Google Sheets into 100+ languages in just a few
              clicks—no manual copy-paste, no context switching.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" disabled={!googleWorkspacePublishedURL}>
                <Link
                  href={primaryCtaHref}
                  target={googleWorkspacePublishedURL ? "_blank" : undefined}
                >
                  Install the add-on
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm md:grid-cols-3">
              {featureHighlights.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-xl">
            <iframe
              src="https://www.loom.com/embed/f2a17eac3d8e4019a0025fd9b0a3c524?sid=e50793f5-35b5-46c0-ac05-3a4f0669e6b3"
              title="Translate G Sheet TM demo"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/70 py-16 md:py-20">
        <div className="container flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Stay in touch
            </p>
            <h3 className="text-3xl font-semibold text-foreground">
              Shadab · Builder & Product Engineer
            </h3>
            <p className="text-muted-foreground">
              Have a question about the add-on or want to collaborate?
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            {socialLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
