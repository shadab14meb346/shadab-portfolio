import Link from "next/link";

import { socialLinks } from "@/data/social-links";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-card/70 py-16">
      <div className="container flex flex-col gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Let's Talk
          </p>
          <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Feel free to reach out!
          </h3>
          <p className="text-muted-foreground">
            Available for partnerships, mentorship, product engineering, and
            fractional leadership roles.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Md Shadab Alam. Crafted with Next.js
            14 & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
