import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { socialLinks } from "@/data/social-links";

const seoImage =
  "https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png";

export const metadata: Metadata = {
  title: "Translate G Sheet TM | Terms of Service",
  description:
    "Terms of service for the Translate G Sheet TM Google Workspace add-on.",
  openGraph: {
    title: "Translate G Sheet TM | Terms of Service",
    description:
      "Terms of service for the Translate G Sheet TM Google Workspace add-on.",
    type: "article",
    images: [{ url: seoImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translate G Sheet TM | Terms of Service",
    description:
      "Terms of service for the Translate G Sheet TM Google Workspace add-on.",
    images: [seoImage],
  },
};

const googleWorkspacePublishedURL = "";

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-900">
      <article className="space-y-10">
        <header className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Translate G Sheet TM
          </p>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            What is Translate G Sheet TM?
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            <Link
              href={googleWorkspacePublishedURL}
              className="text-blue-600 underline"
            >
              Translate G Sheet TM
            </Link>
            is a Google Workspace add-on that translates the contents of your
            spreadsheets into more than 100 languages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          <p className="text-base leading-relaxed text-slate-600">
            Please review the
            <Link
              href="/translategsheettm/privacy"
              className="text-blue-600 underline"
            >
              privacy policy
            </Link>
            for details on data handling.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Screenshots</h2>
          <div className="grid gap-6">
            <Image
              src="/screely-1639572723280.png"
              alt="Translate G Sheet TM screenshot"
              width={1200}
              height={800}
              className="rounded-2xl border border-slate-200"
            />
            <Image
              src="/screely-1639572909567.png"
              alt="Translate G Sheet TM screenshot"
              width={1200}
              height={800}
              className="rounded-2xl border border-slate-200"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-slate-600">
            <li>Install the add-on from the Google Workspace Marketplace.</li>
            <li>
              An icon appears in the sidebar—click it to launch the Translate
              panel.
            </li>
            <li>Select columns and target languages to translate your data.</li>
          </ol>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Image
              src="/demo translation sheet - Google Sheets (1).gif"
              alt="Translate G Sheet TM walkthrough"
              width={1200}
              height={800}
              className="w-full"
            />
          </div>
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
