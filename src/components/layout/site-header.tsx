"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Side Projects", href: "#side-projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [activeId, setActiveId] = useState<string>("#about");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = `#${visible[0].target.id}`;
          setActiveId(id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.3, 0.6, 1],
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.slice(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isMobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="#about"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground"
        >
          SHADAB
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeId === item.href
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="sm" variant="outline">
            <Link href="#contact">Let's talk</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 lg:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
      {isMobileOpen ? (
        <div className="border-t border-border/60 bg-background/95 shadow-lg lg:hidden">
          <nav className="container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeId === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              variant="outline"
              className="mt-2"
              onClick={() => setIsMobileOpen(false)}
            >
              <Link href="#contact">Let's talk</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
