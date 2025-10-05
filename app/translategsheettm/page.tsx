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
            <Badge variant="outline" className="border-primary/40 text-primary">
              Google Workspace Add-on
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Translate G Sheet TM
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Convert entire Google Sheets into 100+ languages in just a few clicks—no manual copy-paste, no context switching.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" disabled={!googleWorkspacePublishedURL}>
                <Link href={primaryCtaHref} target={googleWorkspacePublishedURL ? "_blank" : undefined}>
                  Install the add-on
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/translategsheettm/privacy">View privacy policy</Link>
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
          <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-xl">
            <Image
              src="/Demo-Translate-G-Sheet-TM-Google-Sheets.png"
              alt="Screenshot of Translate G Sheet TM"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-16 md:grid-cols-[minmax(0,0.9fr)_1fr] md:py-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Translate entire spreadsheets without manual busywork
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Translate G Sheet TM is the fastest way to localize your spreadsheet content. Whether you\'re prepping marketing assets, product catalogs, or localization QA, the add-on keeps you working inside Google Sheets.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Click the add-on, choose your source column and target locales, then let it populate translated cells—keeping your original data untouched.
          </p>
        </div>
        <div className="grid gap-4">
          <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <Image
              src="/Demo-Translate-G-Sheet-TM-Google-Sheets-1.png"
              alt="Translate G Sheet TM sidebar"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Your translation workflow in three steps
            </h2>
            <ol className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {workflowSteps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg">
            <iframe
              src="https://www.loom.com/embed/f2a17eac3d8e4019a0025fd9b0a3c524?sid=e50793f5-35b5-46c0-ac05-3a4f0669e6b3"
              title="Translate G Sheet TM demo"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
            <div className="pt-[56.25%]" aria-hidden />
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          Common questions
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <HoverCard key={faq.question}>
              <HoverCardTrigger asChild>
                <div className="cursor-pointer rounded-2xl border border-border/60 bg-card/80 p-6 transition hover:-translate-y-1 hover:border-primary/40">
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Hover to reveal answer
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="max-w-sm text-sm leading-relaxed">
                {faq.answer}
              </HoverCardContent>
            </HoverCard>
          ))}
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
