"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";
// import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/layout/site-footer";

// const metadata: Metadata = {
//   title: "Products & Experiments | Shadab",
//   description:
//     "A portfolio of products, experiments, and side projects shipped by Shadab — spanning Chrome extensions, Slack apps, SaaS tools, and acquired products.",
//   openGraph: {
//     title: "Products & Experiments | Shadab",
//     description:
//       "Explore the archive of products and experiments that Shadab has designed, engineered, and shipped.",
//     type: "website",
//   },
//   twitter: {
//     card: "summary",
//     title: "Products & Experiments | Shadab",
//     description:
//       "Chrome extensions, Slack apps, SaaS experiments, and acquired side projects by Shadab.",
//   },
// };

const statusStyles: Record<string, string> = {
  live: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30",
  prototype: "bg-amber-500/10 text-amber-500 border border-amber-500/30",
  paused: "bg-orange-500/10 text-orange-500 border border-orange-500/30",
  dropped: "bg-slate-500/10 text-slate-500 border border-slate-500/30",
  failed: "bg-red-500/10 text-red-500 border border-red-500/30",
  acquired: "bg-purple-500/10 text-purple-500 border border-purple-500/30",
  poc: "bg-blue-500/10 text-blue-500 border border-blue-500/30",
  closed: "bg-rose-500/10 text-rose-500 border border-rose-500/30",
  idea: "bg-sky-500/10 text-sky-500 border border-sky-500/30",
};

const statusLabel: Record<string, string> = {
  live: "Live",
  prototype: "Prototype",
  paused: "Paused",
  dropped: "Dropped",
  failed: "Failed",
  acquired: "Acquired",
  poc: "POC",
  closed: "Closed",
  idea: "Idea Stage",
};

export default function MyProductsPage() {
  const sortedProducts = useMemo(
    () =>
      [...products].sort((a, b) => {
        const order = [
          "live",
          "acquired",
          "prototype",
          "paused",
          "poc",
          "idea",
          "closed",
          "failed",
          "dropped",
        ];
        return order.indexOf(a.status) - order.indexOf(b.status);
      }),
    []
  );

  const tabs = useMemo(() => {
    const uniqueTypes = Array.from(
      new Set(products.map((product) => product.type))
    );
    const orderedTypes = ["Product", "Side-Project", ...uniqueTypes].filter(
      (value, index, array) => array.indexOf(value) === index
    );

    return [
      { id: "all", label: "All", type: undefined as string | undefined },
      ...orderedTypes.map((type) => ({
        id: type.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        label: type,
        type,
      })),
    ];
  }, []);

  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "all");

  const activeType = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.type,
    [tabs, activeTab]
  );

  const filteredProducts = useMemo(
    () =>
      sortedProducts.filter((product) =>
        activeType ? product.type === activeType : true
      ),
    [sortedProducts, activeType]
  );

  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border/60 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] via-background to-[hsl(var(--hero-gradient-to))]">
        <div className="container space-y-6 py-16 md:py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            My Products Portfolio
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Experiments, products, and lessons from the trenches
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            A living archive of everything I've shipped—from Chrome extensions
            and Slack apps to SaaS experiments and sold side projects. Each card
            captures the journey, the impact, and the insight I carried forward.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/">Back to portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-16 md:py-20">
        <div className="border-b border-border/60 pb-1">
          <div
            className="flex gap-6 text-sm font-medium text-muted-foreground"
            role="tablist"
            aria-label="Filter products by type"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    "relative pb-3 transition-colors hover:text-foreground focus-visible:outline-none",
                    isActive && "text-foreground"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-primary/60 transition-opacity",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const statusClass = statusStyles[product.status] ?? statusStyles.live;

  const primaryBullets = [
    { label: "Stage", value: product.stageSummary },
    { label: "Problem", value: product.problem },
    { label: "Solution", value: product.solution },
    // { label: "Role", value: product.role },
    { label: "Stack", value: product.stack },
    product.users ? { label: "Users / Traction", value: product.users } : null,
    product.revenueOutcome
      ? { label: "Revenue / Outcome", value: product.revenueOutcome }
      : null,
    product.highlights.length
      ? {
          label: "Key Highlights",
          value: product.highlights,
          isList: true,
        }
      : null,
  ].filter(Boolean) as Array<{
    label: string;
    value: string | string[];
    isList?: boolean;
  }>;

  const previewBullets = primaryBullets.slice(0, 3);
  const additionalBullets = primaryBullets.slice(3);

  const secondaryBullets = [
    { label: "Challenges", value: product.challenges },
    { label: "Learnings", value: product.learnings },
    { label: "Skills Demonstrated", value: product.skills },
  ];

  const linkButtons = [
    product.website
      ? {
          label: "Explore",
          href: product.website,
        }
      : null,
    ...(product.links ?? []),
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 border-dashed bg-card/80 shadow-sm transition hover:-translate-y-1 hover:border-primary/40">
      {product.video ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60">
          <video
            src={product.video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster={product.image}
          />
        </div>
      ) : product.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 border-b border-border/60 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className={cn("text-xs font-semibold", statusClass)}>
            {statusLabel[product.status] ?? product.status}
          </Badge>
          <Badge variant="muted" className="text-xs font-semibold">
            {product.category}
          </Badge>
          <Badge variant="muted" className="text-xs font-semibold">
            {product.timeline}
          </Badge>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            {product.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
          {previewBullets.map((bullet) => (
            <li key={bullet.label} className="space-y-1">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                {bullet.label}
              </span>
              {Array.isArray(bullet.value) ? (
                <ul className="list-disc space-y-1 pl-4 text-foreground/90">
                  {bullet.value.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-foreground/90">{bullet.value}</p>
              )}
            </li>
          ))}
          {expanded
            ? additionalBullets.map((bullet) => (
                <li key={bullet.label} className="space-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                    {bullet.label}
                  </span>
                  {Array.isArray(bullet.value) ? (
                    <ul className="list-disc space-y-1 pl-4 text-foreground/90">
                      {bullet.value.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground/90">{bullet.value}</p>
                  )}
                </li>
              ))
            : null}
          {expanded
            ? secondaryBullets
                .filter((bullet) => Boolean(bullet.value))
                .map((bullet) => (
                  <li key={bullet.label} className="space-y-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                      {bullet.label}
                    </span>
                    <p className="text-foreground/90">{bullet.value}</p>
                  </li>
                ))
            : null}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border/60 px-6 py-4">
        <div className="flex flex-wrap items-center gap-3">
          {linkButtons.map((link) => (
            <Button
              key={`${product.name}-${link.label}`}
              asChild
              variant="link"
              className="px-0 text-sm font-semibold"
            >
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label} →
              </Link>
            </Button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="px-0 text-sm"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Hide details" : "Read more"}
        </Button>
      </div>
    </article>
  );
}
