import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { socialLinks } from "@/data/social-links";

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

export default function TranslateGSheetTMPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 text-slate-900">
      <div className="space-y-10">
        <header className="space-y-4 text-center">
          <Image
            src="/tgs-favicon.ico"
            alt="Translate G Sheet TM logo"
            width={64}
            height={64}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold">Translate G Sheet TM</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Translate Google Sheets in 100+ languages directly from your
            spreadsheet sidebar.
          </p>
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
            </Link>{" "}
            is a Google Workspace add-on that translates the contents of your
            sheets into more than one hundred languages without leaving the
            document.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          <p className="text-base leading-relaxed text-slate-600">
            Review how we handle your data in the{" "}
            <Link
              href="/translategsheettm/privacy"
              className="text-blue-600 underline"
            >
              privacy policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Screenshots</h2>
          <div className="grid gap-6">
            <figure className="overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-1">
              <Image
                src="/Demo-Translate-G-Sheet-TM-Google-Sheets.png"
                alt="Translate G Sheet TM screenshot"
                width={1200}
                height={800}
                className="rounded-[28px]"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-1">
              <Image
                src="/Demo-Translate-G-Sheet-TM-Google-Sheets-1.png"
                alt="Translate G Sheet TM screenshot"
                width={1200}
                height={800}
                className="rounded-[28px]"
              />
            </figure>
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
            <li>
              Select the columns you want translated and choose your target
              languages.
            </li>
          </ol>
          <div className="relative w-full overflow-hidden rounded-2xl pt-[56.25%]">
            <iframe
              src="https://www.loom.com/embed/f2a17eac3d8e4019a0025fd9b0a3c524?sid=e50793f5-35b5-46c0-ac05-3a4f0669e6b3"
              title="Translate G Sheet TM demo"
              className="absolute inset-0 h-full w-full rounded-2xl border-0"
              allowFullScreen
            />
          </div>
        </section>

        <section className="space-y-4">
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
        </section>
      </div>
    </main>
  );
}
