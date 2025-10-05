import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { heroContent } from "@/data/hero";
import { cn } from "@/lib/utils";
import { sen } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Md Shadab Alam | Full Stack Developer",
  description: heroContent.description,
  openGraph: {
    title: "Md Shadab Alam | Full Stack Developer",
    description: heroContent.description,
    type: "website",
    url: "https://www.mohdshadab.com/",
    images: [
      {
        url: "https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Shadab Alam | Full Stack Developer",
    description: heroContent.description,
    images: [
      "https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground",
          sen.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
