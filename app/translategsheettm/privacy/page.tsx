import Link from "next/link";
import type { Metadata } from "next";

import { socialLinks } from "@/data/social-links";

const seoImage =
  "https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png";

export const metadata: Metadata = {
  title: "Translate G Sheet TM | Privacy Policy",
  description:
    "Privacy policy for the Translate G Sheet TM Google Workspace add-on.",
  openGraph: {
    title: "Translate G Sheet TM | Privacy Policy",
    description:
      "Privacy policy for the Translate G Sheet TM Google Workspace add-on.",
    type: "article",
    images: [{ url: seoImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translate G Sheet TM | Privacy Policy",
    description:
      "Privacy policy for the Translate G Sheet TM Google Workspace add-on.",
    images: [seoImage],
  },
};

const googleWorkspacePublishedURL = "";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16 text-slate-900">
      <article className="space-y-8">
        <header className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Translate G Sheet TM
          </p>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-slate-500">
            Effective from December 9, 2021
          </p>
        </header>

        <p className="text-base leading-relaxed text-slate-600">
          This policy explains how
          <Link
            href={googleWorkspacePublishedURL}
            className="text-blue-600 underline"
          >
            {" Translate G Sheet TM "}
          </Link>
          collects, uses, and protects information when you use the add-on. We
          are committed to safeguarding your privacy and will update this
          document whenever our approach changes.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What we collect</h2>
          <p className="text-base leading-relaxed text-slate-600">
            We may collect the following information:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base text-slate-600">
            <li>Email address</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">How we use information</h2>
          <p className="text-base leading-relaxed text-slate-600">
            Information is used only to operate and improve the add-on:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base text-slate-600">
            <li>Maintain internal records.</li>
            <li>Improve the quality of the product and its services.</li>
            <li>Track whether usage limits have been reached.</li>
            <li className="font-semibold text-slate-700">
              We will never sell or share your information.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Quota limitation</h2>
          <p className="text-base leading-relaxed text-slate-600">
            Every user has an allotted quota that limits the number of
            translations within a rolling 24-hour window.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Security</h2>
          <p className="text-base leading-relaxed text-slate-600">
            We implement physical, electronic, and managerial safeguards to keep
            your information secure and prevent unauthorized access.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="text-base leading-relaxed text-slate-600">
            <Link
              href={googleWorkspacePublishedURL}
              className="text-blue-600 underline"
            >
              Translate G Sheet TM
            </Link>
            does not use cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Links to other websites</h2>
          <p className="text-base leading-relaxed text-slate-600">
            The add-on and its landing pages do not include external links
            beyond those explicitly listed.
          </p>
        </section>

        <footer className="space-y-4">
          <p className="text-lg font-semibold text-slate-700">Shadab</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {socialLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="text-slate-500 transition-colors hover:text-blue-600"
              >
                {label}
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </main>
  );
}
