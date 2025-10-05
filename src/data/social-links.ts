import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://twitter.com/Shadabshs",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://www.linkedin.com/in/md-shadab-alam/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/shadab14meb346",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:shadab14meb346@gmail.com?subject=Let%27s%20work%20together",
    label: "Email",
    icon: Mail,
  },
];
